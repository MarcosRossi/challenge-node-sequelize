const Post = require('../../models/Posts.js');
const Category = require('../../models/Category.js');

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [{ model: Category }],
      order: [['date', 'DESC']],
    });
    res.json(posts);
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports = getAllPosts;
