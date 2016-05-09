/**
 * Created by namita on 5/8/16.
 */

var mongoose = require('mongoose');
var User = mongoose.model('User', {
    firstName: {type: String, required: [true, 'First Name is mandatory field.']},
    lastName: String,
    userName: {type: String, required: true},
    email: {type: String, required: true},
    mobNumber: {type: String, required: true},
    age: {type: Number, min: [18, 'Minimum age should be 18'], max: [35, 'Maximum age should be 35']}
});
module.exports = User;