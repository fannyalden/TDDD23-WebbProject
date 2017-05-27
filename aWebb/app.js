const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

// Connect To Database
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', function(){
  console.log('Connected to database '+config.database);
});

// On Error
mongoose.connection.on('error', function(err) {
  console.log('Database error: '+err);
});

const app = express();

const fileUpload = require('express-fileupload');
const users = require('./routes/users');
const images = require('./routes/images')

// Port Number
const port = 4000;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());
app.use(fileUpload())

require('./config/passport')(passport);

app.use('/users', users);
app.use('/images', images);
// Visar alla bilder i mappen images när man går in på localhost/images/<bildnamn>
app.use('/images', express.static(__dirname + '/images'));

// Index Route
app.get('/', function(req, res) {
  res.send('Invalid Endpoint');
});

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start Server
app.listen(port, function() {
  console.log('Server started on port '+port);
});
