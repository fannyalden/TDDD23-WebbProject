const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
var fs = require('fs');
var Images = require('../models/image');
const path = require('path');

router.post('/upload', function(req, res, next) {

    if(!req.files || !req.files.image) {
        return res.json({success: false, msg: "No file was uploaded"})
    }

    const imagePath = './images/'+ req.files.image.name
    const imageName = req.files.image.name

    fs.writeFile(imagePath, req.files.image.data, function(err) {
        if(err) {
            console.log(err)
            return res.json({success: false, msg: "An error occured while writing file"})
        }
        let newImage = new Images({
            imagePath: '/images/' + imageName
        });

        //Add image to database
        Images.addImage(newImage, (err) => {
            console.log(err)
                res.json({success: true, msg: "Image added"})
                console.log("newImage: " + newImage.imagePath);
        });
    });
});

router.get('/read', (req,res,next)=>{

    console.log('hello from read /read')
})

module.exports = router