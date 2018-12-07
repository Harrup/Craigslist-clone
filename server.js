const   express = require('express'),
        serveStatic = require('serve-static'),
        path = require('path');

//create express app
const app = express();

//create middleware to handle the serving of the app
app.use('/', serveStatic(path.join(__dirname,'/public')))
app.get('*', function(req, res){
  res.sendFile(__dirname + '/public/index.html')
})

//create default port to handle serving of the App
const port = process.env.PORT || 5000
app.listen(port)
console.log('server started on port ' +port)
