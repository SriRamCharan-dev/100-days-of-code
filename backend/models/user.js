const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'please enter a username'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'please enter a email address'],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        //preventing it from leaking in the api response
        select: false
    },
    createdAt: {
        type: Date,
        //Date.now() calls the function immediately when the server boots, pinning all expenses to that exact server boot time!
        default: Date.now
    },
    UpdatedAt: {
        type: Date,
        default: Date.now
    }
})
const User = mongoose.model("User", UserSchema);
module.exports = User;