export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic usage'
      },
      desc: {
        'zh-CN': '<p>支持只使用日期面板、日期区间面板。</p>',
        'en-US': 'Support using only date panel and date range panel.'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'disabled-date',
      name: {
        'zh-CN': '日期禁用',
        'en-US': 'Disabled Date'
      },
      desc: {
        'zh-CN': '<p>通过设置 <code>disabledDate</code> 属性，可以实现部分禁用，此时只能选择一部分日期。</p>',
        'en-US':
          'By setting the<code>disabledDate</code>property, partial disabling can be achieved, where only a subset of dates can be selected.'
      },
      codeFiles: ['disabled-date.vue']
    },
    {
      demoId: 'format',
      name: {
        'zh-CN': '格式化',
        'en-US': 'format'
      },
      desc: {
        'zh-CN': '<p>通过 <code>format</code> 属性设置面板选中的日期格式</p>',
        'en-US': 'Select the date format through the <code>format</code> attribute settings panel.'
      },
      codeFiles: ['format.vue']
    },
    {
      demoId: 'shortcuts',
      name: {
        'zh-CN': '快捷选项',
        'en-US': 'Select the shortcut options'
      },
      desc: {
        'zh-CN': '<p>通过指定 <code>shortcuts</code> 对象数组可以设置快捷选项。</p>',
        'en-US': '<p><p>You can set shortcut options by specifying the <code>shortcuts</code> array</ p></p>'
      },
      codeFiles: ['shortcuts.vue']
    },
    {
      demoId: 'readonly',
      name: {
        'zh-CN': '只读',
        'en-US': 'Readonly'
      },
      desc: {
        'zh-CN': '<p>通过指定 <code>readonly</code> 设置只读。</p>',
        'en-US': ''
      },
      codeFiles: ['readonly.vue']
    },
    {
      demoId: 'custom-weeks',
      name: {
        'zh-CN': '周次序号',
        'en-US': 'Weekly serial number'
      },
      desc: {
        'zh-CN':
          '\n          <p>通过设置 <code>show-week-number</code> 属性为 <code>true</code> 显示周次序号，通过<code>format-weeks</code>属性设置周次显示格式，<code>format-weeks</code>函数有两个参数：</p>\n          <ul>\n            <li>customWeeks：自定义周次的序号</li>\n            <li>weekFirstDays：获取每周次中的首个日期</li>\n          </ul>\n          <p>通过 <code> firstDayOfWeek </code> 属性来设置每周的第一天是星期几，默认值是7，也就是星期天。</p>\n        ',
        'en-US':
          '\n          <p>Display the original weekly sequence number through the <code> show-week-number </code> attribute, and pass in two parameters through the <code> format-weeks </code> attribute.</p>\n          <p>The parameters are set as follows: </p>\n          <ul><li>customWeeks: set the sequence number of the custom week</li><li>weekFirstDays: get the first date of each week</li></ul>\n          <p>Set the day of the week as the first day of the week using the <code> firstDayOfWeek </code> property. The default value is 7, which is Sunday.</p>\n        '
      },
      codeFiles: ['custom-weeks.vue']
    },
    {
      demoId: 'event',
      name: {
        'zh-CN': '事件',
        'en-US': 'Event'
      },
      desc: {
        'zh-CN': '<p>支持 <code>selectPanelChange</code> 事件。用于获取选中日期后执行的回调。</p>',
        'en-US': '<p>The main events is selectPanelChange.</p>'
      },
      codeFiles: ['event.vue']
    }
  ]
}
