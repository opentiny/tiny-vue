export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'custom-style-header-style',
      'name': { 'zh-CN': '自定义表头样式', 'en-US': 'Set the table header style' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>header-cell-class-name</code> 和 <code>header-row-class-name</code> 设置表头的单元格和行样式</p>\n<h3>设置表头单元格样式</h3>\n',
        'en-US':
          '<p>Set the cell and row styles of the table header through <code>header-cell-class-name</code> and <code>header-row-class-name</code></p>\n<h3>Set the cell style of the table header</h3>\n'
      },
      'codeFiles': ['custom-style/header-style.vue']
    },
    {
      'demoId': 'custom-style-body-style',
      'name': { 'zh-CN': '自定义表体样式', 'en-US': 'Set Row Style' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>row-class-name</code> 自定义设置表格的行样式</p>\n<p>通过 <code>cell-class-name</code> 自定义设置表格的单元格样式\n',
        'en-US': '<p>Set the row style of the table by <code>row-class-name</code></p>\n<h3>Set the row style</h3>\n'
      },
      'codeFiles': ['custom-style/body-style.vue']
    },
    {
      'demoId': 'custom-style-footer-style',
      'name': { 'zh-CN': '自定义表尾样式', 'en-US': 'Table tail style (customized table tail row style)' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>footer-cell-class-name</code> 和 <code>footer-row-class-name</code> 设置表尾的单元格和行样式</p>\n',
        'en-US':
          '<p>Use <code>footer-cell-class-name</code> and <code>footer-row-class-name</code> to set the cell and row styles at the end of the table</p>\n'
      },
      'codeFiles': ['custom-style/footer-style.vue']
    },
    {
      'demoId': 'custom-style-class-name',
      'name': { 'zh-CN': '自定义列样式', 'en-US': 'Column Style' },
      'desc': {
        'zh-CN': '<p>通过 <code>class-name</code> 自定义设置表格的列样式</p>\n',
        'en-US': '<p>Set the column style of the table by <code>class-name</code></p>\n'
      },
      'codeFiles': ['custom-style/class-name.vue']
    }
  ],
  apis: [{ 'name': 'grid-custom-style', 'type': 'component', 'properties': [], 'events': [], 'slots': [] }]
}
