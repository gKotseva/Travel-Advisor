const Destination = require('../models/destinations')

const router = require('express').Router()

router.get('/all', async (req, res) => {
    try {
      const destinations = await Destination.find();
      res.json(destinations);
    } catch (error) {
      console.error('Error fetching items:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  router.get('/destinations/:id', async (req, res) => {

    let currentDestination = req.params.id

    try {
      const destination = await Destination.findById(currentDestination);
      res.json(destination);
    } catch (error) {
      console.error('Error fetching items:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

module.exports = router
