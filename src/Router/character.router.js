const {Router} = require('express');
const CharacterController = require('../controllers/character.controller');
const router = Router();

router.get('/', CharacterController.getAll)

module.exports = router;