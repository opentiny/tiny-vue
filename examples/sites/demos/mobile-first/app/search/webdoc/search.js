export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'basic usage'
      },
      desc: {
        'zh-CN': '<p></p>',
        'en-US': '<p></p>'
      },
      codeFiles: ['basic-usage.vue']
    },

    {
      demoId: 'clearable',
      name: {
        'zh-CN': '可清除',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `clearable` 属性设置显示清空图标按钮。</p>',
        'en-US': '<p>You can use the `clearable` property to set the display of the clear icon button.</p>'
      },
      codeFiles: ['clearable.vue']
    },
    {
      demoId: 'big-mode',
      name: {
        'zh-CN': '大尺寸',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `big` 设置组件为 big 模式。</p>',
        'en-US': '<p>You can use `big` to set the component to the big mode.</p>'
      },
      codeFiles: ['big-mode.vue']
    },
    {
      demoId: 'default-value',
      name: {
        'zh-CN': '默认值搜索',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `v-model` 配置组件默认搜索条件。</p>',
        'en-US': '<p>You can use `v-model` to configure the default search criteria of the component.</p>'
      },
      codeFiles: ['default-value.vue']
    },
    {
      demoId: 'search-types',
      name: {
        'zh-CN': '搜索类型',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `search-types` 配置组件可选的搜索类型。</p>',
        'en-US': '<p>You can use `search-types` to configure the search types available for the component.</p>'
      },
      codeFiles: ['search-types.vue']
    },
    {
      demoId: 'enter-search',
      name: {
        'zh-CN': '回车搜索',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `is-enter-search` 属性设置按回车键后触发搜索。</p>',
        'en-US': '<p>You can set the `is-enter-search` attribute to trigger search by pressing Enter.</p>'
      },
      codeFiles: ['enter-search.vue']
    },
    {
      demoId: 'custom-search-types',
      name: {
        'zh-CN': '自定义搜索类型的内容',
        'en-US': 'Content of a custom search type'
      },
      desc: {
        'zh-CN': '<p>可通过 `search-types `配置组件可选的搜索类型。</p>',
        'en-US': '<p>You can use `search-types` to configure the search types available to the component.</p>'
      },
      codeFiles: ['custom-search-types.vue']
    },
    {
      demoId: 'show-selected-types',
      name: {
        'zh-CN': '自定义搜索类型选择后的展示',
        'en-US': 'Display after a user-defined search type is selected'
      },
      desc: {
        'zh-CN': '<p></p>',
        'en-US': '<p></p>'
      },
      codeFiles: ['show-selected-types.vue']
    },
    {
      demoId: 'search-events',
      name: {
        'zh-CN': 'search 事件',
        'en-US': 'search events'
      },
      desc: {
        'zh-CN': '<p></p>',
        'en-US': '<p></p>'
      },
      codeFiles: ['search-events.vue']
    },
    {
      demoId: 'change-events',
      name: {
        'zh-CN': 'change 事件',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p></p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['change-events.vue']
    },
    {
      demoId: 'select-events',
      name: {
        'zh-CN': 'select 事件',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p></p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['select-events.vue']
    },
    {
      demoId: 'button-search',
      name: {
        'zh-CN': '按钮搜索',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `show-button` 属性对移动端设置按钮搜索。</p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['button-search.vue']
    },
    {
      demoId: 'change-bg',
      name: {
        'zh-CN': '切换背景色',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `change-bg-color` 属性切换背景色。(只针对移动端有效)</p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['change-bg.vue']
    }
  ],
  apis: [
    {
      'name': 'Search',
      'type': 'component',
      'props': [
        {
          'name': 'big',
          'type': 'Boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN': '大尺寸，配置为true时，搜索框高度将变高。',
            'en-US': 'Large size. If this parameter is set to true, the height of the search box increases.'
          },
          'demoId': 'big-mode'
        },
        {
          'name': 'change-bg-color',
          'type': 'Boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN': '可通过 change-bg-color 属性切换背景色(只针对移动端有效)。',
            'en-US':
              'You can use the change-bg-color attribute to switch the background color (only for mobile devices)'
          },
          'demoId': 'change-bg'
        },
        {
          'name': 'show-button',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '可通过 show-button 属性对移动端设置按钮搜索。',
            'en-US': 'You can use the show-button attribute to set button search for mobile devices.'
          },
          'demoId': 'search-types'
        }
      ]
    }
  ]
}
