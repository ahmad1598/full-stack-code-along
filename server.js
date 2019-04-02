const express = require('express') 
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const morgan =  require('morgan')
const expressJwt = require('express-jwt')
const PORT = process.env.PORT || 7000

//Middlewares that fire on every request
app.use(express.json())
app.use(morgan('dev'))

//DB connect
mongoose.connect("mongodb://localhost:27017/reddit-clone", {useNewUrlParser: true}, () => {
    console.log("[o] Connected to the DB")
})


//Routes
app.use("/api",expressJwt({secret:process.env.SECRET})) 
app.use("/auth" , require("./routes/authRouter.js"))
app.use("/public" , require("./routes/publicRouter.js"))
app.use("/api/posts" , require("./routes/postRouter.js"))


//Error handling
app.use((err,req,res,next) => {
    console.log(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})


//Server listen
app.listen(PORT, () => {
    console.log(`[+] Server is running on port ${PORT}`)
})