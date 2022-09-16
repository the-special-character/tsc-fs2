const express = require('express');

const userscontroller = require('../controllers/users.controller');

const router = express.Router();

router.get('/:id', userscontroller.getuserData);

router.post('/', userscontroller.addUsers);

// router.put('/:id',questioncontroller.updateQuestion);

// router.delete('/:id',questioncontroller.deleteQuestion);

module.exports = router;
