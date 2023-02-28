const express = require('express');
const userController = require('../controller/user.controller');
const { validateCreateUserBody } = require('../utils/middlewares');

const router = express.Router();

router.get('/', userController.getAll);

router.post('/', validateCreateUserBody, userController.createUser);

module.exports = router;