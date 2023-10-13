export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'progress-type',
      'name': { 'zh-CN': 'line 类型', 'en-US': 'line type' },
      'desc': {
        'zh-CN': '<p><code>type=&quot;line&quot;</code> 显示为 line 类型</p>\n',
        'en-US': '<p><code>type=&quot;line&quot;</code> is displayed as line</p>\n'
      },
      'codeFiles': ['progress-type.vue']
    },
    {
      'demoId': 'progress-type-circle',
      'name': { 'zh-CN': 'circle 类型', 'en-US': 'circle type' },
      'desc': {
        'zh-CN':
          '<p><code>type=&quot;circle&quot;</code> 显示为 circle 类型。<code>width</code>可以调整环形进度条画布宽度，默认值为126px。</p>\n',
        'en-US':
          'The <p><code>type=&quot;circle&quot;</code> is of the circle type. <code>width</code>You can adjust the width of the ring progress bar canvas. The default value is 126px. </p>\n'
      },
      'codeFiles': ['progress-type-circle.vue']
    },
    {
      'demoId': 'progress-type-dashboard',
      'name': { 'zh-CN': 'dashboard 类型', 'en-US': 'Dashboard Type' },
      'desc': {
        'zh-CN':
          '<p><code>type=&quot;dashboard&quot;</code> 显示为 dashboard 类型。<code>width</code>可以调整环形进度条画布宽度，默认值为126px。</p>\n',
        'en-US':
          'The <p><code>type=&quot;dashboard&quot;</code> is displayed as a dashboard. <code>width</code>You can adjust the width of the ring progress bar canvas. The default value is 126px. </p>\n'
      },
      'codeFiles': ['progress-type-dashboard.vue']
    },
    {
      'demoId': 'progress-width',
      'name': { 'zh-CN': '宽度', 'en-US': 'Width' },
      'desc': {
        'zh-CN': '<p><code>stroke-width</code>进度条的宽度，单位 px</p>\n',
        'en-US': 'Width of the <p><code>stroke-width</code> progress bar, in px</p>\n'
      },
      'codeFiles': ['progress-width.vue']
    },
    {
      'demoId': 'progress-status',
      'name': { 'zh-CN': '状态', 'en-US': 'Status' },
      'desc': {
        'zh-CN': '<p><code>status</code> 进度条当前状态（success/exception/warning）</p>\n',
        'en-US': 'Current status of the <p><code>status</code> progress bar: (success/exception/warning) </p>\n'
      },
      'codeFiles': ['progress-status.vue']
    },
    {
      'demoId': 'text-inside-or-no-text',
      'name': { 'zh-CN': '文字内显或不显', 'en-US': 'Text displayed or not displayed' },
      'desc': {
        'zh-CN': '<p><code>show-text</code> 是否显示进度条文字内容</p>\n',
        'en-US': '<p><code>show-text</code> Whether to display progress bar text</p>\n'
      },
      'codeFiles': ['text-inside-or-no-text.vue']
    },
    {
      'demoId': 'custom-color',
      'name': { 'zh-CN': '自定义颜色', 'en-US': 'Custom Color' },
      'desc': {
        'zh-CN': '<p>通过 <code>color</code> 设置进度条颜色。color 进度条背景色（会覆盖 status 状态颜色）</p>\n',
        'en-US':
          '<p>Set the color of the progress bar through <code>color</code>. color: background color of the progress bar (overwrites the status color)</p>\n'
      },
      'codeFiles': ['custom-color.vue']
    },
    {
      'demoId': 'format-text',
      'name': { 'zh-CN': '自定义显示文字', 'en-US': 'Custom Text' },
      'desc': {
        'zh-CN':
          '<p><code>text-inside</code> 进度条显示文字内置在进度条内（只在 type=line 时可用），<code>format</code>自定义进度条的文字</p>\n',
        'en-US':
          'The <p><code>text-inside</code> progress bar text is embedded in the progress bar (available only when type is set to line). <code>format</code>Customize the progress bar text</p>\n'
      },
      'codeFiles': ['format-text.vue']
    },
    {
      'demoId': 'dynamic-control-changes',
      'name': { 'zh-CN': '动态控制进度条变化', 'en-US': 'Dynamic control progress bar change' },
      'desc': {
        'zh-CN': '<p>通过设置 <code>percentage</code> 动态控制进度条变化</p>\n',
        'en-US': '<p>Dynamic control of the progress bar by setting <code>percentage</code></p>\n'
      },
      'codeFiles': ['dynamic-control-changes.vue']
    }
  ],
  apis: [
    {
      'name': 'progress',
      'type': 'component',
      'properties': [
        {
          'name': 'percentage',
          'type': 'number',
          'defaultValue': '该属性的默认值为 0',
          'desc': {
            'zh-CN': '百分比（必填）;该属性的可选值为 0-100',
            'en-US': 'Percentage (mandatory) The optional values for this property are 0 - 100'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'type',
          'type': 'string',
          'defaultValue': '该属性的默认值为 line',
          'desc': {
            'zh-CN': '进度条类型;该属性的可选值为 line / circle / dashboard',
            'en-US': 'Progress bar type; The value of this attribute can be line, circle, or dashboard'
          },
          'demoId': 'progress-type'
        },
        {
          'name': 'stroke-width',
          'type': 'number',
          'defaultValue': '该属性的默认值为 6',
          'desc': { 'zh-CN': '进度条的宽度，单位 px', 'en-US': 'Progress bar width, in px' },
          'demoId': 'progress-width'
        },
        {
          'name': 'text-inside',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '进度条显示文字内置在进度条内（只在 type=line 时可用）',
            'en-US':
              'The text displayed on the progress bar is embedded in the progress bar. This parameter is available only when type is set to line.'
          },
          'demoId': 'progress-width'
        },
        {
          'name': 'status',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '进度条当前状态;该属性的可选值为 success / exception / warning',
            'en-US':
              'Current status of the progress bar; The value of this attribute can be success, exception, or warning'
          },
          'demoId': 'progress-status'
        },
        {
          'name': 'color',
          'type': 'string , Function , Array',
          'defaultValue': '',
          'desc': {
            'zh-CN': '进度条背景色（会覆盖 status 状态颜色）',
            'en-US': 'Background color of the progress bar (overwrites the status color).'
          },
          'demoId': 'custom-color'
        },
        {
          'name': 'width',
          'type': 'number',
          'defaultValue': '该属性的默认值为 126',
          'desc': {
            'zh-CN': '环形进度条画布宽度（只在 type 为 circle 或 dashboard 时可用）',
            'en-US': 'Circular progress bar canvas width (available only when type is circle or dashboard)'
          },
          'demoId': 'progress-width'
        },
        {
          'name': 'show-text',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': { 'zh-CN': '是否显示进度条文字内容', 'en-US': 'Display progress bar text' },
          'demoId': 'text-inside-or-no-text'
        },
        {
          'name': 'format',
          'type': 'Function',
          'defaultValue': '',
          'desc': { 'zh-CN': '自定义进度条的文字', 'en-US': 'Customize the text of the progress bar' },
          'demoId': 'format-text'
        }
      ],
      'events': [],
      'slots': []
    }
  ]
}
