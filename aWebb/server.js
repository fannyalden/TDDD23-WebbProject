var express = require('express');
var app = express();
//Use 8080, but if the enviorment to wich you're deploying to has a specific server that it requires to, use that.
var port = process.env.PORT || 8080;
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = express.Router(); // Define the router
var appRoutes = require('./app/routes/api')(router); // Use the router object with this route
var path = require('path');

//It is important to do this in the right order.
//First it will log all the requests, then parse the data and then use routes.
app.use(morgan('dev'));
app.use(bodyParser.json()); // for parsing application json
app.use(bodyParser.urlencoded({extended:true})); //for parsing application/ x-www-form-urlencoded
app.use(express.static(__dirname + '/public')); //Let the front end acces all the backend-stuff
app.use('/api',appRoutes); //http://localhost:8080/api/routes instead of http://localhost:8080/routes, so that it wont conflict with the frontend

//Connect to mongoose database (look at mongoose webpage to see how to o this)
//Connect to the same port as your mongodb server is running on
mongoose.connect('mongodb://localhost:27017/tutorial', function(err){
    //Check if connected to the database
    if(err){
        console.log('Not connected to the database '+ err);
    }else{
        console.log('Succesfully connected to MongoDB');
    }
});

//Connect to the index. (* means, no mather what the user types, feed this index page)
app.get('*', function(req, res){
    res.sendfile(path.join(__dirname + '/public/app/views/index.html'));
});

app.listen(port, function(){
    console.log('running the server on port ' + port);
});