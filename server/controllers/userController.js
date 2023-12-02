const User = require('../models/user')
const userService = require('../services/userService')

const router = require('express').Router()

router.post('/register', async (req, res) => {
    const {email, password, repeatPassword} = req.body

    const userExists = await User.findOne({email})

    if(!userExists){
        try {
            await userService.register({ email, password, repeatPassword });
            res.status(200).json({ success: true, message: 'Registration successful!' });
          } catch (error) {
            res.status(500).json({ success: false, error: 'Internal Server Error - Registration failed' });
          }
    } else {
        res.status(409).json({ success: false, error: 'User already exists!' });
    }

})

router.post('/login', async (req, res) => {
  const {email, password} = req.body

  try {
      const token = await userService.login(email, password)
      res.cookie("token", token)
      res.status(200).send({message: 'Login successful!', isAuthenticated: true})
  } catch(error) {
    const message = error.message
    res.status(409).send({message})
  }
})

router.get('/logout', (req, res) => {
  res.clearCookie('token')
  res.status(200).send({message: 'Logout successful!'})
})

module.exports = router