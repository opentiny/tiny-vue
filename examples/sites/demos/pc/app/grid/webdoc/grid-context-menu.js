export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'context-menu-header-menu',
      'name': { 'zh-CN': '表头菜单', 'en-US': 'Grid-right-click menu-header menu' },
      'desc': {
        'zh-CN':
          '<p>配置 <code>:context-menu=&quot;{header: {options: headerMenus}, visibleMethod}&quot;</code> 对象来控制表头菜单。\n<code>headerMenus</code> 里面配置 <code>visible</code> 是否显示菜单， <code>disabled</code> 是否禁用菜单项。\n可配合 <code>visibleMethod</code> 方法来控制菜单权限。\n<code>@context-menu-click</code> 监控菜单点击事件。\n具体参考下面示例。</p>\n',
        'en-US':
          '<p>Configure the <code>:context-menu=&quot;{header: {options: headerMenus}, visibleMethod}&quot;</code> object to control the table header menu. In the \n<code>headerMenus</code>, configure <code>visible</code> whether to display the menu and <code>disabled</code> whether to disable the menu. \n The <code>visibleMethod</code> method can be used to control menu permissions. \n<code>@context-menu-click</code> monitoring menu click event. \nFor details, see the following example. </p>\n'
      },
      'codeFiles': ['context-menu/header-menu.vue']
    },
    {
      'demoId': 'context-menu-footer-menu',
      'name': { 'zh-CN': '表尾菜单', 'en-US': 'Grid-right-click menu-table tail menu' },
      'desc': {
        'zh-CN':
          '<p>必须要配置 <code>:context-menu=&quot;{body: {options: bodyMenus}}&quot;</code> ，<code>show-footer</code>，<code>:footer-method=&quot;footerMethod&quot;</code> 才能展示表尾菜单\n配置 <code>:context-menu=&quot;{body: {options: bodyMenus}, footer: {options: footerMenus}，visibleMethod}&quot;</code> 对象来控制表头菜单。\n<code>footerMenus</code> 里面配置 <code>visible</code> 是否显示菜单， <code>disabled</code> 是否禁用菜单项。\n可配合 <code>visibleMethod</code> 方法来控制菜单权限。\n<code>@context-menu-click</code> 监控菜单点击事件。\n具体参考下面示例。</p>\n',
        'en-US':
          '<p>The table footer menu can be displayed only when <code>:context-menu=&quot;{body: {options: bodyMenus}}&quot;</code>, show-footer, and <code>:footer-method=&quot;footerMethod&quot;</code> are configured. \nThe <code>:context-menu=&quot;{body: {options: bodyMenus}, footer: {options: footerMenus}, visibleMethod}&;</code> objects are configured to control the table header menu. In the \n<code>footerMenus</code>, configure <code>visible</code> whether to display the menu and <code>disabled</code> whether to disable the menu. \n The <code>visibleMethod</code> method can be used to control menu permissions. \n<code>@context-menu-click</code> monitoring menu click event. \nFor details, see the following example. </p>\n'
      },
      'codeFiles': ['context-menu/footer-menu.vue']
    },
    {
      'demoId': 'context-menu-cell-menu',
      'name': { 'zh-CN': '单元格菜单', 'en-US': 'Grid-right-click menu-cell menu' },
      'desc': {
        'zh-CN':
          '<p>配置 <code>context-menu=&quot;{body: {options: bodyMenus}，visibleMethod}&quot;</code> 对象来控制单元格菜单。\n<code>bodyMenus</code> 里面配置 <code>visible</code> 是否显示菜单，<code>disabled</code> 是否禁用菜单项。\n可配合 <code>visibleMethod</code> 方法来控制菜单权限。\n<code>@cell-context-menu</code> 监控菜单弹出前事件。\n<code>@context-menu-click</code> 监控菜单点击事件。\n具体参考下面示例。</p>\n',
        'en-US':
          '<p>Configure the <code>context-menu=&quot;{body: {options: bodyMenus}, visibleMethod}&quot;</code> object to control the cell menu. In \n<code>bodyMenus</code>, set <code>visible</code> to display menus and <code>disabled</code> to disable menus. \n The <code>visibleMethod</code> method can be used to control menu permissions. Event triggered before the \n<code>@cell-context-menu</code> monitoring menu is displayed. \n<code>@context-menu-click</code> monitoring menu click event. \nFor details, see the following example. </p>\n'
      },
      'codeFiles': ['context-menu/cell-menu.vue']
    },
    {
      'demoId': 'context-menu-menu-permissions',
      'name': { 'zh-CN': '菜单权限', 'en-US': 'Grid-Right-click Menu-Menu Permission' },
      'desc': {
        'zh-CN':
          '<p>配置 <code>:context-menu=&quot;{header: {options: headerMenus},body: {options: bodyMenus}, footer: {options: footerMenus},visibleMethod}&quot;</code> 对象来控制表头菜单。\n<code>header，bodyMenus，footer</code> 里面配置 <code>visible</code> 是否显示菜单， <code>disabled</code> 是否禁用菜单项。\n使用配合 <code>visibleMethod</code> 方法来控制菜单权限。\n<code>@cell-context-menu</code> 监控菜单弹出前事件。\n<code>@context-menu-click</code> 监控菜单点击事件。\n具体参考下面示例。</p>\n',
        'en-US':
          '<p>Configure the <code>:context-menu=&quot;{header: {options: headerMenus},body: {options: bodyMenus}, footer: {options: footerMenus},visibleMethod}&quot;</code> object to control the table header menu. \n<code>header, bodyMenus, footer</code>: <code>visible</code> indicates whether to display menus and <code>disabled</code> indicates whether to disable menus. \nUse the <code>visibleMethod</code> method to control menu permissions. Event triggered before the \n<code>@cell-context-menu</code> monitoring menu is displayed. \n<code>@context-menu-click</code> monitoring menu click event. \nFor details, see the following example. </p>\n'
      },
      'codeFiles': ['context-menu/menu-permissions.vue']
    }
  ],
  apis: [{ 'name': 'grid-context-menu', 'type': 'component', 'properties': [], 'events': [], 'slots': [] }]
}
