'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    productName: DataTypes.STRING,
    productDescription: DataTypes.TEXT,
    productImage: DataTypes.TEXT,
    productCategoryId: DataTypes.INTEGER,
    productStock: DataTypes.INTEGER,
    productPrice: DataTypes.FLOAT,
    productStatus: DataTypes.BOOLEAN,
    productRating: DataTypes.FLOAT,
    productDiscount: DataTypes.DECIMAL,
    productFeatured: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};