export default {
  column: '2',
  owner: '',
  apis: [
    {
      name: 'switch',
      type: 'component',
      props: [
        {
          name: 'disabled',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否禁用',
            'en-US': 'Disable'
          },
          demoId: 'disabled'
        },
        {
          name: 'false-value',
          type: 'boolean | string | number',
          defaultValue: 'false',
          desc: {
            'zh-CN': 'switch 关闭时的值',
            'en-US': 'Value when switch is disabled'
          },
          demoId: 'base'
        },
        {
          name: 'mini',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '设置是否显示为 mini 模式，mini 模式下不会显示 slot 的内容',
            'en-US': 'Sets whether to display in mini mode. In mini mode, the content of the slot is not displayed'
          },
          demoId: 'mini'
        },
        {
          name: 'true-value',
          type: 'boolean | string | number',
          defaultValue: 'true',
          desc: {
            'zh-CN': 'switch 打开时的值',
            'en-US': 'Value when switch is enabled'
          },
          demoId: 'base'
        },
        {
          name: 'v-model',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>绑定值</p>',
            'en-US': 'display different button'
          },
          demoId: 'base'
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
          demoId: 'event'
        }
      ],
      methods: [],
      slots: []
    }
  ],
  demos: [
    {
      demoId: 'base',
      name: {
        'zh-CN': '基础用法',
        'en-US': 'button type'
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
        'zh-CN': '状态不可用',
        'en-US': 'disabled'
      },
      desc: {
        'zh-CN': '<p>状态不可用</p>',
        'en-US': '<p>disabled</p>'
      },
      codeFiles: ['disabled.vue']
    },
    {
      demoId: 'loading',
      name: {
        'zh-CN': '加载状态',
        'en-US': 'loading'
      },
      desc: {
        'zh-CN': '<p>加载中状态</p>',
        'en-US': '<p>loading</p>'
      },
      codeFiles: ['loading.vue']
    },
    {
      demoId: 'mini',
      name: {
        'zh-CN': '小尺寸',
        'en-US': 'mini'
      },
      desc: {
        'zh-CN': '<p>小尺寸</p>',
        'en-US': '<p>mini</p>'
      },
      codeFiles: ['mini.vue']
    },
    {
      demoId: 'event',
      name: {
        'zh-CN': '开关状态改变事件',
        'en-US': 'switch status event'
      },
      desc: {
        'zh-CN': '<p>开关的状态改变事件</p>',
        'en-US': '<p>switch status event</p>'
      },
      codeFiles: ['event.vue']
    }
  ]
}
