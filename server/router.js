const router = require('express').Router()

const userController = require('./controllers/userController')
const destinationController = require('./controllers/destinationController')

router.use('/api/users', userController)
router.use('/api/destinations', destinationController)

module.exports = router

