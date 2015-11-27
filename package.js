Package.describe({
  name: 'sergiisavchenko:jointjs',
  version: '0.9.5_6',
  summary: 'Meteor Package for JointJS 0.9.5. could\'t fix dependencies. Don\'t use',
  git: 'https://github.com/sergii-savchenko/meteor-jointjs.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('erasaur:meteor-lodash@3.10.1_1', 'client');
  api.use('backbone@1.0.0', 'client');
  api.addFiles([ 'jointjs.js', 'jointjs.css' ], 'client');

});

Package.onTest(function(api) {
});
