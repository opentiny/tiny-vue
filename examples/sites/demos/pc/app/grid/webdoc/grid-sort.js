export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'sort-default-sort',
      'name': { 'zh-CN': '默认排序', 'en-US': 'Default Sorting' },
      'desc': {
        'zh-CN': '<p>通过表格列设置 <code>sortable</code> 属性开启该列排序功能。</p>\n',
        'en-US':
          '<p>Enable the sorting function by setting the <code>sortable</code> attribute of the table column. </p>\n'
      },
      'codeFiles': ['sort/default-sort.vue']
    },
    {
      'demoId': 'sort-combinations-sort',
      'name': { 'zh-CN': '多字段组合排序', 'en-US': 'Multi-field sorting' },
      'desc': {
        'zh-CN':
          '<p>通过表格列设置 <code>sortable</code> 属性开启该列排序功能，然后设置 <code>sort-by</code> 属性实现多字段组合排序，数组列表就是排序的字段列表。</p>\n',
        'en-US':
          '<p>Set the <code>sortable</code> attribute of the table column to enable the sorting function of the column, and then set the <code>sort-by</code> attribute to implement multi-field sorting. An array list is a sorted list of fields. </p>\n'
      },
      'codeFiles': ['sort/combinations-sort.vue']
    },
    {
      'demoId': 'sort-custom-sort',
      'name': { 'zh-CN': '自定义排序', 'en-US': 'Custom Sorting' },
      'desc': {
        'zh-CN':
          '<p>通过表格列设置 <code>sortable</code> 属性开启该列排序功能，然后设置 <code>sort-method</code> 方法实现自定义排序。</p>\n',
        'en-US':
          '<p>Set the <code>sortable</code> attribute of the table column to enable the sorting function for the column, and then set the <code>sort-method</code> method to implement user-defined sorting. </p>\n'
      },
      'codeFiles': ['sort/custom-sort.vue']
    },
    {
      'demoId': 'sort-sort',
      'name': { 'zh-CN': '手动排序', 'en-US': 'Manual Sorting' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>sort(field, order)</code> 方法可手动对表格进行排序（如果 order 为空则自动切换排序）。</p>\n',
        'en-US':
          '<p>You can use the <code>sort(field, order)</code> method to manually sort tables. If order is empty, the sorting is automatically switched. </p>\n'
      },
      'codeFiles': ['sort/sort.vue']
    },
    {
      'demoId': 'sort-server-sort',
      'name': { 'zh-CN': '表格服务端排序', 'en-US': 'Table server sorting' },
      'desc': {
        'zh-CN':
          '<p>通过表格列设置 <code>sortable</code> 属性开启该列排序功能，然后表格设置 <code>remote-sort</code> 方法开启服务端排序。\n该示例中的 <code>services/getGridMockData</code> 服务需要自行实现，示例模拟了远程服务返回的数据\n</p>\n',
        'en-US':
          '<p>Set the <code>sortable</code> attribute of the table column to enable the sorting function, and then set the <code>remote-sort</code> method to enable the sorting function on the server. \nIn this example, the <code>services/getGridMockData</code> service needs to be implemented. The example simulates the data returned by the remote service.\n</p>\n'
      },
      'codeFiles': ['sort/server-sort.vue']
    }
  ],
  apis: [{ 'name': 'grid-sort', 'type': 'component', 'properties': [], 'events': [], 'slots': [] }]
}
