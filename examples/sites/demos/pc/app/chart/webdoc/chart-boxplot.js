export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'boxplot-base',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN':
          '<p>Boxplot 中文可以称为『箱形图』、『盒须图』、『盒式图』、『盒状图』、『箱线图』，是一种用作显示一组数据分散情况资料的统计图。它能显示出一组数据的最大值、最小值、中位数、下四分位数及上四分位数。</p>\n',
        'en-US':
          '<p>Boxplot Chinese can be called box diagram, box diagram. A statistical chart used to show a set of data dispersion. It displays the maximum, minimum, median, lower quartile, and upper quartile of a set of data. </p>\n'
      },
      'codeFiles': ['boxplot/base.vue']
    },
    {
      'demoId': 'boxplot-multiple',
      'name': { 'zh-CN': '多数据显示', 'en-US': 'Multi-data display' },
      'desc': {
        'zh-CN':
          '<p><code>boxplot</code> 提供数据转化方法 <code>prepareBoxplotData</code> 将源数据转化为 <code>{ axisData: [...], boxData: [...], outliers: [...] }</code> 的格式化数据。</p>\n',
        'en-US':
          '<p><code>boxplot</code> provides the data conversion method <code>prepareBoxplotData</code> to convert source data into <code>{axisData: [...], boxData: [...], outliers: [...]}</code> formatted data. </p>\n'
      },
      'codeFiles': ['boxplot/multiple.vue']
    },
    {
      'demoId': 'boxplot-vertical',
      'name': { 'zh-CN': '垂直显示', 'en-US': 'vertical display' },
      'desc': {
        'zh-CN': '<p>通过 <code>extend</code> 属性实现 <code>echarts</code> 方式的配置。</p>\n',
        'en-US': '<p>The <code>extend</code> attribute is used to configure the <code>echarts</code> mode. </p>\n'
      },
      'codeFiles': ['boxplot/vertical.vue']
    }
  ],
  apis: [{ 'name': 'chart-boxplot', 'type': 'component', 'props': [], 'events': [], 'slots': [] }]
}
