export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'slot-default-slot',
      'name': { 'zh-CN': '默认插槽', 'en-US': 'Default slot' },
      'desc': {
        'zh-CN': `<p>通过 <code>template</code> 标签并配置 <code>#default</code> 添加表格列的默认插槽。</p>`,
        'en-US': 'For details, see the following example.'
      },
      'codeFiles': ['slot/default-slot.vue']
    },
    {
      'demoId': 'slot-buttons-slot',
      'name': { 'zh-CN': '工具栏插槽', 'en-US': 'Toolbar slot' },
      'desc': {
        'zh-CN': `<p>通过 <code>template</code> 标签并配置 <code>#toolbar</code> 添加表格的工具栏插槽。</p>`,
        'en-US': 'For details, see the following example.'
      },
      'codeFiles': ['slot/buttons-slot.vue']
    },
    {
      'demoId': 'slot-empty-slot',
      'name': { 'zh-CN': '空数据显示插槽', 'en-US': 'Empty data display slot' },
      'desc': {
        'zh-CN': `<p>通过 <code>template</code> 标签并配置 <code>#empty</code> 添加表格的空数据插槽。</p>`,
        'en-US': 'For details, see the following example.'
      },
      'codeFiles': ['slot/empty-slot.vue']
    },
    {
      'demoId': 'slot-editor-slot',
      'name': { 'zh-CN': '编辑器插槽', 'en-US': 'Editor slot' },
      'desc': {
        'zh-CN': `<p>使用编辑器插槽的前提条件是：<code>grid</code> 标签上配置 <code>edit-config</code>。在 <code>grid-column</code> 列配置 <code>:editor="{}"</code> 。</p>`,
        'en-US': 'For details, see the following example.'
      },
      'codeFiles': ['slot/editor-slot.vue']
    },
    {
      'demoId': 'slot-header-slot',
      'name': { 'zh-CN': '表头插槽', 'en-US': 'Table header slot' },
      'desc': {
        'zh-CN': `<p>通过 <code>template</code> 标签并配置 <code>#header</code> 添加表格列的表头插槽。</p>`,
        'en-US': 'For details, see the following example.'
      },
      'codeFiles': ['slot/header-slot.vue']
    }
  ],
  apis: [{ 'name': 'grid-slot', 'type': 'component', 'props': [], 'events': [], 'slots': [] }]
}
