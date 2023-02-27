const express = require('express');
const { readJson, writeJSON } = require('./utils/fs-utils');
const { OK, NOT_FOUND, CREATED, NO_CONTENT } = require('./utils/statusCodes');
const tokenGen = require('./utils/random');
const { validateLoginBody, validateCreateUserBody, validateAuth, validateCharacter } = require('./utils/middlewares');

const app = express();

app.use(express.json());

// ENDPOINTS 
// => post('/login'): body: {username, password}
app.post('/login',validateLoginBody ,async (req, res) => {
  const {username, password} = req.body;
  const users = await readJson('../files/users.json');
  const userFound = users.find((user) => user.username === username && user.password === password);
  if(!userFound) {
    return res.status(NOT_FOUND).send({message: 'user not found'});
  }
  const token = tokenGen();
  res.status(OK).send({token})
});

// => post('/user'): body: {username, email, password}
app.post('/user', validateCreateUserBody ,async(req, res) => {
  const {username, email, password} = req.body;
  const users = await readJson('../files/users.json');
  const lastIndex = users.length -1;
  const id = users[lastIndex].id + 1;
  const newUser = {id, username, email, password}
  users.push(newUser);
  await writeJSON('../files/users.json', users);
  
  const token = tokenGen();
  res.status(CREATED).send({token});
});

// => get('/user'): devolve usuario logado com os personagens que ele possui, user tem que estar autenticado;
app.get('/user', validateAuth, async(req, res) => {
// temporário, mudar no futuro pra jwt
  const {id} = req.body;

  const users = await readJson('../files/users.json');
  const characters = await readJson('../files/characters.json');
  const join = await readJson('../files/user_aquired_characters.json');

  const filteredJoin = join.filter((row) =>  row.user_id === id);
  const username = users.find((user) =>  user.id === id).username;

  const result = filteredJoin.reduce((acc, row) => {
    const characterName = characters.find((chara) =>  chara.id === row.character_id).name
    const mastery = row.mastery;
    acc.push({username, characterName, mastery});
    return acc;
  }, [])

  res.status(200).send(result);
});

// => post('/user/character/:id'): adiciona um personagem novo ao usuario logado.
// sugestao: validar se usuário já possui personagem a ser adicionado.
app.post('/user/character/:id', validateAuth, validateCharacter, async(req, res) => {
  const {id} = req.params;
  const {user_id} = req.body;
  const userAquiredCharacters = await readJson('../files/user_aquired_characters.json');
  userAquiredCharacters.push({user_id, character_id: Number(id), mastery: 1});
  await writeJSON('../files/user_aquired_characters.json', userAquiredCharacters);
  res.sendStatus(CREATED);
});

// => put('/user/character/:id'): atualizar a maestria de um personagem do usuario logado.
app.put('/user/character/:id', validateAuth, validateCharacter, async(req, res) => {
  const {id} = req.params;
  const{user_id} = req.body;
  const userAquiredCharacters = await readJson('../files/user_aquired_characters.json');
  const index = userAquiredCharacters.findIndex((row) => row.character_id === Number(id) && row.user_id === user_id);
  // console.log(index);
  // console.log(userAquiredCharacters[index]);
  userAquiredCharacters[index].mastery += 1; //userAquiredCharacter[index].mastery = userAquiredCharacter[index].mastery + 1;
  await writeJSON('../files/user_aquired_characters.json', userAquiredCharacters);
  res.status(OK).send(userAquiredCharacters[index]);
});

// => delete('/user'): deleta conta do usuario logado e tudo relacionado a ele.
app.delete('/user', validateAuth, async(req, res) => {
  const {id} = req.body;
  const users = await readJson('../files/users.json');
  const user_aquired_characters = await readJson('../files/user_aquired_characters.json');
  const user_aquired_skins = await readJson('../files/user_aquired_skins.json');

  await writeJSON('../files/users.json', users.filter((user) =>  user.id !== Number(id)));
  await writeJSON('../files/user_aquired_characters.json', user_aquired_characters.filter((row) => row.user_id !== Number(id)));
  await writeJSON('../files/user_aquired_skins.json', user_aquired_skins.filter((row) => row.user_id !== Number(id)));
  res.sendStatus(NO_CONTENT); 
})


module.exports = app;