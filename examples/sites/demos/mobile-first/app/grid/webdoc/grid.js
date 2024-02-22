export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '标签式',
        'en-US': 'Enumerated single-choice'
      },
      desc: {
        'zh-CN': '<p>配置 <code>SaaS</code> 主题，并指定具体的视图类型，可切换表格显示样式</p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'column-anchor',
      name: {
        'zh-CN': '列锚点',
        'en-US': 'column anchor point'
      },
      desc: {
        'zh-CN':
          '\n        <p>\n          <p>表格属性 <code>columnAnchor</code> 支持配置一组列锚点，单个锚点配置支持三种格式：</p>\n          A、字符串。即直接指定列名称。\n          B、字符串数组。指定列名称、别名和自定义渲染函数。\n          C、对象。指定列名称、别名、是否激活、自定义渲染函数和滚动延时。\n          默认激活第一个列锚点，可以通过对象格式指定激活某一个列锚点。\n        </p>\n        ',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['column-anchor.vue']
    },
    {
      demoId: 'operation-column',
      name: {
        'zh-CN': '操作列',
        'en-US': 'Operation column'
      },
      desc: {
        'zh-CN':
          '<p>列类型 <code>type</code> 设置为 <code>operation</code>，并通过 <code>operation-config</code> 指定操作列配置</p>',
        'en-US': '<p></p>'
      },
      codeFiles: ['operation-column.vue']
    },
    {
      demoId: 'height-auto',
      name: {
        'zh-CN': '自动高度',
        'en-US': 'Operation column'
      },
      desc: {
        'zh-CN':
          '<p>指定表格容器高度，并设置表格高度 <code>height</code> 为 <code>auto</code>，同时设置 <code>auto-resize</code> 响应容器高度改变</p>',
        'en-US': '<p></p>'
      },
      codeFiles: ['height-auto.vue']
    }
  ]
}
