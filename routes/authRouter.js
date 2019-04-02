const express = require("express")
const authRouter = express.Router()
const jwt = require("jsonwebtoken")
const User = require('../models/user.js')


authRouter.post("/signup",(req,res,next) => {
    User.findOne({username:req.body.username.toLowerCase()}, (err, user) => {
        if(err){
            res.status(500)
            return next(err)
        }
        if(user){
            res.status(400)
            return next(new Error("That Username is already taken"))
        }
        const newUser = new User(req.body)
        newUser.save((err, savedUser) => {
            if(err){
                res.status(500)
                return next(err)
            }

            //Create token
            const token = jwt.sign(savedUser.withoutPassword(),process.env.SECRET)
            //Send response
            return res.status(201).send({user: savedUser.withoutPassword(), token})
        })
    })
})


authRouter.post("/login" , (req,res,next) => {
    //Find a user by that username (err, user)
    User.findOne({username:req.body.username.toLowerCase()}, (err,user) => {
        if(err){
            res.status(500)
            return next(err)
        }
        //Does that user exist - send err "Username or password are incorrect"
        if(!user){
            return res.status(403).send({success:false , err:"Username or password are incorrect"})
        }
        
        user.checkPassword(req.body.password, (err, isMatch) => {
            if(err) return res.status(500).send(err)
            //if the password didn't match
            if(!isMatch) res.status(401).send({success:false, err:"Username or password are incorrect"})

            //create token
            const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
            //send response
            return res.status(200).send({user:user.withoutPassword(), token, success:true})
        })
    })
})




module.exports = authRouter