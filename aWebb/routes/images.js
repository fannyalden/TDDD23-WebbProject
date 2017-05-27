var express = require('express');
var router = express.Router();
var passport = require('passport');
var jwt = require('jsonwebtoken');
var config = require('../config/database');
var fs = require('fs');
var Images = require('../models/image');
router.post('/upload', function (req, res, next) {
    //  const imagePath = `./images/${req.files.image.name}`
    //  const imageName = `${req.files.image.name}`
    console.log(req.files);
    var newImage = new Images({
        imageName: req.body.imageName
        // imagePath: req.body.imagePath
    });
    if (!req.files || !req.files.image) {
        return res.json({ success: false, msg: "No file was uploaded" });
    }
    var imagePath = './images/' + req.files.image.name;
    var imageName = req.files.image.name;
    // const Path = `./images/${req.files.image.name}`
    fs.writeFile(imagePath, req.files.image.data, function (err) {
        if (err) {
            console.log(err);
            return res.json({ success: false, msg: "An error occured while writing file" });
        }
        Images.addImage(newImage, function (err, user) {
            res.json({ success: true, msg: "Image added" });
            console.log("newImage: " + newImage.imageName);
        });
        // Lägg in i databasen var bilden är uppladdad och vad den heter typ
        // console.log(req.files.image.name)
        console.log("imagePath: " + imagePath);
        //  console.log("imageName: " + imageName)
    });
});
router.get('/upload', function (req, res, next) {
    res.json({ image: req.image });
});
module.exports = router;
