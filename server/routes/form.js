const express = require('express');
const FormController = require('../controller/formController');




const router = express.Router();

router.post('/', FormController.addData);


module.exports=router