const Post = require('../models/Posts.js');

const deletePost = async ({ params }, res) => {
  const { id } = params;

  if (!id) {
    res.status(400).json('Bad request, the id parameter is required.');
  }

  try {
    const post = await Post.destroy({ where: { id } });

    if (!post) {
      res.status(404).json(`Not found post for id: ${id} to deactivate`);
    } else {
      res.json({ status: 204, message: 'Post deleted' });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = deletePost;
