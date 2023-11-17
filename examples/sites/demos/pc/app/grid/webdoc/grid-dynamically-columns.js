export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'dynamically-columns-dynamicallyColumns',
      'name': {
        'zh-CN': '根据日期动态生成列',
        'en-US': 'Grid-Dynamic column generation based on the selected date'
      },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['dynamically-columns/dynamically-columns.vue']
    },
    {
      'demoId': 'column-columns-dynamic',
      'name': { 'zh-CN': '动态列数据', 'en-US': '' },
      'desc': { 'zh-CN': '兼容低版本的动态列数据', 'en-US': '' },
      'codeFiles': ['dynamically-columns/columns-dynamic.vue']
    },
    {
      'demoId': 'dynamically-columns-reverseRow',
      'name': { 'zh-CN': '表格行列反转', 'en-US': 'Grid-Inverting Rows and Columns in a Table' },
      'desc': {
        'zh-CN':
          '<p>需要在 <code>grid</code> 标签上配 <code>:columns=&quot;tableColumn&quot;</code> <code>:show-header=&quot;false&quot;</code>。点击“反转表格”按钮可查看效果，现阶段只能执行一次，执行多次会有问题。具体参考下面示例。</p>\n',
        'en-US':
          "<p>You need to configure <code>:columns=&quot;tableColumn&quot;</code> <code>:show-header=&quot;false&quot;</code> on the <code>grid</code> tag. Click the 'Reverse Table' button to view the effect. Currently, the operation can only be performed once. If the operation is performed multiple times, problems may occur. For details, see the following example. </p>\n"
      },
      'codeFiles': ['dynamically-columns/reverse-row.vue']
    }
  ],
  apis: [{ 'name': 'grid-dynamically-columns', 'type': 'component', 'properties': [], 'events': [], 'slots': [] }]
}
