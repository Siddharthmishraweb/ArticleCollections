const express = require('express');

const router = express.Router();
const passport = require('passport');
const artclesApi = require("../../controllers/api/articles_api");
// const postsApi = require("../../../controllers/api/v1/posts_api");

// router.use('/articles', require(''))
router.get('/', passport.authenticate('jwt', {session: false}), artclesApi.index);

router.delete('/:id', passport.authenticate('jwt', {session: false}), artclesApi.destroy);
//router.delete('/:id', postsApi.destroy);



module.exports = router;