const express = require('express'); // bring this in so we can make our router
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

// INDEX GET /soda -> a list of sodas
router.get('/', (req, res) => {
  // Get all drinks from mongo and send them back
  Drinks.find({}).then((drinksData) => {
    // res.json(drinks)
    console.log(drinksData)
    res.render('drinks/index.ejs', { drinksData })
  })
})

// New Route GET /soda/new -> page with a create form
router.get('/new', (req, res) => {
  res.render('drinks/new.ejs')
})

// Create Route POST /drinks -> creates a new drink, redirect back to index
router.post('/', (req, res) => {
  // add username to req.body to track related user
  // req.body.username = req.session.username
  // create the new drinks
  Drinks.create(req.body, (err, drinks) => {
    // redirect the user back to the main drinks page after drinks created
    res.redirect('/drinks')
  })
})

// EDIT Route Get /soda/:id/edit -> create form to update soda
router.get("/:id/edit", (req, res) => {
  Drinks.findById(req.params.id), (err, foundDrinks)
  console.log(foundDrinks, "this is the drink we found")
  res.render('drinks/edit.ejs', { drinks: foundDrinks })
})
 
// router.put('/:id', (req, res) => {
//   Drinks.findByIdAndUpdate(
//     req.params.id,
//     req.body,
//     { new: true },
//     (err, updatedDrinks) => {
//       console.log(updatedDrinks)

//       res.redirect(`/drinks/${req.params.id}`)
//     }
//   )
// })

router.get('/:id', (req, res) => {
  // Go and get drinks from the database
  Drinks.findById(req.params.id).then((drinksData) => {
    res.render('drinks/show.ejs', { drinksData })
  })
})

// // Destroy Route Delete /drinks/:id => deletes an individual 
// router.delete("/drinks/:id", (req, res) => {
//   Drinks.destroy(req.params.id)
//   console.log(req.params.id)
//     res.redirect("/drinks")
// })

/////////////
///// export this router to use in other files
//////////////
module.exports = router
