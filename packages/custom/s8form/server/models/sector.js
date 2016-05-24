'use strict';

/**
 * Dependencies
 */
var mongoose  = require('mongoose'),
  Schema    = mongoose.Schema;

var Sector = new Schema({
    name: {type: String, required: true},
    s8forms: [{type: Schema.Types.ObjectId, ref: 'S8Form'}]
});

mongoose.model('Sector', Sector);
