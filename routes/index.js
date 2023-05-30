// const express = require('express')
// const router = express.Router();
// const homeController = require('../controllers/home_controller')

// router.get('/', homeController.home);
// router.use('/users', require('./users'));
// router.use('/posts', require('./posts'));
// router.use('/comments', require('./comments'));

// router.use('/api', require('./api'));
// // router.use('/api/articles', require('./api/articles'));


// // for any further routes , access from here
// // router.use('/routerName', require('./routerFile'));

// console.log('routes indx.js is loaded');
// module.exports = router;








// const express = require('express');
// const router = express.Router();
// const homeController = require('../controllers/home_controller');

// router.get('/', homeController.home);
// router.use('/users', require('./users'));
// router.use('/posts', require('./posts'));
// router.use('/comments', require('./comments'));
// router.use('/api', require('./api'));
// router.use('/api/articles', require('./api/articles'));
// router.use('/api/login', require('./api/login'));

// // router.use('/api/createArticle', require('./api/create_article'));
// router.use('/api/createArticle', require('./api/create_article'));


// console.log('routes index.js is loaded');
// module.exports = router;


const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');

router.get('/', homeController.home);
router.use('/users', require('./users'));
router.use('/posts', require('./posts'));
router.use('/comments', require('./comments'));
router.use('/api', require('./api'));
router.use('/api/articles', require('./api/articles'));
router.use('/api/login', require('./api/login'));
router.use('/api/users', require('./api/create_article.js'));
router.use('/api/signup', require('./api/signup'));


console.log('routes index.js is loaded');
module.exports = router;

