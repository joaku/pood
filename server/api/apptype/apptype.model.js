'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ApptypeSchema = new Schema({
  name: {
  	type: String,
  	required: true
  }
});

module.exports = mongoose.model('Apptype', ApptypeSchema);