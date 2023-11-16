export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'operation-column-clear-and-set-radio-row',
      'name': { 'zh-CN': '单选项操作', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN':
          '<p>表格列属性设置 <code>type=&quot;radio&quot;</code> 显示单选列。<code>setRadioRow(row)</code> 用于单选行，设置某一行为选中状态。<code>clearRadioRow(row)</code> 用于取消单选行的选中。</p>\n',
        'en-US': '<p>Table column property setting <code>type=&quot;radio&quot;</code> Display radio columns. </p>\n'
      },
      'codeFiles': ['operation-column/clear-and-set-radio-row.vue']
    },
    {
      'demoId': 'operation-column-radio-config',
      'name': { 'zh-CN': '单选配置项', 'en-US': 'Disable a single option' },
      'desc': {
        'zh-CN':
          '<p> <code>radio-config</code> 配置项,可以配置单选框的默认选中项和禁用配置等特性。单选模式，通过 <code>radio-config</code> 配置项的属性 <code>checkMethod</code> ，传入自定义方法判断哪些数据项被禁用，方法会判断每个数据项，需返回值为 <code>true</code> 或者 <code>false</code>，代表此数据项启用或者禁用。</p>\n',
        'en-US':
          '<p>Single choice mode. The attribute <code>checkMethod</code> of the <code>radio-config</code> configuration item is used to determine which data items are disabled. The method determines each data item. If the return value is <code>true</code> or <code>false</code>, the data item is enabled or disabled. </p>\n'
      },
      'codeFiles': ['operation-column/radio-config.vue']
    },
    {
      'demoId': 'operation-column-selection-operation',
      'name': { 'zh-CN': '多选项操作', 'en-US': 'Manually Cancel Multiple Rows' },
      'desc': {
        'zh-CN': `<p>
          表格列属性设置 <code>type=&quot;selection&quot;</code> 显示多选列。
          <code>setAllSelection(checked)</code> 用于多选行，可设置所有行的选中状态。\n
          <code>clearSelection(checked)</code> 用于多选行，可以手动取消多选行选中。\n
          <code>setAllSelection(checked)</code> 用于多选行，可设置所有行的选中状态。\n
          <code>toggleAllSelection()</code> 方法可直接切换所有行的选中状态。\n
          <code>toggleRowSelection(row)</code> 方法可直接切换某一行的选中状态。
          <div class="tip custom-block"><p class="custom-block-title">TIP</p>\n<p> <code>setSelection</code> 方法不会触发 <code>select-change</code> 事件，只有点击才会触发。</p></div>
        </p>\n`,
        'en-US': 'For details, see the following example.'
      },
      'codeFiles': ['operation-column/selection-operation.vue']
    },
    {
      'demoId': 'operation-column-selection-config',
      'name': { 'zh-CN': '多选配置项', 'en-US': 'User-defined Operation Column Content' },
      'desc': {
        'zh-CN':
          '<p>多选模式，通过 <code>select-config</code> 配置项的属性 <code>checkMethod</code> ，传入自定义方法判断哪些数据项被禁用，方法会判断每个数据项，需返回值为 <code>true</code> 或者 <code>false</code>，代表此数据项启用或者禁用。通过 <code>select-config</code> 配置项的属性<code>checkField</code>指定行数据的某个字段去决定这行数据的选中状态（并且选中状态和这个字段是双向绑定的）。</p>\n',
        'en-US':
          '<p>Set the customized operation column by slot, that is, <code>&lt;tiny-grid-column&gt;</code> customized operation column content <code>&lt;/tiny-grid-column&gt;</code> . </p>\n'
      },
      'codeFiles': ['operation-column/selection-config.vue']
    },
    {
      'demoId': 'operation-column-grid-pager-reserve',
      'name': { 'zh-CN': '翻页后保留选中状态', 'en-US': 'Manually select a line' },
      'desc': {
        'zh-CN':
          '<p>通过配置<code>select-config</code>中的<code>reserve</code>为<code>true</code> 并设置<code>row-id</code>，开启翻页后保留选中状态功能。</p>\n',
        'en-US':
          '<p> <code>setRadioRow(row)</code> is used to select a single line and set the selected status of a line. </p>\n'
      },
      'codeFiles': ['operation-column/grid-pager-reserve.vue']
    },
    {
      'demoId': 'operation-column-custom-operation-column',
      'name': { 'zh-CN': '自定义操作列内容', 'en-US': '' },
      'desc': {
        'zh-CN':
          '<p>通过插槽设置自定义操作列，即 <code>&lt;tiny-grid-column&gt;</code> 自定义操作列内容 <code>&lt;/tiny-grid-column&gt;</code> 。</p>\n',
        'en-US': ''
      },
      'codeFiles': ['operation-column/custom-operation-column.vue']
    },
    {
      'demoId': 'operation-column-dropdown',
      'name': { 'zh-CN': '表头下拉菜单', 'en-US': '' },
      'desc': {
        'zh-CN': '<p>使用多选列 dropdown 插槽，可以在多选列表头配置自定义下拉菜单，示例中使用 AuiDropdown 组件。</p>\n',
        'en-US': ''
      },
      'codeFiles': ['operation-column/dropdown.vue']
    },
    {
      'demoId': 'operation-column-header-select-disabled',
      'name': { 'zh-CN': '表头自动禁用', 'en-US': '' },
      'desc': {
        'zh-CN':
          '<p>多选模式，在空数据时复选列表头自动禁用；如果设置 <code>selectConfig.headerAutoDisabled</code> 为 <code>false</code> ，则不自动禁用，保持和旧版本兼容。</p>\n',
        'en-US': ''
      },
      'codeFiles': ['operation-column/header-select-disabled.vue']
    }
  ],
  apis: [{ 'name': 'grid-operation-column', 'type': 'component', 'properties': [], 'events': [], 'slots': [] }]
}
