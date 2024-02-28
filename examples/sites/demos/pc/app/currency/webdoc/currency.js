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
        'zh-CN': '详细用法参考如下示例',
        'en-US': 'For details, see the following example.'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'disable-currency',
      name: {
        'zh-CN': '禁用',
        'en-US': 'Disabled'
      },
      desc: {
        'zh-CN': '<p>通过 <code>disabled</code> 属性设置组件是否禁用，默认值为 false。</p>\n',
        'en-US':
          '<p>The <code>disabled</code> attribute is used to set whether to disable the component. The default value is false. </p>\n'
      },
      codeFiles: ['disable-currency.vue']
    },
    {
      demoId: 'custom-service',
      name: {
        'zh-CN': '自定义服务',
        'en-US': 'Custom Service'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>fetch-currency</code> 属性可以指定一个方法，在方法中可实现请求自定义的服务。\n通过 <code>clearable</code> 属性设置是否可以清空，默认值为 true。</p>\n',
        'en-US':
          '<p>You can use the <code>fetch-currency</code> attribute to specify a method in which the service customized by the request can be implemented. \n The <code>clearable</code> attribute is used to set whether data can be cleared. The default value is true. </p>\n'
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
        'zh-CN': '<p>可设置为：<code>medium</code>，<code>small</code>，<code>mini</code></p>\n',
        'en-US': '<p> can be set to <code>medium</code>, <code>small</code>, <code>mini</code></p>\n'
      },
      codeFiles: ['size.vue']
    },
    {
      demoId: 'filter',
      name: {
        'zh-CN': '过滤器模式',
        'en-US': 'Filter'
      },
      desc: {
        'zh-CN':
          '<p>通过 filter 属性切换至过滤器模式。 过滤器模式下可传入 label 显示标题，tip 显示提示信息，clearable 是否显示清除按钮。</p>',
        'en-US':
          '<p>Use the filter attribute to switch to filter mode. In filter mode, you can pass the label to display the title, tip to display the prompt information, and clearable to display the clear button.</p>\n'
      },
      codeFiles: ['filter.vue']
    }
  ]
}
