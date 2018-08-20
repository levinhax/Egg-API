'use strict';

// 项目参数校验
const projectRule = {
  // 查找项目
  index: {
    page: {
      type: 'string',
      format: /\d+/,
      required: false,
    },
    limit: {
      type: 'string',
      format: /\d+/,
      required: false,
    },
    projectTag: {
      type: 'string',
      required: false,
    },
  },
  // 创建
  create: {
    projectName: {
      type: 'string',
      required: true,
    },
    projectDesc: {
      type: 'string',
      required: true,
    },
    projectCreater: {
      type: 'string',
      required: true,
    },
    projectTag: {
      type: 'array',
      required: true,
    },
    projectImg: {
      type: 'array',
      required: true,
    },
    projectLink: {
      type: 'string',
      required: true,
    },
  },
  // 某条信息
  show: {
    _id: {
      type: 'string',
      required: true,
    },
  },
  // 更新
  update: {
    _id: {
      type: 'string',
      required: true,
    },
    projectImg: {
      type: 'array',
      required: true,
    },
    projectLink: {
      type: 'string',
      required: true,
    },
  },
  // 删除
  delete: {
    _id: {
      type: 'string',
      required: true,
    },
  },
};

module.exports = projectRule;
