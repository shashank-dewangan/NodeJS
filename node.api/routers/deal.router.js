var express = require('express');
var router = express.Router();

var dealCtrl = require('../controller/deal.ctrl');

router.get('/',dealCtrl.get);
router.get('/:id',dealCtrl.getById);
router.post('/',dealCtrl.save);
router.delete('/:id',dealCtrl.delete);

module.exports = router;