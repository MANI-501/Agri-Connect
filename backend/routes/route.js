const router = require('express').Router();

const { signup } = require('../controller/appController.js')


/** HTTP Reqeust */
router.post('/user/signup', signup);


module.exports = router;