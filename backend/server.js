const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const dotenv = require('dotenv').config();

const app = express();
const port = 5000;

// Connect to MongoDB

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected...'))
.catch((error) => console.log("Error while connecting Database",error))

app.use(cors({
    origin: 'http://localhost:5173', // replace with your frontend URL
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Authorization', "Creation-Control", "Expires", "Pragma"]
}));

app.use(cookieParser());
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})