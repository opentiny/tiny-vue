export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'tiny-first-menu-grid-loading-off-tip',
      'name': { 'zh-CN': '关闭加载中状态', 'en-US': 'Disable loading status' },
      'desc': {
        'zh-CN': '<p>表格属性设置 <code>loading</code> 开启或关闭加载状态，默认值为 <code>false</code> 不开启。</p>\n',
        'en-US':
          '<p>Table attribute setting <code>loading</code> Enables or disables loading. The default value is <code>false</code>. </p>\n'
      },
      'codeFiles': ['tiny-first-menu/grid-loading-off-tip.vue']
    },
    {
      'demoId': 'tiny-first-menu-grid-loading-tip',
      'name': { 'zh-CN': '开启加载中状态', 'en-US': 'Enable loading status' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['tiny-first-menu/grid-loading-tip.vue']
    }
  ],
  apis: [{ 'name': 'grid-grid-loading-tip', 'type': 'component', 'properties': [], 'events': [], 'slots': [] }]
}
