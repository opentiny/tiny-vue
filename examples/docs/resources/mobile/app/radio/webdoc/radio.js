export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'base',
      name: {
        'zh-CN': '基础展示',
        'en-US': 'button type',
      },
      desc: {
        'zh-CN': '<p>基础展示</p>',
        'en-US': '<p>button type</p>',
      },
      codeFiles: ['base.vue'],
    },
    {
      demoId: 'border',
      name: {
        'zh-CN': '显示边框',
        'en-US': 'button type',
      },
      desc: {
        'zh-CN': '<p>显示边框</p>',
        'en-US': '<p>button type</p>',
      },
      codeFiles: ['border.vue'],
    },
    {
      demoId: 'disabled',
      name: {
        'zh-CN': '是否禁用',
        'en-US': 'button round',
      },
      desc: {
        'zh-CN': '<p>是否禁用</p>',
        'en-US': '<p>button round</p>',
      },
      codeFiles: ['disabled.vue'],
    },
    {
      demoId: 'event-change',
      name: {
        'zh-CN': '值改变事件',
        'en-US': 'events',
      },
      desc: {
        'zh-CN': '<p>值改变事件</p>',
        'en-US': '<p>bbutton click</p>',
      },
      codeFiles: ['event-change.vue'],
    },
  ],
  apis: [
    {
      name: 'Radio', // 组件名称展示使用
      type: 'component', // API 类型
      properties: [
        {
          name: 'disabled',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>是否禁用</p>',
            'en-US': 'display different button',
          },
          demoId: 'disabled',
        },
        {
          name: 'border',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>是否显示边框</p>',
            'en-US': 'display different button',
          },
          demoId: 'border',
        },
        {
          name: 'label',
          type: 'Object | String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>Radio 的 value,该属性默认为{}</p>',
            'en-US': 'display different button',
          },
          demoId: 'event-change',
        },
        {
          name: 'name',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>原生 name 属性</p>',
            'en-US': 'display different button',
          },
          demoId: 'disabled',
        },
        {
          name: 'text',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>文本</p>',
            'en-US': 'display different button',
          },
          demoId: 'disabled',
        },
        {
          name: 'value',
          type: 'Object | String',
          defaultValue: '{}',
          desc: {
            'zh-CN': '<p>绑定值，该属性默认为{}</p>',
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
            'zh-CN': '<p>绑定值变化时触发的事件,可获取changeValue</p>',
            'en-US': 'Click',
          },
          demoId: 'event-change',
        },
      ],
      slots: [
        {
          name: 'default',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>Radio的内容</p>',
            'en-US': 'Click',
          },
          demoId: '',
        },
      ],
    },
  ],
}
