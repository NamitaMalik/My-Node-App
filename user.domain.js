/**
 * Created by namita on 5/8/16.
 */

var mongoose = require('mongoose');
var User = mongoose.model('User', {
    firstName: String,
    lastName: String,
    userName: String,
    email: String,
    mobNumber: String,
    age: Number
});
module.exports = User;