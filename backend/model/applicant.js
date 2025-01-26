const mongoose = require("mongoose");

const applicantSchema = new mongoose.Schema(
  {
    applicantId:{
      type:String,
      required:true
    },
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
      maxlength: [50, "Full name cannot exceed 50 characters"],
    },
    resume: {
      type: String, 
      required: [true, "Resume is required"],
    },
    job:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job", // Reference to the Job model
    }
    ,
    submittedAt: {
      type: Date,
      default: Date.now, // Automatically store the application submission date
    },
    status:{
      type: String,
      enum: ['pending', 'approved', 'rejected'],
      default: 'pending' 
    },
    feedback:{
      type: String,
      trim: true,
      default:""
    }
  },
  { timestamps: true } // Adds createdAt and updatedAt timestamps
);

module.exports = mongoose.models.Applicant || mongoose.model("Applicant", applicantSchema);