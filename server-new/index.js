//modules
var express = require('express');
var dotenv = require('dotenv');
var cors = require('cors');
var prisma = require('./src/config/prisma');

var app = express();

// Load environment variables from .env file
dotenv.config();

//middlewares
app.use(express.json());
app.use(cors());

// import routes
var adminRouter = require('./src/routes/AdminRouter');
var userRouter = require('./src/routes/UserRouter');

// register routes
app.use('/Admin', adminRouter);
app.use('/User', userRouter);

// Graceful shutdown
process.on('SIGINT', async () => {
    await prisma.$disconnect();
    process.exit(0);
});

process.on('SIGTERM', async () => {
    await prisma.$disconnect();
    process.exit(0);
});

// Start the server on port 5000
app.listen(5000, () => {
    console.log('Server is running on port 5000');
    console.log('Connected to PostgreSQL via Prisma');
});
