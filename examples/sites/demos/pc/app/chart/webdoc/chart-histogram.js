export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'histogram-base',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN':
          '<p>可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE 9/10/11，Chrome，Firefox，Safari 等）底层依赖轻量级的 Canvas 类库 ZRender，提供直观，生动，可交互，可高度个性化定制的数据可视化图表。</p>\n',
        'en-US':
          '<p> can run smoothly on PCs and mobile devices and is compatible with most browsers. (Internet Explorer 9/10/11, Chrome, Firefox, Safari, etc.) The bottom layer relies on the lightweight Canvas class library ZRender to provide intuitive, vivid, interactive, and highly personalized data visualization charts. </p>\n'
      },
      'codeFiles': ['histogram/base.vue']
    },
    {
      'demoId': 'histogram-demo2',
      'name': { 'zh-CN': '设置显示的指标维度', 'en-US': 'Set the KQI/KPI dimension to be displayed.' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['histogram/demo2.vue']
    },
    {
      'demoId': 'histogram-demo3',
      'name': { 'zh-CN': '设置双 y 轴', 'en-US': 'Set the two y axes' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['histogram/demo3.vue']
    },
    {
      'demoId': 'histogram-demo4',
      'name': { 'zh-CN': '柱状图+折线图', 'en-US': 'Bar chart + Line chart' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['histogram/demo4.vue']
    },
    {
      'demoId': 'histogram-demo5',
      'name': { 'zh-CN': '堆叠柱状图', 'en-US': 'Stacked Bar Chart' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['histogram/demo5.vue']
    },
    {
      'demoId': 'histogram-demo6',
      'name': { 'zh-CN': '默认显示柱状图数据', 'en-US': 'By default, bar chart data is displayed.' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['histogram/demo6.vue']
    },
    {
      'demoId': 'histogram-demo7',
      'name': { 'zh-CN': '修改别名', 'en-US': 'Modify Alias' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['histogram/demo7.vue']
    },
    {
      'demoId': 'histogram-demo8',
      'name': { 'zh-CN': '设置横轴为连续的数值轴', 'en-US': 'Set the horizontal axis to a continuous value axis' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['histogram/demo8.vue']
    }
  ],
  apis: [{ 'name': 'chart-histogram', 'type': 'component', 'props': [], 'events': [], 'slots': [] }]
}
