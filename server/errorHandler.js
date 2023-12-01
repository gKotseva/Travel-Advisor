const {MongooseError} = require('mongoose')

exports.ErrorMessages = (error) => {
    const currentInstanceOfMongoose = error instanceof MongooseError

    if (currentInstanceOfMongoose){
        let errors = Object.values(error.errors)
        const messages = errors.map((e) => e.message)

        return messages
    }

    return [error.message]
}