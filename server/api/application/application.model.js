'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ApplicationSchema = new Schema({
  name: {
  	type: String,
  	required: true
  },
  position: {
  	type: Schema.Types.ObjectId,
  	ref: 'Position',
  	required: true
  },
  type: {
  	type: Schema.Types.ObjectId,
  	ref: 'Apptype',
  	required: true
  },
  single_duration: {
  	type: Number,
  	default: 10
  },
  total_type: {
  	type: Number,
  	default: 1
  },
  active: Boolean
});

module.exports = mongoose.model('Application', ApplicationSchema);