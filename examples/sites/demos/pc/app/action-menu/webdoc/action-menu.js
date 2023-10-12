export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': { 'zh-CN': 'ActionMenu 组件的基本用法。', 'en-US': 'Basic usage of the ActionMenu component.' },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'disabled',
      'name': { 'zh-CN': '禁用', 'en-US': 'Disabled' },
      'desc': {
        'zh-CN': '通过 <code>disabled</code> 字段配置当前下拉选项是否为禁用状态',
        'en-US': 'Use the <code>disabled</code> field to configure whether the current drop-down list box is disabled.'
      },
      'codeFiles': ['disabled.vue']
    },
    {
      'demoId': 'text-field',
      'name': { 'zh-CN': '显示文本', 'en-US': 'Display Text' },
      'desc': {
        'zh-CN': '通过属性 <code>text-field</code> 配置要显示文本的键值，默认值为 <code>label</code>。',
        'en-US':
          'Use the <code>text-field</code> attribute to configure the key value of the text to be displayed. The default value is <code>label</code>.'
      },
      'codeFiles': ['text-field.vue']
    },
    {
      'demoId': 'more-text',
      'name': { 'zh-CN': '下拉按钮显示文本', 'en-US': 'The text of the drop-down button is displayed.' },
      'desc': {
        'zh-CN': '通过属性 <code>more-text</code> 配置下拉菜单显示文本,默认值为 <code>更多</code',
        'en-US':
          'Use the attribute <code>more-text</code> to configure the text to be displayed in the drop-down list box. The default value is <code>More</code'
      },
      'codeFiles': ['more-text.vue']
    },
    {
      'demoId': 'spacing',
      'name': { 'zh-CN': '间距', 'en-US': 'Spacing' },
      'desc': {
        'zh-CN': '通过属性 <code>spacing</code> 配置菜单按钮之间的间距,默认值为 <code>5px</code>。',
        'en-US':
          'The <code>spacing</code> attribute is used to configure the spacing between menu buttons. The default value is <code>5px</code>.'
      },
      'codeFiles': ['spacing.vue']
    },
    {
      'demoId': 'popper-class',
      'name': { 'zh-CN': '自定义下拉面板样式', 'en-US': 'Customize drop-down panel style' },
      'desc': {
        'zh-CN': '通过属性 <code>popper-class</code> 设置下拉面板的类名，自定义样式',
        'en-US': 'Set the class name and style of the drop-down panel through the <code>popper-class</code> attribute.'
      },
      'codeFiles': ['popper-class.vue']
    },
    {
      'demoId': 'max-show-num',
      'name': { 'zh-CN': '显示个数', 'en-US': 'Displayed Number' },
      'desc': {
        'zh-CN': '通过属性 <code>max-show-num</code> 配置显示菜单按钮的最大个数，默认值为 <code>2</code> ',
        'en-US':
          'The <code>max-show-num</code> attribute specifies the maximum number of displayed menu buttons. The default value is <code>2</code>'
      },
      'codeFiles': ['max-show-num.vue']
    },
    {
      'demoId': 'item-click',
      'name': { 'zh-CN': '菜单项点击事件', 'en-US': 'Menu Item Click Event' },
      'desc': {
        'zh-CN': '当选中菜单项时触发 <code>item-click</code> 事件，传递出去的参数为当前选中项的数据',
        'en-US':
          'When a menu item is selected, the <code>item-click</code> event is triggered. The transferred parameter is the data of the selected item.'
      },
      'codeFiles': ['item-click.vue']
    },
    {
      'demoId': 'more-click',
      'name': { 'zh-CN': '更多按钮点击事件', 'en-US': 'More button click event' },
      'desc': {
        'zh-CN': '当点击下拉菜单按钮时触发 <code>more-click</code> 事件',
        'en-US': 'The <code>more-click</code> event is triggered when a drop-down list button is clicked.'
      },
      'codeFiles': ['more-click.vue']
    },
    {
      'demoId': 'slot-item',
      'name': { 'zh-CN': '菜单项插槽', 'en-US': 'Menu Slot' },
      'desc': {
        'zh-CN': '通过 <code>#item</code> 配置下拉面板中选项的模板',
        'en-US': 'Use <code>#item</code> to configure the template for the options in the drop-down list box.'
      },
      'codeFiles': ['slot-item.vue']
    },
    {
      'demoId': 'visible-change',
      'name': { 'zh-CN': '下拉面板显示事件', 'en-US': 'Drop-down menu visible change' },
      'desc': {
        'zh-CN': '当下拉面板出现或者隐藏时触发 <code>visible-change</code> 事件',
        'en-US':
          'When the drop-down menu change to be visible or hidden, the <code>visible-change</code> event is triggered.'
      },
      'codeFiles': ['visible-change.vue']
    }
  ],
  apis: [
    {
      'name': 'action-menu',
      'type': 'component',
      'properties': [
        {
          'name': 'options',
          'type': 'Array',
          'defaultValue': '[]',
          'desc': {
            'zh-CN':
              "可以配置菜单按钮数据，默认值为 [],数组中的每个元素为对象item,每个 item 一般可包含的字段有 (label,children,disabled,divided),例如：{ label: '登录',children:[],divided: true,disabled :true}。",
            'en-US':
              "You can configure menu button data. The default value is []. Each element in the array is an object item. Each item can contain the following fields: label, children, disabled, and divided, for example, {label:'Login', children:[],divided: true,disabled :true} ."
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'label',
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': '菜单项的显示值', 'en-US': 'Display value of a menu item' },
          'demoId': 'basic-usage'
        },
        {
          'name': 'children',
          'type': 'Array',
          'defaultValue': '[]',
          'desc': { 'zh-CN': '菜单项的子集', 'en-US': 'Subset of menu items' },
          'demoId': 'basic-usage'
        },
        {
          'name': 'divided',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '显示分割线。默认值：false', 'en-US': 'Displays the split line. Default value: false' },
          'demoId': 'basic-usage'
        },
        {
          'name': 'disabled',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否禁用。默认：false',
            'en-US': 'Whether to disable the function. Default value: false'
          },
          'demoId': 'disabled'
        },
        {
          'name': 'text-field',
          'type': 'string',
          'defaultValue': 'label',
          'desc': {
            'zh-CN': '设置菜单按钮显示文本的键值,默认值为 label',
            'en-US': 'Set the key value of the displayed text of a menu button. The default value is label.'
          },
          'demoId': 'text-field'
        },
        {
          'name': 'more-text',
          'type': 'string',
          'defaultValue': '更多',
          'desc': {
            'zh-CN': '配置下拉按钮显示文本,默认值为“更多”',
            'en-US': 'Configure the display text of the drop-down button. The default value is More.'
          },
          'demoId': 'more-text'
        },
        {
          'name': 'spacing',
          'type': '[string,number]',
          'defaultValue': '5px',
          'desc': {
            'zh-CN': '配置菜单按钮之间的间距,默认值为 5px',
            'en-US': 'Set the spacing between menu buttons. The default value is 5px.'
          },
          'demoId': 'spacing'
        },
        {
          'name': 'popper-class',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置下拉面板的类名，自定义样式',
            'en-US': 'Set the class name of the drop-down list box and customize the style.'
          },
          'demoId': 'popper-class'
        },
        {
          'name': 'max-show-num',
          'type': 'number',
          'defaultValue': '2',
          'desc': {
            'zh-CN': ' 配置显示菜单按钮的最大个数，默认值为2',
            'en-US': 'Maximum number of menu buttons to be displayed. The default value is 2.'
          },
          'demoId': 'max-show-num'
        }
      ],
      'events': [
        {
          'name': 'item-click',
          'type': 'Function',
          'defaultValue': 'Function(data:object)',
          'desc': {
            'zh-CN':
              '当选中菜单项时触发。返回数据data为object类型，对象包含字段 itemData 和 vm 字段，itemData 为当前选中项的数据（仅配置式时生效），vm 为当前选中项的实例',
            'en-US':
              'The itemClick event is triggered when a menu item is selected. The transferred parameter is the data of the selected item.'
          },
          'demoId': 'item-click'
        },
        {
          'name': 'more-click',
          'type': 'Function',
          'defaultValue': 'Function',
          'desc': {
            'zh-CN': '当点击下拉按钮时触发。',
            'en-US': 'The moreClick event is triggered when a drop-down list button is clicked.'
          },
          'demoId': 'more-click'
        }
      ],
      'slots': [
        {
          'name': 'item',
          'type': '插槽',
          'defaultValue': '',
          'desc': { 'zh-CN': '下拉面板中选项插槽', 'en-US': 'Slots in the drop-down list box' },
          'demoId': 'slot-item'
        }
      ]
    }
  ]
}
