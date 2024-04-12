export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'process-base',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN':
          '<p>可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE 9/10/11，Chrome，Firefox，Safari 等）底层依赖轻量级的 Canvas 类库 ZRender，提供直观，生动，可交互，可高度个性化定制的数据可视化图表。</p>\n',
        'en-US':
          '<p> can run smoothly on PCs and mobile devices and is compatible with most browsers. (Internet Explorer 9/10/11, Chrome, Firefox, Safari, etc.) The bottom layer relies on the lightweight Canvas class library ZRender to provide intuitive, vivid, interactive, and highly personalized data visualization charts. </p>\n'
      },
      'codeFiles': ['process/base.vue']
    },
    {
      'demoId': 'process-demo2',
      'name': { 'zh-CN': '自定义', 'en-US': 'customizing' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['process/demo2.vue']
    },
    {
      'demoId': 'process-demo3',
      'name': { 'zh-CN': '堆叠', 'en-US': 'Stacking' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['process/demo3.vue']
    },
    {
      'demoId': 'process-demo4',
      'name': { 'zh-CN': '不同状态', 'en-US': 'Different states' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['process/demo4.vue']
    },
    {
      'demoId': 'process-demo5',
      'name': { 'zh-CN': '数据缺省', 'en-US': 'data default' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['process/demo5.vue']
    },
    {
      'demoId': 'process-demo6',
      'name': { 'zh-CN': '双向', 'en-US': 'Two-way' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['process/demo6.vue']
    }
  ],
  apis: [{ 'name': 'chart-process', 'type': 'component', 'props': [], 'events': [], 'slots': [] }],
  types: [
    {
      name: 'options',
      type: 'interface',
      code: ``
    }
  ]
}
