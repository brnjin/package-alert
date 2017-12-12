module.exports = function(sequelize, DataTypes) {
  var UserInfo = sequelize.define("UserInfo", {
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    building: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    street: {
      type: DataTypes.STRING,
      defaultValue: 'Resident',
      len: [1]
    }
  });
  
  UserInfo.associate = function(models) {
    UserInfo.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return UserInfo;
};
