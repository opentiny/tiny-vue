export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'grid_Example-dynamicallyColumns',
      'name': {
        'zh-CN': 'Grid-根据选择日期动态生成列',
        'en-US': 'Grid-Dynamic column generation based on the selected date'
      },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['grid_Example/dynamicallyColumns.vue']
    },
    {
      'demoId': 'column-columns-dynamic',
      'name': { 'zh-CN': 'Grid-动态列数据', 'en-US': '' },
      'desc': { 'zh-CN': '兼容低版本的动态列数据', 'en-US': '' },
      'codeFiles': ['column/columns-dynamic.vue']
    }
  ],
  apis: [{ 'name': 'grid-dynamically-columns', 'type': 'component', 'properties': [], 'events': [], 'slots': [] }]
}
