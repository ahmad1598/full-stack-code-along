const express = require('express')
const publicRouter = express.Router()
const Post = require('../models/post.js')


//Get all posts - sorted by time
publicRouter.get("/", async (req,res, next) => {
    try{
       const posts = await Post.find().sort({timeStamp: -1})
        return res.status(200).send(posts)
    }
    catch(err){
        res.status(500)
        return next(err)
    }
})


//Get posts by thread
publicRouter.get("/thread/:thread",(rea,res,next) => {
    Post.find({thread: req.params.thread},(err, posts) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(posts)
    })
})



module.exports = publicRouter