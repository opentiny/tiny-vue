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
        'zh-CN': '<p>通过 <code>v-model / value</code> 属性设置默认值。</p>\n',
        'en-US': '<p>Sets the default value through the <code>v-model / value</code> property. </p>\n'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'custom-service',
      name: {
        'zh-CN': '自定义服务',
        'en-US': 'Custom Service'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>fetch-jcr</code> 可以自定义服务用于获取片区 JCR 数据，<code>fetch-rigion</code> 用于获取地区部 Region 的数据，<code>fetch-rep</code> 用于获取代表处 Rep 的数据，<code>fetch-office</code> 用于获取办事处 Office 的数据。同时 当数据字段为非默认的 <code>name_cn</code> <code>org_id</code> 时，可以通过 <code>props</code> 属性设置数据的映射字段。</p>\n',
        'en-US':
          '<p>You can use <code>fetch-jcr</code> to customize services to obtain regional JCR data, and <code>fetch-rigion</code> to obtain regional region data. <code>fetch-rep</code> is used to obtain the data of rep offices, and <code>fetch-office</code> is used to obtain the data of offices. In addition, when the data field is not the default <code>name_cn</code> <code>org_id</code>, you can set the mapping field of the data through the <code>props</code> attribute. </p>\n'
      },
      codeFiles: ['custom-service.vue']
    },
    {
      demoId: 'size',
      name: {
        'zh-CN': '设置组件大小',
        'en-US': 'Set Component Size'
      },
      desc: {
        'zh-CN': '<p>可选值为：<code>medium</code>，<code>small</code>，<code>mini</code></p>\n',
        'en-US': '<p>The options are as follows: <code>medium</code>, <code>small</code>, <code>mini</code></p>\n'
      },
      codeFiles: ['size.vue']
    },
    {
      demoId: 'disabled',
      name: {
        'zh-CN': '禁用',
        'en-US': 'Set Disabled'
      },
      desc: {
        'zh-CN': '<p>通过 <code>disabled</code> 设置组件禁用默认值为 false 。</p>\n',
        'en-US': '<p>Use <code>disabled</code> to disable the component. The default value is false. </p>\n'
      },
      codeFiles: ['disabled.vue']
    },
    {
      demoId: 'area-events',
      name: {
        'zh-CN': '事件',
        'en-US': 'Event'
      },
      desc: {
        'zh-CN':
          '<p>Region 下拉框的值改变时触发 <code>change-region</code> 事件，Rep 下拉框的值改变时触发 <code>change-rep</code> 事件，Office 下拉框的值改变时触发 <code>change-office</code> 事件。</p>\n',
        'en-US':
          'The <code>change-region</code> event is triggered when the value of the Region drop-down list box changes. The <code>change-rep</code> event is triggered when the value of the Rep drop-down list box changes. The <code>change-office</code> event is triggered when the value of the Office drop-down list box changes. </p>\n'
      },
      codeFiles: ['area-events.vue']
    }
  ]
}
