/**
 * Created by Namita Malik on 5/7/16.
 */

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var User = mongoose.model('User', {
    firstName: String,
    lastName: String,
    userName: String,
    email: String,
    mobNumber: String,
    age: Number
});

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Hello World!');
});

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



app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});