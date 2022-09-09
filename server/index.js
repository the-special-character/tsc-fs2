const express = require('express');
const dotenv = require('dotenv');
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

app.use('/api/courses', coursesRoute);
app.use('/api/questions', questionRoute);

console.log(process.env.AWS_KEY);

const port = process.env.PORT || 3004;

app.listen(port, 'localhost', () => {
  console.log(`server started on port ${port}`);
});
