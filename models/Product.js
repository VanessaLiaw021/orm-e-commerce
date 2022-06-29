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

      //Set id as a Integer
      type: DataTypes.INTEGER,

      //Do not allow null values
      allowNull: false,

      //Allow auto increment
      autoIncrement: true,

      //Primary key is the id
      primaryKey: true
    },

    //Create a product name field for Product model 
    product_name: {

      //Set product_name as a String
      type: DataTypes.STRING,

      //Do not allow null values
      allowNull: false
    },

    //Create a price field for Product model 
    price: {

      //Set price as a Decimal
      type: DataTypes.DECIMAL, 

      //Do not allow null values
      allowNull: false,

      //Validate that value is a decimal
      validate: {
        isDecimal: true
      }
    },

    //Create a stock field Product model
    stock: {

      //Set stock as a Integer
      type: DataTypes.INTEGER,

      //Set default value is 10
      defaultValue: 10,

      //Do not allow null values
      allowNull: false,

      //Validate that value is a number
      validate: {
        isNumeric: true
      }
    },

    //Create a category id field for Product model 
    category_id: {

      //Set category_id as a Integer
      type: DataTypes.INTEGER,

      //Reference the category id's as foreign key 
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
