const connection = require('./connection');

const login = async (username, password) => {
  const query = `SELECT * FROM LeagueOfNode.users
           WHERE username = ? AND password = ?`;

  const [[result]] = await connection.execute(query, [username, password]);
  console.log(result);
  return result;
};

const createUser = async (username, email, password) => {
  const query = `INSERT INTO LeagueOfNode.users (username, email, password)
                 VALUES (?,?,?)`;

  try {
    const [result] = await connection.execute(query, [username, email, password]);
    return result;
  } catch (e) {
    return { message: e.message };
  }
};

const getUserWithCharacters = async (userId) => {
  const query = `SELECT u.username, c.name, uac.mastery 
                FROM LeagueOfNode.user_acquired_characters AS uac
                JOIN LeagueOfNode.users AS u ON u.id = uac.user_id
                JOIN LeagueOfNode.characters AS c ON c.id = uac.character_id
                WHERE u.id = ?`;
    
  const [result] = await connection.execute(query, [userId]);
  return result;
};

const deleteUser = async (userId) => {
  const query = `DELETE FROM LeagueOfNode.users
                 WHERE id = ?`;

  await connection.execute(query, [userId]);
};

module.exports = { login, createUser, getUserWithCharacters, deleteUser };