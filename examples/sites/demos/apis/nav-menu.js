export default {
  mode: ['pc'],
  apis: [
    {
      name: 'nav-menu',
      type: 'component',
      props: [
        {
          name: 'before-skip',
          typeAnchorName: 'IMenuItem',
          type: '(item: IMenuItem) => boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '点击菜单跳转前的钩子函数，返回 false 将无法跳转',
            'en-US':
              'Click the hook function before menu redirection. If false is returned, menu redirection cannot be performed'
          },
          mode: ['pc'],
          pcDemo: 'before-skip'
        },
        {
          name: 'data',
          typeAnchorName: 'IDataItem',
          type: 'IDataItem[]',
          defaultValue: '',
          desc: {
            'zh-CN': '设置导航菜单的数据',
            'en-US': 'Set the navigation menu data'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'fetch-menu-data',
          typeAnchorName: 'IMenuItem',
          type: '() => IDataItem[]',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义菜单数据加载服务，返回一个Promise对象',
            'en-US': 'Customize the menu data loading service. A Promise object is returned'
          },
          mode: ['pc'],
          pcDemo: 'custom-service'
        },
        {
          name: 'fields',
          typeAnchorName: 'IFields',
          type: 'IFields',
          defaultValue: '{ textField: "title", urlField: "url", key: "id" }',
          desc: {
            'zh-CN': '自定义菜单数据的映射',
            'en-US': 'User-defined menu data mapping'
          },
          mode: ['pc'],
          pcDemo: 'custom-service'
        },
        {
          name: 'overflow',
          typeAnchorName: 'IOverflow',
          type: 'IOverflow',
          defaultValue: 'auto',
          desc: {
            'zh-CN': '设置一级菜单无法在当前菜单容器里显示完全时的展示方式',
            'en-US':
              'Set the display method when the first level menu cannot be fully displayed in the current menu container'
          },
          mode: ['pc'],
          pcDemo: 'overflow'
        },
        {
          name: 'prevent',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '若使用组件的默认服务获取菜单数据，并且要阻止默认的跳转行为，需要 before-skip 和此属性一起使用',
            'en-US':
              'If you use the default service of the component to obtain menu data and want to prevent default jump behavior, you need to use before-skip in conjunction with this attribute'
          },
          mode: ['pc'],
          pcDemo: 'before-skip-prevent'
        }
      ],
      events: [],
      methods: [],
      slots: [
        {
          name: 'logo',
          defaultValue: '',
          desc: {
            'zh-CN': '菜单栏 Logo 插槽',
            'en-US': 'Menu Bar Logo Slot'
          },
          mode: ['pc'],
          pcDemo: 'slot-logo'
        },
        {
          name: 'toolbar',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义右上角部分 toolbar 插槽',
            'en-US': 'Customize the toolbar slot in the upper right corner'
          },
          mode: ['pc'],
          pcDemo: 'slot-toolbar'
        }
      ]
    }
  ],
  types: [
    {
      name: 'IMenuItem',
      type: 'interface',
      code: `
interface IMenuItem {
  id: string
  isFullUrl: boolean
  pid: string
  route: string
  target: string
  title: string
  url: string
}`
    },
    {
      name: 'IDataItem',
      type: 'interface',
      code: `
interface IDataItem {
  title: string
  url: string
  children?: IDataItem[]
}`
    },
    {
      name: 'IFields',
      type: 'interface',
      code: `
interface IFields {
  textField: string
  urlField: string
  key?: string
}`
    },
    {
      name: 'IOverflow',
      type: 'type',
      code: `
type IOverflow = 'auto' | 'retract' | 'fixed' | 'hidden'
`
    }
  ]
}
