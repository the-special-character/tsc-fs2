// // const { create } = require('domain');
// // const { Http2ServerRequest } = require('http2');
// // const os = require('os');

// // import app from '../app';

// // console.log(os.freemem);
// // console.log(os.totalmem);

// // const server = http.createServer((req, res) => {
// //     res.statusCode = 200;
// //     res.setHeader('Content-Type', 'text/plain');
// //     res.end('Hello Devang');
// //   });
// //   console.log(server);
// //   app.put('/:id/:subid', (req, res) => {
// //     console.log(req.query);
// //     console.log(req.body);

// //   });

// // const express = require('express');

// // const app = express();

// // app.get('/', (req, res) => {
// // //   console.log(req.query);
// // //   console.log(req.body);
// // //   res.send('hello from /');
// // });
// // const express = require('express');
// // const { resetWatchers } = require('nodemon/lib/monitor/watch');
// // const app = express();

// const express = require('express');
// // const { resetWatchers } = require('nodemon/lib/monitor/watch');
// const app = express();

// const courses = [
//   {
//     id: 1,
//     courseName: 'react',
//     trainerName: 'Yagnesh',
//   },
//   {
//     id: 2,
//     courseName: 'js',
//     trainerName: 'Yagnesh',
//   },
//   {
//     id: 3,
//     courseName: 'react-native',
//     trainerName: 'vraj',
//   },
// ];

// // app.get('/courses', (req, res) => {
// //   console.log(req.query);
// //   if (!Object.keys(req.query).length) {
// //     res.send(courses);
// //     return;
// //   }
// // });

// // app.get('/courses/:id', (req, res) => {
// //   const { id } = req.params;
// //   const record = courses.find(
// //     course => course.id === Number(1),
// //   );
// //   if (!record) {
// //     res.status(400).send('record not found');
// //   }
// //   res.send(record);
// // });

// app.use(express.json());

// app.get('/courses', (req, res) => {
//   const data = Object.keys(req.query);
//   if (data.length === 0) {
//     res.send(courses);
//     return true;
//   }
//   const filteredRecord = courses.filter(x => {
//     let result = true;
//     for (let i = 0; i<data.length; i +=1){
//       const element = data[i];
//       result &&= x[element] === req.query[element];
//     }
//     return result;
//   });
//   res.send(filteredRecord);
//   return true;

// });


// app.listen('3004', 'localhost', () => {
//   console.log('server started');
// });
//


const express = require("express");

const app = express();

const courses = [
  {
    id: 1,
    courseName: "react",
    trainerName: "Devang",
  },
  {
    id: 2,
    courseName: "node",
    trainerName: "Yagnesh",
  },
  {
    id: 3,
    courseName: "react-node",
    trainerName: "Yash",
  },
  {
    id: 4,
    courseName: "python",
    trainerName: "Parth",
  },
];

app.get("/courses/:id", (req, res) => {
  const { id } = req.params;
  const record = courses.find((course) => course.id === Number(id));
  if (!record) {
    res.status(400).send("record not found");
  }
  res.send(record);
});

app.get("/courses", (req, res) => {
  const data = Object.keys(req.query);
  if (data.length === 0) {
    res.send(courses);
    return true;
  }
  const filterRecord = courses.filter((x) => {
    let result = true;

    for (let i = 0; i < data.length; i += 1) {
      const element = data[i];
      result &&= x[element] === req.query[element];
    }
    return result;
  });
  res.send(filterRecord);
  return true;
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.put("/courses/:id", (req, res) => {
  const { id } = req.params;
  
  const index = courses.findIndex(x => x.id === Number(id));
  courses.splice(index, 1, id + 1);
  const data = courses.findIndex(
    course => course.id === Number(id),
  );
  res.send(data);
});

app.listen("3004", "localhost", () => {
  console.log("server started");
});