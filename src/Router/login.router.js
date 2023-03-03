const express = require('express');
const userController = require('../controllers/user.controller');
const { validateLoginBody } = require('../utils/middlewares');

const router = express.Router();

router.post('/', validateLoginBody, userController.login);

module.exports = router;