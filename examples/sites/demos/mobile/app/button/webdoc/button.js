export default {
  column: '2',
  owner: '',
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
  apis: [
    {
      name: 'Button', // 组件名称展示使用
      type: 'component', // API 类型
      properties: [
        {
          name: 'disabled',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>设置按钮是否被禁用,该属性默认为false</p>',
            'en-US': 'display different button'
          },
          demoId: 'disabled'
        },
        {
          name: 'icon',
          type: 'Object',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>svg 图片对象</p>',
            'en-US': 'display different button'
          },
          demoId: 'base'
        },
        {
          name: 'loading',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>svg 是否加载中状态，该属性默认为false</p>',
            'en-US': 'display different button'
          },
          demoId: 'loading'
        },
        {
          name: 'reset-time',
          type: 'Number',
          defaultValue: '0',
          desc: {
            'zh-CN': '<p>设置按钮禁用时间，防止重复提交，单位毫秒,该属性默认为1000</p>',
            'en-US': 'display different button'
          },
          demoId: 'base'
        },
        {
          name: 'size',
          type: 'String',
          defaultValue: '"large" | "medium" | "small" | "mini"',
          desc: {
            'zh-CN': '<p>尺寸</p>',
            'en-US': 'display different button'
          },
          demoId: 'size'
        },
        {
          name: 'type',
          type: '"primary" | "secondary" | "text" |"icon" | "danger"',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>类型</p>',
            'en-US': 'display different button'
          },
          demoId: 'base'
        },
        {
          name: 'text',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置按钮显示的文本，可配置国际化 </p>',
            'en-US': 'display different button'
          },
          demoId: 'base'
        }
      ],
      events: [
        {
          name: 'click',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置当按钮被点击时触发的回调函数。</p>',
            'en-US': 'Click'
          },
          demoId: 'event'
        }
      ],
      slots: [
        {
          name: 'default',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>组件默认插槽</p>',
            'en-US': 'Click'
          },
          demoId: ''
        }
      ]
    }
  ]
}
