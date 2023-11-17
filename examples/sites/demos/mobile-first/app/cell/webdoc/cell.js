export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN': '<p></p>',
        'en-US': '<p></p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'with-date-picker',
      name: {
        'zh-CN': '结合日期选择一起使用',
        'en-US': 'Used in conjunction with date selection'
      },
      desc: {
        'zh-CN': '<p></p>',
        'en-US': '<p></p>'
      },
      codeFiles: ['with-date-picker.vue']
    },
    {
      demoId: 'placeholder',
      name: {
        'zh-CN': '占位文本',
        'en-US': 'Placeholder Text'
      },
      desc: {
        'zh-CN': '<p></p>',
        'en-US': '<p></p>'
      },
      codeFiles: ['placeholder.vue']
    },
    {
      demoId: 'disabled',
      name: {
        'zh-CN': '禁用',
        'en-US': 'disabled'
      },
      desc: {
        'zh-CN': '<p></p>',
        'en-US': '<p></p>'
      },
      codeFiles: ['disabled.vue']
    },
    {
      demoId: 'icon',
      name: {
        'zh-CN': 'icon 图标',
        'en-US': 'icon'
      },
      desc: {
        'zh-CN': '<p>可以传入一个 svg 对象替换默认的下拉图标</p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['icon.vue']
    }
  ],
  apis: [
    {
      'name': 'Cell',
      'type': 'component',
      'props': [
        {
          'name': 'data',
          'type': 'String',
          'defaultValue': '',
          'desc': { 'zh-CN': '数据', 'en-US': 'data' },
          'demoId': 'basic-usage'
        },
        {
          'name': 'disabled',
          'type': 'Boolean',
          'defaultValue': 'true',
          'desc': { 'zh-CN': '禁用', 'en-US': 'disabled' },
          'demoId': 'disabled'
        },
        {
          'name': 'icon',
          'type': 'Object',
          'defaultValue': '{}',
          'desc': { 'zh-CN': '设置图标', 'en-US': 'Set icon' },
          'demoId': 'icon'
        },
        {
          'name': 'placeholder',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '占位文本',
            'en-US': 'Placeholder Text'
          },
          'demoId': 'placeholder'
        }
      ]
    }
  ]
}
