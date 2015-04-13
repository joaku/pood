/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var Position = require('../api/position/position.model');
var Apptype = require('../api/apptype/apptype.model');
var Application = require('../api/application/application.model');
var User = require('../api/user/user.model');

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});




var id_doggy = "552b1c8001630a823e845b5d";
var id_rep = "552b1c8001630a823e845b5a";
var id_time = "552b1c8001630a823e845b5b";
var id_iso = "552b1c8001630a823e845b5c";

Position.find({}).remove(function() {
  Position.create({
    _id: id_doggy,
    name: 'Doggy',
    url_animation: 'http://ak-hdl.buzzfed.com/static/2014-06/14/15/enhanced/webdr05/anigif_enhanced-23403-1402773525-1.gif'
  }, {
    name: 'The Squat',
    url_animation: 'http://ak-hdl.buzzfed.com/static/2014-06/14/15/enhanced/webdr05/anigif_enhanced-23403-1402773525-1.gif'
  }, {
    name: 'Paraguaya'
  }, function() {
      console.log('finished populating positions');
    }
  );
});


Application.find({}).remove(function() {
  Application.create({
    name: 'Quicky Doggy',
    position: id_doggy,
    type: id_rep,
    single_duration: 2000,
    total_type: 10000
  },{
    name: 'Slow Doggy',
    position: id_doggy,
    type: id_time,
    single_duration: 1000,
    total_type: 10000
  },{
    name: 'Soft Doggy',
    position: id_doggy,
    type: id_iso,
    single_duration: 1000,
    total_type: 10000
  }, 
   function() {
      console.log('finished populating application');
    }
  );
});

Apptype.find({}).remove(function() {
  Apptype.create({
    _id: id_rep,
    name: 'Repetition'
  },{
    _id: id_time,
    name: 'Time'
  },{
    _id: id_iso,
    name: 'Isometric'
  }, 
   function() {
      console.log('finished populating apptype');
    }
  );
});

