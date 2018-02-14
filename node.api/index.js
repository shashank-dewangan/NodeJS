
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var productRouter = require('./routers/product.router');
var defaultRouter = require('./routers/default.router');
var dealRouter = require('./routers/deal.router');
var mongoos = require('mongoose');

app.listen(4000, function(req,res){
    console.log('server is running');
});

mongoos.connect('mongodb://localhost:27017/myproductdb');
app.use(bodyParser.json());
app.use('/',defaultRouter);
app.use('/api',defaultRouter);
app.use('/api/products',productRouter);
app.use('/api/deals',dealRouter);

