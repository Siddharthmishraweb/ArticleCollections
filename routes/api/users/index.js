const express = require('express');
const router = express.Router();

router.use('/createArticles', require('./createArticles'));

module.exports = router;
