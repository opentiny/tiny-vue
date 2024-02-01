export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'question-base',
      'name': { 'zh-CN': '常见问题', 'en-US': 'Frequently Asked Questions' },
      'desc': {
        'zh-CN':
          '<h4>父元素的初始宽度未知</h4>\n<p>在一个初始宽度未知的容器内绘制图表时，因为无法获取宽度，所以图表会绘制失败，解决的办法是在容器宽度已知后，\n调用 echarts 的 resize 方法。\n通过 <code>cancel-resize-check</code> 是用于resize之前，检测组件元素是否存在，元素是否有宽高，没有则不resize。</p>\n',
        'en-US':
          '<h4>The initial width of the parent element is unknown</h4>\n<p>When drawing a chart in a container whose initial width is unknown, the chart fails to be drawn because the width cannot be obtained. The solution is to obtain the width after the container width is known. \nInvoke the resize method of echarts. \n <code>cancel-resize-check</code> is used to check whether a component element exists and whether the element has width and height before resize. If no, the component element does not have width and height. </p>\n'
      },
      'codeFiles': ['question/base.vue']
    },
    {
      'demoId': 'question-demo5',
      'name': { 'zh-CN': '父元素的初始宽度未知', 'en-US': 'The initial width of the parent element is unknown.' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
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
      'name': { 'zh-CN': '小数显示精度', 'en-US': 'Decimal display precision' },
      'desc': {
        'zh-CN':
          '<p>处理数据类型时默认保留两位有效数字，但是当数字较小并设置为百分比类型时，这种方式会导致显示上的问题，例如：</p>\n',
        'en-US':
          '<p>When processing data types, two valid digits are reserved by default. However, when the number is small and the percentage type is set, this method may cause display problems, for example, </p>\n'
      },
      'codeFiles': ['question/demo2.vue']
    }
  ],
  apis: [{ 'name': 'chart-question', 'type': 'component', 'props': [], 'events': [], 'slots': [] }]
}
