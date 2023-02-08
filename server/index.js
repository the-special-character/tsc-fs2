const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const formRoute = require('./routes/form');




const app = express();
app.use(express.json());
app.use(cors());

// app.use('/api',questionRoute);
app.use('/api', formRoute);

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(
      'mongodb://127.0.0.1:27017/Contact',
      {
        useNewUrlParser: true,
      },
    );
    console.log('database connected...');
  } catch (error) {
    console.log(error);
  }
};
connectDB();

// const port = process.env.PORT || 3004;

app.listen(3004, 'localhost', () => {
  console.log('server started on port 3004 ');
});
