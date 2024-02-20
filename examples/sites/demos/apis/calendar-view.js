export default {
  mode: ['pc', 'mobile-first'],
  apis: [
    {
      name: 'calendar-view',
      type: 'component',
      props: [
        {
          name: 'day-times',
          type: 'Array',
          defaultValue: '',
          desc: {
            'zh-CN': '配置时间线模式下所展示的时间范围，默认为[8,18]，可配范围[0,23]。',
            'en-US': ''
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'calendar-timeline-range',
          mfDemo: 'calendar-timeline-range'
        },
        {
          name: 'disabled',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '日期禁用',
            'en-US': ''
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'calendar-disabled-day',
          mfDemo: 'calendar-disabled-day'
        },
        {
          name: 'events',
          type: 'Array',
          defaultValue: '',
          desc: {
            'zh-CN': '日程事件',
            'en-US': ''
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'calendar-event',
          mfDemo: 'calendar-event'
        },
        {
          name: 'height',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '日历高度',
            'en-US': ''
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: '',
          mfDemo: ''
        },
        {
          name: 'mark-color',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '点标记的颜色',
            'en-US': ''
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'calendar-day-mark',
          mfDemo: 'calendar-day-mark'
        },
        {
          name: 'mode',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '显示模式，可选值有 timeline-时间线模式、schedule-日程模式、month-月模式，默认为月模式。',
            'en-US': ''
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'calendar-mode',
          mfDemo: 'calendar-mode'
        },
        {
          name: 'modes',
          type: 'Array',
          defaultValue: '',
          desc: {
            'zh-CN': '模式组，显示模式任意组合',
            'en-US': ''
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'calendar-mode',
          mfDemo: 'calendar-mode'
        },
        {
          name: 'month',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '日历当前显示月份',
            'en-US': ''
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: 'basic-usage'
        },
        {
          name: 'multi-select',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '日期多选',
            'en-US': ''
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'multi-select',
          mfDemo: 'multi-select'
        },
        {
          name: 'set-day-bg-color',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '设置日期背景色',
            'en-US': ''
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'custom-day-bg-color',
          mfDemo: 'custom-day-bg-color'
        },
        {
          name: 'show-mark',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '显示点标记',
            'en-US': ''
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'calendar-day-mark',
          mfDemo: 'calendar-day-mark'
        },
        {
          name: 'show-new-schedule',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '显示新增日程按钮',
            'en-US': ''
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: 'basic-usage'
        },
        {
          name: 'v-model',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '绑定值，默认为空',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'year',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN': '日历当前显示年份',
            'en-US': ''
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: 'basic-usage'
        }
      ],
      events: [
        {
          name: 'month-change',
          desc: {
            'zh-CN': '月改变事件',
            'en-US': ''
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'calendar-event',
          mfDemo: 'calendar-event'
        },
        {
          name: 'new-schedule',
          desc: {
            'zh-CN': '新增日程按钮点击事件',
            'en-US': ''
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'calendar-schedule-slot',
          mfDemo: 'calendar-schedule-slot'
        },
        {
          name: 'next-week-click',
          desc: {
            'zh-CN': '下一周按钮点击事件',
            'en-US': ''
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'calendar-event',
          mfDemo: 'calendar-event'
        },
        {
          name: 'prev-week-click',
          desc: {
            'zh-CN': '上一周按钮点击事件',
            'en-US': ''
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'calendar-event',
          mfDemo: 'calendar-event'
        },
        {
          name: 'selected-date-change',
          desc: {
            'zh-CN': '选中日期改变事件',
            'en-US': ''
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'multi-select',
          mfDemo: 'multi-select'
        },
        {
          name: 'week-change',
          desc: {
            'zh-CN': '周改变事件',
            'en-US': ''
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'calendar-event',
          mfDemo: 'calendar-event'
        },
        {
          name: 'year-change',
          desc: {
            'zh-CN': '年改变事件',
            'en-US': ''
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'calendar-event',
          mfDemo: 'calendar-event'
        }
      ],
      methods: [],
      slots: [
        {
          name: 'header',
          desc: {
            'zh-CN': '头部插槽',
            'en-US': ''
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'calendar-schedule-slot',
          mfDemo: 'calendar-schedule-slot'
        },
        {
          name: 'timeline',
          desc: {
            'zh-CN': '时间线插槽，有timeline1-timeline7 7个插槽',
            'en-US': ''
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'calendar-schedule-slot',
          mfDemo: 'calendar-schedule-slot'
        },
        {
          name: 'tool',
          desc: {
            'zh-CN': '工具栏插槽',
            'en-US': ''
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'calendar-schedule-slot',
          mfDemo: 'calendar-schedule-slot'
        },
        {
          name: 'weekday',
          desc: {
            'zh-CN': '日程插槽，有weekday1-weekday7 7个插槽',
            'en-US': ''
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'calendar-schedule-slot',
          mfDemo: 'calendar-schedule-slot'
        }
      ]
    }
  ]
}
