export default {
  mode: ['pc'],
  apis: [
    {
      name: 'time-select',
      type: 'component',
      props: [
        {
          name: 'clear-icon',
          type: 'string',
          defaultValue: 'IconOperationfaild',
          desc: {
            'zh-CN': '自定义清空图标',
            'en-US': 'Customized clear icon'
          },
          mode: ['pc'],
          pcDemo: 'clear-icon'
        },
        {
          name: 'clearable',
          type: 'boolean',
          defaultValue: ' true',
          desc: {
            'zh-CN': '清除按钮是否显示',
            'en-US': 'Display Clear Button'
          },
          mode: ['pc'],
          pcDemo: 'clear-icon'
        },
        {
          name: 'default-value',
          type: 'Date',
          defaultValue: '',
          desc: {
            'zh-CN': '可选，当选中的日期值为空时，选择器面板打开时默认显示的时间，需设置为可被new Date()解析的值',
            'en-US':
              'Optional. When the selected date is empty, the time displayed by default when the selector panel is opened. Set it to a value that can be parsed by new Date().'
          },
          mode: ['pc'],
          pcDemo: 'default-value'
        },
        {
          name: 'disabled',
          type: 'boolean',
          defaultValue: ' false',
          desc: {
            'zh-CN': '时间选择器是否禁用',
            'en-US': 'Disabled'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'editable',
          type: 'boolean',
          defaultValue: ' true',
          desc: {
            'zh-CN': '文本框是否可手动输入',
            'en-US': 'The text box can be entered.'
          },
          mode: ['pc'],
          pcDemo: 'editable'
        },
        {
          name: 'modelValue / v-model',
          type: 'date(DatePicker) / array(DateRangePicker)',
          defaultValue: '',
          desc: {
            'zh-CN': '日期选择器选中的日期值，可设置选择器的初始值',
            'en-US': 'Date value selected by the date selector. You can set the initial value of the selector.'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'name',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '原生属性',
            'en-US': 'Native attribute'
          },
          mode: ['pc'],
          pcDemo: 'clear-icon'
        },
        {
          name: 'picker-options',
          type: 'object',
          defaultValue: '{}',
          desc: {
            'zh-CN': '当前时间日期选择器特有的选项参考下表',
            'en-US': 'The following table lists the options of the current time and date selector.'
          },
          mode: ['pc'],
          pcDemo: 'picker-options'
        },
        {
          name: 'placeholder',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '输入框的提示占位内容',
            'en-US': 'Placeholder content for non-range selection'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'popper-append-to-body',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false',
            'en-US':
              'Indicates whether to insert a pop-up box to the body element. If a fault occurs in locating the fault in the dialog box that is displayed, you can set this attribute to false'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'popper-class',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': 'TimePicker 下拉框的 class 类名',
            'en-US': 'Class name of the TimePicker drop-down list box'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'size',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '输入框尺寸;该属性的可选值为 medium、small、mini',
            'en-US': 'Text box size; The values of this attribute are medium, small, and mini'
          },
          mode: ['pc'],
          pcDemo: 'size-medium'
        },
        {
          name: 'suffix-icon',
          type: 'string',
          defaultValue: 'IconCalendar',
          desc: {
            'zh-CN': '自定义头部图标',
            'en-US': 'Custom header icon'
          },
          mode: ['pc'],
          pcDemo: 'suffix-icon'
        }
      ],
      events: [
        {
          name: 'blur',
          type: '( ) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '当 input 失去焦点时触发',
            'en-US': 'This event is triggered when the input loses focus.'
          },
          mode: ['pc'],
          pcDemo: 'event-blur'
        },
        {
          name: 'change',
          type: '(value: string) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '当 input 绑定的值发生改变时触发',
            'en-US': 'This event is triggered when the user confirms the selected value.'
          },
          mode: ['pc'],
          pcDemo: 'event-blur'
        },
        {
          name: 'focus',
          type: '( ) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '当 input 获得焦点时触发',
            'en-US': 'This event is triggered when the input is focused.'
          },
          mode: ['pc'],
          pcDemo: 'event-blur'
        }
      ],
      methods: [
        {
          name: 'focus',
          type: '( ) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '使 input 获取焦点',
            'en-US': 'Enable input to focus.'
          },
          mode: ['pc'],
          pcDemo: 'focus'
        }
      ],
      slots: []
    }
  ]
}
