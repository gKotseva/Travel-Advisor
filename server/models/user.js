const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const usersSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        minLength: [10, 'Email should be at least 10 characters long!'],
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minLength: [4, 'Password should be at least 4 characters long!'],
    },
});

usersSchema.pre('save', async function () {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
});

usersSchema.post('validate', function (error, doc, next) {
    if (error.errors) {
        const validationErrors = Object.values(error.errors).map((err) => err.message);
        const errorMessage = validationErrors.join(', ');
        next(new Error(errorMessage));
    } else {
        next();
    }
});

const User = mongoose.model('User', usersSchema);
module.exports = User;