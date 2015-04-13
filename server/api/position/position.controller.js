'use strict';

var _ = require('lodash');
var Position = require('./position.model');

// Get list of positions
exports.index = function(req, res) {
  Position.find(function (err, positions) {
    if(err) { return handleError(res, err); }
    return res.json(200, positions);
  });
};

// Get a single position
exports.show = function(req, res) {
  Position.findById(req.params.id, function (err, position) {
    if(err) { return handleError(res, err); }
    if(!position) { return res.send(404); }
    return res.json(position);
  });
};

// Creates a new position in the DB.
exports.create = function(req, res) {
  Position.create(req.body, function(err, position) {
    if(err) { return handleError(res, err); }
    return res.json(201, position);
  });
};

// Updates an existing position in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Position.findById(req.params.id, function (err, position) {
    if (err) { return handleError(res, err); }
    if(!position) { return res.send(404); }
    var updated = _.merge(position, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, position);
    });
  });
};

// Deletes a position from the DB.
exports.destroy = function(req, res) {
  Position.findById(req.params.id, function (err, position) {
    if(err) { return handleError(res, err); }
    if(!position) { return res.send(404); }
    position.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}