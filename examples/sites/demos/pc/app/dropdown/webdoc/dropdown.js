export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': { 'zh-CN': '<p></p>\n', 'en-US': '<p></p>\n' },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'disabled',
      'name': { 'zh-CN': '禁用', 'en-US': 'Disabled' },
      'desc': {
        'zh-CN': '<p>通过 <code>disabled</code> 属性设置 菜单 或者 菜单项 为禁用状态。</p>\n',
        'en-US': 'The <p>Use the<code>disabled</code>attribute to set the menu or menu item to a disabled state. </p>\n'
      },
      'codeFiles': ['disabled.vue']
    },
    {
      'demoId': 'size',
      'name': { 'zh-CN': '尺寸', 'en-US': 'Size' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>size</code> 属性可配置其他尺寸，可选值：<code>medium</code> / <code>small</code> / <code>mini</code>。</p>\n',
        'en-US':
          '<p>Use the<code>size</code>attribute to configure other sizes, with optional values:<code>medium</code>/<code>small</code>/<code>mini</code>. </p>\n'
      },
      'codeFiles': ['size.vue']
    },
    {
      'demoId': 'show-icon',
      'name': { 'zh-CN': '隐藏图标', 'en-US': 'Show icons' },
      'desc': {
        'zh-CN': '<p>通过 <code>show-icon</code> 属性设置触发源的图标显示或隐藏，默认显示，设置为 false 时隐藏。</p>\n',
        'en-US':
          '<p>Additional sizes: <code>medium</code>, <code>small</code>, <code>mini</code>, configured by setting the <code>size</code> property. </p>\n'
      },
      'codeFiles': ['show-icon.vue']
    },
    {
      'demoId': 'split-button',
      'name': { 'zh-CN': '按钮类型', 'en-US': 'Button type' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>split-button</code> 属性，设置下拉菜单显示为按钮类型。仅按钮类型时，支持 <code>type</code> 属性设置按钮状态。</p>\n',
        'en-US':
          '<p>Set the drop-down menu to display as a button type through the<code>split button</code>attribute. When only button types are used, the<code>type</code>attribute setting button status is supported.</p>\n'
      },
      'codeFiles': ['split-button.vue']
    },
    {
      'demoId': 'trigger',
      'name': { 'zh-CN': '触发方式', 'en-US': 'Trigger Mode' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>trigger</code> 属性设置触发下拉的方式，默认为 <code>hover</code>。可选值为: <code>click</code> / <code>hover</code> 。</p>\n',
        'en-US':
          '<p>By setting the<code>trigger</code>attribute to trigger a drop-down, the default is<code>hover</code>. The optional values are:<code>click</code>/<code>hover</code>.</p>\n'
      },
      'codeFiles': ['trigger.vue']
    },
    {
      'demoId': 'tip',
      'name': { 'zh-CN': '提示信息', 'en-US': 'Prompt' },
      'desc': {
        'zh-CN': '通过 <p><code>tip</code> 属性设置提示信息，<code>tip-position</code> 属性设置提示信息的位置。</p>\n',
        'en-US':
          '<p>Set the prompt information through the<p><code>tip</code>attribute, and set the position of the prompt information through the<code>tip position</code>attribute.</p>\n'
      },
      'codeFiles': ['tip.vue']
    },
    {
      'demoId': 'visible-arrow',
      'name': { 'zh-CN': '显示箭头', 'en-US': 'Display Arrow' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>visible-arrow</code> 属性设置下拉弹框是否显示箭头，默认不显示。<code>visible-arrow</code> 为 true 时显示箭头。</p>\n',
        'en-US':
          '<p>Use the <code>visible arrow</code> attribute to set whether the drop-down pop-up box displays an arrow, which is not displayed by default< Show arrows when code>visible arrow</code>is true.</p>\n'
      },
      'codeFiles': ['visible-arrow.vue']
    },
    {
      'demoId': 'hide-on-click',
      'name': { 'zh-CN': '点击后收起', 'en-US': 'Click to collapse' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>hide-on-click</code> 属性设置点击菜单项后是否收起菜单弹框。默认为 true，点击后收起。</p>\n',
        'en-US':
          '<p>Use the <code>hide on click</code> attribute to set whether to collapse the menu pop-up after clicking on the menu item. The default is true, and it will be collapsed after clicking. </p>\n'
      },
      'codeFiles': ['hide-on-click.vue']
    },
    {
      'demoId': 'title',
      'name': { 'zh-CN': '触发源文本', 'en-US': 'Trigger Source Text' },
      'desc': {
        'zh-CN': '<p>通过 <code>title</code> 属性设置触发源的文本，默认为 <code>下拉菜单</code>。</p>\n',
        'en-US':
          '<p>Set the text of the trigger source through the<code>title</code>attribute, which defaults to the<code>drop-down menu</code>.</p>\n'
      },
      'codeFiles': ['title.vue']
    },
    {
      'demoId': 'options',
      'name': { 'zh-CN': '配置式', 'en-US': 'Configuration' },
      'desc': {
        'zh-CN':
          '<p><code>menu-options</code>属性：只使用 tiny-dropdown 组件配置式时使用。</p>\n<p><code>options</code>属性：使用 tiny-dropdown-menu 组件配置式时使用。</p>\n<p><code>text-field</code>属性：指定菜单文案显示的字段，默认为 label。 </p>\n<p><code>title</code>属性：设置触发源的文本。</p>\n',
        'en-US':
          '<p><code>menu options</code>Properties: Used only when using the tiny dropdown component configuration</p>\n<p><code>options</code>Properties: Used when using the tiny dropdown menu component configuration</p> \n<p><code>text field</code>Attribute: specifies the field displayed in the menu copy, which defaults to label</p> \n<p><code>title</code>Property: Set the text of the trigger source</p>\n'
      },
      'codeFiles': ['options.vue']
    },
    {
      'demoId': 'multi-level',
      'name': { 'zh-CN': '多级菜单', 'en-US': 'Multi-Level Menu' },
      'desc': {
        'zh-CN': '<p>通过 <code>children</code> 字段定义多级菜单的子节点，仅配置式时生效。</p>\n',
        'en-US': '<p>Dropdown can set the subnodes of a menu through the <code>children</code> field</p>\n'
      },
      'codeFiles': ['multi-level.vue']
    },
    {
      'demoId': 'inherit-width',
      'name': {
        'zh-CN': '继承宽度',
        'en-US': 'Inherit Width'
      },
      'desc': {
        'zh-CN': '<p>通过 <code>inherit-width</code> 属性设置下拉弹框的最小宽度继承触发源的宽度。</p>\n',
        'en-US':
          '<p>Inherit the width of the trigger source by setting the minimum width of the drop-down pop-up box through the<code>inherit width</code>attribute.</p>\n'
      },
      'codeFiles': ['inherit-width.vue']
    },
    {
      'demoId': 'events',
      'name': { 'zh-CN': '事件', 'en-US': 'Events' },
      'desc': {
        'zh-CN':
          '<p><code>button-click</code>：按钮类型时，监听左侧按钮点击事件。</p><p><code>item-click</code>：监听点击菜单项事件。</p><p><code>visible-change</code>：监听下拉弹框显示隐藏发生变化。</p>\n',
        'en-US':
          '<p><code>button-click</code>: When the button type is selected, listen for the left button click event.</p>\n<p><code>item-click</code>: Listens for menu item click events</p>\n<p>code>visible-change</code>: Listens for changes in the display and hiding of dropdown pop ups.</p>\n'
      },
      'codeFiles': ['events.vue']
    },
    {
      'demoId': 'slots',
      'name': { 'zh-CN': '插槽', 'en-US': 'Slots' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>default</code> 插槽自定义触发源文本区域。<code>suffix-icon</code> 插槽自定义触发源图标区域。</p>\n',
        'en-US':
          '<p>Customize the trigger source text area through the<code>default</code>slot.</p>\n<p>Customize the trigger source icon area through the<code>suffix icon</code>slot.</p>\n'
      },
      'codeFiles': ['slots.vue']
    }
  ],
  apis: [
    {
      'name': 'dropdown',
      'type': 'component',
      'properties': [
        {
          'name': 'disabled',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否禁用',
            'en-US': 'Is it disabled'
          },
          'demoId': 'disabled'
        },
        {
          'name': 'hide-on-click',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '点击菜单项后是否收起菜单。默认点击后收起',
            'en-US': 'Whether to collapse the menu after clicking on the menu item. Collapse after clicking by default'
          },
          'demoId': 'hide-on-click'
        },
        {
          'name': 'hide-timeout',
          'type': 'number',
          'defaultValue': '150',
          'desc': {
            'zh-CN': '延时多久收起下拉菜单，单位毫秒。注意：仅在 trigger 为 hover 时有效',
            'en-US':
              'How long is the delay in retracting the pull-down menu, in milliseconds. Note: Only valid when trigger is hover'
          },
          'demoId': 'trigger'
        },
        {
          'name': 'inherit-width',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '下拉弹框的最小宽度是否继承触发源的宽度，默认不继承',
            'en-US':
              'Whether the minimum width of the dropdown pop-up inherit the width of the trigger source.It is not inherited by default'
          },
          'demoId': 'inherit-width'
        },
        {
          'name': 'menu-options',
          'type': 'IMenuOption',
          'typeAnchorName': 'IMenuOption',
          'defaultValue': `<pre>
{
  options:[],
  textField:"label",
  popperClass:"",
  placement:"bottom-end"
}
</pre>`,
          'desc': {
            'zh-CN': '配置式且只使用 tiny-dropdown 组件时使用',
            'en-US': 'Used when configuring and only using the tiny dropdown component'
          },
          'demoId': 'options'
        },
        {
          'name': 'show-timeout',
          'type': 'number',
          'defaultValue': '250',
          'desc': {
            'zh-CN': '延时多久展开下拉菜单，单位毫秒。注意：仅在 trigger 为 hover 时有效',
            'en-US':
              'How long is the delay to expand the drop-down menu, in milliseconds. Note: Only valid when trigger is hover'
          },
          'demoId': 'trigger'
        },
        {
          'name': 'split-button',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '下拉触发元素呈现为按钮',
            'en-US': 'Dropdown trigger elements are presented as button groups'
          },
          'demoId': 'split-button'
        },
        {
          'name': 'size',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '菜单尺寸，可选值： medium / small / mini。注意：只在 split-button为 true 的情况下生效',
            'en-US': 'Menu size, optional values: medium/small/mini. Note: Only takes effect when split-button is true'
          },
          'demoId': 'size'
        },
        {
          'name': 'type',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '按钮类型，可选值: primary / success / warning / danger / info / text。注意：只在split-button为 true 的情况下有效',
            'en-US':
              'Button type, optional values: primary/success/warning/danger/info/text. Note: Only valid if split button is true'
          },
          'demoId': 'split-button'
        },
        {
          'name': 'title',
          'type': 'string',
          'defaultValue': '下拉菜单',
          'desc': {
            'zh-CN': '自定义触发源的文本',
            'en-US': 'Text for custom trigger source'
          },
          'demoId': 'options'
        },
        {
          'name': 'trigger',
          'type': 'string',
          'defaultValue': 'hover',
          'desc': {
            'zh-CN': '触发下拉的方式。可选值：hover / click',
            'en-US': 'Trigger the dropdown method. Optional values: hover / click'
          },
          'demoId': 'trigger'
        },
        {
          'name': 'tabindex',
          'type': 'number',
          'defaultValue': '0',
          'desc': {
            'zh-CN': '初始化触发元素的原生属性 tabindex',
            'en-US': 'Initialize the native attribute tabindex of the triggering element'
          },
          'demoId': ''
        },
        {
          'name': 'visible-arrow',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '下拉弹框是否显示箭头，默认不显示',
            'en-US': 'Indicates whether to display arrows. The default value is not displayed'
          },
          'demoId': 'visible-arrow'
        }
      ],
      'events': [
        {
          'name': 'button-click',
          'type': 'Function() => void',
          'defaultValue': 'Function',
          'desc': {
            'zh-CN': '监听左侧按钮点击事件，仅 split-button 为 true 时生效',
            'en-US': 'Listen for the left button click event, only effective when split-button is true'
          },
          'demoId': 'events'
        },
        {
          'name': 'item-click',
          'type': 'Function(data:IItemClickParam) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '监听点击菜单项事件',
            'en-US': 'Listen for menu item click events'
          },
          'demoId': 'events'
        },
        {
          'name': 'visible-change',
          'type': 'Function(status:boolean) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '监听下拉框的显示或隐藏状态',
            'en-US': 'Monitor the display or hidden status of the dropdown box'
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
            'zh-CN': '自定义触发源文本区域。 注意： 必须是一个元素或者或者组件',
            'en-US': 'Customize the trigger source text area. Note: must be an element or component'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'dropdown',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '自定义下拉列表区域，通常使用 tiny-dropdown-menu 组件',
            'en-US': 'Customize the dropdown list area, usually using the tiny dropdown menu component'
          },
          'demoId': 'basic-usage'
        }
      ]
    },
    {
      'name': 'dropdownMenu',
      'type': 'component',
      'properties': [
        {
          'name': 'options',
          'type': 'IItem []',
          'typeAnchorName': 'IItem',
          'defaultValue': '[]',
          'desc': {
            'zh-CN': '通过配置式设置菜单项的属性',
            'en-US': 'Setting menu item properties through configuration'
          },
          'demoId': 'options'
        },
        {
          'name': 'placement',
          'type': 'string',
          'defaultValue': 'bottom-end',
          'desc': {
            'zh-CN': '菜单弹出位置。可选值: top / top-start / top-end / bottom / bottom-start / bottom-end',
            'en-US':
              'Menu pop-up location. Optional values: top / top-start / top-end/bottom / bottom-start / bottom-end'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'popper-class',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '下拉弹框的类名，用于自定义样式',
            'en-US': 'The class name of the dropdown pop-up box, used for customizing styles'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'text-field',
          'type': 'string',
          'defaultValue': 'label',
          'desc': {
            'zh-CN': '菜单项文本的字段,结合 options 属性使用',
            'en-US': 'The field of menu item text, used in conjunction with the options attribute'
          },
          'demoId': 'options'
        }
      ],
      'slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '下拉弹框区域，通常使用 tiny-dropdown-item 组件',
            'en-US': 'Dropdown the pop-up area, usually using the tiny-dropdown item component'
          },
          'demoId': 'basic-usage'
        }
      ]
    },
    {
      'name': 'dropdownItem',
      'type': 'component',
      'properties': [
        {
          'name': 'disabled',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '是否禁用', 'en-US': 'Is it disabled' },
          'demoId': 'disabled'
        },
        {
          'name': 'divided',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '是否显示分割线', 'en-US': 'Show split lines' },
          'demoId': 'events'
        },
        {
          'name': 'icon',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '内嵌图标', 'en-US': 'Embedded icon' },
          'demoId': 'events'
        },
        {
          'name': 'item-data',
          'type': 'IItemData',
          'typeAnchorName': 'IItemData',
          'defaultValue': '',
          'desc': { 'zh-CN': '菜单项的配置信息', 'en-US': 'Configuration information for menu items' },
          'demoId': 'events'
        },
        {
          'name': 'label',
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': '菜单项的文本', 'en-US': 'Text for menu items' },
          'demoId': 'events'
        }
      ],
      'slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '菜单项文本区域', 'en-US': 'Menu item text area' },
          'demoId': 'basic-usage'
        }
      ]
    }
  ],
  types: [
    {
      name: 'IMenuOption',
      type: 'interface',
      code: `
interface IMenuOption {
  "options": IItemData[]
  "textField"?: string
  "popper-class"?: string
  "placement"?: top | top-start | top-end | bottom | bottom-start | bottom-end
}        
`
    },
    {
      name: 'IItemClickParam',
      type: 'interface',
      code: `        
interface IMenuOption {
  "itemData": IItemData
  // dropdownItem 组件的实例
  "vm": {
    "selected": boolean
    "textField: string
    "tipPosition: string
    "$el": HTMLElement
  }
}
`
    },
    {
      name: 'IItemData',
      type: 'interface',
      code: `        
interface IItemData {
  "label"?: string
  "disabled"?: boolean
  "divided"?: boolean
}
`
    }
  ]
}
