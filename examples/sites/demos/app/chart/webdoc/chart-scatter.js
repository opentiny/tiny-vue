export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'scatter-base',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN':
          '<p>可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE 9/10/11，Chrome，Firefox，Safari 等）底层依赖轻量级的 Canvas 类库 ZRender，提供直观，生动，可交互，可高度个性化定制的数据可视化图表。</p>\n',
        'en-US':
          '<p> can run smoothly on PCs and mobile devices and is compatible with most browsers. (Internet Explorer 9/10/11, Chrome, Firefox, Safari, etc.) The bottom layer relies on the lightweight Canvas class library ZRender to provide intuitive, vivid, interactive, and highly personalized data visualization charts. </p>\n'
      },
      'codeFiles': ['scatter/base.vue']
    },
    {
      'demoId': 'scatter-demo2',
      'name': {
        'zh-CN': '双维度多指标散点图示例',
        'en-US': 'Example of a two-dimensional multi-indicator scatter chart'
      },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['scatter/demo2.vue']
    },
    {
      'demoId': 'scatter-demo3',
      'name': { 'zh-CN': '指标维度配置', 'en-US': 'KQI/KPI Dimension Configuration' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['scatter/demo3.vue']
    },
    {
      'demoId': 'scatter-demo4',
      'name': { 'zh-CN': '数据类型配置', 'en-US': 'Data Type Configuration' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['scatter/demo4.vue']
    },
    {
      'demoId': 'scatter-demo5',
      'name': { 'zh-CN': '属性名配置', 'en-US': 'Attribute Name Configuration' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['scatter/demo5.vue']
    },
    {
      'demoId': 'scatter-demo6',
      'name': { 'zh-CN': '缩放配置', 'en-US': 'Zooming Configuration' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['scatter/demo6.vue']
    },
    {
      'demoId': 'scatter-demo7',
      'name': { 'zh-CN': '散点样式配置', 'en-US': 'Scatter Style Configuration' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['scatter/demo7.vue']
    },
    {
      'demoId': 'scatter-demo8',
      'name': {
        'zh-CN': '散点出现覆盖时, 提示框可以改成通过坐标轴触发',
        'en-US': 'When the scatter is overwritten, the dialog box can be triggered by the coordinate axis.'
      },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['scatter/demo8.vue']
    }
  ],
  apis: [{ 'name': 'chart-scatter', 'type': 'component', 'properties': [], 'events': [], 'slots': [] }]
}
