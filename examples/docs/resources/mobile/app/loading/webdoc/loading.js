export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'base',
      name: {
        'zh-CN': '基础用法',
        'en-US': 'button type',
      },
      desc: {
        'zh-CN': '<p>基础用法</p>',
        'en-US': '<p>button type</p>',
      },
      codeFiles: ['base.vue'],
    },
    {
      demoId: 'type',
      name: {
        'zh-CN': '类型',
        'en-US': 'button type',
      },
      desc: {
        'zh-CN': '<p>类型</p>',
        'en-US': '<p>button type</p>',
      },
      codeFiles: ['type.vue'],
    },
  ],
  apis: [
    {
      name: 'Loading', // 组件名称展示使用
      type: 'loading', // API 类型
      properties: [
        {
          name: 'type',
          type: 'string',
          defaultValue: 'primary',
          desc: {
            'zh-CN': '<p>通过type设置不同的加载样式</p>',
            'en-US': 'display different button',
          },
          demoId: 'type',
        },
        {
          name: 'target',
          type: 'DOM',
          defaultValue: 'DOM	document.getElementById("id")',
          desc: {
            'zh-CN': '<p>通过document.getElementById绑定div的DOM节点</p>',
            'en-US': 'display different button',
          },
          demoId: 'type',
        },
        {
          name: 'tiny_mode',
          type: 'string',
          defaultValue: 'pc',
          desc: {
            'zh-CN': '<p>通配置项pc,mobile表示不同设备</p>',
            'en-US': 'display different button',
          },
          demoId: 'type',
        },
      ],
      method: [
        {
          name: 'closeLoading',
          type: 'Function',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>关闭Loading</p>',
            'en-US': 'display different button',
          },
          demoId: 'type',
        },
      ]
    }
  ]
}
