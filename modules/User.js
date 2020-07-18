const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
}) // 1

module.exports = User = mongoose.model('user', UserSchema) // 2



// 1
//  Can be one of: object describing schema paths, or schema to copy, or array of objects and schemas

// 2
// Первый параметр название модели, вторая схема