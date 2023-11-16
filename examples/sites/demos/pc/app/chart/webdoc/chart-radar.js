export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'radar-base',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN':
          '<p>可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE 9/10/11，Chrome，Firefox，Safari 等）底层依赖轻量级的 Canvas 类库 ZRender，提供直观，生动，可交互，可高度个性化定制的数据可视化图表。</p>\n',
        'en-US':
          '<p> can run smoothly on PCs and mobile devices and is compatible with most browsers. (Internet Explorer 9/10/11, Chrome, Firefox, Safari, etc.) The bottom layer relies on the lightweight Canvas class library ZRender to provide intuitive, vivid, interactive, and highly personalized data visualization charts. </p>\n'
      },
      'codeFiles': ['radar/base.vue']
    },
    {
      'demoId': 'radar-demo2',
      'name': { 'zh-CN': '设置显示的指标维度', 'en-US': 'Set the KQI/KPI dimension to be displayed' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['radar/demo2.vue']
    },
    {
      'demoId': 'radar-demo3',
      'name': { 'zh-CN': '修改指标名称', 'en-US': 'Change KQI/KPI Name' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['radar/demo3.vue']
    }
  ],
  apis: [{ 'name': 'chart-radar', 'type': 'component', 'properties': [], 'events': [], 'slots': [] }]
}
