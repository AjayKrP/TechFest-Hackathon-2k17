var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    imagePath:{type:String, required:true},
    title:{type:String, required:true},
    summary:{type:String, required:true},
    description:{type:String, required:true}
});

module.exports = mongoose.model('Event',schema);
