// const express = require('express')
// const router = express.Router();


// router.use('/v1', require('./v1'))
// router.use('/v2', require('./v2'))
// router.use('/articles', require('./articles'));
// router.use('/login', require('./login'));
// router.use('/create', require('./login'));

// module.exports = router;


const express = require('express');
const router = express.Router();

router.use('/v1', require('./v1'));
router.use('/v2', require('./v2'));
router.use('/articles', require('./articles'));
router.use('/login', require('./login'));
router.use('/create', require('./login'));
router.use('/users', require('./users'));

module.exports = router;
