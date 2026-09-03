export default {
  column: '1',
  owner: '',
  demos: [
    {
      demoId: 'span-row-span-easy',
      name: { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      desc: {
        'zh-CN':
          '<p>通过表格列属性 <code>row-span</code> 设置内置的行合并规则，该属性仅适用于普通表格，嵌套树表不支持。</p>\n',
        'en-US':
          '<p>Set the built-in row combination rule through the table column attribute <code>row-span</code>. This attribute applies only to common tables and does not apply to nested tree tables. </p>\n'
      },
      codeFiles: ['span/row-span-easy.vue']
    },
    {
      demoId: 'span-row-span',
      name: { 'zh-CN': '自定义合并规则', 'en-US': 'Custom Combination Rule' },
      desc: {
        'zh-CN': '<p>通过表格列属性 <code>span-method</code> 设置自定义合并规则。</p>\n',
        'en-US': '<p>Set a custom combination rule through the table column attribute <code>span-method</code>. </p>\n'
      },
      codeFiles: ['span/row-span.vue']
    },
    {
      demoId: 'span-row-span-with-expand',
      name: {
        'zh-CN': '行合并与展开行',
        'en-US': 'Row Span with Expand'
      },
      desc: {
        'zh-CN':
          '<p>同时配置 <code>row-span</code> 与列 <code>type=&quot;expand&quot;</code>。展开行占满整行宽度；合并在展开处断开，避免与展开内容重叠。</p>\n',
        'en-US':
          '<p>Use <code>row-span</code> with column <code>type=&quot;expand&quot;</code>. The expand row is full width; merges split at the expand so content does not overlap. </p>\n'
      },
      codeFiles: ['span/row-span-with-expand.vue']
    },
    {
      demoId: 'span-column-span',
      name: { 'zh-CN': '列合并', 'en-US': 'Column Merge' },
      desc: {
        'zh-CN':
          '<p>列合并是通过表格列设置方法 <code>span-method</code> 实现的自定义合并规则。例如：</p>\n<blockquote>\n<p>实现 2 列合并。</p>\n</blockquote>\n',
        'en-US':
          '<p>Column combination is a user-defined combination rule implemented by using the <code>span-method</code> table column setting method. For example, </p>\n<blockquote>\n<p> can combine two columns into </p>\n</blockquote>\n'
      },
      codeFiles: ['span/column-span.vue']
    }
  ],
  apis: [{ name: 'grid-span', 'type': 'component', 'props': [], 'events': [], 'slots': [] }]
}
