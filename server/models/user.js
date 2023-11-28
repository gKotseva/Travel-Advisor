const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
})

const User = mongoose.model('users', destinationsSchema)

module.exports = User
