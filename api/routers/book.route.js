const router = require('express').Router();
const controller = require('../controllers/user.controller.js');

router.get('/', controller.index);

module.exports = router;