const UserAcquiredCharacter = (sequelize, DataTypes) => {
  const userAcquiredCharacter = sequelize.define('UserAcquiredCharacter', {
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    characterId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    mastery: DataTypes.INTEGER,
  },
  {
    tableName: 'user_acquired_characters',
    timestamps: false,
    underscored: true,
  });

  userAcquiredCharacter.associate = ({User, Character}) => {
    User.belongsToMany(Character, {
      as: 'characters',
      through: userAcquiredCharacter,
      foreignKey: 'userId',
      otherKey: 'characterId',
    });
    Character.belongsToMany(User, {
      as: 'users',
      through: userAcquiredCharacter,
      foreignKey: 'characterId',
      otherKey: 'userId'
    })
  }

  return userAcquiredCharacter;
}

module.exports = UserAcquiredCharacter;