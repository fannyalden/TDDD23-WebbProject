const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
var fs = require('fs');
var Images = require('../models/image');
const path = require('path');

router.post('/upload', function(req, res, next) {
  //  const imagePath = `./images/${req.files.image.name}`
  //  const imageName = `${req.files.image.name}`

    if(!req.files || !req.files.image) {
        return res.json({success: false, msg: "No file was uploaded"})
    }
    const imagePath = './images/'+ req.files.image.name
    const imageName = req.files.image.name


  // const Path = `./images/${req.files.image.name}`

    fs.writeFile(imagePath, req.files.image.data, function(err) {
        if(err) {
            console.log(err)
            return res.json({success: false, msg: "An error occured while writing file"})
        }
        let newImage = new Images({
            imagePath: '/images/' + imageName
            // imagePath: req.body.imagePath
        });

        Images.addImage(newImage, (err, user) => {
            console.log(err)
                res.json({success: true, msg: "Image added"})
            console.log("newImage: " + newImage.imagePath);
        });

        // Lägg in i databasen var bilden är uppladdad och vad den heter typ
        // console.log(req.files.image.name)
        console.log("imagePath: " + imagePath)
      //  console.log("imageName: " + imageName)

    });
});

router.get('/upload', (req, res, next) => {
    res.json({image: req.image})
});




module.exports = router