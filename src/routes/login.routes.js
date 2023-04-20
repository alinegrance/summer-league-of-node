const express = require('express');
const validateLogin = require('../middlewares/validateLogin');
const randomToken = require('../utils/random');

const router = express.Router();

router.post('/', validateLogin, async (req, res) => {
  const token = randomToken();
  return res.status(201).json(token)
});

module.exports = router;