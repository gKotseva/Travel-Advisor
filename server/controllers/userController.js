const User = require('../models/user')
const userService = require('../services/userService')

const router = require('express').Router()

router.post('/register', async (req, res) => {
    const {firstName, lastName, email, password, repeatPassword} = req.body

    const userExists = await User.findOne({email})

    if(!userExists){
        try {
          if(password === repeatPassword){
            await userService.register({ firstName, lastName, email, password, repeatPassword });
            res.status(200).json({ success: true, firstName, lastName, email, message: 'Registration successful!' });
          } else {
            res.status(500).json({ success: false, error: 'Passwords should match!' });
          }
          } catch (error) {
            res.status(500).json({ success: false, error: error.message });
          }
    } else {
        res.status(409).json({ success: false, error: 'User already exists!' });
    }

})

router.post('/login', async (req, res) => {
  const {email, password} = req.body

  try {
      const result = await userService.login(email, password)
      const token = result.token
      const firstName = result.user.firstName
      const lastName = result.user.lastName
      res.cookie("token", token)
      res.status(200).send({message: 'Login successful!', token, firstName, lastName, email})
  } catch(error) {
    const message = error.message
    res.status(409).send({error: message})
  }
})

router.get('/logout', (req, res) => {
  res.clearCookie('token')
  res.status(200).send({message: 'Logout successful!'})
})

module.exports = router