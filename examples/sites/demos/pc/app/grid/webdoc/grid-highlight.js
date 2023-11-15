export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'highlight-highlight-hover-row',
      'name': { 'zh-CN': '高亮悬停行', 'en-US': 'Highlight Hover Line' },
      'desc': {
        'zh-CN':
          '<p>设置 <code>highlight-hover-row</code> 属性控制鼠标悬停到当前行是否开启高亮。 默认为 <code>true</code> 开启高亮, 如果不需要悬停高亮设置 <code>highlight-hover-row</code> 为 <code>false</code>。</p>\n',
        'en-US':
          '<p>Set the <code>highlight-hover-row</code> attribute to control whether to enable the highlight function when the cursor is moved to the current line. The default value is <code>true</code>. If you do not need to hover and highlight, set <code>highlight-hover-row</code> to <code>false</code>. </p>\n'
      },
      'codeFiles': ['highlight/highlight-hover-row.vue']
    },
    {
      'demoId': 'highlight-set-current-row',
      'name': { 'zh-CN': '设置指定行高亮', 'en-US': 'Highlight a specified line' },
      'desc': {
        'zh-CN': '<p> <code>setCurrentRow(row)</code> 可设置某一行为高亮状态。</p>\n',
        'en-US': 'The <p> <code>setCurrentRow(row)</code> can be used to set the highlight status of a line. </p>\n'
      },
      'codeFiles': ['highlight/set-current-row.vue']
    },
    {
      'demoId': 'highlight-highlight-current-row',
      'name': { 'zh-CN': '开启选中行高亮', 'en-US': 'Enable the selected row to be highlighted' },
      'desc': {
        'zh-CN':
          '<p>设置 <code>highlight-current-row</code> 属性控制鼠标选中行是否开启高亮</p>\n<p>\n带有斑马线的行无高亮效果\n</p>\n',
        'en-US':
          '<p>Set the <code>highlight-current-row</code> attribute to control whether to highlight selected lines.</p>\n<p>\nThe lines with zebra crossings are not highlighted.\n</p>\n'
      },
      'codeFiles': ['highlight/highlight-current-row.vue']
    },
    {
      'demoId': 'highlight-highlight-hover-column',
      'name': { 'zh-CN': '列头是否开启高亮', 'en-US': 'Whether to highlight the column header' },
      'desc': {
        'zh-CN': '<p>设置 <code>highlight-hover-column</code> 属性为控制鼠标悬停到当前列的列头时是否开启高亮。</p>\n',
        'en-US':
          '<p>Set the <code>highlight-hover-column</code> attribute to control whether to enable the highlight function when the cursor is moved to the column header of the current column. </p>\n'
      },
      'codeFiles': ['highlight/highlight-hover-column.vue']
    },
    {
      'demoId': 'highlight-highlight-current-column',
      'name': { 'zh-CN': '选中列是否开启高亮', 'en-US': 'Specifies whether to highlight the selected column.' },
      'desc': {
        'zh-CN': '<p>设置 <code>highlight-current-column</code> 属性控制鼠标选中的当前列是否开启高亮显示</p>\n',
        'en-US':
          '<p>Set the <code>highlight-current-column</code> attribute to determine whether to highlight the current column.</p>\n'
      },
      'codeFiles': ['highlight/highlight-current-column.vue']
    },
    {
      'demoId': 'highlight-highlight-cell',
      'name': { 'zh-CN': '编辑时高亮单元格边框', 'en-US': 'Highlight cell borders during editing' },
      'desc': {
        'zh-CN':
          '<p>设置 <code>highlight-cell</code> 是否在编辑时高亮单元格边框，只对 <code>editConfig</code> 配置时有效</p>\n',
        'en-US':
          '<p>Sets whether <code>highlight-cell</code> highlights the cell border during editing. This parameter is valid only when <code>editConfig</code> is configured</p>\n'
      },
      'codeFiles': ['highlight/highlight-cell.vue']
    }
  ],
  apis: [{ 'name': 'grid-highlight', 'type': 'component', 'properties': [], 'events': [], 'slots': [] }]
}
