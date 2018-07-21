# Egg-API

使用Egg.js创建后台服务，提供API接口

技术栈: Egg.js、MongoDB、mongoose

所有API接口在postman上通过测试，说明如下：

- API请求返回的内容包括code(响应结果标识码),msg(响应结果信息说明),data(响应数据)
- 接口数据采用json格式
- 安全性，会做好一些限制，比如鉴权或认证
- 接口的性能

## QuickStart

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org