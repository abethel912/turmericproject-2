// import 
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const DrinksRouter = require('./controllers/drinks')
const UserRouter = require('./controllers/user')
// const mongoose = require("mongoose");


// create express app
const app = express();

// // establish mongo connection
// mongoose.connect(process.env.DATABASE_URL);

// // mongoose connection events
// mongoose.connection.on("open", () => console.log("Connected to Mongo"));
// mongoose.connection.on("close", () => console.log("Disconnected from Mongo"));
// mongoose.connection.on("error", (error) => console.log(error));

// // register my middleware
// app.use(morgan("dev"));
// app.use("/static", express.static("public"));
// app.use(express.urlencoded({ extended: true }))
// app.use(methodOverride("_method"))
// app.use('/drinks', DrinksRouter)
// app.use('/user', UserRouter)

// routes and routers
app.get("/", (req, res) => {
  res.send("<h1>Server is working </h1>")
})

// start the server
const PORT = process.env.port || 3000
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))
