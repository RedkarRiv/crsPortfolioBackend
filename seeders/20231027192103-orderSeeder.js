"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Orders", [
      {
        id: 1,
        orderId: 1,
        buyerId: 3,
        productId: 1,
        productQuantity: 2,
        orderStatusId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        orderId: 1,
        buyerId: 3,
        productId: 2,
        productQuantity: 2,
        orderStatusId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        orderId: 1,
        buyerId: 3,
        productId: 3,
        productQuantity: 5,
        orderStatusId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        orderId: 2,
        buyerId: 3,
        productId: 2,
        productQuantity: 2,
        orderStatusId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        orderId: 2,
        buyerId: 3,
        productId: 2,
        productQuantity: 3,
        orderStatusId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
