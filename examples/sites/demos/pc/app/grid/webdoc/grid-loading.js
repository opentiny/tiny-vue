export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'loading-grid-loading-off-tip',
      'name': { 'zh-CN': '关闭加载中状态', 'en-US': 'Disable loading status' },
      'desc': {
        'zh-CN': '<p>表格属性设置 <code>loading</code> 开启或关闭加载状态，默认值为 <code>false</code> 不开启。</p>\n',
        'en-US':
          '<p>Table attribute setting <code>loading</code> Enables or disables loading. The default value is <code>false</code>. </p>\n'
      },
      'codeFiles': ['loading/grid-loading-off-tip.vue']
    },
    {
      'demoId': 'loading-grid-loading-tip',
      'name': { 'zh-CN': '开启加载中状态', 'en-US': 'Enable loading status' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['loading/grid-loading-tip.vue']
    }
  ],
  apis: [{ 'name': 'grid-loading', 'type': 'component', 'properties': [], 'events': [], 'slots': [] }]
}
