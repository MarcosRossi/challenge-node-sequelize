const Post = require('../../models/Posts.js');

const createPost = async ({ body }, res) => {
  const { title, content, image, categoryId, date } = body;
  try {
    await Post.create({
      title,
      content,
      image,
      categoryId,
      date
    });
    res.json({ status: 201, message: 'Post created' });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = createPost;
