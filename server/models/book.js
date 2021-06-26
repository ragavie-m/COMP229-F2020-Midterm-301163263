let mongoose = require('mongoose');

// create a model class

/**
 * add your code to 
 * create your model here
 */

let bookModel = mongoose.Schema({
    Name:String,
    author: String,
    published: String,
    description: String,
    Price: Number
},
{
    collection: "book"
});

module.exports = mongoose.model('Book', bookModel);