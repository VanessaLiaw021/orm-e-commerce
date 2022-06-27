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

    //Create a product id field for ProductTag Model
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "product",
        key: "id"
      }
    },

    //Create a tag id field for ProductTag model
    tag_id: {
      type: DataTypes.INTEGER,
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
