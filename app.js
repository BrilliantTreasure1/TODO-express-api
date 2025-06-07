const express = require('express');
const app = express();
const PORT = 3000;
const taskRoutes = require('./routes/tasks')
const requestCounter = require('./middleware/requestCounter')
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('✅ Connected to MongoDB');
  }).catch((err) => {
    console.error('❌ MongoDB connection error:', err);
  });
  

app.use(express.json());

app.use(requestCounter);

app.use("/tasks" ,taskRoutes );

app.listen(PORT , ()=> {
    console.log(`port : ${PORT}`);
})