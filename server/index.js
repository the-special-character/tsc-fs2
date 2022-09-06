const express = require('express');

const app = express();

const courses = [
  {
    id: 1,
    courseName: 'react',
    trainerName: 'Yagnesh',
  },
  {
    id: 2,
    courseName: 'node',
    trainerName: 'Yagnesh',
  },
  {
    id: 3,
    courseName: 'react-native',
    trainerName: 'Yagnesh',
  },
  {
    id: 4,
    courseName: 'Flutter',
    trainerName: 'Vraj',
  },
];

app.get('/courses', (req, res) => {
  if (!Object.keys(req.query).length) {
    res.send(courses);
    return;
  }

  const records = courses.filter(course => {
    let result = true;

    const arr = Object.keys(req.query);

    for (let i = 0; i < arr.length; i += 1) {
      const key = arr[i];
      result = result && course[key] == req.query[key];
    }

    return result;
  });

  res.send(records);
});

app.get('/courses/:id', (req, res) => {
  const { id } = req.params;
  const record = courses.find(
    course => course.id === Number(id),
  );
  if (!record) {
    res.status(400).send('record not found');
  }
  res.send(record);
});

app.listen('3004', 'localhost', () => {
  console.log('server started');
});
