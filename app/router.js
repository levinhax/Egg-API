'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  // 测试页面
  router.get('/signup', controller.home.signup);
  router.get('/signin', controller.home.signin);
  router.get('/user', controller.home.findUser);
  router.get('/updateuser', controller.home.updateUser);
  router.get('/logoff', controller.home.logoff);
  router.get('/deleteuser', controller.home.deleteUser);

  // 注册登录
  router.post('/api/v1/signup', controller.user.signup);
  router.post('/api/v1/signin', controller.user.signin);
  router.get('/api/v1/signout', controller.user.signout);

  // 用户信息
  router.get('/api/v1/user/:_id', controller.user.findUser);
  router.put('/api/v1/updateuser', controller.user.updateUser);
  router.delete('/api/v1/logoff', controller.user.logOff);
  router.delete('/api/v1/deleteuser', controller.user.deleteUser);
};
