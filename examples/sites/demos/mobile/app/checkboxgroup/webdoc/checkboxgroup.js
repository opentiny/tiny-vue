export default {
  column: '2',
  owner: '',
  apis: [
    {
      name: 'CheckboxGroup',
      type: 'component',
      props: [
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
          name: 'max',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>可被勾选的 checkbox 的最大数量</p>',
            'en-US': 'display different button'
          },
          demoId: 'min-max'
        },
        {
          name: 'min',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>可被勾选的 checkbox 的最小数量</p>',
            'en-US': 'display different button'
          },
          demoId: 'min-max'
        },
        {
          name: 'value / v-model',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>绑定值</p>',
            'en-US': 'display different button'
          },
          demoId: 'dedisabled'
        },
        {
          name: 'vertical',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>是否竖向模式</p>',
            'en-US': 'display different button'
          },
          demoId: 'vertical'
        }
      ],
      events: [
        {
          name: 'change',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>当绑定值变化时触发的事件,该事件可获取更新后的值</p>',
            'en-US': 'Click'
          },
          demoId: 'event-change'
        }
      ],
      methods: [],
      slots: []
    }
  ],
  demos: [
    {
      demoId: 'disabled',
      name: {
        'zh-CN': '是否禁用',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN': '<p>是否禁用</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['disabled.vue']
    },
    {
      demoId: 'event-change',
      name: {
        'zh-CN': '事件',
        'en-US': 'button round'
      },
      desc: {
        'zh-CN': '<p>事件</p>',
        'en-US': '<p>button round</p>'
      },
      codeFiles: ['event-change.vue']
    },
    {
      demoId: 'min-max',
      name: {
        'zh-CN': '可选数量',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可选数量</p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['min-max.vue']
    },
    {
      demoId: 'vertical',
      name: {
        'zh-CN': '垂直排列',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>垂直排列</p>'
      },
      codeFiles: ['vertical.vue']
    }
  ]
}
