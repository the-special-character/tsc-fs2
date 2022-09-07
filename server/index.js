// const os = require("os")

// console.log(os.freemem());
// console.log(os.totalmem());

// const http = require("http");

const express = require("express");

const app = express();

const courses = [
  {
    id: 1,
    courseName: "react",
    trainerName: "Yash",
  },
  {
    id: 2,
    courseName: "node",
    trainerName: "Yash",
  },
  {
    id: 3,
    courseName: "react-node",
    trainerName: "Yash",
  },
  {
    id: 4,
    courseName: "python",
    trainerName: "Devarsh",
  },
];

// app.get("/courses/:id", (req, res) => {
//   const { id } = req.params;
//   const record = courses.find((course) => course.id === Number(id));
//   if (!record) {
//     res.status(400).send("record not found");
//   }
//   res.send(record);
// });

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

app.delete("/course/id", (req, res) => {
  const { id } = req.params;
  const index = courses.findIndex((x) => x.id === Number(id));

  courses.splice(index, 1);

  res.send("record delete");
});

app.put("/courses/:id", (req, res) => {
  const { id } = req.params;
  const index = index;
  courses.splice(index, 1, id + 1);
  const data = courses.findIndex((course) => course.id === Number(id));
  res.send(data);
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

// app.get("/", (req, res) => {
//   console.log(req.query);
//   console.log(req.body);
//   res.send("hello from /");
// });

// app.put("/:abc", (req, res) => {
//   console.log(req.query);
//   console.log(req.body);
//   console.log(req.params);
//   res.send("hello from Yash/");
// });

app.listen("3004", "127.0.0.1", () => {
  console.log("server started");
});
