const {PORT, DB_URL} = require('./constants')
const mongoose = require('mongoose')

const express = require('express')

const app = express()

async function dbConnect(){
    await mongoose.connect(DB_URL)
}

dbConnect()
.then(() => {
    console.log(`Connected to the database!`)
})
.catch((e) => console.log(`Error connecting to the database! Error message: ${e}`))

app.listen(PORT, console.log(`Server is listening on port: ${PORT}`))