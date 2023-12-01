const express = require('express')
const { default: mongoose } = require('mongoose')
const Destination = require('./models/destinations')
const User = require('./models/user')
const routes = require('./router')
const cookieParser = require('cookie-parser')


const app = express()
const PORT = 8888
const DB_URL = 'mongodb://localhost:27017/Travel-Advisor'

app.use(express.json())
app.use(cookieParser())

async function dbConnect(){
    await mongoose.connect(DB_URL)
}

dbConnect()
.then(() => {
    console.log(`Connected to the database!`)
})
.catch((e) => console.log(`Error connecting to the database! Error message: ${e}`))

app.get('/api/destinations', async (req, res) => {
    try {
      const destinations = await Destination.find();
      res.json(destinations);
    } catch (error) {
      console.error('Error fetching items:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

app.use(routes);

app.listen(PORT, console.log(`Server is listening on port: ${PORT}`))