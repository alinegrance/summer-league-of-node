const express = require('express');
const userController = require('../controller/user.controller');

const router = express.Router();

router.get('/', userController.getAll);

module.exports = router;