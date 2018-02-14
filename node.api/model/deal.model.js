var mongoose = require('mongoose');
var Deal = mongoose.model('deal',{
    vin : String,
    dealNumber : Number,
    stockNumber : String,
    dealFields : { dealNo: Number},
    LastUpdate : {type: Date, default: Date.now()}
});

module.exports = Deal;