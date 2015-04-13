'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ParttypeSchema = new Schema({
  name: {
  	type: String,
  	required: true
  }
});

module.exports = mongoose.model('Parttype', ParttypeSchema);