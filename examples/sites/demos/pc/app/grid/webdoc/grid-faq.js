export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'faq-unbalanced',
      'name': { 'zh-CN': '表格列头与单元格错位', 'en-US': 'Table column headers and cells are misplaced' },
      'desc': {
        'zh-CN':
          '<p>当出现grid表头与表体单元格错位时，可以选择性地做以下尝试\n1.给每列设置列宽\n2.将<code>show-overflow</code>、<code>show-header-overflow</code> 都设置为 <code>true</code>\n3.将 <code>table-layout</code> 设置为 <code>auto</code></p>\n',
        'en-US':
          '<p>When the grid table header is misplaced with the table body cell, You can perform the following operations as required.\n1. Set the column width for each column.\n2. Set <code>show-overflow</code> and <code>show-header-overflow</code> to <code>true</code>\n3. Set <code>table-layout</ Set this parameter to <code>auto</code></p>\n'
      },
      'codeFiles': ['faq/unbalanced.vue']
    },
    {
      'demoId': 'faq-grid-in-dialog-box',
      'name': { 'zh-CN': '弹窗中的表格编辑器无法正常失焦', 'en-US': '' },
      'desc': {
        'zh-CN':
          '<p>当可以编辑的表格出现在DialogBox弹出框中，编辑器无法正常失去焦点时需要配置<code>blurOutside</code></p>\n',
        'en-US': ''
      },
      'codeFiles': ['faq/grid-in-dialog-box.vue']
    },
    {
      'demoId': 'faq-op-slot',
      'name': { 'zh-CN': '配置式表格如何使用插槽', 'en-US': '' },
      'desc': { 'zh-CN': '<p>具体可以参考以下代码</p>\n', 'en-US': '' },
      'codeFiles': ['faq/op-slot.vue']
    },
    {
      'demoId': 'faq-many-poppover',
      'name': { 'zh-CN': '列默认插槽中不建议使用 Tooltip 或 Poppover', 'en-US': '' },
      'desc': {
        'zh-CN':
          '<p>因为在表格渲染时，列的默认插槽会执行很多次，在数据量大的场景下，会因为创建大量 Tooltip 实例而产生性能问题，也有其他状态共享问题。\n所以建议使用表格内置 Tooltip，参考示例中城市字段，参考【Tip 提示】章节。</p>\n',
        'en-US': ''
      },
      'codeFiles': ['faq/many-poppover.vue']
    }
  ],
  apis: [{ 'name': 'grid-faq', 'type': 'component', 'properties': [], 'events': [], 'slots': [] }]
}
