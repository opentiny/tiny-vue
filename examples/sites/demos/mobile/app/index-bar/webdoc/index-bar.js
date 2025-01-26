export default {
  column: '2',
  owner: '',
  apis: [
    {
      name: 'IndexBar',
      type: 'component',
      props: [
        {
          name: 'indexList',
          type: '[]',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>索引文字列表</p>',
            'en-US': 'display different button'
          },
          mobileDemo: 'base'
        }
      ],
      events: [
        {
          name: 'change',
          type: 'Function(arg1)',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>\t当前索引改变触发</p>',
            'en-US': 'display different button'
          },
          mobileDemo: 'event'
        },
        {
          name: 'select',
          type: 'Function(arg1)',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>选中新的索引触发</p>',
            'en-US': 'display different button'
          },
          mobileDemo: 'event'
        }
      ],
      methods: [],
      slots: [
        {
          name: 'default',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>\t自定义内容</p>',
            'en-US': 'display different button'
          },
          mobileDemo: 'event'
        }
      ]
    },
    {
      name: 'IndexBarAnchor',
      type: 'component',
      props: [
        {
          name: 'index',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>索引文字</p>',
            'en-US': 'display different button'
          },
          mobileDemo: 'base'
        }
      ],
      events: [],
      methods: [],
      slots: []
    }
  ],
  demos: [
    {
      demoId: 'base',
      name: {
        'zh-CN': '基础用法',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN': '<p>基础用法</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['base.vue']
    },
    {
      demoId: 'event',
      name: {
        'zh-CN': '事件',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN': '<p>事件</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['event.vue']
    }
  ]
}
