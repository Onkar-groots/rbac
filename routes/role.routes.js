var express = require('express');
var router = express.Router();
var roleController=require('../controller/role.controller');
/* GET users listing. */
router.get('/role',roleController.getAllRole);
module.exports = router;