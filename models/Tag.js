//Import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');

//Import our database connection from config.js
const sequelize = require('../config/connection.js');

//Initialize Tag model (table) by extending off Sequelize's Model class
class Tag extends Model {}

//Set up fields and rules for Tag model
Tag.init (
  {
    //Create a id field for Tag model
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },

    //Create a tag name field for Tag Model
    tag_name: {
      type: DataTypes.STRING
    }
  },
  {
    //Create rules for Tag Model
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

//Export Tag Model
module.exports = Tag;