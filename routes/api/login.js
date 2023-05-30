const express = require('express')
const router = express.Router();

const usersApi = require('../../controllers/api/v1/users_api');
const loginApi = require('../../controllers/api/login_api');
router.post('/', loginApi.createSession);



module.exports = router;