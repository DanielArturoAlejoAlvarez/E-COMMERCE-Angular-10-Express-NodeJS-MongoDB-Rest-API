const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ClientSchema = new Schema({
  displayName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
},
{
  timestamps: true
})

module.exports = mongoose.model('Client', ClientSchema)