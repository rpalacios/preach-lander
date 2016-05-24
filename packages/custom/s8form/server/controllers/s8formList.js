'use strict';

var mongoose = require('mongoose'),
  S8Form = mongoose.model('S8Form');


module.exports = function(S8form) {
  return {
    list: function(req, res, next) {
      S8Form.find().exec(function(err, s8forms) {
        if (err) {
          return next(err);
        }

        res.json(s8forms);
      });
    }
  };
};
