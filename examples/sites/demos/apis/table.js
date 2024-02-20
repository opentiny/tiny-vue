export default {
  mode: ['mobile'],
  apis: [
    {
      name: 'Table',
      type: 'component',
      props: [
        {
          name: 'columns',
          type: '[]',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>列数据</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'base'
        },
        {
          name: 'data',
          type: '[]',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>表格数据</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'base'
        },
        {
          name: 'defaultChecked',
          type: '[]',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>默认选中项</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'base'
        },
        {
          name: 'keys',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>数据标识</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'base'
        },
        {
          name: 'width',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>表格宽度</p>',
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
