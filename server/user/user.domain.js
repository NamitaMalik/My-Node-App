/**
 * Created by namita on 5/10/16.
 */

var mongoose = require('mongoose');
var User = mongoose.model('User', {
    name: String,
    password: String,
    Admin: Boolean
});
module.exports = User;