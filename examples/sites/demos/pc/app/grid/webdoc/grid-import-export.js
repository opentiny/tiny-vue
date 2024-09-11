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
    },
    {
      'demoId': 'import-excel',
      'name': { 'zh-CN': '表格导入功能', 'en-US': 'Import excel' },
      'desc': {
        'zh-CN': `<p>基于 XLSX 插件进行导入</p>
        <div class="tip custom-block">
          <p>本示例使用的xlsx版本为0.18.2，导入的excel表格，表头字段需与表格field字段保持一致。</p>
          <p>提示: xlsx 是一个非常强大的前端 EXCEL 文件操作库，支持表格带格式导入导出，可兼容 IE9+ 版本的浏览器。</p>
          <p>详情参考：<a href="https://github.com/SheetJS/sheetjs" target="_blank">https://github.com/SheetJS/sheetjs</a></p>
        </div>
        `,
        'en-US': 'For details, see the following example.'
      },
      'codeFiles': ['import-export/import-excel.vue']
    }
  ],
  apis: [{ 'name': 'grid-import-export', 'type': 'component', 'props': [], 'events': [], 'slots': [] }]
}
