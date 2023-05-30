// const express = require('express');
// const router = express.Router();
// const createArticleApi = require("../../../controllers/api/create_articles_api");

// router.post('/:userId/articles', createArticleApi.create);

// module.exports = router;


const express = require('express');
const router = express.Router();
const passport = require('passport');
const createArticleApi = require("../../../controllers/api/create_articles_api");


console.log("aaye hain yaha",createArticleApi)
console.log("aaye hain yaha")

router.post('/:userId/articles', createArticleApi.create);

module.exports = router;
