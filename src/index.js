const express = require('express');
const loginRouter = require('./Router/login.router');
const userRouter = require('./Router/user.router');

const app = express();

app.use(express.json());

app.use('/login', loginRouter);

app.use('/user', userRouter);

module.exports = app;
