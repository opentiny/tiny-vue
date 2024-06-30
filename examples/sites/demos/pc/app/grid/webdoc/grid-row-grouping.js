export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'row-grouping-row-grouping',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': '<p>通过 <code>row-group</code> 属性可以配置行分组，行分组会将具有相同值的列进行分组展示。</p>\n',
        'en-US':
          'Row groups can be configured for the <p> <code>row-group</code> attribute. Columns with the same value are displayed in groups. </p>\n'
      },
      'codeFiles': ['row-grouping/row-grouping.vue']
    },
    {
      'demoId': 'row-grouping-row-group-render',
      'name': { 'zh-CN': '自定义分组', 'en-US': 'Customized Group' },
      'desc': {
        'zh-CN': `
          <p>配置 <code>rowGroup.render</code> 可以自定义渲染分组列内容。<br />
          配置 <code>rowGroup.renderGroupCell</code> 可以自定义渲染非分组列内容。<br />
          配置 <code>rowGroup.closeable</code> 可以控制分组行是否可以手动折叠。<br />
          配置 <code>rowGroup.activeMethod</code> 可以控制分组生成时是否默认收起。<br />
          配置表格事件 <code>toggle-group-change</code> 可监听分组的展开和收起。</p>\n`,
        'en-US':
          'The <p> <code>row-group</code> configuration item <code>render</code> can be used to customize group content rendering, and <code>closeable</code> can be used to control whether group lines can be collapsed. </p>\n'
      },
      'codeFiles': ['row-grouping/row-group-render.vue']
    },
    {
      'demoId': 'row-group-scroll',
      'name': { 'zh-CN': '分组表虚拟滚动', 'en-US': 'Group grid vistual scroll' },
      'desc': {
        'zh-CN': '<p>分组表场景适配了表格的行列虚拟滚动。</p>\n',
        'en-US': ''
      },
      'codeFiles': ['row-grouping/row-group-scroll.vue']
    },
    {
      'demoId': 'row-grouping-colspan',
      'name': { 'zh-CN': '分组行的列合并', 'en-US': 'Group grid colspan' },
      'desc': {
        'zh-CN': `<p>3.17版本新增：配置 <code>rowGroup.colspan</code> 可以自定义分组行的列合并数量。列合并从 <code>rowGroup.field</code> 所指定的列开始合并。<br />
        如果 <code>rowGroup.field</code> 所指定的列不存在或不可见，就从第一个指定了 <code>field</code> 属性的列开始合并，同时 <code>rowGroup.render</code> 指定的是此列的自定义渲染。</p>`,
        'en-US': ''
      },
      'codeFiles': ['row-grouping/row-grouping-colspan.vue']
    }
  ],
  apis: [{ 'name': 'grid-row-grouping', 'type': 'component', 'props': [], 'events': [], 'slots': [] }]
}
