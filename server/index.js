const express = require("express");
const dotenv = require("dotenv");
const config = require("config");
const mongoose = require("mongoose");

const app = express();

const CourseRouter = require("./Router/CoursesRouter");
const QuestionRouter = require("./Router/questionRouter");
const UserRouter = require("./Router/User.router");

dotenv.config({
  override: true,
});

const dbConfig = config.get("Customer.dbConfig");
console.log(dbConfig);

app.use(express.json());

// mongoose.connect('mongodb://localhost:27017/QuizApp',{
//   keepAlive:true
// });

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/QuizApp");
    console.log(`database connected....`);
  } catch (error) {
    console.log(error);
  }
};

connectDB();

// const connectUserDB = async () => {
//   try {
//     await mongoose.connect("mongodb://127.0.0.1:27017/UserList");
//     console.log(`User database connected....`);
//   } catch (error) {
//     console.log(error);
//   }
// };

// connectUserDB();

app.use("/api/courses", CourseRouter);
app.use("/api/questions", QuestionRouter);
app.use("/api/user", UserRouter);

const port = process.env.PORT || 3004;

app.listen(port, "localhost", () => {
  console.log(`server started at port ${port}`);
});

// const express = require("express");

// const MyApp = express();

// const list = [
//   {
//     id: 1,
//     FruitName: "Apple",
//     Person: "Dhruvik",
//   },
//   {
//     id: 2,
//     FruitName: "Orange",
//     Person: "Dhruvik",
//   },
//   {
//     id: 3,
//     FruitName: "Watermelon",
//     Person: "Amit",
//   },
//   {
//     id: 4,
//     FruitName: "Strawberry",
//     Person: "Nency",
//   },
// ];

// MyApp.use(express.json());

// MyApp.get("/list", (req, res) => {
//   res.send(list);
// });

// MyApp.post("/list", (req, res) => {
//   const updateddata = { id: list.length + 1, ...req.body };
//   list.push(updateddata);
//   res.send(updateddata);
// });

// MyApp.put("/list/:id", (req, res) => {
//   const { id } = req.params;
//   const index = list.findIndex((x) => x.id === Number(id));
//   const updateddata = { id: Number(id), ...req.body };
//   list.splice(index, 1, updateddata);
//   res.send(updateddata);
// });

// MyApp.patch("/list/:id", (req, res) => {
//   const { id } = req.params;
//   const index = list.findIndex((x) => x.id === Number(id));
//   const updateData = { ...list[index], ...req.body };
//   list.splice(index, 1, updateData);
//   res.send(updateData);
// });

// MyApp.delete("/list/:id", (req, res) => {
//   const { id } = req.params;

//   const index = list.findIndex((x) => x.id === Number(id));

//   const removeddata = list[index];

//   list.splice(index, 1);

//   res.send(`record deleted ..... `);
// });

// MyApp.listen("3003", "localhost", () => {
//   console.log(`server served.....`);
// });
