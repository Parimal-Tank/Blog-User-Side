const express = require('express');
const router =  express.Router();
const blogController = require('../controller/blog')

// GET all Blog Details
router.get('/allblog' , blogController.getblogdata );

// Slug Append at the end of Title
router.get('/:id/:slug' , blogController.getblogDataById);

// For search funcationality
router.get('/search' , blogController.searchBlog);

module.exports = router;