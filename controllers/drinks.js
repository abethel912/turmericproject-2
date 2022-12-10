const express = require('express') // bring this in so we can make our router
const Drinks = require('../models/drinks')

/////
// Create Router  variable to attach rooutes
/////

const router = express.Router(); // router will have all routes attached to it

// router.use((req, res, next) => {
//   if (req.session.loggedIn) {
//     next()
//   } else {
//     res.redirect('/user/login')
//   }
// })

router.get('/', (req, res) => {
  // Get all drinks from mongo and send them back
  Drinks.find({}).then((drinksData) => {
    // res.json(drinks)
    res.render('drinks/index.ejs', { drinksData })
  })
})

router.get('/new', (req, res) => {
  res.render('drinks/new.ejs')
})

// create route
router.post('/', (req, res) => {
  // add username to req.body to track related user
  req.body.username = req.session.username
  // create the new fruit
  Drinks.create(req.body, (err, drinks) => {
    // redirect the user back to the main drinks page after fruit created
    res.redirect('/drinks')
  })
})

router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  // Find the drink and send it to the edit.ejs  to prepopulate the form
  Drinks.findById(id, (err, foundFruit) => {
    // res.json(foundFruit)
    res.render('drinks/edit.ejs', { fruit: foundFruit })
  })
})

router.put('/:id', (req, res) => {
  Drinks.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedDrinks) => {
      console.log(updatedDrinks)

      res.redirect(`/drinks/${req.params.id}`)
    }
  )
})

router.get('/:id', (req, res) => {
  // Go and get fruit from the database
  Fruit.findById(req.params.id).then((fruit) => {
    res.render('drinks/show.ejs', { drinks })
  })
})

router.delete('/:id', async (req, res) => {
  // Method 1
  // Fruit.findByIdAndDelete(req.params.id, (err, deletedFruit) => {
  //     console.log(err, deletedFruit)
  //     res.redirect('/fruits')
  // })

  // // Method 2
  // Fruit.findByIdAndDelete(req.params.id)
  // .then((deletedFruit) => {
  //     console.log(err, deletedFruit)
  //     res.redirect('/fruits')
  // })
  // .catch(err => console.log(err))

  // Method 3 async await

  const deletedDrinks = await Drinks.findByIdAndDelete(req.params.id)

  if (deletedDrinks) {
    res.redirect('/drinks/')
  }
})

/////////////
///// export this router to use in other files
//////////////
module.exports = router
