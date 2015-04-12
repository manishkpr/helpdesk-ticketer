/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

app.import('bower_components/bootswatch/paper/bootstrap.css');

module.exports = app.toTree();
