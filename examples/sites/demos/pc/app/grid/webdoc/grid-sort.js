export default {
  column: '1',
  owner: '',
  demos: [
    {
      demoId: 'sort-default-sort',
      name: { 'zh-CN': '默认排序', 'en-US': 'Default Sorting' },
      desc: {
        'zh-CN': '<p>通过表格列设置 <code>sortable</code> 属性开启该列排序功能。</p>\n',
        'en-US':
          '<p>Enable the sorting function by setting the <code>sortable</code> attribute of the table column. </p>\n'
      },
      codeFiles: ['sort/default-sort.vue']
    },
    {
      demoId: 'sort-combinations-sort',
      name: { 'zh-CN': '多字段组合排序', 'en-US': 'Multi-field sorting' },
      desc: {
        'zh-CN': `
           通过表格列设置 <code>sortable</code> 属性开启该列排序功能，然后设置 <code>sort-by</code> 属性实现多字段组合排序，数组列表就是排序的字段列表。<br>
           注意：如果开启了<code>多字段组合排序</code>，且当前多字段组合的可见列数>1时，多列组合排序才生效。否则退化为单列排序。
          `,
        'en-US': `
          Enable column sorting by applying the sortable attribute to the column, then use the sort-by attribute to enable multi-field combined sorting; the array list serves as the list of fields for sorting.<br>
          Note: The multi-column combined sorting functionality is only active when the "Multi-Field Combined Sorting" option is enabled  and the number of visible columns in the current multi-field combination is greater than 1.Otherwise, it will be degraded to a single-column sort.
          `
      },
      codeFiles: ['sort/combinations-sort.vue']
    },
    {
      demoId: 'sort-custom-sort',
      name: { 'zh-CN': '自定义排序', 'en-US': 'Custom Sorting' },
      desc: {
        'zh-CN': ` 
          表格排序： 通过给表格设置 <code>sort-method</code> 属性，设置整个表格的自定义排序功能。该属性优先级高，会接管整个表格的排序,忽略表格列的排序。<br>
          表格列排序： 通过表格列设置 <code>sortable</code> 属性开启该列排序功能，然后设置 <code>sort-method</code> 方法实现自定义该列的排序。<br>
          注意：如果<code>多字段组合排序</code>生效时， 将忽略表格列的自定义排序。<br><br>

          综合各个排序规则，其判断排序的优先级为：表格自定义排序> 多字段组合排序 > 表格列自定义排序  > 表格列默认排序<br>
          `,
        'en-US': `
          Table Sorting: Use the <code>sort-method</code> attribute to enable custom sorting functionality for the entire table.This attribute has high priority and takes over the sorting of the entire table, ignoring the sorting of individual table columns.<br>
          Table column sorting: Enable column sorting functionality by setting the <code>sortable</code> attribute on the table column, then define a <code> sort-method</code> function to customize the sorting behavior for that column.<br>
          Note: When the multi-field combination sorting is applied, custom column sorting in the table will be ignored<br><br>

          When combining all sorting rules, the sorting priority is as follows: Custom table sorting> Multi-field combined sorting> Custom table column sorting> Default table column sorting<br>
          `
      },
      codeFiles: ['sort/custom-sort.vue']
    },
    {
      demoId: 'sort-sort',
      name: { 'zh-CN': '手动排序', 'en-US': 'Manual Sorting' },
      desc: {
        'zh-CN':
          '<p>通过表格实例上的 <code>sort(field, order)</code> 方法可手动对表格进行排序（如果 order 为空则自动切换排序）。</p>\n',
        'en-US':
          '<p>You can use the <code>sort(field, order)</code> method to manually sort tables. If order is empty, the sorting is automatically switched. </p>\n'
      },
      codeFiles: ['sort/sort.vue']
    },
    {
      demoId: 'sort-server-sort',
      name: { 'zh-CN': '表格服务端排序', 'en-US': 'Table server sorting' },
      desc: {
        'zh-CN':
          '<p>通过表格列设置 <code>sortable</code> 属性开启该列排序功能，然后表格设置 <code>remote-sort</code> 方法开启服务端排序。\n该示例中的 <code>services/getGridMockData</code> 服务需要自行实现，示例模拟了远程服务返回的数据。</p>\n',
        'en-US':
          '<p>Set the <code>sortable</code> attribute of the table column to enable the sorting function, and then set the <code>remote-sort</code> method to enable the sorting function on the server. \nIn this example, the <code>services/getGridMockData</code> service needs to be implemented. The example simulates the data returned by the remote service.\n</p>\n'
      },
      codeFiles: ['sort/server-sort.vue']
    }
  ],
  apis: [{ name: 'grid-sort', 'type': 'component', 'props': [], 'events': [], 'slots': [] }]
}
