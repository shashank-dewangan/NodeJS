var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('contact', { title: 'Contact Us',email:"customercare@mail.com",phone:"1234567890" });
});

module.exports = router;
