/**
 * Created by namita on 5/9/16.
 */
var Tenant = require('./tenant.domain.js');
var jwt = require('jsonwebtoken');
var secret = "somerandomauthentication";
module.exports = function(app){

    function authenticate(req,res,next){
        var token = req.headers['x-access-token'];
        if(!token){
            res.json('Unable to authenticate!');
        }
        else{
            jwt.verify(token,secret,function(error,decodedObject){
                if(error){
                    res.json({error:error});
                }
                else{
                    next();
                }
            })
        }

    }

    app.get('/tenant',authenticate, function (req, res) {
        Tenant.find(function (error, tenants) {
            if (error) {
                res.json({error: error})
            }
            else {
                res.json({tenants: tenants})
            }
        });
    });

    app.get('/tenant/:_id',authenticate, function (req, res) {
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

    app.delete('/tenant/:_id',authenticate, function (req, res) {
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

    app.post('/tenant',authenticate,function(req,res){
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

    app.put('/tenant/:_id',authenticate, function (req, res) {
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

    app.post('/tenant/authenticate', function (req, res) {
        Tenant.findOne({
            userName: req.body.userName,
            password: req.body.password
        }, function (error, tenant) {
            if (error) {
                res.json({error: error});
            }
            else if (tenant) {
                var token = jwt.sign(tenant, secret, {expiresIn: '1h'});
                res.json({token: token});
            }
            else {
                res.json({error: 'Invalid Credentials!'});
            }
        });
    });


};