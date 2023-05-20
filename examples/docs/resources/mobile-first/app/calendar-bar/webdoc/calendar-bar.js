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
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'disabled',
      name: {
        'zh-CN': '禁用',
        'en-US': 'button round'
      },
      desc: {
        'zh-CN':
          '<p>使用 <code>config.disabled  </code>配置一个方法，用于判断参数日期是否禁用。 使用 <code>config.disabledColorClass </code> 配置禁用日期的字体颜色类名。 使用 <code>config.disabledBackgroundColorClass </code> 配置禁用日期的背景颜色类名。</p>',
        'en-US': '<p>button round</p>'
      },
      codeFiles: ['disabled.vue']
    },
    {
      demoId: 'marked',
      name: {
        'zh-CN': '日期标记',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>使用<code> config.mark</code> 配置一个方法，用于判断参数日期是否存在标记。 此方法返回空字符串表示不存在标记，返回非空字符串表示存在标记，且标记内容就是该字符串。 使用<code> config.markBackgroundColorClass</code> 配置标记的颜色类名。 使用<code> config.showMarkMessage</code> 配置是否开启标记<code> title</code> 提示，默认值为<code> false</code>。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['marked.vue']
    },
    {
      demoId: 'render-current',
      name: {
        'zh-CN': '当前日期',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>用户传入的日期为<code>  当前日期</code> 。 使用 <code> config.currentColorClass</code>  配置<code>  当前日期</code>  的字体颜色类名； 使用<code>  config.currentBackgroundColorClass</code>  配置<code>  当前日期</code>  的背景颜色类名。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['render-current.vue']
    },
    {
      demoId: 'render-today',
      name: {
        'zh-CN': '今天',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>使用<code> config.renderItem </code>可以配置一个方法，对日期面板的某些项进行定制渲染。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['render-today.vue']
    },
    {
      demoId: 'week-first',
      name: {
        'zh-CN': '周起始',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>使用<code> config.weekFirst </code>配置每周的起始天。默认值为<code> 0</code>，表示周起始为<code> 周日</code>。也可以配置为<code> 1 ~ 6</code>，分别表示<code> 周一 ~ 周六</code>。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['week-first.vue']
    },
    {
      demoId: 'workday',
      name: {
        'zh-CN': '工作日',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>用户传入的日期为<code>  当前日期</code>，当前日期所在月份为<code>  当前月份</code>，当前月份周六周日为 周末，非周六周日为 工作日。 使用<code>  config.workday </code>配置一个方法，用于判断 工作日 是否作为真正的工作日； 使用<code>  config.holiday</code> 配置一个方法，用于判断 周末 是否作为真正的周末； 使用<code>  config.workdayColorClass 和 config.holidayColorClass</code> 配置工作日和周末的字体颜色类。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['marked.vue']
    }
  ],
  apis: []
}
