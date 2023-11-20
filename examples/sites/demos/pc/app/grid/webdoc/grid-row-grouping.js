export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'row-grouping-row-grouping',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': '<p> <code>row-group</code> 属性可以配置行分组，行分组会将具有相同值的列进行分组展示。</p>\n',
        'en-US':
          'Row groups can be configured for the <p> <code>row-group</code> attribute. Columns with the same value are displayed in groups. </p>\n'
      },
      'codeFiles': ['row-grouping/row-grouping.vue']
    },
    {
      'demoId': 'row-grouping-row-group-render',
      'name': { 'zh-CN': '自定义分组', 'en-US': 'Customized Group' },
      'desc': {
        'zh-CN':
          '<p> <code>row-group</code> 配置项 <code>render</code> 可以自定义渲染分组内容， <code>closeable</code> 可以控制分组行是否可以折叠。</p>\n',
        'en-US':
          'The <p> <code>row-group</code> configuration item <code>render</code> can be used to customize group content rendering, and <code>closeable</code> can be used to control whether group lines can be collapsed. </p>\n'
      },
      'codeFiles': ['row-grouping/row-group-render.vue']
    }
  ],
  apis: [{ 'name': 'grid-row-grouping', 'type': 'component', 'properties': [], 'events': [], 'slots': [] }]
}
