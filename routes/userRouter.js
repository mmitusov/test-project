var express = require('express');
var router = express.Router(); 
const userController = require('../controllers/UserController') 

router.post('/post', userController.post)

module.exports = router;