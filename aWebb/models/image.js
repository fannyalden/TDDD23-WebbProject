const mongoose = require('mongoose');
const config = require('../config/database');

// User Schema
const ImageSchema = mongoose.Schema({
    imageName: {
        type: String,
        required: true
    },
    imagePath: {
        type: String,
        required: true
    },
    imageTags: {
        type: String,
        required: true
    }

});

const Image = module.exports = mongoose.model('Image', ImageSchema);

module.exports.getImageByImageName = function(imageName, callback){
    const query = {imageName: imageName}
    Image.findOne(query, callback);
};

module.exports.addImage = function(newImage, callback){
            newImage.save(callback);
};


