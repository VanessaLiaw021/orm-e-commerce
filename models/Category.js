//Import required packages
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

//Create a new Sequelize model for category
class Category extends Model {}

//Define fields/columns on model
Category.init(
  {
    //Create a id table for category
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },

    //Create a category name table for category 
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

//Export Category
module.exports = Category;
