const { transporter } = require("../utils/nodemailer");

// Function to send application confirmation email to the applicant
async function sendApplicantConfirmationEmail(name, email, jobTitle, applicationStatus,company) {
  try {
    const confirmationTemplate = `
    <html>
      <body style="font-family: Arial, sans-serif; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4; border-radius: 10px;">
          <h2 style="color: #0056b3;">Hello ${name},</h2>
          <p>Thank you for applying for the position of <strong>${jobTitle}</strong> at Job4Sure. We have received your application and we have already sent it to ${company}.</p>
          
          <div style="background-color: #fff; padding: 15px; border-radius: 5px; box-shadow: 0 0 5px rgba(0,0,0,0.1);">
            <strong>Application Status:</strong>
            <p>Your application is currently <strong>${applicationStatus}</strong>.</p>
          </div>
          
          <p>We will notify you once the status of your application changes. If you have any further questions, feel free to reply to this email.</p>
          <br>
          <p>Best regards,<br>Job4Sure</p>
        </div>
      </body>
    </html>
    `;

    // Set up email data
    const mailOptions = {
      from: process.env.EMAIL,    // Sender address (environment variable)
      to: email,                  // Recipient address
      subject: `Application for ${jobTitle} sent to ${company}`, // Subject line
      html: confirmationTemplate, // HTML body content
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    
   return info
  } catch (error) {
    console.error('Error sending email:', error);
    return false; // Return false if there is an error
  }
}

module.exports = {
  sendApplicantConfirmationEmail,
};
