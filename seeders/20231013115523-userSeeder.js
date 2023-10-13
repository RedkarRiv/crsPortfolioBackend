"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        firstName: "Admin",
        lastName: "Admin",
        email: "admin@admin.com",
        password: "$2b$08$QCQx4rPr55A8kr6xmQLjt.CgF7bA/.nN/PLKsT4ZBCebk73R5UWGu",
        emailCheck: 1,
        roleId: 2,
        userStatus: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "User",
        lastName: "User",
        email: "user@user.com",
        password: "$2b$08$QCQx4rPr55A8kr6xmQLjt.CgF7bA/.nN/PLKsT4ZBCebk73R5UWGu",
        emailCheck: 1,
        roleId: 1,
        userStatus: 1,
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
