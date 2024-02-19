export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'candle-base',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN':
          '<p>可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE 9/10/11，Chrome，Firefox，Safari 等）底层依赖轻量级的 Canvas 类库 ZRender，提供直观，生动，可交互，可高度个性化定制的数据可视化图表。</p>\n',
        'en-US':
          '<p> can run smoothly on PCs and mobile devices and is compatible with most browsers. (Internet Explorer 9/10/11, Chrome, Firefox, Safari, etc.) The bottom layer relies on the lightweight Canvas class library ZRender to provide intuitive, vivid, interactive, and highly personalized data visualization charts. </p>\n'
      },
      'codeFiles': ['candle/base.vue']
    },
    {
      'demoId': 'candle-demo2',
      'name': { 'zh-CN': '使用简化的数据格式', 'en-US': 'Use simplified data format' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['candle/demo2.vue']
    },
    {
      'demoId': 'candle-demo3',
      'name': { 'zh-CN': '设置数据格式', 'en-US': 'Set the data format' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['candle/demo3.vue']
    },
    {
      'demoId': 'candle-demo4',
      'name': { 'zh-CN': '显示 MA, VOL', 'en-US': 'Display MA, VOL' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['candle/demo4.vue']
    },
    {
      'demoId': 'candle-demo5',
      'name': { 'zh-CN': '修改指标名和图例文字', 'en-US': 'Modify the KQI/KPI Name and Legend Text' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['candle/demo5.vue']
    },
    {
      'demoId': 'candle-demo6',
      'name': { 'zh-CN': '修改 MA 显示周期', 'en-US': 'Modify the MA display period' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['candle/demo6.vue']
    },
    {
      'demoId': 'candle-demo7',
      'name': { 'zh-CN': '设置 dataRoom 控件', 'en-US': 'Set the dataRoom control' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['candle/demo7.vue']
    }
  ],
  apis: [{ 'name': 'chart-candle', 'type': 'component', 'props': [], 'events': [], 'slots': [] }]
}
