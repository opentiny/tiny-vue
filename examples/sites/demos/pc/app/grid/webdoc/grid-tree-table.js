export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'tree-table-tree-grid-base',
      'name': {
        'zh-CN': '自定树节点图标',
        'en-US': 'Data structure with children, Custom Tree Table Expand and Collapse Icon'
      },
      'desc': {
        'zh-CN':
          "<p>在 grid 标签上配置 tree-config={children: 'children',renderIcon},其中renderIcon可以自定义树表的展开收缩图标。以树的形式来展示数据,还需要在展示树节点的字段上配置 tree-node 属性</p>\n",
        'en-US':
          "<p>Configure tree-config=&quot;{children:'children'}&quot; on the grid tab to display data in a tree. In addition, you need to configure the tree-node attribute</p>\n on the field that displays the tree node"
      },
      'codeFiles': ['tree-table/tree-grid-base.vue']
    },
    {
      'demoId': 'tree-table-tree-grid-data',
      'name': { 'zh-CN': '扁平化数据结构', 'en-US': 'Flat Data Structure' },
      'desc': {
        'zh-CN':
          '<p>注意：扁平化的数据结构需要调用 aggregateTableData 方法把数据转换成带有子级的数据才能正常的显示出树表的结构</p>\n',
        'en-US':
          '<p>Note: For a flattened data structure, you need to invoke the aggregateTableData method to convert data into data with sublevels to display the tree table structure.</p>\n'
      },
      'codeFiles': ['tree-table/tree-grid-data.vue']
    },
    {
      'demoId': 'tree-table-tree-grid-expand-active-method',
      'name': { 'zh-CN': '自定义树表隐藏行', 'en-US': '' },
      'desc': {
        'zh-CN':
          '<p>表格属性 <code>treeConfig.hideMethod</code> 配置一个方法控制行是否渲染，参数为 <code>row</code> 和 <code>rowLevel</code>，返回 <code>true</code> 则此行隐藏不渲染</p>\n',
        'en-US': ''
      },
      'codeFiles': ['tree-table/tree-grid-expand-active-method.vue']
    },
    {
      'demoId': 'tree-table-tree-grid-operation-column',
      'name': { 'zh-CN': '操作列', 'en-US': 'Operation Column' },
      'desc': {
        'zh-CN': '<p>列通过配置 type=&quot;radio&quot; 实现单选，配置 type=&quot;selection&quot; 实现多选</p>\n',
        'en-US':
          'In the <p> column, you can set type=&quot;radio&quot; to enable single selection and type=&quot;selection&quot; to enable multiple selection</p>\n'
      },
      'codeFiles': ['tree-table/tree-grid-operation-column.vue']
    },
    {
      'demoId': 'tree-table-set-tree-expansion',
      'name': { 'zh-CN': '树节点展开操作', 'en-US': 'Manually expand a specified tree node' },
      'desc': {
        'zh-CN': `
        <p> <code>setTreeExpansion(rows, checked)</code> 可设置展开指定的树形节点，第二个参数设置这一行展开与否。</p>
        <p> <code>setAllTreeExpansion(checked)</code> 可设置所有树节点的展开与否。</p>
        <p> <code>toggleTreeExpansion(row)</code> 可设置切换展开树形节点。</p>
        `,
        'en-US':
          'You can set <p> <code>setTreeExpansion(rows, checked)</code> to expand the specified tree node. The second parameter specifies whether to expand the row. </p>\n'
      },
      'codeFiles': ['tree-table/set-tree-expansion.vue']
    },
    {
      'demoId': 'tree-table-tree-grid-fixed-column',
      'name': { 'zh-CN': '冻结列', 'en-US': 'Frozen Column' },
      'desc': {
        'zh-CN':
          '<p>在列的标签上可以通过配置 fixed=&quot;left&quot; 属性把该列固定在左侧，配置 fixed=&quot;right&quot; 属性把该列固定在右侧</p>\n',
        'en-US':
          '<p>On the column label, you can set the fixed=&quot;left&quot; attribute to fix the column on the left, and set the fixed=&quot;right&quot; attribute to fix the column on the right</p>\n'
      },
      'codeFiles': ['tree-table/tree-grid-fixed-column.vue']
    },
    {
      'demoId': 'tree-table-has-tree-expand',
      'name': { 'zh-CN': '检查树节点是否已展开', 'en-US': 'Check whether the tree node is expanded.' },
      'desc': {
        'zh-CN': '<p>通过 <code>hasTreeExpand(row)</code> 方法可以检查树节点是否已展开，参数 row 为行数据对象。</p>\n',
        'en-US':
          '<p>You can use the <code>hasTreeExpand(row)</code> method to check whether a tree node is expanded. The row parameter indicates the row data object. </p>\n'
      },
      'codeFiles': ['tree-table/has-tree-expand.vue']
    },
    {
      'demoId': 'tree-table-tree-grid-index',
      'name': { 'zh-CN': '树表展开序号列配置', 'en-US': 'Expand Row No. Column Configuration' },
      'desc': {
        'zh-CN':
          '<p>在 <code>treeConfig</code> 属性里配置 <code>ordered</code> 为 <code>false</code> 展开行，序号列按父子级的结构排序。默认 <code>ordered</code> 属性为 <code>true</code> 展开行后序号列按序号排序。</p>\n',
        'en-US':
          '<p>In the <code>treeConfig</code> attribute, set <code>ordered</code> to <code>false</code> to expand rows. The sequence number column is sorted by parent-child structure. By default, the <code>ordered</code> attribute is <code>true</code>. After the row is expanded, the sequence number column is sorted by sequence number. </p>\n'
      },
      'codeFiles': ['tree-table/tree-grid-index.vue']
    },
    {
      'demoId': 'tree-table-tree-grid-insert-delete-update',
      'name': { 'zh-CN': '增删改', 'en-US': 'Add, Delete, and Modify' },
      'desc': {
        'zh-CN':
          '<p>在 grid-toolbar 标签上配置 slot=&quot;toolbar&quot; 插槽，配置相关的操作按钮 ，注意：新增数据需要在 grid 标签上配置 edit-config 编辑框的配置信息，并通过 ref 获取到组件实例调用方法进行相关操作，findTree、filterTree 是工具类里的查找和过滤方法。由于tree数据节构的特殊性，grid的<code>getInsertRecords</code>与<code>getRecordset</code>方法无法获取到新增数据，此类数据需要用户自行处理。</p>\n',
        'en-US':
          '<p>Set slot=&quot;toolbar&quot; on the grid-toolbar tab, and configure related operation buttons. Note: To add data, you need to configure the edit-config text box on the grid tab. In addition, the component instance invokes methods through ref to perform related operations. findTree and filterTree are search and filter methods in the tool class. Due to the special structure of tree data, the <code>getInsertRecords</code> and <code>getRecordset</code> methods of the grid cannot obtain new data. Such data needs to be processed by users. </p>\n'
      },
      'codeFiles': ['tree-table/tree-grid-insert-delete-update.vue']
    },
    {
      'demoId': 'tree-table-tree-grid-keyboard-operation',
      'name': { 'zh-CN': '键盘操作', 'en-US': 'Keyboard operation' },
      'desc': {
        'zh-CN':
          '<p>键盘移动高亮行,设置斑马线属性 stripe 为 false,鼠标悬停高亮行 highlight-hover-row 为 false,高亮当前行 highlight-current-row ,并配置 keyboard-config={isArrow: true} 属性启用方向键功能\n | Arrow Up ↑ | 移动到高亮行的上一行\n | Arrow Down ↓ | 移动到高亮行的下一行\n | Enter | 展开节点，进入子节点\n | Backspace | 关闭节点，返回到父节点</p>\n',
        'en-US':
          '<p>Move the highlighted row, set stripe to false, highlight-hover-row to false, and highlight-current-row to false. Configure the keyboard-config={isArrow: true} attribute to enable the arrow keys function.\n | Arrow Up | Move to the previous line of the highlighted line\n | Arrow Down | Move to the next line of the highlighted line\n | Enter | Expand the node. Enter the child node\n | Backspace | Close the node and return to the parent node</p>\n'
      },
      'codeFiles': ['tree-table/tree-grid-keyboard-operation.vue']
    }
  ],
  apis: [{ 'name': 'grid-tree-table', 'type': 'component', 'properties': [], 'events': [], 'slots': [] }]
}
