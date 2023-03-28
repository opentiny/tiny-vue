export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'disabled',
      name: {
        'zh-CN': '是否禁用',
        'en-US': 'button type',
      },
      desc: {
        'zh-CN': '<p>是否禁用</p>',
        'en-US': '<p>button type</p>',
      },
      codeFiles: ['disabled.vue'],
    },
    {
      demoId: 'switch-event-change',
      name: {
        'zh-CN': '值改变事件',
        'en-US': 'button round',
      },
      desc: {
        'zh-CN': '<p>值改变事件</p>',
        'en-US': '<p>button round</p>',
      },
      codeFiles: ['switch-event-change.vue'],
    },
    {
      demoId: 'scenario',
      name: {
        'zh-CN': '应用场景',
        'en-US': 'events',
      },
      desc: {
        'zh-CN': '<p>应用场景</p>',
        'en-US': '<p>bbutton click</p>',
      },
      codeFiles: ['scenario.vue'],
    },
    {
      demoId: 'true-false-value',
      name: {
        'zh-CN': '自定义打开关闭的值',
        'en-US': 'true-false-value',
      },
      desc: {
        'zh-CN': '<p>自定义打开关闭的值</p>',
        'en-US': '<p>bbutton click</p>',
      },
      codeFiles: ['true-false-value.vue'],
    },
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
            'en-US': 'display different button',
          },
          demoId: 'disabled',
        },
        {
          name: 'false-value',
          type: 'String',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>switch 关闭时的值，该属性默认为false</p>',
            'en-US': 'display different button',
          },
          demoId: 'true-false-value',
        },
        {
          name: 'true-value',
          type: 'String',
          defaultValue: 'true',
          desc: {
            'zh-CN': '<p>switch 打开时的值，该属性默认为true</p>',
            'en-US': 'display different button',
          },
          demoId: 'true-false-value',
        },
        {
          name: 'value',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>绑定值</p>',
            'en-US': 'display different button',
          },
          demoId: 'switch-event-change',
        },
      ],
      events: [
        {
          name: 'change',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>switch 状态发生变化时的回调函数,可获取新状态的值</p>',
            'en-US': 'Click',
          },
          demoId: 'switch-event-change',
        },
      ],
    },
  ],
}
