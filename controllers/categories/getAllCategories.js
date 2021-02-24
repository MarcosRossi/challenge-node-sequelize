const Category = require('../../models/Category.js');
const Post = require('../../models/Posts.js');

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll({
      order: [['createdAt', 'DESC']],
      include: [{ model: Post }],
    });
    res.json(categories);
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports = getAllCategories;
