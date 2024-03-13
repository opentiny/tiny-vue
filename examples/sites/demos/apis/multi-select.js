export default {
  mode: ['mobile'],
  apis: [
    {
      name: 'multiSelect',
      type: 'component',
      props: [
        {
          name: 'dataSource',
          type: '[]',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>数据</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'basic-usage'
        },
        {
          name: 'defaultSelectedArray',
          type: '[]',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>默认值</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'basic-usage'
        },
        {
          name: 'v-model/modelValue',
          type: '[]',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>选中值</p>',
            'en-US': ''
          },
          mode: ['mobile'],
          mobileDemo: 'basic-usage'
        }
      ],
      events: [
        {
          name: 'confim',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>确认事件</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'basic-usage'
        },
        {
          name: 'reset',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>重置事件</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'basic-usage'
        }
      ],
      methods: [],
      slots: []
    }
  ]
}
