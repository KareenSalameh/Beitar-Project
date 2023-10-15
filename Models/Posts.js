const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserModel = require('./Users');
const GrouprModel = require('./Groups');

const postSchema = new Schema({
    Author: {
        type: String, // Store email address of the post author
        ref: 'Users', // Reference the User model
    },
    Group: {
        type: Schema.Types.ObjectId,
        ref: 'Groups',
        required: true,
    },
    Content: {
        type: String,
        required: true,
    },
    Date : {
        type: Date
    }
});

module.exports = mongoose.model('Post', postSchema);