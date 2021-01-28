const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({

  displayName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true
  },
  username: {
    type: String,
    minlength: 4,
    trim: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  passsword: {
    type: String,
    minlength: 6,
    required: true
  },
  avatar: {
    type: String,
    maxlength: 512,
    required: false
  },
  role: {

  },
  status: {
    type: Boolean,
    default: true
  },
},
{
  timestamps: true
})

module.exports=mongoose.model('User', UserSchema)