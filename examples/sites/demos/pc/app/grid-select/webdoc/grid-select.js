export default {
  column: '2',
  owner: '',
  show: true,
  cloud: true,
  meta: {
    experimental: '3.27.0'
  },
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本下拉表格',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN': '<p>通过 <code>grid-op</code> 设置表格列与数据，<code>v-model</code> 绑定选中值。</p>',
        'en-US': '<p>Configure the internal grid via <code>grid-op</code> and bind the selection with <code>v-model</code>.</p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'config',
      name: {
        'zh-CN': '禁用选项',
        'en-US': 'Disable option'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>radio-config</code> / <code>select-config</code> 的 <code>checkMethod</code> 控制某些行不可选，并支持 <code>trigger: row</code> 开启整行点击。</p>',
        'en-US':
          '<p>Use <code>radio-config</code> / <code>select-config</code> with <code>checkMethod</code> to disable rows and enable row-click selection.</p>'
      },
      codeFiles: ['config.vue']
    },
    {
      demoId: 'remote',
      name: {
        'zh-CN': '远程搜索',
        'en-US': 'Remote'
      },
      desc: {
        'zh-CN':
          '<p>配合 <code>remote</code>、<code>remote-method</code> 与 <code>reserve-keyword</code> 实现远程搜索，并分别展示单选与多选场景。</p>',
        'en-US':
          '<p>Demonstrates remote searching with <code>remote</code>, <code>remote-method</code> and keyword reservation for both single and multiple selection.</p>'
      },
      codeFiles: ['remote.vue']
    },
    {
      demoId: 'init-query',
      name: {
        'zh-CN': '表格初始化查询',
        'en-US': 'Init query'
      },
      desc: {
        'zh-CN':
          '<p>利用 <code>init-query</code> 在远程模式下初始化表格数据，并展示单选与多选的默认值回显。</p>',
        'en-US':
          '<p>Loads remote data at startup via <code>init-query</code> and shows how default values are rendered for both modes.</p>'
      },
      codeFiles: ['init-query.vue']
    },
    {
      demoId: 'extra-query-params',
      name: {
        'zh-CN': '表格初始化查询传参',
        'en-US': 'Extra query params'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>extra-query-params</code> 将父级选择结果传递给子级下拉表格，实现级联查询与选项联动。</p>',
        'en-US':
          '<p>Shows how <code>extra-query-params</code> passes parent selections to a child dropdown to build cascading queries.</p>'
      },
      codeFiles: ['extra-query-params.vue']
    },
    {
      demoId: 'radio-bigdata',
      name: {
        'zh-CN': '下拉表格大数据',
        'en-US': 'Large dataset'
      },
      desc: {
        'zh-CN':
          '<p>一次性加载数百条记录，结合 Grid 的虚拟滚动仍可保持顺畅的选择体验。</p>',
        'en-US':
          '<p>Loads hundreds of rows to illustrate how TinyGrid’s virtual scrolling keeps the dropdown responsive.</p>'
      },
      codeFiles: ['radio-bigdata.vue']
    }
  ]
}
