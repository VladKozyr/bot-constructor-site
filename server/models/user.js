const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    login: {
        type: String,
        required:true,
        unique: true,
        trim: true,
        minlength: 8
    },
    hashPassword: {
        type: String, 
        required: true
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User;