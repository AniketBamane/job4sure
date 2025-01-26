const { sendContactEmail } = require("../helper/contact");
const Contact = require("../model/contact")
const createContact = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Validate the contact data (basic validation)
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields (name, email, message) are required.',
      });
    }

    // Create a new contact document
    const newContact = new Contact({
      name,
      email,
      message,
    });

    // Save the new contact to the database
    await newContact.save();
    
    const emailSent =  await sendContactEmail(name,email,message);
    if (!emailSent) {
      return res.status(500).json({ message: `Error sending contact email to you but your message is received !`});
    }
    // Return a success response
    return res.status(201).json({
      success: true,
      message: 'Contact created successfully!',
      contact: newContact,
    });
  } catch (error) {
    console.error('Error creating contact:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to create contact. Please try again later.',
    });
  }
};

module.exports = {createContact};
