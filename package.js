Package.describe({
  name: 'sergiisavchenko:jointjs',
  version: '0.9.5',
  summary: 'Meteor Package for JointJS 0.9.5',
  git: 'https://github.com/sergii-savchenko/meteor-jointjs.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('backbone@0.9.2', 'client');
  api.use('erasaur:meteor-lodash@3.10.1_1', 'client');
  api.addFiles([ 'jointjs.min.js', 'jointjs.min.css' ], 'client');
});

Package.onTest(function(api) {
});
