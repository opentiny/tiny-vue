export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'grid_Example-nestedGrid',
      'name': { 'zh-CN': '嵌套表格', 'en-US': 'Nested Table' },
      'desc': {
        'zh-CN': '<p>通过在默认插槽 <code>default</code>中使用表格组件，实现嵌套表格功能。</p>\n',
        'en-US':
          '<p>Implements the nested table function by using the table component in the default slot <code>default</code>. </p>\n'
      },
      'codeFiles': ['grid_Example/nestedGrid.vue']
    },
    {
      'demoId': 'expand-hasRowExpand',
      'name': { 'zh-CN': '检查行是否已展开', 'en-US': 'Check whether the row is expanded.' },
      'desc': {
        'zh-CN': '<p>通过调用 <code>hasRowExpand(row)</code> 方法可以检查行是否已展开，参数 row 为行数据对象。</p>\n',
        'en-US':
          '<p>You can invoke the <code>hasRowExpand(row)</code> method to check whether a row is expanded. The row parameter is the row data object. </p>\n'
      },
      'codeFiles': ['expand/hasRowExpand.vue']
    },
    {
      'demoId': 'methods-set-all-row-expansion',
      'name': { 'zh-CN': '设置展开所有行', 'en-US': 'Set to expand all lines' },
      'desc': {
        'zh-CN': '<p>通过调用 <code>setAllRowExpansion(checked)</code> 方法可设置所有行的展开与否。</p>\n',
        'en-US':
          '<p>You can invoke the <code>setAllRowExpansion(checked)</code> method to set whether to expand or not all rows. </p>\n'
      },
      'codeFiles': ['methods/set-all-row-expansion.vue']
    },
    {
      'demoId': 'methods-set-row-expansion',
      'name': { 'zh-CN': '设置展开指定行', 'en-US': 'Set to expand a specified line' },
      'desc': {
        'zh-CN':
          '<p>通过调用 <code>setRowExpansion(rows, checked)</code> 方法可设置展开指定行，第二个参数设置这一行展开与否，展开指定行时，通过调用clearRowExpand()方法先，关闭已展开的行。</p>\n',
        'en-US':
          '<p>You can invoke the <code>setRowExpansion(rows, checked)</code> method to expand a specified row. The second parameter specifies whether to expand a specified row. When expanding a specified row, you can invoke the clearRowExpand() method to close the expanded row. </p>\n'
      },
      'codeFiles': ['methods/set-row-expansion.vue']
    },
    {
      'demoId': 'methods-toggle-row-expansion',
      'name': { 'zh-CN': '手动切换展开行', 'en-US': 'Manually switch to expand rows' },
      'desc': {
        'zh-CN': '<p>通过调用 <code>toggleRowExpansion(row)</code> 方法可手动切换展开行。</p>\n',
        'en-US':
          '<p>You can manually switch between expanded rows by invoking the <code>toggleRowExpansion(row)</code> method. </p>\n'
      },
      'codeFiles': ['methods/toggle-row-expansion.vue']
    }
  ],
  apis: [{ 'name': 'grid-nested-grid', 'type': 'component', 'properties': [], 'events': [], 'slots': [] }]
}
