'use strict';

const Service = require('egg').Service;
const fs = require('fs');
const path = require('path');
const pump = require('mz-modules/pump');
const toArray = require('stream-to-array');
const sendToWormhole = require('stream-wormhole');

class FilesService extends Service {
  // ajax upload
  async ajaxUpload(stream) {
    const { ctx, config } = this;
    const result = {};
    const filename = (new Date()).getTime() + '_' + ctx.helper.rndNum(6) + '_' + stream.filename.toLowerCase();
    const target = path.join(this.config.baseDir, 'app' + config.imgLocation.substring(config.imgLocationTruncated), filename);
    const writeStream = fs.createWriteStream(target);
    await pump(stream, writeStream);
    const filePath = config.imgLocation + filename;
    result.name = filename;
    result.path = filePath;
    return result;
  }
  // buffer upload
  async bufferUpload(stream) {
    const { ctx, config } = this;
    const result = {};
    let buf;
    try {
      const parts = await toArray(stream);
      buf = Buffer.concat(parts);
    } catch (err) {
      await sendToWormhole(stream);
      throw err;
    }
    const filename = (new Date()).getTime() + '_' + ctx.helper.rndNum(6) + '_' + stream.filename.toLowerCase();
    const target = path.join(this.config.baseDir, 'app' + config.imgLocation.substring(config.imgLocationTruncated), filename);
    await fs.writeFile(target, buf);
    const filePath = config.imgLocation + filename;
    result.name = filename;
    result.path = filePath;
    console.log(result);
    return result;
  }
  // form upload
  async formUpload(stream) {
    const { ctx, config } = this;
    const result = {};
    const filename = (new Date()).getTime() + '_' + ctx.helper.rndNum(6) + '_' + stream.filename.toLowerCase();
    const target = path.join(this.config.baseDir, 'app' + config.imgLocation.substring(config.imgLocationTruncated), filename);
    const writeStream = fs.createWriteStream(target);
    await pump(stream, writeStream);
    const filePath = config.imgLocation + filename;
    result.name = filename;
    result.path = filePath;
    return result;
  }
  // multiple Upload
  async multipleUpload(parts) {
    const { ctx, config } = this;
    const files = [];
    let stream;
    while ((stream = await parts()) != null) {
      if (stream.mimeType !== 'application/octet-stream') {
        const filename = (new Date()).getTime() + '_' + ctx.helper.rndNum(6) + '_' + stream.filename.toLowerCase();
        const target = path.join(this.config.baseDir, 'app' + config.imgLocation.substring(config.imgLocationTruncated), filename);
        const writeStream = fs.createWriteStream(target);
        await pump(stream, writeStream);
        const filePath = config.imgLocation + filename;
        const fileitem = {};
        fileitem.name = filename;
        fileitem.path = filePath;
        files.push(fileitem);
        continue;
      }
      return files;
    }
  }
}

module.exports = FilesService;
