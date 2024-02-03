export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'funnel-base',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN':
          '<p>可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE 9/10/11，Chrome，Firefox，Safari 等）底层依赖轻量级的 Canvas 类库 ZRender，提供直观，生动，可交互，可高度个性化定制的数据可视化图表。</p>\n',
        'en-US':
          '<p> can run smoothly on PCs and mobile devices and is compatible with most browsers. (Internet Explorer 9/10/11, Chrome, Firefox, Safari, etc.) The bottom layer relies on the lightweight Canvas class library ZRender to provide intuitive, vivid, interactive, and highly personalized data visualization charts. </p>\n'
      },
      'codeFiles': ['funnel/base.vue']
    },
    {
      'demoId': 'funnel-demo2',
      'name': { 'zh-CN': '指定指标维度', 'en-US': 'Specify Indicator Dimension' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['funnel/demo2.vue']
    },
    {
      'demoId': 'funnel-demo3',
      'name': {
        'zh-CN': '自动按照数值排序并过滤 0 值',
        'en-US': 'Automatically sorted by value and filtered by value 0'
      },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['funnel/demo3.vue']
    },
    {
      'demoId': 'funnel-demo4',
      'name': { 'zh-CN': '定制顺序漏斗图', 'en-US': 'Customized sequence funnel chart' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['funnel/demo4.vue']
    },
    {
      'demoId': 'funnel-demo5',
      'name': { 'zh-CN': '指定数据类型漏斗图', 'en-US': 'Funnel chart of a specified data type' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['funnel/demo5.vue']
    },
    {
      'demoId': 'funnel-demo6',
      'name': { 'zh-CN': '修改 legend 别名漏斗图', 'en-US': 'Modify legend alias funnel chart' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['funnel/demo6.vue']
    },
    {
      'demoId': 'funnel-demo7',
      'name': { 'zh-CN': '金字塔', 'en-US': 'Pyramid' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['funnel/demo7.vue']
    }
  ],
  apis: [{ 'name': 'chart-funnel', 'type': 'component', 'props': [], 'events': [], 'slots': [] }]
}
