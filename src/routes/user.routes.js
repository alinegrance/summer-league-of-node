const express = require('express');
const validateUser = require('../middlewares/validateUser');
const { readJson, writeJSON } = require('../utils/fs-utils');
const random = require('../utils/random');

const router = express.Router();

router.post('/', validateUser, async (req, res) => {
  const users = await readJson('../files/users.json');
  const newUser = {
    id: users[users.length - 1].id + 1,
    ...req.body
  }
  users.push(newUser);
  await writeJSON('../files/users.json', users);
  const token = random();
  return res.status(201).json({ token });
});

router.get('/', async (req, res) => {
  const join = await readJson('../files/user_aquired_caracters.json');
  const users = await readJson('../files/users.json');
  const characters = await readJson('../files/characters.json');

  const joinSelected = join.filter((user) => user.user_id === 1);

  const {username} = users.find((u) => u.id === joinSelected[0].user_id);
  const arrayCharacters = joinSelected.map((currentJoin) => {
    const {name} = characters.find((c) => c.id === currentJoin.character_id);
    return {
      name
    }
  });
  const result = {
    username,
    characters: arrayCharacters
  };
  return res.status(200).json(result);
})

module.exports = router