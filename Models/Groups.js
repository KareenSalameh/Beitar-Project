const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserModel = require('./Users');

const Groups = new Schema({
    Name : {
        type: String
    },
    Manager: {
        type: String
    },
    Description : {
        type: String
    },
    Image : {
        type: String
    },
    Members: [{
        type: String, // Store email addresses of group members
        ref: 'Users', // Reference the User model
    }]
});



module.exports = mongoose.model('groups', Groups);