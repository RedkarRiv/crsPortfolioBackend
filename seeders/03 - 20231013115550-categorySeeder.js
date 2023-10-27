"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Categories", [
      {
        id: 1,
        categoryName: "Front-End",
        categoryDescription: "Tecnologías aplicada en el desarrollo de FRONT",
        categoryStatus: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        categoryName: "Back-End",
        categoryDescription: "Tecnologías aplicada en el desarrollo de BACK",
        categoryStatus: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        categoryName: "BBDD",
        categoryDescription: "Tecnologías aplicada en el desarrollo de BBDD",
        categoryStatus: 1,
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
