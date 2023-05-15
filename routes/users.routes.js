var express = require('express');
var router = express.Router();
var userController=require('../controller/user.controller');
/* GET users listing. */
router.get('/getuser',userController.getAllusers);
router.get('/user/:id',userController.getUsersById);
router.post('/user/create',userController.createUser);

module.exports = router;
