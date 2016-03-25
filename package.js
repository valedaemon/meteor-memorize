Package.describe({
  name: 'valedaemon:memorize',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/valedaemon/meteor-memorize',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('memorize.js');
  api.export("Memorize", "server");
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('valedaemon:memorize');
  api.addFiles('memorize-tests.js');
  api.export("Memorize", "server");
});

Npm.depends({"node-cache": "3.2.1"});