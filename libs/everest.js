'use strict';

var
  _ = require('underscore'),
  q = require('q'),
  express = require('express'),
  resource = require('express-resource');

function configure(opts) {
  // TODO: ...
}

function docs() {
  var app = express();
  // TODO: ...
  app.get('/', function(req, res) { res.send('docs!'); });
  return app;
}

function console() {
  var app = express();
  // TODO: ...
  app.get('/', function(req, res) { res.send('console!'); });
  return app;
}

function server(resources) {
  var app = express();
  // TODO: ...
  app.get('/', function(req, res) { res.send('server!'); });
  return app;
}

function client() {
  // TODO: ...
  // restler? request? or something...
}

module.exports = {
  configure: configure,
  docs: docs,
  console: console,
  server: server,
  client: client
};
