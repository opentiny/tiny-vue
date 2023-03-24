export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'onlytext',
      name: {
        'zh-CN': '纯文本',
        'en-US': 'button type',
      },
      desc: {
        'zh-CN': '<p>纯文本标签</p>',
        'en-US': '<p>button type</p>',
      },
      codeFiles: ['onlytext.vue'],
    },
    {
      demoId: 'active-inactive-color',
      name: {
        'zh-CN': '自定义颜色',
        'en-US': 'button round',
      },
      desc: {
        'zh-CN': '<p>自定义颜色</p>',
        'en-US': '<p>button round</p>',
      },
      codeFiles: ['active-inactive-color.vue'],
    },
    {
      demoId: 'badge',
      name: {
        'zh-CN': '徽标提示',
        'en-US': 'events',
      },
      desc: {
        'zh-CN': '<p>徽标提示<p>',
        'en-US': '<p>bbutton click</p>',
      },
      codeFiles: ['badge.vue'],
    },
    {
      demoId: 'border',
      name: {
        'zh-CN': '无边框',
        'en-US': 'events',
      },
      desc: {
        'zh-CN': '<p>无边框<p>',
        'en-US': '<p>bbutton click</p>',
      },
      codeFiles: ['border.vue'],
    },
    {
      demoId: 'event-change',
      name: {
        'zh-CN': '切换事件',
        'en-US': 'events',
      },
      desc: {
        'zh-CN': '<p>切换事件<p>',
        'en-US': '<p>bbutton click</p>',
      },
      codeFiles: ['event-change.vue'],
    },
    {
      demoId: 'route',
      name: {
        'zh-CN': '路由跳转',
        'en-US': 'events',
      },
      desc: {
        'zh-CN': '<p>路由跳转<p>',
        'en-US': '<p>bbutton click</p>',
      },
      codeFiles: ['route.vue'],
    },
    {
      demoId: 'slot-icon',
      name: {
        'zh-CN': '自定义图标',
        'en-US': 'events',
      },
      desc: {
        'zh-CN': '<p>自定义图标<p>',
        'en-US': '<p>bbutton click</p>',
      },
      codeFiles: ['slot-icon.vue'],
    },
  ],
  apis: [
    {
      name: 'Tabbar', // 组件名称展示使用
      type: 'component', // API 类型
      properties: [
        {
          name: 'active-color',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>选中标签的颜色</p>',
            'en-US': 'display different button',
          },
          demoId: 'active-inactive-color',
        },
        {
          name: 'border',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>是否显示外边框，该属性默认为true</p>',
            'en-US': 'display different button',
          },
          demoId: 'border',
        },
        {
          name: 'fixed',
          type: 'Boolen',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>是否固定在底部，该属性默认为true</p>',
            'en-US': 'display different button',
          },
          demoId: 'border',
        },
        {
          name: 'inactive-color',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>未选中标签的颜色</p>',
            'en-US': 'display different button',
          },
          demoId: 'active-inactive-color',
        },
        {
          name: 'route',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>是否开启路由模式，该属性默认为false</p>',
            'en-US': 'display different button',
          },
          demoId: 'route',
        },
        {
          name: 'z-index',
          type: 'Number | String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>元素 z-index</p>',
            'en-US': 'display different button',
          },
          demoId: 'border',
        },
      ],
      events: [
        {
          name: 'change',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>切换标签时触发,value: 当前选中标签的名称或索引值</p>',
            'en-US': 'Click',
          },
          demoId: 'event-change',
        },
      ],
      slot: [
        {
          name: 'icon',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>自定义图标</p>',
            'en-US': 'Click',
          },
          demoId: 'slot-icon',
        },
      ],
    },
  ],
}
