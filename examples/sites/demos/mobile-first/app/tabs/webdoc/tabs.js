export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'mobile-first',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>v-model</code> 设置初始激活的标签页，绑定的值对应 <code>tiny-tab-item</code> 元素中 <code>name</code> 属性的值。一个 <code>tiny-tab-item</code> 为一个标签页，通过 <code>title</code> 属性设置标签页标题。</p>',
        'en-US':
          '<p>Use <code>v-model</code> to set the tab page for initial activation. The bound value corresponds to the value of the <code>name</code> attribute in the <code>tiny-tab-item</code> element. A <code>tiny-tab-item</code> is a tab. You can use the <code>title</code> attribute to set the tab title.</p>'
      },
      codeFiles: ['mobile-first.vue']
    },
    {
      demoId: 'align-center',
      name: {
        'zh-CN': '居中对齐',
        'en-US': 'Center Alignment'
      },
      desc: {
        'zh-CN': '<p>在小屏下，页签项较少并且可以完全显示时，页签项默认居中对齐。</p>',
        'en-US':
          '<p>On a small screen, when there are few tab items and the tab items can be fully displayed, the tab items are center-aligned by default.</p>'
      },
      codeFiles: ['align-center.vue']
    },
    {
      demoId: 'tab-style-card',
      name: {
        'zh-CN': 'card 类型',
        'en-US': 'card type'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>tab-style</code> 设置标签页风格类型，默认为 <code>card</code> 通过 <code>active-name</code> 设置初始激活的标签页 。</p>',
        'en-US':
          '<p>Use <code>tab-style</code> to set the tab style type. The default value is <code>card</code>. Use <code>active-name</code> to set the initially activated tab</p>'
      },
      codeFiles: ['tab-style-card.vue']
    },
    {
      demoId: 'tab-style-bordercard',
      name: {
        'zh-CN': 'bordercard 类型',
        'en-US': 'bordercard type'
      },
      desc: {
        'zh-CN': '<p>通过 <code>tab-style</code> 设置标签页风格类型为 <code>bordercard</code> 。</p>',
        'en-US': '<p>Click <code>tab-style</code> to set the tab style to <code>bordercard</code>.</p>'
      },
      codeFiles: ['tab-style-bordercard.vue']
    },
    {
      demoId: 'with-add',
      name: {
        'zh-CN': '标签页可增加',
        'en-US': 'The tab page can be added'
      },
      desc: {
        'zh-CN':
          '<p>设置 <code>with-add</code> 属性启用标签可增加功能。<br />同时通过 <code>add</code> 事件自定义实现增加标签页的逻辑。配置 <code>show-more-tabs</code> 属性后当标签页超过一定宽度时将显示 <code>更多</code> 按钮。</p>',
        'en-US':
          '<p>Set the <code>with-add</code> attribute to enable the tag to add functions. <br />In addition, the <code>add</code> event is customized to implement the logic of adding tabs. After the <code>show-more-tabs</code> attribute is configured, the <code>More</code> button is displayed when the tab page exceeds a certain width</p>'
      },
      codeFiles: ['with-add.vue']
    },
    {
      demoId: 'tabs-events-close',
      name: {
        'zh-CN': '标签页可关闭',
        'en-US': 'The tab page can be closed.'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>withClose</code> 属性设置是否可关闭标签页。同时可通过 <code>close</code> 事件自定义实现关闭标签页的逻辑。</p>',
        'en-US':
          '<p>Set the <code>withClose</code> attribute to determine whether to close the tab page. In addition, the <code>close</code> event can be used to customize the logic for closing the tab page.</p>'
      },
      codeFiles: ['tabs-events-close.vue']
    },
    {
      demoId: 'before-leave',
      name: {
        'zh-CN': '离开前事件',
        'en-US': 'Pre-departure events'
      },
      desc: {
        'zh-CN':
          '<p><code>before-leave</code> 切换标签之前的钩子函数，若返回 <code>false </code>或者返回 <code>Promise</code> 且被<code> reject</code>，则阻止切换，返回<code> true</code> 则可以切换。</p>',
        'en-US':
          '<p>code>before-leave</code>: If <code>false </code> is returned or <code>Promise</code> is returned and is rejected</code>, the switchover is blocked. <code> true</code> can be switched.</p>'
      },
      codeFiles: ['before-leave.vue']
    },
    {
      demoId: 'stretch-wh',
      name: {
        'zh-CN': '可自动撑开',
        'en-US': 'Can be self-expanded'
      },
      desc: {
        'zh-CN': '<p><code>stretch</code> 属性设置标签的宽度是否自撑开，默认为<code> false</code> 。</p>',
        'en-US':
          '<p>The <code>stretch</code> attribute specifies whether the width of the tag is self-expanded. The default value is <code> false</code>.</p>'
      },
      codeFiles: ['stretch-wh.vue']
    },
    {
      demoId: 'tabs-events-add',
      name: {
        'zh-CN': 'add 事件',
        'en-US': 'add events'
      },
      desc: {
        'zh-CN': '<p>点击新增按钮增加标签页时触发 <code>add</code> 事件</p>',
        'en-US': '<p>The <code>add</code> event is triggered when the Add button is clicked to add a tab page.</p>'
      },
      codeFiles: ['tabs-events-add.vue']
    },
    {
      demoId: 'tabs-events-click',
      name: {
        'zh-CN': 'click 事件',
        'en-US': 'click events'
      },
      desc: {
        'zh-CN': '<p>单击标签页时触发 <code>click</code> 事件</p>',
        'en-US': '<p>The <code>click</code> event is triggered when a tab page is clicked.</p>'
      },
      codeFiles: ['tabs-events-click.vue']
    },
    {
      demoId: 'tabs-events-close2',
      name: {
        'zh-CN': 'close 事件',
        'en-US': 'close events'
      },
      desc: {
        'zh-CN': '<p>关闭标签页时触发 <code>close</code> 事件</p>',
        'en-US': '<p>The <code>close</code> event is triggered when a tab page is closed.</p>'
      },
      codeFiles: ['tabs-events-close.vue']
    },
    {
      demoId: 'custom-tab-title',
      name: {
        'zh-CN': '自定义标签页标题',
        'en-US': 'Custom Tab Title'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>tiny-tab-item</code> 的 <code>title</code> 插槽自定义标签页标题，比如在标题前增加图标。</p>',
        'en-US':
          '<p>se the <code>title</code> slot of <code>tiny-tab-item</code> to customize the tab title, for example, add an icon before the title.</p>'
      },
      codeFiles: ['custom-tab-title.vue']
    },
    {
      demoId: 'tabdata-title',
      name: {
        'zh-CN': '循环创建标签页',
        'en-US': 'Create a tab page in a cycle.'
      },
      desc: {
        'zh-CN': '<p>通过 <code>v-for</code> 根据数据循环创建多个 <code>tiny-tab-item</code> 。</p>',
        'en-US':
          '<p>Use <code>v-for</code> to create multiple <code>tiny-tab-items</code> based on data cyclically.</p>'
      },
      codeFiles: ['tabdata-title.vue']
    },
    {
      demoId: 'show-echarts',
      name: {
        'zh-CN': '标签页切换显示不同图表',
        'en-US': 'Tabs switch to display different charts'
      },
      desc: {
        'zh-CN':
          '<p>Tabs 组件里使用 Chart 组件要调用 Chart 实例方法 <code>resize()</code>，例如示例中的 <code>this.$refs.firstChart.resize()</code>，这样才能让 Chart 自适应父元素响应变化。</p>',
        'en-US':
          '<p>o use the Chart component in the Tabs component, you need to invoke the chart instance method <code>resize()</code>, for example, <code>this.$refs.firstChart.resize()</code> in the example. In this way, the chart can adapt to the change of the parent element.</p>'
      },
      codeFiles: ['show-echarts.vue']
    },
    {
      demoId: 'show-different-grid-data',
      name: {
        'zh-CN': '标签页切换不同 Grid',
        'en-US': 'Tab Page Switching Between Grids'
      },
      desc: {
        'zh-CN':
          '<p>Tabs 组件里使用 Grid 组件需要 Grid 设置属性 <code>:auto-resize="true"</code>，这样才能让 Grid 自适应父元素响应变化。</p>',
        'en-US':
          '<p>To use the Grid component in the Tabs component, you need to set the Grid attribute <code>:auto-resize="true"</code> so that the Grid can adapt to the changes of the parent element.</p>'
      },
      codeFiles: ['show-different-grid-data.vue']
    },
    {
      demoId: 'tabs-tabs',
      name: {
        'zh-CN': '标签页嵌套1',
        'en-US': 'Tab nesting'
      },
      desc: {
        'zh-CN': '<p> 可将 子 tabs 作为 父 tabs 的 <code>tab-item</code> 嵌套显示标签页</p>',
        'en-US': '<p>The <code>tab-item</code> tab can be nested with a child tab as a parent tab.</p>'
      },
      codeFiles: ['tabs-tabs.vue']
    },
    {
      demoId: 'tabs-separator',
      name: {
        'zh-CN': '标签页嵌套2',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p> 通过 <code>separator</code>属性设置分隔符</p>',
        'en-US': '<p>Set the separator using the <code>separator</code> attribute.</p>'
      },
      codeFiles: ['tabs-separator.vue']
    }
  ],
  apis: []
}
