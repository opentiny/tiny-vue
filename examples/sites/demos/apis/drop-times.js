export default {
  mode: ['pc'],
  apis: [
    {
      name: 'drop-times',
      type: 'component',
      props: [
        {
          name: 'disabled',
          type: 'boolean',
          defaultValue: ' false',
          desc: {
            'zh-CN': '禁用状态',
            'en-US': 'Disabled state'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'end',
          type: 'number',
          defaultValue: ' 1440',
          desc: {
            'zh-CN': '结束时间，以分钟计算',
            'en-US': 'End time, in minutes. The default value is 1440.'
          },
          mode: ['pc'],
          pcDemo: 'start-end-step'
        },
        {
          name: 'modelValue / v-model',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '绑定值',
            'en-US': 'Set the component size. The value can be medium, small, or mini.'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'placeholder',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '设置输入框内的提示占位文本',
            'en-US': 'Set the prompt placeholder text in the text box.'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'popper-append-to-body',
          type: 'boolean',
          defaultValue: ' true',
          desc: {
            'zh-CN':
              '是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false (可参考 select 组件)',
            'en-US': 'Bound Value'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'popper-class',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '为 DropTimes 下拉弹框添加的 class 类名',
            'en-US':
              'Indicates whether to insert the pop-up box to the body element. If a fault occurs in locating the fault in the dialog box that is displayed, you can set this attribute to false (for details, see the select component).'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'size',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '输入框尺寸',
            'en-US': 'Class name added to the DropTimes drop-down list box'
          },
          mode: ['pc'],
          pcDemo: 'size'
        },
        {
          name: 'start',
          type: 'number',
          defaultValue: ' 0',
          desc: {
            'zh-CN': '开始时间，以分钟计算',
            'en-US': 'Start time, in minutes. The default value is 0.'
          },
          mode: ['pc'],
          pcDemo: 'start-end-step'
        },
        {
          name: 'step',
          type: 'number',
          defaultValue: ' 15',
          desc: {
            'zh-CN': '间隔时间，以分钟计算',
            'en-US': 'Interval, in minutes. The default value is 15.'
          },
          mode: ['pc'],
          pcDemo: 'start-end-step'
        }
      ],
      events: [
        {
          name: 'change',
          type: '(value: string) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '下拉切换当前时间后触发该事件',
            'en-US': 'This event is triggered after the current time is switched by the pull-down button.'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        }
      ],
      methods: [],
      slots: []
    }
  ]
}
