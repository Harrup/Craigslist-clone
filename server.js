const   express = require('express'),
        serveStatic = require('serve-static'),
        path = require('path'),
        categoriesData = require('./data/categories.js'),
        citiesData = require('./data/cities.js'),
        itemsData = require('./data/items.js'),
        trendingTagsData = require('./data/trending.js')

//create express app
const app = express();

//create middleware to handle the serving of the app
app.use('/', serveStatic(path.join(__dirname,'/public')))

//api

//sends cities data
app.get('/api/cities', function(req, res){
  res.json(citiesData)
})

//sends trending tags data for the home page
app.get('/api/trending', function(req, res){
  res.json(trendingTagsData)
})

//sends categories data for a particular city, displays all categories available for the city
app.get('/api/:city', function(req, res){
  res.json(categoriesData)
})

//sends all items available for the entire category
app.get('/api/:city/:category', function(req, res){
  let filteredData;
  if(req.query.min_price != undefined){
    filteredData = itemsData.filter((item) => {
      return item.city == req.params.city && item.category == req.params.category && item.price >= req.query.min_price && item.price <= req.query.max_price
  })
  } else{
    filteredData = itemsData.filter((item) => {
      return item.city == req.params.city && item.category == req.params.category
  })
  }

  res.json(filteredData)
})

//sends all items available for the particular listing
app.get('/api/:city/:category/:listing', function(req, res){
  let filteredData;
  if(req.query.min_price != undefined){
    filteredData = itemsData.filter((item) => {
      return item.city == req.params.city && item.category == req.params.category && item.listing == req.params.listing && item.price >= req.query.min_price && item.price <= req.query.max_price
  })
  } else{
    filteredData = itemsData.filter((item) => {
      return item.city == req.params.city && item.category == req.params.category && item.listing == req.params.listing
  })
  }

  res.json(filteredData)
})

app.get('/api/:city/:category/:listing/:item', function(req, res){
    const filteredData = itemsData.filter((item) =>{
      return item.id == req.params.item
    })
    res.json(filteredData)
})

app.get('*', function(req, res){
  res.sendFile(__dirname + '/public/index.html')
})

//create default port to handle serving of the App
const port = process.env.PORT || 5000
app.listen(port)
console.log('server started on port ' +port)
