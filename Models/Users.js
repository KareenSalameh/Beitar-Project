const mongoose = require('mongoose');
const { setThePassword } = require('whatwg-url');
const Schema = mongoose.Schema;

const User = new Schema({
    Email : {
        type: String,
        required: [true, 'User email required'],
        // validate: {
        //     validator: () => Promise.resolve(false),
        //     message:'Email validation failed.'
        //   },
        unique: true
    },
    Password: {
        type: String,
        required: true,
    },
    First_Name : {
        type: String
    },
    Last_Name : {
        type: String
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
        type: String
    },
    Who : {
        type: String
    },
    Did : {
        type: String
    },
    Status:{
        type: String,
        enum: ['Pending', 'Active', 'Denied'],
        default: 'Pending'        
    }
});

module.exports = mongoose.model('User', User);
