// const os = require("os")

// console.log(os.freemem());
// console.log(os.totalmem());

// const http = require("http");

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
    courseName: 'flutter',
    trainerName: 'Vraj',
  },
];

app.use(express.json);

app.get('/courses', (req, res) => {
  console.log(req.query);
  if (!Object.keys(req.query).length) {
    res.send(courses);
    return;
  }

  const records = courses.filter(course => {
    let result = true;

    const arr = Object.keys(req.query);

    for (let i = 0; i < arr.length; i += 1) {
      const key = arr[i];
      result &&= course[key] === req.query[key];
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

app.post('/courses', (req, res) => {
  const newCourse = { id: courses.length + 1, ...req.body };

  courses.push(newCourse);

  res.send('sucessfully added');
});

app.put('/courses/:id', (req, res) => {
  const { id } = req.params;

  const index = courses.findIndex(
    course => course.id === Number(id),
  );

  if (index === -1) {
    res.status(400).send('record not found');
  }

  const updatedRecord = { ...req.body, id: Number(id) };

  courses.splice(index, 1, updatedRecord);

  res.send(updatedRecord);
});

app.patch('/courses/:id', (req, res) => {
  const { id } = req.params;

  const index = courses.findIndex(
    course => course.id === Number(id),
  );

  const newData = { ...courses[index], ...req.body };

  courses.splice(index, 1, newData);

  res.send(newData);
});

app.delete('/courses/:id', (req, res) => {
  const { id } = req.params;

  const index = courses.findIndex(
    course => course.id === Number(id),
  );

  courses.splice(index, 1);

  res.send('record deleted');
});

app.listen('3004', 'localhost', () => {
  console.log('server started');
});
