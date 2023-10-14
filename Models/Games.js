const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Games = new Schema({
    Date : {
        type: Date
    },
    Rival: {
        type: String
    },
    Stadium : {
        type: String
    },
    Result : {
        type: String,
        validate: {
            validator: function(value) {
              // Define the format for result
              const regex = /^\d{1}-\d{1}$/;;
              return regex.test(value);
            },
            message: 'The customFormattedString field must match the format "1-1".'
        }
    },
    Summary : {
        type: String
    }
});

module.exports = mongoose.model('games', Games);