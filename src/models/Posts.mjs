const mongoose = require('mongoose')
const postSchema = new mongoose.Schema(
    {
        username: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        image_url: {type: Image, require: true},
        caption: {type: Stirng, require: true},
        post_date: {type: Date, require: true},
    }
)

export const Post = mongoose.model('Post', postSchema)