const mongoose = require('mongoose')
const userSchema = new mongoose.Schema(
    {
        username: {type: String, require: true},
        name: {type: String, require: true},
        email: {type: String, require: true},
        password: {type: String, require: true},
        avartar: {type: Image, require: true},
        bio: {type: String, require: true},
        join_date: {type: Date, require: true},
        following_count: {type: Number, require: true},
        follower_count: {type: Number, require: true},
        post_count: {type: Number, require: true},
    }
)

export const User = mongoose.model('User', userSchema)