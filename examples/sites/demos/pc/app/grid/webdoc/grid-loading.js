export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'loading-grid-custom-loading',
      'name': { 'zh-CN': '自定义表格加载', 'en-US': 'Disable loading status' },
      'desc': {
        'zh-CN':
          '<p>通过表格属性设置 <code>loading</code> 开启或关闭加载状态，默认值为 <code>false</code> 不开启。通过表格属性设置 <code>loadingComponent</code> 可以自定义表格加载中 <code>dom</code> 结构。</p>\n',
        'en-US':
          '<p>Table attribute setting <code>loading</code> Enables or disables loading. The default value is <code>false</code>. </p>\n'
      },
      'codeFiles': ['loading/grid-custom-loading.vue']
    },
    {
      'demoId': 'loading-grid-loading-tip',
      'name': { 'zh-CN': '开启加载中状态', 'en-US': 'Enable loading status' },
      'desc': {
        'zh-CN': '通过表格属性设置 <code>loading</code> 开启加载状态。',
        'en-US': 'For details, see the following example.'
      },
      'codeFiles': ['loading/grid-loading-tip.vue']
    }
  ],
  apis: [{ 'name': 'grid-loading', 'type': 'component', 'props': [], 'events': [], 'slots': [] }]
}
