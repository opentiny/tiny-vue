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
        'zh-CN': '<p>基本用法<p>',
        'en-US': '<p>Basic Usage</p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'title',
      name: {
        'zh-CN': '标题',
        'en-US': 'Custom title'
      },
      desc: {
        'zh-CN':
          '<p>通过 title 来设置小屏时，弹窗顶部的标题名字。 通过 showHeader 来设置小屏时，是否显示标题，默认为true。<p>',
        'en-US':
          '<p>The title name at the top of the pop-up window when the small screen is set by title. Whether to display the title when using showHeader to set the small screen. The default is true.</p>'
      },
      codeFiles: ['title.vue']
    },
    {
      demoId: 'level-title',
      name: {
        'zh-CN': '级联标题',
        'en-US': 'Cascade header'
      },
      desc: {
        'zh-CN': '<p>通过 level-title 来设置小屏时，弹窗级联各列的标题，默认显示为 "请选择"<p>',
        'en-US': '<p>Basic Usage</p>'
      },
      codeFiles: ['level-title.vue']
    },
    {
      demoId: 'filter-method',
      name: {
        'zh-CN': '自定义搜索逻辑',
        'en-US': 'Customized search logic'
      },
      desc: {
        'zh-CN':
          '<p><code>filter-method</code> 自定义搜索逻辑，第一个参数是节点 node，第二个参数是搜索关键词 keyword，通过返回布尔值表示是否命中,如果需要搜索到父级，通过 props.checkStrictly = true 来设置父子节点取消选中关联，从而达到选择任意一级选项的目的。默认单选模式下，只能选择叶子节点。</p>\n',
        'en-US':
          '<p><code>filter-method</code> customizes the search logic. The first parameter is node, and the second parameter is keyword. A boolean value is returned to indicate whether the search is hit. To select a parent, set props.checkStrictly = true to deselect the parent and child nodes. In this way, the purpose of selecting any level of option is achieved. In the default single-choice mode, only leaf nodes can be selected. </p>\n'
      },
      codeFiles: ['filter-method.vue']
    },
    {
      demoId: 'check-strictly',
      name: {
        'zh-CN': '父子级不相关联',
        'en-US': 'The parent and child levels are not associated.'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>props.checkStrictly = true</code> 来设置父子节点取消选中关联，从而达到选择任意一级选项的目的。默认单选模式下，只能选择叶子节点。</p>\n',
        'en-US':
          '<p>The <code>props.checkStrictly = true</code> is used to set the association between the parent and child nodes. In this way, any level of options can be selected. In the default single-choice mode, only leaf nodes can be selected. </p>\n'
      },
      codeFiles: ['check-strictly.vue']
    },
    {
      demoId: 'disabled-items',
      name: {
        'zh-CN': '禁用选项',
        'en-US': 'Disable Options'
      },
      desc: {
        'zh-CN':
          '<p>\n            <div>通过在数据源<code>option</code>中设置 <code>disabled</code> 字段来声明该选项是禁用的，在默认情况下，Cascader 会检查数据中每一项的 <code>disabled</code> 字段是否为 <code>true</code>。</div>\n            <div>也可以通过直接设置 <code>disabled</code> 可以禁用组件。</div>\n          </p>',
        'en-US':
          '<p>\n            <div>Declare that the option is disabled by setting the <code>disabled</code> field in the data source; by default, Cascader checks to see if the <code>disabled</code> field is <code>true</code> for each item in the data. </div>\n            <div> Components can also be disabled by setting <code>disabled</code> directly.</div>\n          </p>'
      },
      codeFiles: ['disabled-items.vue']
    },
    {
      demoId: 'auto-load',
      name: {
        'zh-CN': '动态加载',
        'en-US': 'Dynamic loading'
      },
      desc: {
        'zh-CN':
          '\n          <p>\n            <div>当选中某一级时，动态加载该级下的选项。</dvi>\n            <div>通过 <code>props</code> 属性中的 <code>lazy</code> 开启动态加载，并通过 <code>lazyload</code> 来设置加载数据源的方法。</div>\n            <div><code>lazyload</code> 方法有两个参数，第一个参数 node 为当前点击的节点，第二个 resolve 为数据加载完成的回调(必须调用)。</div>\n            <p>\n              <div>为了更准确的显示节点的状态，默认地（默认指没有设置<code>props.leaf</code>）可以使用<code>leaf</code>字段。</div>\n              <div>表明此节点是否为叶子节点，否则会简单地以有无子节点来判断是否为叶子节点。</div>\n            </p>\n          </p>\n        ',
        'en-US':
          '\n          <p>\n            <div> When a level is selected, dynamically loads the options under that level. </dvi>\n            <div> enables dynamic loading with <code>lazy</code> in the <code>props</code> property, and sets the method of loading the data source with <code>lazyload</code>. </div>\n            <div>The<code>lazyload</code> method takes two arguments, node for the current clicked node, and resolve for the callback (which must be called) when the data is loaded. </div>\n            <p>\n            <div> In order to more accurately display the state of the node, the <code>leaf</code> field can be used by default (the default means that <code>props.leaf</code> is not set). </div>\n            <div> indicates whether this node is a leaf, otherwise it is simply determined by the presence or absence of child nodes. </div>\n            </p>\n          </p>\n        '
      },
      codeFiles: ['lazy-load.vue']
    },
    {
      demoId: 'placeholder',
      name: {
        'zh-CN': '占位符',
        'en-US': 'Placeholder'
      },
      desc: {
        'zh-CN': '<p>通过设置 placeholder 来设置占位符。<p>',
        'en-US': '<p>Placeholders are set by setting placeholder.</p>'
      },
      codeFiles: ['placeholder.vue']
    }
  ]
}
