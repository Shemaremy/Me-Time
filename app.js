require('dotenv').config(); // Load environment variables

const express = require('express');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
const { body, validationResult } = require('express-validator');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON and urlencoded form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set SendGrid API key from environment variable
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

// Define route handler for the root URL ("/")
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Form validation middleware
const validateForm = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').trim().isEmail().withMessage('Invalid email'),
  body('message').trim().notEmpty().withMessage('Message is required')
];

// Handle form submission
app.post('/submit', validateForm, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, message } = req.body;

  const msg = {
    to: 'shemaremy2003@gmail.com',
    from: 'remyshema20@gmail.com',
    subject: 'New Form Submission',
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `
  };

  sgMail.send(msg)
    .then(() => {
      console.log('Email sent successfully');
      res.json({ success: true, message: 'Form submitted successfully and email sent!' });
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, message: 'Error sending email' });
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
