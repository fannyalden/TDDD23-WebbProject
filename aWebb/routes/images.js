var express = require('express');
var router = express.Router();
var passport = require('passport');
var jwt = require('jsonwebtoken');
var config = require('../config/database');
var User = require('../models/user');
var fs = require('fs');
var Images = require('../models/image');
router.post('/upload', function (req, res, next) {
    var newImage = new Images({
        imageName: req.body.imageName,
        imagePath: req.body.imagePath,
        imageTags: req.body.imageTags
    });
    Images.addImage(newImage, function (err, image) {
        if (err) {
            res.json({ success: false, msg: 'Failed to upload image' });
        }
        else {
            res.json({ success: true, msg: 'image uploaded' });
        }
    });
    //const description = req.body.description
    if (!req.files || !req.files.image) {
        return res.json({ success: false, msg: "No file was uploaded" });
    }
    var imagePath = "./images/" + req.files.image.name;
    //const imagePath = req.body.imagePath;
    //console.log(imagePath);
    fs.writeFile(imagePath, req.files.image.data, function (err) {
        if (err) {
            console.log(err);
            return res.json({ success: false, msg: "An error occured while writing file" });
        }
        res.json({ success: true, msg: "Image added" });
        // Lägg in i databasen var bilden är uppladdad och vad den heter typ
        console.log(req.files.image.name);
        //console.log(imagePath)
    });
});
module.exports = router;
