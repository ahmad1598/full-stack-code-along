const mongoose = require('mongoose')
const Schema = mongoose.Schemas

const postSchema = new Schema ({
    title :{
        type: String,
        required: true
    },
    summary: String,
    imgUrl: {
        type: Boolean,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwzJ-IIT6WVRTtyqe5EsZ63iSURA8G3gfpiaL5UOIJbwoSZPJMrg"
    },
    votes: {
        type: Number,
        default: 0
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    thread: {
        type: String,
        enum: ["recipes","entertainment","news","sports","culture","science","arts","celebrity","awhcute","hobbies","politics","music","architecture","weather"],
        required: true
    },
    comments: [{
        user: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        comment: {
            type: String,
            required: true

        },
        timeStamp: {
            type: Date,
            default: Date.now
        }
    }],
    email: {
        type: String
    },
    timeStamp: {
        type: Date,
        default: Date.now
    },
    tags: [{
        type: String,
        default: []
    }]

})


module.exports = mongoose.model("Post",postSchema)
