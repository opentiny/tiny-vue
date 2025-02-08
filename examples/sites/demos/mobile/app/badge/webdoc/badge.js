export default {
  column: '2',
  owner: '',
  apis: [
    {
      name: 'badge',
      type: 'component',
      props: [
        {
          name: 'hidden',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否隐藏标记',
            'en-US': 'Whether to hide badge'
          },
          demoId: 'hidden'
        },
        {
          name: 'href',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '指定跳转的目标页面地址',
            'en-US': 'Specify the URL of the target page.'
          },
          demoId: 'href-target'
        },
        {
          name: 'is-dot',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否以小圆点的形式来显示标记',
            'en-US': 'Set whether to display the badge in the form of small dots'
          },
          demoId: 'is-dot'
        },
        {
          name: 'is-mini',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>设置小尺寸，该属性默认为false</p>',
            'en-US': 'display different button'
          },
          demoId: 'is-mini'
        },
        {
          name: 'max',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN':
              "指定徽章显示的最大值，如果实际获取的徽章值超过该最大值，则以最大值后接一个 '+' 的形式显示徽章数，要求 value 是 number 类型",
            'en-US':
              'Specifies the maximum number of badges to be displayed. If the actual badge value exceeds the maximum value, the number of badges is displayed in the format of "+". The value must be of the number type.'
          },
          demoId: 'is-mini'
        },
        {
          name: 'target',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '点击标记时链接到目标页面的跳转方式，仅在 href 属性存在时使用',
            'en-US':
              'Set the jump method for linking to the target page when clicking on the tag, only used when the href attribute exists'
          },
          demoId: 'href-target'
        },
        {
          name: 'value',
          type: 'number | string',
          defaultValue: '',
          desc: {
            'zh-CN': '相关数据条目数',
            'en-US': 'Set the number of related data entries'
          },
          demoId: 'content'
        }
      ],
      events: [],
      methods: [],
      slots: [
        {
          name: 'content',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '消息提示内容',
            'en-US': 'Message Content'
          },
          demoId: 'content'
        },
        {
          name: 'default',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '默认插槽，有data属性时，默认插槽不生效',
            'en-US': 'Default slot. When there is a data attribute, the default slot is not valid'
          },
          demoId: 'content'
        }
      ]
    }
  ],
  demos: [
    {
      demoId: 'content',
      name: {
        'zh-CN': '自定义提示内容',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN': '<p>自定义提示内容</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['content.vue']
    },
    {
      demoId: 'hidden',
      name: {
        'zh-CN': '隐藏徽标',
        'en-US': 'button round'
      },
      desc: {
        'zh-CN': '<p>隐藏徽标</p>',
        'en-US': '<p>button round</p>'
      },
      codeFiles: ['hidden.vue']
    },
    {
      demoId: 'href-target',
      name: {
        'zh-CN': '跳转链接',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>跳转链接<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['href-target.vue']
    },
    {
      demoId: 'is-dot',
      name: {
        'zh-CN': '小圆点标记',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>小圆点标记<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['is-dot.vue']
    },
    {
      demoId: 'is-mini',
      name: {
        'zh-CN': '小尺寸',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>小尺寸<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['is-mini.vue']
    },
    {
      demoId: 'type',
      name: {
        'zh-CN': '不同主题',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>不同主题<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['type.vue']
    }
  ],
  types: []
}
