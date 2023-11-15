export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'base',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': `<code>Breadcrumb</code>：通过 <code>select</code> 监听面包屑选中事件；<br/>
                  <code>BreadcrumbItem</code>：通过 <code>to</code> 设置选项路由跳转对象，<code></code> 设置选项名称，<code>select</code> 监听选项选中事件。`,
        'en-US': `<code>Breadcrumb</code>: Listen for breadcrumb selection events through<code>select</code>; <br/>
                  <code>BreadcrumbItem</code>: Route the jump object through the <code>to</code>setting option,<code></code>setting option name,<code>select</code>listening for option selection events.`
      },
      'codeFiles': ['base.vue']
    },
    {
      'demoId': 'slot-default',
      'name': { 'zh-CN': '定义节点', 'en-US': 'Custom Node' },
      'desc': {
        'zh-CN':
          '<code>BreadcrumbItem</code>：通过默认插槽自定义节点内容；<code>replace</code> 设置不向浏览器历史添加新记录。',
        'en-US':
          '<code>BreadcrumbItem</code>: Customize node content through default slots< Code>replace</code>Set not to add new records to browser history.'
      },
      'codeFiles': ['slot-default.vue']
    },
    {
      'demoId': 'separator',
      'name': { 'zh-CN': '定义分隔符', 'en-US': 'Custom separator' },
      'desc': {
        'zh-CN': '<code>Breadcrumb</code>：通过 <code>separator</code> 或 <code>separator-icon</code> 自定义分隔符。',
        'en-US':
          '<code>Breadcrumb</code>: Customize the separator through<code>separator</code>or<code>separator icon</code>.'
      },
      'codeFiles': ['separator.vue']
    },
    {
      'demoId': 'options',
      'name': { 'zh-CN': '配置式', 'en-US': 'Configuration' },
      'desc': {
        'zh-CN':
          '通过 <code>options</code> 配置每个 <code>BreadcrumbItem</code>；<code>text-field</code> 指定显示键值，默认显示键值为 <code>label</code>。',
        'en-US':
          'Configure each<code>BreadcrumbItem</code>through<code>options</code>< Code>text field</code>specifies the display key value, and the default display key value is<code>label</code>.'
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
          'type': 'IOptionsItem[]',
          'typeAnchorName': 'IOptionsItem',
          'defaultValue': '',
          'desc': {
            'zh-CN': '单独使用 Breadcrumb，通过 option 配置生成面包屑',
            'en-US': 'Use Breadcrumb alone to generate bread crumbs through option configuration'
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
          'type': 'Component',
          'defaultValue': '',
          'desc': { 'zh-CN': '图标分隔符', 'en-US': 'Icon separator' },
          'demoId': 'separator'
        },
        {
          'name': 'text-field',
          'type': 'string',
          'defaultValue': 'label',
          'desc': {
            'zh-CN': '指定面包屑的显示键值，结合 options 使用',
            'en-US': 'Specify the display key value for bread crumbs, used in conjunction with options'
          },
          'demoId': 'options'
        }
      ],
      'events': [
        {
          'name': 'select',
          'type': '(value: ISelectValue) => void',
          'typeAnchorName': 'ISelectValue',
          'defaultValue': '',
          'desc': {
            'zh-CN': '点击 BreadcrumbItem 时触发',
            'en-US': 'This event is triggered when BreadcrumbItem is clicked.'
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
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': '定义面包屑的显示文本', 'en-US': 'Define the breadcrumb display text' },
          'demoId': 'base'
        },
        {
          'name': 'replace',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '在使用 to 进行路由跳转时，启用 replace 将不会向 浏览器历史记录 history 里添加新记录',
            'en-US': 'When using to for routing jump, enabling replace will not add new records to the browser history'
          },
          'demoId': 'slot-default'
        },
        {
          'name': 'to',
          'type': 'string | IOptionsItemTo',
          'typeAnchorName': 'IOptionsItemTo',
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
          'type': '(value: ISelectValue) => void',
          'typeAnchorName': 'ISelectValue',
          'defaultValue': '',
          'desc': {
            'zh-CN': '点击 BreadcrumbItem 时触发',
            'en-US': 'This event is triggered when BreadcrumbItem is clicked.'
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
  ],
  types: [
    {
      name: 'IOptionsItemTo',
      type: 'interface',
      code: `
interface IOptionsItemTo {
  path: string
}`
    },
    {
      name: 'IOptionsItem',
      type: 'interface',
      code: `
interface IOptionsItem {
  label?: string
  to?: IOptionsItemTo
  replace?: boolean
  [customProp: string]: string
}`
    },
    {
      name: 'ISelectValue',
      type: 'interface',
      code: `
interface ISelectValue {
  event: Event
  link: HTMLElement
  option: IOptionsItem
  replace: boolean
  to?: IOptionsItemTo
}`
    }
  ]
}
