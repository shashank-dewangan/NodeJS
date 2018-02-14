var mongoose = require('mongoose');

var Product = mongoose.model('Product',{
    Brand: String,
    Model: String,
    Price: Number,
    InStock: Boolean,
    LastUpdated:{type: Date,default:Date.now()}
});

module.exports = Product;