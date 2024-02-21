export default {
  mode: ['pc'],
  apis: [
    {
      name: 'time-picker',
      type: 'component',
      props: [
        {
          name: 'arrow-control',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否使用箭头进行时间选择',
            'en-US': 'Whether to use arrows for time selection'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'clear-icon',
          type: 'Component',
          defaultValue: 'IconOperationfaild',
          desc: {
            'zh-CN': '自定义清空图标',
            'en-US':
              'Indicates whether to insert a pop-up box to the body element. If a fault occurs in locating the fault in the dialog box that is displayed, you can set this attribute to false'
          },
          mode: ['pc'],
          pcDemo: 'clearable'
        },
        {
          name: 'clearable',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否显示清除按钮',
            'en-US': 'Display Clear Button'
          },
          mode: ['pc'],
          pcDemo: 'clearable'
        },
        {
          name: 'default-value',
          type: 'Date | string | number | Array',
          defaultValue: '',
          desc: {
            'zh-CN': '当选中的日期值为空时，选择器面板打开时默认显示的时间，需设置为可被 new Date() 解析的值',
            'en-US': 'Native attribute'
          },
          mode: ['pc'],
          pcDemo: 'default-value'
        },
        {
          name: 'disabled',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '禁用',
            'en-US': 'Disabled'
          },
          mode: ['pc'],
          pcDemo: 'disabled'
        },
        {
          name: 'editable',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '文本框可输入',
            'en-US': 'The text box can be entered.'
          },
          mode: ['pc'],
          pcDemo: 'editable'
        },
        {
          name: 'end-placeholder',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '范围选择时结束日期的占位内容',
            'en-US': 'Placeholder of the end date when the range is selected'
          },
          mode: ['pc'],
          pcDemo: 'placeholder'
        },
        {
          name: 'is-range',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否为时间范围选择',
            'en-US':
              'Indicates whether to use arrows to select time. This parameter is valid only for <tiny-time-picker>.'
          },
          mode: ['pc'],
          pcDemo: 'is-range'
        },
        {
          name: 'modelValue / v-model',
          type: 'Date | string | number | Array',
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
            'zh-CN': '原生 input <code>name</code> 属性',
            'en-US': 'Native input <code>name</code> attribute'
          },
          mode: ['pc'],
          pcDemo: 'name'
        },
        {
          name: 'picker-options',
          typeAnchorName: 'IPickerOptions',
          type: 'IPickerOptions',
          defaultValue: '',
          desc: {
            'zh-CN': '配置可选的时间范围、下拉框中显示的格式',
            'en-US': ''
          },
          mode: ['pc'],
          pcDemo: 'disabled'
        },
        {
          name: 'placeholder',
          type: 'string',
          defaultValue: "''",
          desc: {
            'zh-CN': '非范围选择时的占位内容',
            'en-US': 'Placeholder content for non-range selection'
          },
          mode: ['pc'],
          pcDemo: 'placeholder'
        },
        {
          name: 'popper-append-to-body',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否将弹出框插入至 body 元素，在弹出框的定位出现问题时，可将该属性设置为 false',
            'en-US': ''
          },
          mode: ['pc'],
          pcDemo: 'popper-class'
        },
        {
          name: 'popper-class',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': 'TimePicker 下拉框的 class 类名',
            'en-US': 'The following table lists the options of the current time and date selector.'
          },
          mode: ['pc'],
          pcDemo: 'popper-class'
        },
        {
          name: 'range-separator',
          type: 'string',
          defaultValue: "'-'",
          desc: {
            'zh-CN': '选择范围时的分隔符',
            'en-US':
              'Optional. When the selected date is empty, the time displayed by default when the selector panel is opened. Set it to a value that can be parsed by new Date().'
          },
          mode: ['pc'],
          pcDemo: 'is-range'
        },
        {
          name: 'size',
          type: "'medium' | 'small' | '' | 'mini'",
          defaultValue: "''",
          desc: {
            'zh-CN': '输入框尺寸',
            'en-US': 'Text box size; The values of this attribute are medium, small, and mini'
          },
          mode: ['pc'],
          pcDemo: 'size'
        },
        {
          name: 'start-placeholder',
          type: 'string',
          defaultValue: "''",
          desc: {
            'zh-CN': '范围选择时开始日期的占位内容',
            'en-US': 'Placeholder of the start date when the range is selected'
          },
          mode: ['pc'],
          pcDemo: 'placeholder'
        },
        {
          name: 'step',
          typeAnchorName: 'IStep',
          type: 'IStep',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义时分秒步长',
            'en-US': 'Indicates whether to select a time range. This parameter is valid only for <tiny-time-picker>.'
          },
          mode: ['pc'],
          pcDemo: 'step'
        },
        {
          name: 'suffix-icon',
          type: 'object',
          defaultValue: 'IconCalendar',
          desc: {
            'zh-CN': '自定义头部图标的类名',
            'en-US': 'Custom Clear Icon'
          },
          mode: ['pc'],
          pcDemo: 'suffix-icon'
        }
      ],
      events: [
        {
          name: 'blur',
          type: '() => void',
          desc: {
            'zh-CN': '当 input 失去焦点时触发',
            'en-US': 'This event is triggered when the input loses focus. arg:{object Time Component Vue Object}'
          },
          mode: ['pc'],
          pcDemo: 'event'
        },
        {
          name: 'change',
          type: '(date: Date | Date[]) => void',
          desc: {
            'zh-CN': '用户确认选定的值时触发',
            'en-US':
              'This event is triggered when the user confirms the selected value. arg:{Date|Array is the time object of the currently selected value when it is not selected in a range. When the range is selected, it is the time object array of the currently selected value}'
          },
          mode: ['pc'],
          pcDemo: 'event'
        },
        {
          name: 'focus',
          type: '() => void',
          desc: {
            'zh-CN': '当 input 获得焦点时触发',
            'en-US': 'This event is triggered when the input is focused. arg:{object Time Component Vue object}'
          },
          mode: ['pc'],
          pcDemo: 'event'
        }
      ],
      methods: [
        {
          name: 'focus',
          type: '() => void',
          desc: {
            'zh-CN': '使 input 获取焦点',
            'en-US': 'Enable input to focus.'
          },
          mode: ['pc'],
          pcDemo: 'event'
        }
      ],
      slots: [],
      format: [
        {
          name: 'a',
          desc: {
            'zh-CN': 'am/pm',
            'en-US': ''
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'A',
          desc: {
            'zh-CN': 'AM/PM',
            'en-US': ''
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'h',
          desc: {
            'zh-CN': '小时，12小时制，需要和 A 或 a 一起使用，不补0',
            'en-US': ''
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'H',
          desc: {
            'zh-CN': '小时，24小时制，不补0',
            'en-US': ''
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'hh',
          desc: {
            'zh-CN': '小时，12小时制，需要和 A 或 a 一起使用',
            'en-US': ''
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'HH',
          desc: {
            'zh-CN': '小时，24小时制',
            'en-US': ''
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'm',
          desc: {
            'zh-CN': '分钟，不补0',
            'en-US': ''
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'mm',
          desc: {
            'zh-CN': '分钟',
            'en-US': ''
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 's',
          desc: {
            'zh-CN': '秒，不补0',
            'en-US': ''
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'ss',
          desc: {
            'zh-CN': '秒',
            'en-US': ''
          },
          mode: ['pc'],
          pcDemo: ''
        }
      ]
    }
  ],
  types: [
    {
      name: 'IStep',
      type: 'interface',
      code: `
interface IStep {
  hour: number
  minute: number
  second: number
}
      `
    },
    {
      name: 'IPickerOptions',
      type: 'interface',
      code: `
interface IPickerOptions {
  // 可选的时间范围
  selectableRange: string
  // 下拉框中显示的格式
  format: string
}
      `
    }
  ]
}
