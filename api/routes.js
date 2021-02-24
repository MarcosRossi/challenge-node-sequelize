const { Router } = require('express');
const getAllPosts = require('../controllers/getAllPosts.js');
const getPost = require('../controllers/getPost.js');
const createPost = require('../controllers/createPosts.js');
const deletePost = require('../controllers/deletePost.js');
const updatePost = require('../controllers/updatePost.js');

// Router
const router = new Router();

// Models
router.get('/posts/', getAllPosts);
router.get('/posts/:id', getPost);
router.post('/posts/', createPost);
router.delete('/posts/:id', deletePost);
router.patch('/posts/:id', updatePost);

module.exports = router;
