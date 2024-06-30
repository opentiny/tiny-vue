export default {
  column: '1',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN': '<p>默认以月的形式展示当月的每一天。</p>\n',
        'en-US': '<p>By default, each day of the current month is displayed in the form of month. </p>\n'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'calendar-mode',
      name: {
        'zh-CN': '显示模式',
        'en-US': 'Display mode'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>mode</code> 属性指定以年的形式显示，将展示当年的每个月份。可选值有 <code>month</code> / <code>timeline</code> / <code>schedule</code>。</p>\n',
        'en-US':
          '<p>The <code>mode</code> attribute specifies that each month of the current year is displayed. The options are <code>month</code> / <code>timeline</code> / <code>schedule</code>. </p>\n'
      },
      codeFiles: ['calendar-mode.vue']
    },
    {
      demoId: 'calendar-disabled-day',
      name: {
        'zh-CN': '日期禁用',
        'en-US': 'Date Disabled'
      },
      desc: {
        'zh-CN': '<p>通过 <code>disabled</code> 回调函数来禁用某些日期。</p>\n',
        'en-US': '<p>Disable certain days via the <code>disabled</code> callback function.</p>\n'
      },
      codeFiles: ['calendar-disabled-day.vue']
    },
    {
      demoId: 'calendar-schedule-slot',
      name: {
        'zh-CN': '日程模式插槽',
        'en-US': 'Schedule Mode Slot'
      },
      desc: {
        'zh-CN': '<p>日程模式下内容区提供 weekday1-weekday7 这 7 个插槽，方便用户自定义日程展示。</p>\n',
        'en-US':
          '<p>In schedule mode, the content area provides seven slots from weekday1 to weekday7 for users to customize schedule display.</p>\n'
      },
      codeFiles: ['calendar-schedule-slot.vue']
    },
    {
      demoId: 'calendar-timeline-slot',
      name: {
        'zh-CN': '时间线插槽',
        'en-US': 'Timeline Slots'
      },
      desc: {
        'zh-CN': '<p>时间下模式下提供 timeline1-timeline7 这 7 个插槽，方便用户自定义日程展示。</p>\n',
        'en-US':
          '<p>In time mode, seven slots from timeline1 to timeline7 are provided for users to customize the schedule display.</p>\n'
      },
      codeFiles: ['calendar-timeline-slot.vue']
    },
    {
      demoId: 'calendar-timeline-range',
      name: {
        'zh-CN': '时间线范围配置',
        'en-US': 'Timeline Range Configuration'
      },
      desc: {
        'zh-CN': '<p>通过dayTimes属性配置时间线模式下所展示的时间范围，默认为[8,18]，可配范围[0,23]。</p>\n',
        'en-US':
          '<p>Use the dayTimes attribute to set the time range displayed in timeline mode. The default value is [8,18], and the value range is [0,23].</p>\n'
      },
      codeFiles: ['calendar-timeline-range.vue']
    },
    {
      demoId: 'multi-select',
      name: {
        'zh-CN': '日期多选',
        'en-US': 'Multiple date selection'
      },
      desc: {
        'zh-CN': '<p>设置 mult-select = true 属性后，可开启日期多选。</p>\n',
        'en-US': '<p>Set mult-select = true to enable multiple date selection.</p>\n'
      },
      codeFiles: ['multi-select.vue']
    },
    {
      demoId: 'calendar-day-mark',
      name: {
        'zh-CN': '日期标记',
        'en-US': 'Date Marker'
      },
      desc: {
        'zh-CN':
          '<p>通过showMark回调函数来标记某些日期，markColor属性设置标记的颜色，此功能只在时间线模式和日程模式生效。markColor可选颜色同 theme</p>\n',
        'en-US':
          '<p>Use the showMark callback function to mark some dates. The markColor attribute is used to set the mark color. This function takes effect only in timeline mode and agenda mode. markColor Optional Color Same as theme</p>\n'
      },
      codeFiles: ['calendar-day-mark.vue']
    },
    {
      demoId: 'custom-header',
      name: {
        'zh-CN': '自定义头部显示',
        'en-US': 'Display Selected Date'
      },
      desc: {
        'zh-CN': '<p>通过作用域插槽 header 自定义需要显示的头部区域。</p>\n',
        'en-US': '<p>Customize the header area to be displayed through the scope slot header.</p>\n'
      },
      codeFiles: ['custom-header.vue']
    },
    {
      demoId: 'custom-calendar-toolbar',
      name: {
        'zh-CN': '自定义工具栏',
        'en-US': 'Custom Toolbar'
      },
      desc: {
        'zh-CN': '<p>通过作用域插槽 tool 自定义需要的工具栏。</p>\n',
        'en-US': '<p>Customize the required toolbar through the scope slot tool.</p>\n'
      },
      codeFiles: ['custom-calendar-toolbar.vue']
    },
    {
      demoId: 'custom-day-bg-color',
      name: {
        'zh-CN': '自定义单元格背景色',
        'en-US': 'Add Schedule Event'
      },
      desc: {
        'zh-CN':
          '<p>自定义日期单元格背景色。</p>\n<p>目前只支持预置的颜色，可选颜色blue、green、red、yellow、purple、cyan、grey</p>\n',
        'en-US':
          '<p>Customize the background color of the date cell. </p>\n<p>Currently, only preset colors are supported. The options are blue, green, red, yellow, purple, cyan, and grey.</p>'
      },
      codeFiles: ['custom-day-bg-color.vue']
    },
    {
      demoId: 'set-working-day',
      name: {
        'zh-CN': '设置工作日或节假日',
        'en-US': 'Setting Workdays or Holidays'
      },
      desc: {
        'zh-CN': '<p>可以结合日期多选，自定义背景色，工具栏插槽等功能实现设置工作日或节假日的功能。</p>\n',
        'en-US':
          '<p>You can set workdays or holidays by using the functions such as selecting multiple dates, customizing background colors, and toolbar slots.</p>\n'
      },
      codeFiles: ['set-working-day.vue']
    },
    {
      demoId: 'calendar-event',
      name: {
        'zh-CN': '事件',
        'en-US': 'Event'
      },
      desc: {
        'zh-CN':
          '<p>日历抛出的事件有以下这些：</p>\n' +
          '<p>new-schedule：新增日程按钮点击事件</p>\n' +
          '<p>selected-date-change：选中日期改变事件</p>\n' +
          '<p>prev-week-click：上一周按钮点击事件</p>\n' +
          '<p>next-week-click：下一周按钮点击事件</p>\n' +
          '<p>week-change：周改变事件</p>\n' +
          '<p>year-change：年改变事件</p>\n' +
          '<p>month-change：月改变事件</p>\n' +
          '<p>mode-change：模式切换事件</p>',
        'en-US':
          '<p>Calendar throws the following events:</p>\n' +
          '<p>new-schedule: Add a schedule button click event</p>\n' +
          '<p>selected-date-change: selected date change event</p>\n' +
          '<p>prev-week-click: button click event of the last week</p>\n' +
          '<p>next-week-click: button click event in the next week</p>\n' +
          '<p>week-change: week change event</p>\n' +
          '<p>year-change: year change event</p>\n' +
          '<p>month-change: month change event</p>\n' +
          '<p>mode-change: mode switching event</p>'
      },
      codeFiles: ['calendar-event.vue']
    }
  ]
}
