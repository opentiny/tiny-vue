export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基础用法',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN': '<p>基础用法</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['basic-usage.vue']
    }
  ],
  apis: [
    {
      name: 'multiSelect', // 组件名称展示使用
      type: 'component', // API 类型
      properties: [
        {
          name: 'dataSource',
          type: '[]',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>数据</p>',
            'en-US': 'display different button'
          },
          demoId: 'basic-usage'
        },
        {
          name: 'defaultSelectedArray',
          type: '[]',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>默认值</p>',
            'en-US': 'display different button'
          },
          demoId: 'basic-usage'
        }
      ],
      events: [
        {
          name: 'confim',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>确认事件</p>',
            'en-US': 'display different button'
          },
          demoId: 'basic-usage'
        },
        {
          name: 'reset',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>重置事件</p>',
            'en-US': 'display different button'
          },
          demoId: 'basic-usage'
        }
      ]
    }
  ]
}
