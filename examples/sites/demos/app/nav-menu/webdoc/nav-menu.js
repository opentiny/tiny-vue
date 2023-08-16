export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': '<p>通过 <code>data</code> 属性配置菜单数据，若不配置默认读取后台服务。</p>\n',
        'en-US':
          '<p>The <code>data</code> attribute is used to configure menu data. If the <code>data</code> attribute is not configured, the background service is read by default. For example, Jalor 6 reads the leftMenuNode data of the services/jalor/web/support/workspace/current service. </p>\n'
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'data-resource',
      'name': { 'zh-CN': '数据源', 'en-US': 'Data Source' },
      'desc': {
        'zh-CN': '<p>通过 <code>data</code> 属性配置菜单数据。</p>\n',
        'en-US': '<p>Configure menu data through the <code>data</code> attribute. </p>\n'
      },
      'codeFiles': ['data-resource.vue']
    },
    {
      'demoId': 'overflow',
      'name': { 'zh-CN': '显示策略', 'en-US': 'Display Policy' },
      'desc': {
        'zh-CN':
          '<p>当一级菜单无法在当前菜单容器里显示完全时，可以通过 <code>overflow</code> 属性配置显示策略，共有 <code>auto</code>、<code>retract</code>、<code>fixed</code>、<code>hidden</code> 4个选项，默认为 <code>auto</code>。</p>\n<div class="tip custom-block"><p class="custom-block-title">overflow 选项说明</p>\n<p>auto：菜单栏右侧显示 <code>更多</code> 菜单，鼠标悬停该菜单时，将显示剩余未展示的菜单。\nfixed：菜单栏左侧显示 <code>三明治折叠/展开</code> 图标，鼠标悬停该图标时，将显示所有菜单。\nretract：菜单栏不显示任何菜单，只显示 <code>三明治折叠/展开</code> 图标，鼠标悬停该图标时，将显示所有菜单。\nhidden：剩余未展示的菜单隐藏不显示。</p>\n</div>\n',
        'en-US':
          '<p>When the level-1 menu cannot be completely displayed in the current menu container, you can configure the display policy through the <code>overflow</code> attribute. There are four options: <code>auto</code>, <code>retract</code>, <code>fixed</code>, and <code>hidden</code>. The default value is <code>auto</code>. </p>\n<div class="tip custom-block"><p class="custom-block-title">overflow Option Description</p>\n<p>auto: The <code>More</code> menu is displayed on the right of the menu bar. When you hover over the menu, the remaining menus are displayed. \nfixed: The <code>Sandwich Collapse/Expand</code> icon is displayed on the left of the menu bar. When you hover over the icon, all menus are displayed. \nretract: No menu is displayed on the menu bar. Only the <code>Sandwich Collapse/Expand</code> icon is displayed. When you hover over the icon, all menus are displayed. \nhidden: hides the remaining menus. </p>\n</div>\n'
      },
      'codeFiles': ['overflow.vue']
    },
    {
      'demoId': 'slot-toolbar',
      'name': { 'zh-CN': 'Toolbar 插槽', 'en-US': 'Toolbar slot' },
      'desc': {
        'zh-CN': '<p>提供 <code>toolbar</code> 插槽用于自定义 Toolbar 。</p>\n',
        'en-US': '<p>Provides a <code>toolbar</code> slot for customizing the Toolbar. </p>\n'
      },
      'codeFiles': ['slot-toolbar.vue']
    },
    {
      'demoId': 'slot-logo',
      'name': { 'zh-CN': 'Logo 插槽', 'en-US': 'Logo slot' },
      'desc': {
        'zh-CN': '<p>提供 <code>logo</code> 插槽用于自定义 Logo 。</p>\n',
        'en-US': '<p>Provides a <code>logo</code> slot for customizing the logo. </p>\n'
      },
      'codeFiles': ['slot-logo.vue']
    },
    {
      'demoId': 'before-skip',
      'name': { 'zh-CN': '菜单跳转处理', 'en-US': 'Menu redirection processing' },
      'desc': {
        'zh-CN':
          '<p>提供 <code>before-skip</code> 钩子函数，用于菜单点击跳转前处理相关逻辑，返回 <code>false</code> 将无法跳转。</p>\n',
        'en-US':
          '<p>Provides the <code>before-skip</code> hook function for processing logic before a menu is clicked. If <code>false</code> is returned, the menu cannot be redirected. </p>\n'
      },
      'codeFiles': ['before-skip.vue']
    },
    {
      'demoId': 'before-skip-prevent',
      'name': {
        'zh-CN': '使用组件默认服务时，菜单跳转处理',
        'en-US': 'Menu redirection processing when the default service of the component is used'
      },
      'desc': {
        'zh-CN':
          '<p>如果使用组件的默认服务 <code>/workspace/current</code> 获取菜单数据 <code>response.data.leftMenuNode.children</code>，那么在使用 <code>before-skip</code> 时，需配置属性 <code>prevent</code>，用来阻止默认的跳转行为。属性 <code>prevent</code> 默认值为 <code>false</code>。</p>\n',
        'en-US':
          '<p>If the default service <code>/workspace/current</code> of the component is used to obtain the menu data <code>response.data.leftMenuNode.children</code>, when <code>before-skip</code> is used: The <code>prevent</code> attribute needs to be configured to prevent the default redirection behavior. The default value of the <code>prevent</code> attribute is <code>false</code>. </p>\n'
      },
      'codeFiles': ['before-skip-prevent.vue']
    },
    {
      'demoId': 'custom-service',
      'name': { 'zh-CN': '自定义服务', 'en-US': 'Custom Service' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>fetch-menu-data</code> 可以自定义菜单服务，若数据中字段不是默认的 <code>title</code>、<code>url</code>，则可以通过 <code>fields</code> 对数据中的字段进行映射。</p>\n',
        'en-US':
          '<p>You can use the <code>fetch-menu-data</code> to customize the menu service. If the fields in the data are not the default <code>title</code> and <code>url</code>, You can use <code>fields</code> to map the fields in the data. </p>\n'
      },
      'codeFiles': ['custom-service.vue']
    },
    {
      'demoId': 'crm-demo',
      'name': { 'zh-CN': '自定义样式', 'en-US': 'Custom Style' },
      'desc': {
        'zh-CN':
          '<p>通过修改css变量名自定义导航菜单样式。</p>\n',
        'en-US':
          '<p>Customizing the NavMenu style by changing the CSS variable name. </p>\n'
      },
      'codeFiles': ['crm-demo.vue']
    }
  ],
  apis: [
    {
      'name': 'nav-menu',
      'type': 'component',
      'properties': [
        {
          'name': 'data',
          'type': 'Array',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置导航菜单的数据。', 'en-US': 'Set the navigation menu data.' },
          'demoId': 'data-resource'
        },
        {
          'name': 'overflow',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '设置一级菜单无法在当前菜单容器里显示完全时的处理策略。;可选项有 auto / retract / fixed / hidden;默认值为 auto',
            'en-US':
              'Sets the processing policy when the level-1 menu cannot be completely displayed in the current menu container. ; The options are auto, retract, fixed, and hidden. The default value is auto'
          },
          'demoId': 'overflow'
        },
        {
          'name': 'before-skip',
          'type': 'Function',
          'defaultValue': '',
          'desc': {
            'zh-CN': '点击菜单跳转前的钩子函数，返回 false 将无法跳转。',
            'en-US':
              'Click the hook function before menu redirection. If false is returned, menu redirection cannot be performed.'
          },
          'demoId': 'before-skip'
        },
        {
          'name': 'fetch-menu-data',
          'type': 'Function',
          'defaultValue': '',
          'desc': {
            'zh-CN': '自定义菜单数据加载服务，返回一个Promise对象。',
            'en-US': 'Customize the menu data loading service. A Promise object is returned.'
          },
          'demoId': 'custom-service'
        },
        {
          'name': 'fields',
          'type': 'Object',
          'defaultValue': '',
          'desc': { 'zh-CN': '自定义菜单数据的映射。', 'en-US': 'User-defined menu data mapping.' },
          'demoId': 'custom-service'
        }
      ],
      'events': [],
      'slots': [
        {
          'name': 'logo',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '菜单栏 Logo 插槽', 'en-US': 'Menu Bar Logo Slot' },
          'demoId': 'slot-logo'
        }
      ]
    }
  ]
}
