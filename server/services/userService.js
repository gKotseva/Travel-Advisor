const bcrypt = require('bcrypt')

const User = require("../models/user")
// const { SECRET } = require("../constants")
// const jwt = require('../lib/jwt')


exports.register = (userData) => User.create(userData)

// exports.login = async (email, password) => {
//     const user = await User.findOne({email})
//     console.log(user)

//     if(!user){
//         throw new Error(`User doesn't exist!`)
//     }
    
//     const isPasswordValid = await bcrypt.compare(password, user.password)

//     console.log(isPasswordValid)


//     if(!isPasswordValid){
//         throw new Error(`Incorrect password!`)
//     }

//     let payload = {_id:user._id, email: user.email}

//     console.log(payload)


//     const token = await jwt.sign(payload, SECRET, {expiresIn: '3d'})

//     console.log(token)


//     return token
// }