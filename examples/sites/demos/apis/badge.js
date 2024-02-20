export default {
  mode: ['pc', 'mobile', 'mobile-first'],
  apis: [
    {
      name: 'badge',
      type: 'component',
      props: [
        {
          name: 'badge-class',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义标记的类名',
            'en-US': 'Class name for custom tags'
          },
          mode: ['pc'],
          pcDemo: 'badge-class'
        },
        {
          name: 'data',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '文本内容',
            'en-US': 'Set Text Content'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'hidden',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否隐藏标记',
            'en-US': 'Whether to hide badge'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'dynamic-hidden',
          mobileDemo: 'hidden',
          mfDemo: ''
        },
        {
          name: 'href',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '指定跳转的目标页面地址',
            'en-US': 'Specify the URL of the target page.'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'link',
          mobileDemo: 'href-target',
          mfDemo: ''
        },
        {
          name: 'is-dot',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否以小圆点的形式来显示标记',
            'en-US': 'Set whether to display the badge in the form of small dots'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'is-dot',
          mobileDemo: 'is-dot',
          mfDemo: ''
        },
        {
          name: 'is-mini',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>设置小尺寸，该属性默认为false</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'is-mini'
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
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'max',
          mobileDemo: 'is-mini',
          mfDemo: ''
        },
        {
          name: 'offset',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '设置标记位置的偏移量',
            'en-US': 'Set the offset of the marker position, see demo for details'
          },
          mode: ['pc'],
          pcDemo: 'offset'
        },
        {
          name: 'show-Left',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '设置是否向左展示，仅对圆点生效。',
            'en-US': 'Indicates whether to display the dots to the left. This parameter is valid only for dots.'
          },
          mode: ['mobile-first'],
          mfDemo: 'type-left'
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
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'link',
          mobileDemo: 'href-target',
          mfDemo: ''
        },
        {
          name: 'type',
          typeAnchorName: 'IPtype',
          type: 'IPtype',
          defaultValue: "'danger'",
          desc: {
            'zh-CN': '标记的类型',
            'en-US': 'Set the type of badge'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'type',
          mfDemo: ''
        },
        {
          name: 'v-model',
          type: 'String / Number',
          defaultValue: '',
          desc: {
            'zh-CN': '绑定值',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'value',
          type: 'number | string',
          defaultValue: '',
          desc: {
            'zh-CN': '相关数据条目数',
            'en-US': 'Set the number of related data entries'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'basic-usage',
          mobileDemo: 'content',
          mfDemo: ''
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
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'slot-content',
          mobileDemo: 'content',
          mfDemo: ''
        },
        {
          name: 'default',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '默认插槽，有data属性时，默认插槽不生效',
            'en-US': 'Default slot. When there is a data attribute, the default slot is not valid'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'slot-default',
          mobileDemo: 'content',
          mfDemo: ''
        }
      ]
    }
  ],
  types: [
    {
      name: 'IPtype',
      type: 'type',
      code: `type IPtype = 'primary' | 'success' | 'warning' | 'danger' | 'info'`
    }
  ]
}
