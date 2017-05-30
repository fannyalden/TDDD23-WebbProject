var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var fs = require('fs');
var Images = require('../models/image');
var path = require('path');
router.post('/upload', function (req, res, next) {
    if (!req.files || !req.files.image) {
        return res.json({ success: false, msg: "No file was uploaded" });
    }
    var imagePath = './images/' + req.files.image.name;
    var imageName = req.files.image.name;
    fs.writeFile(imagePath, req.files.image.data, function (err) {
        if (err) {
            console.log(err);
            return res.json({ success: false, msg: "An error occured while writing file" });
        }
        var newImage = new Images({
            imagePath: '/images/' + imageName
        });
        //Add image to database
        Images.addImage(newImage, function (err) {
            console.log(err);
            res.json({ success: true, msg: "Image added" });
            //console.log("newImage: " + newImage.imagePath);
        });
    });
});
module.exports = router;
