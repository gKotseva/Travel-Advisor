const bucketUser = require('../models/bucketUsers')

const router = require('express').Router()

router.post('/add', async (req, res) => {

    const data = req.body
    const userEmail = data.user.email
    const currentPlace = data.currentPlace

    const userExists = await bucketUser.findOne({user: userEmail})

    if(userExists){
        try {
            await bucketUser.findOneAndUpdate(
                {user: userEmail},
                { $push: { place: currentPlace } },
            )
            res.status(200).json({message: `Successfully added <${currentPlace.name}> to your bucket list!`})
        } catch (error){
            res.status(500).json({message: error})
        }
    } else {
        try {
            await bucketUser.create({user: userEmail, place: currentPlace})
            res.status(200).json({message: `Successfully added <${currentPlace.name}> to your bucket list!`})
        } catch (error){
            res.status(500).json({message: error})
        }
    }

})

router.get('/all', async (req, res) => {
    try {
        let response = await bucketUser.find()
    } catch (error) {
    }
})

module.exports = router
