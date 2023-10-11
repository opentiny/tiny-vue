export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': '<p>默认以月的形式展示当月的每一天。</p>\n',
        'en-US': '<p>By default, each day of the current month is displayed in the form of month. </p>\n'
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'calendar-mode',
      'name': { 'zh-CN': '显示模式', 'en-US': 'Display mode' },
      'desc': {
        'zh-CN': '<p>通过 <code>mode</code> 属性指定以年的形式显示，将展示当年的每个月份。可选值有 year、month。</p>\n',
        'en-US':
          '<p>The <code>mode</code> attribute specifies that each month of the current year is displayed. The options are year and month. </p>\n'
      },
      'codeFiles': ['calendar-mode.vue']
    },
    {
      'demoId': 'show-selected-date',
      'name': { 'zh-CN': '显示选中日期', 'en-US': 'Display Selected Date' },
      'desc': {
        'zh-CN':
          '<p>以月的形式展示时，指定 show-selected 属性后，单击日期单元格，将会在日历框上方展示当前选中的日期。</p>\n',
        'en-US':
          '<p>When the date is displayed in the format of month, the selected date is displayed above the calendar box after the show-selected attribute is specified and the date cell is clicked. </p>\n'
      },
      'codeFiles': ['show-selected-date.vue']
    },
    {
      'demoId': 'custom-day-cell',
      'name': { 'zh-CN': '自定义日期单元格', 'en-US': 'Custom Date Cell' },
      'desc': {
        'zh-CN': '<p>通过作用域插槽 day 自定义日期单元格。</p>\n',
        'en-US': '<p>Customize the date cell through the scope slot day. </p>\n'
      },
      'codeFiles': ['custom-day-cell.vue']
    },
    {
      'demoId': 'custom-calendar-toolbar',
      'name': { 'zh-CN': '自定义工具栏', 'en-US': 'Custom Toolbar' },
      'desc': {
        'zh-CN': '<p>通过作用域插槽 tool 自定义需要的工具栏。</p>\n',
        'en-US': '<p>Customize the required toolbar through the scope slot tool. </p>\n'
      },
      'codeFiles': ['custom-calendar-toolbar.vue']
    },
    {
      'demoId': 'dynamic-add-schedule',
      'name': { 'zh-CN': '添加日程事件', 'en-US': 'Add Schedule Event' },
      'desc': {
        'zh-CN':
          '<p>通过 events 属性可以指定事件列表，它是一个对象数组，对象中包含如下字段：</p>\n<div class="tip custom-block"><p class="custom-block-title">events 说明</p>\n<p>time：指定需要展示事件的日期\ntitle：指定事件标题\ncontent：指定事件的具体内容 type：指定当鼠标悬停在事件标题上时，弹出的展示事件具体内容的提示框的主题，包括 warning、error、info、success</p>\n</div>\n',
        'en-US':
          '<p>You can use the events attribute to specify the event list. It is an object array that contains the following fields: </p>\n<div class="tip custom-block"><p class="custom-block-title">events Description</p>\n<p>time: specifies the date of the event to be displayed.\ntitle: Specifies the event title. \ncontent: specifies the event content. type: specifies the theme of the dialog box that displays the event content when you hover the cursor over the event title. The options are warning, error, info, and success</p>\n</div>\n'
      },
      'codeFiles': ['dynamic-add-schedule.vue']
    }
  ],
  apis: [
    {
      'name': 'calendar',
      'type': 'component',
      'properties': [
        {
          'name': 'events',
          'type': 'Array',
          'defaultValue': '',
          'desc': { 'zh-CN': '事件列表', 'en-US': 'Event List' },
          'demoId': 'dynamic-add-schedule'
        },
        {
          'name': 'mode',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '显示模式，month / year 可选，默认 month',
            'en-US': 'Display mode. The value can be month or year. The default value is month.'
          },
          'demoId': 'calendar-mode'
        },
        {
          'name': 'month',
          'type': 'number',
          'defaultValue': '',
          'desc': {
            'zh-CN': '指定月份，默认当月',
            'en-US': 'Specified month. The default value is the current month.'
          },
          'demoId': 'custom-day-cell'
        },
        {
          'name': 'show-selected',
          'type': 'boolean',
          'defaultValue': '',
          'desc': { 'zh-CN': '显示选中的日期', 'en-US': 'Display the selected date.' },
          'demoId': 'show-selected-date'
        },
        {
          'name': 'year',
          'type': 'number',
          'defaultValue': '',
          'desc': { 'zh-CN': '指定年份，默认今年', 'en-US': 'Specified year. The default year is this year.' },
          'demoId': 'custom-day-cell'
        }
      ],
      'events': [],
      'slots': [
        {
          'name': 'day',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '日期单元格插槽', 'en-US': 'Date Cell Slot' },
          'demoId': 'custom-day-cell'
        },
        {
          'name': 'tool',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '日历工具栏插槽', 'en-US': 'Calendar Toolbar Slot' },
          'demoId': 'custom-calendar-toolbar'
        }
      ]
    }
  ]
}
