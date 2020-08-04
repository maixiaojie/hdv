module.exports = {
  name: 'hdv',
  build: {
    css: {
      preprocessor: 'sass',
    },
    site: {
      publicPath: '/hdv/',
    },
  },
  site: {
    title: 'hdv',
    logo: 'https://yxs-web.oss-cn-beijing.aliyuncs.com/f30c4a1439d57ee03c250aad9b38cfd8.png',
    description: '轻量、可靠的移动端 Vue 组件库',
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
