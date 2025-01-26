const Applicant = require('../model/applicant'); // Import your applicant model
const Job = require('../model/job');
const { sendApplicantConfirmationEmail } = require('../helper/applicant');

// Controller function to create a new applicant and send confirmation email
const createApplicant = async (req, res) => {
  try {
    const { applicantId, fullName, resume, job, email } = req.body;

    // Validate the incoming data (you can enhance the validation as needed)
    if (!applicantId || !fullName || !resume || !job || !email) {
      return res.status(400).json({ message: 'Please provide all the required fields' });
    }

    const jobDetails = await Job.findById(job)

    // Create a new applicant in the database
    const newApplicant = new Applicant({
      applicantId,
      fullName,
      resume,
      job,
    });

    // Save the applicant to the database
    const savedApplicant = await newApplicant.save();

    // Get the job details (we assume the job ID is valid and exists in the Job model)
    const jobTitle = jobDetails.title; // Assuming the job contains a title field
    const applicationStatus = savedApplicant.status; // Get the current application status
    const company = jobDetails.company

    // Send confirmation email to the applicant
    const emailSent = await sendApplicantConfirmationEmail(fullName, email, jobTitle, applicationStatus,company);

    if (!emailSent) {
      return res.status(500).json({ message: `Error sending confirmation email to you but application is sent to ${jobDetails.company} `});
    }

    // Respond with the created applicant details
    res.status(201).json({
      message: 'Applicant created successfully and confirmation email sent.',
      applicant: savedApplicant,
    });
  } catch (error) {
    console.error('Error creating applicant:', error);
    res.status(500).json({ message: error.message });
  }
};

const getApplicationsByApplicantId = async (req, res) => {
  try {
    const { id } = req.params; // Assuming the applicantId is passed as a URL parameter

    // Find all applications with the given applicantId
    const applications = await Applicant.find({ applicantId: id }).populate("job");

    // If no applications are found, return a 404 response
    if (applications.length === 0) {
      return res.status(200).json({
        success: true,
        data:[],
      });
    }

    // Return the applications
    res.status(200).json({
      success: true,
      data: applications,
    });
  } catch (error) {
    console.error("Error fetching applications:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = {
  createApplicant,
  getApplicationsByApplicantId,
};
