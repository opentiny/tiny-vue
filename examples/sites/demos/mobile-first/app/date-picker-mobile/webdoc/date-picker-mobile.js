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
    },
    {
      demoId: 'year-month',
      name: {
        'zh-CN': '年月选择器',
        'en-US': 'Year and month selector'
      },
      desc: {
        'zh-CN': '<p>设置 `type` 属性为 `year-month`，以年月选择器的形式进行选择。<p>',
        'en-US': '<p>Set the `type` attribute to `year-month` to select a year-month selector.</p>'
      },
      codeFiles: ['year-month.vue']
    },
    {
      demoId: 'year-month-range',
      name: {
        'zh-CN': '年月范围选择器',
        'en-US': 'Year Month Range Selector'
      },
      desc: {
        'zh-CN': '<p>设置 `type` 属性为 `year-month-range`，以年月范围选择器的形式进行选择。<p>',
        'en-US': '<p>Set the `type` property to `year-month-range` to select a year-month range selector.</p>'
      },
      codeFiles: ['year-month-range.vue']
    },
    {
      demoId: 'disabled',
      name: {
        'zh-CN': '日期选择限制',
        'en-US': 'Date Selection Restrictions'
      },
      desc: {
        'zh-CN':
          '<p>配置 picker-options 属性，在对象中的 disabledDate 方法中根据日期进行判断来禁用指定的日期段，通过这种方式来实现最大最小值，picker-options 属性的格式为：{ disabledDate: (date) => {...} }。<p>',
        'en-US':
          '<p>Configure the picker-options attribute to disable the specified date segment based on the date in the disabledDate method of the object. In this way, the maximum and minimum values are implemented. The format of the picker-options attribute is {disabledDate: (date) => {...}}.</p>'
      },
      codeFiles: ['disabled.vue']
    },
    {
      demoId: 'year-month-disabled',
      name: {
        'zh-CN': '年月范围选择器限制范围',
        'en-US': 'Year Month Range Selector Limit Range'
      },
      desc: {
        'zh-CN':
          '<p>配置 picker-options 属性，在对象中的 disabledDate 方法中根据日期进行判断来禁用指定的日期段，通过这种方式来实现最大最小值，picker-options 属性的格式为：{ disabledDate: (date) => {...} }。<p>',
        'en-US':
          '<p>Configure the picker-options attribute to disable the specified date segment based on the date in the disabledDate method of the object. In this way, the maximum and minimum values are implemented. The format of the picker-options attribute is {disabledDate: (date) => {...}}.</p>'
      },
      codeFiles: ['year-month-disabled.vue']
    }
  ],
  apis: []
}
