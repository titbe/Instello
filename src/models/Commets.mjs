const mongoose = require('mongoose')
const commentSchema = new mongoose.Schema(
    {
        username: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        post_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Post'},
        parent_comment_id: {type: Stirng, require: true},
        comment_text: {type: String, require: true},
        comment_date: {type: Date, require: true},
    }
)

export const User = mongoose.model('User', userSchema)