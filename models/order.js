"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsTo(models.User, {
        foreignKey: "buyerId",
      });
      Order.belongsTo(models.Product, {
        foreignKey: "productId",
      });
      Order.belongsTo(models.OrderStatus, {
        foreignKey: "orderStatusId",
      });
    }
  }
  Order.init(
    {
      orderId: DataTypes.INTEGER,
      buyerId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      productQuantity: DataTypes.INTEGER,
      orderStatusId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
