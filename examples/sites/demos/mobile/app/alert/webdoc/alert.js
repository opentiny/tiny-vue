export default {
  column: '2',
  owner: '',
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
          demoId: 'center'
        },
        {
          name: 'closable',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '警告是否可以关闭',
            'en-US': 'Set whether alarms can be disabled.'
          },
          demoId: 'custom-close'
        },
        {
          name: 'close-text',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '关闭按钮自定义文本',
            'en-US': 'Customized text of the close button'
          },
          demoId: 'custom-close'
        },
        {
          name: 'description',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '警告的提示内容',
            'en-US': 'Set the warning prompt content'
          },
          demoId: 'custom-close'
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
          demoId: 'icon'
        },
        {
          name: 'size',
          type: "'normal' | 'large'",
          defaultValue: "'normal'",
          desc: {
            'zh-CN': '警告的尺寸大小',
            'en-US': 'Set the size of the warning'
          },
          demoId: 'size'
        },
        {
          name: 'target',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '挂载容器的ref值，通过该属性可以让组件展示在对应容器的顶部',
            'en-US':
              'Mounted container reference, this property allows the component to be displayed at the top of the corresponding container.'
          },
          demoId: 'target'
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
          demoId: 'size'
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
          demoId: 'custom-close'
        }
      ],
      methods: [],
      slots: [
        {
          name: 'default',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '组件默认插槽，当 size 设置为 large 时有效，显示在 <code>description</code>下方 ',
            'en-US': 'The default slot for the component is valid when size is set to large'
          },
          demoId: 'slot-default'
        }
      ]
    }
  ],
  demos: [
    {
      demoId: 'base',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN':
          '通过 <code>type</code> 设置不同的类型 可选值：success | warning | info | error ，默认值：success。<br> 同时可通过 <code>default</code> 默认插槽自定义提示内容。',
        'en-US':
          'Set different types through <code>type</code>. The options are success | warning | info | error. The default value is success. <br/> You can customize the prompt content through the <code>default</code> slot. '
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'custom-close',
      name: {
        'zh-CN': '自定义关闭',
        'en-US': 'left right arrow'
      },
      desc: {
        'zh-CN': '<p>自定义关闭</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['custom-close.vue']
    },
    {
      demoId: 'icon',
      name: {
        'zh-CN': '自定义提示图标',
        'en-US': 'left right text'
      },
      desc: {
        'zh-CN': '<p>自定义提示图标</p>',
        'en-US': '<p>button round</p>'
      },
      codeFiles: ['icon.vue']
    },
    {
      demoId: 'center',
      name: {
        'zh-CN': '文字居中',
        'en-US': 'Center text'
      },
      desc: {
        'zh-CN': '<p>通过 <code>center</code> 属性可使文字显示居中。</p>\n',
        'en-US': '<p>You can use the <code>center</code> property to center the text. </p>\n'
      },
      codeFiles: ['center.vue']
    },
    {
      demoId: 'size',
      name: {
        'zh-CN': '不同尺寸',
        'en-US': 'size'
      },
      desc: {
        'zh-CN': '<p>不同尺寸</p>',
        'en-US': '<p>button click</p>'
      },
      codeFiles: ['size.vue']
    },
    {
      demoId: 'target',
      name: {
        'zh-CN': '指定挂载节点',
        'en-US': 'Specify display node'
      },
      desc: {
        'zh-CN': '通过<code> target </code>属性绑定要挂载的容器ref值，实现自定义展示位置',
        'en-US': 'Specify display position'
      },
      codeFiles: ['target.vue']
    },
    {
      demoId: 'slot-default',
      name: {
        'zh-CN': '内容插槽',
        'en-US': 'Content slot'
      },
      desc: {
        'zh-CN': '<p>通过默认插槽自定义提示内容。</p>',
        'en-US': '<p>Customize prompt messages through default slot.</p>'
      },
      codeFiles: ['slot-default.vue']
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
