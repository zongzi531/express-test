const mongoose = require('mongoose')

const CatSchema = new mongoose.Schema({
  name: String,
  sex: String
})

module.exports = CatSchema