var
  express = require('express'),
  everest = require('../libs/everest'),
  app = express();

app.use(express.static('public'));

everest.configure(require('./ex1-everest.json'));

var resources = [
  {
    posts: {
      index: function(req, res) { },
      new: function(req, res) { },
      create: function(req, res) { },
      show: function(req, res) { },
      edit: function(req, res) { },
      update: function(req, res) { },
      destroy: function(req, res) { },
      comments: {
        index: function(req, res) { },
        new: function(req, res) { },
        create: function(req, res) { },
        show: function(req, res) { },
        edit: function(req, res) { },
        update: function(req, res) { },
        destroy: function(req, res) { }
      }
    }
  }
];

app.use('/api/docs', everest.docs());
app.use('/api/console', everest.console());
app.use('/api/server', everest.server(resources));

app.listen(3000);

