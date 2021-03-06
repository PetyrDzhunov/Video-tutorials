const mongoose = require('mongoose');


const courseScheme = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        minlength: 4,
    },
    description: {
        type: String,
        required: true,
        maxlength: 50,
        minlength: 20
    },

    imageUrl: {
        type: String,
        required: true,
    },

    isPublic: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        required: true,
    },

    usersEnrolled: [{
        type: mongoose.Types.ObjectId,
        ref: "User"
    }],

    creator: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }

});


// courseScheme.pre('save', function(next) {
//     this.createdAt = new Date();
//     next();
// });


const courseModel = mongoose.model('Course', courseScheme);
module.exports = courseModel;