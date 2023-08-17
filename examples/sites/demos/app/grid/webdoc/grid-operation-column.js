export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'tiny-first-menu-default-serial-column',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': '<p>表格列属性设置 <code>type=&quot;radio&quot;</code> 显示单选列。</p>\n',
        'en-US': '<p>Table column property setting <code>type=&quot;radio&quot;</code> Display radio columns. </p>\n'
      },
      'codeFiles': ['tiny-first-menu/default-serial-column.vue']
    },
    {
      'demoId': 'tiny-first-menu-clearRadioRow',
      'name': { 'zh-CN': '手动取消单选行', 'en-US': 'Manually Canceling a Row' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['tiny-first-menu/clearRadioRow.vue']
    },
    {
      'demoId': 'tiny-first-menu-gridPagerReserve',
      'name': { 'zh-CN': '翻页后保留选中状态', 'en-US': 'Manually select a line' },
      'desc': {
        'zh-CN':
          '<p>通过配置<code>select-config</code>中的<code>reserve</code>为<code>true</code> 并设置<code>row-id</code>，开启翻页后保留选中状态功能。</p>\n',
        'en-US':
          '<p><code>setRadioRow(row)</code> is used to select a single line and set the selected status of a line. </p>\n'
      },
      'codeFiles': ['tiny-first-menu/gridPagerReserve.vue']
    },
    {
      'demoId': 'methods-set-radio-row',
      'name': { 'zh-CN': '手动选中某一行', 'en-US': 'Single-choice configuration item' },
      'desc': {
        'zh-CN': '<p><code>setRadioRow(row)</code> 用于单选行，设置某一行为选中状态。</p>\n',
        'en-US':
          'The <p><code>radio-config</code> configuration item can be used to configure the default selected and disabled options of the option button. </p>\n'
      },
      'codeFiles': ['methods/set-radio-row.vue']
    },
    {
      'demoId': 'tiny-first-menu-radio-config',
      'name': { 'zh-CN': '单选配置项', 'en-US': 'Disable a single option' },
      'desc': {
        'zh-CN': '<p><code>radio-config</code> 配置项,可以配置单选框的默认选中项和禁用配置等特性。</p>\n',
        'en-US':
          '<p>Single choice mode. The attribute <code>checkMethod</code> of the <code>radio-config</code> configuration item is used to determine which data items are disabled. The method determines each data item. If the return value is <code>true</code> or <code>false</code>, the data item is enabled or disabled. </p>\n'
      },
      'codeFiles': ['tiny-first-menu/radio-config.vue']
    },
    {
      'demoId': 'disable-radio',
      'name': { 'zh-CN': '单选禁用', 'en-US': 'Display Multiple Select Columns' },
      'desc': {
        'zh-CN':
          '<p>单选模式，通过 <code>radio-config</code> 配置项的属性 <code>checkMethod</code> ，传入自定义方法判断哪些数据项被禁用，方法会判断每个数据项，需返回值为 <code>true</code> 或者 <code>false</code>，代表此数据项启用或者禁用。</p>\n',
        'en-US':
          '<p>Table column attribute setting <code>type=&quot;selection&quot;</code> Display multiple columns. </p>\n'
      },
      'codeFiles': ['disable-radio.vue']
    },
    {
      'demoId': 'tiny-first-menu-custom-serial-column',
      'name': { 'zh-CN': '显示多选列', 'en-US': 'Manually Cancel Multiple Rows' },
      'desc': {
        'zh-CN': '<p>表格列属性设置 <code>type=&quot;selection&quot;</code> 显示多选列。</p>\n',
        'en-US': 'For details, see the following example.'
      },
      'codeFiles': ['tiny-first-menu/custom-serial-column.vue']
    },
    {
      'demoId': 'tiny-first-menu-clearSelection',
      'name': { 'zh-CN': '手动取消多选行', 'en-US': 'Manually select all lines' },
      'desc': {
        'zh-CN': '详细用法参考如下示例',
        'en-US':
          '<p><code>setAllSelection(checked)</code> is used to select multiple rows. You can set the selected status of all rows. </p>\n'
      },
      'codeFiles': ['tiny-first-menu/clearSelection.vue']
    },
    {
      'demoId': 'methods-set-all-selection',
      'name': { 'zh-CN': '手动选中所有行', 'en-US': 'Manually select a specified line' },
      'desc': {
        'zh-CN': '<p><code>setAllSelection(checked)</code> 用于多选行，可设置所有行的选中状态。</p>\n',
        'en-US':
          '<p><code>setSelection(rows, checked)</code> is used to select multiple lines. You can set the selected status of a specified line. The first parameter can be transferred to an object or array. If an object is used, select a single line. If an array is used, select multiple lines. The second parameter indicates whether to select or not. The </p>\n<div class="tip custom-block"><p class="custom-block-title">TIP</p>\n<p><code>setSelection</code> method does not trigger the <code>select-change</code> event. It is triggered only when you click it. </p><p>In multi-selection mode, the <code>checkField</code> attribute of the <code>select-config</code> configuration item determines the selection status of a row of data. (and the selected state and this field are bidirectionally bound).</p>\n</div>\n'
      },
      'codeFiles': ['methods/set-all-selection.vue']
    },
    {
      'demoId': 'methods-set-selection',
      'name': { 'zh-CN': '手动选中指定行', 'en-US': 'Manually switch the selection status of all rows.' },
      'desc': {
        'zh-CN':
          '<p><code>setSelection(rows, checked)</code> 用于多选行，可设置指定行为选中状态，第一个参数可传入对象或数组，如果是对象则选择单行，如果是数组则选择多行，第二个参数为选中与否。</p>\n<div class="tip custom-block"><p class="custom-block-title">TIP</p>\n<p><code>setSelection</code> 方法不会触发 <code>select-change</code> 事件，只有点击才会触发。</p><p>多选模式，通过 <code>select-config</code> 配置项的属性<code>checkField</code>指定行数据的某个字段去决定这行数据的选中状态（并且选中状态和这个字段是双向绑定的）。</p>\n</div>\n',
        'en-US':
          'The <p><code>toggleAllSelection()</code> method directly switches the selection status of all rows. </p>\n'
      },
      'codeFiles': ['methods/set-selection.vue']
    },
    {
      'demoId': 'methods-toggle-all-selection',
      'name': { 'zh-CN': '手动切换所有行选中状态', 'en-US': 'Manually switch the selected status of a specified row.' },
      'desc': {
        'zh-CN': '<p><code>toggleAllSelection()</code> 方法可直接切换所有行的选中状态。</p>\n',
        'en-US':
          'The <p><code>toggleRowSelection(row)</code> method directly switches the selection status of a row. </p>\n'
      },
      'codeFiles': ['methods/toggle-all-selection.vue']
    },
    {
      'demoId': 'methods-toggle-row-selection',
      'name': { 'zh-CN': '手动切换指定行选中状态', 'en-US': 'Multi-choice disabled' },
      'desc': {
        'zh-CN': '<p><code>toggleRowSelection(row)</code> 方法可直接切换某一行的选中状态。</p>\n',
        'en-US':
          '<p>Multi-choice mode. The attribute <code>checkMethod</code> of the <code>select-config</code> configuration item is used to determine which data items are disabled. The method determines each data item. If the return value is <code>true</code> or <code>false</code>, the data item is enabled or disabled. </p>\n'
      },
      'codeFiles': ['methods/toggle-row-selection.vue']
    },
    {
      'demoId': 'disable-selection',
      'name': { 'zh-CN': '多选禁用', 'en-US': 'User-defined Operation Column Content' },
      'desc': {
        'zh-CN':
          '<p>多选模式，通过 <code>select-config</code> 配置项的属性 <code>checkMethod</code> ，传入自定义方法判断哪些数据项被禁用，方法会判断每个数据项，需返回值为 <code>true</code> 或者 <code>false</code>，代表此数据项启用或者禁用。</p>\n',
        'en-US':
          '<p>Set the customized operation column by slot, that is, <code>&lt;tiny-grid-column&gt;</code> customized operation column content <code>&lt;/tiny-grid-column&gt;</code> . </p>\n'
      },
      'codeFiles': ['disable-selection.vue']
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
