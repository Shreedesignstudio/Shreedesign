
const Contact = require('../models/Contact');
const emailService = require('../services/emailService');


exports.submitForm = async (req, res) => {
  try {
    const { name, email, mobile, message } = req.body;

   
    const contact = new Contact({ name, email, mobile, message });
    await contact.save();


    await emailService.sendEmail(name, email, mobile, message);

    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.getAllFormSubmissions = async (req, res) => {
    try {
     
      const submissions = await Contact.find();
  
      res.status(200).json(submissions);
    } catch (error) {
      console.error('Error fetching form submissions:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };