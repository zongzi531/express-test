const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const port = process.env.PORT || 2001

app.use(bodyParser.urlencoded({ extended: false }))

const db = require('./mongo')
const addcat = require('./api/addCat')

app.post(addcat.path, addcat.callback)

const server = app.listen(port)
console.log(`listening: http://localhost:${port}/`)
