export default {
  mode: ['mobile-first'],
  apis: [
    {
      name: 'Cell',
      type: 'component',
      props: [
        {
          name: 'data',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '数据',
            'en-US': 'data'
          },
          mode: ['mobile-first'],
          mfDemo: 'basic-usage'
        },
        {
          name: 'disabled',
          type: 'Boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '禁用',
            'en-US': 'disabled'
          },
          mode: ['mobile-first'],
          mfDemo: 'disabled'
        },
        {
          name: 'icon',
          type: 'Object',
          defaultValue: '{}',
          desc: {
            'zh-CN': '设置图标',
            'en-US': 'Set icon'
          },
          mode: ['mobile-first'],
          mfDemo: 'icon'
        },
        {
          name: 'placeholder',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '占位文本',
            'en-US': 'Placeholder Text'
          },
          mode: ['mobile-first'],
          mfDemo: 'placeholder'
        }
      ],
      events: [],
      methods: [],
      slots: []
    }
  ]
}
