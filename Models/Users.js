const mongoose = require('mongoose');
const { setThePassword } = require('whatwg-url');
const Schema = mongoose.Schema;

const User = new Schema({
    Email : {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    First_Name : {
        type: String,
        required: true
    },
    Last_Name : {
        type: String,
        required: true
    },
    Date_Of_Birth : {
        type: Date,
        default: Date.now
    },
    Img: {
        type: Object,
        default: "../pictures/default_profile_picture.jpg"
    },
    When : {
        type: String,
        required: true
    },
    Who : {
        type: String,
        required: true
    },
    Did : {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', User);
