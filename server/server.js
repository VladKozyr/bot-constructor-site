const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
const apiPort = process.env.PORT || 5000
const uri = process.env.ATLAS_URI

mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() => {
    console.log("DB connected...")
}).catch((err) => {
    console.error(err)
})

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))