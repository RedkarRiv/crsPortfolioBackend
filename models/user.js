"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.Role, { foreignKey: "roleId", targetKey: "id" });
      User.belongsToMany(models.Product, {
        through: models.Order, 
        foreignKey: 'buyerId', 
      });
    }
  }
  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      emailCheck: DataTypes.BOOLEAN,
      roleId: DataTypes.INTEGER,
      userStatus: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
