'use strict';

// had enabled by egg
// exports.static = true;

exports.mongoose = {
  enable: true,
  package: 'egg-mongoose',
};

exports.pug = {
  enable: true,
  package: 'egg-view-pug',
};

exports.validate = {
  enable: true,
  package: 'egg-validate',
};
