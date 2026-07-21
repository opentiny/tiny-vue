export default {
  mode: ['pc', 'mobile-first'],
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
            'en-US': 'Whether text content is center aligned'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'center',
          mfDemo: ''
        },
        {
          name: 'closable',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '警告是否可以关闭',
            'en-US': 'Whether the alert can be closed'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'custom-close',
          mfDemo: ''
        },
        {
          name: 'close-text',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '关闭按钮自定义文本',
            'en-US': 'Custom text for the close button'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'custom-close',
          mfDemo: ''
        },
        {
          name: 'custom-class',
          type: 'string',
          defaultValue: "'customClass'",
          desc: {
            'zh-CN': '自定义类名',
            'en-US': 'Custom CSS class name'
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
            'en-US': 'Description text for the alert message'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'icon',
          type: 'Component',
          defaultValue: '',
          desc: {
            'zh-CN': '传入图标组件自定义警告的图标，默认会根据 type 值自动使用对应图标',
            'en-US': 'Custom icon component. By default, corresponding icon is automatically used based on type value'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'icon',
          mfDemo: ''
        },
        {
          name: 'scrolling',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '是否开启描述文字在鼠标 hover 时滚动显示的动画。',
            'en-US': 'Whether to enable scrolling animation for description text on mouse hover'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'show-foldable',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '展示带标题可折叠样式。',
            'en-US': 'Show collapsible style with title'
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
            'en-US': 'Whether to show icon'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'show-icon',
          mfDemo: ''
        },
        {
          name: 'show-title',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否显示标题，在 size 为 large 时有效',
            'en-US': 'Whether to show title Only valid when size is large'
          },
          mode: ['pc'],
          pcDemo: 'title',
          meta: {
            stable: '3.21.0'
          }
        },
        {
          name: 'single-line',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '描述内容是否一行显示，超出显示...，默认值为 false。',
            'en-US': 'Whether description content displays in single line with ellipsis. Default is false'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'size',
          typeAnchorName: 'ISize',
          type: 'ISize',
          defaultValue: "'normal'",
          desc: {
            'zh-CN': '警告的尺寸大小',
            'en-US': 'Size of the alert component'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'size',
          mfDemo: 'size'
        },
        {
          name: 'title',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '警告的标题，在 size 为 large 时有效，默认会根据 type 自动设置',
            'en-US': 'Alert title. Only valid when size is large. Automatically set based on type by default'
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
            'en-US': 'Type of the alert'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
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
            'en-US': 'Triggered when alert is closed'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'custom-close',
          mfDemo: ''
        },
        {
          name: 'handleHeaderClick',
          type: 'Function()',
          defaultValue: '',
          desc: {
            'zh-CN': '标题点击事件，设置 show-foldable 为 true 时有效。',
            'en-US': 'Title click event Only valid when show-foldable is true'
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
            'zh-CN': '组件默认插槽，当 size 设置为 large 时有效，显示在 <code>description</code>下方 ',
            'en-US': 'Default slot for component content Only valid when size is large'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'slot-default',
          mfDemo: ''
        },
        {
          name: 'description',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '提示内容插槽',
            'en-US': 'Description content slot'
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
            'en-US': 'Title content slot Only valid when size is large'
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
    },
    {
      name: 'ISize',
      type: 'type',
      code: `
type ISize = 'small' | 'medium' | 'normal' | 'large'
`
    }
  ]
}
