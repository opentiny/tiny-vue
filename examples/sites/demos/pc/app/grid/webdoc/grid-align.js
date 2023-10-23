export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'align-column-align',
      'name': { 'zh-CN': '列对齐', 'en-US': 'Column Alignment' },
      'desc': {
        'zh-CN':
          '<p><code>align</code> 设置单独列对齐方式 可选值为 <code>left</code> <code>center</code> <code>right</code>，默认值为 <code>left</code>。</p>\n<div class="tip custom-block"><p class="custom-block-title">TIP</p>\n<p>列设置的 <code>align</code> 会覆盖掉表格设置的 <code>align</code></p>\n</div>\n',
        'en-US':
          '<p><code>align</code> Sets the alignment mode of a separate column. The options are <code>left</code> <code>center</code> <code>right</code>. The default value is <code>left</code>. <code>align</code> set in the </p>\n<div class="tip custom-block"><p class="custom-block-title">TIP</p>\n<p> column will overwrite <code>align</code></p>\n</div>\n set in the table'
      },
      'codeFiles': ['align/column-align.vue']
    },
    {
      'demoId': 'align-header-align-left-header-align',
      'name': { 'zh-CN': '表头左对齐', 'en-US': 'Left-aligned table header' },
      'desc': {
        'zh-CN':
          '<p><code>header-align</code> 设置表头对齐方式可选值为 <code>left</code> <code>center</code> <code>right</code>，默认值为 <code>left</code>。</p>\n<div class="tip custom-block"><p class="custom-block-title">TIP</p>\n<p>表格上配置 <code>header-align</code> 会被列配置的 <code>header-align</code> 覆盖</p>\n</div>\n',
        'en-US':
          '<p><code>header-align</code> Sets the table header alignment mode. The value can be <code>left</code> <code>center</code> <code>right</code>. The default value is <code>left</code>. <code>header-align</code> configured in the </p>\n<div class="tip custom-block"><p class="custom-block-title">TIP</p>\n<p> table will be overwritten by <code>header-align</code> configured in the column </p>\n</div>\n'
      },
      'codeFiles': ['align/header-align/left-header-align.vue']
    },
    {
      'demoId': 'align-header-align-right-header-align',
      'name': { 'zh-CN': '表头右对齐', 'en-US': 'Right-aligned table header' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['align/header-align/right-header-align.vue']
    },
    {
      'demoId': 'align-header-align-center-header-align',
      'name': { 'zh-CN': '表头居中对齐', 'en-US': 'Table header center alignment' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['align/header-align/center-header-align.vue']
    },
    {
      'demoId': 'align-footer-align-left-footer-align',
      'name': { 'zh-CN': '表尾左对齐', 'en-US': 'Left-aligned table tail' },
      'desc': {
        'zh-CN':
          '<p><code>footer-align</code> 设置表尾对齐方式的可选值为 <code>left</code> <code>center</code> <code>right</code>，默认值为 <code>left</code>。</p>\n<div class="tip custom-block"><p class="custom-block-title">TIP</p>\n<p>表格上配置 <code>footer-align</code> 会被列配置的 <code>footer-align</code> 覆盖</p>\n</div>\n',
        'en-US':
          'The value of <p><code>footer-align</code> is <code>left</code> <code>center</code> <code>right</code>. The default value is <code>left</code>. <code>footer-align</code> configured in the </p>\n<div class="tip custom-block"><p class="custom-block-title">TIP</p>\n<p> table will be replaced by <code>footer-align</code> configured in the column </p>\n</div>\n'
      },
      'codeFiles': ['align/footer-align/left-footer-align.vue']
    },
    {
      'demoId': 'align-footer-align-right-footer-align',
      'name': { 'zh-CN': '表尾右对齐', 'en-US': 'Right-aligned table tail' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['align/footer-align/right-footer-align.vue']
    },
    {
      'demoId': 'align-footer-align-center-footer-align',
      'name': { 'zh-CN': '表尾居中对齐', 'en-US': 'Table tail center alignment' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['align/footer-align/center-footer-align.vue']
    },
    {
      'demoId': 'align-grid-align-left-grid-align',
      'name': { 'zh-CN': '表格左对齐', 'en-US': 'Left-aligned table' },
      'desc': {
        'zh-CN':
          '<p><code>align</code> 设置全部列对齐方式可选值为 <code>left</code> <code>center</code> <code>right</code>，默认值为 <code>left</code>。</p>\n<div class="tip custom-block"><p class="custom-block-title">TIP</p>\n<p>表格设置对齐方式优先级最低，会被单独设置对齐方式覆盖</p>\n</div>\n',
        'en-US':
          '<p><code>align</code> Sets the alignment mode of all columns. The options are <code>left</code> <code>center</code> <code>right</code>. The default value is <code>left</code>. The alignment mode configured in the </p>\n<div class="tip custom-block"><p class="custom-block-title">TIP</p>\n<p> table has the lowest priority. The alignment mode configured in the </p>\n<div class="tip custom-block"><p class="custom-block-title">TIP</p>\n<p> table will overwrite the </p>\n</div>\n'
      },
      'codeFiles': ['align/grid-align/left-grid-align.vue']
    },
    {
      'demoId': 'align-grid-align-right-grid-align',
      'name': { 'zh-CN': '表格右对齐', 'en-US': 'Right-aligned table' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['align/grid-align/right-grid-align.vue']
    },
    {
      'demoId': 'align-grid-align-center-grid-align',
      'name': { 'zh-CN': '表格居中对齐', 'en-US': 'Table center alignment' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['align/grid-align/center-grid-align.vue']
    }
  ],
  apis: [{ 'name': 'grid-align', 'type': 'component', 'properties': [], 'events': [], 'slots': [] }]
}
