export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'gauge-base',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN':
          '<p>可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE 9/10/11，Chrome，Firefox，Safari 等）底层依赖轻量级的 Canvas 类库 ZRender，提供直观，生动，可交互，可高度个性化定制的数据可视化图表。</p>\n',
        'en-US':
          '<p> can run smoothly on PCs and mobile devices and is compatible with most browsers. (Internet Explorer 9/10/11, Chrome, Firefox, Safari, etc.) The bottom layer relies on the lightweight Canvas class library ZRender to provide intuitive, vivid, interactive, and highly personalized data visualization charts. </p>\n'
      },
      'codeFiles': ['gauge/base.vue']
    },
    {
      'demoId': 'gauge-demo2',
      'name': { 'zh-CN': '指标维度配置', 'en-US': 'KQI/KPI Dimension Configuration' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['gauge/demo2.vue']
    },
    {
      'demoId': 'gauge-demo3',
      'name': { 'zh-CN': '设置数据类型', 'en-US': 'Set Data Type' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['gauge/demo3.vue']
    },
    {
      'demoId': 'gauge-demo4',
      'name': { 'zh-CN': '设置指标别名与单位', 'en-US': 'Set the counter alias and unit' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['gauge/demo4.vue']
    },
    {
      'demoId': 'gauge-demo5',
      'name': { 'zh-CN': '设置多表盘及修改样式', 'en-US': 'Set multiple watch faces and modify the style' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['gauge/demo5.vue']
    }
  ],
  apis: [{ 'name': 'chart-gauge', 'type': 'component', 'properties': [], 'events': [], 'slots': [] }]
}
