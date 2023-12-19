export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'different-color',
      'name': { 'zh-CN': '不同颜色', 'en-US': 'Different Color' },
      'desc': {
        'zh-CN': '不同颜色',
        'en-US': 'Different Color'
      },
      'codeFiles': ['different-color.vue']
    },
    {
      'demoId': 'max-width',
      'name': { 'zh-CN': '最大宽度', 'en-US': 'Max Width' },
      'desc': {
        'zh-CN': '最大宽度',
        'en-US': 'Max Width'
      },
      'codeFiles': ['max-width.vue']
    },
    {
      'demoId': 'mini',
      'name': { 'zh-CN': '小尺寸', 'en-US': 'Mini' },
      'desc': {
        'zh-CN': '小尺寸',
        'en-US': 'Mini'
      },
      'codeFiles': ['mini.vue']
    }
  ],
  apis: [
    {
      'name': 'tag',
      'type': 'component',
      'props': [
        {
          'name': 'color',
          'type': 'string',
          'defaultValue': 'default',
          'desc': {
            'zh-CN': '文字颜色：default、red、blue、yellow、green',
            'en-US': 'text color: default、red、blue、yellow、green'
          },
          'demoId': 'different-color'
        },
        {
          'name': 'max-width',
          'type': 'string | number',
          'defaultValue': '',
          'desc': { 'zh-CN': '最大宽度', 'en-US': 'max width' },
          'demoId': 'max-width'
        },
        {
          'name': 'mini',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '小尺寸',
            'en-US': 'mini'
          },
          'demoId': 'mini'
        },
        {
          'name': 'text',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '文字',
            'en-US': 'Text'
          },
          'demoId': 'basic-usage'
        }
      ],
      'slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '标签内容', 'en-US': 'Label Content' },
          'demoId': 'slot-default'
        }
      ]
    }
  ]
}
