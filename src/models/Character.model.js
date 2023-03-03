const Character = (sequelize, DataTypes) => {
  const character = sequelize.define('Character', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
  }, 
  {
    tableName: 'characters',
    timestamps: false,
  });

  return character;
}

module.exports = Character;