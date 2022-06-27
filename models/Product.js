//Import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');

//Import our database connection from config.js
const sequelize = require('../config/connection');

//Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

//Set up fields and rules for Product model
Product.init (
  {
    //Create a id field for Product model
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },

    //Create a product name field for Product model 
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    //Create a price field for Product model 
    price: {
      type: DataTypes.DECIMAL, 
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },

    //Create a stock field Product model
    stock: {
      type: DataTypes.INTEGER,
      defaultValue: 10,
      allowNull: false,
      validate: {
        isNumeric: true
      }
    },

    //Create a category id field for Product model 
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "category",
        key: "id"
      }
    }
  },
  {
    //Create rules for Category Model
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

//Export Product Model
module.exports = Product;
