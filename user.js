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

var p1 = new User({
    firstName: 'Krishna',
    lastName: 'Govind',
    userName: 'krishna.govind',
    email: 'krishna.govind@gmail.com',
    mobNumber: '9087654320',
    age: 34
});
p1.save(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Saved Successfully!');
        User.find(function (error, result) {
            console.log(error);
            console.log(result);
        });
    }
});

var express = require('express');
var app = express();

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


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});