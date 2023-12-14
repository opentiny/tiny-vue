export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'base',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': '<p>默认固定在屏幕右侧固定位置</p>\n',
        'en-US': '<p>Fixed on the right of the screen by default</p>\n'
      },
      'codeFiles': ['base.vue']
    },
    {
      'demoId': 'custom-style',
      'name': { 'zh-CN': '自定义样式', 'en-US': 'Custom Style' },
      'desc': {
        'zh-CN': '<p>可通过配置 css 样式，设置浮动块的样式</p>\n',
        'en-US': '<p>You can configure the CSS style to set the floating block style</p>\n'
      },
      'codeFiles': ['custom-style.vue']
    },
    {
      'demoId': 'custom-floatbar-item',
      'name': { 'zh-CN': '自定义内容', 'en-US': 'Custom Content' },
      'desc': {
        'zh-CN': '<p>通过默认插槽设置浮动块的内容</p>\n',
        'en-US': '<p>Set the content of the floating block through the default slot</p>\n'
      },
      'codeFiles': ['custom-floatbar-item.vue']
    },
    {
      'demoId': 'operation-floatbar-item',
      'name': { 'zh-CN': '操作浮动块内容', 'en-US': 'Operation floating block content' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['operation-floatbar-item.vue']
    }
  ],
  apis: [
    {
      'name': 'floatbar',
      'type': 'component',
      'props': [],
      'events': [],
      'slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '浮动块内容。', 'en-US': 'Floating block content.' },
          'demoId': 'custom-style'
        }
      ]
    }
  ]
}
