var express = require('express'); //for routing
var app = express(); //init the server


//connection to DB
var connection=mongoose.createConnection('mogodb'://Gitelki:025385507@ds032319.mlab.com:32319/jce16')

var port = process.env.PORT || 3000;
//initalization for using POST calls
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));//read URL encoded
app.use(bodyParser.json()); //read json data

//static routes init
//app.use('/app', require('./controllers/app.controller'));
app.use('/app', express.static('app'));


// make '/app' default route
app.get('/', function (req, res) {
    return res.redirect('/app');
});

//listen on port
var server = app.listen(port, function(){
   console.log('Server listening at http://' + server.address().address + ':' + server.address().port);
});
