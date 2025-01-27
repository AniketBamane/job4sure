const mongoose = require('mongoose');

// Define the Video schema
const videoSchema = new mongoose.Schema(
  {
    videoUrl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      required: true,
      enum: ["react","node","express","mongodb","postgresql","frontend","backend","ai","ml","full-stack-developer","data-scientist","data-analyst"], // Add more types as needed
      default: "react",
    },
    createdAt: {
      type: Date,
      default: Date.now, // Automatically set current date/time
    },
    updatedAt: {
      type: Date,
      default: Date.now, // Automatically set current date/time
    },
  },
 
);


const Video = mongoose.model.Interview || mongoose.model("Interview", videoSchema);

module.exports = Video;
