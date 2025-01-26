const nodemailer = require('nodemailer');

// Create a transporter using Gmail's SMTP server
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'company.placement4u@gmail.com',       // your email
    pass: process.env.APP_PASSWORD,          // the app password generated
  }
});

module.exports = {
  transporter 
}

