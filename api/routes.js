const { Router } = require('express');
const getAllPosts = require('../controllers/posts/getAllPosts.js');
const getPost = require('../controllers/posts/getPost.js');
const createPost = require('../controllers/posts/createPosts.js');
const deletePost = require('../controllers/posts/deletePost.js');
const updatePost = require('../controllers/posts/updatePost.js');

const createCategory = require('../controllers/categories/createCategory.js');
const getAllCategories = require('../controllers/categories/getAllCategories.js');

// Router
const router = new Router();

// Models
router.get('/posts/', getAllPosts);
router.get('/posts/:id', getPost);
router.post('/posts/', createPost);
router.delete('/posts/:id', deletePost);
router.patch('/posts/:id', updatePost);

router.post('/categories/', createCategory);
router.get('/categories/', getAllCategories);

module.exports = router;
