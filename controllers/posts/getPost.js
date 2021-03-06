const Post = require('../../models/Posts.js');

const getPost = async ({ params }, res) => {
  const { id } = params;
  if (!id) {
    res.status(400).json('Bad request, the id parameter is required.');
  }
  
  try {
    const post = await Post.findOne({
      where: { id },
    });

    if (post == null) {
      res.status(404).json(`Not found post for id: ${id}`);
    } else {
      res.json(post);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = getPost;
