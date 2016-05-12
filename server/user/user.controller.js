/**
 * Created by namita on 5/10/16.
 */

var User = require('./user.domain.js');
module.exports = function(app) {
    app.get('/user', function (req, res) {
        User.find(function (error, users) {
            if (error) {
                res.json({error: error});
            }
            else {
                res.json({users: users});
            }
        });
    });

    app.post('/setup', function(req, res) {
        var user = new User(req.body);
        user.save(function(error,result) {
           if(error){
                res.json({error:error});
           }
            else{
                res.json({result:result});
           }
        });
    });

};