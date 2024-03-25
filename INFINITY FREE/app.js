// THIS WILL HANDLE THE CONTACT FORM SUBMISSIONS

// There are 3 packages I had to install so as to work properly while running. They are as follows
/*
 

 1) npm install express


 2) npm install body-parser


 3) npm install dotenv


*/


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON and urlencoded form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enable CORS
app.use(cors());

// Define route handler for the root URL ("/")
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Handle form submission
app.post('/submit', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    // Do something with the submitted data (e.g., send it via email, save it to a database)
    console.log('Received form submission:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Send a response back to the client
    res.send('Form submitted successfully!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
