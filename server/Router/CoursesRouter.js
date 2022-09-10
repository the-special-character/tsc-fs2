const express = require("express");

const CourseController = require("../controllers/ControllerCourses");

const router = express.Router();

router.get("/", CourseController.getAllCourses);

router.post("/", CourseController.addNewCourse);

router.put("/:id", CourseController.UpdateCourse);

router.patch("/:id", CourseController.patchCourse);

router.delete("/:id", CourseController.deleteCourse);

module.exports = router;
