require('dotenv').config(); 

const express = require('express');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
const { body, validationResult } = require('express-validator');

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
sgMail.setApiKey('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');//Nigga use .ENV file to store this api KEY
//I did this in a hurry juss put in ENV for Security, NO ONE EXPOSES THIS 

app.get('/', (req, res) => {
  res.send('Hello World!'); 
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
    to: 'andymelvin56@gmail.com', 
    from: 'remyshema20@gmail.com', 
    subject: 'New Form Submission',
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong.Message:</strong> ${message}</p>
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
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
