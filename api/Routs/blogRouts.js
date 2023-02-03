const express = require('express');
const router =  express.Router();
const blogController = require('../controller/blog')


router.get('/allblog' , blogController.getblogdata );
router.get('/:id/:slug' , blogController.getblogDataById);
router.get('/search' , blogController.searchBlog);

module.exports = router;