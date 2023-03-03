const UserAcquiredSkinModel = (sequelize, DataTypes) => {
  const UserAcquiredSkin = sequelize.define('UserAcquiredSkin', {
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    skinId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
  },
  {
    tableName: 'user_acquired_skins',
    timestamps: false,
    underscored: true,
  });

  return UserAcquiredSkinModel;
}

module.exports = UserAcquiredSkinModel;