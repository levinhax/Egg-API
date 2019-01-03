'use strict';
const Service = require('egg').Service;
const JWT = require('jsonwebtoken');

class UserService extends Service {
  // 注册接口
  async signup(signupMsg) {
    const { ctx } = this;
    const res = {};
    const queryResult = await ctx.model.User.findOne({
      userName: signupMsg.userName,
    });
    if (queryResult) {
      res.code = -1;
      res.msg = '用户已存在';
    } else {
      const result = await ctx.model.User.create(signupMsg);
      res.data = result;
      res.code = 1;
      res.msg = '注册成功';
    }
    return res;
  }

  // 登录接口
  async signin(signinMsg) {
    const { ctx } = this;
    const res = {};
    const queryResult = await ctx.model.User.findOne({
      userName: signinMsg.userName,
    });
    if (!queryResult) {
      res.code = -2;
      res.msg = '用户不存在,请前去注册';
      res.data = {};
    } else {
      const result = await ctx.model.User.findOne(signinMsg);
      if (!result) {
        res.code = -1;
        res.msg = '用户信息不正确';
        res.data = {};
      } else {
        const token = JWT.sign({
          userName: result.userName,
        },
        this.config.jwt.secret, {
          expiresIn: 60 * 60,
        });
        res.data = result;
        res.code = 1;
        res.msg = '登录成功';
        res.token = token;
      }
    }
    return res;
  }
  // 查询用户信息
  async findUser(userMsg) {
    const { ctx } = this;
    const res = {};
    const result = await ctx.model.User.findOne(userMsg);
    if (result) {
      res.data = result;
      res.code = 1;
      res.msg = '用户查询成功';
    } else {
      res.data = result;
      res.code = -1;
      res.msg = '该用户不存在';
    }
    return res;
  }
  // 更新用户信息
  async updateUser(userMsg) {
    const { ctx } = this;
    const res = {};
    const result = await ctx.model.User.findByIdAndUpdate(userMsg._id, userMsg);
    res.code = 1;
    res.msg = '用户信息已更改';
    res.data = result;
    return res;
  }
  // 用户注销
  async logOut(userMsg) {
    const { ctx } = this;
    const res = {};
    const result = await ctx.model.User.remove(userMsg);
    res.code = 1;
    res.msg = '用户已注销';
    res.data = result;
    return res;
  }
  // 超级管理员删除用户
  async deleteUser(deleteUserMsg) {
    const { ctx } = this;
    const res = {};
    const result = await ctx.model.User.remove(deleteUserMsg);
    res.code = 1;
    res.msg = '用户已被删除';
    res.data = result;
    return res;
  }

}

module.exports = UserService;
