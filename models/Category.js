const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../configuration');

class Category extends Model {}

Category.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter a name',
        },
      },
    },
  },
  {
    sequelize,
    // modelName: 'Category',
    paranoid: true,
  }
);

module.exports = Category;
