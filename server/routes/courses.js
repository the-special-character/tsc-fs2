const express = require('express');

const coursesController = require('../controllers/coursesController');

const router = express.Router();

router.get('/', coursesController.getAllCourses);

router.get('/:id', coursesController.getCoursesById);

router.post('/', coursesController.addNewCourse);

router.put('/:id', coursesController.updateCourse);

router.patch('/:id', coursesController.patchCourse);

router.delete('/:id', coursesController.deleteCourse);

module.exports = router;
