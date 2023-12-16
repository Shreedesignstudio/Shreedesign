
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'Gmail', 
    auth: {
      user: process.env.GMAIL_EMAIL, 
      pass: process.env.GMAIL_PASSWORD, 
    },
});

module.exports = {
  sendEmail: async (name, email, mobile, message) => {
    try {
      // Email content
      const mailOptions = {
        from: 'your-email@gmail.com',
        to: 'contactshreedesignstudio@gmail.com', 
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nMessage: ${message}`,
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  },
};
