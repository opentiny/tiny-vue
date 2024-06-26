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
      demoId: 'year',
      name: {
        'zh-CN': '年份选择',
        'en-US': 'Year and month selector'
      },
      desc: {
        'zh-CN':
          '<p>设置 `type` 属性为 `year`，进行年份单选；设置 `type` 属性为 `years`，进行年份多选；设置 `type` 属性为 `yearrange`，进行年份范围选择。<p>',
        'en-US': '<p>Set the `type` attribute to `year-month` to select a year-month selector.</p>'
      },
      codeFiles: ['year.vue']
    },
    {
      demoId: 'placeholder',
      name: {
        'zh-CN': '占位符',
        'en-US': 'Year Month Range Selector'
      },
      desc: {
        'zh-CN':
          '<p>单选可通过 `placeholder` 设置占位符。范围选择时，`start-placeholder` 和 `end-placeholder` 属性可分别指定开始日期和结束日期输入框的占位符。`range-separator` 属性指定开始日期和结束日期输入框之间的分隔符。<p>',
        'en-US':
          '<p>Single choice: You can use `placeholder` to set a placeholder. When a range is selected, the `start-placeholder` and `end-placeholder` attributes specify placeholders for the start and end date input boxes, respectively. The `range-separator` property specifies the separator between the start date and end date input boxes.<p>'
      },
      codeFiles: ['placeholder.vue']
    },
    {
      demoId: 'disabled',
      name: {
        'zh-CN': '禁用',
        'en-US': 'Disabled'
      },
      desc: {
        'zh-CN': '<p>配置 `disabled` 属性设置时间选择器禁用。<p>',
        'en-US': '<p>Configure the `disabled` property to disable the time selector.<p>'
      },
      codeFiles: ['disabled.vue']
    },
    {
      demoId: 'step',
      name: {
        'zh-CN': '步长',
        'en-US': 'Year Month Range Selector Limit Range'
      },
      desc: {
        'zh-CN': '<p>通过 `step` 设置时间选择的步长，默认值为 `{ hour: 1, minute: 1, second: 1 }`。<p>',
        'en-US':
          '<p>Use `step` to set the time selection step. The default value is `{hour: 1, minute: 1, second: 1}`.<p>'
      },
      codeFiles: ['step.vue']
    },
    {
      demoId: 'about-clear',
      name: {
        'zh-CN': '清除输入',
        'en-US': 'Clear input'
      },
      desc: {
        'zh-CN':
          '<p>选择日期后，鼠标悬停在输入框时，默认会显示清除图标，单击图标可以清除输入框内容。设置 `clearable` 属性为 `false` 后，则不显示清除图标，不可清除。<p>',
        'en-US':
          '<p>After you select a date, the clear icon is displayed by default when you hover the cursor over the text box. You can click the icon to clear the text box. After the `clearable` attribute is set to `false`, the clear icon is not displayed and cannot be cleared.<p>'
      },
      codeFiles: ['about-clear.vue']
    }
  ]
}
