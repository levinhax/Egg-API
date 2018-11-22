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

  async createProject() {
    const { ctx } = this;
    await ctx.render('project/create.pug');
  }
  async indexProject() {
    const { ctx } = this;
    await ctx.render('project/index.pug');
  }
  async showProject() {
    const { ctx } = this;
    await ctx.render('project/show.pug');
  }
  async updateProject() {
    const { ctx } = this;
    await ctx.render('project/update.pug');
  }
  async deleteProject() {
    const { ctx } = this;
    await ctx.render('project/delete.pug');
  }

  async createMysql() {
    const { ctx } = this;
    await ctx.render('mysqlDemo/insert.pug');
  }
  async indexMysql() {
    const { ctx } = this;
    await ctx.render('mysqlDemo/index.pug');
  }
}

module.exports = HomeController;
