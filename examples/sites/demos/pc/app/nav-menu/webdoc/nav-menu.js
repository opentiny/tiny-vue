export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN': '通过 <code>data</code> 配置菜单数据。',
        'en-US': 'The <code>data</code> is used to configure menu data.'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'overflow',
      name: {
        'zh-CN': '超出显示',
        'en-US': 'Exceeding display'
      },
      desc: {
        'zh-CN':
          '当一级菜单内容过多溢出时，通过 <code>overflow</code> 配置显示方式，共有 <code>auto</code>、<code>retract</code>、<code>fixed</code>、<code>hidden</code> 4种方式，默认为 <code>auto</code>。\n          <div class="tip custom-block"><p class="custom-block-title">overflow 选项说明</p>\n<p>\n          auto：菜单栏右侧显示 <code>更多</code> 菜单，鼠标悬停该菜单时，将显示剩余未展示的菜单；<br/>\n          fixed：菜单栏左侧显示 <code>三明治折叠/展开</code> 图标，鼠标悬停该图标时，将显示所有菜单；<br/>\n          retract：菜单栏不显示任何菜单，只显示 <code>三明治折叠/展开</code> 图标，鼠标悬停该图标时，将显示所有菜单；<br/>\n          hidden：剩余未展示的菜单隐藏不显示。</p></div>',
        'en-US':
          'When there is too much content in the first level menu that overflows, configure the display mode through<code>overflow</code>. There are four modes:<code>auto</code>,<code>retract</code>,<code>fixed</code>, and<code>hidden</code>. The default is<code>auto</code>.\n        <div class="tip custom-block"><p class="custom-block-title">Overview Options Description</p>\n<p>\n        auto: The<code>More</code>menu is displayed on the right side of the menu bar. When the mouse hovers over this menu, the remaining undisclosed menus will be displayed< br/>\n        fixed: The<code>sandwich fold/expand</code>icon is displayed on the left side of the menu bar. When the mouse hovers over this icon, all menus will be displayed< br/>\n        retract: The menu bar does not display any menus, only displays the<code>sandwich fold/expand</code>icon. When the mouse hovers over this icon, all menus will be displayed< br/>\n        hidden: The remaining undisclosed menus are hidden and not displayed.</p> </div>'
      },
      codeFiles: ['overflow.vue']
    },
    {
      demoId: 'slot-toolbar',
      name: {
        'zh-CN': '定义工具栏',
        'en-US': 'Custom Toolbar'
      },
      desc: {
        'zh-CN': '通过 <code>toolbar</code> 插槽自定义工具栏。',
        'en-US': 'Customize the toolbar through the<code>toolbar</code>slot.'
      },
      codeFiles: ['slot-toolbar.vue']
    },
    {
      demoId: 'slot-logo',
      name: {
        'zh-CN': '定义Logo',
        'en-US': 'Custom Logo'
      },
      desc: {
        'zh-CN': '通过 <code>logo</code> 插槽自定义 Logo 。',
        'en-US': 'Customize the logo through the<code>logo</code>slot.'
      },
      codeFiles: ['slot-logo.vue']
    },
    {
      demoId: 'before-skip',
      name: {
        'zh-CN': '跳转前处理',
        'en-US': 'Pre jump processing'
      },
      desc: {
        'zh-CN':
          '通过 <code>before-skip</code> 钩子函数处理菜单点击跳转前的相关逻辑，返回 <code>false</code> 则无法跳转。',
        'en-US':
          'By using the<code>before-skip</code>hook function to handle the relevant logic before clicking and jumping to the menu, if<code>false</code>is returned, the jump cannot be made.'
      },
      codeFiles: ['before-skip.vue']
    },
    {
      demoId: 'before-skip-prevent',
      name: {
        'zh-CN': '默认服务的跳转前处理',
        'en-US': 'Pre jump processing for default services'
      },
      desc: {
        'zh-CN':
          '若使用默认服务 <code>/workspace/current</code> 获取菜单数据 <code>response.data.leftMenuNode.children</code>，则在使用 <code>before-skip</code> 时，需配合 <code>prevent</code> 为 <code>true</code> 来阻止默认的跳转行为。',
        'en-US':
          'If the default service<code>/workspace/current</code>is used to obtain menu data<code>response. data. leftMenuNode. children</code>, then when using<code>before-skip</code>, it is necessary to cooperate with<code>prevent</code>to prevent default jump behavior.'
      },
      codeFiles: ['before-skip-prevent.vue']
    },
    {
      demoId: 'custom-service',
      name: {
        'zh-CN': '自定义服务',
        'en-US': 'Custom Service'
      },
      desc: {
        'zh-CN':
          '通过 <code>fetch-menu-data</code> 自定义菜单服务，若数据中字段并非默认的 <code>title</code> 和 <code>url</code>，则通过 <code>fields</code> 对数据中的字段进行映射。',
        'en-US':
          'By customizing the menu service through<code>fetch-menu-data</code>, if the fields in the data are not the default<code>title</code> and <code>URL</code>, the fields in the data can be mapped through<code>fields</code>.'
      },
      codeFiles: ['custom-service.vue']
    },
    {
      demoId: 'parent-key',
      name: {
        'zh-CN': '转换树结构数据',
        'en-US': 'Transform Tree Structure Data'
      },
      desc: {
        'zh-CN': '通过 <code>parent-key</code> 标识的普通数组转换树结构数据。',
        'en-US': 'Converting tree structure data of a common array identified by <code>parent-key</code>. '
      },
      codeFiles: ['parent-key.vue']
    },
    {
      demoId: 'allow-full-url',
      name: {
        'zh-CN': '支持完整URL',
        'en-US': 'Support complete URL'
      },
      desc: {
        'zh-CN': '通过 <code>allow-full-url</code> 支持数据中包含完整 URL。',
        'en-US': 'Use <code>allow-full-url</code> to support the inclusion of a complete URL in the data.'
      },
      codeFiles: ['allow-full-url.vue']
    },
    {
      demoId: 'crm-demo',
      name: {
        'zh-CN': '自定义样式',
        'en-US': 'Custom Style'
      },
      desc: {
        'zh-CN': '通过修改 <code>css</code> 变量名自定义导航菜单样式。',
        'en-US': 'Customizing the NavMenu style by changing the <code>CSS</code> variable name. '
      },
      codeFiles: ['crm-demo.vue']
    }
  ]
}
