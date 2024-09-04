export default {
  mode: ['pc', 'mobile', 'mobile-first'],
  apis: [
    {
      name: 'checkbox',
      type: 'component',
      props: [
        {
          name: 'border',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否显示边框',
            'en-US': 'Display border'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'border',
          mfDemo: ''
        },
        {
          name: 'checked',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否默认勾选',
            'en-US': 'Currently selected'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'checked',
          mobileDemo: '',
          mfDemo: ''
        },
        {
          name: 'disabled',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否禁用',
            'en-US': 'Disable'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'indeterminate',
          mobileDemo: 'disabled',
          mfDemo: ''
        },
        {
          name: 'display-only',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '是否开启组件 display-only 只显示模式，默认值为 false',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'false-label',
          type: 'string | number',
          defaultValue: '',
          desc: {
            'zh-CN': '没有选中时的值',
            'en-US': 'Value when no option is selected'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'text',
          mobileDemo: 'custom-value',
          mfDemo: ''
        },
        {
          name: 'icon-position',
          type: 'String',
          defaultValue: 'center',
          desc: {
            'zh-CN': "<p>图标与文本的对齐方式，可选值：'center' | 'top'</p>",
            'en-US': "<p>Alignment of icon and text, optional value: 'center' | 'top'</p>"
          },
          mode: ['mobile'],
          mobileDemo: 'icon-position'
        },
        {
          name: 'indeterminate',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '设置 indeterminate 状态，只负责样式控制',
            'en-US': 'Sets the indeterminate state and controls only the style.'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'indeterminate',
          mobileDemo: 'indeterminate',
          mfDemo: ''
        },
        {
          name: 'label',
          type: 'string | number | boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '选中状态的值（只有在 checkbox-group 中或者绑定对象类型为 array 时有效）',
            'en-US':
              'Selected value (This parameter is valid only when checkbox-group or the bound object type is array)'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'checkbox-group',
          mobileDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'modelValue / v-model',
          type: 'string | number | boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '绑定值',
            'en-US': 'Bound Value'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'name',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '原生 name 属性',
            'en-US': 'Native name attribute'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'basic-usage',
          mobileDemo: '',
          mfDemo: ''
        },
        {
          name: 'shape',
          type: "'filter'",
          defaultValue: '',
          desc: {
            'zh-CN': '过滤器模式',
            'en-US': 'Filter mode'
          },
          mode: ['pc'],
          pcDemo: 'shape'
        },
        {
          name: 'size',
          type: "'medium' | 'default' | 'small' | 'mini'",
          defaultValue: '',
          desc: {
            'zh-CN': 'checkbox 的尺寸，仅在 border 为true时有效',
            'en-US': 'Checkbox size. This parameter is valid only when border is set to true'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'size',
          mfDemo: ''
        },
        {
          name: 'text',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '复选框显示的文本',
            'en-US': 'Text displayed in the check box'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'description',
          mfDemo: ''
        },
        {
          name: 'true-label',
          type: 'string | number',
          defaultValue: '',
          desc: {
            'zh-CN': '选中时的值',
            'en-US': 'Value when selected'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'text',
          mobileDemo: 'custom-value',
          mfDemo: ''
        },
        {
          name: 'v-model',
          type: 'String / Number / Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '绑定值',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'v-model / modelValue',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>绑定值</p>',
            'en-US': '<p>value</p>'
          },
          mode: ['mobile'],
          mobileDemo: 'basic-usage'
        }
      ],
      events: [
        {
          name: 'change',
          type: '(value: string | number | boolean) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '当绑定值变化时触发的事件',
            'en-US': 'This event is triggered when the binding value changes'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'checkbox-events',
          mobileDemo: 'event-change',
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
            'zh-CN': 'checkbox的内容',
            'en-US': 'Checkbox content'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'checkbox-slot',
          mobileDemo: '',
          mfDemo: ''
        }
      ]
    },
    {
      name: 'checkbox-group',
      type: 'component',
      props: [
        {
          name: 'disabled',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否禁用',
            'en-US': 'Disable'
          },
          mode: ['pc'],
          pcDemo: 'indeterminate'
        },
        {
          name: 'fill',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '按钮形式的 checkbox 激活时的填充色和边框色',
            'en-US': 'Fill color and border color when the checkbox in button mode is activated'
          },
          mode: ['pc'],
          pcDemo: 'custom-color'
        },
        {
          name: 'max',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN': '可被勾选的 checkbox 的最大数量',
            'en-US': 'Maximum number of checkboxes that can be selected'
          },
          mode: ['pc'],
          pcDemo: 'min-max'
        },
        {
          name: 'min',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN': '可被勾选的 checkbox 的最小数量',
            'en-US': 'Minimum number of checkboxes that can be selected'
          },
          mode: ['pc'],
          pcDemo: 'min-max'
        },
        {
          name: 'modelValue / v-model',
          type: 'string[] | number[]',
          defaultValue: '',
          desc: {
            'zh-CN': '绑定值',
            'en-US': 'Bound Value'
          },
          mode: ['pc'],
          pcDemo: 'checkbox-group'
        },
        {
          name: 'options',
          typeAnchorName: 'ICheckboxGroupOptions',
          type: 'ICheckboxGroupOptions[]',
          defaultValue: '',
          desc: {
            'zh-CN': 'checkbox-group 子项配置列表',
            'en-US': 'Checkbox component list'
          },
          mode: ['pc'],
          pcDemo: 'group-options'
        },
        {
          name: 'shape',
          type: "'filter'",
          defaultValue: '',
          desc: {
            'zh-CN': '过滤器模式',
            'en-US': 'Filter mode'
          },
          mode: ['pc'],
          pcDemo: 'shape'
        },
        {
          name: 'size',
          type: "'medium' | 'small' | 'mini'",
          defaultValue: '',
          desc: {
            'zh-CN': '多选框组尺寸，仅对按钮形式的 checkbox 或带有边框的 checkbox 有效',
            'en-US':
              'Size of the check box group. This parameter is valid only for the check box with buttons or borders'
          },
          mode: ['pc'],
          pcDemo: 'size'
        },
        {
          name: 'text-color',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '按钮形式的 checkbox 激活时的文本颜色',
            'en-US': 'Text color when the checkbox in button mode is activated'
          },
          mode: ['pc'],
          pcDemo: 'custom-color'
        },
        {
          name: 'type',
          type: "'button' | 'checkbox'",
          defaultValue: "'checkbox'",
          desc: {
            'zh-CN': ' 复选框组子项组件类型，需配合 options 属性使用',
            'en-US': 'Checkbox component type'
          },
          mode: ['pc'],
          pcDemo: 'group-options'
        },
        {
          name: 'vertical',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '设置组件排列方式，设置复选框是否垂直排列',
            'en-US': 'Set the component arrangement mode. Sets whether the check boxes are arranged vertically'
          },
          mode: ['pc'],
          pcDemo: 'vertical-checkbox'
        }
      ],
      events: [
        {
          name: 'change',
          type: '(value: string[] |number[]) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '当绑定值变化时触发的事件',
            'en-US': 'This event is triggered when the binding value changes.'
          },
          mode: ['pc'],
          pcDemo: 'checkbox-events'
        }
      ],
      methods: [],
      slots: [
        {
          name: 'default',
          defaultValue: '',
          desc: {
            'zh-CN': 'checkbox-group 选项组',
            'en-US': 'Checkbox Option Group'
          },
          mode: ['pc'],
          pcDemo: 'checkbox-group'
        }
      ]
    },
    {
      name: 'checkbox-button',
      type: 'component',
      props: [
        {
          name: 'checked',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否默认勾选',
            'en-US': 'Currently selected'
          },
          mode: ['pc'],
          pcDemo: 'checked'
        },
        {
          name: 'disabled',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否禁用',
            'en-US': 'Is disabled'
          },
          mode: ['pc'],
          pcDemo: 'indeterminate'
        },
        {
          name: 'events',
          typeAnchorName: 'ICheckboxGroupOptions',
          type: 'ICheckboxGroupOptions.events',
          defaultValue: '',
          desc: {
            'zh-CN': '原生事件',
            'en-US': 'Native event'
          },
          mode: ['pc'],
          pcDemo: 'group-options'
        },
        {
          name: 'false-label',
          type: 'string | number',
          defaultValue: '',
          desc: {
            'zh-CN': '没有选中时的值',
            'en-US': 'Value when no option is selected'
          },
          mode: ['pc'],
          pcDemo: 'text'
        },
        {
          name: 'label',
          type: 'string | number | boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '选中状态的值（只有在 checkbox-group 中或者绑定对象类型为array时有效）',
            'en-US':
              'Value in the selected state (This parameter is valid only when checkbox-group or the bound object type is array.) The optional value of this attribute is medium-'
          },
          mode: ['pc'],
          pcDemo: 'checkbox-group'
        },
        {
          name: 'modelValue / v-model',
          type: 'string | number | boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '绑定值',
            'en-US': 'Bound Value'
          },
          mode: ['pc'],
          pcDemo: 'checkbox-button'
        },
        {
          name: 'name',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '原生 name 属性',
            'en-US': 'Native name attribute'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'text',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '复选框文本',
            'en-US': 'Text'
          },
          mode: ['pc'],
          pcDemo: 'description'
        },
        {
          name: 'true-label',
          type: 'string | number',
          defaultValue: '',
          desc: {
            'zh-CN': '选中时的值',
            'en-US': 'Value when selected'
          },
          mode: ['pc'],
          pcDemo: 'text'
        }
      ],
      events: [],
      methods: [],
      slots: [
        {
          name: 'default',
          defaultValue: '',
          desc: {
            'zh-CN': 'checkbox-button 的内容',
            'en-US': 'Checkbox-button content'
          },
          mode: ['pc'],
          pcDemo: 'description'
        }
      ]
    }
  ],
  types: [
    {
      name: 'ICheckboxGroupOptions',
      type: 'interface',
      code: `
interface ICheckboxGroupOptions {
  label: string // 选中时对应的值
  text?: number // 描述文本
  disabled?: boolean // 是否禁用
  checked?: boolean // 是否默认选中
  events?: {
    click?: (e: Event) => void // 点击事件
    change?: (e: Event) => void // change事件
  }
}`
    }
  ]
}
