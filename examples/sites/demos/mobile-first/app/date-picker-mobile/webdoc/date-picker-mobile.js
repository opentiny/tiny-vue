export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'basic usage'
      },
      desc: {
        'zh-CN': '<p>设置 `type` 属性默认值为 `date`，以日期的形式进行选择。</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['basic-usage.vue']
    },

    {
      demoId: 'datetime',
      name: {
        'zh-CN': '选择日期时间',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>设置 `type` 属性为 `datetime`，以日期时间的形式进行选择。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['datetime.vue']
    },
    {
      demoId: 'date-range',
      name: {
        'zh-CN': '选择日期范围',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>设置 `type` 属性为 `daterange`，以日期范围的形式进行选择。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['date-range.vue']
    },
    {
      demoId: 'datetime-range',
      name: {
        'zh-CN': '选择日期时间范围',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>设置 `type` 属性为 `datetimerange`，以日期时间范围的形式进行选择。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['datetime-range.vue']
    }
  ],
  apis: []
}
