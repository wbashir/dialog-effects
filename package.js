Package.describe({
  name: 'bixin:dialogs',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2');
  api.addFiles('bixin:dialogs.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('bixin:dialogs');
  api.addFiles('bixin:dialogs-tests.js');
});
