'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productName: {
        type: Sequelize.STRING
      },
      productDescription: {
        type: Sequelize.TEXT
      },
      productImage: {
        type: Sequelize.TEXT
      },
      productCategoryId: {
        type: Sequelize.INTEGER
      },
      productStock: {
        type: Sequelize.INTEGER
      },
      productPrice: {
        type: Sequelize.FLOAT
      },
      productStatus: {
        type: Sequelize.BOOLEAN
      },
      productRating: {
        type: Sequelize.FLOAT
      },
      productDiscount: {
        type: Sequelize.DECIMAL(5, 2)
      },
      productFeatured: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};