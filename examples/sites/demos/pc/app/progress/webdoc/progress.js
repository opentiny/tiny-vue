export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': '通过<code>percentage</code>设置进度值，<code>stroke-width</code>设置进度条的宽度，单位 px。',
        'en-US':
          'Set the progress value through<code>percentage</code>, and<code>stroke-width</code>to set the width of the progress bar in px.'
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'custom-color',
      'name': { 'zh-CN': '定义颜色', 'en-US': 'Custom Color' },
      'desc': {
        'zh-CN': '通过<code>color</code>设置进度条颜色；会覆盖<code>status</code>状态颜色。',
        'en-US':
          'Set the progress bar color through<code>color</code>; It will overwrite the status color of<code>status</code>.'
      },
      'codeFiles': ['custom-color.vue']
    },
    {
      'demoId': 'format-text',
      'name': { 'zh-CN': '文字的显隐和位置', 'en-US': 'Position and Hiding of Text' },
      'desc': {
        'zh-CN':
          '通过<code>show-text</code>设置文字显隐；<code>text-inside</code>设置文字内置在进度条内显示（只在 type=line 时可用），<code>format</code>自定义进度条的文字。',
        'en-US':
          'Set text display and hiding through<code>show-text</code>; <code>text-inside</code>Set the text to be displayed within the progress bar (only available when type=line), and<code>format</code>customize the text for the progress bar.'
      },
      'codeFiles': ['format-text.vue']
    },
    {
      'demoId': 'progress-status',
      'name': { 'zh-CN': '状态', 'en-US': 'Status' },
      'desc': {
        'zh-CN': '通过<code>status</code>设置当前状态，可选值：<code>(success/exception/warning)</code>。',
        'en-US':
          'Set the current state through<code>status</code>, with optional values:<code>(success/exception/warning)</code>.'
      },
      'codeFiles': ['progress-status.vue']
    },
    {
      'demoId': 'custom-status',
      'name': { 'zh-CN': '自定义状态场景', 'en-US': 'Custom state scenario' },
      'desc': {
        'zh-CN': '用法如下。',
        'en-US': 'The usage is as follows.'
      },
      'codeFiles': ['custom-status.vue']
    },
    {
      'demoId': 'progress-type-circle',
      'name': { 'zh-CN': 'circle 类型', 'en-US': 'circle type' },
      'desc': {
        'zh-CN':
          '通过<code>type="circle"</code>设置为全封闭环形类型，<code>width</code>设置环形进度条画布宽度，默认值为126px。',
        'en-US':
          'Set<code>type="circle"</code>to a fully enclosed circular type, and<code>width</code>to set the width of the circular progress bar canvas, with a default value of 126px.'
      },
      'codeFiles': ['progress-type-circle.vue']
    },
    {
      'demoId': 'progress-type-dashboard',
      'name': { 'zh-CN': 'dashboard 类型', 'en-US': 'Dashboard Type' },
      'desc': {
        'zh-CN': '通过<code>type="dashboard"</code>设置为半封闭环形类型。',
        'en-US': 'Set to a semi enclosed circular type through<code>type="dashboard"</code>.'
      },
      'codeFiles': ['progress-type-dashboard.vue']
    }
  ],
  apis: [
    {
      'name': 'progress',
      'type': 'component',
      'props': [
        {
          'name': 'color',
          'type': 'string | array | (p: string) => string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '进度条背景色（会覆盖 status 状态颜色）',
            'en-US': 'Background color of the progress bar (overwrites the status color)'
          },
          'demoId': 'custom-color'
        },
        {
          'name': 'format',
          'type': '() => string',
          'defaultValue': '',
          'desc': { 'zh-CN': '自定义进度条的文字', 'en-US': 'Customize the text of the progress bar' },
          'demoId': 'format-text'
        },
        {
          'name': 'percentage',
          'type': 'number',
          'defaultValue': '0',
          'desc': {
            'zh-CN': '百分比（必填）；该属性的可选值为 0-100',
            'en-US': 'Percentage (mandatory) The optional values for this property are 0 - 100'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'show-text',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': { 'zh-CN': '是否显示进度条文字内容', 'en-US': 'Display progress bar text' },
          'demoId': 'format-text'
        },
        {
          'name': 'status',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '进度条当前状态；该属性的可选值为 success / exception / warning',
            'en-US':
              'Current status of the progress bar; The value of this attribute can be success, exception, or warning'
          },
          'demoId': 'progress-status'
        },
        {
          'name': 'stroke-width',
          'type': 'number',
          'defaultValue': '6',
          'desc': {
            'zh-CN': 'line 类型进度条的宽度，单位 px',
            'en-US': 'The width of the progress bar of type line, in px'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'text-inside',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '进度条显示文字内置在进度条内（只在 type=line 时可用）',
            'en-US':
              'The text displayed on the progress bar is embedded in the progress bar. This parameter is available only when type is set to line'
          },
          'demoId': 'format-text'
        },
        {
          'name': 'type',
          'type': 'string',
          'defaultValue': 'line',
          'desc': {
            'zh-CN': '进度条类型；该属性的可选值为 line / circle / dashboard',
            'en-US': 'Progress bar type; The value of this attribute can be line, circle, or dashboard'
          },
          'demoId': 'progress-type-circle'
        },
        {
          'name': 'width',
          'type': 'number',
          'defaultValue': '126',
          'desc': {
            'zh-CN': '环形进度条画布宽度（只在 type 为 circle 或 dashboard 时可用）',
            'en-US': 'Circular progress bar canvas width (available only when type is circle or dashboard)'
          },
          'demoId': 'progress-type-circle'
        }
      ],
      'events': [],
      'slots': []
    }
  ]
}
