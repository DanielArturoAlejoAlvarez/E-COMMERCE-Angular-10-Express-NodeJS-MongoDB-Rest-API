const config = require('./config/config')
const mongoose = require('mongoose')

mongoose.connect(config.DB.URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true
})

const connection = mongoose.connection 

connection.once('open', ()=>{
  console.log("DB is connect!")
})

connection.on("error", (err)=>{
  console.log(err)
})