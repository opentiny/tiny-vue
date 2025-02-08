export default {
  column: '2',
  owner: '',
  apis: [
    {
      name: 'button',
      type: 'component',
      props: [
        {
          name: 'disabled',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否被禁用按钮',
            'en-US': 'Sets whether the button is disabled'
          },
          demoId: 'disabled'
        },
        {
          name: 'icon',
          type: 'Component',
          defaultValue: '',
          desc: {
            'zh-CN': '按钮左侧展示的图标，接收为<code>Icon</code>组件',
            'en-US': 'The icon displayed by the button is received as an <code>Icon</code> component'
          },
          demoId: 'icon'
        },
        {
          name: 'loading',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否加载中状态',
            'en-US': 'Loading status'
          },
          demoId: 'loading'
        },
        {
          name: 'reset-time',
          type: 'number',
          defaultValue: '1000',
          desc: {
            'zh-CN': '设置按钮禁用时间，防止重复提交，单位毫秒',
            'en-US': 'Set the button disable time, in milliseconds, to prevent repeated submission'
          },
          demoId: 'reset-time'
        },
        {
          name: 'size',
          type: "'large' | 'medium' | 'small' | 'mini'",
          defaultValue: '',
          desc: {
            'zh-CN': '定义按钮尺寸',
            'en-US': 'Define the button size'
          },
          demoId: 'size'
        },
        {
          name: 'text',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '按钮显示的文本',
            'en-US': 'Set the text displayed by the button'
          },
          demoId: 'base'
        },
        {
          name: 'type',
          typeAnchorName: 'IButtonType',
          type: 'IButtonType',
          defaultValue: "'default'",
          desc: {
            'zh-CN': '展示按钮不同的状态，设置为<code>text</code>则展示为文本按钮',
            'en-US': 'Display different states of buttons, set to <code>text</code> to display as text buttons'
          },
          demoId: 'base'
        }
      ],
      events: [
        {
          name: 'click',
          type: '(event: PointEvent) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '当按钮被点击时触发的回调函数',
            'en-US': 'Sets the callback function triggered when a button is clicked'
          },
          demoId: 'event'
        }
      ],
      methods: [],
      slots: [
        {
          name: 'default',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '默认插槽，自定义按钮展示内容',
            'en-US': 'Default slot'
          },
          demoId: ''
        }
      ]
    }
  ],
  demos: [
    {
      demoId: 'base',
      name: {
        'zh-CN': '基础用法',
        'en-US': 'base'
      },
      desc: {
        'zh-CN': '<p>基础用法</p>',
        'en-US': '<p>base</p>'
      },
      codeFiles: ['base.vue']
    },
    {
      demoId: 'disabled',
      name: {
        'zh-CN': '不可用',
        'en-US': 'disabled'
      },
      desc: {
        'zh-CN': '<p>不可用</p>',
        'en-US': '<p>disabled</p>'
      },
      codeFiles: ['disabled.vue']
    },
    {
      demoId: 'loading',
      name: {
        'zh-CN': '加载中',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>加载中</p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['loading.vue']
    },
    {
      demoId: 'size',
      name: {
        'zh-CN': '不同尺寸',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>不同尺寸</p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['size.vue']
    },
    {
      demoId: 'icon',
      name: {
        'zh-CN': '图标',
        'en-US': 'icon'
      },
      desc: {
        'zh-CN': '<p>图标</p>',
        'en-US': '<p>icon</p>'
      },
      codeFiles: ['icon.vue']
    },
    {
      demoId: 'reset-time',
      name: {
        'zh-CN': '重置时间',
        'en-US': 'reset time'
      },
      desc: {
        'zh-CN': '<p>重置时间</p>',
        'en-US': '<p>reset-time</p>'
      },
      codeFiles: ['reset-time.vue']
    },
    {
      demoId: 'event',
      name: {
        'zh-CN': '点击事件',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>点击事件</p>',
        'en-US': '<p>button click</p>'
      },
      codeFiles: ['event.vue']
    }
  ],
  types: [
    {
      name: 'IButtonType',
      type: 'interface',
      code: `type IButtonType = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text'`
    }
  ]
}
