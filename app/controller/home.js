'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async signup() {
    const { ctx } = this;
    await ctx.render('admin/signup.pug');
  }

  async signin() {
    const { ctx } = this;
    await ctx.render('admin/signin.pug');
  }

  async findUser() {
    const { ctx } = this;
    await ctx.render('user/find.pug');
  }

  async updateUser() {
    const { ctx } = this;
    await ctx.render('user/update.pug');
  }

  async logoff() {
    const { ctx } = this;
    await ctx.render('user/logoff.pug');
  }

  async deleteUser() {
    const { ctx } = this;
    await ctx.render('user/delete.pug');
  }

}

module.exports = HomeController;
