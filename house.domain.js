/**
 * Created by namita on 5/9/16.
 */

var mongoose = require('mongoose');
var houseTypes = {values:['House/Kothi', 'Bunglow','Apartment','Flat'],message:'Invalid house type selected.'};
var House = mongoose.model('House', {
    houseName : {type:String},
    addressLine1 : {type:String,required:[true,'Address Line 1 is mandatory']},
    addressLine2 : {type:String,required:true},
    addressLine3 : {type:String},
    city : {type:String, required:true},
    state : {type:String, required:true},
    pincode : {type:Number, required:true},
    nearByLandmark : {type:String},
    houseType : {type:String,enum:houseTypes,required:true}
});
module.exports = House;