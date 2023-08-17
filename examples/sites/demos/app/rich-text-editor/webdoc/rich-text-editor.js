export default {
  column: '1',
  owner: 'Caesar-ch',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['basic-usage.vue']
    }
  ],
  apis: [
    {
      'name': 'rich-text-editor',
      'type': 'component',
      'properties': [
        {
          'name': 'modelValue',
          'type': 'String',
          'defaultValue': '',
          desc: {
            'zh-CN': '默认富文本内容',
            'en-US': 'default rich text content'
          },
          demoId: 'basic-usage'
        }
      ],
      'events': [],
      'methods': [],
      'slots': []
    }
  ]
}
