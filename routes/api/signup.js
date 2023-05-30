const express = require('express');

const router = express.Router();
const passport = require('passport');
const signupApi = require("../../controllers/api/signup");

router.post('/', signupApi.signUp);

//router.delete('/:id', postsApi.destroy);



module.exports = router;