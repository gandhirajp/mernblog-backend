require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const connectDatabase = require('./config/dbConnect');
const userRoute = require('./routes/userRoute');
const BlogPostRoute = require('./routes/blogPostRoute');
const { application } = require('express');

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json({extended: true}));

app.use('/api', userRoute);
app.use('/api', BlogPostRoute); 

connectDatabase() 

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> {console.log("Server is running on port", PORT)})
