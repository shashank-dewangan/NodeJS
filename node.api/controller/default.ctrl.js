
var defaultCtrl = {
    get: function(req,res){
        res.status(400);
        res.send('home page');
    },
    health : function(req,res){
        res.status(400);
        res.json({status :"OK"});
    }
}
module.exports = defaultCtrl;