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
  
  try {
    const [result] = await connection.execute(query, [userId, characterId]);
    return result;
  } catch (e) {
    return { message: e.message };
  }
};

const getCharacterMastery = async (userId, characterId) => {
  const query = `SELECT c.name, uac.mastery FROM LeagueOfNode.user_acquired_characters as uac
                 JOIN LeagueOfNode.characters as c
                 ON c.id = uac.character_id
                 WHERE uac.user_id = ? AND uac.character_id = ?`;
  const [[result]] = await connection.execute(query, [userId, characterId]);
  return result;
};

module.exports = { addCharacter, updateMastery, getCharacterMastery };