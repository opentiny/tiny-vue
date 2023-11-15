export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': '通过 <code>data</code> 配置菜单数据。',
        'en-US': 'The <code>data</code> is used to configure menu data.'
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'overflow',
      'name': { 'zh-CN': '超出显示', 'en-US': 'Exceeding display' },
      'desc': {
        'zh-CN': `当一级菜单内容过多溢出时，通过 <code>overflow</code> 配置显示方式，共有 <code>auto</code>、<code>retract</code>、<code>fixed</code>、<code>hidden</code> 4种方式，默认为 <code>auto</code>。
          <div class="tip custom-block"><p class="custom-block-title">overflow 选项说明</p>\n<p>
          auto：菜单栏右侧显示 <code>更多</code> 菜单，鼠标悬停该菜单时，将显示剩余未展示的菜单；<br/>
          fixed：菜单栏左侧显示 <code>三明治折叠/展开</code> 图标，鼠标悬停该图标时，将显示所有菜单；<br/>
          retract：菜单栏不显示任何菜单，只显示 <code>三明治折叠/展开</code> 图标，鼠标悬停该图标时，将显示所有菜单；<br/>
          hidden：剩余未展示的菜单隐藏不显示。</p></div>`,
        'en-US': `When there is too much content in the first level menu that overflows, configure the display mode through<code>overflow</code>. There are four modes:<code>auto</code>,<code>retract</code>,<code>fixed</code>, and<code>hidden</code>. The default is<code>auto</code>.
        <div class="tip custom-block"><p class="custom-block-title">Overview Options Description</p>\n<p>
        auto: The<code>More</code>menu is displayed on the right side of the menu bar. When the mouse hovers over this menu, the remaining undisclosed menus will be displayed< br/>
        fixed: The<code>sandwich fold/expand</code>icon is displayed on the left side of the menu bar. When the mouse hovers over this icon, all menus will be displayed< br/>
        retract: The menu bar does not display any menus, only displays the<code>sandwich fold/expand</code>icon. When the mouse hovers over this icon, all menus will be displayed< br/>
        hidden: The remaining undisclosed menus are hidden and not displayed.</p> </div>`
      },
      'codeFiles': ['overflow.vue']
    },
    {
      'demoId': 'slot-toolbar',
      'name': { 'zh-CN': '定义工具栏', 'en-US': 'Custom Toolbar' },
      'desc': {
        'zh-CN': '通过 <code>toolbar</code> 插槽自定义工具栏。',
        'en-US': 'Customize the toolbar through the<code>toolbar</code>slot.'
      },
      'codeFiles': ['slot-toolbar.vue']
    },
    {
      'demoId': 'slot-logo',
      'name': { 'zh-CN': '定义Logo', 'en-US': 'Custom Logo' },
      'desc': {
        'zh-CN': '通过 <code>logo</code> 插槽自定义 Logo 。',
        'en-US': 'Customize the logo through the<code>logo</code>slot.'
      },
      'codeFiles': ['slot-logo.vue']
    },
    {
      'demoId': 'before-skip',
      'name': { 'zh-CN': '跳转前处理', 'en-US': 'Pre jump processing' },
      'desc': {
        'zh-CN':
          '通过 <code>before-skip</code> 钩子函数处理菜单点击跳转前的相关逻辑，返回 <code>false</code> 则无法跳转。',
        'en-US':
          'By using the<code>before-skip</code>hook function to handle the relevant logic before clicking and jumping to the menu, if<code>false</code>is returned, the jump cannot be made.'
      },
      'codeFiles': ['before-skip.vue']
    },
    {
      'demoId': 'before-skip-prevent',
      'name': {
        'zh-CN': '默认服务的跳转前处理',
        'en-US': 'Pre jump processing for default services'
      },
      'desc': {
        'zh-CN':
          '若使用默认服务 <code>/workspace/current</code> 获取菜单数据 <code>response.data.leftMenuNode.children</code>，则在使用 <code>before-skip</code> 时，需配合 <code>prevent</code> 为 <code>true</code> 来阻止默认的跳转行为。',
        'en-US':
          'If the default service<code>/workspace/current</code>is used to obtain menu data<code>response. data. leftMenuNode. children</code>, then when using<code>before-skip</code>, it is necessary to cooperate with<code>prevent</code>to prevent default jump behavior.'
      },
      'codeFiles': ['before-skip-prevent.vue']
    },
    {
      'demoId': 'custom-service',
      'name': { 'zh-CN': '自定义服务', 'en-US': 'Custom Service' },
      'desc': {
        'zh-CN':
          '通过 <code>fetch-menu-data</code> 自定义菜单服务，若数据中字段并非默认的 <code>title</code> 和 <code>url</code>，则通过 <code>fields</code> 对数据中的字段进行映射。',
        'en-US':
          'By customizing the menu service through<code>fetch-menu-data</code>, if the fields in the data are not the default<code>title</code> and <code>URL</code>, the fields in the data can be mapped through<code>fields</code>.'
      },
      'codeFiles': ['custom-service.vue']
    },
    {
      'demoId': 'crm-demo',
      'name': { 'zh-CN': '自定义样式', 'en-US': 'Custom Style' },
      'desc': {
        'zh-CN': '通过修改 <code>css</code> 变量名自定义导航菜单样式。',
        'en-US': 'Customizing the NavMenu style by changing the <code>CSS</code> variable name. '
      },
      'codeFiles': ['crm-demo.vue']
    }
  ],
  apis: [
    {
      'name': 'nav-menu',
      'type': 'component',
      'props': [
        {
          'name': 'before-skip',
          'type': '(item: IMenuItem) => boolean',
          'typeAnchorName': 'IMenuItem',
          'defaultValue': '',
          'desc': {
            'zh-CN': '点击菜单跳转前的钩子函数，返回 false 将无法跳转',
            'en-US':
              'Click the hook function before menu redirection. If false is returned, menu redirection cannot be performed'
          },
          'demoId': 'before-skip'
        },
        {
          'name': 'data',
          'type': 'IDataItem[]',
          'typeAnchorName': 'IDataItem',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置导航菜单的数据', 'en-US': 'Set the navigation menu data' },
          'demoId': 'basic-usage'
        },
        {
          'name': 'fetch-menu-data',
          'type': '() => IDataItem[]',
          'typeAnchorName': 'IMenuItem',
          'defaultValue': '',
          'desc': {
            'zh-CN': '自定义菜单数据加载服务，返回一个Promise对象',
            'en-US': 'Customize the menu data loading service. A Promise object is returned'
          },
          'demoId': 'custom-service'
        },
        {
          'name': 'fields',
          'type': 'IFields',
          'typeAnchorName': 'IFields',
          'defaultValue': '{ textField: "title", urlField: "url", key: "id" }',
          'desc': { 'zh-CN': '自定义菜单数据的映射', 'en-US': 'User-defined menu data mapping' },
          'demoId': 'custom-service'
        },
        {
          'name': 'overflow',
          'type': 'string',
          'defaultValue': 'auto',
          'desc': {
            'zh-CN': '设置一级菜单无法在当前菜单容器里显示完全时的展示方式;可选项有 auto / retract / fixed / hidden',
            'en-US':
              'Set the display method when the first level menu cannot be fully displayed in the current menu container; Options include auto/retract/fixed/hidden'
          },
          'demoId': 'overflow'
        },
        {
          'name': 'prevent',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '若使用组件的默认服务获取菜单数据，并且要阻止默认的跳转行为，需要 before-skip 和此属性一起使用',
            'en-US':
              'If you use the default service of the component to obtain menu data and want to prevent default jump behavior, you need to use before-skip in conjunction with this attribute'
          },
          'demoId': 'before-skip-prevent'
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
        },
        {
          'name': 'toolbar',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '自定义右上角部分 toolbar 插槽',
            'en-US': 'Customize the toolbar slot in the upper right corner'
          },
          'demoId': 'slot-toolbar'
        }
      ]
    }
  ],
  types: [
    {
      name: 'IMenuItem',
      type: 'interface',
      code: `
interface IMenuItem {
  id: string
  isFullUrl: boolean
  pid: string
  route: string
  target: string
  title: string
  url: string
}`
    },
    {
      name: 'IDataItem',
      type: 'interface',
      code: `
interface IDataItem {
  title: string
  url: string
  children?: IDataItem[]
}`
    },
    {
      name: 'IFields',
      type: 'interface',
      code: `
interface IFields {
  textField: string
  urlField: string
  key?: string
}`
    }
  ]
}
