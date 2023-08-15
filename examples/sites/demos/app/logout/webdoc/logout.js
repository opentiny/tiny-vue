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
    },
    {
      'demoId': 'redirecturl',
      'name': { 'zh-CN': '自定义配置注销后跳转地址', 'en-US': 'User-defined redirection address after deregistration' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['redirecturl.vue']
    }
  ],
  apis: [
    {
      'name': 'logout',
      'type': 'component',
      'properties': [
        {
          'name': 'getLogoutUrl',
          'type': 'Function',
          'defaultValue': '',
          'desc': {
            'zh-CN': '自定义获取注销服务接口',
            'en-US': 'User-defined interface for obtaining the deregistration service'
          },
          'demoId': 'custom-service'
        },
        {
          'name': 'redirectUrl',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '自定义配置注销后跳转地址',
            'en-US': 'User-defined redirection address after deregistration'
          },
          'demoId': 'redirecturl'
        },
        {
          'name': 'beforeLogout',
          'type': 'Function(params)',
          'defaultValue': '',
          'desc': { 'zh-CN': '注销前的回调函数', 'en-US': 'Callback function before deregistration' },
          'demoId': ''
        }
      ],
      'events': [],
      'slots': []
    }
  ]
}
