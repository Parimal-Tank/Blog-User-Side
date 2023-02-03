const mongoose = require('mongoose');
const Blog = require('../models/blogModel');



// GET Blog Details
const getblogdata = async (req , res , next) => {

    Blog.find()
    .exec()
    .then(result => {

             res.render('index' , {blogData : result}); 
        
        })
        .catch(err => {
            res.status(505).json({
                error : err
            })
        })
}

// GET Blog Deetails By Id
const getblogDataById = (req, res , next) => {
    const id = req.params.id;
 
    Blog.findById({_id : id}) 
    .then(result => {

             res.render('blog-post' ,{blogData : result});

        })
    .catch(err => {
        res.status(500).json({
            message : "No Blog Found or Enter Valid BlogId"
        })
    })
}

// Search Functionality 
const searchBlog = async (req , res , next) => {
    
    let data = await Blog.find( {
        "$or" : [
            { title : {$regex : req.query.title}}  // title wise search
        ]
    })

    res.render('index' , { blogData : data})
}


module.exports = {
    getblogdata ,
    getblogDataById,
    searchBlog
}