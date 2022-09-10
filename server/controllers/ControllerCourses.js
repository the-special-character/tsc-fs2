const courses = [
  {
    id: 1,
    CourseName: "node",
    CourseTrainer: "Yagnesh",
  },
  {
    id: 2,
    CourseName: "react",
    CourseTrainer: "Yagnesh",
  },
  {
    id: 3,
    CourseName: "flutter",
    CourseTrainer: "Yagnesh",
  },
  {
    id: 4,
    CourseName: "react-native",
    CourseTrainer: "Yagnesh",
  },
];

class Courses {
  static getAllCourses = (req, res) => {
    res.send(courses);
  };

  static addNewCourse = (req, res) => {
    console.log("received");
    const newdata = { ...req.body, id: courses.length + 1 };
    courses.push(newdata);
    res.send(newdata);
  };

  static UpdateCourse = (req, res) => {
    const { id } = req.params;
    const index = courses.findIndex((x) => x.id === Number(id));
    console.log(index);
    const updatedData = { ...req.body, id: Number(id) };
    courses.splice(index, 1, updatedData);
    res.send(updatedData);
  };

  static patchCourse = (req, res) => {
    const { id } = req.params;
    const ind = courses.findIndex((x) => x.id === Number(id));
    const updatedData = { ...courses[ind], ...req.body };
    courses.splice(ind, 1, updatedData);
    res.send(updatedData);
  };

  static deleteCourse = (req, res) => {
    const { id } = req.params;
    const index1 = courses.findIndex((x) => x.id === Number(id));
    courses.splice(index1, 1);
    res.send(`record deleted.....`);
  };
}

module.exports = Courses;
