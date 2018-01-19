var express = require('express');
var router = express.Router();
var vd = require('../video.json');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('Video', { title: 'Video',videodata: vd });
});

module.exports = router;
