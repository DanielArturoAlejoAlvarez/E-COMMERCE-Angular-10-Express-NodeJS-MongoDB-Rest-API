const config = require('./config/config')
require('./database')

const app = require('./app')

app.listen(config.port, ()=>{
  console.log(`Server running in config.port: ${config.port}`)
})