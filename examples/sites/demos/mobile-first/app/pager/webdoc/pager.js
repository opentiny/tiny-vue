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
      demoId: 'current-change',
      name: {
        'zh-CN': '当前页改变事件',
        'en-US': ''
      },
      desc: {
        'zh-CN': '`current-change` 切换当前页码时触发',
        'en-US': ''
      },
      codeFiles: ['current-change.vue']
    },
    {
      demoId: 'prev-click',
      name: {
        'zh-CN': '上一页事件',
        'en-US': ''
      },
      desc: {
        'zh-CN': '`prev-click` 切换至前一页时触发',
        'en-US': ''
      },
      codeFiles: ['prev-click.vue']
    },
    {
      demoId: 'next-click',
      name: {
        'zh-CN': '下一页事件',
        'en-US': ''
      },
      desc: {
        'zh-CN': '`next-click` 切换至后一页时触发',
        'en-US': ''
      },
      codeFiles: ['next-click.vue']
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
