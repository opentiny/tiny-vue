export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'base',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['base.vue']
    },
    {
      'demoId': 'slot-default',
      'name': { 'zh-CN': '自定义节点', 'en-US': 'Custom Node' },
      'desc': {
        'zh-CN':
          '<p>设置子组件 BreadcrumbItem 的 默认插槽，自定义节点内容。<code>to</code> 设置路由跳转的对象，同时设置 <code>replace</code> 后将不会向 history 添加新记录。</p>\n',
        'en-US':
          '<p>Sets the default slot of the subcomponent BreadcrumbItem and customizes the node content. <code>to</code> sets the object of route redirection. After <code>replace</code> is set, no new record is added to history. </p>\n'
      },
      'codeFiles': ['slot-default.vue']
    },
    {
      'demoId': 'separator',
      'name': { 'zh-CN': '自定义分隔符', 'en-US': 'Custom separator' },
      'desc': {
        'zh-CN': '<p>设置 <code>separator</code> 或 <code>separator-icon</code> 属性，自定义分隔符。</p>\n',
        'en-US':
          '<p>Set the <code>separator</code> or <code>separator-icon</code> attribute to customize the separator. </p>\n'
      },
      'codeFiles': ['separator.vue']
    },
    {
      'demoId': 'options',
      'name': { 'zh-CN': 'options 配置', 'en-US': 'options configuration' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>options</code> 总体配置每个 <code>BreadcrumbItem</code>。  </p> 设置<code>text-field</code> 指定显示字段，默认显示字段为 <code>label</code>。\n',
        'en-US':
          '<p>Totally configure each <code>BreadcrumbItem</code> via <code>options</code>. </p>Set <code>text-field</code> to specify the field to be displayed. The default field to be displayed is <code>label</code>.\n'
      },
      'codeFiles': ['options.vue']
    }
  ],
  apis: [
    {
      'name': 'breadcrumb',
      'type': 'component',
      'props': [
        {
          'name': 'options',
          'type': 'Array',
          'defaultValue': '[]',
          'desc': {
            'zh-CN': '配置 options ,可以单独使用 tiny-breadcrumb 组件',
            'en-US': 'Configure options. The tiny-breadcrumb component can be used independently.'
          },
          'demoId': 'options'
        },
        {
          'name': 'separator',
          'type': 'string',
          'defaultValue': '>',
          'desc': { 'zh-CN': '分隔符', 'en-US': 'Separator' },
          'demoId': 'separator'
        },
        {
          'name': 'separator-icon',
          'type': 'object',
          'defaultValue': '--',
          'desc': { 'zh-CN': '图标分隔符 class', 'en-US': 'Icon separator class' },
          'demoId': 'separator'
        },
        {
          'name': 'text-field',
          'type': 'string',
          'defaultValue': 'label',
          'desc': {
            'zh-CN': '指定面包屑的显示字段，结合 options 使用，组件默认 label ',
            'en-US':
              'Specify the breadcrumb display field. This field is used together with options. The component defaults to label.'
          },
          'demoId': 'options'
        }
      ],
      'events': [
        {
          'name': 'select',
          'type': 'Function',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '点击 breadcrumb-item 时触发',
            'en-US': 'This event is triggered when breadcrumb-item is clicked.'
          },
          'demoId': 'options'
        }
      ]
    },
    {
      'name': 'breadcrumbItem',
      'type': 'component',
      'props': [
        {
          'name': 'label',
          'type': 'String',
          'defaultValue': '',
          'desc': { 'zh-CN': '定义面包屑的显示值', 'en-US': 'Define the breadcrumb display value.' },
          'demoId': 'base'
        },
        {
          'name': 'replace',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '在使用 to 进行路由跳转时，启用 replace 将不会向 history 添加新记录',
            'en-US': 'When to is used for route redirection, if replace is enabled, no new record is added to history.'
          },
          'demoId': 'slot-default'
        },
        {
          'name': 'to',
          'type': 'String , Object',
          'defaultValue': '',
          'desc': {
            'zh-CN': '路由跳转对象，同 vue-router 的 to',
            'en-US': 'Route redirection object, which is the same as to of vue-router'
          },
          'demoId': 'slot-default'
        }
      ],
      'events': [
        {
          'name': 'select',
          'type': 'Function()',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '点击 breadcrumb-item 时触发',
            'en-US': 'This event is triggered when breadcrumb-item is clicked.'
          },
          'demoId': 'base'
        }
      ],
      'slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '默认插槽', 'en-US': 'Default slot' },
          'demoId': 'slot-default'
        }
      ]
    }
  ]
}
