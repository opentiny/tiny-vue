export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'toolbar-insert-delete-update',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN':
          '<p>工具栏配置步骤：\n1、表格以插槽方式引入表格工具栏组件 <code>GridToolbar</code>，并设置工具栏组件属性 <code>slot=&quot;toolbar&quot;</code> 。\n2、设置工具栏组件属性 <code>buttons</code> 进行按钮组相关配置。\n3、表格事件设置 <code>@toolbar-button-click</code> 获取工具栏 <code>buttons</code> 的事件，用户可自定义实现增删改操作的业务逻辑。</p>\n<div class="tip custom-block"><p class="custom-block-title">新增的行需要标记新增状态的样式时需要配置 edit-config 的 markInsert 项为 true</p>\n</div>\n',
        'en-US':
          '<p>Toolbar configuration procedure:\n1. Import the table toolbar component <code>GridToolbar</code> in slot mode and set the toolbar component attribute <code>slot=&quot;toolbar&quot;</code> . \n2. Set the toolbar component attribute <code>buttons</code> and configure the button group. \n3. Table event setting: The <code>@toolbar-button-click</code> obtains the <code>buttons</code> event on the toolbar. Users can customize the service logic for adding, deleting, and modifying operations. To mark a new line in the </p>\n<div class="tip custom-block"><p class="custom-block-title"> state, set markInsert in edit-config to true</p>\n</div>\n'
      },
      'codeFiles': ['toolbar/insert-delete-update.vue']
    },
    {
      'demoId': 'toolbar-cancel-delete',
      'name': { 'zh-CN': '取消删除', 'en-US': 'Cancel deletion' },
      'desc': {
        'zh-CN':
          '<p>在工具栏中配置 <code>mark_cancel</code> 的 code，勾选数据后，单击 <code>删除/取消删除</code> 按钮，勾选的数据将标记删除线。再单击 <code>保存</code> 按钮请求服务删除标记的数据。已标记删除线的数据勾选后再次单击 <code>删除/取消删除</code> 按钮，会取消删除线。\n 需要配置 fetch-data 请求服务时才有标记删除线和取消删除线的效果\n</p>\n',
        'en-US':
          '<p>Configure the code of <code>mark_cancel</code> on the toolbar, select the data, and click <code>Delete/Undelete</code>. The selected data is marked with strikethrough. Then click the <code>Save</code> button to request the service to delete the marked data. Select the data marked with strikethrough and click <code>Delete/Undelete</code> again to cancel the strikethrough. \nThe effect of marking and canceling strikethrough is available only when the fetch-data request service is configured.\n</p>\n'
      },
      'codeFiles': ['toolbar/cancel-delete.vue']
    },
    {
      'demoId': 'toolbar-clear-data',
      'name': { 'zh-CN': '清空数据', 'en-US': 'Clear Data' },
      'desc': {
        'zh-CN':
          '<p>clearData 方法手动清空单元格内容，如果不传参数，则清空整个表格内容。如果传了行则清空指定行内容，如果传了指定字段，则清空该字段内容。具体参考下面示例。</p>\n',
        'en-US':
          '<p>clearData method manually clears the cell content. If no parameter is transferred, the entire table content is cleared. If a line is transferred, the specified line is cleared. If a field is transferred, the field is cleared. For details, see the following example. </p>\n'
      },
      'codeFiles': ['toolbar/clear-data.vue']
    },
    {
      'demoId': 'toolbar-insert-remove-rows',
      'name': {
        'zh-CN': '插入或删除指定行',
        'en-US': 'Insert data to a specified row and delete a specified row'
      },
      'desc': {
        'zh-CN':
          '<p>通过 <code>insertAt(records, row)</code> 方法可以在指定行插入一行或多行数据。<code>remove(rows)</code> 方法可以删除指定一行或多行数据，rows 为对象则是一行，数组则是多行数据，为空则删除所有数据。</p>\n',
        'en-US':
          '<p>You can use the <code>insertAt(records, row)</code> method to insert one or more rows of data to a specified row. The <code>remove(rows)</code> method can be used to delete one or more specified rows of data. If rows is an object, it is one row. If an array is an array, it is multiple rows of data. If the value is empty, all data is deleted. </p>\n'
      },
      'codeFiles': ['toolbar/insert-remove-rows.vue']
    },
    {
      'demoId': 'toolbar-save-data',
      'name': { 'zh-CN': '服务端数据保存和删除', 'en-US': 'Saving and Deleting Server Data' },
      'desc': {
        'zh-CN':
          '<p>通过表格属性 <code>save-data</code> 服务端数据保存方法。\n通过表格属性 <code>delete-data</code> 服务端数据删除方法。</p>\n',
        'en-US':
          '<p>Use the table attribute <code>save-data</code> to save server data. \n Use the table attribute <code>delete-data</code> to delete server data. </p>\n'
      },
      'codeFiles': ['toolbar/save-data.vue']
    },
    {
      'demoId': 'toolbar-copy-row-data',
      'name': { 'zh-CN': '设置工具栏尺寸大小', 'en-US': 'Set the toolbar size' },
      'desc': {
        'zh-CN':
          '<p>工具栏配置步骤：\n1、表格以插槽方式引入表格工具栏组件 <code>GridToolbar</code>，并设置工具栏组件属性 <code>slot=&quot;toolbar&quot;</code> 。\n2、设置工具栏组件属性 <code>buttons</code> 进行按钮组相关配置。\n3、表格事件设置 <code>@toolbar-button-click</code> 获取工具栏 <code>buttons</code> 的事件，用户可自定义实现复制行操作的业务逻辑。</p>\n<ul>\n<li><code>size</code> 属性设置工具栏尺寸大小,包括 large、medium、small、mini 四种不同大小。不设置时为默认尺寸。</li>\n</ul>\n',
        'en-US':
          '<p>Toolbar configuration procedure:\n1. Import the table toolbar component <code>GridToolbar</code> in slot mode and set the toolbar component attribute <code>slot=&quot;toolbar&quot;</code> . \n2. Set the toolbar component attribute <code>buttons</code> and configure the button group. \n3. Set the table event <code>@toolbar-button-click</code> to obtain the <code>buttons</code> event on the toolbar. You can customize the service logic for copying rows. The </p>\n<ul>\n<li><code>size</code> property specifies the size of the toolbar. The options are large, medium, small, and mini. If this parameter is not set, the default size is used. </li>\n</ul>\n'
      },
      'codeFiles': ['toolbar/copy-row-data.vue']
    },
    {
      'demoId': 'toolbar-refresh-grid',
      'name': { 'zh-CN': '开启表格刷新功能', 'en-US': 'Enable the table refresh function' },
      'desc': {
        'zh-CN':
          "<p>工具栏配置步骤：\n1、表格以插槽方式引入表格工具栏组件 <code>GridToolbar</code>，并设置工具栏组件属性 <code>slot=&quot;toolbar&quot;</code> 。\n2、设置工具栏组件属性 <code>refresh</code> 开启表格刷新功能。</p>\n<ul>\n<li>设置表格属性 <code>loading</code> 开启/关闭加载中。\n自定义实现刷新时直接调用<code>handleFetch('reload')</code></li>\n</ul>\n",
        'en-US':
          "<p>Toolbar configuration procedure:\n1. Import the table toolbar component <code>GridToolbar</code> in slot mode and set the toolbar component attribute <code>slot=&quot;toolbar&quot;</code> . \n2. Set the toolbar component attribute <code>refresh</code> to enable the table refresh function. </p>\n<ul>\n<li> Setting Toolbar Properties <code>loading</code>Enable/Disable Loading. \n <code>handleFetch('reload') </code></li>\n</ul>\n is invoked when the customized implementation is refreshed"
      },
      'codeFiles': ['toolbar/refresh-grid.vue']
    },
    {
      'demoId': 'toolbar-grid-full-screen',
      'name': { 'zh-CN': '开启表格全屏功能', 'en-US': 'Enable the full-screen function of the table.' },
      'desc': {
        'zh-CN':
          '<p>工具栏配置步骤：\n1、表格以插槽方式引入表格工具栏组件 <code>GridToolbar</code>，并设置工具栏组件属性 <code>slot=&quot;toolbar&quot;</code> 。\n2、设置工具栏组件属性 <code>full-screen</code> 开启表格全屏功能。</p>\n',
        'en-US':
          '<p>Toolbar configuration procedure:\n1. Import the table toolbar component <code>GridToolbar</code> in slot mode and set the toolbar component attribute <code>slot=&quot;toolbar&quot;</code> . \n2. Set the toolbar component attribute <code>full-screen</code> to enable the full-screen function. </p>\n'
      },
      'codeFiles': ['toolbar/grid-full-screen.vue']
    },
    {
      'demoId': 'toolbar-grid-full-screen-height',
      'name': { 'zh-CN': '全屏时改变表格高度', 'en-US': 'Change the table height in full screen mode' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['toolbar/grid-full-screen-height.vue']
    },
    {
      'demoId': 'toolbar-custom-toolbar',
      'name': { 'zh-CN': '工具栏自定义插槽', 'en-US': 'Toolbar Custom Slot' },
      'desc': {
        'zh-CN':
          '<p>工具栏配置步骤：\n1、表格以插槽方式引入表格工具栏组件 <code>GridToolbar</code>，并设置工具栏组件插槽 <code>#toolbar</code> 。\n2、通过工具栏组件的插槽 <code>#buttons</code> 自定义内容。</p>\n',
        'en-US':
          '<p>Toolbar configuration procedure:\n1. Import the table toolbar component <code>GridToolbar</code> in slot mode and set the toolbar component slot <code>#toolbar</code>. \n2. Customize content through the slot <code>#buttons</code> of the toolbar component. </p>\n'
      },
      'codeFiles': ['toolbar/custom-toolbar.vue']
    },
    {
      'demoId': 'toolbar-toolbar-op-config',
      'name': { 'zh-CN': '配置式工具栏写法', 'en-US': 'Profile' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>v-bind</code> 绑定一个对象来实现配置式。在绑定的对象中 <code>toolbar</code> 字段用于工具栏配置，可配合 <code>events</code> 字段对工具栏中按钮进行 <code>toolbarButtonClick</code> 事件配置。另外，<code>pager</code> 字段用于分页配置，<code>fetchData</code> 字段用于请求服务。</p>\n',
        'en-US':
          '<p>The <code>v-bind</code> is bound to an object to implement the profile. In the bound object, the <code>toolbar</code> field is used to configure the toolbar. The <code>events</code> field can be used to configure the <code>toolbarButtonClick</code> event for buttons on the toolbar. In addition, the <code>pager</code> field is used for pagination configuration, and the <code>fetchData</code> field is used for service request. </p>\n'
      },
      'codeFiles': ['toolbar/toolbar-op-config.vue']
    }
  ],
  apis: [{ 'name': 'grid-toolbar', 'type': 'component', 'properties': [], 'events': [], 'slots': [] }]
}
