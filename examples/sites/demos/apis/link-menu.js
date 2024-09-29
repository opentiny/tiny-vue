export default {
  mode: ['pc'],
  apis: [
    {
      name: 'link-menu',
      type: 'component',
      props: [
        {
          name: 'data',
          type: 'array',
          defaultValue: '',
          desc: {
            'zh-CN': '设置收藏夹菜单的数据',
            'en-US': 'Set the data of the favorites menu'
          },
          mode: ['pc'],
          pcDemo: 'data-resource1'
        },
        {
          name: 'default-expand-all',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '设置打开菜单弹窗时默认是否展开所有节点，默认为 true',
            'en-US':
              'Whether to expand all nodes by default when a menu pop-up window is opened. The default value is true'
          },
          mode: ['pc'],
          pcDemo: 'menu-items'
        },
        {
          name: 'ellipsis',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '菜单内容超长时省略显示，默认为 true',
            'en-US': 'Omitted if the menu content is too long. The default value is true'
          },
          mode: ['pc'],
          pcDemo: 'custom-icon1'
        },
        {
          name: 'get-menu-data-sync',
          type: 'function',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义菜单数据服务，直接返回数据',
            'en-US': 'User-defined menu data service. Data is directly returned'
          },
          mode: ['pc'],
          pcDemo: 'get-menu-data-sync'
        },
        {
          name: 'icon',
          type: 'object',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义节点展开折叠的图标',
            'en-US': 'Customize the icon for expanding and collapsing a node'
          },
          mode: ['pc'],
          pcDemo: 'custom-icon'
        },
        {
          name: 'expand-icon',
          type: 'Component',
          defaultValue: '',
          desc: {
            'zh-CN': '指示展开的图标',
            'en-US': 'Indicates the expanded icon'
          },
          mode: ['pc'],
          pcDemo: 'data-resource'
        },
        {
          name: 'expand-icon-color',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '指示展开的图标色',
            'en-US': 'Indicates the expanded icon color'
          },
          mode: ['pc'],
          pcDemo: 'data-resource'
        },
        {
          name: 'shrink-icon',
          type: 'Component',
          defaultValue: '',
          desc: {
            'zh-CN': '指示收缩的图标',
            'en-US': 'Icon indicating shrink'
          },
          mode: ['pc'],
          pcDemo: 'data-resource'
        },
        {
          name: 'shrink-icon-color',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '指示收缩的图标色',
            'en-US': 'Icon indicating shrink  color'
          },
          mode: ['pc'],
          pcDemo: 'data-resource'
        },
        {
          name: 'keep-selected-nodes',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '树节点勾选内容后，点击取消按钮，再次打开弹窗是否保留取消前勾选的内容的状态，默认为 true',
            'en-US':
              'Whether to retain the status of the selected content after selecting content in the tree node, clicking Cancel, and opening the dialog box again. The default value is true'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'max-item',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN': '设置可收藏的栏目的最大数量',
            'en-US': 'Set the maximum number of columns that can be added to favorites'
          },
          mode: ['pc'],
          pcDemo: 'menu-items'
        },
        {
          name: 'search-icon',
          type: 'object',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义搜索图标',
            'en-US': 'Customize the search icon'
          },
          mode: ['pc'],
          pcDemo: 'custom-icon'
        },
        {
          name: 'title',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '设置收藏夹菜单的标题，默认为空',
            'en-US': 'Set the title of the favorites menu. The default value is null'
          },
          mode: ['pc'],
          pcDemo: 'data-resource'
        },
        {
          name: 'wrap',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '菜单内容超长时换行显示，默认为 true',
            'en-US': 'The menu content is displayed in a new line when it is too long. The default value is true'
          },
          mode: ['pc'],
          pcDemo: 'data-resource'
        }
      ],
      events: [],
      methods: [
        {
          name: 'hideDialog',
          defaultValue: '',
          desc: {
            'zh-CN': '关闭菜单弹窗',
            'en-US': 'Close the menu pop-up window'
          },
          mode: ['pc'],
          pcDemo: 'custom-foot'
        },
        {
          name: 'sureNodevalue',
          defaultValue: '',
          desc: {
            'zh-CN': '获取选中的菜单节点并关闭菜单弹窗，同时展示选中的菜单',
            'en-US': 'Obtains the selected menu node, closes the menu pop-up window, and displays the selected menu'
          },
          mode: ['pc'],
          pcDemo: 'custom-foot'
        }
      ],
      slots: [
        {
          name: 'foot',
          defaultValue: '',
          desc: {
            'zh-CN': '菜单弹窗底部插槽',
            'en-US': 'Slot at the bottom of the menu pop-up window'
          },
          mode: ['pc'],
          pcDemo: 'custom-foot'
        }
      ]
    }
  ]
}
