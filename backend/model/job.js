const mongoose = require('mongoose');

// Define the Job schema
const jobSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    default: "Unpaid", // Default if not provided
  },
  jobSummary: {
    type: String,
    required: true,
  },
  responsibilities: {
    type: [String], // Array of strings
    required: true,
  },
  requiredSkills: {
    type: [String], // Array of strings
    required: true,
  },
  type: {
    type: String,
    enum: ["Internship", "Full-Time", "Part-Time"], // Define possible job types
    default: "Internship",
  },
  experience: {
    type: String,
    default: "All", // Default value
  },
  department: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    default: "", // Default empty string if not provided
  },
  email: {
    type: String,
    required: true,
    match: [/.+@.+\..+/, "Please enter a valid email address"], // Email validation
  },
  contacts: {
    type: [String], // Array of phone numbers as strings
    required: true,
  },
  paid: {
    type: Boolean,
    default: false, // Default value
  },
  jobtype: {
    type: String,
    default: "it",
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically set to the current date/time
  },
  updatedAt: {
    type: Date,
    default: Date.now, // Automatically set to the current date/time when the document is updated
  },
});

// Create the Job model
const Job =mongoose.models.Job || mongoose.model('Job', jobSchema);

module.exports = Job;
