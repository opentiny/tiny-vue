export default {
  mode: ['pc'],
  apis: [
    {
      name: 'fall-menu',
      type: 'component',
      props: [
        {
          name: 'data',
          type: 'Array',
          defaultValue: '',
          desc: {
            'zh-CN': '设置瀑布菜单的数据',
            'en-US': 'Set the waterfall menu data. ;Set the data of the waterfall menu.'
          },
          mode: ['pc'],
          pcDemo: 'data-resource'
        }
      ],
      events: [],
      methods: [],
      slots: [
        {
          name: 'left',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义左侧切换图标',
            'en-US': 'Customize the switch icon on the left.'
          },
          mode: ['pc'],
          pcDemo: 'custom-slider-icon'
        },
        {
          name: 'level1',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义一级菜单',
            'en-US': 'User-defined level-1 menu'
          },
          mode: ['pc'],
          pcDemo: 'custom-menuitem'
        },
        {
          name: 'level2',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义二级菜单',
            'en-US': 'Customized level-2 menu'
          },
          mode: ['pc'],
          pcDemo: 'custom-menuitem'
        },
        {
          name: 'level3',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义三级菜单',
            'en-US': 'Customized Level-3 Menu'
          },
          mode: ['pc'],
          pcDemo: 'custom-menuitem'
        },
        {
          name: 'right',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义右侧切换图标',
            'en-US': 'Customize the switch icon on the right.'
          },
          mode: ['pc'],
          pcDemo: 'custom-slider-icon'
        }
      ]
    }
  ]
}
