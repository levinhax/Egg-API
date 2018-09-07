'use strict';

const Controller = require('egg').Controller;
const fs = require('fs');

class FileController extends Controller {
  // ajax上传文件
  async ajaxUpload() {
    const { ctx } = this;
    const stream = await ctx.getFileStream();
    const result = await ctx.service.files.ajaxUpload(stream);
    ctx.body = result;
  }
  // buffer上传文件
  async bufferUpload() {
    const { ctx } = this;
    const stream = await ctx.getFileStream();
    const result = await ctx.service.files.bufferUpload(stream);
    ctx.body = result;
  }
  // form上传文件
  async formUpload() {
    const { ctx } = this;
    const stream = await ctx.getFileStream();
    const result = await ctx.service.files.formUpload(stream);
    ctx.body = result;
  }
  // multiple上传文件
  async multipleUpload() {
    const { ctx } = this;
    const parts = ctx.multipart({ autoFields: true });
    const result = await ctx.service.files.multipleUpload(parts);
    ctx.body = result;
  }
  // 文件删除
  async delFile() {
    const { ctx, config } = this;
    const delMsg = ctx.request.body;
    const fileUrl = delMsg.fileUrl;
    const delPath = 'app' + fileUrl.substring(config.imgLocationTruncated);
    if (fs.existsSync(delPath)) {
      fs.unlink(delPath);
      ctx.body = 1;
    } else {
      ctx.body = -1;
    }
  }
  // 多文件删除
  async delFiles() {
    const { ctx, config } = this;
    const delMsg = ctx.request.body;
    const fileList = delMsg.fileList;
    for (let i = 0; i < fileList.length; i++) {
      const delPath = 'app' + fileList[i].substring(config.imgLocationTruncated);
      if (fs.existsSync(delPath)) {
        fs.unlink(delPath);
      }
    }
    ctx.body = 1;
  }
}

module.exports = FileController;
