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
