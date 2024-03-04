export default {
  mode: ['pc', 'mobile', 'mobile-first'],
  apis: [
    {
      name: 'switch',
      type: 'component',
      props: [
        {
          name: 'before-change',
          type: '(done: () => void) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '开关值变化前置处理',
            'en-US': 'Pre processing of switch value changes'
          },
          mode: ['pc'],
          pcDemo: 'before-change'
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
          pcDemo: 'dynamic-disable',
          mobileDemo: 'disabled',
          mfDemo: ''
        },
        {
          name: 'false-value',
          type: 'boolean | string | number',
          defaultValue: 'false',
          desc: {
            'zh-CN': 'switch 关闭时的值',
            'en-US': 'Value when switch is disabled'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'custom-true-false-value',
          mobileDemo: 'base',
          mfDemo: ''
        },
        {
          name: 'mini',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '设置是否显示为 mini 模式，mini 模式下不会显示 slot 的内容',
            'en-US': 'Sets whether to display in mini mode. In mini mode, the content of the slot is not displayed'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'mini-mode',
          mobileDemo: 'mini',
          mfDemo: ''
        },
        {
          name: 'modelValue / v-model',
          type: 'boolean | string | number',
          defaultValue: '',
          desc: {
            'zh-CN': '开关绑定值',
            'en-US': 'Switch bind value'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'show-text',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': 'switch 是否显示内容里面的文字',
            'en-US': 'Switch whether to display the text in the content'
          },
          mode: ['pc'],
          pcDemo: 'custom-open-close'
        },
        {
          name: 'size',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '定义开关尺寸',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'true-value',
          type: 'boolean | string | number',
          defaultValue: 'true',
          desc: {
            'zh-CN': 'switch 打开时的值',
            'en-US': 'Value when switch is enabled'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'custom-true-false-value',
          mobileDemo: 'base',
          mfDemo: ''
        },
        {
          name: 'types',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '展示开关不同的状态',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'v-model',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>绑定值</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile', 'mobile-first'],
          mobileDemo: 'base',
          mfDemo: ''
        }
      ],
      events: [
        {
          name: 'change',
          type: '(value: boolean | string | number) => void',
          defaultValue: '',
          desc: {
            'zh-CN': 'switch 状态发生变化时的回调函数',
            'en-US': 'Callback function for switch changes'
          },
          mode: ['pc', 'mobile'],
          pcDemo: 'event-change',
          mobileDemo: 'event'
        },
        {
          name: 'enent',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': 'switch发生变化的回调函数',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        }
      ],
      methods: [],
      slots: [
        {
          name: 'close',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '关闭内容，当 show-text 为 true 时有效',
            'en-US': 'Close Content'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'custom-open-close',
          mfDemo: ''
        },
        {
          name: 'open',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '开启内容，当 show-text 为 true 时有效',
            'en-US': 'Enable Content'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'custom-open-close',
          mfDemo: ''
        }
      ]
    }
  ]
}
