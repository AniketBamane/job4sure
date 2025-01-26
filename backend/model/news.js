const mongoose = require('mongoose');

// Define the News schema
const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [200, 'Title cannot exceed 200 characters'], // You can adjust this as needed
  },
  companyName: {
    type: String,
    required: [true, 'Company name is required'], // Publisher's name (e.g., Business Insider, India Today)
    trim: true,
  },
  date: {
    type: Date,
    required: [true, 'Date of publication is required'],
    default: Date.now, // Automatically set to the current date/time
  },
  shortIntro: {
    type: String,
    required: [true, 'Short introduction is required'],
    maxlength: [500, 'Intro cannot exceed 500 characters'],
  },
  newsLink: {
    type: String,
    required: [true, 'News link is required'],
    match: [/^https?:\/\/[^\s]+$/, 'Please provide a valid URL'], // Simple regex for URL validation
  },
  tags: {
    type: [String], // Array of tags for categorization
    required: true,
    validate: {
      validator: function (tags) {
        return tags.length > 0; // Ensure there is at least one tag
      },
      message: 'At least one tag is required',
    },
  },
}, { timestamps: true }); // Add createdAt and updatedAt fields automatically

// Create the News model
const News = mongoose.models.News || mongoose.model('News', newsSchema);

module.exports = News;
