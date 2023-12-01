const mongoose = require('mongoose')
const bcypt = require('bcrypt')

const usersSchema = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
})

usersSchema.pre('save', async function () {
    const hash = await bcypt.hash(this.password, 10)
    this.password = hash
})

const User = mongoose.model("User", usersSchema)
module.exports = User
