const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
let fs = require('fs');
let Images = require('../models/image');

router.post('/upload', function(req, res, next) {

    if(!req.files || !req.files.image) {
        return res.json({success: false, msg: "No file was uploaded"})
    }

    const imagePath = './images/'+ req.files.image.name;
    const imageName = req.files.image.name;

    fs.writeFile(imagePath, req.files.image.data, function(err) {
        if(err) {
            console.log(err);
            return res.json({success: false, msg: "An error occured while writing file"})
        }
        let newImage = new Images({
            imagePath: '/images/' + imageName,
            imageName: imageName
        });

        //Add image to database
        Images.addImage(newImage, (err) => {
            console.log(err);
                res.json({success: true, msg: "Image added"})
                //console.log("newImage: " + newImage.imagePath);
        });
    });
});

module.exports = router