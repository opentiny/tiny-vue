export default {
  mode: ['pc'],
  apis: [
    {
      name: 'calendar',
      type: 'component',
      props: [
        {
          name: 'events',
          typeAnchorName: 'eventLists',
          type: 'eventLists[]',
          defaultValue: '',
          desc: {
            'zh-CN': '事件列表',
            'en-US': 'Event List'
          },
          mode: ['pc'],
          pcDemo: 'dynamic-add-schedule'
        },
        {
          name: 'mode',
          type: "'month' | 'year'",
          defaultValue: "'month'",
          desc: {
            'zh-CN': '日历显示模式',
            'en-US': 'Display mode. The value can be month or year. The default value is month.'
          },
          mode: ['pc'],
          pcDemo: 'calendar-mode'
        },
        {
          name: 'month',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN': '指定月份，默认当前月份',
            'en-US': 'Specified month. The default value is the current month.'
          },
          mode: ['pc'],
          pcDemo: 'custom-day-cell'
        },
        {
          name: 'show-selected',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否显示选中的日期',
            'en-US': 'Display the selected date.'
          },
          mode: ['pc'],
          pcDemo: 'show-selected-date'
        },
        {
          name: 'year',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN': '指定年份，默认当前年份',
            'en-US': 'Specified year. The default year is this year.'
          },
          mode: ['pc'],
          pcDemo: 'custom-day-cell'
        }
      ],
      events: [],
      methods: [],
      slots: [
        {
          name: 'day',
          defaultValue: '',
          desc: {
            'zh-CN': '日期单元格插槽',
            'en-US': 'Date Cell Slot'
          },
          mode: ['pc'],
          pcDemo: 'custom-day-cell'
        },
        {
          name: 'tool',
          defaultValue: '',
          desc: {
            'zh-CN': '日历工具栏插槽',
            'en-US': 'Calendar Toolbar Slot'
          },
          mode: ['pc'],
          pcDemo: 'custom-calendar-toolbar'
        }
      ]
    }
  ],
  types: [
    {
      name: 'eventLists',
      type: 'interface',
      code: `
      interface eventLists [{
        time: 1534297845236, // 指定需要展示事件的日期
        title: '消息', // 指定事件标题
        content: '这是一条消息', // 指定事件的具体内容
        type: 'info' // 事件主题类型，包括 warning、error、info、success。
      }]`
    }
  ]
}
