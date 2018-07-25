'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  // 注册接口
  async signup() {
    const { ctx } = this;
    const rule = {
      userName: { type: 'string', required: true, message: '必填项' },
      userPass: { type: 'string', required: true, message: '必填项' },
      userEmail: { type: 'email', required: true, message: '必填项' },
    };
    // if (!signupMsg.userName || !signupMsg.userPass || !signupMsg.userEmail) {
    //   const res = {};
    //   res.code = 0;
    //   res.msg = '信息不能为空';
    //   ctx.response.body = res;
    //   return;
    // }
    const signupMsg = ctx.request.body;
    await ctx.validate(rule, signupMsg);
    signupMsg.userPass = ctx.helper.encrypt(signupMsg.userPass);
    const result = await ctx.service.user.signup(signupMsg);
    ctx.body = result;
  }
  // 登录接口
  async signin() {
    const { ctx } = this;
    const rule = {
      userName: { type: 'string', required: true, message: '必填项' },
      userPass: { type: 'string', required: true, message: '必填项' },
    };
    // if (!signinMsg.userName || !signinMsg.userPass) {
    //   const res = {};
    //   res.code = 0;
    //   res.msg = '信息不能为空';
    //   ctx.response.body = res;
    //   return;
    // }
    const signinMsg = ctx.request.body;
    await ctx.validate(rule, signinMsg);
    signinMsg.userPass = ctx.helper.encrypt(signinMsg.userPass);
    const result = await ctx.service.user.signin(signinMsg);
    ctx.body = result;
  }
  // 登出接口
  async signout() {
    const { ctx } = this;
    const res = {};
    res.code = 1;
    res.msg = '登出系统成功';
    ctx.body = res;
  }
  // 查询用户信息
  async findUser() {
    const { ctx } = this;
    const userMsg = {
      _id: ctx.params._id,
    };
    // const userMsg = ctx.request.body;
    // if (!userMsg.userId) {
    //   const res = {};
    //   res.code = 0;
    //   res.msg = '用户查询信息不能为空';
    // }
    const result = await ctx.service.user.findUser(userMsg);
    ctx.response.body = result;
  }
  // 更新用户信息
  async updateUser() {
    const { ctx } = this;
    const rule = {
      _id: { type: 'string', required: true, message: '必填项' },
      userEmail: { type: 'string', required: true, message: '必填项' },
    };
    const userMsg = ctx.request.body;
    console.log('userMsg: ' + JSON.stringify(userMsg));
    await ctx.validate(rule, userMsg);
    const result = await ctx.service.user.updateUser(userMsg);
    ctx.body = result;
  }
  // 用户注销
  async logOff() {
    const { ctx } = this;
    const rule = {
      _id: { type: 'string', required: true, message: '必填项' },
    };
    const userMsg = ctx.request.body;
    await ctx.validate(rule, userMsg);
    const result = await ctx.service.user.logOff(userMsg);
    ctx.body = result;
  }
  // 超级管理员删除用户
  async deleteUser() {
    const { ctx } = this;
    const rule = {
      _id: { type: 'string', required: true, message: '必填项' },
      userRole: { type: 'enum', values: [ '3' ] },
      deleteUserId: { type: 'string', required: true, message: '必填项' },
    };
    const userMsg = ctx.request.body;
    console.log('userMsg: ' + JSON.stringify(userMsg));
    await ctx.validate(rule, userMsg);
    const deleteUserMsg = {
      _id: userMsg.deleteUserId,
    };
    console.log('deleteUserId: ' + JSON.stringify(deleteUserMsg));
    const result = await ctx.service.user.deleteUser(deleteUserMsg);
    ctx.body = result;
  }

}

module.exports = UserController;

