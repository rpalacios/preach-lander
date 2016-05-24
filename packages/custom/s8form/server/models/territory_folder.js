var mongoose  = require('mongoose'),
  Schema    = mongoose.Schema;

var TerritoryFolder = Schema({
    name: {type: String, required: true},
    s8forms: [{type: Schema.Types.ObjectId, ref: 'S8Form'}]
});

mongoose.model('TerritoryFolder', TerritoryFolder);
