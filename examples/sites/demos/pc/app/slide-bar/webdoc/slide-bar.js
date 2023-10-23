export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'wheel-blocks',
      'name': { 'zh-CN': '每次滚动块数', 'en-US': 'Number of blocks scrolled each time' },
      'desc': {
        'zh-CN':
          '<p>可通过 <code>wheel-blocks</code> 设置每次滚动块数。\n可通过 <code>value</code> 调用服务时候获取数据的来源</p>\n',
        'en-US':
          '<p>You can use <code>wheel-blocks</code> to set the number of blocks to be scrolled each time. \nThe data source can be obtained when the service is invoked through <code>value</code></p>\n'
      },
      'codeFiles': ['wheel-blocks.vue']
    },
    {
      'demoId': 'custom-content',
      'name': { 'zh-CN': '自定义滚动块内容', 'en-US': 'Custom Scroll Block Content' },
      'desc': {
        'zh-CN': '<p>通过插槽自定义滚动块内容。</p>\n',
        'en-US': '<p>Customize the scroll block content by slot. </p>\n'
      },
      'codeFiles': ['custom-content.vue']
    },
    {
      'demoId': 'custom-tag',
      'name': { 'zh-CN': '自定义 DOM 标签', 'en-US': 'Customized DOM Label' },
      'desc': {
        'zh-CN': '<p>可通过 <code>tag sub-tag</code> 自定义 DOM 标签。</p>\n',
        'en-US': '<p>You can use <code>tag sub-tag</code> to customize DOM tags. </p>\n'
      },
      'codeFiles': ['custom-tag.vue']
    },
    {
      'demoId': 'slide-bar-events',
      'name': { 'zh-CN': '滚动块事件', 'en-US': 'Scroll Block Event' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['slide-bar-events.vue']
    }
  ],
  apis: [
    {
      'name': 'slide-bar',
      'type': 'component',
      'properties': [
        {
          'name': 'value',
          'type': 'Array',
          'defaultValue': '',
          'desc': { 'zh-CN': '调用服务时候获取数据的来源。', 'en-US': 'Data source obtained during service invoking.' },
          'demoId': 'wheel-blocks'
        },
        {
          'name': 'init-blocks',
          'type': 'number',
          'defaultValue': '',
          'desc': { 'zh-CN': '初始时需要显示的块数。', 'en-US': 'Number of blocks to be displayed initially.' },
          'demoId': 'wheel-blocks'
        },
        {
          'name': 'wheel-blocks',
          'type': 'number',
          'defaultValue': '该属性的默认值为 1',
          'desc': {
            'zh-CN': '鼠标滚轮上下滚动的时候，滚动的块数长度。',
            'en-US': 'Number of scrolling blocks when the mouse wheel is scrolled up or down.'
          },
          'demoId': 'wheel-blocks'
        },
        {
          'name': 'tag',
          'type': 'string',
          'defaultValue': '该属性的默认值为 ul',
          'desc': { 'zh-CN': '设置组件的 Dom 标签', 'en-US': 'Setting the Dom Label of a Component' },
          'demoId': 'custom-tag'
        },
        {
          'name': 'sub-tag',
          'type': 'string',
          'defaultValue': '该属性的默认值为 li',
          'desc': { 'zh-CN': '设置组件的子级 Dom 标签', 'en-US': 'Setting the Dom Label of a Component' },
          'demoId': 'custom-tag'
        }
      ],
      'events': [
        {
          'name': 'before-click',
          'type': 'Function(value)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '滑动点击前触发的事件;event: 原生事件',
            'en-US': 'Event triggered before a user swipes the screen. event: Native event'
          },
          'demoId': 'slide-bar-events'
        },
        {
          'name': 'click',
          'type': 'Function(data, index)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '滑动块点击事件;data: 点击的滑块数据，index: 点击的滑块索引值',
            'en-US':
              'Sliding block click event; data: data of the clicked slider, index: index value of the clicked slider'
          },
          'demoId': 'slide-bar-events'
        }
      ],
      'slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '默认的作用域插槽', 'en-US': 'Default scope slot' },
          'demoId': 'custom-content'
        }
      ]
    }
  ]
}
