const mongoose = require('mongoose');
const { setThePassword } = require('whatwg-url');
const Schema = mongoose.Schema;

const User = new Schema({
    Email : {
        type: String,
        required: [true, 'User email required'],
        validate: {
            validator: () => Promise.resolve(false),
            message: 'Email validation failed.'
          },
        unique: true 
    },
    Password: {
        type: String,
        required: true,
        min: [4,'Password must contain 4 characters']
    },
    First_Name : {
        type: String,
        required: [true, 'User first name required']
    },
    Last_Name : {
        type: String,
        required: [true,  'User last name required']
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
        required: [true, 'You must answer all the following question.']
    },
    Who : {
        type: String,
        required: [true, 'You must answer all the following question.']
    },
    Did : {
        type: String,
        required: [true, 'You must answer all the following question.']
    }
});

module.exports = mongoose.model('User', User);
