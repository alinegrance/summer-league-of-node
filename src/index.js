const express = require('express');
const loginRouter = require('./Router/login.router');
const userRouter = require('./Router/user.router');
const characterRouter = require('./Router/character.router');

const app = express();

app.use(express.json());

app.use('/login', loginRouter);

app.use('/user', userRouter);

app.use('/characters', characterRouter);

module.exports = app;
