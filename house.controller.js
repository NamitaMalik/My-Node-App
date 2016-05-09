/**
 * Created by namita on 5/9/16.
 */

var House = require('./house.domain.js');

module.exports = function (app) {
    app.get('/house', function (req, res) {
        House.find(function (error, houses) {
            if (error) {
                res.json({error: error});
            }
            else {
                res.json({houses: houses});
            }
        });
    });

    app.get('/house/:_id', function (req, res) {
        var _id = req.params._id;
        House.findOne({_id: _id}, function (error, house) {
            if (error) {
                res.json({error: error});
            }
            else {
                res.json({house: house});
            }
        });
    });

    app.delete('/house/:_id', function (req, res) {
        var _id = req.params._id;
        House.remove({_id: _id}, function (error, result) {
            if (error) {
                res.json({error: error});
            }
            else {
                res.json({result: result});
            }
        });
    });

    app.put('house/:_id', function (req, res) {
        var _id = req.params._id;
        House.update({_id: _id}, req.body, function (error, result) {
            if (error) {
                res.json({error: error});
            }
            else {
                res.json({result: result});
            }
        });
    });

    app.post('/house',function(req,res){
        var house = new House(req.body);
        house.save(function(error,result){
            if (error) {
                res.json({error: error});
            }
            else {
                res.json({result: result});
            }
        });
    })
};