const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../configuration');
const moment = require('moment');
const Category = require('./Category.js');

class Post extends Model {}

Post.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter a title',
        },
      },
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter a content',
        },
      },
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: {
          args: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g,
          msg: 'The image must have a valid format',
        },
        notNull: {
          msg: 'Please enter an image',
        },
      },
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter a date',
        },
      },
      get: function () {
        return moment(this.getDataValue('date')).format('YYYY-MM-DD');
      },
    },
  },
  {
    sequelize,
    modelName: 'Post',
    paranoid: true,
  }
);

// Relationships
Category.hasMany(Post, {foreignKey:'categoryId'});
Post.belongsTo(Category, {foreignKey:'categoryId'});

module.exports = Post;
