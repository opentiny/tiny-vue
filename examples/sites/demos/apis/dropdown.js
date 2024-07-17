export default {
  mode: ['pc', 'mobile-first'],
  apis: [
    {
      name: 'dropdown',
      type: 'component',
      props: [
        {
          name: 'border',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '是否展示边框。默认为 false。在 split-button 属性为 false 时生效',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'disabled',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否禁用',
            'en-US': 'Is it disabled'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'disabled',
          mfDemo: ''
        },
        {
          name: 'hide-on-click',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '点击菜单项后是否收起菜单。默认点击后收起',
            'en-US': 'Whether to collapse the menu after clicking on the menu item. Collapse after clicking by default'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'hide-on-click',
          mfDemo: ''
        },
        {
          name: 'hide-timeout',
          type: 'number',
          defaultValue: '150',
          desc: {
            'zh-CN': '延时多久收起下拉菜单，单位毫秒。注意：仅在 trigger 为 hover 时有效',
            'en-US':
              'How long is the delay in retracting the pull-down menu, in milliseconds. Note: Only valid when trigger is hover'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'trigger',
          mfDemo: ''
        },
        {
          name: 'inherit-width',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '下拉弹框的最小宽度是否继承触发源的宽度，默认不继承',
            'en-US':
              'Whether the minimum width of the dropdown pop-up inherit the width of the trigger source.It is not inherited by default'
          },
          mode: ['pc'],
          pcDemo: 'inherit-width'
        },
        {
          name: 'menu-options',
          typeAnchorName: 'IMenuOption',
          type: 'IMenuOption',
          defaultValue:
            '<pre>\n{\n  options:[],\n  textField:"label",\n  popperClass:"",\n  placement:"bottom-end"\n}\n</pre>',
          desc: {
            'zh-CN': '配置式且只使用 tiny-dropdown 组件时使用',
            'en-US': 'Used when configuring and only using the tiny dropdown component'
          },
          mode: ['pc'],
          pcDemo: 'options'
        },
        {
          name: 'round',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '是否展示圆角。默认为 false。在 border 属性为 true 时生效',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'show-icon',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否显示下拉触发源图标',
            'en-US': 'Is the dropdown trigger source icon displayed'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'show-icon',
          mfDemo: ''
        },
        {
          name: 'show-self-icon',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '更多图标下拉菜单。默认值：false',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'show-timeout',
          type: 'number',
          defaultValue: '250',
          desc: {
            'zh-CN': '延时多久展开下拉菜单，单位毫秒。注意：仅在 trigger 为 hover 时有效',
            'en-US':
              'How long is the delay to expand the drop-down menu, in milliseconds. Note: Only valid when trigger is hover'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'trigger',
          mfDemo: ''
        },
        {
          name: 'single-button',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '下拉触发元素呈现为按钮组。',
            'en-US': 'The drop-down trigger element is rendered as a button group.'
          },
          mode: ['mobile-first'],
          mfDemo: 'button-dropdown'
        },
        {
          name: 'size',
          type: '"medium" | "small" | "mini"',
          defaultValue: '',
          desc: {
            'zh-CN': '菜单尺寸。注意：只在 split-button为 true 的情况下生效',
            'en-US': 'Menu size. Note: Only takes effect when split-button is true'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'size',
          mfDemo: ''
        },
        {
          name: 'split-button',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '下拉触发元素呈现为按钮',
            'en-US': 'Dropdown trigger elements are presented as button groups'
          },
          mode: ['pc'],
          pcDemo: 'split-button'
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
          pcDemo: 'show-icon'
        },
        {
          name: 'tabindex',
          type: 'number',
          defaultValue: '0',
          desc: {
            'zh-CN': '初始化触发元素的原生属性 tabindex',
            'en-US': 'Initialize the native attribute tabindex of the triggering element'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: '',
          mfDemo: ''
        },
        {
          name: 'title',
          type: 'string',
          defaultValue: "'下拉菜单'",
          desc: {
            'zh-CN': '自定义触发源的文本',
            'en-US': 'Text for custom trigger source'
          },
          mode: ['pc'],
          pcDemo: 'options'
        },
        {
          name: 'trigger',
          type: "'hover' | 'click'",
          defaultValue: "'hover'",
          desc: {
            'zh-CN': '触发下拉的方式',
            'en-US': 'Trigger the dropdown method'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'trigger',
          mfDemo: ''
        },
        {
          name: 'type',
          typeAnchorName: 'IButtonType',
          type: 'IButtonType',
          defaultValue: '',
          desc: {
            'zh-CN': '按钮类型。注意：只在 split-button 为 true 的情况下有效',
            'en-US': 'Button type. Note: Only valid if split button is true'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'split-button',
          mfDemo: ''
        },
        {
          name: 'visible-arrow',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '下拉弹框是否显示箭头，默认不显示',
            'en-US': 'Indicates whether to display arrows. The default value is not displayed'
          },
          mode: ['pc'],
          pcDemo: 'visible-arrow'
        }
      ],
      events: [
        {
          name: 'button-click',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '监听左侧按钮点击事件，仅 split-button 为 true 时生效',
            'en-US': 'Listen for the left button click event, only effective when split-button is true'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'events',
          mfDemo: ''
        },
        {
          name: 'item-click',
          typeAnchorName: 'IItemClickParam',
          type: '(data:IItemClickParam) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '监听点击菜单项事件',
            'en-US': 'Listen for menu item click events'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'events',
          mfDemo: ''
        },
        {
          name: 'visible-change',
          type: '(status:boolean) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '监听下拉框的显示或隐藏状态',
            'en-US': 'Monitor the display or hidden status of the dropdown box'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'events',
          mfDemo: ''
        }
      ],
      methods: [],
      slots: [
        {
          name: 'default',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义触发源文本区域。 注意： 必须是一个元素或者或者组件',
            'en-US': 'Customize the trigger source text area. Note: must be an element or component'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'dropdown',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义下拉列表区域，通常使用 tiny-dropdown-menu 组件',
            'en-US': 'Customize the dropdown list area, usually using the tiny dropdown menu component'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        }
      ]
    },
    {
      name: 'dropdown-menu',
      type: 'component',
      props: [
        {
          name: 'custom-class',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '设置弹出下拉自定义样式。',
            'en-US': 'Set the custom style of the pop-up drop-down list.'
          },
          mode: ['mobile-first']
        },
        {
          name: 'max-height',
          type: 'Number | String',
          defaultValue: '400',
          desc: {
            'zh-CN': '设置下拉最大高度。',
            'en-US': 'Sets the maximum pull-down height. '
          },
          mode: ['mobile-first'],
          mfDemo: 'max-height'
        },
        {
          name: 'multi-stage',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '设置二级下拉菜单。',
            'en-US': 'Sets the level-2 drop-down list. '
          },
          mode: ['mobile-first'],
          mfDemo: 'multi-stage'
        },
        {
          name: 'options',
          typeAnchorName: 'IItemData',
          type: 'IItemData []',
          defaultValue: '[]',
          desc: {
            'zh-CN': '通过配置式设置菜单项的属性',
            'en-US': 'Setting menu item properties through configuration'
          },
          mode: ['pc'],
          pcDemo: 'options'
        },
        {
          name: 'placement',
          typeAnchorName: 'IPlacementType',
          type: 'IPlacementType',
          defaultValue: "'bottom-end'",
          desc: {
            'zh-CN': '菜单弹出位置',
            'en-US': 'Menu pop-up location '
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
          pcDemo: 'basic-usage'
        },
        {
          name: 'text-field',
          type: 'string',
          defaultValue: "'label'",
          desc: {
            'zh-CN': '菜单项文本的字段,结合 options 属性使用',
            'en-US': 'The field of menu item text, used in conjunction with the options attribute'
          },
          mode: ['pc'],
          pcDemo: 'options'
        }
      ],
      events: [],
      methods: [],
      slots: [
        {
          name: 'default',
          defaultValue: '',
          desc: {
            'zh-CN': '下拉弹框区域，通常使用 tiny-dropdown-item 组件',
            'en-US': 'Dropdown the pop-up area, usually using the tiny-dropdown item component'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        }
      ]
    },
    {
      name: 'dropdown-item',
      type: 'component',
      props: [
        {
          name: 'disabled',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否禁用',
            'en-US': 'Is it disabled'
          },
          mode: ['pc'],
          pcDemo: 'disabled'
        },
        {
          name: 'divided',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否显示分割线',
            'en-US': 'Show split lines'
          },
          mode: ['pc'],
          pcDemo: 'events'
        },
        {
          name: 'icon',
          type: 'Component',
          defaultValue: '',
          desc: {
            'zh-CN': '内嵌图标',
            'en-US': 'Embedded icon'
          },
          mode: ['pc'],
          pcDemo: 'events'
        },
        {
          name: 'item-data',
          typeAnchorName: 'IItemData',
          type: 'IItemData',
          defaultValue: '',
          desc: {
            'zh-CN': '菜单项的配置信息',
            'en-US': 'Configuration information for menu items'
          },
          mode: ['pc'],
          pcDemo: 'events'
        },
        {
          name: 'label',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '菜单项的文本',
            'en-US': 'Text for menu items'
          },
          mode: ['pc'],
          pcDemo: 'events'
        },
        {
          name: 'level',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '设置二级下拉菜单标志',
            'en-US': 'Sets the level-2 drop-down menu flag.'
          },
          mode: ['mobile-first']
        }
      ],
      events: [],
      methods: [],
      slots: [
        {
          name: 'default',
          defaultValue: '',
          desc: {
            'zh-CN': '菜单项文本区域',
            'en-US': 'Menu item text area'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        }
      ]
    }
  ],
  types: [
    {
      name: 'IMenuOption',
      type: 'interface',
      depTypes: ['IItemData'],
      code: `
interface IMenuOption {
  options: IItemData[]
  textField?: string
  popperClass?: string
  placement?: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end'
}        
`
    },
    {
      name: 'IItemClickParam',
      type: 'interface',
      depTypes: ['IItemData'],
      code: `        
interface IItemClickParam {
  itemData: IItemData
  // dropdownItem 组件的实例
  vm: {
    selected: boolean
    textField: string
    tipPosition: string
    $el: HTMLElement
  }
}
`
    },
    {
      name: 'IItemData',
      type: 'interface',
      code: `        
interface IItemData {
  label?: string
  disabled?: boolean
  divided?: boolean
}
`
    },
    {
      name: 'IButtonType',
      type: 'type',
      code: `        
type IButtonType =  'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text'
`
    },
    {
      name: 'IPlacementType',
      type: 'type',
      code: `        
type IPlacementType =  'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end'
`
    }
  ]
}
