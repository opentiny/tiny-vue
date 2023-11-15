export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>data</code> 设置按钮组数据，类型为<a href="#IButtonGroupData">IButtonGroupData</a>，通过 <code>v-model</code> 设置绑定值。</p>',
        'en-US':
          '<p>Set the button group data to type<a="# IButtonGroupData">IButtonGroupData</a>through <code>data</code> , and set the binding value through <code>v model</code> .</p>'
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'size',
      'name': { 'zh-CN': '设置组件尺寸大小', 'en-US': 'Set Component Size' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>size</code> 设置尺寸大小，可选值为： <code>medium</code> ， <code>small</code> ， <code>mini</code> 。</p>',
        'en-US':
          '<p>Set the size through <code>size</code> . The optional values are: <code>medium</code> , <code>small</code> , <code>mini</code> .</p>'
      },
      'codeFiles': ['size.vue']
    },
    {
      'demoId': 'disabled',
      'name': { 'zh-CN': '禁用状态', 'en-US': 'Disabled' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>disabled</code> 设置按钮组是否禁用，数据项设置 <code>disabled</code> 属性可以禁用单个按钮。</p>',
        'en-US':
          '<p>By setting whether the button group is disabled through <code>disabled</code> , and setting the <code>disabled</code> property of the data item, individual buttons can be disabled.</p>'
      },
      'codeFiles': ['disabled.vue']
    },
    {
      'demoId': 'plain',
      'name': { 'zh-CN': '朴素按钮', 'en-US': 'Simple button' },
      'desc': {
        'zh-CN': '<p>通过 <code>plain</code> 设置是否为朴素按钮。</p>',
        'en-US': '<p>Set whether it is a plain button through <code>plain</code> .</p>'
      },
      'codeFiles': ['plain.vue']
    },
    {
      'demoId': 'text-value-field',
      'name': { 'zh-CN': '数据字段映射', 'en-US': 'Data Field Mapping' },
      'desc': {
        'zh-CN':
          '<p>若按钮组数据对象中的字段不是默认的 text 和 value ，则可通过 <code>text-field</code> 、 <code>value-field</code> 属性进行映射。</p>',
        'en-US':
          '<p>If the fields in the button group data object are not the default text and value, the <code>text-field</code> and <code>value-field</code> attributes can be used for mapping. </p>'
      },
      'codeFiles': ['text-value-field.vue']
    },
    {
      'demoId': 'show-more',
      'name': { 'zh-CN': '显示更多按钮', 'en-US': 'Display More Buttons' },
      'desc': {
        'zh-CN': '<p>通过 <code>show-more</code> 设置显示更多按钮，当按钮数量大于设置值时，将显示更多按钮。</p>',
        'en-US':
          '<p>By setting <code>show more</code> to display more buttons, when the number of buttons exceeds the set value, more buttons will be displayed. </p>'
      },
      'codeFiles': ['show-more.vue']
    },
    {
      'demoId': 'show-edit',
      'name': { 'zh-CN': '编辑按钮', 'en-US': 'Display Edit Button' },
      'desc': {
        'zh-CN':
          '<p>设置了显示更多按钮后，可以通过 <code>show-edit</code> 设置是否显示编辑按钮。点击编辑按钮后触发 <code>edit</code> 事件。</p>',
        'en-US':
          '<p>After setting up to display more buttons, You can set whether to display the edit button through <code>show edit</code> . After clicking the edit button, the <code>edit</code> event is triggered.</p>'
      },
      'codeFiles': ['show-edit.vue']
    },
    {
      'demoId': 'change-event',
      'name': { 'zh-CN': 'change事件', 'en-US': 'Change Event' },
      'desc': {
        'zh-CN': '<p>当选中按钮发生改变时触发 <code>change</code> 事件。</p>',
        'en-US': '<p>The <code>change</code> event is triggered when the selected button is changed. </p>'
      },
      'codeFiles': ['change-event.vue']
    },
    {
      'demoId': 'slot-default',
      'name': { 'zh-CN': '默认插槽', 'en-US': 'Default slot' },
      'desc': {
        'zh-CN':
          '<p>使用默认插槽自定义按钮组，使用默认插槽后， <code>button-group</code> 的 <code>data、text-field、value-field、value / v-model、size</code> 属性对插槽中的按钮将不再生效。</p>',
        'en-US':
          '<p>When the default slot mode is used, the <code>data, text-field, value-field, v-model, and size</code> attributes of the ButtonGroup do not take effect for buttons in the slot. </p>'
      },
      'codeFiles': ['slot-default.vue']
    },
    {
      'demoId': 'button-group-multiple',
      'name': { 'zh-CN': '多行按钮组', 'en-US': 'Button Group Multiple' },
      'desc': {
        'zh-CN': '<p>多行按钮组，当超出最大宽度后，换行显示。</p>',
        'en-US':
          '<p>Multi-line button group, after exceeding the maximum width, it will be displayed in a new line.</p>'
      },
      'codeFiles': ['button-group-multiple.vue']
    },
    {
      'demoId': 'border',
      'name': { 'zh-CN': '边框', 'en-US': 'Border' },
      'desc': {
        'zh-CN': '<p>通过 <code>border</code> 设置有无边框。</p>',
        'en-US': '<p>Set whether there is a border through <code>border</code> .</p>'
      },
      'codeFiles': ['border.vue']
    },
    {
      'demoId': 'sup',
      'name': { 'zh-CN': '选块角标', 'en-US': '' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>data</code> 的 <code>sup</code> 属性配置选块角标。详见<a href="IButtonGroupData">IButtonGroupData</a></p>',
        'en-US': ''
      },
      'codeFiles': ['sup.vue']
    }
  ],
  apis: [
    {
      'name': 'button-group',
      'type': 'component',
      'props': [
        {
          'name': 'border',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '是否显示边框线',
            'en-US': 'Remove button border.'
          },
          'demoId': 'border'
        },
        {
          'name': 'data',
          'type': 'IButtonGroupData[]',
          'typeAnchorName': 'IButtonGroupData',
          'defaultValue': '',
          'desc': {
            'zh-CN': '按钮组数据',
            'en-US': 'button group data'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'disabled',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '设置按钮组是否被禁用',
            'en-US': 'Sets whether the button group is disabled'
          },
          'demoId': 'disabled'
        },
        {
          'name': 'modelValue / v-model',
          'type': 'number | string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '默认选中按钮的值',
            'en-US': 'Default value of the selected button'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'plain',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否朴素按钮',
            'en-US': 'Indicates whether the button is a simple button'
          },
          'demoId': 'plain'
        },
        {
          'name': 'show-edit',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否显示编辑按钮，只有在显示更多的情况下生效',
            'en-US':
              'Whether to display the edit button. This parameter takes effect only when more buttons are displayed'
          },
          'demoId': 'show-edit'
        },
        {
          'name': 'show-more',
          'type': 'number',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置超过多少个显示更多按钮',
            'en-US': 'Set the number of more buttons to be displayed'
          },
          'demoId': 'show-more'
        },
        {
          'name': 'size',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置组件大小',
            'en-US': 'Set the component size'
          },
          'demoId': 'size'
        },
        {
          'name': 'text-field',
          'type': 'string',
          'defaultValue': 'text',
          'desc': {
            'zh-CN': '按钮显示文字的字段值',
            'en-US': 'Field value of the button displayed text'
          },
          'demoId': 'text-value-field'
        },
        {
          'name': 'value-field',
          'type': 'string',
          'defaultValue': 'value',
          'desc': {
            'zh-CN': '按钮值的字段值',
            'en-US': 'Field value of the button value'
          },
          'demoId': 'text-value-field'
        }
      ],
      'events': [
        {
          'name': 'change',
          'type': '(value: string | number) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '当选中按钮发生改变时触发的回调函数',
            'en-US': 'Set the callback function triggered when the selected button is changed'
          },
          'demoId': 'change-event'
        },
        {
          'name': 'edit',
          'type': '() => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '当编辑按钮被点击时触发的回调函数',
            'en-US': 'Set the callback function triggered when the edit button is clicked'
          },
          'demoId': 'show-edit'
        }
      ],
      'slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '默认插槽，自定义按钮组内容',
            'en-US': 'button group content'
          },
          'demoId': 'slot-default'
        }
      ]
    }
  ],
  types: [
    {
      name: 'IButtonGroupData',
      type: 'interface',
      code: `
interface IButtonGroupData {
  text: string // 显示文本
  value: number | number // 选中的值
  disabled?: boolean // 是否禁用
  // 配置选块角标
  sup?: {
    text: string // 角标文本
    class?: string // 角标的自定义class
    slot?: string // 自定义插槽名称，提供后可在button-group内使用对应的插槽自定义角标内容
    icon?: Component // 传入图标组件
  }
}
`
    }
  ]
}
