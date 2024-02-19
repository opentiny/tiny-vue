export default {
  mode: ['mobile'],
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
          mode: ['mobile'],
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
          mode: ['mobile'],
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
          mode: ['mobile'],
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
          mode: ['mobile'],
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
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>索引文字</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'base'
        }
      ],
      events: [],
      methods: [],
      slots: []
    }
  ]
}
