const mongoose = require('mongoose');

const competitionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  organizer: {
    type: String,
    required: true,
  },
  prizePool: {
    type: Number,
    required: true,
  },
  deadline: {
    type: Date,
    required: true,
  },
  participants: {
    type: Number,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  requirements: {
    type: [String],
    required: true,
  },
  rules: {
    type: [String],
    required: true,
  },
  images: {
    type: [String], // Array of image URLs
    required: true,
  },
  registrationLink:{
    type: String,
    required: true,
  }
  ,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the Competition model
const Competition = mongoose.models.Competition || mongoose.model('Competition', competitionSchema);

module.exports = Competition;