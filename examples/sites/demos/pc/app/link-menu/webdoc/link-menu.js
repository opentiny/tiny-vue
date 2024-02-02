export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'data-resource',
      name: {
        'zh-CN': '菜单设置',
        'en-US': 'Data Source'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>data</code> 属性设置菜单的数据源，同时在数据对象中可通过 <code>disabled</code> 设置该节点是否可被勾选。</p>\n\n          <p>通过 <code>title</code> 属性定义收藏菜单标题。</p>\n\n          <p>通过 <code>wrap</code> 属性设置菜单内容超长时换行显示。</p>\n',
        'en-US':
          '<p>Set the data source of the menu through the <code>data</code> attribute. In addition, you can set whether the node can be selected through <code>disabled</code> in the data object. </p>\n\n          <p>The <code>title</code> attribute defines the title of the favorites menu. </p>\n\n          <p>The <code>wrap</code> attribute is used to set the menu content to be displayed in a line wrap when the menu content is too long. </p>\n'
      },
      codeFiles: ['data-resource.vue']
    },
    {
      demoId: 'menu-items',
      name: {
        'zh-CN': '可收藏栏目数',
        'en-US': 'Number of categories that can be added to favorites'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>max-item</code> 属性指定可勾选并收藏的栏目数。指定 <code>default-expand-all</code> 为 false 时，打开菜单弹窗时所有节点为折叠状态。</p>\n',
        'en-US':
          '<p>The <code>max-item</code> attribute specifies the number of categories that can be selected and added to favorites. If <code>default-expand-all</code> is set to false, all nodes are collapsed when a menu pop-up window is opened. </p>\n'
      },
      codeFiles: ['menu-items.vue']
    },
    {
      demoId: 'get-menu-data-sync',
      name: {
        'zh-CN': '自定义菜单数据服务',
        'en-US': 'Customized menu data service'
      },
      desc: {
        'zh-CN': '<p>通过 <code>get-menu-data-sync</code> 自定义菜单数据服务。</p>\n',
        'en-US': '<p>Customize the menu data service through <code>get-menu-data-sync</code>. </p>\n'
      },
      codeFiles: ['get-menu-data-sync.vue']
    },
    {
      demoId: 'custom-icon',
      name: {
        'zh-CN': '图标及内容设置',
        'en-US': 'Customized folding and unfolding icons and menus are omitted when the content is too long.'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>icon</code> 属性自定义折叠展开图标。通过 <code>search-icon</code> 属性自定义搜索图标。<code>ellipsis</code> 属性设置菜单内容超长时省略显示。</p>\n',
        'en-US':
          '<p>Customize the expansion icon through the <code>icon</code> attribute. Use the <code>search-icon</code> attribute to customize the search icon.<code>ellipsis</code> attribute to omit the display when the menu content is too long.</p>\n'
      },
      codeFiles: ['custom-icon.vue']
    },
    {
      demoId: 'custom-foot',
      name: {
        'zh-CN': '自定义菜单弹窗底部',
        'en-US': 'Customize the bottom of the pop-up window'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>foot</code> 插槽自定义菜单弹窗的底部内容。<code>sureNodevalue</code> 方法用于获取选中的菜单节点并关闭菜单弹窗，同时展示选中的菜单。<code>hideDialog</code> 方法用于关闭弹窗。插槽可结合这两个方法一起使用。</p>\n',
        'en-US':
          '<p>Customize the bottom of the menu pop-up window through the <code>foot</code> slot. The <code>sureNodevalue</code> method is used to obtain the selected menu node, close the menu pop-up window, and display the selected menu. The <code>hideDialog</code> method is used to close a pop-up window. Slots can be used in combination with both methods. </p>\n'
      },
      codeFiles: ['custom-foot.vue']
    }
  ]
}
