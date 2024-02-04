export default {
  mode: ['pc', 'mobile', 'mobile-first'],
  apis: [
    {
      name: 'alert',
      type: 'component',
      props: [
        {
          name: 'center',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '文字是否居中',
            'en-US': 'Whether the text is centered'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'center',
          mobileDemo: 'center',
          mfDemo: ''
        },
        {
          name: 'closable',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '警告是否可以关闭',
            'en-US': 'Set whether alarms can be disabled.'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'custom-close',
          mobileDemo: 'custom-close',
          mfDemo: ''
        },
        {
          name: 'close-text',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '关闭按钮自定义文本',
            'en-US': 'Customized text of the close button'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'custom-close',
          mobileDemo: 'custom-close',
          mfDemo: ''
        },
        {
          name: 'custom-class',
          type: 'string',
          defaultValue: "'customClass'",
          desc: {
            'zh-CN': '自定义类名',
            'en-US': 'Customization class name'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'custom-class',
          mfDemo: ''
        },
        {
          name: 'description',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '警告的提示内容',
            'en-US': 'Set the warning prompt content'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'basic-usage',
          mobileDemo: 'custom-close',
          mfDemo: ''
        },
        {
          name: 'icon',
          type: 'Component',
          defaultValue: '',
          desc: {
            'zh-CN': '传入图标组件自定义警告的图标，默认会根据 type 值自动使用对应图标',
            'en-US':
              'The icon for the custom warning of the incoming icon component will be automatically used based on the type value by default'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'icon',
          mobileDemo: 'icon',
          mfDemo: ''
        },
        {
          name: 'scrolling',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '是否开启描述文字在鼠标 hover 时滚动显示的动画。',
            'en-US':
              'Indicates whether to enable the animation of the description text scrolling when the mouse hovers.'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'show-foldable',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '展示带标题可折叠样式。',
            'en-US': 'Shows collapsible styles with titles.'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'show-icon',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否显示图标',
            'en-US': 'Display icon'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'show-icon',
          mfDemo: ''
        },
        {
          name: 'single-line',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '描述内容是否一行显示，超出显示...，默认值为 false。',
            'en-US': 'Indicates whether the description is displayed in one line. The default value is false.'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'size',
          type: "'normal' | 'large'",
          defaultValue: "'normal'",
          desc: {
            'zh-CN': '警告的尺寸大小',
            'en-US': 'Set the size of the warning'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'size',
          mobileDemo: 'size',
          mfDemo: ''
        },
        {
          name: 'target',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '挂载容器的ref值，通过该属性可以让组件展示在对应容器的顶部',
            'en-US':
              'Mounted container reference, this property allows the component to be displayed at the top of the corresponding container.'
          },
          mode: ['mobile'],
          mobileDemo: 'target'
        },
        {
          name: 'title',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '警告的标题，在 size 为 large 时有效，默认会根据 type 自动设置',
            'en-US':
              'Set the warning title. This parameter is valid only when size is set to large. By default, the alarm title is automatically set based on type.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'title',
          mfDemo: ''
        },
        {
          name: 'type',
          typeAnchorName: 'IType',
          type: 'IType',
          defaultValue: "'info'",
          desc: {
            'zh-CN': '警告的类型',
            'en-US': 'Set the alarm type'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'basic-usage',
          mobileDemo: 'size',
          mfDemo: ''
        }
      ],
      events: [
        {
          name: 'close',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '关闭 alert 时触发的事件',
            'en-US': 'Event triggered when the alert function is disabled'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'custom-close',
          mobileDemo: 'custom-close',
          mfDemo: ''
        },
        {
          name: 'handleHeaderClick',
          type: 'Function()',
          defaultValue: '',
          desc: {
            'zh-CN': '标题点击事件，设置 show-foldable 为 true 时有效。',
            'en-US': 'Title click event. This parameter is valid only when show-foldable is set to true.'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        }
      ],
      methods: [
        {
          name: 'close',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '隐藏组件',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'handleHeaderClick',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '标题点击事件，设置 show-foldable 为 true 时有效',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        }
      ],
      slots: [
        {
          name: 'close',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义关闭内容，当 closable 属性为 false 时有效',
            'en-US': ''
          },
          mode: ['pc'],
          pcDemo: 'custom-close'
        },
        {
          name: 'default',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '组件默认插槽，当 size 设置为 large 后有效',
            'en-US': 'The default slot for the component is valid when size is set to large'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'slot-default',
          mobileDemo: 'slot-default',
          mfDemo: ''
        },
        {
          name: 'description',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '提示内容',
            'en-US': 'Prompt Content'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'title',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '标题的内容，当 size 设置为 large 后有效',
            'en-US': 'The content of the title is valid when size is set to large'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'title',
          mfDemo: ''
        }
      ]
    }
  ],
  types: [
    {
      name: 'IType',
      type: 'type',
      code: `
type IType = 'success' | 'warning' | 'info' | 'error' | 'simple'
`
    }
  ]
}
