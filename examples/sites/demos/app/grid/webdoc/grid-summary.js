export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'summary-custom-summary',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': '<p>通过 <code>footer-method</code> 和 <code>show-footer</code> 配置自定义统计。</p>\n',
        'en-US':
          '<p>Configure custom statistics through <code>footer-method</code> and <code>show-footer</code>. </p>\n'
      },
      'codeFiles': ['summary/custom-summary.vue']
    },
    {
      'demoId': 'summary-configuration-summary',
      'name': { 'zh-CN': '设置配置式的统计', 'en-US': 'Set Profile Statistics' },
      'desc': {
        'zh-CN': '<p>通过 <code>summary-config</code> 设置配置式的统计。</p>\n',
        'en-US': '<p>Set the profile statistics using <code>summary-config</code>. </p>\n'
      },
      'codeFiles': ['summary/configuration-summary.vue']
    }
  ],
  apis: [{ 'name': 'grid-summary', 'type': 'component', 'properties': [], 'events': [], 'slots': [] }]
}
