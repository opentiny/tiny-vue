export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN': '<p>基本用法</p>',
        'en-US': '<p>Basic Usage</p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'lazyload',
      name: {
        'zh-CN': '异步加载',
        'en-US': 'Asynchronous loading'
      },
      desc: {
        'zh-CN':
            '<p>通过 <code>:node-config="{ lazy: true, load:() => {...} }"<code>load</code> 设置属性 <code>lazy: true<code>load</code> 和 <code>load</code> 数据加载方法，开启异步加载。</p>',
        'en-US':
            '<p><p>Set the <code>lazy: true<code>load</code> attribute and <code>load</code>data loading method through <code>:node-config="{lazy: true, load:() => {...}}"<code>load</code> to enable asynchronous loading.<p></p>'
      },
      codeFiles: ['lazyload.vue']
    },
    {
      demoId: 'check-strictly',
      name: {
        'zh-CN': '父子不互相关联',
        'en-US': 'Father and son are not related to each other'
      },
      desc: {
        'zh-CN':
            '<p>通过 <code>:node-config="{ checkStrictly: true }"</code> 设置属性 <code>checkStrictly: true</code>，开启父子层级互不关联，可选择非叶子节点，默认值为 <code>false</code> 显示到叶子节点。</p>',
        'en-US':
            '<p>You can set the <code>checkStrictly: true</code> attribute in <code>:node-config="{checkStrictly: true}"</code> to enable the disassociation between parent and child levels. You can select non-leaf nodes. The default value is <code>false</code>.</p>'
      },
      codeFiles: ['check-strictly.vue']
    },
    {
      demoId: 'disabled',
      name: {
        'zh-CN': '禁用选项',
        'en-US': 'Disable option'
      },
      desc: {
        'zh-CN': '<p>数据源里面带 <code>disabled: true</code> 渲染时自动禁用选项。</p>',
        'en-US':
            '<p>The <code>disabled: true</code> option is automatically disabled during rendering in the data source.</p>'
      },
      codeFiles: ['disabled.vue']
    },
    {
      demoId: 'emit-path',
      name: {
        'zh-CN': '显示值路径',
        'en-US': 'Display Value Path'
      },
      desc: {
        'zh-CN':
            '<p>通过设置 <code>emit-path</code> 属性值为 <code>false</code> 不显示值路径，默认值为 <code>true</code> 显示值路径。</p>',
        'en-US':
            '<p>The value path is not displayed by setting the <code>emit-path</code> attribute to <code>false</code>. The default value is <code>true</code>.</p>'
      },
      codeFiles: ['emit-path.vue']
    }
  ],
  apis: [
    {
      'name': 'CalendarView',
      'type': 'component',
      'props': [
        {
          'name': 'day-times',
          'type': 'Array',
          'defaultValue': '',
          'desc': {
            'zh-CN': '配置时间线模式下所展示的时间范围，默认为[8,18]，可配范围[0,23]。',
            'en-US': 'Time range displayed in timeline mode. The default value range is [8, 18]. The value range is [0, 23].'
          },
          'demoId': ''
        },
        {
          'name': 'disabled ',
          'type': 'Function',
          'defaultValue': '',
          'desc': {
            'zh-CN': '日期禁用',
            'en-US': 'Date Disabled'
          },
          'demoId': 'disabled'
        },
        {
          'name': 'events',
          'type': 'Array',
          'defaultValue': '',
          'desc': {
            'zh-CN': '日程事件',
            'en-US': 'Scheduled Events'
          },
          'demoId': ''
        },
        {
          'name': 'height',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '日历高度',
            'en-US': 'Calendar height'
          },
          'demoId': ''
        },
        {
          'name': 'mark-color',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '点标记的颜色',
            'en-US': 'Color of the dot marker'
          },
          'demoId': ''
        },
        {
          'name': 'mode',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '显示模式，可选值有 timeline-时间线模式、schedule-日程模式、month-月模式，默认为月模式。',
            'en-US': 'Display mode. The options are timeline-timeline, schedule-schedule, and month-month. The default value is month.'
          },
          'demoId': ''
        },
        {
          'name': 'modes',
          'type': 'Array',
          'defaultValue': '',
          'desc': {
            'zh-CN': '模式组，显示模式任意组合',
            'en-US': 'Pattern group, any combination of display patterns'
          },
          'demoId': ''
        },
        {
          'name': 'month',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '日历当前显示月份',
            'en-US': 'The calendar currently displays the month'
          },
          'demoId': ''
        },
        {
          'name': 'multi-select',
          'type': 'Boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN': '日期多选',
            'en-US': 'Multiple Dates'
          },
          'demoId': ''
        },
        {
          'name': 'set-day-bg-color',
          'type': 'Function',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置日期背景色',
            'en-US': 'Set Date Background Color'
          },
          'demoId': ''
        },
        {
          'name': 'show-mark',
          'type': 'Function',
          'defaultValue': '',
          'desc': {
            'zh-CN': '显示点标记',
            'en-US': 'Show Point Markers'
          },
          'demoId': ''
        },
        {
          'name': 'show-new-schedule',
          'type': 'Function',
          'defaultValue': '',
          'desc': {
            'zh-CN': '显示新增日程按钮',
            'en-US': 'Show the button for adding a schedule'
          },
          'demoId': ''
        },
        {
          'name': 'year',
          'type': 'Number',
          'defaultValue': '',
          'desc': {
            'zh-CN': '日历当前显示年份',
            'en-US': 'Calendar Current Display Year'
          },
          'demoId': ''
        },
      ],
      'events': [
        {
          'name': 'month-change',
          'type': 'Function()',
          'defaultValue': '',
          'desc': {
            'zh-CN': '月改变事件',
            'en-US': 'Month Change Event'
          },
          'demoId': ''
        },
        {
          'name': 'new-schedule',
          'type': 'Function()',
          'defaultValue': '',
          'desc': {
            'zh-CN': '新增日程按钮点击事件',
            'en-US': 'Event for adding a schedule button.'
          },
          'demoId': ''
        },
        {
          'name': 'next-week-click',
          'type': 'Function()',
          'defaultValue': '',
          'desc': {
            'zh-CN': '下一周按钮点击事件',
            'en-US': 'Next week button click event'
          },
          'demoId': ''
        },
        {
          'name': 'prev-week-click',
          'type': 'Function()',
          'defaultValue': '',
          'desc': {
            'zh-CN': '上一周按钮点击事件',
            'en-US': 'Button click event of the previous week'
          },
          'demoId': ''
        },
        {
          'name': 'selected-date-change',
          'type': 'Function()',
          'defaultValue': '',
          'desc': {
            'zh-CN': '选中日期改变事件',
            'en-US': 'Select Date Change Event'
          },
          'demoId': ''
        },
        {
          'name': 'week-change',
          'type': 'Function()',
          'defaultValue': '',
          'desc': {
            'zh-CN': '周改变事件',
            'en-US': 'Week Change Event'
          },
          'demoId': ''
        },
        {
          'name': 'year-change',
          'type': 'Function()',
          'defaultValue': '',
          'desc': {
            'zh-CN': '年改变事件',
            'en-US': 'Year Change Event'
          },
          'demoId': ''
        },
      ],
      'slot': [
        {
          'name': 'header',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '头部插槽', 'en-US': 'Head slot' },
          'demoId': ''
        },
        {
          'name': 'timeline',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '时间线插槽，有timeline1-timeline7 7个插槽', 'en-US': 'Timeline slots, with 7 slots timeline1-timeline7' },
          'demoId': ''
        },
        {
          'name': 'tool',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '工具栏插槽', 'en-US': 'Toolbar Slot' },
          'demoId': ''
        },
        {
          'name': 'weekday',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '日程插槽，有weekday1-weekday7 7个插槽', 'en-US': 'Schedule slots, with 7 slots weekday1-weekday7' },
          'demoId': ''
        }
      ]
    }
  ]
}
