module.exports = {
  name: 'hd-ui',
  build: {
    css: {
      preprocessor: 'sass',
    },
    site: {
      publicPath: '/hd-ui/',
    },
  },
  site: {
    title: 'hd-ui',
    logo: 'https://yxs-app.oss-cn-beijing.aliyuncs.com/88bbaac5b8c9bfd6ffa1188318049ed8',
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍',
          },
          {
            path: 'quickstart',
            title: '快速上手',
          },
        ],
      },
      {
        title: '基础组件',
        items: [
          {
            path: 'hd-button',
            title: 'Button 按钮',
          },

        ],

      },
      {
        title: '反馈组件',
        items: [
          {
            path: 'dialog',
            title: 'Dialog',
          },
        ]
      }
    ],
  },
};
