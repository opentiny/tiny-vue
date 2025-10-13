export default {
  column: '1',
  owner: '',
  show: true,
  cloud: false,
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN': '通过<code>value</code>设置数字内容，<code>precision</code>设置数字精度值。',
        'en-US': 'Set digital content through<code>value</code>,<code>precision</code>set digital precision value.'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'prefix-suffix-slot',
      name: {
        'zh-CN': '前后缀',
        'en-US': 'Usage of Prefix and Suffix'
      },
      desc: {
        'zh-CN': '<code>prefix</code>设置前缀，<code>suffix</code>设置后缀。',
        'en-US': 'Set the prefix through<code>prefix</code>, and set the number suffix through<code>suffix</code>.'
      },
      codeFiles: ['prefix-suffix-slot.vue']
    },
    {
      demoId: 'statistic-slot',
      name: {
        'zh-CN': '标题',
        'en-US': 'Title Usage'
      },
      desc: {
        'zh-CN': '通过<code>title</code>设置标题。',
        'en-US': 'Set the title through<code>title</code>.'
      },
      codeFiles: ['statistic-slot.vue']
    },
    {
      demoId: 'statistic-style',
      name: {
        'zh-CN': '样式',
        'en-US': 'Style Usage'
      },
      desc: {
        'zh-CN': '通过<code>value-style</code>设置数字样式。',
        'en-US': 'Set the number style through<code>value style</code>.'
      },
      codeFiles: ['statistic-style.vue']
    }
  ],
  features: [
    {
      id: 'basic',
      name: '基本用法',
      support: {
        value: true
      },
      description: '通过 value 设置数字内容，precision 设置数字精度值。',
      cloud: {
        value: false
      },
      apis: ['value', 'precision'],
      demos: ['basic-usage']
    },
    {
      id: 'prefix-suffix',
      name: '前后缀',
      support: {
        value: true
      },
      description: 'prefix 设置前缀，suffix 设置后缀。',
      cloud: {
        value: false
      },
      apis: ['prefix', 'suffix'],
      demos: ['prefix-suffix-slot']
    },
    {
      id: 'title',
      name: '标题',
      support: {
        value: true
      },
      description: '通过 title 设置标题。',
      cloud: {
        value: false
      },
      apis: ['title'],
      demos: ['statistic-slot']
    },
    {
      id: 'style',
      name: '样式',
      support: {
        value: true
      },
      description: '通过 value-style 设置数字样式。',
      cloud: {
        value: false
      },
      apis: ['value-style'],
      demos: ['statistic-style']
    }
  ]
}
