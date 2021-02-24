const Post = require('../../models/Posts.js');

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      order: [['date', 'DESC']],
    });
    res.json(posts);
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports = getAllPosts;
