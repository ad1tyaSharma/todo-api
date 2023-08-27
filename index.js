// app.js
const express = require('express');
const app = express();
require('dotenv').config()
const mongoose = require('mongoose');
const path = require('path')
const bodyParser = require('body-parser');
const cors = require('cors');
const allowedOrigins = [process.env.FRONTEND_URL,'http://localhost:3000'];
const corsOptions ={
    origin:  allowedOrigins, 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

//middlewares
app.use(cors(corsOptions))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs'); // Set EJS as the view engine
app.set('views', path.join(__dirname, 'public')); // Set the directory for your views


// Routes
const authRouter = require('./routes/authRoutes');
const contactRouter = require('./routes/taskRoutes')
app.use('/auth', authRouter);
app.use('/task',contactRouter);
app.use((req, res, next) => {
    res.status(404).render("404.ejs");
  });

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});