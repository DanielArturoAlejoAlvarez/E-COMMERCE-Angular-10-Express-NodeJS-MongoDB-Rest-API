const express = require('express')
const morgan = require('morgan')

const app = express()
const port = process.env.PORT || 3000

//Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'))

app.get('/', (req,res)=>{
  res.json({
    msg: "Welcome a E-Commerce REST API"
  })
})

app.listen(port, ()=>{
  console.log(`Server running in port: ${port}`)
})