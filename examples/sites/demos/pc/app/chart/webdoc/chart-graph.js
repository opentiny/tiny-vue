export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'graph-base',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN':
          '<p>可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE 9/10/11，Chrome，Firefox，Safari 等）底层依赖轻量级的 Canvas 类库 ZRender，提供直观，生动，可交互，可高度个性化定制的数据可视化图表。</p>\n<blockquote>\n<p>该图只支持 <code>extend</code> 配置，使用方式及属性和 eCharts 一致，请参考 eCharts 配置</p>\n</blockquote>\n',
        'en-US':
          '<p>It can run smoothly on PCs and mobile devices and is compatible with most browsers. (Internet Explorer 9/10/11, Chrome, Firefox, Safari, etc.) The bottom layer relies on the lightweight Canvas class library ZRender to provide intuitive, vivid, interactive, and highly personalized data visualization charts. The </p>\n<blockquote>\n<p> diagram supports only the <code>extend</code> configuration. The usage and attributes of the diagram are the same as those of the eCharts. For details, see the </p>\n</blockquote>\n'
      },
      'codeFiles': ['graph/base.vue']
    },
    {
      'demoId': 'graph-demo2',
      'name': { 'zh-CN': '笛卡尔坐标系上的 Graph', 'en-US': 'Graph in Cartesian coordinate system' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['graph/demo2.vue']
    },
    {
      'demoId': 'graph-demo3',
      'name': { 'zh-CN': '拓扑图的事件拓展', 'en-US': 'Extend events in the topology view' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['graph/demo3.vue']
    }
  ],
  apis: [{ 'name': 'chart-graph', 'type': 'component', 'properties': [], 'events': [], 'slots': [] }]
}
