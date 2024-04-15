const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define Schema for User
const userSchema = new Schema({
    username: { type: String, unique: true }, 
    name: String,
    email: String,
    password: String,
    avatar: String,
    bio: String,
    join_date: { type: Date, default: Date.now }, // Add default value for join_date
    following: [{ type: Schema.Types.ObjectId, ref: 'User' }], // Change to following array
    followers: [{ type: Schema.Types.ObjectId, ref: 'User' }], // Change to followers array
    posts: [{
        _id: Schema.Types.ObjectId,
        image_url: String,
        caption: String,
        post_date: { type: Date, default: Date.now }, 
        comments: [{
            _id: Schema.Types.ObjectId,
            user: { type: Schema.Types.ObjectId, ref: 'User' }, // Reference to User who made the comment
            comment_text: String,
            replies: [ // Array of replies
                {
                    _id: Schema.Types.ObjectId,
                    user: { type: Schema.Types.ObjectId, ref: 'User' },
                    comment_text: String,
                    replies: [this] // Nested replies (recursive)
                }
            ]
        }],
        likes: [{
            type: Schema.Types.ObjectId, ref: 'User' // Change username to reference
        }]
    }],
    tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }], // Change postTag to tags
    stories: [{
        _id: Schema.Types.ObjectId,
        story_url: String,
        story_date: { type: Date, default: Date.now }, // Add default value for story_date
        viewers: [{ type: Schema.Types.ObjectId, ref: 'User' }] // Change viewer to viewers array
    }]
});

// Define Schema for Tag
const tagSchema = new Schema({
    name: { type: String, unique: true } // Change tag_name to name and make it unique
});

// Create models
const User = mongoose.model('User', userSchema);
const Tag = mongoose.model('Tag', tagSchema);

// Export models
module.exports = {
    User,
    Tag,
};