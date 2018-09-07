# Egg-API

使用Egg.js创建后台服务，提供API接口

技术栈: Egg.js、MongoDB、mongoose

所有API接口在postman上通过测试，说明如下：

- API请求返回的内容包括code(响应结果标识码),msg(响应结果信息说明),data(响应数据)
- 接口数据采用json格式
- 安全性，会做好一些限制，比如鉴权或认证
- 接口的性能
- RESTful API

接口模块:

- 用户模块(注册登录)(user)
- 项目(projects)
- 文件上传删除(files)

项目正在持续更新中，喜欢的请点心，关注，star ,fork,这些是我长期坚持下去的动力 (。＿ 。） ✎＿

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