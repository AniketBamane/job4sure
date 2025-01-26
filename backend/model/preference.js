const mongoose = require("mongoose");

const preference = new mongoose.Schema({
  name: { type: String, required: true },
  job: { type: String, required: true },
  experience: { type: Number, required: true },
  joinTime: { type: String, required: true },
  email: { type: String, required: true },
  linkedin: { type: String },
  resume: { type: String, required: true }, 
}, { timestamps: true });


module.exports = mongoose.models.Preference || mongoose.model("Preference", preference);