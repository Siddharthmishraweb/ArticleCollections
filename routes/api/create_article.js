const express = require('express');
const router = express.Router();
const passport = require('passport');

const createArticleApi = require("../../controllers/api/create_articles_api");

// router.post('/', createArticleApi.create);
router.post('/:userId/articles', passport.authenticate('jwt', {session: false}), createArticleApi.create);


module.exports = router;
