export default {
  column: '2',
  owner: '',
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
  ],
  apis: [
    {
      name: 'Switch', // 组件名称展示使用
      type: 'component', // API 类型
      properties: [
        {
          name: 'disabled',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>是否禁用，该属性默认为false</p>',
            'en-US': 'display different button'
          },
          demoId: 'disabled'
        },
        {
          name: 'false-value',
          type: 'string',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>switch 关闭时的值，该属性默认为false</p>',
            'en-US': 'display different button'
          },
          demoId: 'base'
        },
        {
          name: 'true-value',
          type: 'string',
          defaultValue: 'true',
          desc: {
            'zh-CN': '<p>switch 打开时的值，该属性默认为true</p>',
            'en-US': 'display different button'
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
        },
        {
          name: 'mini',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>小尺寸</p>',
            'en-US': 'mini'
          },
          demoId: 'mini'
        }
      ],
      events: [
        {
          name: 'change',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>switch 状态发生变化时的回调函数,可获取新状态的值</p>',
            'en-US': 'Click'
          },
          demoId: 'event'
        }
      ]
    }
  ]
}
