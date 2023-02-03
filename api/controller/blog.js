const mongoose = require('mongoose');
const Blog = require('../models/blogModel');


const getblogdata = async (req , res , next) => {

    Blog.find()
    .exec()
    .then(result => {

            // res.status(200).json(responce.blogs);

             res.render('index' , {blogData : result}); 
        
        })
        .catch(err => {
            res.status(505).json({
                error : err
            })
        })
}


const getblogDataById = (req, res , next) => {
    const id = req.params.id;
 
    Blog.findById({_id : id}) 
    .then(result => {

             res.render('blog-post' ,{blogData : result});

            // res.status(200).json({result : result});

        })
    .catch(err => {
        res.status(500).json({
            message : "No Blog Found or Enter Valid BlogId"
        })
    })
}

const searchBlog = async (req , res , next) => {
    
    let data = await Blog.find( {
        "$or" : [
            { title : {$regex : req.query.title}}
        ]
    })

    res.render('index' , { blogData : data})
}


module.exports = {
    getblogdata ,
    getblogDataById,
    searchBlog
}