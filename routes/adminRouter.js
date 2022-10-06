var express = require('express');
var router = express.Router(); 
const adminController = require('../controllers/adminController') 
const checkRole = require('../middleware/checkRoleMiddleware')

router.get('/check', checkRole('ADMIN'), adminController.check)
router.delete('/declined', checkRole('ADMIN'), adminController.declined)
router.get('/accepted', checkRole('ADMIN'), adminController.accepted)

module.exports = router;