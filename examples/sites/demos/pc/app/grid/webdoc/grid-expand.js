export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'expand-has-row-expand',
      'name': { 'zh-CN': '展开行', 'en-US': 'Check whether the row is expanded.' },
      'desc': {
        'zh-CN': `
        <p>在 column 标签上配置 type=&quot;expand&quot; 展开行,可以通过 v-slot 插槽插入需要的模板信息</p>
        <p>通过调用 <code>hasRowExpand(row)</code> 方法可以检查行是否已展开，参数 row 为行数据对象。</p>
        `,
        'en-US':
          '<p>You can invoke the <code>hasRowExpand(row)</code> method to check whether a row is expanded. The row parameter is the row data object. </p>\n'
      },
      'codeFiles': ['expand/has-row-expand.vue']
    },
    {
      'demoId': 'expand-expand-config',
      'name': { 'zh-CN': '展开行配置项', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': `
        <p>表格属性 <code>expand-config</code> 设置展开行配置项。</p>
        <p>表格属性 <code>expandConfig.activeMethod</code> 配置一个方法控制行是否可展开，参数为 <code>row</code> 和 <code>rowLevel</code>，返回 <code>false</code> 则此行不可展开，且不显示展开图标</p>
        <p>表格属性 <code>expandConfig.showIcon</code> 配置是否显示展开图标，默认为 <code>true</code> 表示显示展开图标
        `,
        'en-US': '<p>Table property<code>expand-config</code>Set the configuration item of the expanded line. </p>\n'
      },
      'codeFiles': ['expand/expand-config.vue']
    },
    {
      'demoId': 'expand-nested-grid',
      'name': { 'zh-CN': '嵌套表格', 'en-US': 'Nested Table' },
      'desc': {
        'zh-CN': '<p>通过在默认插槽 <code>default</code>中使用表格组件，实现嵌套表格功能。</p>\n',
        'en-US':
          '<p>Implements the nested table function by using the table component in the default slot <code>default</code>. </p>\n'
      },
      'codeFiles': ['expand/nested-grid.vue']
    },
    {
      'demoId': 'expand-set-row-expansion',
      'name': { 'zh-CN': '展开行手动操作', 'en-US': 'Set to expand a specified line' },
      'desc': {
        'zh-CN': `
          <p>通过调用 <code>setRowExpansion(rows, checked)</code> 方法可设置展开指定行，第二个参数设置这一行展开与否，展开指定行时，通过调用clearRowExpand()方法先，关闭已展开的行。</p>
          <p>通过调用 <code>setAllRowExpansion(checked)</code> 方法可设置所有行的展开与否。</p>
          <p>通过调用 <code>toggleRowExpansion(row)</code> 方法可手动切换展开行。</p>
          `,
        'en-US':
          '<p>You can invoke the <code>setRowExpansion(rows, checked)</code> method to expand a specified row. The second parameter specifies whether to expand a specified row. When expanding a specified row, you can invoke the clearRowExpand() method to close the expanded row. </p>\n'
      },
      'codeFiles': ['expand/set-row-expansion.vue']
    }
  ],
  apis: [{ 'name': 'grid-expand', 'type': 'component', 'properties': [], 'events': [], 'slots': [] }]
}
