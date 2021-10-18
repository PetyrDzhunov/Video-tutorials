const mongoose = require('mongoose');

const userSchema = new Mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    }
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;