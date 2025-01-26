const Preference = require("../model/preference");

// Controller function to create a new preference
const createPreference = async (req, res) => {
  try {
    const { name, job, experience, joinTime, email, linkedin, resume } = req.body;

    // Validate input data
    if (!name || !job || !experience || !joinTime || !email || !resume) {
      return res.status(400).json({ message: 'Please fill in all required fields' });
    }

    // Create a new preference instance
    const newPreference = new Preference({
      name,
      job,
      experience,
      joinTime,
      email,
      linkedin,
      resume,
    });

    // Save to the database
    await newPreference.save();

    return res.status(201).json({
      message: 'Preference created successfully',
      preference: newPreference,
    });
  } catch (error) {
    console.error('Error creating preference:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  createPreference,
};
