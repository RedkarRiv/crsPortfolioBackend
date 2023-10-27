"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Orders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      orderId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        references: {
          model: "Products",
          key: "id",
        },
      },
      buyerId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
      },
      productId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Products",
          key: "id",
        },
      },
      productQuantity: {
        type: Sequelize.INTEGER,
      },
      orderStatusId: {
        type: Sequelize.INTEGER,
        references: {
          model: "OrderStatuses",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Orders");
  },
};
