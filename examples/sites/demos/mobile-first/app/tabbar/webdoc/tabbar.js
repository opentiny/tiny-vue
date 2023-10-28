export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'base',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'basic usage'
      },
      desc: {
        'zh-CN': '<p>通过<code>type</code>设置不同的类型。可选值：success、warning、info、error，默认值：info 。</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['base.vue']
    },
    {
      demoId: 'active-inactive-color',
      name: {
        'zh-CN': '自定义颜色',
        'en-US': 'button round'
      },
      desc: {
        'zh-CN':
          '<p>通过设置<code>active-color</code>属性自定义颜色，<code>inactive-color</code>属性设置未激活颜色</p>',
        'en-US': '<p>button round</p>'
      },
      codeFiles: ['active-inactive-color.vue']
    },
    {
      demoId: 'badge',
      name: {
        'zh-CN': '徽标提示',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过添加<code>badge</code>属性设置徽标数值，通过添加<code>dot</code>属性显示圆点徽标<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['badge.vue']
    },
    {
      demoId: 'border',
      name: {
        'zh-CN': '无边框',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过添加<code>border</code>属性去除边框<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['border.vue']
    },
    {
      demoId: 'event-change',
      name: {
        'zh-CN': '切换事件',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过添加<code>change</code>事件实现事件切换<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['event-change.vue']
    },
    {
      demoId: 'slot-icon',
      name: {
        'zh-CN': '自定义图标',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p><p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['slot-icon.vue']
    },
    {
      demoId: 'options',
      name: {
        'zh-CN': '循环配置',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>通过<code>show-number</code>属性设置展示个数，默认值为 5 可在 Tabbar 组件上设置 <code>item-list</code> 属性，可循环配置 TabbarItem。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['options.vue']
    }
  ],
  apis: [
    {
      'name': 'Tabbar',
      'type': 'component',
      'props': [
        {
          'name': 'active-color',
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置被激活时的颜色', 'en-US': 'Whether the text is centered' },
          'demoId': 'active-inactive-color'
        },
        {
          'name': 'border',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': { 'zh-CN': '设置底部导航上边框', 'en-US': 'Set whether alarms can be disabled.' },
          'demoId': 'custom-close'
        },
        {
          'name': 'inactive-color',
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置底部导航未被激活颜色', 'en-US': 'Customized text of the close button' },
          'demoId': 'active-inactive-color'
        },
        {
          'name': 'item-list',
          'type': 'Object[]',
          'defaultValue': '[]',
          'desc': {
            'zh-CN': '设置底部导航虚幻遍历需要放的数组;',
            'en-US': 'Set the warning prompt content. The default value is null.'
          },
          'demoId': 'options'
        },
        {
          'name': 'show-number',
          'type': 'number',
          'defaultValue': '5',
          'desc': {
            'zh-CN': '设置底部导航需要展示的项数',
            'en-US':
              'Set the alarm icon. By default, the corresponding icon is automatically used based on the value of type.'
          },
          'demoId': 'options'
        },
        {
          'name': 'v-model',
          'type': 'number | string',
          'defaultValue': '0',
          'desc': { 'zh-CN': '设置底部导航双向数据绑定', 'en-US': 'Display icon' },
          'demoId': 'base'
        }
      ],
      'events': [
        {
          'name': 'change',
          'type': 'Function()',
          'defaultValue': '',
          'desc': {
            'zh-CN': '选项改变时触发的事件',
            'en-US': 'Event triggered when the alert function is disabled'
          },
          'demoId': 'event-change'
        }
      ],
      'slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '底部导航每一项', 'en-US': '' },
          'demoId': 'base'
        }
      ]
    },
    {
      'name': 'TabbarItem',
      'type': 'component',
      'props': [
        {
          'name': 'badge',
          'type': 'number | string',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置底部导航选项徽标', 'en-US': '' },
          'demoId': 'badge'
        },
        {
          'name': 'dot',
          'type': 'boolean',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置底部导航选项点', 'en-US': '' },
          'demoId': 'badge'
        },
        {
          'name': 'icon',
          'type': 'Object',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置底部导航上自定义图标', 'en-US': '' },
          'demoId': 'slot-icon'
        },
        {
          'name': 'name',
          'type': 'number | string',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置底部导航选项标题', 'en-US': '' },
          'demoId': 'base'
        },
        {
          'name': 'text',
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置底部导航循环时设定的标题', 'en-US': '' },
          'demoId': 'base'
        }
      ],
      'events': [
        {
          'name': 'click',
          'type': 'Function()',
          'defaultValue': '',
          'desc': {
            'zh-CN': '选项点击时触发的事件',
            'en-US': 'Event triggered when the alert function is disabled'
          },
          'demoId': 'event-change'
        }
      ],
      'slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '底部导航每一项', 'en-US': '' },
          'demoId': 'base'
        }
      ]
    }
  ]
}
