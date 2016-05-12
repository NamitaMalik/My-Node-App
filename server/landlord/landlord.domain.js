/**
 * Created by namita on 5/9/16.
 */

var mongoose = require('mongoose');
var Landlord = mongoose.model('Landlord', {
    firstName: {type: String, required: [true, 'First Name is mandatory field.']},
    lastName: String,
    userName: {type: String, required: true},
    email: {type: String, required: true},
    mobNumber: {type: String, required: true},
    age: {type: Number, min: [18, 'Minimum age should be 18']}
});
module.exports = Landlord;