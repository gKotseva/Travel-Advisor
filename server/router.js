const router = require('express').Router()

const userController = require('./controllers/userController')
const destinationController = require('./controllers/destinationController')
const bucketController = require('./controllers/bucketController')

router.use('/api/users', userController)
router.use('/api/destinations', destinationController)
router.use('/api/bucket', bucketController)

module.exports = router

