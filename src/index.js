const config = require('./config/config')
require('./database')
const express = require('express')
const morgan = require('morgan')

const app = express()

//Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'))

app.get('/', (req,res)=>{
  res.json({
    msg: "Welcome a E-Commerce REST API"
  })
})

app.listen(config.port, ()=>{
  console.log(`Server running in config.port: ${config.port}`)
})