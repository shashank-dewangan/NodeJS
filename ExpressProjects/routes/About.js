var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('About', { title: 'About' ,name : "Shashank"});
});

module.exports = router;
