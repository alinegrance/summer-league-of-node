const connection = require('./connection');

const addCharacter = async (userId, characterId) => {
  const query = `INSERT INTO LeagueOfNode.user_acquired_characters (user_id, character_id)
                 VALUES (?, ?)`;

  try {
    const [result] = await connection.execute(query, [userId, characterId]);
    return result;
  } catch (e) {
    return { message: e.message };
  }
};

const updateMastery = async (userId, characterId) => {
  const query = `UPDATE LeagueOfNode.user_acquired_characters
                 SET mastery = mastery + 1
                 WHERE user_id = ? AND character_id = ?`;

    const [result] = await connection.execute(query, [userId, characterId]);
    // console.log(result.affectedRows);
    return result.affectedRows;
};

module.exports = { addCharacter, updateMastery };