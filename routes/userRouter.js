var express = require('express');
var router = express.Router(); 
const userController = require('../controllers/UserController') 
// const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/post', userController.post)
router.get('/check', /*checkRole('ADMIN'),*/ userController.check)

module.exports = router;