export default {
  mode: ['mobile-first'],
  apis: [
    {
      name: 'Tabbar',
      type: 'component',
      props: [
        {
          name: 'active-color',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>选中标签的颜色</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile-first'],
          mfDemo: 'active-inactive-color'
        },
        {
          name: 'border',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>是否显示外边框，该属性默认为true</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile-first'],
          mfDemo: 'custom-close'
        },
        {
          name: 'inactive-color',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>未选中标签的颜色</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile-first'],
          mfDemo: 'active-inactive-color'
        },
        {
          name: 'item-list',
          type: 'Object[]',
          defaultValue: '[]',
          desc: {
            'zh-CN': '设置底部导航虚幻遍历需要放的数组;',
            'en-US': 'Sets the array to be placed in the bottom navigation illusory traversal.'
          },
          mode: ['mobile-first'],
          mfDemo: 'options'
        },
        {
          name: 'show-number',
          type: 'number',
          defaultValue: '5',
          desc: {
            'zh-CN': '设置底部导航需要展示的项数',
            'en-US': 'Set the number of items to be displayed in the bottom navigation.'
          },
          mode: ['mobile-first'],
          mfDemo: 'options'
        },
        {
          name: 'v-model',
          type: 'Number | String',
          defaultValue: '0',
          desc: {
            'zh-CN': '设置底部导航双向数据绑定',
            'en-US': 'Set bottom navigation bidirectional data binding'
          },
          mode: ['mobile-first'],
          mfDemo: 'base'
        }
      ],
      events: [
        {
          name: 'change',
          type: 'Function()',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>切换标签时触发,value: 当前选中标签的名称或索引值</p>',
            'en-US': 'Click'
          },
          mode: ['mobile-first'],
          mfDemo: 'event-change'
        }
      ],
      methods: [],
      slots: [
        {
          name: 'default',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '底部导航每一项',
            'en-US': 'Bottom navigation for each item'
          },
          mode: ['mobile-first'],
          mfDemo: 'base'
        }
      ]
    },
    {
      name: 'TabbarItem',
      type: 'component',
      props: [
        {
          name: 'badge',
          type: 'Number | String',
          defaultValue: '',
          desc: {
            'zh-CN': '设置底部导航选项徽标',
            'en-US': 'Set bottom navigation option logo'
          },
          mode: ['mobile-first'],
          mfDemo: 'badge'
        },
        {
          name: 'custom-icon',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '设置底部导航个性化图标',
            'en-US': 'Set bottom navigation personalization icon'
          },
          mode: ['mobile-first']
        },
        {
          name: 'dot',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '设置底部导航选项点',
            'en-US': 'Set bottom navigation option points'
          },
          mode: ['mobile-first'],
          mfDemo: 'badge'
        },
        {
          name: 'icon',
          type: 'Object',
          defaultValue: '',
          desc: {
            'zh-CN': '设置底部导航上自定义图标',
            'en-US': 'Set custom icons on bottom navigation'
          },
          mode: ['mobile-first'],
          mfDemo: 'slot-icon'
        },
        {
          name: 'name',
          type: 'Number | String',
          defaultValue: '',
          desc: {
            'zh-CN': '设置底部导航选项标题',
            'en-US': 'Set bottom navigation option title'
          },
          mode: ['mobile-first'],
          mfDemo: 'base'
        },
        {
          name: 'text',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '设置底部导航循环时设定的标题',
            'en-US': 'Sets the title set when the bottom navigation loop'
          },
          mode: ['mobile-first'],
          mfDemo: 'base'
        }
      ],
      events: [
        {
          name: 'click',
          type: 'Function()',
          defaultValue: '',
          desc: {
            'zh-CN': '选项点击时触发的事件',
            'en-US': 'Event triggered when an option is clicked'
          },
          mode: ['mobile-first'],
          mfDemo: 'event-change'
        }
      ],
      methods: [],
      slots: [
        {
          name: 'default',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '底部导航每一项',
            'en-US': 'Bottom navigation for each item'
          },
          mode: ['mobile-first'],
          mfDemo: 'base'
        }
      ]
    }
  ]
}
