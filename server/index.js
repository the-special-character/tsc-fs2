const express = require('express');

const app = express();
const coursesRoute = require('./routes/courses');
const questionRoute = require('./routes/question');

app.use(express.json());

app.use('/api/courses', coursesRoute);
app.use('/api/questions', questionRoute);

app.listen('3004', 'localhost', () => {
  console.log('server started');
});
