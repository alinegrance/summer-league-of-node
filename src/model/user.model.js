const connection = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM LeagueOfNode.users';
  const [result] = await connection.execute(query);
  return result;
};

module.exports = { getAll };