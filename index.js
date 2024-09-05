const express = require('express');
const app = express();
const connectDB = require('./config/db');

connectDB();


app.use(express.json());


app.use('/mentor', require('./routes/mentorRoutes'));
app.use('/student', require('./routes/studentRoutes'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
