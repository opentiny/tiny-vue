export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'heatmap-base',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN':
          '<p>可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE 9/10/11，Chrome，Firefox，Safari 等）底层依赖轻量级的 Canvas 类库 ZRender，提供直观，生动，可交互，可高度个性化定制的数据可视化图表。</p>\n',
        'en-US':
          '<p> can run smoothly on PCs and mobile devices and is compatible with most browsers. (Internet Explorer 9/10/11, Chrome, Firefox, Safari, etc.) The bottom layer relies on the lightweight Canvas class library ZRender to provide intuitive, vivid, interactive, and highly personalized data visualization charts. </p>\n'
      },
      'codeFiles': ['heatmap/base.vue']
    },
    {
      'demoId': 'heatmap-demo2',
      'name': { 'zh-CN': '配置坐标轴', 'en-US': 'Configure the coordinate axis' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['heatmap/demo2.vue']
    },
    {
      'demoId': 'heatmap-demo3',
      'name': { 'zh-CN': '自定义 visualMap', 'en-US': 'Customized visualMap' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['heatmap/demo3.vue']
    },
    {
      'demoId': 'heatmap-demo4',
      'name': { 'zh-CN': '地图热力图', 'en-US': 'Map heat map' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['heatmap/demo4.vue']
    },
    {
      'demoId': 'heatmap-demo5',
      'name': { 'zh-CN': '百度地图热力图', 'en-US': 'Baidu Map Heat Map' },
      'desc': {
        'zh-CN': '<p> 百度地图和高德地图需要外网访问权限才能正常使用\n</p>\n',
        'en-US': '<p>Baidu Map and AutoNavi Map require the external network access permission.\n</p>\n'
      },
      'codeFiles': ['heatmap/demo5.vue']
    }
  ],
  apis: [{ 'name': 'chart-heatmap', 'type': 'component', 'properties': [], 'events': [], 'slots': [] }]
}
