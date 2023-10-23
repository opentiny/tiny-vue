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
      'demoId': 'start-end-step',
      'name': { 'zh-CN': '步长与时间区间', 'en-US': 'Step and Time Range' },
      'desc': {
        'zh-CN':
          '<p><code>start</code> 设置区间的起始时间，默认为 0 ，<code>end</code> 设置区间的结束时间，默认为 24 * 60 ，<code>step</code> 设置间隔的步长，默认为 15 。</p>\n',
        'en-US':
          '<p><code>start</code>: indicates the start time of the interval. The default value is 0. <code>end</code> indicates the end time of the interval. The default value is 24 x 60. <code>step</code> indicates the step of the interval. The default value is 15. </p>\n'
      },
      'codeFiles': ['start-end-step.vue']
    },
    {
      'demoId': 'size',
      'name': { 'zh-CN': '设置组件大小的size属性', 'en-US': 'Set the size attribute of the component size' },
      'desc': {
        'zh-CN': '<p>可设置为：medium，small，mini</p>\n',
        'en-US': '<p>The value can be medium, small, or mini</p>\n'
      },
      'codeFiles': ['size.vue']
    }
  ],
  apis: [
    {
      'name': 'drop-times',
      'type': 'component',
      'properties': [
        {
          'name': 'modelValue / v-model',
          'type': '—',
          'defaultValue': '该属性的默认值为 {}',
          'desc': { 'zh-CN': '绑定值', 'en-US': 'Set the component size. The value can be medium, small, or mini.' },
          'demoId': 'start-end-step'
        },
        {
          'name': 'size',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置组件大小，可以设置为：medium，small，mini',
            'en-US': 'Class name added to the DropTimes drop-down list box'
          },
          'demoId': 'size'
        },
        {
          'name': 'popper-class',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '为 DropTimes 下拉弹框添加的 class 类名',
            'en-US':
              'Indicates whether to insert the pop-up box to the body element. If a fault occurs in locating the fault in the dialog box that is displayed, you can set this attribute to false (for details, see the select component).'
          },
          'demoId': ''
        },
        {
          'name': 'popper-append-to-body',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': {
            'zh-CN':
              '是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false (可参考 select 组件)',
            'en-US': 'Bound Value'
          },
          'demoId': ''
        },
        {
          'name': 'placeholder',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置输入框内的提示占位文本',
            'en-US': 'Set the prompt placeholder text in the text box.'
          },
          'demoId': 'start-end-step'
        },
        {
          'name': 'end',
          'type': 'number',
          'defaultValue': '该属性的默认值为 1440',
          'desc': {
            'zh-CN': '结束时间，以分钟计算，默认值为 1440。',
            'en-US': 'End time, in minutes. The default value is 1440.'
          },
          'demoId': 'start-end-step'
        },
        {
          'name': 'start',
          'type': 'number',
          'defaultValue': '该属性的默认值为 0',
          'desc': {
            'zh-CN': '开始时间，以分钟计算，默认值为 0。',
            'en-US': 'Start time, in minutes. The default value is 0.'
          },
          'demoId': 'start-end-step'
        },
        {
          'name': 'step',
          'type': 'number',
          'defaultValue': '该属性的默认值为 15',
          'desc': {
            'zh-CN': '间隔时间，以分钟计算，默认值为 15。',
            'en-US': 'Interval, in minutes. The default value is 15.'
          },
          'demoId': 'start-end-step'
        }
      ],
      'events': [
        {
          'name': 'change',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '下拉切换当前时间后触发该事件',
            'en-US': 'This event is triggered after the current time is switched by the pull-down button.'
          },
          'demoId': 'start-end-step'
        }
      ],
      'slots': []
    }
  ]
}
