// THIS WILL HANDLE THE CONTACT FORM SUBMISSIONS

// There are 3 packages I had to install so as to work properly while running. They are as follows
/*
 

 1) npm install express


 2) npm install body-parser


 3) npm install dotenv


 4) npm install @sendgrid/mail


 5) npm install multer


 6) npm install express-validator


 7) npm install cookie-parser


 8) npm install express-session

*/

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');
const multer = require('multer');
const { body, validationResult } = require('express-validator');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON and urlencoded form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enable CORS
app.use(cors());

// Set SendGrid API key
sgMail.setApiKey('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');

// Define route handler for the root URL ("/")
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Handle form submission
app.post('/submit', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    // Send email with form data
    const msg = {
        to: 'shemaremy2003@gmail.com', // Change this to the recipient's email address
        from: 'remyshema20@gmail.com', // Use the email provided in the form submission
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
            res.send('Form submitted successfully and email sent!'+ name);
        })
        .catch((error) => {
            console.error('Error sending email:', error);
            res.status(500).send('Error sending email');
        });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
