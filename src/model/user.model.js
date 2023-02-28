const connection = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM LeagueOfNode.users';
  const [result] = await connection.execute(query);
  return result;
};

const getUser = async (username, password) => {
  const query = 'SELECT * FROM LeagueOfNode.users WHERE username = ? AND password = ?';
  const [[result]] = await connection.execute(query, [username, password]);
  console.log(result);
  return result;
};

const createUser = async (username, email, password) => {
  const query = 'INSERT INTO LeagueOfNode.users (username, email, password) VALUES (?,?,?)';
  try {
    const [result] = await connection.execute(query, [username, email, password]);
    return result;
  } catch (e) {
    return { message: e.message };
  }
};

const getUserWithCharacters = async (id) => {
  const query = ''
}

module.exports = { getAll, getUser, createUser };