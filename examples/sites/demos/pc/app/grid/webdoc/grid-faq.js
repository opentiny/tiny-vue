export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'faq-unbalanced',
      'name': { 'zh-CN': '表格列头与单元格错位', 'en-US': 'Table column headers and cells are misplaced' },
      'desc': {
        'zh-CN':
          '<p>当出现 <code>grid</code> 表头与表体单元格错位时，可以选择性地做以下尝试。1.给每列设置列宽。2.将<code>show-overflow</code>、<code>show-header-overflow</code> 都设置为 <code>true</code>。3.将 <code>table-layout</code> 设置为 <code>auto</code>。</p>',
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
          '<p>当可以编辑的表格出现在 <code>DialogBox</code>弹出框中，编辑器无法正常失去焦点时需要配置 <code>blurOutside</code>。</p>\n',
        'en-US': ''
      },
      'codeFiles': ['faq/grid-in-dialog-box.vue']
    },
    {
      'demoId': 'faq-op-slot',
      'name': { 'zh-CN': '配置式表格如何使用插槽', 'en-US': '' },
      'desc': { 'zh-CN': '<p>通过表格列属性的 <code>slots</code> 属性对象配置对应的插槽。</p>', 'en-US': '' },
      'codeFiles': ['faq/op-slot.vue']
    },
    {
      'demoId': 'faq-many-poppover',
      'name': { 'zh-CN': '列默认插槽中不建议使用 Tooltip 或 Poppover', 'en-US': '' },
      'desc': {
        'zh-CN':
          '<p>因为在表格渲染时，列的默认插槽会执行很多次，在数据量大的场景下，会因为创建大量 <code>Tooltip</code> 实例而产生性能问题，也有其他状态共享问题。所以建议使用表格内置 <code>Tooltip</code>，参考示例中城市字段，参考【Tip 提示】章节。</p>\n',
        'en-US': ''
      },
      'codeFiles': ['faq/many-poppover.vue']
    },
    {
      'demoId': 'custom-column',
      'name': { 'zh-CN': '自定义列组件', 'en-US': 'Custom column' },
      'desc': {
        'zh-CN': `<p>
        自定义列组件只用来对表格列组件 <code>grid-column</code> 进行二次封装，不要包含额外的视图渲染逻辑，非列收集内容会被忽略。<br/>
        自定义列组件必须具有 name 选项属性，可以通过表格属性 <code>custom-column-names</code> 把自定义的 name 配置给表格，在表格 <code>初始化列配置</code> 过程中会使用他们来判断是否继续向下渲染。<br/>
        表格属性 <code>custom-column-names</code> 可以是字符串或字符串数组，默认值为 <code>TinyGridColumn</code>。<br/>
          </p>\n`,
        'en-US': ''
      },
      'codeFiles': ['faq/custom-column.vue']
    }
  ],
  apis: [{ 'name': 'grid-faq', 'type': 'component', 'props': [], 'events': [], 'slots': [] }]
}
