export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'bar-base',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN':
          '<p>可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE 9/10/11，Chrome，Firefox，Safari 等）底层依赖轻量级的 Canvas 类库 ZRender，提供直观，生动，可交互，可高度个性化定制的数据可视化图表。</p>\n',
        'en-US':
          '<p> can run smoothly on PCs and mobile devices and is compatible with most browsers. (Internet Explorer 9/10/11, Chrome, Firefox, Safari, etc.) The bottom layer relies on the lightweight Canvas class library ZRender to provide intuitive, vivid, interactive, and highly personalized data visualization charts. </p>\n'
      },
      'codeFiles': ['bar/base.vue']
    },
    {
      'demoId': 'bar-demo2',
      'name': { 'zh-CN': '指定指标维度', 'en-US': 'Specify Indicator Dimension' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['bar/demo2.vue']
    },
    {
      'demoId': 'bar-demo3',
      'name': { 'zh-CN': '排序条形图', 'en-US': 'Sort Bar' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['bar/demo3.vue']
    },
    {
      'demoId': 'bar-demo4',
      'name': { 'zh-CN': '条形轴配置双 y 轴', 'en-US': 'The bar axis is configured with two y-axises.' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['bar/demo4.vue']
    },
    {
      'demoId': 'bar-demo5',
      'name': { 'zh-CN': '设置 legend 别名', 'en-US': 'Set legend alias' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['bar/demo5.vue']
    },
    {
      'demoId': 'bar-demo6',
      'name': { 'zh-CN': '堆叠条形图', 'en-US': 'Stack Bar' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['bar/demo6.vue']
    },
    {
      'demoId': 'bar-demo7',
      'name': { 'zh-CN': '设置纵轴为连续的数值轴', 'en-US': 'Set the vertical axis to a continuous value axis.' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['bar/demo7.vue']
    }
  ],
  apis: [{ 'name': 'chart-bar', 'type': 'component', 'properties': [], 'events': [], 'slots': [] }]
}
