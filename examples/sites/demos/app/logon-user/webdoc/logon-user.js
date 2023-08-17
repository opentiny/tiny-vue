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
      'demoId': 'custom-service',
      'name': { 'zh-CN': '自定义服务', 'en-US': 'Custom Service' },
      'desc': {
        'zh-CN': '<p>可通过 <code>service</code> 属性设置自定义服务。</p>\n',
        'en-US': '<p>You can set a custom service through the <code>service</code> attribute. </p>\n'
      },
      'codeFiles': ['custom-service.vue']
    }
  ],
  apis: [
    {
      'name': 'logon-user',
      'type': 'component',
      'properties': [
        {
          'name': 'getUserInfo',
          'type': 'Function',
          'defaultValue': '',
          'desc': {
            'zh-CN': '配置查询系统当前用户接口',
            'en-US': 'Configure the interface for querying current system users.'
          },
          'demoId': 'custom-service'
        }
      ],
      'events': [],
      'slots': []
    }
  ]
}
