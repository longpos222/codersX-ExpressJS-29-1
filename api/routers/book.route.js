const router = require('express').Router();
const controller = require('../controllers/book.controller.js');

router.get('/', controller.index);

module.exports = router;