const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const config = require('config');
const coursesRoute = require('./routes/courses');
const questionRoute = require('./routes/question');

dotenv.config({
  override: true,
});

const dbConfig = config.get('Customer.dbConfig');

console.log(dbConfig);

const app = express();

app.use(express.json());

// mongoose.connect('mongodb://localhost:27017/quizApp',{
//   keepAlive:true,
// });
// config.MONGOOSE = mongoose.connect('mongodb://localhost:27017/quizApp',{
//     keepAlive:true,
//    });

const connectdb = async () => {
  try {
    await mongoose.connect(
      'mongodb://127.0.0.1:27017/quizApp',
    );
    console.log('database connected....');
  } catch (error) {
    console.log(error);
  } 
};

connectdb();

app.use('/api/courses', coursesRoute);
app.use('/api/questions', questionRoute);

console.log(process.env.AWS_KEY);

const port = process.env.PORT || 3004;

app.listen(port, 'localhost', () => {
  console.log(`server started on port ${port}`);
});