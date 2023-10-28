export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'footer-footer-summation',
      'name': { 'zh-CN': '表尾统计', 'en-US': 'Table tail statistics' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['footer/footer-summation.vue']
    },
    {
      'demoId': 'footer-footer-summation-empty',
      'name': { 'zh-CN': '表尾统计（空数据）', 'en-US': 'Table tail statistics (empty data)' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['footer/footer-summation-empty.vue']
    },
    {
      'demoId': 'footer-footer-class-name',
      'name': { 'zh-CN': '表尾class类名', 'en-US': 'Table tail class name' },
      'desc': {
        'zh-CN':
          '<p>\n通过表格列属性 <code>footer-class-name</code> 给表尾的单元格附加 className，也可以是函数 Function({$rowIndex, column, columnIndex, $columnIndex})。\n</p>\n',
        'en-US':
          '<p>\nAdd a class name to the cell at the end of the table through the table column attribute <code>footer-class-name</code> or the function Function({$rowIndex, column, columnIndex, $columnIndex}) . \n</p>\n'
      },
      'codeFiles': ['footer/footer-class-name.vue']
    },
    {
      'demoId': 'footer-footer-row-or-column-span',
      'name': { 'zh-CN': '表尾合并行或列', 'en-US': 'Merge Rows or Columns at the Table Foot' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>footer-method</code> 和 <code>footer-span-method</code> 设置表尾合计行或列逻辑 必须配置 <code>show-footer</code></p>\n',
        'en-US':
          '<p>Use <code>footer-method</code> and <code>footer-span-method</code> to set the total row or column logic of the table tail. <code>show-footer</code></p>\n must be configured'
      },
      'codeFiles': ['footer/footer-row-or-column-span.vue']
    }
  ],
  apis: [{ 'name': 'grid-footer', 'type': 'component', 'properties': [], 'events': [], 'slots': [] }]
}
