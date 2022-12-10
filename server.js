require('dotenv').config(); // Load env variables
const express = require('express');// bring in express to make our app
const morgan = require('morgan'); // nice logger for our request
const methodOverride = require('method-override'); // allows us to override post request from our ejs/forms
const Drinks = require('./models/drinks')
const PORT = process.env.PORT || 3031;
const DrinksRouter = require('./controllers/drinks');
const UserRouter = require('./controllers/user');
const session = require('express-session');
const MongoStore = require('connect-mongo');

// create express object
const app = express();

//////////////////////////////////////////////
//////// Middlewares
///////////////////////////////////////////////

app.use(morgan('tiny'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(session({
    secret: process.env.SECRET,
    store: MongoStore.create({ mongoUrl: process.env.DATABASE_URL }),
    saveUninitialized: true,
    resave: false
  })
)
// app.use('/drinks', DrinksRouter)
// app.use('/user', UserRouter)

// app.get('/', homeRoutes)
app.get('/', (req, res) => {
  res.redirect('/drinks')
})
// app.get('/store', storeRoutes)
// app.get('/user', userRoutes)
app.use('/drinks', DrinksRouter)


app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`))
