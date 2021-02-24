const Category = require('../../models/Category.js');

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll({
      order: [['createdAt', 'DESC']],
    });
    res.json(categories);
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports = getAllCategories;
