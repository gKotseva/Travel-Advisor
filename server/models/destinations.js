const mongoose = require('mongoose')

const destinationsSchema = new mongoose.Schema({
    country: {type: String, required: true},
    imageUrl: {type: String, required: true},
})

const Destination = mongoose.model('destinations', destinationsSchema)

module.exports = Destination
