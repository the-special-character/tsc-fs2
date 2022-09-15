const express = require('express');
const coursesController = require('../controllers/coursesController');

const router = express.Router();

router.get('/', coursesController.getAllCourses);

router.post('/', coursesController.addNewCourse);

router.get('/:id', coursesController.getCourseById);

router.put('/:id', coursesController.updateCourse);

router.patch('/:id', coursesController.patchCourse);

router.delete('/:id', coursesController.deleteCourse);

module.exports = router;