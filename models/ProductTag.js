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
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },

    //Create a tag name field for ProductTag Model
    tag_name: {
      type: DataTypes.STRING
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
