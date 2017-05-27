const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const ImageSchema = mongoose.Schema({
    imagePath: {
        type: String,
        required: true
    }
    // Lägg till userId
});

const Image = module.exports = mongoose.model('Image', ImageSchema);


module.exports.getImageById = function(id, callback){
    Image.findById(id, callback);
}
module.exports.getImageByUserId = function(userId, callback){
    // Detta är inte testat
    // TODO: Måste lägga till userId i Image-modellen
    Image.find().where('userId', userId).exec(callback)
}
// Hämtar alla bilder från databasen
module.exports.getImages = function(callback){
    return Image.find({}, callback);
}

module.exports.addImage = function(newImage, callback){
           return newImage.save(callback);
}

