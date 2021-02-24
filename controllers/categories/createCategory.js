const Category = require('../../models/Category.js');

const createCategory = async ({ body }, res) => {
  const { name } = body;
  try {
    await Category.create({ name });
    res.json({ status: 201, message: 'Category created' });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = createCategory;
