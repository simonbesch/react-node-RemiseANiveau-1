const express = require('express') 
const path = require('path')
const res = require('express/lib/response')
require('dotenv').config()
const PORT = process.env.PORT || 6868

const app = express()

app.use(express.json())

app.use(express.static('client/build'))

app.get('/api/youtube', (req,res) => {
    res.send({
        msg: "bonjourrr les coders"
    })
})

app.get('/*', (_, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'))
})

app.listen(PORT, () => {
    console.log(`Le serveur est lancé sur le port : ${PORT}`)
})