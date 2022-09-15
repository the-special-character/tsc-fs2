const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const config = require('config');
const coursesRoute = require('./routes/courses');
const questionRoute = require('./routes/question');
// eslint-disable-next-line no-unused-vars
const userRoute = require('./routes/user');

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
    await mongoose.connect();
    console.log('database connected....');
  } catch (error) {
    console.log(error);
  }
};

const connectdb1 = async () => {
  try {
    await mongoose.connect(
      'mongodb://127.0.0.1:27017/Users',
    );
    console.log('database connected....');
  } catch (error) {
    console.log(error);
  }
};

connectdb();
connectdb1();

app.use('/api/courses', coursesRoute);
app.use('/api/questions', questionRoute);
app.use('/api/users', userRoute);

console.log(process.env.AWS_KEY);

const port = process.env.PORT || 3004;

app.listen(port, 'localhost', () => {
  console.log(`server started on port ${port}`);
});
