const mongoose = require('mongoose')

const termSchema = new mongoose.Schema({
  name: String,
  description: String,
  url: String,
})

module.exports = mongoose.model('Term', termSchema)
