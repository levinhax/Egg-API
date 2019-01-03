# Egg-API

使用Egg.js创建后台服务，提供API接口

技术栈: Egg.js、MongoDB、mongoose、MySQL

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
- MySQL demo


另：

使用前安装配置MongoDB和MySQL数据库，如果没有记得先注释掉 /config/config.default.js 里配置数据库的语句块(注意: 我们的数据是基于数据库的)

demo访问格式如下: http://127.0.0.1:7001/public/examples/index.html

项目正在持续更新中，喜欢的请点心，关注，star ,fork,这些是我长期坚持下去的动力 (。＿ 。） ✎＿

## 快速入门

### 本地开发

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### 部署

```bash
$ npm start
$ npm stop
```

### 单元测试

- [egg-bin] 内置了 [mocha], [thunk-mocha], [power-assert], [istanbul] 等框架，让你可以专注于写单元测试，无需理会配套工具。
- 断言库非常推荐使用 [power-assert]。
- 具体参见 [egg 文档 - 单元测试](https://eggjs.org/zh-cn/core/unittest)。

### 内置指令

- 使用 `npm run lint` 来做代码风格检查。
- 使用 `npm test` 来执行单元测试。
- 使用 `npm run autod` 来自动检测依赖更新，详细参见 [autod](https://www.npmjs.com/package/autod) 。


[egg]: https://eggjs.org
