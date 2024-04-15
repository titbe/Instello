const mongoose = require('mongoose')
const commentSchema = new mongoose.Schema(
    {
        username: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        post_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Post'},
        like_date: {type: Date, require: true},
    }
)

export const User = mongoose.model('User', userSchema)