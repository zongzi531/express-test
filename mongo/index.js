const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

const address = 'localhost'
const path = 'test'

const db = mongoose.createConnection(address, path)

db.on('error', console.error.bind(console, 'connection error'))

db.once('open', () => {
  console.log(`connecting mongodb://${address}/${path} success.`)
})

module.exports = db
