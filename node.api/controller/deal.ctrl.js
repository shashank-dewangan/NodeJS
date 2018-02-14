var Deal = require('../model/deal.model');

module.exports = {
    get : function(req,res)
    {
        Deal.find({},{"__v": 0},function(err,deals){
            if(err)
            {
                res.status(401);
                res.json("Nothing Found!!!");
            }
            else
            {
                res.status(200);
                res.json(deals);
            }

        });
    },
    getById:function(req,res){
        var _id = req.params.id;
        Deal.findById(_id,{"__v":0},function(err,deal){
            if(err)
            {
                res.status(401);
                res.send("Nothing Found!!!");
            }
            else
            {
                res.status(200);
                res.json(deal);
            }
        });
    },
    save: function(req,res){
        var deal = new Deal(req.body);
        deal.save(function(err,deal){
            if(!err)
            {
                res.status(201);
                res.json(deal);
            }
            else
            {
                res.status(401);
                res.send("Error !!!");
            }
        });
    },
    delete : function(req,res)
    {
        var _id = req.params.id;
        Deal.findByIdAndRemove(_id,function(err){
            if(!err)
            {
                res.status(204);
                res.send("Record Deleted !!!");
            }
            else
            {
                res.status(500);
                res.send(err);
            }
        });
    }
}