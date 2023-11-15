export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'custom-column-width',
      'name': { 'zh-CN': '本地存储列宽', 'en-US': 'Column Width' },
      'desc': {
        'zh-CN':
          '<p>在 <code>grid</code> 标签上配置 <code>resizable=&quot;true&quot;</code> 可以调整列宽，并在 <code>toolbar</code> 标签上配置 <code>resizable=&quot;{storage: true}&quot;</code> 保存在本地的 <code>localStroage</code> 里，刷新页面表格的列宽按照拖动后的列宽显示</p>\n',
        'en-US':
          '<p>Configure <code>resizable=&quot;true&quot;</code> on the <code>grid</code> tag to adjust the column width, and configure <code>resizable=&quot;{storage: true}&quot;</code> on the <code>toolbar</code> tag to save the column width in <code>localStroage</code> on the local host. The column width of the table on the refreshed page is displayed based on the column width after being dragged.</p>\n'
      },
      'codeFiles': ['custom/column-width.vue']
    },
    {
      'demoId': 'custom-column-simple',
      'name': { 'zh-CN': '简化版列设置', 'en-US': 'Manually Reset Columns' },
      'desc': {
        'zh-CN':
          '<p>在 <code>toolbar</code> 标签上配置 <code>:setting=&quot;{simple: true, customDisable: customDisable}&quot;</code> 开启简化版列设置 通过<code>customDisable</code> 方法自定义当前选项是否禁用</p>\n',
        'en-US':
          'Description of the <div class="tip custom-block"><p class="custom-block-title"> method </p>\n<p> <code>resetResizable()</code>: Manually reset the column width and drag the operation to the initial state \n<code>resetCustoms()</code>: Manually reset the display/hide operation of the column to the initial state.\n<code>resetAll()</code>: Manually reset all operations of the column. Restore to the initial state </p>\n</div>\n<p> Drag the column width or hide the column, and then click the corresponding button to view the effect. </p>\n'
      },
      'codeFiles': ['custom/column-simple.vue']
    },
    {
      'demoId': 'custom-reset-resizable',
      'name': { 'zh-CN': '手动重置列操作', 'en-US': 'Sort' },
      'desc': {
        'zh-CN':
          '<div class="tip custom-block"><p class="custom-block-title">方法说明</p>\n<p> <code>resetResizable()</code>：手动重置列宽拖动的操作，还原到初始状态\n<code>resetCustoms()</code>：手动重置列的显示/隐藏操作，还原到初始状态\n<code>resetAll()</code>：手动重置列的所有操作，还原到初始状态</p>\n</div>\n<p>请先对列宽进行拖动、隐藏列等操作，然后单击对应按钮查看效果。</p>\n',
        'en-US':
          '<p>Configure <code>sortable</code> on the <code>column</code> label to sort data. (For columns that are not configured, the sorting icon in the personalization panel is hidden.) and configure <code>setting</code> on the <code>toolbar</code> tab to enable personalized settings. Sort the settings in the personalized panel. The sorting results are saved in the local <code>localStroage</code>. Refresh the page. The sorted data is displayed on the page.</p>\n'
      },
      'codeFiles': ['custom/reset-resizable.vue']
    },
    {
      'demoId': 'custom-column-sort',
      'name': { 'zh-CN': '排序', 'en-US': 'Sort Type' },
      'desc': {
        'zh-CN':
          '<p>在 <code>column</code> 标签上配置 <code>sortable</code> 可以排序（未配置的列，在个性化面板中的排序图标会隐藏），并在 <code>toolbar</code> 标签上配置 <code>setting</code> 开启个性化设置，在个性化面板里进行排序，排序过后会保存在本地的 <code>localStroage</code> 里，刷新页面页面上会显示排序过后的数据</p>\n',
        'en-US':
          '<p>Configure <code>sortable</code> on the <code>column</code> tab to enable sorting, and configure <code>setting</code> on the <code>toolbar</code> tab to enable personalized settings. In the Personalization panel, select Other Settings. In Other Settings, you can select the sorting type. The sorting type includes the sorting on the current page and sorting on all data. The default value is Sort on the current page.</p>\n'
      },
      'codeFiles': ['custom/column-sort.vue']
    },
    {
      'demoId': 'custom-multiple-column-sort',
      'name': { 'zh-CN': '多列排序', 'en-US': 'Multi-column sorting' },
      'desc': {
        'zh-CN': `<p> <code>表头排序</code> 只支持单列排序，<code>个性化排序</code> 可以通过配置 <code>sortConfig.multipleColumnSort</code> 开启多列排序，
          <code>sortConfig.multipleColumnSort</code> 支持配置为 <code>true</code> 或者 <code>方法</code>，配置为方法时可以自定义多列排序。</p>\n`,
        'en-US': `<p> <code>Table header sorting</code> supports only single-column sorting. <code>Personalized sorting</code>You can configure <code>sortConfig.multipleColumnSort</code> to enable multi-column sorting,
          <code>sortConfig.multipleColumnSort</code> can be set to <code>true</code> or <code>method</code>. When this parameter is set to a method, you can customize multi-column sorting. </p>\n`
      },
      'codeFiles': ['custom/multiple-column-sort.vue']
    },
    {
      'demoId': 'custom-sort-type',
      'name': { 'zh-CN': '排序类型', 'en-US': 'Column Freeze' },
      'desc': {
        'zh-CN':
          '<p>在 <code>column</code> 标签上配置 <code>sortable</code> 可以排序，并在 <code>toolbar</code> 标签上配置 <code>setting</code> 开启个性化设置，在个性化面板里选择其它设置，其它设置里可以选择排序类型，排序类型有当前页排序和所有数据排序选项，默认是当前页排序</p>\n',
        'en-US':
          '<p>Configure the <code>fixed=&quot;left&quot;</code> on the <code>column</code> tag to be fixed on the left, and configure <code>setting</code> on the <code>toolbar</code> tag to enable personalized settings. In the personalized panel, you can set whether the column is fixed.</p>\n'
      },
      'codeFiles': ['custom/sort-type.vue']
    },
    {
      'demoId': 'custom-column-fixed',
      'name': { 'zh-CN': '列冻结', 'en-US': 'Local Records' },
      'desc': {
        'zh-CN':
          '<p>在 <code>column</code> 标签上配置 <code>fixed=&quot;left&quot;</code> 可以固定在左侧，并在 <code>toolbar</code> 标签上配置 <code>setting</code> 开启个性化设置，在个性化面板里可以设置是否固定列</p>\n',
        'en-US':
          '<p>Set <code>sortable</code> of <code>setting</code> to <code>sortablejs</code> to implement the drag-and-drop sorting function. This function is invalid under multi-level column headers</p>\n'
      },
      'codeFiles': ['custom/column-fixed.vue']
    },
    {
      'demoId': 'custom-ordercolumn-local',
      'name': {
        'zh-CN': '个性化按钮点击事件',
        'en-US': 'Local Record and Personalization Panel Button Click Event Listening'
      },
      'desc': {
        'zh-CN': `<p>配置 <code>setting</code> 的 <code>storage</code> 为 <code>local</code> 可实个性化的本地存储，
          配置 <code>setting</code> 的 <code>sortable</code> 为 <code>sortablejs</code> 可实现拖拽排序列功能，此功能在多级列头下无效，
          并且可以通过三个事件<code>save-setting</code>、<code>cancel-setting</code>、<code>reset-setting</code>来分别监听确认、取消、重置按钮的点击事件</p>\n`,
        'en-US': `<p>Configure <code>storage</code> of <code>setting</code> to <code>local</code> as a personalized local storage,
          Set <code>sortable</code> of <code>setting</code> to <code>sortablejs</code> to implement the drag-and-drop sorting function. This function is invalid in multi-level column headers,
          In addition, three events <code>save-setting</code>, <code>cancel-setting</code>, and <code>reset-setting</code> can be used to listen to the click events of the confirmation, cancellation, and reset buttons.</p>\n`
      },
      'codeFiles': ['custom/ordercolumn-local.vue']
    },
    {
      'demoId': 'custom-ordercolumn-remote',
      'name': { 'zh-CN': '加载远端数据', 'en-US': 'Display and hide columns' },
      'desc': {
        'zh-CN': '<p>通过 <code>reloadCustoms</code> 方法，将第二个参数置为 <code>true</code> 可按序加载列</p>\n',
        'en-US':
          '<p>Configure <code>setting</code> on the <code>toolbar</code> tab to enable personalized settings. In the personalized panel, you can set whether to display or hide columns</p>\n'
      },
      'codeFiles': ['custom/ordercolumn-remote.vue']
    },
    {
      'demoId': 'custom-column-visible-hidden',
      'name': { 'zh-CN': '列显示隐藏', 'en-US': 'Manually hide the displayed column' },
      'desc': {
        'zh-CN':
          '<p>在 <code>toolbar</code> 标签上配置 <code>setting</code> 开启个性化设置，在个性化面板里可以设置是否显示和隐藏列</p>\n',
        'en-US':
          '<p>Invoke the <code>hideColumn(column)</code> method to hide the specified column, and the <code>showColumn(column)</code> method to display the specified column. When you use the two methods to hide or display a column, you need to invoke the <code>refreshColumn()</code> method to refresh the column configuration for the modification to take effect. </p>\n'
      },
      'codeFiles': ['custom/column-visible-hidden.vue']
    },
    {
      'demoId': 'custom-hide-column',
      'name': { 'zh-CN': '手动隐藏显示列', 'en-US': 'Event triggered before dragging the personalized panel' },
      'desc': {
        'zh-CN':
          '<p>通过调用 <code>hideColumn(column)</code> 方法隐藏指定列，<code>showColumn(column)</code> 方法显示指定列。使用这两个方法隐藏/显示列时，还需要再调用 <code>refreshColumn()</code> 方法刷新列配置才能实际生效。</p>\n',
        'en-US':
          '<p>Configure <code>setting</code> on the <code>toolbar</code> tab to enable personalized settings, and configure the <code>onBeforeMove</code> event before dragging on the personalized panel. You can also configure <code>filter</code> to set the class name. If you drag a line on the personalized panel, the event before dragging the personalized panel is triggered. </p>\n'
      },
      'codeFiles': ['custom/hide-column.vue']
    },
    {
      'demoId': 'custom-prsonalized-drag',
      'name': { 'zh-CN': '个性化面板拖拽前事件', 'en-US': 'Number of records on each page' },
      'desc': {
        'zh-CN':
          '<p>在 <code>toolbar</code> 标签上配置 <code>setting</code> 开启个性化设置，在个性化面板里配置 <code>onBeforeMove</code> 拖拽前事件，也可配置 <code>filter</code> 设置类名， 拖拽个性化面板某一行会触发个性化面板的拖拽前事件。</p>\n',
        'en-US':
          '<p>On the <code>toolbar</code> tab, configure <code>setting</code> to enable personalized settings. In the personalized panel, select other settings. You can select the number of records to be displayed on each page. You can use the <code>other</code> attribute of <code>setting</code> to control the display of other settings. The default value of <code>boolean</code> is <code>true</code></p>\n'
      },
      'codeFiles': ['custom/prsonalized-drag.vue']
    },
    {
      'demoId': 'custom-page-size',
      'name': { 'zh-CN': '分页条数', 'en-US': 'Local Storage' },
      'desc': {
        'zh-CN':
          '<p>在 <code>toolbar</code> 标签上配置 <code>setting</code> 开启个性化设置，在个性化面板里选择其它设置，其它设置里可以选择每页显示的条数，可以通过 <code>setting</code> 的 <code>other</code> 属性控制显示其他设置，<code>boolean</code> 类型默认为 <code>true</code></p>\n',
        'en-US':
          '<p>Configure <code>:setting=&quot;{storage:\'local\'}&quot; on the <code>toolbar</code> tag </code>Enable personalization and save to local <code>localSotrage</code> </p>\n<div class="danger custom-block">\n</div>\n'
      },
      'codeFiles': ['custom/page-size.vue']
    },
    {
      'demoId': 'custom-server-storage',
      'name': { 'zh-CN': '服务端存储', 'en-US': '' },
      'desc': {
        'zh-CN': `
        <p>在 <code>toolbar</code> 标签上配置 <code>:setting=&quot;{storage:'remote'}&quot;</code> 开启个性化并启用远程服务获取个性化数据，并配置 <code>@remote-setting</code> 调用 <code>reloadCustoms</code> 方法更新个性化数据。
         注意:如果是根据服务端数据控制显示/隐藏列，调用接口获取到个性化的数据后需手动调用 <code>reloadCustoms</code> 方法更新。</p>`,
        'en-US': ''
      },
      'codeFiles': ['custom/server-storage.vue']
    },
    {
      'demoId': 'custom-reset-method',
      'name': { 'zh-CN': '自定义重置', 'en-US': '' },
      'desc': {
        'zh-CN':
          '<p>通过工具栏属性 <code>reset-method</code>  配置一个方法，在重置个性化时调用，需要返回 <code>promise</code>，指定重置的个性化数据，参考示例：',
        'en-US': ''
      },
      'codeFiles': ['custom/reset-method.vue']
    }
  ],
  apis: [{ 'name': 'grid-custom', 'type': 'component', 'properties': [], 'events': [], 'slots': [] }]
}
