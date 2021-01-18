var express = require('express');
var router = express.Router();
var pwd_controller = require('../controllers/pwdController');

/* GET home page. */
router.get('/', pwd_controller.index);


module.exports = router;
