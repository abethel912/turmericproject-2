const Drinks = require('./drinks')
const mongoose = require('./connection')

mongoose.connection.on('open', () => {
  // define data we want to put in the database
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
    },
    {
      name: 'Stella Rosa Peach Non-Alcoholic',
      type: 'Wine',
      img: 'https://www.totalwine.com/dynamic/x490,sq/media/sys_master/twmmedia/hb7/hc1/13376471334942.png',
      abv: '0%',
      desc: 'Moscato-based blend infused with natural white and yellow peach flavors. Its a semi-sweet and lightly sparkling wine that will leave a delicate flavor on your palate and nose.'
    },
    {
      name: 'Thomson & Scott — Noughty Alcohol-Free Sparkling Rosé',
      type: 'Wine',
      img: 'https://cdn.shopify.com/s/files/1/0493/3206/0322/products/Thomson-Scott-Noughty-Alcohol-Free-Sparkling-Rose-Front-060_1680x.jpg?v=1660893897',
      abv: '0%',
      desc: 'Made with a spirit of transparency and playfulness, Thomson & Scott’s Noughty wines are organic, sustainably sourced, and free of unnecessary fillers. '
    },
    {
      name: 'Fre White Zinfandel',
      type: 'Wine',
      img: 'https://www.totalwine.com/dynamic/x490,sq/media/sys_master/twmmedia/hb0/h8f/16012951748638.png',
      abv: '.5%',
      desc: 'California- A delicious alcohol-removed White Zinfandel with strawberry and cranberry aromas leading to refreshing flavors of ripe berries followed by a pleasant, lingering finish.'
    },
    {
      name: 'Rondel Zero Non-Alcoholic Cava',
      type: 'Wine',
      img: 'https://www.totalwine.com/dynamic/x490,sq/media/sys_master/twmmedia/hbb/h1e/16096898678814.png',
      abv: '.5%',
      desc: 'Spanish winemakers have been making sparkling wine via the traditional method since the early 1870s. Those who wish to partake in the festivities with a glass of bubbly sans booze can pour a glass of Rondel Zero Non-Alcoholic Cava.'
    },
    {
      name: 'Ariel Cabernet Sauvignon Non-Alcoholic Wine',
      type: 'Wine',
      img: 'https://m.media-amazon.com/images/I/51TLgbzav7L._SL1500_.jpg',
      abv: '.5%',
      desc: 'Red wine drinkers looking to cut back on alcohol will appreciate this oak-aged Cabernet Sauvignon made by Ariel Vineyards.'
    },
    {
      name: 'Pierre Chavin Perle Rose Non-Alcoholic Sparkling Rose',
      type: 'Wine',
      img: 'https://m.media-amazon.com/images/I/410-wTqa9lL.jpg',
      abv: '0%',
      desc: "Pierre Chavin Perle Rose non-alcoholic sparkling rose wine is adorned with a pale pink color and intense shine. The nose reveals delicate aromas of rose petals which is further expressed by the wine's unique color. The palate is elegant and has perfectly integrated flavors. The wine's balance is enhanced by a pleasant and sweet freshness."
    },
    {
      name: 'Señorio de la Tautila Espumoso Blanco Non-Alcoholic Sparkling Wine.',
      type: 'Wine',
      img: 'https://m.media-amazon.com/images/I/61k28mxbxlL._SL1500_.jpg',
      abv: '0%',
      desc: 'This brut NA Spanish sparkler is made using traditional winemaking methods and then dealcoholized.'
    },
    {
      name: 'Giesen Marlborough Sauvignon Blanc 0% Alcohol',
      type: 'Wine',
      img: 'https://www.totalwine.com/dynamic/x490,sq/media/sys_master/twmmedia/h62/he5/14554457767966.png',
      abv: '0%',
      desc: 'This alcohol-removed wine offers delicate aromas of fresh lime, redcurrant, & lemon shortbread. Delicious citrus flavors followed by distinct blackcurrant & passionfruit notes define this premium Marlborough Sauvignon Blanc. Finishes crisp & dry with juicy brightness.'
    },
    {
      name: 'Chatêau De Fleur Non-Alcoholic Sparkling Wine Champagnette',
      type: 'Wine',
      img: 'https://www.winemag.com/wp-content/uploads/2022/02/02_22_N-A_Bottles_9_Chateau_de_Fleur_600wide.jpg',
      abv: '0%',
      desc: 'Refreshing and crisp, this non alcoholic selection has flavors of apple and peach with bubbles that dance on your taste buds. Enjoy chilled on its own or add orange juice to make mimosas. A great alternative for festive occasions! 0% Alcohol, 100% juice.'
    },
    {
      name: 'Seedlip Garden 108 Non-Alcoholic Spirit',
      type: 'Spirit',
      img: 'https://www.liquor.com/thmb/wkBGq83-BIKY8Dn1mkFjBo7Hbiw=/fit-in/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SEEDLIPGarden108Non-AlcoholicSpirit-fd85510f0e70499aa00087503839dbec.jpg',
      abv: '0%',
      desc: 'Founded in 2013 by Ben Branson, Seedlip bills itself as a booze-free line of botanical spirit alternatives. While the original flavor is an excellent alternative to gin or vodka, “my favorite expression is the Garden 108,” says Alejandro Ibanez of Dilworth Tasting Room. “It has flavors of fresh peas and garden herbs that give the spirit very herbaceous notes. That makes it taste similar to the French liquors—Benedictine, Chartreuse, genepy. I find its silky texture is perfect to create Martini-esque and spirit-forward cocktails.”'
    },
    {
      name: 'Spiritless Kentucky 74',
      type: 'Spirit',
      img: 'https://www.liquor.com/thmb/saZa1qwbBUr04AB9NEXSbvHnf_Y=/fit-in/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/ScreenShot2022-07-21at1.15.32PM-4e5e519091924e02ae47a929e4a7f8b8.jpg',
      abv: '.4%',
      desc: 'This nonalcoholic distilled tipple starts as a high-proof aged spirit that is then additionally distilled, using a proprietary method, to remove almost all of the alcohol. The resulting spirit sits at around 0.5 percent (the same ABV as regular kombucha) and is full of caramel, vanilla, and oak flavors. Refreshing and crisp, this non alcoholic selection has flavors of apple and peach with bubbles that dance on your taste buds. Enjoy chilled on its own or add orange juice to make mimosas. A great alternative for festive occasions! 0% Alcohol, 100% juice.'
    },
    {
      name: 'ArKay Alcohol-Free Rum',
      type: 'Spirit',
      img: 'https://www.liquor.com/thmb/DJcjyH4_LIgFqt_zpHc7QfuTMKY=/fit-in/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/61JXAXTR4hS._SL1500_-3ae0868510ea440a90b0aa1c024e656b.jpg',
      abv: '0%',
      desc: 'ArKay was born in Dubai, where abstaining is a common practice due to religious imperatives. The brand concocts a wide range of spirits, including tequila, brandy, and several whiskeys, as well as the spiced rum featured here. Try it in a Cuba Libre or pour it into a Pina Colada to cut the sweetness of the pineapple and coconut.'
    },
    {
      name: 'MONDAY Zero Alcohol Gin',
      type: 'Spirit',
      img: 'https://www.liquor.com/thmb/_1-KOUvKoO9GM6rxvLurAFFcDKU=/fit-in/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/ScreenShot2022-07-21at2.59.38PM-9a999b6b6d784e718ef0cd4ebf01041d.jpg',
      abv: '0%',
      desc: '"As far an n/a spirit goes, I really like what Monday Gin is doing,” says Robert Kidd, the head bartender at the award-winning Le Cavalier in Wilmington, DE. “The flavors are pretty spot-on, and it isn’t hard to get a hold of. There are some other great n/a spirits out there, but as far as accessibility, Monday can be found everywhere.'
    },
    {
      name: 'Curious Elixirs No. 1 Booze-Free Cocktail',
      type: 'Spirit',
      img: 'https://www.liquor.com/thmb/TLRTuaAZ3whO34MxeFg04QP5BN0=/fit-in/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Curious-Elixirs-1-Hero-Product-fcb36aac8e91490c84a4a6d79fd63b1d.jpg',
      abv: '0%',
      desc: 'Based out of the Hudson Valley, Curious Elixirs crafts nonalcoholic cocktails packaged in double-serving bottles. Curious No. 1 riffs on the Negroni by using pomegranate and rhodiola extracts, while No. 2 tastes like a Dark & Stormy. Curious No. 3, packed with lemon, cucumber, and genepy-leaning herbs, tastes like a Collins. '
    },
    {
      name: 'Proteau Zero-Proof Botanical Drinks',
      type: 'Spirit',
      img: 'https://www.liquor.com/thmb/U67sry9HNVgVtEcX-PgmradcZYk=/fit-in/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/proteau-DRYSPIRITS0721-fc1fb315b0d743f3a0f4dd0602622aa8.jpg',
      abv: '0%',
      desc: 'If you’re looking for something more vibrant, the recently-released Rivington Spritz is a refreshing, tart little number with hibiscus, chamomile, strawberry, and Champagne vinegar.'
    },
    {
      name: "Lyre's Italian Orange Non-Alcoholic Spirit",
      type: 'Spirit',
      img: 'https://www.winemag.com/wp-content/uploads/2022/02/02_22_N-A_Bottles_9_Chateau_de_Fleur_600wide.jpg',
      abv: '.5%',
      desc: 'Lyre’s Italian Orange expression is formulated to replicate a bitter orange aperitif, e.g. Campari. This particular flavor stands up well poured into a Negroni, an Americano, or a Spritz. Lyre’s offers almost a dozen different mixers, so you can replicate a full range of classic cocktails (think Espresso Martinis or Manhattans) with their portfolio alone.'
    },
    {
      name: 'Aplós Hemp-Infused Non-Alcoholic Spirit',
      type: 'Spirit',
      img: 'https://www.liquor.com/thmb/7gqXddiRt_AB7WjahpIWLtJUU2U=/fit-in/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/aplos-FT-BLOG0121-8ed713fa85df4754a0f824b8c7dc9241.jpg',
      abv: '0%',
      desc: 'While many of the n/a spirits in our roundup are built around big flavor infusions to replicate the missing alcohol notes, Aplos takes a different tack: their spirit is built around CBD. Instead of getting you dizzy and tipsy, this hemp-infused, nonalcoholic beverage aims to get you blissed out and uplifted.'
    },
    {
      name: 'Ghia Non-Alcoholic Apéritif',
      type: 'Spirit',
      img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRAQkTcQkePyeHitcMBp6K8HXAyWwvWab-bdzBO_h1xzCwfQOf3HVea3WIvDJ6kRsbSt2yoQJcOCXrS0afE1lu_OUJ2VftOpQ',
      abv: '0%',
      desc: 'Inspired by the Mediterranean tradition of aperitivo hour, Ghia drinks like an elevated amaro. Founder Melanie Masarin blended Riesling grape juice with a range of herbs and extracts to replicate the complexity of apres-dinner drinks. It’s also available in single-serving spritz form. '
    }
  ]
  // Delete all drinks
  Drinks.deleteMany({}, (err, data) => { })
    // Seed Starter Drinks
    Drinks.create(drinksData, (err, data) => {
      // send created drinks as response to confirm creation
      console.log(data, "Created data")
      console.log(err, "Error here")
      mongoose.connection.close()
    })
  })

