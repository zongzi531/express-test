const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const port = process.env.PORT || 2001

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at:', p, 'reason:', reason)
  // application specific logging, throwing an error, or other logic here
  // DOCS: https://nodejs.org/api/process.html#process_event_unhandledrejection
})

app.use(bodyParser.urlencoded({ extended: false }))

const db = require('./mongo')
const addcat = require('./api/addCat')

app.post(addcat.path, addcat.callback)

const server = app.listen(port)
console.log(`listening: http://localhost:${port}/`)
