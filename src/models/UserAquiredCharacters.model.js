const UserAcquiredCharacterModel = (sequelize, DataTypes) => {
  const UserAcquiredCharacter = sequelize.define('UserAcquiredCharacter', {
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

  UserAcquiredCharacter.associate = ({User, Character}) => {
    User.belongsToMany(Character, {
      as: 'characters',
      through: UserAcquiredCharacter,
      foreignKey: 'characterId',
      otherKey: 'userId',
    });
    Character.belongsToMany(User, {
      as: 'users',
      through: UserAcquiredCharacter,
      foreignKey: 'userId',
      otherKey: 'characterId',
    })
  }

  return UserAcquiredCharacter;
}

module.exports = UserAcquiredCharacterModel;