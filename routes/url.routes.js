var express = require('express');
var router = express.Router();
var urlController=require('../controller/url.controller');
/* GET users listing. */
router.get('/urls',urlController.getAllurls);
router.get('/roleurlmap',urlController.getroleUrls);
module.exports = router;