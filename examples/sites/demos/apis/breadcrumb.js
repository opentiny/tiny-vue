export default {
  mode: ['pc'],
  apis: [
    {
      name: 'breadcrumb',
      type: 'component',
      props: [
        {
          name: 'options',
          typeAnchorName: 'IOptionsItem',
          type: 'IOptionsItem[]',
          defaultValue: '',
          desc: {
            'zh-CN': '单独使用 Breadcrumb，通过 option 配置生成面包屑',
            'en-US': 'Use Breadcrumb alone to generate bread crumbs through option configuration'
          },
          mode: ['pc'],
          pcDemo: 'options'
        },
        {
          name: 'separator',
          type: 'string',
          defaultValue: '>',
          desc: {
            'zh-CN': '分隔符',
            'en-US': 'Separator'
          },
          mode: ['pc'],
          pcDemo: 'separator'
        },
        {
          name: 'separator-icon',
          type: 'vueComponent',
          defaultValue: '',
          desc: {
            'zh-CN': '图标分隔符',
            'en-US': 'Icon separator'
          },
          mode: ['pc'],
          pcDemo: 'separator'
        },
        {
          name: 'size',
          type: 'string',
          defaultValue: "'medium'",
          desc: {
            'zh-CN': '设置面包屑尺寸大小',
            'en-US': 'Set breadcrumb size'
          },
          mode: ['pc'],
          pcDemo: 'size'
        },
        {
          name: 'text-field',
          type: 'string',
          defaultValue: 'label',
          desc: {
            'zh-CN': '指定面包屑的显示键值，结合 options 使用',
            'en-US': 'Specify the display key value for bread crumbs, used in conjunction with options'
          },
          mode: ['pc'],
          pcDemo: 'options'
        }
      ],
      events: [
        {
          name: 'select',
          typeAnchorName: 'ISelectValue',
          type: '(value: ISelectValue) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '点击 BreadcrumbItem 时触发',
            'en-US': 'This event is triggered when BreadcrumbItem is clicked.'
          },
          mode: ['pc'],
          pcDemo: 'options'
        }
      ],
      methods: [],
      slots: []
    },
    {
      name: 'breadcrumb-item',
      type: 'component',
      props: [
        {
          name: 'label',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '定义面包屑的显示文本',
            'en-US': 'Define the breadcrumb display text'
          },
          mode: ['pc'],
          pcDemo: 'base'
        },
        {
          name: 'replace',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '在使用 to 进行路由跳转时，启用 replace 将不会向 浏览器历史记录 history 里添加新记录',
            'en-US': 'When using to for routing jump, enabling replace will not add new records to the browser history'
          },
          mode: ['pc'],
          pcDemo: 'slot-default'
        },
        {
          name: 'size',
          type: 'string',
          defaultValue: "'medium'",
          desc: {
            'zh-CN': '设置面包屑尺寸大小',
            'en-US': 'Set breadcrumb size'
          },
          mode: ['pc'],
          pcDemo: 'size'
        },
        {
          name: 'to',
          typeAnchorName: 'IOptionsItemTo',
          type: 'string | IOptionsItemTo',
          defaultValue: '',
          desc: {
            'zh-CN': '路由跳转对象，同 vue-router 的 to',
            'en-US': 'Route redirection object, which is the same as to of vue-router'
          },
          mode: ['pc'],
          pcDemo: 'slot-default'
        }
      ],
      events: [
        {
          name: 'select',
          typeAnchorName: 'ISelectValue',
          type: '(value: ISelectValue) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '点击 BreadcrumbItem 时触发',
            'en-US': 'This event is triggered when BreadcrumbItem is clicked.'
          },
          mode: ['pc'],
          pcDemo: 'base'
        }
      ],
      methods: [],
      slots: [
        {
          name: 'default',
          defaultValue: '',
          desc: {
            'zh-CN': '默认插槽',
            'en-US': 'Default slot'
          },
          mode: ['pc'],
          pcDemo: 'slot-default'
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
      depTypes: ['IOptionsItemTo'],
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
      depTypes: ['IOptionsItem', 'IOptionsItemTo'],
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
