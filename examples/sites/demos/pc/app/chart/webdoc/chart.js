export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'base',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN':
          '<p>图表组件支持 <code>双向数据绑定</code>，可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE 9/10/11，Chrome，Firefox，Safari 等）底层依赖轻量级的 Canvas 类库 ZRender，提供直观，生动，可交互，可高度个性化定制的数据可视化图表。\n可通过 <code>theme</code> 自定义主题\n百度地图和高德地图需要外网访问权限才能正常使用\n</p>\n',
        'en-US':
          '<p>The chart component supports bidirectional data binding</code>, which can run smoothly on PCs and mobile devices and is compatible with most browsers. (Internet Explorer 9/10/11, Chrome, Firefox, Safari, etc.) The bottom layer relies on the lightweight Canvas class library ZRender to provide intuitive, vivid, interactive, and highly personalized data visualization charts. \nYou can use <code>theme</code> to customize themes. \nBaidu Maps and AutoNavi Maps require external network access. \n</p>\n'
      },
      'codeFiles': ['base.vue']
    }
  ],
  apis: [
    {
      'name': 'chart',
      'type': 'component',
      'properties': [
        {
          'name': 'data ',
          'type': 'object ',
          'defaultValue': '',
          'desc': {
            'zh-CN': '数据由指标和维度组成,“维度” 指的是数据的属性,“指标” 是量化衡量标准',
            'en-US':
              'Data consists of indicators and dimensions. Dimension refers to data attributes, and indicator refers to quantitative measurement standards.'
          },
          'demoId': 'chart/attributes-demo#props-demo10'
        },
        {
          'name': 'settings ',
          'type': 'object ',
          'defaultValue': '',
          'desc': {
            'zh-CN': '配置项，各图表 Settings 属性配置请查阅各图表详情页面',
            'en-US': 'Configuration item. For details about the attributes of each chart, see the chart details page.'
          },
          'demoId': ''
        },
        {
          'name': 'width',
          'type': 'string',
          'defaultValue': '该属性的默认值为 auto',
          'desc': { 'zh-CN': '设置图表容器的宽度。', 'en-US': 'Set the width of the chart container.' },
          'demoId': 'chart/attributes-demo#props-demo10'
        },
        {
          'name': 'height',
          'type': 'string',
          'defaultValue': '该属性的默认值为 400px',
          'desc': { 'zh-CN': '设置图表容器的高度。', 'en-US': 'Set the height of the chart container.' },
          'demoId': 'chart/attributes-demo#props-demo10'
        },
        {
          'name': 'events',
          'type': 'object',
          'defaultValue': '',
          'desc': { 'zh-CN': '事件绑定', 'en-US': 'Event binding' },
          'demoId': 'chart/events#events-base'
        },
        {
          'name': 'init-options',
          'type': 'object',
          'defaultValue': '',
          'desc': { 'zh-CN': 'init 附加参数', 'en-US': 'Init Additional Parameters' },
          'demoId': 'chart/attributes-demo#props-demo10'
        },
        {
          'name': 'tooltip-visible',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': { 'zh-CN': '是否显示提示框', 'en-US': 'Display dialog box' },
          'demoId': 'chart/attributes-demo#props-demo10'
        },
        {
          'name': 'legend-visible',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': { 'zh-CN': '是否显示图例', 'en-US': 'Display legend' },
          'demoId': 'chart/attributes-demo#props-demo10'
        },
        {
          'name': 'theme',
          'type': 'object',
          'defaultValue': '',
          'desc': {
            'zh-CN': '自定义主题名称。;自定义主题对象。',
            'en-US': 'User-defined theme name. ;User-defined theme object.'
          },
          'demoId': 'chart#base'
        },
        {
          'name': 'theme-name',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '自定义主题名称,如果设置了theme-name,则theme无效',
            'en-US': 'User-defined theme name. If theme-name is set, the theme is invalid.'
          },
          'demoId': 'chart#base'
        },
        {
          'name': 'judge-width',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '是否处理生成图表时的宽度问题',
            'en-US': 'Do you want to process the width issue when generating charts?'
          },
          'demoId': 'chart/events#events-base'
        },
        {
          'name': 'width-change-delay',
          'type': 'number',
          'defaultValue': '该属性的默认值为 300',
          'desc': { 'zh-CN': '容器宽度变化的延迟', 'en-US': 'Container width change delay' },
          'demoId': 'chart/question#question-base'
        },
        {
          'name': 'resizeable',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': { 'zh-CN': '是否处理窗口 resize 事件', 'en-US': 'Whether to process the window resize event' },
          'demoId': 'chart/question#question-base'
        },
        {
          'name': 'cancel-resize-check',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '是否禁用 resize 时的容器检测',
            'en-US': 'Whether to disable container detection during resize'
          },
          'demoId': 'chart/question#question-base'
        },
        {
          'name': 'resize-delay',
          'type': 'number',
          'defaultValue': '该属性的默认值为 200',
          'desc': { 'zh-CN': '窗口 resize 事件回调的延迟', 'en-US': 'Delay of the window resize event callback' },
          'demoId': 'chart/attributes-demo#props-demo10'
        },
        {
          'name': 'change-delay',
          'type': 'number',
          'defaultValue': '该属性的默认值为 0',
          'desc': {
            'zh-CN': '属性修改触发图表重绘回调的延迟',
            'en-US': 'Delay for triggering chart redrawing callback after attribute modification'
          },
          'demoId': 'chart/question#question-base'
        },
        {
          'name': 'set-option-opts',
          'type': 'boolean , object',
          'defaultValue': '该属性的默认值为 true',
          'desc': { 'zh-CN': 'echarts setOption 的第二个参数', 'en-US': 'Echarts setOption second parameter' },
          'demoId': ''
        },
        {
          'name': 'not-set-unchange',
          'type': 'Array',
          'defaultValue': '',
          'desc': {
            'zh-CN': '未发生变化时不参加 setOption 的属性',
            'en-US': 'The setOption attribute does not change.'
          },
          'demoId': ''
        }
      ],
      'events': [],
      'slots': []
    }
  ]
}
