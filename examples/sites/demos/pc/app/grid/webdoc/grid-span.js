export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'span-row-span-easy',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN':
          '<p>通过表格列属性 <code>row-span</code> 设置内置的行合并规则,该属性仅适用于普通表格，嵌套树表不支持。</p>\n',
        'en-US':
          '<p>Set the built-in row combination rule through the table column attribute <code>row-span</code>. This attribute applies only to common tables and does not apply to nested tree tables. </p>\n'
      },
      'codeFiles': ['span/row-span-easy.vue']
    },
    {
      'demoId': 'span-row-span',
      'name': { 'zh-CN': '自定义合并规则', 'en-US': 'Custom Combination Rule' },
      'desc': {
        'zh-CN': '<p>通过表格列属性 <code>span-method</code> 设置自定义合并规则。</p>\n',
        'en-US': '<p>Set a custom combination rule through the table column attribute <code>span-method</code>. </p>\n'
      },
      'codeFiles': ['span/row-span.vue']
    },
    {
      'demoId': 'span-column-span',
      'name': { 'zh-CN': '列合并', 'en-US': 'Column Merge' },
      'desc': {
        'zh-CN':
          '<p>列合并是通过表格列设置方法 <code>span-method</code> 实现的自定义合并规则。例如：</p>\n<blockquote>\n<p>实现2列合并</p>\n</blockquote>\n',
        'en-US':
          '<p>Column combination is a user-defined combination rule implemented by using the <code>span-method</code> table column setting method. For example, </p>\n<blockquote>\n<p> can combine two columns into </p>\n</blockquote>\n'
      },
      'codeFiles': ['span/column-span.vue']
    }
  ],
  apis: [{ 'name': 'grid-span', 'type': 'component', 'properties': [], 'events': [], 'slots': [] }]
}
