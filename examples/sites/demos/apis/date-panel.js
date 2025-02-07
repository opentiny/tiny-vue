export default {
  mode: ['pc'],
  apis: [
    {
      name: 'date-panel',
      type: 'component',
      props: [
        {
          name: 'disabled-date',
          type: 'function',
          defaultValue: '',
          desc: {
            'zh-CN': '配置部分禁用',
            'en-US': 'Configuration section disabled.'
          },
          mode: ['pc'],
          pcDemo: 'disabled-date'
        },
        {
          name: 'format',
          type: 'string',
          defaultValue: "'yyyy-MM-dd'",
          desc: {
            'zh-CN': '面板选中日期格式',
            'en-US': 'Select date format on the panel.'
          },
          mode: ['pc'],
          pcDemo: 'format'
        },
        {
          name: 'v-model/modelValue',
          type: 'date | string | number',
          defaultValue: '',
          desc: {
            'zh-CN': '绑定值',
            'en-US': 'Set the initial value of the calendar component. ;Bound Value.'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'popper-class',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '为 DatePicker 面板添加的 class 类名',
            'en-US': 'Class name added for DatePanel.'
          },
          mode: ['pc'],
          pcDemo: 'custom-suffix-icon'
        },
        {
          name: 'readonly',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '设置日历组件是否只读',
            'en-US': 'Set panel component is read-only.'
          },
          mode: ['pc'],
          pcDemo: 'readonly'
        },
        {
          name: 'show-week-number',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否展示周次序号',
            'en-US': 'Display week number.'
          },
          mode: ['pc'],
          pcDemo: 'custom-weeks'
        },
        {
          name: 'format-weeks',
          type: '(customWeeks: number, weekFirstDays: string[]) => string',
          defaultValue: '',
          desc: {
            'zh-CN':
              '格式化周次序号，该回调函数有两个参数，customWeeks 用来获取自定义周次的序号，weekFirstDays 用来获取每周次中的首个日期',
            'en-US':
              'Format the week number, this callback function has two parameters: customWeeks is used to obtain the custom week number, and weekFirstDays is used to obtain the first date in the week number'
          },
          mode: ['pc'],
          pcDemo: 'custom-weeks'
        },
        {
          name: 'first-day-of-week',
          type: 'number',
          defaultValue: '7',
          desc: {
            'zh-CN': '设置每周的第一天是星期几，默认值是7，也就是星期天',
            'en-US':
              'Set the first day of each week as the day of the week, with a default value of 7, which is Sunday.'
          },
          mode: ['pc'],
          pcDemo: 'custom-weeks'
        }
      ],
      events: [
        {
          name: 'select-change',
          type: '(value: string) => void',
          desc: {
            'zh-CN': '用户确认选定的值时触发',
            'en-US': 'This event is triggered when the user confirms the selected value.'
          },
          mode: ['pc'],
          pcDemo: 'event'
        }
      ],
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
          name: 'd',
          desc: {
            'zh-CN': '日，不补0',
            'en-US': ''
          },
          mode: ['pc']
        },
        {
          name: 'dd',
          desc: {
            'zh-CN': '日',
            'en-US': ''
          },
          mode: ['pc']
        },
        {
          name: 'M',
          desc: {
            'zh-CN': '月，不补0',
            'en-US': ''
          },
          mode: ['pc']
        },
        {
          name: 'MM',
          desc: {
            'zh-CN': '月',
            'en-US': ''
          },
          mode: ['pc']
        },
        {
          name: 'W',
          desc: {
            'zh-CN': '周，不补0',
            'en-US': ''
          },
          mode: ['pc']
        },
        {
          name: 'WW',
          desc: {
            'zh-CN': '周',
            'en-US': ''
          },
          mode: ['pc']
        },
        {
          name: 'yyyy',
          desc: {
            'zh-CN': '年',
            'en-US': ''
          },
          mode: ['pc']
        }
      ]
    }
  ],
  types: [
    {
      name: 'IPickerOptions',
      type: 'interface',
      code: `
interface IPickerOptions {
  // 每周的第一天是星期几，默认值是7，也就是星期天
  firstDayOfWeek: number
  // 实现部分禁用，此时只能选择一部分日期
  disabledDate: (time: Date) => boolean
  // 选中日期后执行的回调，需要与 daterange 或 datetimerange 类型配合使用才生效
  onPick: (range: { minDate: Date, maxDate: Date }) => void
  // 快捷选项
  shortcuts: {
    text: string
    onClick: (picker: { $emit: (type: string, date: Date) => void }) => void
    type: 'startFrom' | 'EndAt'
    startDate: Date
    endDate: Date
  }[]
}
      `
    },
    {
      name: 'IType',
      type: 'type',
      code: `
type IType = 'date' | 'dates' | 'daterange' | 'datetime' | 'datetimerange' | 'week' | 'month' | 'monthrange' | 'quarter' | 'year' | 'years' | 'yearrange'
      `
    }
  ]
}
