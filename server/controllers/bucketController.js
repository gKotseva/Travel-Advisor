const bucketUser = require('../models/bucketUsers')
const router = require('express').Router()

router.post('/addBucket', async (req, res) => {

    const data = req.body
    const userEmail = data.user.email
    const currentPlace = data.currentPlace

    const userExists = await bucketUser.findOne({user: userEmail})

    if(userExists){
        try {
            await bucketUser.findOneAndUpdate(
                {user: userEmail},
                { $push: { bucketList: currentPlace } },
            )
            res.status(200).json({message: `Successfully added <${currentPlace.name}> to your bucket list!`})
        } catch (error){
            res.status(500).json({message: error})
        }
    } else {
        try {
            await bucketUser.create({user: userEmail, bucketList: currentPlace})
            res.status(200).json({message: `Successfully added <${currentPlace.name}> to your bucket list!`})
        } catch (error){
            res.status(500).json({message: error})
        }
    }

})

router.put('/addVisited', async (req, res) => {
    const data = req.body;
    const userEmail = data.user.email;
    const currentPlace = data.currentPlace;

    const userExists = await bucketUser.findOne({ user: userEmail });

    if (userExists) {
        try {
            await bucketUser.updateOne(
                { user: userEmail },
                { $push: { visited: currentPlace } }
            );
            res.status(200).json({ message: `Successfully added <${currentPlace.name}> to your bucket list!` });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    } else {
        try {
            await bucketUser.create({ user: userEmail, bucketList: [currentPlace] });
            res.status(200).json({ message: `Successfully added <${currentPlace.name}> to your bucket list!` });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
});

router.post('/all', async (req, res) => {
    const {email} = req.body
    try {
        let response = await bucketUser.findOne({user: email})
        res.json(response);
    } catch (error) {
        res.status(500).json({message: error})
    }
})

router.delete('/removeBucket', async (req, res) => {
    const request = req.body

    try {
        const response = await bucketUser.updateOne(
            {_id: request.documentID},
            { $pull: { bucketList: { name: request.name} } }
        )
        res.json(response);
    } catch (error) {
        res.status(500).json({message: error})
    }

})

router.post('/removeVisited', async (req, res) => {
    const request = req.body

    try {
        const response = await bucketUser.updateOne(
            {_id: request.documentID},
            { $pull: { visited: { name: request.name} } }
        )
        res.json(response);
    } catch (error) {
        res.status(500).json({message: error})
    }

})

module.exports = router
