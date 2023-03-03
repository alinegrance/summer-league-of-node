const express = require('express');
const userController = require('../controllers/user.controller');
const { validateCreateUserBody, validateAuth } = require('../utils/middlewares');

const router = express.Router();

router.post('/', validateCreateUserBody, userController.createUser);

router.get('/', validateAuth, userController.getUserWithCharacters);

router.post('/character/:id', validateAuth, userController.addCharacter);

router.put('/character/:id', validateAuth, userController.updateMastery);

router.delete('/', validateAuth, userController.deleteUser);

module.exports = router;