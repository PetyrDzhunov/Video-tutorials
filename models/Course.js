const mongoose = require('mongoose');


const courseScheme = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
        maxlength: 50
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
    }]

});


// courseScheme.pre('save', function(next) {
//     this.createdAt = new Date();
//     next();
// });


const courseModel = mongoose.model('Course', courseScheme);
module.exports = courseModel;