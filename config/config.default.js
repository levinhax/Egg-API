'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1532168989797_6241';

  // add your config here
  config.middleware = [
    'errorHandler',
    'jwt',
  ];

  // 使用mongoose连接数据库
  config.mongoose = {
    url: 'mongodb://127.0.0.1/apiExample',
    options: {},
  };

  // 加密盐
  config.pwd_salt = 'egg-api-salt';

  // jsonwebtoken
  config.jwt = {
    secret: 'egg-api-jwt',
  };

  // 添加view配置
  config.view = {
    defaultViewEngine: 'pug',
    mapping: {
      '.pug': 'pug',
    },
  };

  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
    },
    domainWhiteList: [ 'http://localhost:7001' ],
  };
  config.cors = {
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };


  return config;
};
