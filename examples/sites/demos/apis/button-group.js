export default {
  mode: ['pc', 'mobile-first'],
  apis: [
    {
      name: 'button-group',
      type: 'component',
      props: [
        {
          name: 'border',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否显示边框线',
            'en-US': 'Remove button border.'
          },
          mode: ['pc'],
          pcDemo: 'border'
        },
        {
          name: 'data',
          typeAnchorName: 'IButtonGroupData',
          type: 'IButtonGroupData[]',
          defaultValue: '',
          desc: {
            'zh-CN': '按钮组数据',
            'en-US': 'button group data'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'disabled',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否被禁用按钮组',
            'en-US': 'Sets whether the button group is disabled'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'disabled',
          mfDemo: ''
        },
        {
          name: 'modelValue / v-model',
          type: 'number | string',
          defaultValue: '',
          desc: {
            'zh-CN': '默认选中按钮的值',
            'en-US': 'Default value of the selected button'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'plain',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否朴素按钮',
            'en-US': 'Indicates whether the button is a simple button'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'plain',
          mfDemo: ''
        },
        {
          name: 'show-edit',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否显示编辑按钮，只有在显示更多的情况下生效',
            'en-US':
              'Whether to display the edit button. This parameter takes effect only when more buttons are displayed'
          },
          mode: ['pc'],
          pcDemo: 'show-edit'
        },
        {
          name: 'show-more',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN': '当超过给定的按钮数量时显示更多按钮',
            'en-US': 'Show more buttons when the given number of buttons is exceeded'
          },
          mode: ['pc'],
          pcDemo: 'show-more'
        },
        {
          name: 'size',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '按钮组尺寸大小',
            'en-US': 'Set the component size'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'size',
          mfDemo: ''
        },
        {
          name: 'text-field',
          type: 'string',
          defaultValue: "'text'",
          desc: {
            'zh-CN': '按钮显示文字的字段值',
            'en-US': 'Field value of the button displayed text'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'text-value-field',
          mfDemo: ''
        },
        {
          name: 'v-model',
          type: 'Number / String',
          defaultValue: '',
          desc: {
            'zh-CN': '默认选中按钮的值',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'value-field',
          type: 'string',
          defaultValue: "'value'",
          desc: {
            'zh-CN': '按钮选中值的字段值',
            'en-US': 'Field value of the button value'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'text-value-field',
          mfDemo: ''
        }
      ],
      events: [
        {
          name: 'change',
          type: '(value: string | number) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '当选中按钮发生改变时触发',
            'en-US': 'Set the callback function triggered when the selected button is changed'
          },
          mode: ['pc'],
          pcDemo: 'change-event'
        },
        {
          name: 'edit',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '当编辑按钮被点击时触发',
            'en-US': 'Set the callback function triggered when the edit button is clicked'
          },
          mode: ['pc'],
          pcDemo: 'show-edit'
        }
      ],
      methods: [],
      slots: [
        {
          name: 'default',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '默认插槽，自定义按钮组内容',
            'en-US': 'button group content'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'slot-default',
          mfDemo: ''
        },
        {
          name: 'empty',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义数据为空时展示内容',
            'en-US': 'customize content when data is empty'
          },
          meta: {
            stable: '3.17.0'
          },
          mode: ['pc'],
          pcDemo: 'slot-empty'
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
  tip?: string // 按钮悬浮提示 v3.17.0版本增加此功能
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
