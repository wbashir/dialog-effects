Package.describe({
  name: 'bixin:dialogs',
  summary: 'Meteor Codrops Dialog-Effects',
  version: '1.0.0',
  git: 'https://github.com/warsamebashir/dialog-effects.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2');
  api.add_files([
    'dialog-annie.css',
    'dialog-cathy.css',
    'dialog.css',
    'modernizr.custom.js',
    'classie.js',
    'dialogFx.js',
    'snap.svg-min.js',
  ], ['client']);

  api.export(['DialogFx']);

});

