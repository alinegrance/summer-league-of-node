/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable camelcase */
const express = require('express');
// const { readJson, writeJSON } = require('./utils/fs-utils');
// const { 
//   validateLoginBody, 
//   validateCreateUserBody, 
//   validateEmail, 
//   validateAuth, 
//   validateCharacter } = require('./utils/middlewares');
// const { NOT_FOUND, OK, CREATED, NO_CONTENT } = require('./utils/status-codes');
// const tokenGen = require('./utils/random');

const userRouter = require('./routes/user.router');
const loginRouter = require('./routes/login.router');

const app = express();

app.use(express.json());
app.use('/user', userRouter);
app.use('/login', loginRouter);

/// //// ENDPOINTS //////////

// app.get('/user', validateAuth, async (_req, res) => {
//   const users = await readJson('../files/users.json');
//   const characters = await readJson('../files/characters.json');
//   const join = await readJson('../files/user_aquired_characters.json');

//   const result = join.reduce((acc, row) => {
//     const user = users.find((usr) => usr.id === row.user_id);
//     const chara = characters.find((char) => char.id === row.character_id);
//     const userChara = {
//       username: user.username, 
//       character_name: chara.name, 
//       level: row.level, 
//     };
//     acc.push(userChara);
//     return acc;
//   }, []);

//   res.status(200).send(result);
// });

// // problema em saber qual usuário ta querendo add um personagem novo. melhor resolvido com JWT
// app.post('/user/character/:id', validateAuth, validateCharacter, async (req, res) => {
//   const { id } = req.params;
//   const { user_id } = req.body; // usando o body de improviso
//   const user_aquired_characters = await readJson('../files/user_aquired_characters.json');
//   user_aquired_characters.push({ user_id, character_id: Number(id), level: 1 });
//   await writeJSON('../files/user_aquired_characters.json', user_aquired_characters);
//   res.sendStatus(CREATED);
// });

// // mesmo problema da rota de cima 
// app.put('/user/character/:id', validateAuth, validateCharacter, async (req, res) => {
//   const { id } = req.params;
//   const { user_id } = req.body;
//   const user_aquired_characters = await readJson('../files/user_aquired_characters.json');
//   const index = user_aquired_characters
//   .findIndex((row) => row.character_id === Number(id) && row.user_id === user_id);
//   // console.log(index);
//   user_aquired_characters[index].level += 1;
//   await writeJSON('../files/user_aquired_characters.json', user_aquired_characters);
//   // console.log(user_aquired_characters[index]);
  
//   res.status(OK).send(user_aquired_characters[index]);
// });

// // mesmo problema da rota de cima, agora user vem no params
// app.delete('/user/:id', validateAuth, async (req, res) => {
//   const id = Number(req.params.id);
//   const users = await readJson('../files/users.json');
//   const user_aquired_characters = await readJson('../files/user_aquired_characters.json');
//   const user_aquired_skins = await readJson('../files/user_aquired_skins.json');

//   await writeJSON('../files/users.json', users.filter((user) => user.id !== id));
  
//   await writeJSON('../files/user_aquired_characters.json', 
//     user_aquired_characters.filter((row) => row.user_id !== id));
  
//   await writeJSON('../files/user_aquired_skins.json', 
//     user_aquired_skins.filter((row) => row.user_id !== id));

//   res.sendStatus(NO_CONTENT);
//   });

module.exports = app;
