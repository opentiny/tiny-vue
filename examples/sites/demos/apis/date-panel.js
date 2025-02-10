export default {
  mode: ['pc'],
  apis: [
    {
      name: 'date-panel',
      type: 'component',
      props: [
        {
          name: 'disabled-date',
          type: '() => void',
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
          name: 'v-model / modelValue',
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
            'zh-CN': '为 DatePanel 面板添加的 class 类名',
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
            'zh-CN': '设置日期是否只读',
            'en-US': 'Set panel component is read-only.'
          },
          mode: ['pc'],
          pcDemo: 'readonly'
        },
        {
          name: 'shortcuts',
          type: 'Array<T>',
          defaultValue: '[]',
          desc: {
            'zh-CN': `设置快捷选项`,
            'en-US': 'Set shortcut options'
          },
          mode: ['pc'],
          pcDemo: 'shortcuts'
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
    },
    {
      name: 'date-range',
      type: 'component',
      props: [
        {
          name: 'modelValue / v-model',
          type: 'Array<T>',
          defaultValue: '[]',
          desc: {
            'zh-CN': '绑定值',
            'en-US': 'Set the initial value of the calendar component. ;Bound Value'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'type',
          type: `'daterange | datetimerange'`,
          defaultValue: 'daterange',
          desc: {
            'zh-CN': '时间区间类型',
            'en-US': 'Range type'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'disabled-date',
          type: '() => void',
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
            'zh-CN': '显示在输入框中的格式',
            'en-US': 'Display format in the text box'
          },
          mode: ['pc'],
          pcDemo: 'format'
        },
        {
          name: 'popper-class',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '为 DateRange 下拉弹框添加的 class 类名',
            'en-US': 'Class name added for DateRange.'
          },
          mode: ['pc'],
          pcDemo: 'custom-suffix-icon'
        },
        {
          name: 'readonly',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '设置日期是否只读',
            'en-US': 'Set whether the calendar component is read-only.'
          },
          mode: ['pc'],
          pcDemo: 'disabled'
        },
        {
          name: 'shortcuts',
          type: 'Array<T>',
          defaultValue: '[]',
          desc: {
            'zh-CN': `设置快捷选项`,
            'en-US': 'Set shortcut options'
          },
          mode: ['pc'],
          pcDemo: 'shortcuts'
        },
        {
          name: 'show-week-number',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否展示周次序号',
            'en-US': 'Display week number'
          },
          mode: ['pc'],
          pcDemo: 'custom-weeks'
        },
        {
          name: 'unlink-panels',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '在范围选择器里取消两个日期面板之间的联动',
            'en-US': 'Unlink the two date panels in the range selector'
          },
          mode: ['pc'],
          pcDemo: 'unlink-panels'
        }
      ],
      events: [
        {
          name: 'select-change',
          type: '(value: Date) => void',
          desc: {
            'zh-CN': '用户确认选定的值时触发',
            'en-US': 'This event is triggered when the user confirms the selected values.'
          },
          mode: ['pc'],
          pcDemo: 'events'
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
          name: 'M',
          desc: {
            'zh-CN': '月，不补0',
            'en-US': ''
          },
          mode: ['pc']
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
          name: 'MM',
          desc: {
            'zh-CN': '月',
            'en-US': ''
          },
          mode: ['pc']
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
  ]
}
