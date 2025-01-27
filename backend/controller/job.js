const Job = require("../model/job");

const fetchJobs = async (req, res) => {
  try {
    const { department, salary, jobType, search, limit = 10, page = 1 } = req.query;

    const filter = {};

    if (department) {
      filter.department = department;
    }

    if (salary) {
      filter.paid = salary === "paid";
    }

    if (jobType) {
      filter.type = jobType;
    }

    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: "i" } },
        { company: { $regex: search, $options: "i" } },
      ];
    }

    // Convert limit and page to numbers for proper pagination
    const parsedLimit = parseInt(limit, 10);
    const parsedPage = parseInt(page, 10);

    // Fetch jobs with filters, limit, and skip (for pagination)
    const jobs = await Job.find(filter)
      .limit(parsedLimit)
      .skip(parsedLimit * (parsedPage - 1));

    // Count total jobs matching the filter for pagination metadata
    const totalJobs = await Job.countDocuments(filter);

    res.status(200).json({
      success: true,
      data: jobs,
      pagination: {
        totalJobs,
        currentPage: parsedPage,
        totalPages: Math.ceil(totalJobs / parsedLimit),
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching jobs.",
      error: error.message,
    });
  }
};


const fetchJobById = async (req, res) => {
  try {
    // Extract the job ID from the request parameters
    const { id } = req.params;

    // Fetch the job from the database using the provided ID
    const job = await Job.findById(id);

    // Check if the job exists
    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    // Respond with the job data if found
    res.status(200).json({
      success: true,
      data: job,
    });
  } catch (error) {
    // Handle errors
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching the job.",
      error: error.message,
    });
  }
};


const getLatestJobs = async (req, res) => {
  try {
    // Fetch the latest 6 jobs, sorted by createdAt in descending order
    const latestJobs = await Job.find({})
      .sort({ createdAt: -1 }) // Sort by createdAt in descending order
      .limit(6); // Limit the results to 6 jobs

    // If no jobs are found, return an empty array
    if (latestJobs.length === 0) {
      return res.status(200).json({
        success: true,
        data: [],
        message: "No jobs found.",
      });
    }

    // Return the latest jobs
    res.status(200).json({
      success: true,
      data: latestJobs,
    });
  } catch (error) {
    console.error("Error fetching latest jobs:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};





module.exports = { fetchJobs , fetchJobById ,getLatestJobs};
