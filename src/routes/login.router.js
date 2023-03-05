const express = require('express');
const loginController = require('../controller/login.controller');
const { validateLoginBody } = require('../utils/middlewares');

const router = express.Router();

router.post('/', validateLoginBody, loginController.login);

module.exports = router;