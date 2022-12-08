//////////////////////////////////////////////
//////// Fruits Model
///////////////////////////////////////////////
const mongoose = require('./connection')

const { Schema, model } = mongoose // destructuring, grabbing model and Schema off mongoose variable
// mongoose.Schema
// mongoose.model

const drinksSchema = new Schema({
  name: String,
  type: String,
  img: String,
  abv: Number,
  desc: String
  
})

const Drinks = model('drinks', drinksSchema)

module.exports = Drinks
