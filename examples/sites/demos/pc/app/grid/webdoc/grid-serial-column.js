export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'serial-column-default-serial-column',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': '<p>表格列属性设置 <code>type=&quot;index&quot;</code> 显示序号列。</p>\n',
        'en-US':
          '<p>Table column attribute setting <code>type=&quot;index&quot;</code> Display sequence number column. </p>\n'
      },
      'codeFiles': ['serial-column/default-serial-column.vue']
    },
    {
      'demoId': 'serial-column-custom-serial-column',
      'name': { 'zh-CN': '自定义序号规则', 'en-US': 'User-defined sequence number rule' },
      'desc': {
        'zh-CN':
          '<p>表格列属性设置 <code>type=&quot;index&quot;</code> 显示序号列，<code>index-method</code> 方法设置自定义序号规则。</p>\n',
        'en-US':
          '<p>The table column attribute sets <code>type=&quot;index&quot;</code> to display the sequence number column. The <code>index-method</code> method sets the user-defined sequence number rule. </p>\n'
      },
      'codeFiles': ['serial-column/custom-serial-column.vue']
    },
    {
      'demoId': 'serial-column-start-index',
      'name': { 'zh-CN': '序号列的起始值', 'en-US': 'Start value of the user-defined sequence number column' },
      'desc': {
        'zh-CN':
          '<p>表格列属性设置 <code>type=&quot;index&quot;</code> 显示序号列，<code>start-index</code> 设置自定义序号列的起始值。</p>\n',
        'en-US':
          '<p>Set the table column attribute <code>type=&quot;index&quot;</code> to display the sequence number column, and <code>start-index</code> to set the start value of the customized sequence number column. </p>\n'
      },
      'codeFiles': ['serial-column/start-index.vue']
    }
  ],
  apis: [{ 'name': 'grid-serial-column', 'type': 'component', 'properties': [], 'events': [], 'slots': [] }]
}
