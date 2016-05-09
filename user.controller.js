/**
 * Created by namita on 5/9/16.
 */
var User = require('./user.domain.js');
module.exports = function(app){
    app.get('/user', function (req, res) {
        User.find(function (error, users) {
            if (error) {
                res.json({error: error})
            }
            else {
                res.json({users: users})
            }
        });
    });

    app.get('/user/:_id', function (req, res) {
        var _id = req.params._id;
        User.findById(_id,function (error, user) {
            if (error) {
                res.json({error: error})
            }
            else {
                res.json({user: user})
            }
        });
    });

    app.delete('/user/:_id', function (req, res) {
        var _id = req.params._id;
        User.remove({_id:_id},function (error, result) {
            if (error) {
                res.json({error: error})
            }
            else {
                res.json({result: result})
            }
        });
    });

    app.post('/user',function(req,res){
        var p2 = new User(req.body);
        p2.save(function(error,result){
            if(error){
                res.json({error:error});
            }
            else{
                res.json({result:result});
            }
        });
    });

    app.put('/user/:_id', function (req, res) {
        var _id = req.params._id;
        User.update({_id:_id},req.body,function (error, result) {
            if (error) {
                res.json({error: error})
            }
            else {
                res.json({result: result})
            }
        });
    });


};