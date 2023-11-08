export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'data-basic',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['data-resource.vue']
    },
    {
      'demoId': 'data-resource',
      'name': { 'zh-CN': '数据源', 'en-US': 'Data Source' },
      'desc': {
        'zh-CN': '<p>通过 <code>data</code> 设置瀑布菜单的数据。</p>\n',
        'en-US': '<p>Set the data of the waterfall menu through <code>data</code>. </p>\n'
      },
      'codeFiles': ['data-resource.vue']
    },
    {
      'demoId': 'custom-slider-icon',
      'name': { 'zh-CN': '自定义左/右侧图标', 'en-US': 'Customizing Left/Right Icons' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>left</code> 插槽自定义左侧切换图标为 IconLeft ，通过 <code>right</code> 插槽右侧切换图标 IconRight 。</p>\n',
        'en-US':
          '<p>Use the <code>left</code> slot to set the left switch icon to IconLeft, and use the <code>right</code> slot to set the right switch icon to IconRight. </p>\n'
      },
      'codeFiles': ['custom-slider-icon.vue']
    },
    {
      'demoId': 'custom-menuitem',
      'name': { 'zh-CN': '自定义内容', 'en-US': 'Custom Content' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>level1</code> 插槽自定义一级菜单内容，通过 <code>level2</code> 插槽自定义二级菜单内容，通过 <code>level3</code> 插槽自定义三级菜单内容。</p>\n',
        'en-US':
          '<p>The level-1 menu content is customized through the <code>level1</code> slot, the level-2 menu content is customized through the <code>level2</code> slot, and the level-3 menu content is customized through the <code>level3</code> slot. </p>\n'
      },
      'codeFiles': ['custom-menuitem.vue']
    }
  ],
  apis: [
    {
      'name': 'fall-menu',
      'type': 'component',
      'properties': [
        {
          'name': 'data',
          'type': 'object , Array',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置瀑布菜单的数据。',
            'en-US': 'Set the waterfall menu data. ;Set the data of the waterfall menu.'
          },
          'demoId': 'data-resource'
        }
      ],
      'events': [],
      'slots': [
        {
          'name': 'level1',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '自定义一级菜单', 'en-US': 'User-defined level-1 menu' },
          'demoId': 'custom-menuitem'
        },
        {
          'name': 'level2',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '自定义二级菜单', 'en-US': 'Customized level-2 menu' },
          'demoId': 'custom-menuitem'
        },
        {
          'name': 'level3',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '自定义三级菜单', 'en-US': 'Customized Level-3 Menu' },
          'demoId': 'custom-menuitem'
        },
        {
          'name': 'left',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '自定义左侧切换图标', 'en-US': 'Customize the switch icon on the left.' },
          'demoId': 'custom-slider-icon'
        },
        {
          'name': 'right',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '自定义右侧切换图标', 'en-US': 'Customize the switch icon on the right.' },
          'demoId': 'custom-slider-icon'
        }
      ]
    }
  ]
}
