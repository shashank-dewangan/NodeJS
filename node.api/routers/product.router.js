var express = require('express');
var router = express.Router();
var productCntrl = require('./../controller/product.ctrl');

router.get('/',productCntrl.get);
router.get('/:id', productCntrl.getById);
router.get('/:pageIndex/:pageSize', productCntrl.getPagewise);
router.post('/',productCntrl.save);
router.delete('/:id',productCntrl.delete);
module.exports = router;