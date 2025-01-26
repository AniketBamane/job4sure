const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
  {
    authId:{
      type:String,
      default:""
    },
    name: {
      type: String,
      required: true,
    },
    resume:{
      type: String,
      default: ""
    }
    ,
    image:String,
    
    location: {
      type: String,
      required: true,
    },
    about: {
      type: String,
    },
    contactInformation: {
      email: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
    },
    projects: [
      {
        title: {
          type: String,
          required: true,
        },
        description: {
          type: String,
        },
        technologies: [String],
        image:String,
      },
    ],
    skills: [String],
    certifications: [
      {
        title: {
          type: String,
        },
        issuedBy: {
          type: String,
        },
        issuedDate: {
          type: String,
        },
        image:String,

      },
    ],
    education: [
      {
        institution: {
          type: String,
          required: true,
        },
        degree: {
          type: String,
        },
        year: {
          type: String,
        },
        cgpa: {
          type: Number,
        },
        image:String,

      },
    ],
    experience: [
      {
        company: {
          type: String,
        },
        role: {
          type: String,
        },
        duration: {
          type: String,
        },
        description: {
          type: String,
        },
        image:String,

      },
    ],
    socialLinks: {
      linkedin: {
        type: String,
      },
      github: {
        type: String,
      },
      portfolio: {
        type: String,
      },
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt fields
);

const Profile =mongoose.models.Profile || mongoose.model("Profile", profileSchema);

module.exports = Profile;
