export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'mobile-first',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>通过 `v-model` 设置初始激活的标签页，绑定的值对应 `tiny-tab-item` 元素中 `name` 属性的值。一个 `tiny-tab-item` 为一个标签页，通过 `title` 属性设置标签页标题。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['mobile-first.vue']
    },
    {
      demoId: 'align-center',
      name: {
        'zh-CN': '居中对齐',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>在小屏下，页签项较少并且可以完全显示时，页签项默认居中对齐。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['align-center.vue']
    },
    {
      demoId: 'tab-style-card',
      name: {
        'zh-CN': 'card 类型',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过 `tab-style` 设置标签页风格类型，默认为 `card` 通过 `active-name` 设置初始激活的标签页 。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['tab-style-card.vue']
    },
    {
      demoId: 'tab-style-bordercard',
      name: {
        'zh-CN': 'bordercard 类型',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过 `tab-style` 设置标签页风格类型为 `bordercard` 。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['tab-style-bordercard.vue']
    },
    {
      demoId: 'with-add',
      name: {
        'zh-CN': '标签页可增加',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>设置 `with-add` 属性启用标签可增加功能。同时通过 `add` 事件自定义实现增加标签页的逻辑。配置 `show-more-tabs` 属性后当标签页超过一定宽度时将显示 `更多` 按钮。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['with-add.vue']
    },
    {
      demoId: 'tabs-events-close',
      name: {
        'zh-CN': '标签页可关闭',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过 `withClose` 属性设置是否可关闭标签页。同时可通过 `close` 事件自定义实现关闭标签页的逻辑。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['tabs-events-close.vue']
    },
    {
      demoId: 'before-leave',
      name: {
        'zh-CN': '离开前事件',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>`before-leave` 切换标签之前的钩子函数，若返回 false 或者返回 Promise 且被 reject，则阻止切换，返回 true 则可以切换。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['before-leave.vue']
    },
    {
      demoId: 'stretch-wh',
      name: {
        'zh-CN': '可自动撑开',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>`stretch` 属性设置标签的宽度是否自撑开，默认为 false 。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['stretch-wh.vue']
    },
    {
      demoId: 'tabs-events-add',
      name: {
        'zh-CN': 'add 事件',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>点击新增按钮增加标签页时触发 `add` 事件<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['tabs-events-add.vue']
    },
    {
      demoId: 'tabs-events-click',
      name: {
        'zh-CN': 'click 事件',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>单击标签页时触发 `click` 事件<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['tabs-events-click.vue']
    },
    {
      demoId: 'tabs-events-close2',
      name: {
        'zh-CN': 'close 事件',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>关闭标签页时触发 `close` 事件<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['tabs-events-close.vue']
    },
    {
      demoId: 'custom-tab-title',
      name: {
        'zh-CN': '自定义标签页标题',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过 `tiny-tab-item` 的 `title` 插槽自定义标签页标题，比如在标题前增加图标。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['custom-tab-title.vue']
    },
    {
      demoId: 'tabdata-title',
      name: {
        'zh-CN': '循环创建标签页',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过 `v-for` 根据数据循环创建多个 `tiny-tab-item` 。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['tabdata-title.vue']
    },
    {
      demoId: 'show-echarts',
      name: {
        'zh-CN': '标签页切换显示不同图表',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>Tabs 组件里使用 Chart 组件要调用 Chart 实例方法 `resize()`，例如示例中的 `this.$refs.firstChart.resize()`，这样才能让 Chart 自适应父元素响应变化。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['show-echarts.vue']
    },
    {
      demoId: 'show-different-grid-data',
      name: {
        'zh-CN': '标签页切换不同 Grid',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>Tabs 组件里使用 Grid 组件需要 Grid 设置属性 `:auto-resize="true"`，这样才能让 Grid 自适应父元素响应变化。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['show-different-grid-data.vue']
    },
    {
      demoId: 'tabs-tabs',
      name: {
        'zh-CN': '标签页嵌套',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p> 可将 子 tabs 作为 父 tabs 的 tab-item 嵌套显示标签页<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['tabs-tabs.vue']
    }
  ],
  apis: []
}
