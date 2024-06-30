export default {
  mode: ['pc'],
  apis: [
    {
      name: 'ip-address',
      type: 'component',
      props: [
        {
          name: 'delimiter',
          type: 'Component',
          defaultValue: '',
          desc: {
            'zh-CN': '设置 ip 段之间的分隔符，默认图标为 IconDotIpv4 ',
            'en-US': 'Set the separator between IP segments, default icon is icon-dot-ipv4'
          },
          mode: ['pc'],
          pcDemo: 'delimiter'
        },
        {
          name: 'disabled',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '设置文本的禁用属性',
            'en-US': 'Set the disabled attribute of the text'
          },
          mode: ['pc'],
          pcDemo: 'disabled'
        },
        {
          name: 'readonly',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '设置文本的只读属性',
            'en-US': 'Set the read-only attribute of the text'
          },
          mode: ['pc'],
          pcDemo: 'readonly'
        },
        {
          name: 'size',
          type: "'medium' | 'small' | 'mini'",
          defaultValue: '',
          desc: {
            'zh-CN': '地址输入框大小',
            'en-US': 'Address Input Box Size'
          },
          mode: ['pc'],
          pcDemo: 'size'
        },
        {
          name: 'type',
          type: "'IPv4' | 'IPv6'",
          defaultValue: "'IPv4'",
          desc: {
            'zh-CN': '设置 ip 地址输入框的类型',
            'en-US': 'Sets the type attribute in the IpAddress box'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'v-model',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '设置地址输入框的绑定值',
            'en-US': 'Set the binding value of the address input box'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        }
      ],
      events: [
        {
          name: 'blur',
          type: '(value: string, index: number) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '文本框失去焦点时触发事件',
            'en-US': 'The event is triggered when the text box loses the focus'
          },
          mode: ['pc'],
          pcDemo: 'blur'
        },
        {
          name: 'change',
          type: '(value: string) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '文本框内容改变后事件',
            'en-US': 'Event after changing the content of the text box'
          },
          mode: ['pc'],
          pcDemo: 'change'
        },
        {
          name: 'focus',
          type: '(value: string, index: number) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '文本框获取焦点时触发事件',
            'en-US': 'This event is triggered when a text box obtains the focus'
          },
          mode: ['pc'],
          pcDemo: 'focus'
        },
        {
          name: 'input',
          type: '(event: InputEvent) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '文本框内容输入时触发事件',
            'en-US': 'Trigger event when entering text box content'
          },
          mode: ['pc'],
          pcDemo: 'input'
        },
        {
          name: 'select',
          type: '(value: string, index: number) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '文本框内容选中时触发事件',
            'en-US': 'Trigger event when text box content is selected'
          },
          mode: ['pc'],
          pcDemo: 'select'
        }
      ],
      methods: [],
      slots: [
        {
          name: 'default',
          defaultValue: '',
          desc: {
            'zh-CN': '默认插槽，自定义 ip 段之间的分隔符',
            'en-US': 'Separator between IP address segments'
          },
          mode: ['pc'],
          pcDemo: 'delimiter'
        }
      ]
    }
  ]
}
