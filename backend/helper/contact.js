const { transporter } = require("../utils/nodemailer");

async function sendContactEmail(name, email, message) {
  try {
    const contactTemplate = `
    <html>
      <body style="font-family: Arial, sans-serif; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4; border-radius: 10px;">
          <h2 style="color: #0056b3;">Hello ${name},</h2>
          <p>Thank you for getting in touch! We have received your message and will get back to you shortly. Below is a copy of your message:</p>
          
          <div style="background-color: #fff; padding: 15px; border-radius: 5px; box-shadow: 0 0 5px rgba(0,0,0,0.1);">
            <strong>Your Message:</strong>
            <p>${message}</p>
          </div>
          
          <p>If you have any further questions, feel free to reply to this email.</p>
          <br>
          <p>Best regards,<br>Job4Sure</p>
        </div>
      </body>
    </html>
    `;

    // Set up email data
    const mailOptions = {
      from: process.env.EMAIL,    // Sender address
      to: email,                       // Recipient address
      subject: `${name} , We Have Received Your Message`, // Subject line
      html: contactTemplate,               // HTML body content
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
  return info
  } catch (error) {
    console.error('Error sending email:', error);
    return false
  }
}


module.exports = {
  sendContactEmail,
}