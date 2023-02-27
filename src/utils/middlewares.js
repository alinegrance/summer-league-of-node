const { readJson } = require("./fs-utils");
const { BAD_REQUEST, UNAUTHORIZED, NOT_FOUND } = require("./statusCodes");

const validateLoginBody = (req, res, next) => {
  const {username, password} = req.body;
  if(!username || !password) {
    return res.status(BAD_REQUEST).send({message: 'username and password are required'})
  }
  next();
}

const validateCreateUserBody = async (req, res, next) => {
  const {email, username, password} =req.body;
  if(!username || !password || !email) {
    return res.status(BAD_REQUEST).send({message: 'username, password and email are required'});
  }
  const users = await readJson('../files/users.json');
  const existUser = users.some((user) => user.email === email || user.username === username);
  if(existUser) {
    return res.status(BAD_REQUEST).send({message: 'User already exists'});
  }
  next();
}

const validateAuth = (req, res, next) => {
  const token = req.header('authorization');
  if(!token) {
    return res.status(UNAUTHORIZED).send({message: 'unauthorized'});
  }
  next();
}

const validateCharacter = async (req, res, next) => {
  const {id} = req.params;
  const characters = await readJson('../files/characters.json');
  const existCharacter = characters.some((chara) => chara.id === Number(id));
  if(!existCharacter) {
    return res.status(NOT_FOUND).send({message: "Character does not exist"});
  }
  next();
}

module.exports = {validateLoginBody, validateCreateUserBody, validateAuth, validateCharacter}