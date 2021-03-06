/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/rutines', require('./api/rutine'));
  app.use('/api/parttypes', require('./api/parttype'));
  app.use('/api/parts', require('./api/part'));
  app.use('/api/apptypes', require('./api/apptype'));
  app.use('/api/applications', require('./api/application'));
  app.use('/api/positions', require('./api/position'));
  app.use('/api/things', require('./api/thing'));
  app.use('/api/users', require('./api/user'));

  app.use('/auth', require('./auth'));
  
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
