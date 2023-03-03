const { readJson } = require('./fs-utils');
const { BAD_REQUEST, UNAUTHORIZED, NOT_FOUND } = require('./status-codes');

const validateLoginBody = (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(BAD_REQUEST)
      .send({ message: 'username and password are required' });
  }
  next();
};

const validateCreateUserBody = (req, res, next) => {
  const { email, username, password } = req.body;
  if (!email || !username || !password) {
    return res.status(BAD_REQUEST)
      .send({ message: 'email, username and password are required' });
  }
  next();
};

const validateEmail = async (req, res, next) => {
  const { email } = req.body;
  const users = await readJson('../files/users.json');
  const existEmail = users.some((user) => user.email === email);
  if (existEmail) {
    return res.status(BAD_REQUEST).send({ message: 'email already registered' });
  }
  next();
};

const validateAuth = async (req, res, next) => {
  const token = req.header('authorization');
  if (!token) {
    return res.sendStatus(UNAUTHORIZED);
  }
  next();
};

const validateCharacter = async (req, res, next) => {
  const { id } = req.params;
  // console.log(id);
  const characters = await readJson('../files/characters.json');
  // console.log(characters);
  const existCharacter = characters.some((character) => character.id === Number(id));
  // console.log(existCharacter);
  if (!existCharacter) {
    return res.status(NOT_FOUND).send({ message: 'Character does not exist' });
  }
  next();
};

module.exports = {
  validateLoginBody, 
  validateCreateUserBody, 
  validateEmail, 
  validateAuth, 
  validateCharacter,
};