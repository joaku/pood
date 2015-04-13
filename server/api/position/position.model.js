'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PositionSchema = new Schema({
  name: {
  	type: String,
  	required: true
  },
  url_animation: {
  	type: String,
  	default: "uploads/animation/default.gif"
  },
  active: Boolean
});

module.exports = mongoose.model('Position', PositionSchema);