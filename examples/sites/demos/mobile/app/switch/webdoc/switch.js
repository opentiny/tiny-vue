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
    }
  ],
  apis: [
    {
      name: 'Switch', // 组件名称展示使用
      type: 'component', // API 类型
      properties: [
        {
          name: 'disabled',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>是否禁用，该属性默认为false</p>',
            'en-US': 'display different button'
          },
          demoId: 'base'
        },
        {
          name: 'false-value',
          type: 'String',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>switch 关闭时的值，该属性默认为false</p>',
            'en-US': 'display different button'
          },
          demoId: 'base'
        },
        {
          name: 'true-value',
          type: 'String',
          defaultValue: 'true',
          desc: {
            'zh-CN': '<p>switch 打开时的值，该属性默认为true</p>',
            'en-US': 'display different button'
          },
          demoId: 'base'
        },
        {
          name: 'v-model',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>绑定值</p>',
            'en-US': 'display different button'
          },
          demoId: 'base'
        },
        {
          name: 'mini',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>小尺寸</p>',
            'en-US': 'mini'
          },
          demoId: 'base'
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
          demoId: 'switch-event-change'
        }
      ]
    }
  ]
}
