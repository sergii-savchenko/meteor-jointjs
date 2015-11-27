Package.describe({
  name: 'sergiisavchenko:jointjs',
  version: '0.9.5_1',
  summary: 'Meteor Package for JointJS 0.9.5',
  git: 'https://github.com/sergii-savchenko/meteor-jointjs.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('karfield:backbone@1.2.1', 'client');
  api.use('erasaur:meteor-lodash@3.10.1_1', 'client');
  api.addFiles([ 'joint.min.js', 'joint.min.css' ], 'client');

});

Package.onTest(function(api) {
});
