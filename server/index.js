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

app.use(express.json());

app.get('/courses', (req, res) => {
  const data = Object.keys(req.query);
  if (data.length === 0) {
    res.send(courses);
    return true;
  }

  const filteredRecord = courses.filter(x => {
    let result = true;

    for (let i = 0; i < data.length; i += 1) {
      const element = data[i];
      result &&= x[element] === req.query[element];
    }

    return result;
  });

  res.send(filteredRecord);
  return true;
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
  console.log(req.body);

  const newData = { ...req.body, id: courses.length + 1 };

  courses.push(newData);

  res.send(newData);
});

app.put('/courses/:id', (req, res) => {
  const { id } = req.params;

  const index = courses.findIndex(x => x.id === Number(id));

  if (index === -1) {
    res.status(400).send('recod not found');
  }

  const updatedRecord = { ...req.body, id: Number(id) };

  courses.splice(index, 1, updatedRecord);

  res.send(updatedRecord);
});

app.patch('/courses/:id', (req, res) => {
  const { id } = req.params;

  const index = courses.findIndex(x => x.id === Number(id));

  const updatedRecord = { ...courses[index], ...req.body };

  courses.splice(index, 1, updatedRecord);

  res.send(updatedRecord);
});

app.delete('/courses/:id', (req, res) => {
  const { id } = req.params;

  const index = courses.findIndex(x => x.id === Number(id));

  courses.splice(index, 1);

  res.send('record deleted');
});

app.listen('3004', 'localhost', () => {
  console.log('server started');
});
