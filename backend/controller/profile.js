import Profile from "../model/profile";

export const createOrGetUser = async (req, res) => {
  const { userId, firstName, lastName, imageUrl, phoneNumber, email } = req.body;

  try {
    // Try to find the user profile by authId
    let profileInfo = await Profile.findOne({ authId: userId });

    // If the profile exists, return it
    if (profileInfo) {
      return res.status(200).json({
        success: true,
        profile: profileInfo,
      });
    } else {
      // If no profile exists, create a new one
      profileInfo = await Profile.create({
        authId: userId,
        name: `${firstName} ${lastName}`,
        email: email,
        location: '',  // Default empty location
        about: '',     // Default empty about
        contactInformation: {
          email: email,
          phone: phoneNumber
        },
        projects: [],
        skills: [],
        certifications: [],
        education: [],
        experience: [],
        socialLinks: {},
        image: imageUrl,
      });

      return res.status(201).json({
        success: true,
        profile: profileInfo,
      });
    }
  } catch (err) {
    console.error('Error creating or fetching user profile:', err);
    return res.status(500).json({
      success: false,
      message: 'Failed to create or fetch user profile. Please try again.',
    });
  }
};



export const updateProfile = async (req, res) => {
  const { name, email, resumeLink, linkedIn, phoneNumber, bio, education, project, experience, imageUrl, userId } = req.body;

  try {
    // Find the user profile by authId and update it
    const updatedProfile = await Profile.findOneAndUpdate(
      { authId: userId },
      {
        name,
        email,
        resume: resumeLink,       // Store resume URL
        location: '',             // You might want to capture this field in formData if necessary
        about: bio,               // Set the bio from formData
        contactInformation: {
          email: email,
          phone: phoneNumber,
        },
        projects: project,        // Set the projects from formData
        experience: experience,   // Set the experience from formData
        education: education,     // Set the education from formData
        image: imageUrl,          // Update the profile image URL
        socialLinks: {
          linkedin: linkedIn,
          github: '',             // If there's a GitHub link in formData, use it here
          portfolio: '',          // If there's a portfolio link, use it here
        },
      },
      { new: true }  // Return the updated profile
    );

    if (!updatedProfile) {
      return res.status(404).json({
        success: false,
        message: 'Profile not found or update failed',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Profile updated successfully!',
      profile: updatedProfile,
    });
  } catch (error) {
    console.error('Error updating profile:', error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createOrGetUser,
  updateProfile,
}