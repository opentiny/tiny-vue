export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': '',
        'en-US': ''
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'disabled',
      'name': { 'zh-CN': '禁用', 'en-US': 'Disabled' },
      'desc': {
        'zh-CN': '<p>通过 <code>disabled</code> 字段设置当前下拉选项是否为禁用状态。</p>',
        'en-US': '<p>Set whether the current drop-down option is disabled through the<code>disabled</code>field.</p>'
      },
      'codeFiles': ['disabled.vue']
    },
    {
      'demoId': 'text-field',
      'name': { 'zh-CN': '映射字段', 'en-US': 'Display Text' },
      'desc': {
        'zh-CN': '<p>通过 <code>text-field</code> 属性设置菜单项文本的键值，默认为 label。</p>',
        'en-US':
          '<p>Set the key value of the menu item text through the<code>text-field</code>attribute, which defaults to label.</p>'
      },
      'codeFiles': ['text-field.vue']
    },
    {
      'demoId': 'more-text',
      'name': { 'zh-CN': '下拉按钮文本', 'en-US': 'Dropdown button text' },
      'desc': {
        'zh-CN': '<p>通过 <code>more-text</code> 属性设置下拉按钮文本,默认为 <code>更多</code>。</p>',
        'en-US':
          '<p>Set the dropdown button text through the <code>more-text</code> attribute, default to<code>More</code></p>'
      },
      'codeFiles': ['more-text.vue']
    },
    {
      'demoId': 'spacing',
      'name': { 'zh-CN': '间距', 'en-US': 'Spacing' },
      'desc': {
        'zh-CN': '<p>通过 <code>spacing</code> 属性设置菜单按钮之间的间距,默认为 <code>5px</code>。</p>',
        'en-US':
          '<p>Set the spacing between menu buttons through the <code>spacing</code> attribute, which defaults to <code>5px</code>.</p>'
      },
      'codeFiles': ['spacing.vue']
    },
    {
      'demoId': 'popper-class',
      'name': { 'zh-CN': '弹框样式', 'en-US': 'Bullet Box Style' },
      'desc': {
        'zh-CN': '<p>通过 <code>popper-class</code> 属性设置下拉面板的类名，自定义样式。</p>',
        'en-US':
          '<p>Set the class name of the drop-down panel and customize the style through the<code>popper class</code>attribute.</p>'
      },
      'codeFiles': ['popper-class.vue']
    },
    {
      'demoId': 'max-show-num',
      'name': { 'zh-CN': '个数限制', 'en-US': 'Number limit' },
      'desc': {
        'zh-CN': '<p>通过 <code>max-show-num</code> 属性设置显示最多显示菜单按钮的个数，默认为 2。</p>',
        'en-US':
          '<p>By setting the<code>max show num</code>attribute, the maximum number of displayed menu buttons is set to 2 by default.</p>'
      },
      'codeFiles': ['max-show-num.vue']
    },
    {
      'demoId': 'events',
      'name': { 'zh-CN': '事件', 'en-US': 'Menu Item Click Event' },
      'desc': {
        'zh-CN':
          '<div class="tip custom-block">' +
          '<p class="custom-block-title">事件说明</p>\n' +
          '<p>item-click：监听菜单项的点击事件。</p>\n' +
          '<p>more-click：监听下拉按钮的点击事件。trigger 为 click 时生效。</p>\n' +
          '<p>visible-change：监听下拉弹框的显示或隐藏状态变化。</p>\n' +
          '</div>\n',

        'en-US':
          '<div class="tip custom-block">' +
          '<p class="custom-block-title">Event description</p>\n' +
          '<p>item-click：Listen for click events on menu items.</p>\n' +
          '<p>more-click：Listen for the click event of the drop-down button. Effective when trigger is click.</p>\n' +
          '<p>visible-change：Monitor the display or hidden status changes of the dropdown pop-up.</p>\n' +
          '</div>\n'
      },
      'codeFiles': ['events.vue']
    },
    {
      'demoId': 'slot-item',
      'name': { 'zh-CN': '菜单项插槽', 'en-US': 'Menu Slot' },
      'desc': {
        'zh-CN': '<p>通过 <code>item</code> 插槽自定义下拉选项的 HTML 模板。</p>',
        'en-US': '<p>Customize the HTML template for dropdown options through the <code>item</code> slot.</p>'
      },
      'codeFiles': ['slot-item.vue']
    }
  ],
  apis: [
    {
      'name': 'action-menu',
      'type': 'component',
      'properties': [
        {
          'name': 'max-show-num',
          'type': 'number',
          'defaultValue': '2',
          'desc': {
            'zh-CN': '最多显示菜单按钮的个数，其他菜单在下拉弹框显示',
            'en-US':
              'The maximum number of displayed menu buttons, and other menus are displayed in the drop-down pop-up box'
          },
          'demoId': 'max-show-num'
        },
        {
          'name': 'more-text',
          'type': 'string',
          'defaultValue': '更多',
          'desc': {
            'zh-CN': '下拉按钮文本',
            'en-US': 'Dropdown button text'
          },
          'demoId': 'more-text'
        },
        {
          'name': 'options',
          'type': 'IItemData[]',
          'typeAnchorName': 'IItemData',
          'defaultValue': '[]',
          'desc': {
            'zh-CN': '菜单项列表的数据',
            'en-US': 'Data for menu item list'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'options.label',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '菜单项文本',
            'en-US': 'Menu Item Text'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'options.children',
          'type': 'IItemData[]',
          'typeAnchorName': 'IItemData',
          'defaultValue': '',
          'desc': {
            'zh-CN': '菜单项的子集',
            'en-US': 'Subset of menu items'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'options.divided',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否显示分割线',
            'en-US': 'Whether to display split lines'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'options.disabled',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否禁用',
            'en-US': 'Is it disabled'
          },
          'demoId': 'disabled'
        },
        {
          'name': 'popper-class',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '下拉弹框的类名，用于自定义样式',
            'en-US': 'The class name of the dropdown pop-up box, used for customizing styles'
          },
          'demoId': 'popper-class'
        },
        {
          'name': 'spacing',
          'type': '[string,number]',
          'defaultValue': '5px',
          'desc': {
            'zh-CN': '菜单按钮之间的间距',
            'en-US': 'Spacing between menu buttons'
          },
          'demoId': 'spacing'
        },
        {
          'name': 'text-field',
          'type': 'string',
          'defaultValue': 'label',
          'desc': {
            'zh-CN': '菜单按钮文本的键值',
            'en-US': 'Key values for menu button text'
          },
          'demoId': 'text-field'
        }
      ],
      'events': [
        {
          'name': 'item-click',
          'type': '(data:IItemClickParams) => void',
          'typeAnchorName': 'IItemClickParams',
          'defaultValue': '',
          'desc': {
            'zh-CN': '监听菜单项的点击事件',
            'en-US': 'Listen for click events on menu items'
          },
          'demoId': 'events'
        },
        {
          'name': 'more-click',
          'type': '() => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '监听下拉按钮的点击事件。trigger 为 click 时生效',
            'en-US': 'Listen for the click event of the drop-down button. Effective when trigger is click'
          },
          'demoId': 'events'
        },
        {
          'name': 'visible-change',
          'type': '(status: boolean) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '监听下拉弹框的显示或隐藏状态变化',
            'en-US': 'Monitor the display or hidden state changes of the dropdown pop-up box'
          },
          'demoId': 'events'
        }
      ],
      'slots': [
        {
          'name': 'item',
          'type': '插槽',
          'defaultValue': '',
          'desc': {
            'zh-CN': '菜单选项插槽',
            'en-US': 'Menu option slot'
          },
          'demoId': 'slot-item'
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
  label: string           // 菜单项文本
  disabled: boolean       // 是否禁用
  divided: boolean        // 是否显示分割线
  children: IItemData[] // 菜单项子集
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
    "selected": boolean
    "textField: string
    "tipPosition: string
    "$el": HTMLElement
  }       
}
`
    }
  ]
}
