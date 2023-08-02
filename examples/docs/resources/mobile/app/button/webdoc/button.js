export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'event-click',
      name: {
        'zh-CN': '点击事件',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN': '<p>单击事件</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['event-click.vue']
    },
    {
      demoId: 'icon',
      name: {
        'zh-CN': '图标按钮',
        'en-US': 'button round'
      },
      desc: {
        'zh-CN': '<p>图标按钮</p>',
        'en-US': '<p>button round</p>'
      },
      codeFiles: ['icon.vue']
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
      demoId: 'native-type',
      name: {
        'zh-CN': '按钮属性',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>通过<code>native-type</code>属性可以设置原生 type 属性，该属性的可选值为 button / submit / reset</p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['native-type.vue']
    },
    {
      demoId: 'plain',
      name: {
        'zh-CN': '朴素按钮',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>朴素按钮</p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['plain.vue']
    },
    {
      demoId: 'reset-time',
      name: {
        'zh-CN': '禁用时间',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过<code>reset-time</code>属性可以设置按钮禁用时间，防止重复提交，单位毫秒,该属性默认为 1000</p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['reset-time.vue']
    },
    {
      demoId: 'round',
      name: {
        'zh-CN': '圆角按钮',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>圆角按钮</p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['round.vue']
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
      demoId: 'text',
      name: {
        'zh-CN': '文字按钮',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>文字按钮</p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['text.vue']
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
          demoId: ''
        },
        {
          name: 'icon',
          type: 'Object',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>svg 图片对象</p>',
            'en-US': 'display different button'
          },
          demoId: 'icon'
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
          name: 'native-type',
          type: 'String',
          defaultValue: 'button',
          desc: {
            'zh-CN': '<p>原生 type 属性,该属性默认为button</p>',
            'en-US': 'display different button'
          },
          demoId: 'native-type'
        },
        {
          name: 'plain',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>是否朴素按钮,该属性默认为false</p>',
            'en-US': 'display different button'
          },
          demoId: 'plain'
        },
        {
          name: 'reset-time',
          type: 'Number',
          defaultValue: '1000',
          desc: {
            'zh-CN': '<p>设置按钮禁用时间，防止重复提交，单位毫秒,该属性默认为1000</p>',
            'en-US': 'display different button'
          },
          demoId: 'reset-time'
        },
        {
          name: 'round',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>是否圆角按钮，该属性默认为false</p>',
            'en-US': 'display different button'
          },
          demoId: 'round'
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
          type: '"primary" | "success" | "warning" |"info" | "danger"',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>类型</p>',
            'en-US': 'display different button'
          },
          demoId: 'icon'
        },
        {
          name: 'text',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置按钮显示的文本，可配置国际化 </p>',
            'en-US': 'display different button'
          },
          demoId: 'icon'
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
          demoId: 'event-click'
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
