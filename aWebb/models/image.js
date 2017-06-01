const mongoose = require('mongoose');

const ImageSchema = mongoose.Schema({
    imagePath: {
        type: String,
        required: true
    },
    imageName: {
        type: String
    }
    // TODO: Add user
});

const Image = module.exports = mongoose.model('Image', ImageSchema);

//Functions that interact width the database

module.exports.getImageById = function(id, callback){
    Image.findById(id, callback);
};
module.exports.getImageByUserId = function(userId, callback){
    // TODO: Add user in image model
    // This is not yet tested
    Image.find().where('userId', userId).exec(callback)
};

// Get all the images from the database
module.exports.getImages = function(callback){
    return Image.find({}, callback);
};

module.exports.addImage = function(newImage, callback){
           return newImage.save(callback);
};

