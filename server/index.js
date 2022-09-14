const express = require("express");
const mongoose = require("mongoose");
const app = express();
const coursesRoute = require("./routes/courses");
const questionRoute = require("./routes/question");

app.use(express.json());
// mongoose.connect("monogodb://localhost:27017/QuizeApp", {
//   keepAlive: true,
// });

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1/quizeApp");
    console.log("database connected");
  } catch (error) {
    console.log(error);
  }
};

connectDB();

app.use("/api/courses", coursesRoute);
app.use("/api/questions", questionRoute);

const port = process.env.PORT || 3004;

app.listen(port, "localhost", () => {
  console.log(`server started on port ${port}`);
});
