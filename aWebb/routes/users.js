const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const Images = require('../models/image');

router.get('/:userId/images', function(req,res){
  let userId = req.params.userId;
  // Hämta bilder från användare med id userId
    console.log(userId)

  Images.getImages((err, data)=>{
      res.json(data)
  })
})

// Register
router.post('/register', function(req, res, next) {

  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });

  User.addUser(newUser, (err, user) => {
    if(err){
      res.json({success: false, msg:'Failed to register'});
    } else {
      res.json({success: true, msg:'User registered'});
    }
  });
});

// Authenticate, used to log in
router.post('/authenticate', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  //Check if user exists
  User.getUserByUsername(username, (err, user) => {
    if(err) throw err;
    if(!user){
      return res.json({success: false, msg: 'User not found'});
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch){
        const token = jwt.sign(user, config.secret, {
          expiresIn: 604800 // 1 week
        });

        res.json({
          success: true,
          token: 'JWT '+token, //Password
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email
          }
        });
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
});

// Profile
//Passport is a middlewear for authentication
//Passport.authenticate
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});
});

module.exports = router;
