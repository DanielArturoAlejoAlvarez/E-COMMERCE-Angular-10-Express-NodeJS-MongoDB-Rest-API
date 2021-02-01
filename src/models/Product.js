const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ProductSchema = new Schema({
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  },
  name: {
    type: String,
    required: true
  },
  excerpt: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  price: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    maxlength: 512,
    required: false
  },
  status: {
    type: Boolean,
    default: true
  }
},
{
  timestamps: true
})

module.exports = mongoose.model('Product', ProductSchema)