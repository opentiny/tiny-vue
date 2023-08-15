export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'custom-style-row-style',
      'name': { 'zh-CN': '设置行样式', 'en-US': 'Set Row Style' },
      'desc': {
        'zh-CN': '<p>通过 <code>row-class-name</code> 自定义设置表格的行样式</p>\n<h3>设置行样式</h3>\n',
        'en-US': '<p>Set the row style of the table by <code>row-class-name</code></p>\n<h3>Set the row style</h3>\n'
      },
      'codeFiles': ['custom-style/row-style.vue']
    },
    {
      'demoId': 'custom-style-header-style-header-cell-style',
      'name': { 'zh-CN': '设置表头样式', 'en-US': 'Set the table header style' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>header-cell-class-name</code> 和 <code>header-row-class-name</code> 设置表头的单元格和行样式</p>\n<h3>设置表头单元格样式</h3>\n',
        'en-US':
          '<p>Set the cell and row styles of the table header through <code>header-cell-class-name</code> and <code>header-row-class-name</code></p>\n<h3>Set the cell style of the table header</h3>\n'
      },
      'codeFiles': ['custom-style/header-style/header-cell-style.vue']
    },
    {
      'demoId': 'custom-style-header-style-header-row-style',
      'name': { 'zh-CN': '设置表头单元格样式', 'en-US': 'Set the table header cell style' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['custom-style/header-style/header-row-style.vue']
    },
    {
      'demoId': 'custom-style-footer-style-footer-cell-style',
      'name': { 'zh-CN': '表尾样式(自定义表尾行样式)', 'en-US': 'Table tail style (customized table tail row style)' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>footer-cell-class-name</code> 和 <code>footer-row-class-name</code> 设置表尾的单元格和行样式</p>\n',
        'en-US':
          '<p>Use <code>footer-cell-class-name</code> and <code>footer-row-class-name</code> to set the cell and row styles at the end of the table</p>\n'
      },
      'codeFiles': ['custom-style/footer-style/footer-cell-style.vue']
    },
    {
      'demoId': 'custom-style-footer-style-footer-row-style',
      'name': {
        'zh-CN': '表尾样式(自定义表尾单元格样式)',
        'en-US': 'Table tail style (customized table tail cell style)'
      },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['custom-style/footer-style/footer-row-style.vue']
    },
    {
      'demoId': 'custom-style-cell-style',
      'name': { 'zh-CN': '单元格样式', 'en-US': 'Cell Style' },
      'desc': {
        'zh-CN': '<p>通过 <code>cell-class-name</code> 自定义设置表格的单元格样式</p>\n',
        'en-US': '<p>Set the cell style of the table by <code>cell-class-name</code></p>\n'
      },
      'codeFiles': ['custom-style/cell-style.vue']
    },
    {
      'demoId': 'column-class-name',
      'name': { 'zh-CN': '列样式', 'en-US': 'Column Style' },
      'desc': {
        'zh-CN': '<p>通过 <code>class-name</code> 自定义设置表格的列样式</p>\n',
        'en-US': '<p>Set the column style of the table by <code>class-name</code></p>\n'
      },
      'codeFiles': ['column/class-name.vue']
    }
  ],
  apis: [{ 'name': 'grid-custom-style', 'type': 'component', 'properties': [], 'events': [], 'slots': [] }]
}
