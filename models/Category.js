const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns add more constrints 
    id: {
      type: DataTypes.INTEGER,
      PrimaryKey: true,
      AllowNull: false,
      autoIncrement: true,

    },
    category_name: {
      type: DataTypes.STRING,
      AllowNull: false 
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

module.exports = Category;
