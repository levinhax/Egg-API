'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1532168989797_6241';

  // add your config here
  config.middleware = [];

  // 使用mongoose连接数据库
  config.mongoose = {
    url: 'mongodb://127.0.0.1/apiExample',
    options: {},
  };

  return config;
};
