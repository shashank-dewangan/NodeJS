var Product = require('../model/product.model');
var productCntrl = {
   
    get : function(req,res){
        var Count=0;
        Product.count(function(err,count){
            Count=count;

            var query = Product.find({},{"__v": 0},function(err,products){
                if(products)
                {
                    var response = {Count, products};
                    res.status(200);
                    res.json(response);
                }
                else
                {
                    res.status(400);
                    res.send("Nothing Found!!!");
                }
            });
           
            query.exec();
        });
        
    },
    getPagewise : function(req,res){
        var Count=0;
        var pageSize = +req.params.pageSize;
        var pageIndex = +req.params.pageIndex;

        Product.count(function(err,count){
            Count=count;           

            var query = Product.find({},{"__v": 0})
            .skip(pageSize*pageIndex)
            .limit(pageSize)
            .exec(function(err,products){
                if(products)
                {
                    var response = {Metadata : {Count : Count, PageIndex : pageIndex,PageSize : pageSize}, products};
                    res.status(200);
                    res.json(response);
                }
                else
                {
                    res.status(400);
                    res.send("Nothing Found!!!");
                }
            });
        });
        
    },
    getById : function(req,res){
        var _id =req.params.id;
        Product.findById(_id,function(err,product){
            if(!product)
            {
                res.status(404);
                res.send("Not Found!!!")
            }
            else{
            res.status(200);
            res.json(product);
            }
        });
    },
    save : function(req,res){
        var product = new Product(req.body);
            product.save(function(err,product){
            if(!err)
            {
                res.status(201);
                res.json(product);
            }
            else
            {
                res.status(401);
                res.send("Error !!!");
            }
        });
      
    },
    put: function(req,res){
        
    },
    delete : function(req,res){
        var _id = req.params.id;
        Product.findByIdAndRemove(_id,function(err){
            if(!err)
            {
                res.status(200);
                res.send("Product Deleted !!!");
            }
            else
            {
                res.status(400);
                res.send("Nothing Found!!!");
            }
        });
    }
}

module.exports = productCntrl;