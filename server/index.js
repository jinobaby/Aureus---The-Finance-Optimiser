//modules
var express = require('express');
var mongoose = require('mongoose');
var dotenv = require('dotenv');
var cors = require('cors');

var app = express();

// Load environment variables from .env file
dotenv.config();

//middlewares
app.use(express.json());
app.use(cors());

// import routes
var adminRouter = require('./routes/AdminRouter');

// register routes
app.use('/Admin', adminRouter);

// connect to MongoDB
mongoose.connect(process.env.MongoDB_URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

// Start the server on port 5000
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});