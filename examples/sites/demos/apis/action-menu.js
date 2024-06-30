export default {
  mode: ['pc'],
  apis: [
    {
      name: 'action-menu',
      type: 'component',
      props: [
        {
          name: 'max-show-num',
          type: 'number',
          defaultValue: '2',
          desc: {
            'zh-CN': '最多显示菜单按钮的个数，其他菜单在下拉弹框显示',
            'en-US':
              'The maximum number of displayed menu buttons, and other menus are displayed in the drop-down pop-up box'
          },
          mode: ['pc'],
          pcDemo: 'max-show-num'
        },
        {
          name: 'mode',
          type: '"default" | "card"',
          defaultValue: '"default"',
          desc: {
            'zh-CN': '菜单按钮模式',
            'en-US': 'Card mode'
          },
          mode: ['pc'],
          pcDemo: 'card-mode'
        },
        {
          name: 'more-text',
          type: 'string',
          defaultValue: "'更多'",
          desc: {
            'zh-CN': '下拉按钮文本',
            'en-US': 'Dropdown button text'
          },
          mode: ['pc'],
          pcDemo: 'more-text'
        },
        {
          name: 'options',
          typeAnchorName: 'IItemData',
          type: 'IItemData[]',
          defaultValue: '[]',
          desc: {
            'zh-CN': '菜单项列表的数据',
            'en-US': 'Data for menu item list'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'popper-class',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '下拉弹框的类名，用于自定义样式',
            'en-US': 'The class name of the dropdown pop-up box, used for customizing styles'
          },
          mode: ['pc'],
          pcDemo: 'popper-class'
        },
        {
          name: 'show-icon',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否显示下拉触发源图标',
            'en-US': 'Is the dropdown trigger source icon displayed'
          },
          mode: ['pc'],
          pcDemo: 'icon'
        },
        {
          name: 'spacing',
          type: 'string | number',
          defaultValue: "'5px'",
          desc: {
            'zh-CN': '菜单按钮之间的间距',
            'en-US': 'Spacing between menu buttons'
          },
          mode: ['pc'],
          pcDemo: 'spacing'
        },
        {
          name: 'suffix-icon',
          type: 'Component',
          defaultValue: '',
          desc: {
            'zh-CN': '下拉触发源图标',
            'en-US': 'Dropdown trigger source icon'
          },
          mode: ['pc'],
          pcDemo: 'icon'
        },
        {
          name: 'text-field',
          type: 'string',
          defaultValue: "'label'",
          desc: {
            'zh-CN': '菜单按钮文本的键值',
            'en-US': 'Key values for menu button text'
          },
          mode: ['pc'],
          pcDemo: 'text-field'
        }
      ],
      events: [
        {
          name: 'item-click',
          typeAnchorName: 'IItemClickParams',
          type: '(data:IItemClickParams) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '监听菜单项的点击事件',
            'en-US': 'Listen for click events on menu items'
          },
          mode: ['pc'],
          pcDemo: 'events'
        },
        {
          name: 'more-click',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '监听下拉按钮的点击事件。trigger 为 click 时生效',
            'en-US': 'Listen for the click event of the drop-down button. Effective when trigger is click'
          },
          mode: ['pc'],
          pcDemo: 'events'
        },
        {
          name: 'visible-change',
          type: '(status: boolean) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '监听下拉弹框的显示或隐藏状态变化',
            'en-US': 'Monitor the display or hidden state changes of the dropdown pop-up box'
          },
          mode: ['pc'],
          pcDemo: 'events'
        }
      ],
      methods: [],
      slots: [
        {
          name: 'item',
          type: '插槽',
          defaultValue: '',
          desc: {
            'zh-CN': '菜单选项插槽',
            'en-US': 'Menu option slot'
          },
          mode: ['pc'],
          pcDemo: 'slot-item'
        }
      ]
    }
  ],
  types: [
    {
      name: 'IItemData',
      type: 'interface',
      code: `
interface IItemData {
  label?: string           // 菜单项文本
  disabled?: boolean       // 是否禁用
  divided?: boolean        // 是否显示分割线
  children?: IItemData[]   // 菜单项子集
  icon?: Component      // 菜单项图标
}
`
    },
    {
      name: 'IItemClickParams',
      type: 'interface',
      code: `
interface IItemClickParams {
  itemData: IItemData     // 菜单项配置
  vm: {                   // 菜单项实例
    selected: boolean
    textField: string
    tipPosition: string
    $el: HTMLElement
  }       
}
`
    }
  ]
}
