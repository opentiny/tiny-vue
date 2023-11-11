export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'footer-footer-summation-empty',
      'name': { 'zh-CN': '表尾统计（空数据）', 'en-US': 'Table tail statistics (empty data)' },
      'desc': {
        'zh-CN': '通过 <code>footer-method</code> 和 <code>show-footer</code> 配置自定义统计。',
        'en-US': 'For details, see the following example.'
      },
      'codeFiles': ['footer/footer-summation-empty.vue']
    },
    {
      'demoId': 'footer-configuration-summary',
      'name': { 'zh-CN': '设置配置式的统计', 'en-US': 'Set Profile Statistics' },
      'desc': {
        'zh-CN': '<p>通过 <code>summary-config</code> 设置配置式的统计。</p>\n',
        'en-US': '<p>Set the profile statistics using <code>summary-config</code>. </p>\n'
      },
      'codeFiles': ['footer/configuration-summary.vue']
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
