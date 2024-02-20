export default {
  mode: ['mobile-first'],
  apis: [
    {
      name: 'CalendarView',
      type: 'component',
      props: [
        {
          name: 'children-field',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '子集字段，默认值为 children ',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'custom-class',
          type: 'String / Object / Array',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义 class 样式',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'data',
          type: 'Array',
          defaultValue: '',
          desc: {
            'zh-CN': '列表数据',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'day-times',
          type: 'Array',
          defaultValue: '',
          desc: {
            'zh-CN': '配置时间线模式下所展示的时间范围，默认为[8,18]，可配范围[0,23]。',
            'en-US':
              'Time range displayed in timeline mode. The default value range is [8, 18]. The value range is [0, 23].'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          mode: []
        },
        {
          name: 'ellipsis',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '是否超出一行隐藏并显示省略号，默认值为 false ',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'emit-path',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '通过设置 `emit-path` 属性值为 `false` 不显示值路径，默认值为 `true` 显示值路径',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'events',
          type: 'Array',
          defaultValue: '',
          desc: {
            'zh-CN': '日程事件',
            'en-US': 'Scheduled Events'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'height',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '日历高度',
            'en-US': 'Calendar height'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'lock-scroll',
          type: 'Object',
          defaultValue: '',
          desc: {
            'zh-CN': '弹出面板是否锁定浏览器滚动条，默认值为 true',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'mark-color',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '点标记的颜色',
            'en-US': 'Color of the dot marker'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'mask',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '是否显示遮罩层，默认值为 true',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'mode',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '显示模式，可选值有 timeline-时间线模式、schedule-日程模式、month-月模式，默认为月模式。',
            'en-US':
              'Display mode. The options are timeline-timeline, schedule-schedule, and month-month. The default value is month.'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'modes',
          type: 'Array',
          defaultValue: '',
          desc: {
            'zh-CN': '模式组，显示模式任意组合',
            'en-US': 'Pattern group, any combination of display patterns'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'month',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '日历当前显示月份',
            'en-US': 'The calendar currently displays the month'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'multi-select',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '日期多选',
            'en-US': 'Multiple Dates'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'node-config',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN':
              "节点配置，默认值为 { lazy: false, load: null, isLeaf: 'leaf', afterLoad: null, checkStrictly: false } ",
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'search-config',
          type: 'Object',
          defaultValue: '',
          desc: {
            'zh-CN': '搜索配置，默认值为 { options: [], searchMethod: null, openSearchSlot: false }',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'set-day-bg-color',
          type: 'Function',
          defaultValue: '',
          desc: {
            'zh-CN': '设置日期背景色',
            'en-US': 'Set Date Background Color'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'show-header',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '是否显示头部，默认值为 true',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'show-mark',
          type: 'Function',
          defaultValue: '',
          desc: {
            'zh-CN': '显示点标记',
            'en-US': 'Show Point Markers'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'show-new-schedule',
          type: 'Function',
          defaultValue: '',
          desc: {
            'zh-CN': '显示新增日程按钮',
            'en-US': 'Show the button for adding a schedule'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'text-field',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': 'text 文本字段，默认值为 label',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'text-field2',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '第二个 text 文本字段，一般用于附属文本',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'text-field3',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '第三个 text 文本字段，一般用于描述文本',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'text-split',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '文本信息分隔符，默认值为 ”; “ ',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'title',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '面板标题',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'v-model',
          type: 'Number / String / Array',
          defaultValue: '',
          desc: {
            'zh-CN': '绑定值',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'value-field',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': 'value 唯一键字段，默认值为 id ',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'visible',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '是否弹出面板',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'year',
          type: 'Number',
          defaultValue: '',
          desc: {
            'zh-CN': '日历当前显示年份',
            'en-US': 'Calendar Current Display Year'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        }
      ],
      events: [
        {
          name: 'click',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '点击选项时触发',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'close',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '关闭面板时触发',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'confirm',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '确认时触发',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'month-change',
          type: 'Function()',
          defaultValue: '',
          desc: {
            'zh-CN': '月改变事件',
            'en-US': 'Month Change Event'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'new-schedule',
          type: 'Function()',
          defaultValue: '',
          desc: {
            'zh-CN': '新增日程按钮点击事件',
            'en-US': 'Event for adding a schedule button.'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'next-week-click',
          type: 'Function()',
          defaultValue: '',
          desc: {
            'zh-CN': '下一周按钮点击事件',
            'en-US': 'Next week button click event'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'node-expand',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '展开子节点时触发',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'prev-week-click',
          type: 'Function()',
          defaultValue: '',
          desc: {
            'zh-CN': '上一周按钮点击事件',
            'en-US': 'Button click event of the previous week'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'search-click',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '搜索列表选中项时触发',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'selected-date-change',
          type: 'Function()',
          defaultValue: '',
          desc: {
            'zh-CN': '选中日期改变事件',
            'en-US': 'Select Date Change Event'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'update:text',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '绑定值改变时触发',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'update:visible',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '面板显隐时触发',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'week-change',
          type: 'Function()',
          defaultValue: '',
          desc: {
            'zh-CN': '周改变事件',
            'en-US': 'Week Change Event'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'year-change',
          type: 'Function()',
          defaultValue: '',
          desc: {
            'zh-CN': '年改变事件',
            'en-US': 'Year Change Event'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        }
      ],
      methods: [
        {
          name: 'clean',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '清空除所有选中项，requiredSelectedList 必选项不会被清空',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'close',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '关闭面板',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        }
      ],
      slots: [
        {
          name: 'default',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '选项插槽',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'header',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '头部插槽',
            'en-US': 'Head slot'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'search-item',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '搜索选项插槽，设置 :search-config="{ openSearchSlot: true, ... }" 时有效',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'timeline',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '时间线插槽，有timeline1-timeline7 7个插槽',
            'en-US': 'Timeline slots, with 7 slots timeline1-timeline7'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'tool',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '工具栏插槽',
            'en-US': 'Toolbar Slot'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'weekday',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '日程插槽，有weekday1-weekday7 7个插槽',
            'en-US': 'Schedule slots, with 7 slots weekday1-weekday7'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        }
      ]
    }
  ]
}
