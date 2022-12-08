require('dotenv').config()
const mongoose = require('./connection')
const Drinks = require('./drinks')


mongoose.connection.on('open', () => {

  // array of starter drinks
  const drinksData = [
    {
      name: 'Brooklyn Brewery Special Effects Hoppy Amber',
      type: 'Beer',
      img: 'https://www.liquor.com/thmb/Sh3V6Ah_VcK2iW7JbrhEYkSIyhI=/fit-in/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/beer-12x-828x1024-53368d9cf0984bff823861aaf3f46c5b.jpg',
      abv: '.5%',
      desc: 'Citrus brew with a slightly bitter taste.'
    },
    {
      name: 'Athletic Brewing Company Run Wild IPA',
      type: 'Beer',
      img: 'https://gumcreekbiergarten.files.wordpress.com/2019/05/athletic-brewing-run-wild-ipa_edited.jpg',
      abv: '.5%',
      desc: 'Heavy malt brew similar to a WEST Coast IPA'
    },
    {
      name: 'Heineken Non-Alcoholic 0.0',
      type: 'Beer',
      img: 'https://images-cdn.ubuy.co.id/798N12IE-heineken-0-0-non-alcoholic-beer.jpg',
      abv: '.03%',
      desc: 'Malt beverage with a characteristic skunkiness taste.'
    },
    {
      name: 'Lagunitas Hi-Fi Hops Unplugged',
      type: 'Beer',
      img: 'https://tymber-blaze-products.imgix.net/87190681-115d-4e6e-bb07-838398a2ff73.jpeg',
      abv: '.5%',
      desc: 'Contains 18 milligrams of CBD and less than 2 milligrams of THC. With notes of hops, banana, and citrus this beer is meant to calm without providing a psychoactive experience '
    },
    {
      name: 'Suntory ALL-FREE',
      type: 'Beer',
      img: 'https://drinkhacker.com/wp-content/uploads/2020/07/Product-with-Beer-Glass-720x720-d8330d38-1fca-46d7-a40d-dcd5fc83ecc5.jpg',
      abv: '0%',
      desc: 'This beverage is not exactly a beer, but it’s pretty close—and it has zero calories and an ABV of 0%. The drink is made from two-row barley malt, aroma hops, and mineral water, resulting in a sort of half-beer, half-sparkling water hybrid that will be of interest to NA beer drinkers. '
    },
    {
      name: 'BrewDog Hazy AF',
      type: 'Beer',
      img: 'https://www.porchdrinking.com/wp-content/uploads/2021/01/brewdog-hazy-af-glass.jpg',
      abv: '.5%',
      desc: 'Hazy AF is bold and assertive, with notes of juicy tropical fruit notes'
    },
    {
      name: 'Bravus Oatmeal Dark',
      type: 'Beer',
      img: 'https://cdn.trendhunterstatic.com/thumbs/462/bravus-oatmeal-dark.jpeg?auto=webp',
      abv: '.5%',
      desc: 'A hearty oatmeal dark stout from Bravus has rich chocolate, coffee, and caramel notes.'
    },
    {
      name: 'Lagunitas Brewing Company IPNA',
      type: 'Beer',
      img: 'https://imengine.prod.srp.navigacloud.com/?uuid=40c7ef0f-bc30-534a-b8e0-5225bf3ebdfd&type=primary&q=72&width=1200',
      abv: '.5%',
      desc: 'The flavor is pretty close to the regular Lagunitas IPA, with notes of pine and citrus and a dose of bitterness.'
    },
    {
      name: 'Sam Adams Just the Haze IPA',
      type: 'Beer',
      img: 'https://www.samueladams.com//app_media/SamAdamsRedux/Just-The-Haze/JustTheHaze_headerBk_final.file',
      abv: '.5%',
      desc: 'Samuel Adams Just the Haze explodes with aroma, delivering hints of grapefruit, tangerine and lime complemented by tropical fruit notes like pineapple, guava and passion fruit.'
    }
  ]

  // Delete all drinks
  Drinks.remove({}, (err, data) => {
    // Seed Starter Fruits
    Drinks.create(startFruits, (err, data) => {
      // send created fruits as response to confirm creation
      res.json(data)
    })
  })
})
