export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': `<p>通过 <code>data</code> 设置树形菜单的数据。<br>
        注意：由于树形菜单是通过节点 id 来查找子节点和关联父节点的，所以必须保证 id 的必填性和唯一性。<br>
        树形菜单移动端最多只能展示两层数据结构<p>`,
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'actived-keys',
      name: {
        'zh-CN': '默认高亮',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过 `actived-keys` 设置初始化展开的某个节点高亮。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['actived-keys.vue']
    },
    {
      demoId: 'empty-text',
      name: {
        'zh-CN': '自定义空数据文本',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过属性 `empty-text` 配置空数据显示文本。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['empty-text.vue']
    },
    {
      demoId: 'expand-all',
      name: {
        'zh-CN': '默认展开全部菜单',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过属性 `expand-all` 配置默认展开全部菜单。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['expand-all.vue']
    },
    {
      demoId: 'expanded-keys',
      name: {
        'zh-CN': '默认展开某节点',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过 `expanded-keys` 设置初始化展开某一节点 。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['expanded-keys.vue']
    },
    {
      demoId: 'filter-node',
      name: {
        'zh-CN': '菜单搜索',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可配置 `show-filter` 开启菜单搜索。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['filter-node.vue']
    },
    {
      demoId: 'only-check-children',
      name: {
        'zh-CN': '父级不可选，只能选无子级项',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过属性 `only-check-children` 配置父级点击只能展开，不能跳转。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['only-check-children.vue']
    },
    {
      demoId: 'event-current-change',
      name: {
        'zh-CN': '事件1',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>`current-change` 当前选中节点变化时触发的事件。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['event-current-change.vue']
    },
    {
      demoId: 'event-node-click',
      name: {
        'zh-CN': '事件2',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>`node-click` 节点被点击时的回调。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['event-node-click.vue']
    },
    {
      demoId: 'with-icon',
      name: {
        'zh-CN': '带图标',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过在 data 里面配置`customIcon`属性进行图标组件传值，设置带图标树形菜单<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['with-icon.vue']
    }
  ],
  apis: []
}
