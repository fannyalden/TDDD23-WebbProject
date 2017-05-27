const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const ImageSchema = mongoose.Schema({
    imageName: {
        type: String,
        required: true
    },
 /*   imagePath: {
        type: String,
        required: true
    }
    */
});

const Image = module.exports = mongoose.model('Image', ImageSchema);


module.exports.getImageById = function(id, callback){
    Image.findById(id, callback);
}

module.exports.addImage = function(newImage, callback){
           return newImage.save(callback);
}

