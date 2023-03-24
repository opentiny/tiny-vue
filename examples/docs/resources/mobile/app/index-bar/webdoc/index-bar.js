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
      demoId: 'event',
      name: {
        'zh-CN': '事件',
        'en-US': 'button type',
      },
      desc: {
        'zh-CN': '<p>事件</p>',
        'en-US': '<p>button type</p>',
      },
      codeFiles: ['event.vue'],
    },
  ],
  apis: [
    {
      name: 'IndexBar', // 组件名称展示使用
      type: 'component', // API 类型
      IndexBarProperties: [
        {
          name: 'indexList',
          type: '[]',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>索引文字列表</p>',
            'en-US': 'display different button',
          },
          demoId: 'base',
        },
      ],
      IndexBarEvents: [
        {
          name: 'select',
          type: 'Function(arg1)',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>选中新的索引触发</p>',
            'en-US': 'display different button',
          },
          demoId: 'event',
        },
        {
          name: 'change',
          type: 'Function(arg1)',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>	当前索引改变触发</p>',
            'en-US': 'display different button',
          },
          demoId: 'event',
        },
      ],
      IndexBarEvents: [
        {
          name: 'default',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>	自定义内容</p>',
            'en-US': 'display different button',
          },
          demoId: 'event',
        },
      ],
      IndexBarAnchorProperties: [
        {
          name: 'index',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>索引文字</p>',
            'en-US': 'display different button',
          },
          demoId: 'base',
        },
      ],
    }
  ]
}
