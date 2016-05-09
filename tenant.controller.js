/**
 * Created by namita on 5/9/16.
 */
var Tenant = require('./tenant.domain.js');
module.exports = function(app){
    app.get('/tenant', function (req, res) {
        Tenant.find(function (error, tenants) {
            if (error) {
                res.json({error: error})
            }
            else {
                res.json({tenants: tenants})
            }
        });
    });

    app.get('/tenant/:_id', function (req, res) {
        var _id = req.params._id;
        Tenant.findById(_id,function (error, tenant) {
            if (error) {
                res.json({error: error})
            }
            else {
                res.json({tenant: tenant})
            }
        });
    });

    app.delete('/tenant/:_id', function (req, res) {
        var _id = req.params._id;
        Tenant.remove({_id:_id},function (error, result) {
            if (error) {
                res.json({error: error})
            }
            else {
                res.json({result: result})
            }
        });
    });

    app.post('/tenant',function(req,res){
        var p2 = new Tenant(req.body);
        p2.save(function(error,result){
            if(error){
                res.json({error:error});
            }
            else{
                res.json({result:result});
            }
        });
    });

    app.put('/tenant/:_id', function (req, res) {
        var _id = req.params._id;
        Tenant.update({_id:_id},req.body,function (error, result) {
            if (error) {
                res.json({error: error})
            }
            else {
                res.json({result: result})
            }
        });
    });


};