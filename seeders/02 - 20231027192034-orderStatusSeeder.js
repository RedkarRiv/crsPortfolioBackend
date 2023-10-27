"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("OrderStatuses", [
      {
        id: 1,
        orderStatusName: "Pendiente",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        orderStatusName: "Realizado",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        orderStatusName: "Cancelado",
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
