'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Roles", [
      {
        id: 1,
        roleName: "user",
        createdAt: new Date(), 
        updatedAt: new Date(), 
            },
      {
        id: 2,
        roleName: "admin",
        createdAt: new Date(), 
        updatedAt: new Date(), 
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
