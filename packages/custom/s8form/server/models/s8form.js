'use strict';

/**
 * Dependencies
 */
var mongoose  = require('mongoose'),
  Schema    = mongoose.Schema;

var S8Form = new Schema({
    name: {type: String},
    sex: {
        type: String,
        enum: ['M', 'F']
    },
    folder: {type: Schema.Types.ObjectId, ref: 'TerritoryFolder'},
    sector: {type: Schema.Types.ObjectId, ref: 'Sector'},
    street: String,
    address: String,
    reference: String,
    comments: String,
    s8position: {type: Number, required: true},
    entries: [{name: String, value: String}]
});

mongoose.model('S8Form', S8Form);
