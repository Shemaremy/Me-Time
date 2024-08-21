require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
const { body, validationResult } = require('express-validator');

const app = express();
const port = process.env.PORT || 1988;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Load SendGrid API key from environment variables
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
app.get('/', (req, res) => {
  res.send('Hello!');
});

const validateForm = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').trim().isEmail().withMessage('Invalid email'),
  body('message').trim().notEmpty().withMessage('Message is required')
];

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

  sgMail
    .send(msg)
    .then((response) => {
      console.log('Email sent successfully');
      res.redirect('https://remyshema.42web.io/');
    
    })
    .catch((error) => {
      console.error(error.message);
      res.status(500).send('Failed to send email');
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

