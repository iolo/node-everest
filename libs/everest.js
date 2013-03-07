'use strict';

var
  _ = require('underscore'),
  q = require('q'),
  express = require('express'),
  resource = require('express-resource');


function Everest(config) {
  this.config = config;
}

Everest.prototype.docs = function () {
  var app = express();
  // TODO: ...
  app.get('/', function (req, res) {
    res.send('docs!');
  });
  return app;
};

Everest.prototype.console = function () {
  var app = express();
  // TODO: ...
  app.get('/', function (req, res) {
    res.send('console!');
  });
  return app;
};

Everest.prototype.server = function (modules, opts) {
  var app = express();
  // TODO: ...
  _.each(this.config.resources, function (resource, resourceId) {
    var actions = modules[resourceId];
    app.resource(resource.path, actions, opts);
    _.each(resource, function (operation, operationId) {
      var action = actions[operationId];
      if (operationId) {
        //...
      }
    });
  });
  app.get('/', function (req, res) {
    res.send('server!');
  });
  return app;
};

Everest.prototype.client = function () {
  // TODO: ...
  // restler? request? or something...
};

function configure(config) {
  return new Everest(config);
}

module.exports = {
  Everest: Everest,
  configure: configure
};
