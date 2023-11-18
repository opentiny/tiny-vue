export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'size-fixed-column-width',
      'name': { 'zh-CN': '列属性设置宽度', 'en-US': 'Table column attribute width' },
      'desc': {
        'zh-CN': '<p>表格列属性设置 width 固定宽度，支持数值和百分比。</p>\n',
        'en-US': '<p>The fixed width of the table column attribute is set. Values and percentages are supported. </p>\n'
      },
      'codeFiles': ['size/fixed-column-width.vue']
    },
    {
      'demoId': 'size-column-min-width',
      'name': { 'zh-CN': '设置总体列宽', 'en-US': 'Minimum width of this column' },
      'desc': {
        'zh-CN':
          '<p>通过属性 <code>column-min-width</code> 设置总体列可以调整到的最小宽度，不设置时默认为列头 span 的宽度 + 36（头部固定宽度）。\n</p>\n',
        'en-US':
          '<p>Minimum width of this column based on the table column attribute <code>min-width</code>; The automatically allocates the remaining space proportionally. \n</p>\n'
      },
      'codeFiles': ['size/column-min-width.vue']
    },
    {
      'demoId': 'size-min-width',
      'name': { 'zh-CN': '本列最小宽度', 'en-US': 'Set the width of all columns' },
      'desc': {
        'zh-CN': '<p>通过表格列属性 <code>min-width</code> 本列最小宽度；会自动将剩余空间按比例分配。\n</p>\n',
        'en-US':
          '<p>Set the width of all columns through the <code>column-width</code> attribute. The default value is even distribution. \n</p>\n'
      },
      'codeFiles': ['size/min-width.vue']
    },
    {
      'demoId': 'size-column-width',
      'name': { 'zh-CN': '设置所有列宽度', 'en-US': 'Recalculate Table' },
      'desc': {
        'zh-CN': '<p>通过属性 <code>column-width</code> 设置所有列宽度，默认值为均匀分配。\n</p>\n',
        'en-US':
          '<p>The <code>recalculate()</code> method can be used to recalculate the table when the width of the parent container changes. </p>\n'
      },
      'codeFiles': ['size/column-width.vue']
    },
    {
      'demoId': 'size-fixed-grid-height',
      'name': { 'zh-CN': '表格属性设置高度', 'en-US': 'Table Attribute Setting Height' },
      'desc': {
        'zh-CN': '<p>表格属性设置 height 固定表格高度。</p>\n',
        'en-US': '<p>Table attribute setting height Fixed table height. </p>\n'
      },
      'codeFiles': ['size/fixed-grid-height.vue']
    },
    {
      'demoId': 'size-max-min-grid-height',
      'name': { 'zh-CN': '设置最大、最小高度', 'en-US': 'Set the maximum height of maxHeight' },
      'desc': {
        'zh-CN': '<p>表格属性设置 minHeight 限制最小高度，maxHeight 限制最大高度。</p>\n',
        'en-US': 'For details, see the following example.'
      },
      'codeFiles': ['size/max-min-grid-height.vue']
    },
    {
      'demoId': 'size-auto-height',
      'name': { 'zh-CN': '开启响应式表格宽高', 'en-US': 'Enable responsive table width and height' },
      'desc': {
        'zh-CN':
          '<p>表格属性设置 autoResize 属性开启响应式表格宽高的同时，将高度<code>heigh</code>设置为<code>auto</code>就可以自动跟随父容器高度。tips:在自动高度场景，请确保表格或其父容器被设置了一个固定的高度。</p>\n',
        'en-US':
          '<p>Table property setting autoResize property enabling responsive table width and height, set height <code>heigh</code> to <code>auto</code> to automatically follow the height of the parent container. </p>\n'
      },
      'codeFiles': ['size/auto-height.vue']
    },
    {
      'demoId': 'size-resize-column-width',
      'name': { 'zh-CN': '开启列宽拖拽', 'en-US': 'Enable column width dragging' },
      'desc': {
        'zh-CN': '<p>列宽默认开启，如需禁用需要设置<code>resizable</code>为<code>false</code></p>\n',
        'en-US':
          '<p>Column width is enabled by default. To disable this function, set <code>resizable</code> to <code>false</code></p>\n'
      },
      'codeFiles': ['size/resize-column-width.vue']
    },
    {
      'demoId': 'size-adaptive-column-width',
      'name': { 'zh-CN': '列宽自适应撑开', 'en-US': 'Adaptive expansion of column width' },
      'desc': {
        'zh-CN':
          '<p>表格属性设置 fit 自动撑开，默认值为 true 开启自适应撑开，值为 false 时必须设置列宽度，否则表格宽度由单元格内容撑开。</p>\n',
        'en-US':
          '<p>The table attribute is set to automatically expand fit. The default value is true, and adaptive expansion is enabled. If the value is false, the column width must be set. Otherwise, the table width is expanded by the cell content. </p>\n'
      },
      'codeFiles': ['size/adaptive-column-width.vue']
    },
    {
      'demoId': 'size-recalculate',
      'name': { 'zh-CN': '重新计算表格', 'en-US': '' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>recalculate()</code> 方法可以重新计算表格，当父容器宽度变化时可通过该方法重新计算表格。</p>\n',
        'en-US': ''
      },
      'codeFiles': ['size/recalculate.vue']
    },
    {
      'demoId': 'size-grid-size',
      'name': { 'zh-CN': '尺寸', 'en-US': 'size' },
      'desc': {
        'zh-CN': '<p>表格设置 <code>size</code> 属性调整表格尺寸大小。</p>\n',
        'en-US': '<p>Table settings<code>size</code> property adjusts the table size. </p>\n'
      },
      'codeFiles': ['size/grid-size.vue']
    }
  ],
  apis: [{ 'name': 'grid-size', 'type': 'component', 'properties': [], 'events': [], 'slots': [] }]
}
