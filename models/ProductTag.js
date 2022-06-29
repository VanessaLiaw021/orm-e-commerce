//Import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');

//Import our database connection from config.js
const sequelize = require('../config/connection');

//Initialize ProductTag model (table) by extending off Sequelize's Model class
class ProductTag extends Model {}

//Set up fields and rules for Product model
ProductTag.init (
  {
    //Create a id field for ProductTag model
    id: {

      //Set the id as a Integer
      type: DataTypes.INTEGER,

      //Do not allow null values
      allowNull: false,

      //Allow auto increment 
      autoIncrement: true,

      //Primary key as id
      primaryKey: true
    },

    //Create a product id field for ProductTag Model
    product_id: {

      //Set the product_id as a Integer
      type: DataTypes.INTEGER,

      //Reference the product id's as foreign key 
      references: {
        model: "product",
        key: "id"
      }
    },

    //Create a tag id field for ProductTag model
    tag_id: {

      //Set the tag_id as a Integer
      type: DataTypes.INTEGER,

      //Refrence the product id's as foreign key
      references: {
        model: "tag",
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
    modelName: 'product_tag',
  }
);

//Export ProductTag Model
module.exports = ProductTag;
