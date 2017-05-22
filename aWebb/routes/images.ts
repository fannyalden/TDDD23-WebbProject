const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const fs = require('fs');
const Images = require('../models/image');

router.post('/upload', function(req, res, next) {
    let newImage = new Images({
        imageName: req.body.imageName,
        imagePath: req.body.imagePath,
        imageTags: req.body.imageTags
    });

    Images.addImage(newImage, (err, image) => {
        if(err){
            res.json({success: false, msg:'Failed to upload image'});
        } else {
            res.json({success: true, msg:'image uploaded'});
        }
    });
    //const description = req.body.description

    if(!req.files || !req.files.image) {
        return res.json({success: false, msg: "No file was uploaded"})
    }
    const imagePath = `./images/${req.files.image.name}`
    //const imagePath = req.body.imagePath;
    //console.log(imagePath);

    fs.writeFile(imagePath, req.files.image.data, function(err) {
        if(err) {
            console.log(err);
            return res.json({success: false, msg: "An error occured while writing file"})
        }

        res.json({success: true, msg: "Image added"})

        // Lägg in i databasen var bilden är uppladdad och vad den heter typ
        console.log(req.files.image.name)
        //console.log(imagePath)

    });

});

module.exports = router