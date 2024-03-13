export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'import-export-export-excel',
      'name': { 'zh-CN': '表格导出功能', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': '<p>调用表格的 <code>exportCsv</code> 方法导出表格数据。</p>',
        'en-US': 'For details, see the following example.'
      },
      'codeFiles': ['import-export/export-excel.vue']
    }
  ],
  apis: [{ 'name': 'grid-import-export', 'type': 'component', 'props': [], 'events': [], 'slots': [] }]
}
