//////////////////////////////////////////////
//////// Database Connections
///////////////////////////////////////////////
require('dotenv').config() // Load env variables
const mongoose = require('mongoose') //

const DATABASE_URL = process.env.DATABASE_URL
const CONFIG = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

// establish mongo connection
mongoose.connect(process.env.DATABASE_URL)

// mongoose connection events
mongoose.connection.on('open', () => console.log('Connected to Mongo'))
mongoose.connection.on('close', () => console.log('Disconnected from Mongo'))
mongoose.connection.on('error', (error) => console.log(error))

/////////////
///// export this router
//////////////
module.exports = mongoose
