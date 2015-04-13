/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Position = require('./position.model');

exports.register = function(socket) {
  Position.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Position.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('position:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('position:remove', doc);
}