export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'basic usage'
      },
      desc: {
        'zh-CN': '',
        'en-US': ''
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'current-page',
      name: {
        'zh-CN': '当前页',
        'en-US': ''
      },
      desc: {
        'zh-CN': '通过 `current-page` 设置初始加载页码数, 通过 `total` 设置总条数',
        'en-US': ''
      },
      codeFiles: ['current-page.vue']
    },
    {
      demoId: 'page-size',
      name: {
        'zh-CN': '每页显示数量',
        'en-US': ''
      },
      desc: {
        'zh-CN': '`page-sizes` 和 `page-size` 结合使用调整每页显示数量',
        'en-US': ''
      },
      codeFiles: ['page-size.vue']
    },
    {
      demoId: 'hide-on-single-page',
      name: {
        'zh-CN': '只有一页时隐藏分页',
        'en-US': ''
      },
      desc: {
        'zh-CN': '`hide-on-single-page` 只有一页时隐藏分页',
        'en-US': ''
      },
      codeFiles: ['hide-on-single-page.vue']
    },
    {
      demoId: 'custom-next-prev-text',
      name: {
        'zh-CN': '自定义上下页按钮文本',
        'en-US': ''
      },
      desc: {
        'zh-CN': '`prev-text` ,`next-text` 自定义上下页按钮文本',
        'en-US': ''
      },
      codeFiles: ['custom-next-prev-text.vue']
    },
    {
      demoId: 'pager-show-total-loading',
      name: {
        'zh-CN': '总页数显示加载中的效果',
        'en-US': ''
      },
      desc: {
        'zh-CN': '`show-total-loading` 在获取总页数 total 的过程中是否显示加载中的效果，默认值为 `false` 。',
        'en-US': ''
      },
      codeFiles: ['pager-show-total-loading.vue']
    },
    {
      demoId: 'pager-in-grid',
      name: {
        'zh-CN': 'Grid 表格使用分页组件',
        'en-US': ''
      },
      desc: {
        'zh-CN': '该示例中的 `services/getGridMockData` 服务需要自行实现，示例模拟了远程服务返回的数据',
        'en-US': ''
      },
      codeFiles: ['pager-in-grid.vue']
    },
    {
      demoId: 'pager-mode-number',
      name: {
        'zh-CN': 'number 模式',
        'en-US': ''
      },
      desc: {
        'zh-CN': '通过 `mode="number"` 设置组件渲染模式',
        'en-US': ''
      },
      codeFiles: ['pager-mode-number.vue']
    },
    {
      demoId: 'pager-mode-fixed',
      name: {
        'zh-CN': 'fixed 模式',
        'en-US': ''
      },
      desc: {
        'zh-CN': '通过 `mode="fixed"` 设置组件渲染模式',
        'en-US': ''
      },
      codeFiles: ['pager-mode-fixed.vue']
    },
    {
      demoId: 'pager-mode-simple',
      name: {
        'zh-CN': 'simple 模式',
        'en-US': ''
      },
      desc: {
        'zh-CN': '通过 `mode="simple"` 设置组件渲染模式',
        'en-US': ''
      },
      codeFiles: ['pager-mode-simple.vue']
    },
    {
      demoId: 'pager-mode-complete',
      name: {
        'zh-CN': 'complete 模式',
        'en-US': ''
      },
      desc: {
        'zh-CN': '通过 `mode="complete"` 设置组件渲染模式',
        'en-US': ''
      },
      codeFiles: ['pager-mode-complete.vue']
    },
    {
      demoId: 'page-append-to-body',
      name: {
        'zh-CN': '分页下拉框显示位置',
        'en-US': ''
      },
      desc: {
        'zh-CN': '`popper-append-to-body` 分页下拉框元素是否追加到 body 元素节点下，默认值为 `true` 。',
        'en-US': ''
      },
      codeFiles: ['page-append-to-body.vue']
    },
    {
      demoId: 'custom-layout',
      name: {
        'zh-CN': '自定义分页布局',
        'en-US': ''
      },
      desc: {
        'zh-CN':
          '`layout` 设置分页布局，通过在`layout`里调整`slot`的位置，从而调整插槽内容渲染的位置。如果想隐藏某些模块，直接将此模块在 `layout` 中删除即可。',
        'en-US': ''
      },
      codeFiles: ['custom-layout.vue']
    },
    {
      demoId: 'pager-custom-total',
      name: {
        'zh-CN': '使用组件内置总条数显示规则',
        'en-US': ''
      },
      desc: {
        'zh-CN':
          '`custom-total` 为 true 时使用组件内置总条数显示规则：0 ～ 99999，显示具体数值；100000 ～ 999999 显示 10 万+；1000000 ～ 9999999 显示 100 万+；超过 10000000，1 千万+。默认值为 `false`，也可以传入一个字符串类型的数据显示指定内容 。。',
        'en-US': ''
      },
      codeFiles: ['pager-custom-total.vue']
    },
    {
      demoId: 'pager-events',
      name: {
        'zh-CN': '分页事件',
        'en-US': ''
      },
      desc: {
        'zh-CN': '`size-change` 每页条数改变时触发',
        'en-US': ''
      },
      codeFiles: ['pager-events.vue']
    },
    {
      demoId: 'pager-events-current-change',
      name: {
        'zh-CN': '切换当前页码时触发',
        'en-US': ''
      },
      desc: {
        'zh-CN': '`current-change` 切换当前页码时触发',
        'en-US': ''
      },
      codeFiles: ['pager-events-current-change.vue']
    },
    {
      demoId: 'pager-events-prev-clicke',
      name: {
        'zh-CN': '切换至前一页时触发',
        'en-US': ''
      },
      desc: {
        'zh-CN': '`prev-click` 切换至前一页时触发',
        'en-US': ''
      },
      codeFiles: ['pager-events-prev-click.vue']
    },
    {
      demoId: 'pager-events-nextclick',
      name: {
        'zh-CN': '切换至后一页时触发',
        'en-US': ''
      },
      desc: {
        'zh-CN': '`prev-click` 切换至前一页时触发',
        'en-US': ''
      },
      codeFiles: ['pager-events-nextclick.vue']
    },
    {
      demoId: 'before-page-change',
      name: {
        'zh-CN': '切换分页前事件',
        'en-US': ''
      },
      desc: {
        'zh-CN': '`before-page-change` 切换分页前事件',
        'en-US': ''
      },
      codeFiles: ['before-page-change.vue']
    }
  ]
}
