export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': { 'zh-CN': '<p>基本用法</p>\n', 'en-US': '<p>Basic Usage</p>\n' },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'split-button',
      'name': { 'zh-CN': '触发对象', 'en-US': 'Trigger object' },
      'desc': {
        'zh-CN':
          '<p>配置<code>split-button</code>属性，可以使用内置按钮触发下拉菜单,同时可以通过<code>type</code>属性配置按钮状态，用法同<code>Button</code>组件</p>\n',
        'en-US':
          '<p>Configure the <code>split-button</code> attribute. You can use the built-in button to trigger the drop-down menu. In addition, you can use the <code>type</code> attribute to configure the button status. The usage is the same as that of the <code>Button</code> component</p>\n'
      },
      'codeFiles': ['split-button.vue']
    },
    {
      'demoId': 'trigger',
      'name': { 'zh-CN': '触发方式', 'en-US': 'Trigger Mode' },
      'desc': {
        'zh-CN': '<p>可以配置 <code>click</code> 激活或者 <code>hover</code> 激活</p>\n',
        'en-US': '<p>You can configure <code>click</code> or <code>hover</code> to activate</p>\n'
      },
      'codeFiles': ['trigger.vue']
    },
    {
      'demoId': 'visible-arrow',
      'name': { 'zh-CN': '显示箭头', 'en-US': 'Display Arrow' },
      'desc': {
        'zh-CN': '<p>可以配置 <code>visible-arrow</code> 为true ,显示箭头，默认不显示</p>\n',
        'en-US':
          '<p>You can set <code>visible-arrow</code> to true to display the arrow. By default, the arrow is not displayed.</p>\n'
      },
      'codeFiles': ['visible-arrow.vue']
    },
    {
      'demoId': 'title',
      'name': { 'zh-CN': '自定义文本', 'en-US': 'Custom Text' },
      'desc': {
        'zh-CN': '<p>Dropdown 可以通过<code>title</code> 属性去自定义显示文本</p>\n',
        'en-US': '<p>Dropdown can use the <code>title</code> attribute to customize the display text</p>\n'
      },
      'codeFiles': ['title.vue']
    },
    {
      'demoId': 'hide-on-click',
      'name': { 'zh-CN': '菜单隐藏方式', 'en-US': 'Menu hiding mode' },
      'desc': {
        'zh-CN':
          '<p>下拉菜单默认在点击菜单项后会被隐藏，将 <code>hide-on-click</code> 属性默认为 <code>false</code> 可以关闭此功能。</p>\n',
        'en-US':
          'The <p> drop-down menu is hidden by default after a menu item is clicked. You can disable this function by setting <code>hide-on-click</code> to <code>false</code>. </p>\n'
      },
      'codeFiles': ['hide-on-click.vue']
    },
    {
      'demoId': 'disabled',
      'name': { 'zh-CN': '禁用', 'en-US': 'Disabled' },
      'desc': {
        'zh-CN': '<p>Dropdown、DropdownItem 两个组件分别可以通过 <code>disabled</code> 属性设置禁用状态。</p>\n',
        'en-US':
          'The <p>Dropdown and DropdownItem components can be disabled through the <code>disabled</code> attribute. </p>\n'
      },
      'codeFiles': ['disabled.vue']
    },
    {
      'demoId': 'size',
      'name': { 'zh-CN': '不同尺寸', 'en-US': 'Different Sizes' },
      'desc': {
        'zh-CN':
          '<p>额外的尺寸：<code>medium</code>、<code>small</code>、<code>mini</code>，通过设置 <code>size</code> 属性来配置它们。</p>\n',
        'en-US':
          '<p>Additional sizes: <code>medium</code>, <code>small</code>, <code>mini</code>, configured by setting the <code>size</code> property. </p>\n'
      },
      'codeFiles': ['size.vue']
    },
    {
      'demoId': 'options',
      'name': { 'zh-CN': '使用配置式', 'en-US': 'Use Profile' },
      'desc': {
        'zh-CN':
          '<p>Dropdown 可以通过<code>menu-options</code>属性配置 DropdownMenu 的属性，<code>title</code>配置触发源的名称</p><p>DropdownMenu 可以通过<code>options</code>属性配置 DropdownItem 的属性，<code>text-field</code> 结合 <code>options</code> 使用，可以指定菜单文案显示的字段。<code>text-field</code> 默认为label</p>\n',
        'en-US':
          '<p>DropdownYou can configure the attributes of DropdownMenu through the <code>menu-options</code> attribute. <code>title</code>Configure the name of the trigger source</p><p>DropdownMenu You can configure the attributes of DropdownItem through the <code>options</code> attribute. <code>text-field</code> is used together with <code>options</code> to specify the fields displayed in the menu copywriting. <code>text-field</code> The default value is label</p>\n'
      },
      'codeFiles': ['options.vue']
    },
    {
      'demoId': 'multi-level',
      'name': { 'zh-CN': '多级菜单', 'en-US': 'Multi-Level Menu' },
      'desc': {
        'zh-CN': '<p>Dropdown 可以通过<code>children</code> 字段设置菜单的子节点</p>\n',
        'en-US': '<p>Dropdown can set the subnodes of a menu through the <code>children</code> field</p>\n'
      },
      'codeFiles': ['multi-level.vue']
    },
    {
      'demoId': 'inherit-width',
      'name': {
        'zh-CN': '弹框最小宽度与触发源一致',
        'en-US': 'The minimum width of the dialog box is the same as that of the trigger source.'
      },
      'desc': {
        'zh-CN': '<p>Dropdown 可以通过<code>inherit-width</code>属性配置 DropdownMenu 的最小宽度继承触发源的宽度</p>\n',
        'en-US':
          '<p>Dropdown can use the <code>inherit-width</code> attribute to configure the minimum width of DropdownMenu to inherit the width of the trigger source</p>\n'
      },
      'codeFiles': ['inherit-width.vue']
    },
    {
      'demoId': 'tip',
      'name': { 'zh-CN': '提示信息', 'en-US': 'Prompt' },
      'desc': {
        'zh-CN':
          '<p>DropdownItem 可以通过 <code>tip</code> 设置提示信息，<code>tip-position</code>设置提示信息的位置</p>\n',
        'en-US':
          '<p>DropdownItem can use <code>tip</code> to set the prompt information and <code>tip-position</code> to set the position of the prompt information</p>\n'
      },
      'codeFiles': ['tip.vue']
    },
    {
      'demoId': 'events',
      'name': { 'zh-CN': '内置事件', 'en-US': 'Internal Event' },
      'desc': {
        'zh-CN':
          '<p>内置事件包含：<code>button-click</code>、<code>item-click</code>、<code>visible-change</code> 事件。</p>\n',
        'en-US':
          '<p>The built-in events include the <code>button-click</code>, <code>item-click</code>, and <code>visible-change</code> events. </p>\n'
      },
      'codeFiles': ['events.vue']
    },
    {
      'demoId': 'slot-default',
      'name': { 'zh-CN': '默认插槽', 'en-US': 'Default slot' },
      'desc': {
        'zh-CN': '<p>Dropdown 可以通过<code>default</code> 插槽去自定义显示内容</p>\n',
        'en-US': '<p>Dropdown can be customized through the <code>default</code> slot</p>\n'
      },
      'codeFiles': ['slot-default.vue']
    }
  ],
  apis: [
    {
      'name': 'dropdown',
      'type': 'component',
      'properties': [
        {
          'name': 'type',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '菜单按钮类型，同 Button 组件(只在split-button为 true 的情况下有效)。',
            'en-US':
              'Menu button type, which is the same as the Button component. (Valid only if split-button is true).'
          },
          'demoId': 'split-button'
        },
        {
          'name': 'size',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '菜单尺寸，在split-button为 true 的情况下也对触发按钮生效。可选值（medium / small / mini）',
            'en-US':
              'Menu size. When split-button is set to true, this parameter is also valid for triggering a button. Available values (medium / small / mini)'
          },
          'demoId': 'size'
        },
        {
          'name': 'split-button',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '下拉触发元素呈现为按钮组。默认值：false',
            'en-US': 'The drop-down trigger element is displayed as a button group. Default value: false'
          },
          'demoId': 'split-button'
        },
        {
          'name': 'trigger',
          'type': 'string',
          'defaultValue': 'hover',
          'desc': {
            'zh-CN': '触发下拉的行为。可选值（hover, click），默认值：hover',
            'en-US': 'Trigger drop-down behavior. The value can be hover or click. The default value is hover'
          },
          'demoId': 'trigger'
        },
        {
          'name': 'hide-on-click',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '是否在点击菜单项后隐藏菜单。默认为 true。',
            'en-US': 'Indicates whether to hide a menu after a menu item is clicked. The default value is true.'
          },
          'demoId': 'hide-on-click'
        },
        {
          'name': 'show-timeout',
          'type': 'number',
          'defaultValue': '',
          'desc': {
            'zh-CN': '展开下拉菜单的延时（仅在 trigger 为 hover 时有效）。默认：250 毫秒',
            'en-US':
              'Delay for expanding the drop-down list. This parameter is valid only when trigger is hover. Default value: 250 ms'
          },
          'demoId': 'trigger'
        },
        {
          'name': 'hide-timeout',
          'type': 'number',
          'defaultValue': '',
          'desc': {
            'zh-CN': '收起下拉菜单的延时（仅在 trigger 为 hover 时有效）。默认：150 毫秒',
            'en-US':
              'Delay for collapsing the drop-down list. This parameter is valid only when trigger is hover. Default value: 150 ms'
          },
          'demoId': 'trigger'
        },
        {
          'name': 'tabindex',
          'type': 'number',
          'defaultValue': '',
          'desc': { 'zh-CN': 'Dropdown 组件的 tabindex。', 'en-US': 'tabindex of the Dropdown component.' },
          'demoId': 'basic-usage'
        },
        {
          'name': 'disabled',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否禁用。默认值：false',
            'en-US': 'Whether to disable the function. Default value: false'
          },
          'demoId': 'disabled'
        },
        {
          'name': 'menu-options',
          'type': 'object',
          'defaultValue': '{"options":[],"textField":"label","popper-class":"","placement":"bottom-end"}',
          'desc': { 'zh-CN': '配置式配置 DropdownMenu 属性', 'en-US': 'Configuring DropdownMenu in Profiles' },
          'demoId': 'options'
        },
        {
          'name': 'visible-arrow',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否显示箭头。默认值不显示',
            'en-US': 'Indicates whether to display arrows. The default value is not displayed'
          },
          'demoId': 'visible-arrow'
        },
        {
          'name': 'title',
          'type': 'string',
          'defaultValue': '下拉菜单',
          'desc': {
            'zh-CN': '不使用默认插槽时，title属性可以配置菜单标题',
            'en-US': 'When the default slot is not used, the menu title can be configured in the title attribute.'
          },
          'demoId': 'options'
        },
        {
          'name': 'inherit-width',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '默认为false,设置true时，弹框的最小宽度继承触发源的宽度',
            'en-US':
              'The default value is false. When this parameter is set to true, the minimum width of the dialog box inherits the width of the trigger source.'
          },
          'demoId': 'inherit-width'
        }
      ],
      'events': [
        {
          'name': 'button-click',
          'type': 'Function',
          'defaultValue': 'Function',
          'desc': {
            'zh-CN': 'split-button 为 true 时，点击左侧按钮的事件回调。',
            'en-US': 'When split-button is set to true, click the callback function of the button on the left.'
          },
          'demoId': 'events'
        },
        {
          'name': 'item-click',
          'type': 'Function',
          'defaultValue': 'Function(data:object)',
          'desc': {
            'zh-CN':
              '点击菜单项触发的事件回调。返回数据data为object类型，对象包含字段 itemData 和 vm 字段，itemData 为当前选中项的数据（仅配置式时生效），vm 为当前选中项的实例',
            'en-US': 'Callback triggered by clicking a menu item.'
          },
          'demoId': 'events'
        },
        {
          'name': 'visible-change',
          'type': 'Function',
          'defaultValue': 'Function(status:boolean)',
          'desc': {
            'zh-CN': '下拉框显示/隐藏时触发。回调参数 status 为 boolean 类型，true 表示显示，false 表示隐藏',
            'en-US': 'This event is triggered when the drop-down list box is displayed or hidden.'
          },
          'demoId': 'events'
        }
      ],
      'slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '触发下拉列表显示的元素。 注意： 必须是一个元素或者或者组件。',
            'en-US':
              'Element that triggers the display of the drop-down list. Note: The value must be an element or component.'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'dropdown',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '下拉列表，通常是 <tiny-dropdown-menu> 组件。',
            'en-US': 'drop-down list, usually the <tiny-dropdown-menu> component.'
          },
          'demoId': 'basic-usage'
        }
      ],
      'dropdownMenuattrs': [
        {
          'name': 'placement',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '菜单弹出位置。可选值（top/top-start/top-end/bottom/bottom-start/bottom-end），默认：bottom-end',
            'en-US':
              'Menu pop-up position. The value can be (top/top-start/top-end/bottom/bottom-start/bottom-end). The default value is bottom-end'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'popper-class',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置弹出下拉自定义样式。', 'en-US': 'Set the pop-up drop-down style.' },
          'demoId': 'basic-usage'
        },
        {
          'name': 'options',
          'type': 'Array',
          'defaultValue': '[]',
          'desc': {
            'zh-CN': '通过配置式设置菜单项的属性',
            'en-US': 'Setting the properties of a menu item using a profile'
          },
          'demoId': 'options'
        },
        {
          'name': 'text-field',
          'type': 'string',
          'defaultValue': 'label',
          'desc': {
            'zh-CN': '结合options 属性使用，指定菜单项的显示文案的字段，默认字段为 label',
            'en-US':
              'Used together with the options attribute to specify the copywriting field of a menu item. The default field is label.'
          },
          'demoId': 'options'
        }
      ],
      'dropdownMenu-slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '下拉列表选项通常是 <tiny-dropdown-item> 组件。',
            'en-US': 'The drop-down list is usually a <tiny-dropdown-item> component.'
          },
          'demoId': 'basic-usage'
        }
      ],
      'dropdownItemattrs': [
        {
          'name': 'disabled',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '禁用。默认：false', 'en-US': 'Disabled. Default value: false' },
          'demoId': 'disabled'
        },
        {
          'name': 'divided',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '显示分割线。默认值：false', 'en-US': 'Displays the split line. Default value: false' },
          'demoId': 'hide-on-click'
        },
        {
          'name': 'icon',
          'type': 'object',
          'defaultValue': '',
          'desc': { 'zh-CN': '内嵌图标。', 'en-US': 'Embedded icon.' },
          'demoId': 'trigger'
        },
        {
          'name': 'label',
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': '菜单项的显示值', 'en-US': 'Display value of a menu item' },
          'demoId': 'basic-usage'
        }
      ],
      'dropdownItem-slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '下拉列表选项内容。', 'en-US': 'The options in the drop-down list box are displayed.' },
          'demoId': 'basic-usage'
        }
      ]
    }
  ]
}
