export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'liquidfill-base',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN':
          '<p>可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE 9/10/11，Chrome，Firefox，Safari 等）底层依赖轻量级的 Canvas 类库 ZRender，提供直观，生动，可交互，可高度个性化定制的数据可视化图表。</p>\n',
        'en-US':
          '<p> can run smoothly on PCs and mobile devices and is compatible with most browsers. (Internet Explorer 9/10/11, Chrome, Firefox, Safari, etc.) The bottom layer relies on the lightweight Canvas class library ZRender to provide intuitive, vivid, interactive, and highly personalized data visualization charts. </p>\n'
      },
      'codeFiles': ['liquidfill/base.vue']
    },
    {
      'demoId': 'liquidfill-demo2',
      'name': { 'zh-CN': '水球图分层', 'en-US': 'Layered water balloon chart' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['liquidfill/demo2.vue']
    },
    {
      'demoId': 'liquidfill-demo3',
      'name': { 'zh-CN': '设置多个水球图', 'en-US': 'Set multiple water balloons' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['liquidfill/demo3.vue']
    },
    {
      'demoId': 'liquidfill-demo4',
      'name': { 'zh-CN': '设置水球图的形状', 'en-US': 'Set the shape of the water balloon chart' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['liquidfill/demo4.vue']
    },
    {
      'demoId': 'liquidfill-demo5',
      'name': {
        'zh-CN': '水球图文字标签及样式设置',
        'en-US': 'Set the text label and style of the water balloon diagram'
      },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['liquidfill/demo5.vue']
    }
  ],
  apis: [{ 'name': 'chart-liquidfill', 'type': 'component', 'props': [], 'events': [], 'slots': [] }]
}
