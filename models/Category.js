//Import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');

//Import our database connection from config.js
const sequelize = require('../config/connection.js');

//Initialize Category model (table) by extending off Sequelize's Model class
class Category extends Model {}

//Set up fields and rules for Category model
Category.init(
  {
    //Create a id field for category
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },

    //Create a category name field for category 
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    //Create rules for Category Model
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

//Export Category Model
module.exports = Category;
