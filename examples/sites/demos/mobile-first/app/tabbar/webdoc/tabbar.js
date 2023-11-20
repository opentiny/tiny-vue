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
        'en-US':
          '<p>Use <code>type</code> to set different types. The options are success, warning, info, and error. The default value is info</p>'
      },
      codeFiles: ['base.vue']
    },
    {
      demoId: 'active-inactive-color',
      name: {
        'zh-CN': '自定义颜色',
        'en-US': 'Custom Colors'
      },
      desc: {
        'zh-CN':
          '<p>通过设置<code>active-color</code>属性自定义颜色，<code>inactive-color</code>属性设置未激活颜色</p>',
        'en-US':
          '<p>Set the <code>active-color</code> attribute to customize the color, and the <code>inactive-color</code> attribute to set the inactive color.</p>'
      },
      codeFiles: ['active-inactive-color.vue']
    },
    {
      demoId: 'badge',
      name: {
        'zh-CN': '徽标提示',
        'en-US': 'Logo Tips'
      },
      desc: {
        'zh-CN': '<p>通过添加<code>badge</code>属性设置徽标数值，通过添加<code>dot</code>属性显示圆点徽标</p>',
        'en-US':
          '<p>Set the logo value by adding the <code>badge</code> attribute and display the dot logo by adding the <code>dot</code> attribute</p>'
      },
      codeFiles: ['badge.vue']
    },
    {
      demoId: 'border',
      name: {
        'zh-CN': '无边框',
        'en-US': 'Borderless'
      },
      desc: {
        'zh-CN': '<p>通过添加<code>border</code>属性去除边框</p>',
        'en-US': '<p>Remove the border by adding the <code>border</code> attribute</p>'
      },
      codeFiles: ['border.vue']
    },
    {
      demoId: 'event-change',
      name: {
        'zh-CN': '切换事件',
        'en-US': 'Handover event'
      },
      desc: {
        'zh-CN': '<p>通过添加<code>change</code>事件实现事件切换</p>',
        'en-US': '<p>Add the <code>change</code> event to switch events.</p>'
      },
      codeFiles: ['event-change.vue']
    },
    {
      demoId: 'slot-icon',
      name: {
        'zh-CN': '自定义图标',
        'en-US': 'Custom Icons'
      },
      desc: {
        'zh-CN': '<p><p>',
        'en-US': '<p></p>'
      },
      codeFiles: ['slot-icon.vue']
    },
    {
      demoId: 'options',
      name: {
        'zh-CN': '循环配置',
        'en-US': 'Cyclic configuration'
      },
      desc: {
        'zh-CN':
          '<p>通过<code>show-number</code>属性设置展示个数，默认值为 5 可在 Tabbar 组件上设置 <code>item-list</code> 属性，可循环配置 TabbarItem。</p>',
        'en-US':
          '<p>The <code>show-number</code> attribute is used to set the number of displayed items. The default value is 5. You can set the <code>item-list</code> attribute on the Tabbar component to configure TabbarItem cyclically.</p>'
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
          'type': 'String',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置被激活时的颜色', 'en-US': 'Sets the color when activated' },
          'demoId': 'active-inactive-color'
        },
        {
          'name': 'border',
          'type': 'Boolean',
          'defaultValue': 'true',
          'desc': { 'zh-CN': '设置底部导航上边框', 'en-US': 'Set bottom navigation top border' },
          'demoId': 'custom-close'
        },
        {
          'name': 'inactive-color',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置底部导航未被激活颜色',
            'en-US': 'Set the color of the bottom navigation that is not activated'
          },
          'demoId': 'active-inactive-color'
        },
        {
          'name': 'item-list',
          'type': 'Object[]',
          'defaultValue': '[]',
          'desc': {
            'zh-CN': '设置底部导航虚幻遍历需要放的数组;',
            'en-US': 'Sets the array to be placed in the bottom navigation illusory traversal.'
          },
          'demoId': 'options'
        },
        {
          'name': 'show-number',
          'type': 'Number',
          'defaultValue': '5',
          'desc': {
            'zh-CN': '设置底部导航需要展示的项数',
            'en-US': 'Set the number of items to be displayed in the bottom navigation.'
          },
          'demoId': 'options'
        },
        {
          'name': 'v-model',
          'type': 'Number | String',
          'defaultValue': '0',
          'desc': { 'zh-CN': '设置底部导航双向数据绑定', 'en-US': 'Set bottom navigation bidirectional data binding' },
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
          'desc': { 'zh-CN': '底部导航每一项', 'en-US': 'Bottom navigation for each item' },
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
          'type': 'Number | String',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置底部导航选项徽标', 'en-US': 'Set bottom navigation option logo' },
          'demoId': 'badge'
        },
        {
          'name': 'custom-icon',
          'type': 'Boolean',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置底部导航个性化图标', 'en-US': 'Set bottom navigation personalization icon' }
        },
        {
          'name': 'dot',
          'type': 'Boolean',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置底部导航选项点', 'en-US': 'Set bottom navigation option points' },
          'demoId': 'badge'
        },
        {
          'name': 'icon',
          'type': 'Object',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置底部导航上自定义图标', 'en-US': 'Set custom icons on bottom navigation' },
          'demoId': 'slot-icon'
        },
        {
          'name': 'name',
          'type': 'Number | String',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置底部导航选项标题', 'en-US': 'Set bottom navigation option title' },
          'demoId': 'base'
        },
        {
          'name': 'text',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置底部导航循环时设定的标题',
            'en-US': 'Sets the title set when the bottom navigation loop'
          },
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
            'en-US': 'Event triggered when an option is clicked'
          },
          'demoId': 'event-change'
        }
      ],
      'slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '底部导航每一项', 'en-US': 'Bottom navigation for each item' },
          'demoId': 'base'
        }
      ]
    }
  ]
}
