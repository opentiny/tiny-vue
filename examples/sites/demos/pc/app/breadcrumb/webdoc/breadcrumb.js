export default {
  column: '2',
  owner: '',
  show: true,
  cloud: true,
  demos: [
    {
      demoId: 'base',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN':
          '<code>Breadcrumb</code>：通过 <code>select</code> 监听面包屑选中事件。<br/>\n                  <code>BreadcrumbItem</code>：通过 <code>to</code> 设置选项路由跳转对象，<code>label</code> 设置选项名称，<code>select</code> 监听选项选中事件。',
        'en-US':
          '<code>Breadcrumb</code>: Listen for breadcrumb selection events through<code>select</code>; <br/>\n                  <code>BreadcrumbItem</code>: Route the jump object through the <code>to</code>setting option,<code></code>setting option name,<code>select</code>listening for option selection events.'
      },
      codeFiles: ['base.vue']
    },
    {
      demoId: 'size',
      name: {
        'zh-CN': '尺寸设置',
        'en-US': 'size'
      },
      desc: {
        'zh-CN': '通过 <code>size</code> 自定义尺寸，仅支持 <code>medium</code> 尺寸。',
        'en-US':
          'Set the <code>size</code> attribute and customize the size. Only the <code>medium</code> size is supported..'
      },
      codeFiles: ['size.vue']
    },
    {
      demoId: 'slot-default',
      name: {
        'zh-CN': '定义节点',
        'en-US': 'Custom Node'
      },
      desc: {
        'zh-CN':
          '<code>BreadcrumbItem</code>：通过默认插槽自定义节点内容；<code>replace</code> 设置不向浏览器历史添加新记录。',
        'en-US':
          '<code>BreadcrumbItem</code>: Customize node content through default slots< Code>replace</code>Set not to add new records to browser history.'
      },
      codeFiles: ['slot-default.vue']
    },
    {
      demoId: 'separator',
      name: {
        'zh-CN': '定义分隔符',
        'en-US': 'Custom separator'
      },
      desc: {
        'zh-CN': '<code>Breadcrumb</code>：通过 <code>separator</code> 或 <code>separator-icon</code> 自定义分隔符。',
        'en-US':
          '<code>Breadcrumb</code>: Customize the separator through<code>separator</code>or<code>separator icon</code>.'
      },
      codeFiles: ['separator.vue']
    },
    {
      demoId: 'options',
      name: {
        'zh-CN': '配置式',
        'en-US': 'Configuration'
      },
      desc: {
        'zh-CN':
          '通过 <code>options</code> 配置每个 <code>BreadcrumbItem</code>；<code>text-field</code> 指定显示键值，默认显示键值为 <code>label</code>。',
        'en-US':
          'Configure each<code>BreadcrumbItem</code>through<code>options</code>< Code>text field</code>specifies the display key value, and the default display key value is<code>label</code>.'
      },
      codeFiles: ['options.vue']
    }
  ],
  features: [
    {
      id: 'basic',
      name: '基本功能',
      support: {
        value: true
      },
      description: '通过 select 监听面包屑选中事件，通过 to 设置选项路由跳转对象，通过 label 设置选项名称。',
      cloud: {
        value: true
      },
      apis: ['select', 'to', 'label'],
      demos: ['base']
    },
    {
      id: 'size',
      name: '尺寸设置',
      support: {
        value: true
      },
      description: '通过 size 自定义尺寸，仅支持 medium 尺寸。',
      cloud: {
        value: true
      },
      apis: ['size'],
      demos: ['size']
    },
    {
      id: 'separator',
      name: '分隔符',
      support: {
        value: true
      },
      description: '通过 separator 或 separator-icon 自定义分隔符。',
      cloud: {
        value: true
      },
      apis: ['separator', 'separator-icon'],
      demos: ['separator']
    },
    {
      id: 'options',
      name: '配置式',
      support: {
        value: true
      },
      description: '通过 options 配置每个 BreadcrumbItem，通过 text-field 指定显示键值，默认显示键值为 label。',
      cloud: {
        value: true
      },
      apis: ['options', 'text-field'],
      demos: ['options']
    },
    {
      id: 'slot',
      name: '插槽功能',
      support: {
        value: true
      },
      description: '通过默认插槽自定义节点内容，支持 replace 设置不向浏览器历史添加新记录。',
      cloud: {
        value: true
      },
      apis: ['slot-default', 'replace'],
      demos: ['slot-default']
    }
  ]
}
