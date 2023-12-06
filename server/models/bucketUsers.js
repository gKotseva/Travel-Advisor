const mongoose = require('mongoose')

const bucketUserSchema = new mongoose.Schema({
    user: {type: String, required: true, unique: true},
    bucketList: {type: Array, required: true},
    visited: {type: Array, required: true},
})

const bucketUser = mongoose.model('bucketUser', bucketUserSchema)

module.exports = bucketUser
