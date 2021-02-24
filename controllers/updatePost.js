const Post = require('../models/Posts.js');

const updatePost = async ({ params, body }, res) => {
  const { title, content, image, category, date } = body;
  const { id } = params;

  if (!id) {
    res.json({ status: 404, message: 'ID is required for update a post' });
  }

  try {
    const founded = await Post.findByPk(id);
    if (!founded) {
      res.status(404).json(`Not found post with id: ${id} for update`);
    } else {
      const updated = await Post.update(
        { title, content, image, category, date },
        {
          where: { id },
        }
      );
      res.json({ updated });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = updatePost;
