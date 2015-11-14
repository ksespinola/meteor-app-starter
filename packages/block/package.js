/* global Package */
Package.describe({
  name: 'block',
  description: 'page blocks',
});

Package.onUse(function(api) {
  var both = ['server', 'client'];

  api.use([
    'core',
    'form',
    'grid',
  ], both);

  api.addFiles([
    'namespace.js',
    'both/collection.js',
    'both/handlers/EditHandler.jsx',
  ], both);

  api.addFiles([
    'server/publish.js',
    'server/methods.js',
  ], 'server');

  api.export([
    'Block',
  ], both);
});
