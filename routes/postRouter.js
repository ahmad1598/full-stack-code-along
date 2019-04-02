const express = require('express')
const postRouter = express.Router()
const Post = require('../models/post.js')


//require auth - so we have req.user._id

//Post - Add new Post
postRouter.post("/" , (req,res,next) => {
    const newPost = new Post(req.body)
    newPost.user = req.user._id
    newPost.save((err, savedPost) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(savedPost)
    })
})

module.exports = postRouter