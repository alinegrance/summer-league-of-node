const express = require('express');
const userController = require('../controllers/user.controller');
const { validateCreateUserBody } = require('../utils/middlewares');
const auth = require('../utils/validateJWT');

const router = express.Router();

router.post('/', validateCreateUserBody, userController.createUser);

router.get('/', auth, userController.getUserWithCharacters);

router.post('/character/:id', auth, userController.addCharacter);

router.put('/character/:id', auth, userController.updateMastery);

router.delete('/', auth, userController.deleteUser);

module.exports = router;