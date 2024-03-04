export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'question-base',
      'name': { 'zh-CN': '父元素的初始宽度未知1', 'en-US': 'The initial width of the parent element is unknown2' },
      'desc': {
        'zh-CN':
          '<p>在一个初始宽度未知的容器内绘制图表时，因为无法获取宽度，所以图表会绘制失败，解决的办法是在容器宽度已知后，\n调用 echarts 的 resize 方法。\n通过 <code>cancel-resize-check</code> 是用于resize之前，检测组件元素是否存在，元素是否有宽高，没有则不resize。</p>\n',
        'en-US':
          '<p>When drawing a chart in a container whose initial width is unknown, the chart fails to be drawn because the width cannot be obtained. The solution is to obtain the width after the container width is known. \nInvoke the resize method of echarts. \n <code>cancel-resize-check</code> is used to check whether a component element exists and whether the element has width and height before resize. If no, the component element does not have width and height. </p>\n'
      },
      'codeFiles': ['question/base.vue']
    },
    {
      'demoId': 'question-demo5',
      'name': { 'zh-CN': '父元素的初始宽度未知2', 'en-US': 'The initial width of the parent element is unknown 2.' },
      'desc': {
        'zh-CN': '当父元素改变时，图表需要执行 resize 方法同步图表的宽高。',
        'en-US':
          'When the parent element changes, the chart needs to perform the resize method to synchronize the width and height of the chart.'
      },
      'codeFiles': ['question/demo5.vue']
    },
    {
      'demoId': 'question-demo4',
      'name': { 'zh-CN': '数据改变视图自动更新', 'en-US': 'Automatically update the data change view' },
      'desc': {
        'zh-CN':
          '<p>图表是基于 Vue 开发的，同样支持 <code>双向数据绑定</code>，只要改变图表数据 <code>(示例中的 chartData.row)</code> 视图会自动更新。</p>\n',
        'en-US':
          '<p>The chart is developed based on the Vue and also supports <code>bidirectional data binding</code>. If the chart data <code> (chartData.row in the example)</code> is changed, the view is automatically updated. </p>\n'
      },
      'codeFiles': ['question/demo4.vue']
    },
    {
      'demoId': 'question-demo2',
      'name': { 'zh-CN': '小数显示精度1', 'en-US': 'Decimal display precision1' },
      'desc': {
        'zh-CN':
          '<p>处理数据类型时默认保留两位有效数字，但是当数字较小并设置为百分比类型时，这种方式会导致显示上的问题，例如：</p>\n',
        'en-US':
          '<p>When processing data types, two valid digits are reserved by default. However, when the number is small and the percentage type is set, this method may cause display problems, for example, </p>\n'
      },
      'codeFiles': ['question/demo2.vue']
    },
    {
      'demoId': 'question-demo3',
      'name': { 'zh-CN': '小数显示精度2', 'en-US': 'Decimal display precision2' },
      'desc': {
        'zh-CN': '每个图表内都有 digit 配置项，设置此属性，保证设置类型后，数值较小也能够正常显示，如下所示：',
        'en-US':
          'Each chart contains the digit configuration item. Set this attribute to ensure that a small value can be properly displayed after the type is set, as shown in the following figure.'
      },
      'codeFiles': ['question/demo3.vue']
    }
  ],
  apis: [{ 'name': 'chart-question', 'type': 'component', 'props': [], 'events': [], 'slots': [] }]
}
