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
        'zh-CN': '<p>组件 <code> v-model </code>只接受字符串值，例如 <code>2022-12-18 </code></p>',
        'en-US':
          '<p>The <code>v-model </code> component accepts only string values, for example, <code>2022-12-18 </code></p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'disabled',
      name: {
        'zh-CN': '禁用',
        'en-US': 'disabled'
      },
      desc: {
        'zh-CN':
          '<p>使用 <code>config.disabled  </code>配置一个方法，用于判断参数日期是否禁用。<br> 使用 <code>config.disabledColorClass </code> 配置禁用日期的字体颜色类名。 <br>使用 <code>config.disabledBackgroundColorClass </code> 配置禁用日期的背景颜色类名。</p>',
        'en-US':
          '<p>使用 <code>config.disabled  </code>配置一个方法，用于判断参数日期是否禁用。<br> 使用 <code>config.disabledColorClass </code> 配置禁用日期的字体颜色类名。 <br>使用 <code>config.disabledBackgroundColorClass </code> 配置禁用日期的背景颜色类名。</p>'
      },
      codeFiles: ['disabled.vue']
    },
    {
      demoId: 'marked',
      name: {
        'zh-CN': '日期标记',
        'en-US': 'Date Marker'
      },
      desc: {
        'zh-CN': `<p>使用<code> config.mark</code> 配置一个方法，用于判断参数日期是否存在标记。<br>
          此方法返回空字符串表示不存在标记，返回非空字符串表示存在标记，且标记内容就是该字符串。 <br>
          使用<code> config.markBackgroundColorClass</code> 配置标记的颜色类名。 <br>
          使用<code> config.showMarkMessage</code> 配置是否开启标记<code> title</code> 提示，默认值为<code> false</code>。</p>`,
        'en-US': `<p>Use <code> config.mark</code> to configure a method to determine whether the parameter date has a mark.<br>
        This method returns an empty string, indicating that the tag does not exist. A non-empty string is returned, indicating that the tag exists and the tag content is the string.<br>
        Use <code> config.markBackgroundColorClass</code> to configure the color class name of the tag.<br>
        Use <code> config.showMarkMessage</code> to configure whether to enable the flag <code> title</code> prompt. The default value is <code> false</code>.</p>`
      },
      codeFiles: ['marked.vue']
    },
    {
      demoId: 'render-current',
      name: {
        'zh-CN': '当前日期',
        'en-US': 'Current Date'
      },
      desc: {
        'zh-CN': `<p>用户传入的日期为<code>  当前日期</code> 。<br>
           使用 <code> config.currentColorClass</code>  配置<code>  当前日期</code>  的字体颜色类名；<br>
           使用<code>  config.currentBackgroundColorClass</code>  配置<code>  当前日期</code>  的背景颜色类名。<p>`,
        'en-US': `<p><p>The date transferred by the user is <code>Current date</code>.<br>
        Use <code> config.currentColorClass</code> to configure the font color class name of <code>Current Date</code>.<br>
        Use <code> config.currentBackgroundColorClass</code> to configure the background color class name of <code>current date</code>.</p>`
      },
      codeFiles: ['render-current.vue']
    },
    {
      demoId: 'render-today',
      name: {
        'zh-CN': '今天',
        'en-US': 'Today'
      },
      desc: {
        'zh-CN': '<p>使用<code> config.renderItem </code>可以配置一个方法，对日期面板的某些项进行定制渲染。<p>',
        'en-US':
          '<p>Use <code> config.renderItem </code> to configure a method for custom rendering of certain items in the date panel.</p>'
      },
      codeFiles: ['render-today.vue']
    },
    {
      demoId: 'week-first',
      name: {
        'zh-CN': '周起始',
        'en-US': 'Week Start'
      },
      desc: {
        'zh-CN':
          '<p>使用<code> config.weekFirst </code>配置每周的起始天。默认值为<code> 0</code>，表示周起始为<code> 周日</code>。也可以配置为<code> 1 ~ 6</code>，分别表示<code> 周一 ~ 周六</code>。<p>',
        'en-US':
          '<p>Use <code> config.weekFirst </code> to configure the start day of a week. The default value is <code> 0</code>, indicating that the start of the week is <code>Sunday</code>. You can also set this parameter to <code>1 to <code>6</code>, indicating <code>Monday to Saturday</code></p>'
      },
      codeFiles: ['week-first.vue']
    },
    {
      demoId: 'workday',
      name: {
        'zh-CN': '工作日',
        'en-US': 'Workdays'
      },
      desc: {
        'zh-CN': `<p>用户传入的日期为<code>  当前日期</code>，当前日期所在月份为<code>  当前月份</code>，当前月份周六周日为 周末，非周六周日为 工作日。<br>
           使用<code>  config.workday </code>配置一个方法，用于判断 工作日 是否作为真正的工作日；<br>
           使用<code>  config.holiday</code> 配置一个方法，用于判断 周末 是否作为真正的周末； <br>
           使用<code>  config.workdayColorClass 和 config.holidayColorClass</code> 配置工作日和周末的字体颜色类。<p>`,
        'en-US': `<p>The date transferred by the user is <code>Current Date</code>, and the month to which the current date belongs is <code>Current Month</code>. Saturday and Sunday of the current month are weekends, and non-Saturday and Sunday are workdays.<br>
        Use <code> config.workday </code> to configure a method to determine whether a workday is a real workday.<br>
        Use <code> config.holiday</code> to configure a method to determine whether a weekend is a real weekend.<br>
        Use <code> config.workdayColorClass and config.holidayColorClass</code> to configure the font color classes for weekdays and weekends.</p>`
      },
      codeFiles: ['workday.vue']
    },
    {
      demoId: 'expand',
      name: {
        'zh-CN': '展开收起事件',
        'en-US': 'Expand Collapse Events'
      },
      desc: {
        'zh-CN': `<p>日历栏展开或收起时触发的事件；事件参数为 true 时代表展开状态，反之为收起状态。<p>`,
        'en-US':
          '<p>Event triggered when the calendar bar is expanded or collapsed; If the event parameter is set to true, the event is expanded. Otherwise, the event is collapsed.</p>'
      },
      codeFiles: ['expand.vue']
    },
    {
      demoId: 'cascader-position',
      name: {
        'zh-CN': '年月选择的位置',
        'en-US': 'Year and month selected location'
      },
      desc: {
        'zh-CN': `<p>使用 cascaderPosition 属性可以改变年月选择的位置；可选值为：<code>start | center | end</code> 默认值为<code>center</code><p>`,
        'en-US':
          '<p>You can use the cascaderPosition attribute to change the location of the year and month. The options are as follows: <code>start | center | end</code>The default value is <code>center</code></p>'
      },
      codeFiles: ['cascader-position.vue']
    }
  ],
  apis: [
    {
      'name': 'calendarBar',
      'type': 'component',
      'props': [
        {
          'name': 'cascaderPosition',
          'type': 'Object',
          'defaultValue': '{}',
          'desc': { 'zh-CN': '改变年月选择的位置', 'en-US': 'Change the location of the year and month selection' },
          'demoId': 'cascader-position'
        },
        {
          'name': 'config',
          'type': 'Object',
          'defaultValue': '{}',
          'desc': { 'zh-CN': '传入用户日期配置信息', 'en-US': 'Transfer the user date configuration information.' },
          'demoId': 'marked'
        },
        {
          'name': 'v-model',
          'type': 'String',
          'defaultValue': '',
          'desc': { 'zh-CN': '数据绑定', 'en-US': 'Data Binding' },
          'demoId': 'marked'
        }
      ],
      'methods': [
        {
          'name': 'expand',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '日历栏展开或收起时触发的事件',
            'en-US': 'Event triggered when the calendar bar expands or collapses'
          },
          'demoId': 'expand'
        }
      ]
    }
  ]
}
