export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'base-basic-usage',
      'name': { 'zh-CN': '标签式', 'en-US': 'Label' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['base/basic-usage.vue']
    },
    {
      'demoId': 'base-basic-usage-conf',
      'name': { 'zh-CN': '配置式', 'en-US': 'Profile' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['base/basic-usage-conf.vue']
    }
  ],
  apis: [
    {
      'name': 'grid',
      'type': 'component',
      'props': [
        {
          'name': 'pager',
          'type': 'IPagerConfig',
          'typeAnchorName': 'IPagerConfig',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '分页配置项',
            'en-US': ''
          },
          'demoId': 'grid-pager#pager-inner-pager'
        },
        {
          'name': 'fetch-data',
          'type': 'IDataHandler',
          'typeAnchorName': 'IDataHandler',
          'defaultValue': '--',
          'desc': { 'zh-CN': '服务端数据查询方法', 'en-US': 'Querying Server Data' },
          'demoId': 'grid-data-source#data-source-request-service'
        },
        {
          'name': 'save-data',
          'type': 'IDataHandler',
          'typeAnchorName': 'IDataHandler',
          'defaultValue': '--',
          'desc': { 'zh-CN': '服务端数据保存方法', 'en-US': 'Method of saving server data' },
          'demoId': 'grid-toolbar#toolbar-save-data'
        },
        {
          'name': 'delete-data',
          'type': 'IDataHandler',
          'typeAnchorName': 'IDataHandler',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '服务端数据删除方法',
            'en-US': ''
          },
          'demoId': 'grid-toolbar#toolbar-save-data'
        },
        {
          'name': 'row-group',
          'type': 'IRowGroup',
          'typeAnchorName': 'IRowGroup',
          'defaultValue': '--',
          'desc': {
            'zh-CN': 'row-group 属性可以配置行分组，行分组会将具有相同值的列进行分组展示。',
            'en-US':
              'The row group attribute can be configured. Columns with the same value are displayed in a row group.'
          },
          'demoId': 'grid-row-grouping#row-grouping'
        },
        {
          'name': 'toolbar',
          'type': 'IToolbarConfig',
          'typeAnchorName': 'IToolbarConfig',
          'defaultValue': '--',
          'desc': { 'zh-CN': '工具栏配置', 'en-US': 'Toolbar configuration' },
          'demoId': 'grid-toolbar#toolbar-toolbar-op-config'
        },
        {
          'name': 'align',
          'type': `'left' | 'center' | 'right'`,
          'defaultValue': 'left',
          'desc': {
            'zh-CN': '所有的列对齐方式;该属性的可选值为 left（左对齐）, center（居中对齐）, right（右对齐）',
            'en-US':
              'All column alignment mode; The optional values of this attribute are left (left-aligned), center (center-aligned), and right (right-aligned)'
          },
          'demoId': 'grid-align#align-grid-align'
        },
        {
          'name': 'auto-resize',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '父元素响应式监听（对于父元素可能存在动态变化的场景可能会用到）',
            'en-US':
              'Parent element responsive listening (This may be used in scenarios where the parent element may have dynamic changes.)'
          },
          'demoId': 'grid-size#size-auto-height'
        },
        {
          'name': 'border',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '是否带有纵向边框', 'en-US': 'Whether there is a vertical border' },
          'demoId': 'grid-appearance-settings#appearance-settings-grid-border'
        },
        {
          'name': 'is-before-page-change',
          'type': 'boolean',
          'defaultValue': '--',
          'desc': {
            'zh-CN':
              '是否打开页面改变时的前置处理特性。在值为true时，翻页操作或者改变页大小操作不会立即生效，留给用户处理业务逻辑，之后通过调用预留的callback或者rollback使之生效或者失效，详看事件before-page-change',
            'en-US':
              'Whether to enable the preprocessing feature when the page changes. If the value is true, the page turning operation or page size change operation does not take effect immediately. The service logic is left for the user to process. Then, the reserved callback or rollback is invoked to make the operation take effect or invalid. For details, see the before-page-change event'
          },
          'demoId': 'grid-event#event-page-before-change-event'
        },
        {
          'name': 'cell-class-name',
          'type': 'string | (args: IClassNameArgs) => string',
          'typeAnchorName': 'IClassNameArgs',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '给单元格附加 className，也可以是函数',
            'en-US': 'Add a class name to a cell. The class name can also be the Function'
          },
          'demoId': 'grid-custom-style#custom-style-body-style'
        },
        {
          'name': 'column-key',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否需要为每一列的 VNode 设置 key 属性（非特殊情况下不需要使用）',
            'en-US': 'Whether to set the key attribute for VNodes in each column (not required in special cases).'
          },
          'demoId': ''
        },
        {
          'name': 'column-min-width',
          'type': 'number | string',
          'defaultValue': '--',
          'desc': {
            'zh-CN':
              '设置可以调整到的最小宽度，不设置时默认为列头 span 的宽度 + 36（头部固定宽度）。 ;所有最小列宽度；会自动将剩余空间按比例分配;该属性的可选值为 整数, px，%',
            'en-US':
              'Minimum width that can be adjusted. If this parameter is not set, the default value is the width of the column head span plus 36 (fixed width of the head).; all minimum column widths; The remaining space will be allocated in proportion automatically. The optional values of this attribute are integers, px,%'
          },
          'demoId': 'grid-size#size-column-min-width'
        },
        {
          'name': 'column-width',
          'type': 'number | string',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '所有列宽度;该属性的可选值为 整数, px，%',
            'en-US': 'Width of all columns; The optional values of this attribute are integers, px,%'
          },
          'demoId': 'grid-size#size-column-width'
        },
        {
          'name': 'context-menu',
          'type': 'IContextMenuConfig',
          'typeAnchorName': 'IContextMenuConfig',
          'defaultValue': '--',
          'desc': { 'zh-CN': '快捷菜单配置项', 'en-US': 'Shortcut menu configuration item' },
          'demoId': 'grid-context-menu#context-menu-footer-menu'
        },
        {
          'name': 'edit-rules',
          'type': 'IValidRules',
          'typeAnchorName': 'IValidRules',
          'defaultValue': '--',
          'desc': { 'zh-CN': '校验规则配置项', 'en-US': 'Check rule configuration item' },
          'demoId': 'grid-validation#validation-editing-validation'
        },
        {
          'name': 'expand-config',
          'type': 'IExpandConfig',
          'typeAnchorName': 'IExpandConfig',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '展开行配置项',
            'en-US': ''
          },
          'demoId': 'grid-expand#expand-expand-config'
        },
        {
          'name': 'fit',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '所有列的宽度是否自撑开',
            'en-US': 'Whether the widths of all columns are extended automatically.'
          },
          'demoId': 'grid-size#size-adaptive-column-width'
        },
        {
          'name': 'footer-align',
          'type': `'left' | 'center' | 'right'`,
          'defaultValue': '继承 align',
          'desc': {
            'zh-CN': '所有的表尾列的对齐方式;该属性的可选值为 left（左对齐）, center（居中对齐）, right（右对齐）',
            'en-US':
              'Alignment mode of all table tail columns; The optional values of this attribute are left (left-aligned), center (center-aligned), and right (right-aligned)'
          },
          'demoId': 'grid-align#align-footer-align'
        },
        {
          'name': 'optimization',
          'type': 'IOptimizationConfig',
          'typeAnchorName': 'IOptimizationConfig',
          'defaultValue': '--',
          'desc': { 'zh-CN': '表格虚拟滚动的优化配置项', 'en-US': 'Optimize configuration items' },
          'demoId': 'grid-large-data#large-data-virtual-rolling'
        },
        {
          'name': 'footer-cell-class-name',
          'type': 'string | (args: IClassNameArgs) => string',
          'typeAnchorName': 'IClassNameArgs',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '给表尾的单元格附加 className，也可以是函数',
            'en-US': 'Add the class name to the cell at the end of the table. The class name can also be the function'
          },
          'demoId': 'grid-custom-style#custom-style-footer-style'
        },
        {
          'name': 'footer-method',
          'type': '({columns, data}) => string[][]',
          'defaultValue': '--',
          'desc': {
            'zh-CN':
              '表尾合计的计算方法 Function({columns, data});params:{columns:所有的列配置数据 data： 当前所有的表格数据}',
            'en-US':
              'Calculation method of table tail total Function({columns, data});params:{columns: all column configuration data: all table data}'
          },
          'demoId': 'grid-footer#footer-footer-summation-empty'
        },
        {
          'name': 'footer-row-class-name',
          'type': 'string | (args: IClassNameArgs) => string',
          'typeAnchorName': 'IClassNameArgs',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '给表尾的行附加 className',
            'en-US': 'Add className to the row at the end of the table'
          },
          'demoId': 'grid-custom-style#custom-style-footer-style'
        },
        {
          'name': 'footer-span-method',
          'type': '(args: ISpanMethodArgs) => { rowspan: number, colspan: number }',
          'typeAnchorName': 'ISpanMethodArgs',
          'defaultValue': '--',
          'desc': {
            'zh-CN':
              '表尾合并行或列，该函数返回计算后的值;通过 footer-method 和 footer-span-method 设置表尾合计行或列逻辑 必须配置 show-footer',
            'en-US': ''
          },
          'demoId': 'grid-footer#footer-footer-row-or-column-span'
        },
        {
          'name': 'header-align',
          'type': 'string',
          'defaultValue': '继承 align',
          'desc': {
            'zh-CN': '所有的表头列的对齐方式;该属性的可选值为 left（左对齐）, center（居中对齐）, right（右对齐）',
            'en-US':
              'Alignment mode of all table header columns; The optional values of this attribute are left (left-aligned), center (center-aligned), and right (right-aligned)'
          },
          'demoId': 'grid-align#align-header-align'
        },
        {
          'name': 'header-cell-class-name',
          'type': 'string | (args: IClassNameArgs) => string',
          'typeAnchorName': 'IClassNameArgs',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '给表头的单元格附加 className，也可以是函数',
            'en-US': 'Add a class name to the cell in the table header. The class name can also be the function'
          },
          'demoId': 'grid-custom-style#custom-style-header-style'
        },
        {
          'name': 'header-row-class-name',
          'type': 'string | (args: IClassNameArgs) => string',
          'typeAnchorName': 'IClassNameArgs',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '表头的行附加 className，也可以是函数',
            'en-US': 'Add className to the row in the table header. It can also be the function'
          },
          'demoId': 'grid-custom-style#custom-style-header-style'
        },
        {
          'name': 'height',
          'type': 'number | string',
          'defaultValue': '--',
          'desc': {
            'zh-CN':
              '设置表格内容区域（不含表格头部，底部）的高度。 不设置时，表格内容区域的高度度自适应；表格的高度；支持铺满父容器或者固定宽高;该属性的可选值为 整数, px，%',
            'en-US':
              'Set the height of the table content area (excluding the table header and bottom). If this parameter is not set, the height of the table content area is adaptive.; height of table; Supports full parent containers or fixed width and height. The optional values of this attribute are integers, px,%'
          },
          'demoId': 'grid-size#size-fixed-grid-height'
        },
        {
          'name': 'highlight-cell',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '只对 editConfig 配置时有效，是否在编辑时高亮单元格边框',
            'en-US':
              'This parameter is valid only when editConfig is configured. Whether to highlight the cell border during edit.'
          },
          'demoId': 'grid-highlight#highlight-highlight-cell'
        },
        {
          'name': 'highlight-current-column',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '是否要高亮当前列', 'en-US': 'Do you want to highlight the current column?' },
          'demoId': 'grid-highlight#highlight-highlight-current-column'
        },
        {
          'name': 'highlight-current-row',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '是否要高亮当前行', 'en-US': 'Do you want to highlight the current line?' },
          'demoId': 'grid-highlight#highlight-highlight-current-row'
        },
        {
          'name': 'highlight-hover-column',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '鼠标移到列是否要高亮显示',
            'en-US': 'Do you want to highlight the column when you move the cursor to the column?'
          },
          'demoId': 'grid-highlight#highlight-highlight-hover-column'
        },
        {
          'name': 'highlight-hover-row',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '鼠标移到行是否要高亮显示',
            'en-US': 'Do you want to highlight the line when you move the cursor to the line?'
          },
          'demoId': 'grid-highlight#highlight-highlight-hover-row'
        },
        {
          'name': 'keyboard-config',
          'type': 'IKeyboardConfig',
          'typeAnchorName': 'IKeyboardConfig',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '按键配置项',
            'en-US': 'Key configuration item; {isArrow: true //Enable the arrow keys}'
          },
          'demoId': 'grid-mouse-keyboard#mouse-keyboard-keyboard-navigation'
        },
        {
          'name': 'loading',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': { 'zh-CN': '表格是否显示加载中', 'en-US': 'Whether the table is being loaded.' },
          'demoId': 'grid-loading#loading-grid-loading-off-tip'
        },
        {
          'name': 'max-height',
          'type': 'number | string',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '设置表格内容区域（不含表格头部，底部）的最大高度。;该属性的可选值为 整数, px，%',
            'en-US':
              'Set the maximum height of the table content area (excluding the table header and bottom).; The optional values of this attribute are integers, px,%'
          },
          'demoId': 'grid-size#size-max-min-grid-height'
        },
        {
          'name': 'mouse-config',
          'type': 'IMouseConfig',
          'typeAnchorName': 'IMouseConfig',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '鼠标配置项',
            'en-US':
              'Mouse configuration item; {selected: true //Whether to enable the function of selecting cells by left-clicking. This function is valid only for edit-config.mode=cell. The default value is false.}'
          },
          'demoId': 'grid-mouse-keyboard#mouse-keyboard-mouse-config'
        },
        {
          'name': 'radio-config',
          'type': 'IRadioConfig',
          'typeAnchorName': 'IRadioConfig',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '单选框配置项',
            'en-US': ''
          },
          'demoId': 'grid-operation-column#operation-column-radio-config'
        },
        {
          'name': 'remote-filter',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '所有列是否使用服务端筛选，如果设置为 true 则不会对数据进行处理',
            'en-US':
              'Whether to use server filtering for all columns. If this parameter is set to true, data will not be processed.'
          },
          'demoId': 'grid-filter#filter-server-filter'
        },
        {
          'name': 'remote-sort',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否将服务端的全部数据进行排序。默认为 false 不进行服务端排序。',
            'en-US':
              'Whether to sort all data on the server. The default value is false. The server-side sorting is not performed.'
          },
          'demoId': 'grid-sort#sort-server-sort'
        },
        {
          'name': 'resizable',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': { 'zh-CN': '设置是否允许调整列宽', 'en-US': 'Set whether to allow column width adjustment' },
          'demoId': 'grid-size#size-resize-column-width'
        },
        {
          'name': 'row-class-name',
          'type': 'string | (args: IClassNameArgs) => string',
          'typeAnchorName': 'IClassNameArgs',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '自定义表格行类名，用于自定义表格的行样式的场景。可以直接设置字符串类名，也可以是用函数',
            'en-US':
              'User-defined table row class name, which is used in the scenario where the row style of the table is customized. You can set the string class name directly or use the Function.'
          },
          'demoId': 'grid-custom-style#custom-style-body-style'
        },
        {
          'name': 'row-id',
          'type': 'string',
          'defaultValue': '_RID',
          'desc': {
            'zh-CN': '自定义行数据唯一主键的字段名（行数据必须要有唯一主键，默认自动生成）',
            'en-US':
              'Field name of the unique primary key of the customized row data (The row data must have a unique primary key, which is automatically generated by default)'
          },
          'demoId': 'grid-operation-column#operation-column-grid-pager-reserve'
        },
        {
          'name': 'select-config',
          'type': 'ISelectConfig',
          'typeAnchorName': 'ISelectConfig',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '复选框配置项',
            'en-US': ''
          },
          'demoId': 'grid-operation-column#operation-column-selection-config'
        },
        {
          'name': 'show-footer',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '是否显示表尾合计', 'en-US': 'Display the total at the end of the table' },
          'demoId': 'grid-footer#footer-footer-summation-empty'
        },
        {
          'name': 'show-header',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '是否显示表头', 'en-US': 'Whether to display the table header' },
          'demoId': 'grid-header#header-hide-grid-header'
        },
        {
          'name': 'show-header-overflow',
          'type': `boolean | 'ellipsis' | 'tooltip' | 'title'`,
          'defaultValue': '--',
          'desc': {
            'zh-CN':
              '设置表头所有内容过长时显示为省略号;该属性的可选值为 ellipsis（只显示省略号）,title（并且显示为原生 title）,tooltip（并且显示为 tooltip 提示）',
            'en-US':
              'Sets the display of all contents in the table header as ellipsis if the length is too long. The optional values for this property are ellipsis (only the ellipsis is displayed), title (and the native title is displayed), and tooltip (and tooltip is displayed)'
          },
          'demoId': 'grid-tip#tip-column-header-tip'
        },
        {
          'name': 'show-overflow',
          'type': `boolean | 'ellipsis' | 'tooltip' | 'title'`,
          'defaultValue': '--',
          'desc': {
            'zh-CN':
              '设置所有内容过长时显示为省略号（如果是固定列建议设置该值，提升渲染速度）;该属性的可选值为 ellipsis（只显示省略号）,title（并且显示为原生 title）,tooltip（并且显示为 tooltip 提示）',
            'en-US':
              'Set the display of all content as ellipsis when the content is too long. (If the column is fixed, you are advised to set this parameter to improve the rendering speed.) The optional values for this property are ellipsis (only the ellipsis is displayed), title (and the native title is displayed), tooltip (and the tooltip prompt is displayed)'
          },
          'demoId': 'grid-tip#tip-cell-tip'
        },
        {
          'name': 'size',
          'type': `'medium' | 'small' | 'mini'`,
          'defaultValue': '--',
          'desc': {
            'zh-CN': '表格的尺寸;该属性的可选值为 medium, small, mini',
            'en-US': 'Table size; The options of this attribute are medium, small, and mini'
          },
          'demoId': 'grid-size#size-grid-size'
        },
        {
          'name': 'sort-config',
          'type': 'ISortConfig',
          'typeAnchorName': 'ISortConfig',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '排序配置项',
            'en-US': 'Sort configuration items'
          },
          'demoId': 'grid-sort#sort-default-sort'
        },
        {
          'name': 'sort-method',
          'type': '(row1: Row, row2: Row)=> boolean',
          'defaultValue': '--',
          'desc': {
            'zh-CN':
              '自定义所有列的排序方法，当触发排序时会调用该函数返回排序后的结果;自定义排序方法，类似原生的sort排序',
            'en-US':
              'Customize the sorting method of all columns. When sorting is triggered, the function is invoked to return the sorting result. User-defined sorting method, similar to the native sort sorting method'
          },
          'demoId': 'grid-sort#sort-custom-sort'
        },
        {
          'name': 'span-method',
          'type': '(args: ISpanMethodArgs) => { rowspan: number, colspan: number }',
          'typeAnchorName': 'ISpanMethodArgs',
          'defaultValue': '{ rowspan: 1, colspan: 1}',
          'desc': {
            'zh-CN': '合并行或列，该函数返回计算后的值',
            'en-US': 'Consolidate rows or columns. This function returns the calculated value.'
          },
          'demoId': 'grid-span#span-row-span'
        },
        {
          'name': 'start-index',
          'type': 'number',
          'defaultValue': '0',
          'desc': {
            'zh-CN': '只对 type=index 的列有效，动态索引的起始值',
            'en-US':
              'This parameter is valid only for columns whose type is index. The value of this parameter is the start value of the dynamic index.'
          },
          'demoId': 'grid-serial-column#serial-column-start-index'
        },
        {
          'name': 'stripe',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '是否带有斑马纹', 'en-US': 'Zebra pattern' },
          'demoId': 'grid-appearance-settings#appearance-settings-stripe'
        },
        {
          'name': 'sync-resize',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '响应式跟随某个属性（对于通过某个属性来控制显示/隐藏切换的场景可能会用到）',
            'en-US':
              'Responsively follow an attribute. (This may be used in scenarios where the display/hide switchover is controlled by an attribute)'
          },
          'demoId': ''
        },
        {
          'name': 'tree-config',
          'type': 'ITreeConfig',
          'typeAnchorName': 'ITreeConfig',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '树形结构配置项',
            'en-US': 'tree structure configuration item'
          },
          'demoId': 'grid-tree-table#tree-table-tree-grid-base'
        },
        {
          'name': 'valid-config',
          'type': 'IValidConfig',
          'typeAnchorName': 'IValidConfig',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '校验配置项',
            'en-US': 'Check configuration items'
          },
          'demoId': 'grid-validation#validation-bubbling'
        },
        {
          'name': 'summary-config',
          'type': 'ISummaryConfig',
          'typeAnchorName': 'ISummaryConfig',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '表格统计功能配置项',
            'en-US': 'Configuration item of the table statistics function'
          },
          'demoId': 'grid-footer#footer-configuration-summary'
        },
        {
          'name': 'sortable',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '设置是否允许列数据排序。默认为 true 可排序',
            'en-US': 'Whether to allow column data sorting. The default value is true, which can be sorted.'
          },
          'demoId': 'grid-sort#sort-default-sort'
        },
        {
          'name': 'auto-load',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': { 'zh-CN': '是否开启自动请求服务，配置 fetch-data 时有效', 'en-US': '' },
          'demoId': 'grid-data-source#data-source-auto-load'
        },
        {
          'name': 'is-async-column',
          'type': 'boolean',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '设置表格的列是否延迟加载;是否开启异步列功能，配合 scrollLoad 一起使用',
            'en-US':
              'Sets whether to delay the loading of columns in the table. Indicates whether to enable the asynchronous column function. This parameter is used together with scrollLoad'
          },
          'demoId': 'grid-data-source#data-source-column-asyn-rendering'
        },
        {
          'name': 'columns',
          'type': 'ColumnConfig[]',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '表格列的配置信息，具体参考列配置项',
            'en-US': 'Configuration information of the table column. For details, see the column configuration items.'
          },
          'demoId': 'grid-data-source#data-source-columns'
        },
        {
          'name': 'scroll-load',
          'type': 'IScrollLoadConfig',
          'typeAnchorName': 'IScrollLoadConfig',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '滚动加载配置,设置是否滚动加载分页，当 showPager 为 true 时有效。',
            'en-US': 'Rolling configuration loading, This parameter is valid only when showPager is set to true.'
          },
          'demoId': 'grid-large-data#large-data-scroll-paging'
        },
        {
          'name': 'row-span',
          'type': '{ field: string }[]',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '设置行合并,该属性仅适用于普通表格，不可与 tree-config 同时使用',
            'en-US':
              'Set row combination. This attribute applies only to common tables and cannot be used together with tree-config.'
          },
          'demoId': 'grid-span#span-row-span-easy'
        },
        {
          'name': 'render-empty',
          'type': '()=> string | VNode',
          'defaultValue': '--',
          'desc': { 'zh-CN': '空数据渲染', 'en-US': 'Render empty data' },
          'demoId': 'grid-empty#empty-empty-data-tip'
        },
        {
          'name': 'events',
          'type': 'IEventsConfig',
          'typeAnchorName': 'IEventsConfig',
          'defaultValue': '--',
          'desc': { 'zh-CN': '事件对象', 'en-US': 'Event object' },
          'demoId': 'grid-event#event-grid-events'
        },
        {
          'name': 'data',
          'type': 'Row[]',
          'defaultValue': '--',
          'desc': { 'zh-CN': '设置表格的数据;', 'en-US': 'Set table data.' },
          'demoId': 'grid-data-source#data-source-static-data'
        },
        {
          'name': 'min-height',
          'type': 'number | string',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '设置表格内容区域（不含表格头部，底部）的最小高度。',
            'en-US': 'Set the minimum height of the table content area (excluding the table header and bottom).'
          },
          'demoId': 'grid-size#size-max-min-grid-height'
        },
        {
          'name': 'drop-config',
          'type': 'IDropConfig',
          'typeAnchorName': 'IDropConfig',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '表格拖拽配置项',
            'en-US': 'Drag configuration items in a table'
          },
          'demoId': 'grid-drag#drag-row-drag'
        },
        {
          'name': 'edit-config',
          'type': 'IEditConfig',
          'typeAnchorName': 'IEditConfig',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '表格编辑配置项',
            'en-US': 'Configuration item for editing the table'
          },
          'demoId': 'grid-editor#editor-inner-editor'
        },
        {
          'name': 'seq-serial',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '设置行序号是否连续，开启分页时有效,seqSerial 当 showSeq 为 true 时有效。',
            'en-US':
              'Whether to set the row sequence number consecutive. This parameter is valid only when showSeq is set to true.'
          },
          'demoId': 'grid-pager#pager-inner-pager'
        },
        {
          'name': 'show-save-msg',
          'type': 'boolean',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '切换分页时有未保存的数据时是否进行提示',
            'en-US': 'Whether to display a prompt when there is unsaved data during page switching.'
          },
          'demoId': 'grid-pager#pager-show-save-msg'
        },
        {
          'name': 'tooltip-config',
          'type': 'IToolTipConfig',
          'defaultValue': '--',
          'desc': {
            'zh-CN': 'Grid 内置 tooltip 配置项，请参考 Tooltip 组件属性说明',
            'en-US':
              'Configuration item of the built-in tooltip of the Grid. For details, see the Tooltip Attribute Description.'
          },
          'demoId': 'grid-tip#tip-cell-tip-config'
        }
      ],
      'slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '默认插槽（表格列）',
            'en-US': 'Default slot (Table column)'
          },
          'demoId': 'grid-slot#slot-default-slot'
        },
        {
          'name': 'toolbar',
          'type': '',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '工具栏，（包含：缩放、个性化、刷新表格、自定义按钮',
            'en-US': 'Toolbar, (Includes: Zoom, Personalize, Refresh Table, and Custom Buttons)'
          },
          'demoId': 'grid-slot#slot-buttons-slot'
        },
        {
          'name': 'empty',
          'type': '',
          'defaultValue': '--',
          'desc': { 'zh-CN': '空数据时显示的文本内容', 'en-US': 'Text content displayed when the data is empty' },
          'demoId': 'grid-slot#slot-empty-slot'
        }
      ],
      'methods': [
        {
          'name': 'clearActived',
          'type': '()=> void',
          'defaultValue': '--',
          'desc': { 'zh-CN': '手动清除单元格激活状态', 'en-US': 'Manually clear cell activation status' },
          'demoId': 'grid-edit#edit-has-row-change'
        },
        {
          'name': 'clearAll',
          'type': '()=> void',
          'defaultValue': '--',
          'desc': {
            'zh-CN':
              '手动清除表格所有条件，还原到初始状态（对于增删改查的场景中可能会用到，比如在数据保存之后清除表格缓存）',
            'en-US':
              'Manually clear all conditions in the table and restore the table to the initial state. (This may be used in the scenario of adding, deleting, modifying, and querying, for example, clearing the table cache after data is saved.)'
          },
          'demoId': 'grid-toolbar#toolbar-insert-delete-update'
        },
        {
          'name': 'clearCurrentColumn',
          'type': '()=> void',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '用于当前列，手动清空当前高亮的状态',
            'en-US': 'This command is used to manually clear the current highlighted status.'
          },
          'demoId': 'grid-highlight#highlight-highlight-current-column'
        },
        {
          'name': 'clearCurrentRow',
          'type': '()=> void',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '用于当前行，手动清空当前高亮的状态',
            'en-US': 'For the current line. Manually clear the highlighted status.'
          },
          'demoId': 'grid-highlight#highlight-highlight-current-row'
        },
        {
          'name': 'clearData',
          'type': '(rows?: Row | Row[], field?: string)=> void',
          'defaultValue': '--',
          'desc': {
            'zh-CN':
              '手动清空单元格内容，如果不传参数，则清空整个表格内容，如果传了行则清空指定行内容，如果传了指定字段，则清空该字段内容',
            'en-US':
              'Manually clear the cell content. If no parameter is transferred, the entire table content is cleared. If a row is transferred, the specified row content is cleared. If a specified field is transferred, the field content is cleared.'
          },
          'demoId': 'grid-toolbar#toolbar-clear-data'
        },
        {
          'name': 'clearFilter',
          'type': '(field: string)=> void',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '手动清空筛选条件（如果不传 field 则清空所有筛选条件），数据会恢复成未筛选的状态',
            'en-US':
              'Manually clear the filter criteria (if field is not transferred, all filter criteria are cleared). Data will be restored to the unfiltered state.'
          },
          'demoId': 'grid-filter#filter-default-filter'
        },
        {
          'name': 'clearRadioRow',
          'type': '()=> void',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '用于单选行，手动清空用户的选择',
            'en-US': 'This is used to select a single row. Manually clear the user selection.'
          },
          'demoId': 'grid-operation-column#operation-column-default-serial-column'
        },
        {
          'name': 'clearRowExpand()',
          'type': '()=> void',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '手动清空展开行状态，数据会恢复成未展开的状态',
            'en-US': 'Manually clear the expanded row status. The data will be restored to the unexpanded state.'
          },
          'demoId': 'grid-expand#expand-set-row-expansion'
        },
        {
          'name': 'clearScroll',
          'type': '()=> void',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '手动清除滚动相关信息，还原到初始状态',
            'en-US': 'Manually clear scrolling information and restore the original state.'
          },
          'demoId': 'grid-size#size-max-min-grid-height'
        },
        {
          'name': 'clearSelected',
          'type': '()=> void',
          'defaultValue': '--',
          'desc': { 'zh-CN': '手动清除单元格选中状态', 'en-US': 'Clear cell selection manually' },
          'demoId': 'grid-highlight#highlight-highlight-cell'
        },
        {
          'name': 'clearSelection',
          'type': '()=> void',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '用于多选行，手动清空用户的选择',
            'en-US': 'For selecting multiple lines. Manually clear the user selection.'
          },
          'demoId': 'grid-operation-column#operation-column-selection-operation'
        },
        {
          'name': 'clearSort',
          'type': '()=> void',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '手动清空排序条件，数据会恢复成未排序的状态',
            'en-US': 'Manually clear the sorting conditions. Data will be restored to the unsorted state.'
          },
          'demoId': 'grid-sort#sort-default-sort'
        },
        {
          'name': 'clearTreeExpand',
          'type': '()=> void',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '手动清空树形节点的展开状态，数据会恢复成未展开的状态',
            'en-US':
              'Manually clear the expanded state of the tree node. The data will be restored to the un-folded state.'
          },
          'demoId': 'grid-tree-table#tree-table-tree-grid-insert-delete-update'
        },
        {
          'name': 'closeFilter',
          'type': '()=> void',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '手动关闭筛选面板（某些特殊场景可能会用到）',
            'en-US': 'Manually close the filter panel (which may be used in some special scenarios)'
          },
          'demoId': 'grid-filter#filter-default-filter'
        },
        {
          'name': 'closeMenu',
          'type': '()=> void',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '手动关闭快捷菜单（某些特殊场景可能会用到）',
            'en-US': 'Manually close the shortcut menu (which may be used in some special scenarios)'
          },
          'demoId': 'grid-context-menu#context-menu-cell-menu'
        },
        {
          'name': 'createRow',
          'type': '(records: Row[])=> Promise',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '创建 Row|Rows 对象（对于某些特殊场景需要对数据进行手动插入时可能会用到）',
            'en-US':
              'Create a Row|Rows object. (This method may be used when data needs to be manually inserted in some special scenarios.)'
          },
          'demoId': 'grid-tree-table#tree-table-tree-grid-insert-delete-update'
        },
        {
          'name': 'exportCsv',
          'type': '(options: IExportCsvOptions)=> void',
          'typeAnchorName': 'IExportCsvOptions',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '将表格数据导出为 .csv 文件（支持所有主流的浏览器，不支持合并行或列）',
            'en-US':
              'Exports table data to a .csv file. (All mainstream browsers are supported. Rows or columns cannot be combined.)'
          },
          'demoId': 'grid-import-export#import-export-export-excel'
        },
        {
          'name': 'fullValidate',
          'type': '(rows: Row[], callback: ()=> void)=> Promise',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '表格完整校验函数，和 validate 的区别就是会对全量数据的所有规则进行完整校验',
            'en-US':
              'Complete table verification function. The difference between this function and validate is that all rules of full data are verified.'
          },
          'demoId': 'grid-validation#validation-before-submit-validation'
        },
        {
          'name': 'getActiveRow',
          'type': '()=> Row',
          'defaultValue': '--',
          'desc': { 'zh-CN': '获取已激活的行数据', 'en-US': 'Obtain activated row data' },
          'demoId': 'grid-edit#edit-trigger-mode-hm-editing'
        },
        {
          'name': 'getColumnByField',
          'type': '(field: string)=> ColumnConfig',
          'defaultValue': '--',
          'desc': { 'zh-CN': '根据列的字段名获取列', 'en-US': 'Obtain columns based on column field names.' },
          'demoId': 'grid-large-data#large-data-scroll-to'
        },
        {
          'name': 'getColumnById',
          'type': '(colid: string)=> ColumnConfig',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '根据列的唯一主键获取列',
            'en-US': 'Obtain a column based on the unique primary key of the column.'
          },
          'demoId': ''
        },
        {
          'name': 'getColumnIndex',
          'type': '(column: ColumnConfig)=> number',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '根据 column 获取相对于 columns 中的索引',
            'en-US': 'Obtain the index relative to the column based on the column.'
          },
          'demoId': ''
        },
        {
          'name': 'getColumnNode',
          'type': '(cell: HTMLElement)=> ColumnConfig',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '根据 th/td 元素获取对应的 column 信息',
            'en-US': 'Obtain the column information based on the th/td element.'
          },
          'demoId': ''
        },
        {
          'name': 'getColumns',
          'type': '(columnIndex?: number)=> ColumnConfig | ColumnConfig[]',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '获取表格的可视列，也可以指定索引获取列',
            'en-US': 'Obtains the visual column of the table or specifies the index to obtain the column.'
          },
          'demoId': 'grid-dynamically-columns#dynamically-columns-columns-dynamic'
        },
        {
          'name': 'getCurrentRow',
          'type': '()=> Row',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '用于当前行，获取当前行的数据',
            'en-US': 'This is used for the current row to obtain the data of the current row.'
          },
          'demoId': 'grid-event#event-get-row-method'
        },
        {
          'name': 'getData',
          'type': '(rowIndex?: number)=> Row | Row[]',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '获取数据，和 data 的行为一致，也可以指定索引获取数据',
            'en-US':
              'The behavior of obtaining data is the same as that of data. You can also specify an index to obtain data.'
          },
          'demoId': 'grid-toolbar#toolbar-clear-data'
        },
        {
          'name': 'getInsertRecords',
          'type': '()=> Row[]',
          'defaultValue': '--',
          'desc': { 'zh-CN': '获取新增的数据', 'en-US': 'Obtain the new data' },
          'demoId': 'grid-toolbar#toolbar-insert-delete-update'
        },
        {
          'name': 'getRadioRow',
          'type': '()=> Row',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '用于单选行，获取当已选中的数据',
            'en-US': 'This command is used to select a single row to obtain the selected data.'
          },
          'demoId': 'grid-event#event-get-row-method'
        },
        {
          'name': 'getRecordset',
          'type': '()=> IRecordset',
          'typeAnchorName': 'IRecordset',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '获取表格数据集（获取新增、删除、更改的数据，对于增删改查表格非常方便）',
            'en-US':
              'Obtaining a table data set (Obtain the data of adding, deleting, and changing. It is very convenient for adding, deleting, modifying, and querying tables.)'
          },
          'demoId': 'grid-toolbar#toolbar-insert-delete-update'
        },
        {
          'name': 'getRemoveRecords',
          'type': '()=> Row[]',
          'defaultValue': '--',
          'desc': { 'zh-CN': '获取已删除的数据', 'en-US': 'Obtain deleted data' },
          'demoId': 'grid-toolbar#toolbar-insert-delete-update'
        },
        {
          'name': 'getRowById',
          'type': '(rowid: string)=> Row',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '根据行的唯一主键获取行',
            'en-US': 'Obtain a row based on the unique primary key of the row.'
          },
          'demoId': 'grid-event#event-get-row-method'
        },
        {
          'name': 'getRowIndex',
          'type': '(row: Row)=> number',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '根据 row 获取相对于 data 中的索引',
            'en-US': 'Obtains indexes relative to data based on rows.'
          },
          'demoId': 'grid-event#event-get-row-method'
        },
        {
          'name': 'getRowNode',
          'type': '(tr: HTMLElement)=> Row',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '根据 tr 元素获取对应的 row 信息',
            'en-US': 'Obtain row information based on the tr element.'
          },
          'demoId': 'grid-event#event-get-row-method'
        },
        {
          'name': 'getSelectRecords',
          'type': '()=> Row[]',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '用于多选行，获取已选中的数据',
            'en-US': 'This command is used to select multiple lines to obtain the selected data.'
          },
          'demoId': 'grid-toolbar#toolbar-insert-delete-update'
        },
        {
          'name': 'getTableColumn',
          'type': '()=> Row[]',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '获取当前表格的列（完整的全量表头列、处理条件之后的全量表头列、当前渲染中的表头列）',
            'en-US':
              'Obtains columns in the current table. (full table header column, full table header column after processing condition, table header column in current rendering)'
          },
          'demoId': 'grid-custom#custom-hide-column'
        },
        {
          'name': 'getTableData',
          'type': '()=> Row[]',
          'defaultValue': '--',
          'desc': {
            'zh-CN':
              '获取当前表格的数据（完整的全量表体数据、处理条件之后的全量表体数据、当前渲染中的表体数据、当前渲染中的表尾数据）',
            'en-US':
              'Obtains data in the current table. (complete table body data, full table body data after processing conditions, table body data in the current rendering, table tail data in the current rendering)'
          },
          'demoId': 'grid-toolbar#toolbar-clear-data'
        },
        {
          'name': 'getUpdateRecords',
          'type': '()=> Row[]',
          'defaultValue': '--',
          'desc': { 'zh-CN': '获取已修改的数据', 'en-US': 'Obtain modified data' },
          'demoId': 'grid-toolbar#toolbar-insert-delete-update'
        },
        {
          'name': 'handleFetch',
          'type': '()=> Promise',
          'defaultValue': '--',
          'desc': { 'zh-CN': '触发表格的fetch-data', 'en-US': 'Fetch-data of the trigger table' },
          'demoId': 'grid-data-source#data-source-request-service'
        },
        {
          'name': 'hasActiveRow',
          'type': '(row: Row)=> boolean',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '检查行是否已激活为编辑状态',
            'en-US': 'Check whether the row has been activated and is in the editing state.'
          },
          'demoId': 'grid-edit#edit-trigger-mode-hm-editing'
        },
        {
          'name': 'hasRowChange',
          'type': '(row: Row, field: string)=> boolean',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '检查行或列数据是否发生改变',
            'en-US': 'Check whether the row or column data is changed.'
          },
          'demoId': 'grid-edit#edit-has-row-change'
        },
        {
          'name': 'hasRowExpand',
          'type': '(row: Row)=> boolean',
          'defaultValue': '--',
          'desc': { 'zh-CN': '检查行是否已展开', 'en-US': 'Check whether the row is expanded.' },
          'demoId': 'grid-expand#expand-has-row-expand'
        },
        {
          'name': 'hasTreeExpand',
          'type': '(row: Row)=> boolean',
          'defaultValue': '--',
          'desc': { 'zh-CN': '检查树节点是否已展开', 'en-US': 'Check whether the tree node is expanded.' },
          'demoId': 'grid-tree-table#tree-table-has-tree-expand'
        },
        {
          'name': 'hideColumn',
          'type': '(column: ColumnConfig)=> Promise',
          'defaultValue': '--',
          'desc': { 'zh-CN': '隐藏指定列', 'en-US': 'Hide a specified column.' },
          'demoId': 'grid-custom#custom-hide-column'
        },
        {
          'name': 'insert',
          'type': '(records: Row | Row[])=> Promise',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '在表格中新增数据;往表格插入数据，从第一行新增一行或多行新数据',
            'en-US':
              'Add data to the table.; Insert data into the table, add one or more rows of data from the first row'
          },
          'demoId': 'grid-toolbar#toolbar-insert-delete-update'
        },
        {
          'name': 'insertAt',
          'type': '(records: Row | Row[], row: Row | null | -1)=> Promise',
          'defaultValue': '--',
          'desc': {
            'zh-CN':
              '往表格插入数据，从指定位置插入一行或多行；第二个参数：row 指定位置（不支持树表格）、null从第一行插入、-1 从最后插入',
            'en-US':
              'Inserts one or more rows into a table. Second parameter: row specified position (tree tables are not supported), null inserted from the first row, and –1 inserted from the last row'
          },
          'demoId': 'grid-toolbar#toolbar-insert-delete-update'
        },
        {
          'name': 'loadColumn',
          'type': '(columns: ColumnConfig[])=> Promise',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '加载列配置（对于表格列需要重载、局部递增场景下可能会用到）',
            'en-US':
              'Load column configuration (This function may be used in the scenario where table columns need to be reloaded or partially incremented.)'
          },
          'demoId': 'grid-large-data#large-data-load-column'
        },
        {
          'name': 'loadData',
          'type': '(data: Row[])=> Promise',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '加载数据（对于表格数据需要重载、局部递增场景下可能会用到）',
            'en-US':
              'Load data (This parameter may be used in the scenario where table data needs to be reloaded or partially incremented.)'
          },
          'demoId': 'grid-large-data#large-data-full-data-loading'
        },
        {
          'name': 'recalculate',
          'type': '()=> Promise',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '重新计算表格（对于某些特殊场景可能会用到，比如隐藏的表格、更新列宽...等）',
            'en-US':
              'Recalculate the table. (This may be used in some special scenarios, such as hidden tables and column width update.)'
          },
          'demoId': 'grid-size#size-recalculate'
        },
        {
          'name': 'refreshColumn',
          'type': '()=> Promise',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '刷新列配置（对于显示/隐藏列场景下可能会用到）',
            'en-US':
              'Refresh column configuration (This parameter may be used in the scenario of displaying or hiding columns.)'
          },
          'demoId': 'grid-custom#custom-hide-column'
        },
        {
          'name': 'refreshData',
          'type': '()=> Promise',
          'defaultValue': '--',
          'desc': {
            'zh-CN':
              '同步刷新 data 数据；如果用了该方法，那么组件将不再记录增删改的状态，只能自行实现对应逻辑（对于某些特殊的场景，比如深层树节点元素发生变动时可能会用到）',
            'en-US':
              'Data data is refreshed synchronously. If this method is used, the component does not record the status of adding, deleting, and modifying, and can only implement the corresponding logic. (This parameter may be used in some special scenarios, for example, when a node element in a deep tree changes.)'
          },
          'demoId': 'grid-tree-grid#tree-table-tree-grid-insert-delete-update'
        },
        {
          'name': 'reloadCustoms',
          'type': '(customs: ColumnConfig[], sortable?: boolean)=> Promise',
          'defaultValue': '--',
          'desc': {
            'zh-CN':
              '初始化加载显示/隐藏列（对于异步更新的场景下可能会用到），customs表示列信息集合，sortable表示是否按列顺序加载',
            'en-US':
              'Initialize loading to display or hide columns (which may be used in asynchronous update scenarios).'
          },
          'demoId': 'grid-custom#custom-server-storage'
        },
        {
          'name': 'remove',
          'type': '(rows: Row | Row[])=> Promise',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '删除指定行数据，指定 row 或 [row, ...] 删除多条数据，如果为空则删除所有数据',
            'en-US':
              'Deletes data in a specified row. Multiple data records in a specified row or [row, ...] are deleted. If the value is empty, all data records are deleted.'
          },
          'demoId': 'grid-toolbar#toolbar-insert-delete-update'
        },
        {
          'name': 'removeSelecteds',
          'type': '()=> Promise',
          'defaultValue': '--',
          'desc': { 'zh-CN': '删除已选中的所有行数据', 'en-US': 'Delete all selected rows.' },
          'demoId': 'grid-toolbar#toolbar-insert-delete-update'
        },
        {
          'name': 'resetAll',
          'type': '()=> void',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '手动重置列的所有操作，还原到初始状态（如果已关联工具栏，则会同步更新）',
            'en-US':
              'Manually reset all operations in the column to the initial state. If the toolbar has been associated, the operations will be updated accordingly.'
          },
          'demoId': 'grid-custom#custom-reset-resizable'
        },
        {
          'name': 'resetCustoms',
          'type': '()=> Promise',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '手动重置列的显示/隐藏操作，还原到初始状态（如果已关联工具栏，则会同步更新）',
            'en-US':
              'Manually reset the display/hide operations of columns to restore the initial status (if the toolbar has been associated, it will be updated accordingly)'
          },
          'demoId': 'grid-custom#custom-reset-resizable'
        },
        {
          'name': 'resetResizable',
          'type': '()=> Promise',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '手动重置列宽拖动的操作，还原到初始状态（如果已关联工具栏，则会同步更新）',
            'en-US':
              'Manually reset the column width and drag the column width to the initial state (if the toolbar has been associated, the column width will be updated accordingly).'
          },
          'demoId': 'grid-custom#custom-reset-resizable'
        },
        {
          'name': 'revertData',
          'type': '(rows: Row | Row[], field?: string)=> Promise',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '还原更改，还原指定行 row 或者整个表格的数据',
            'en-US': 'Restore the data of a specified row or the entire table.'
          },
          'demoId': 'grid-edit#edit-revert-data'
        },
        {
          'name': 'scrollTo',
          'type': '(scrollLeft: number, scrollTop: number)=> Promise',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '如果有滚动条，则滚动到对应的位置',
            'en-US': 'If there is a scroll bar, scroll to the corresponding position.'
          },
          'demoId': 'grid-large-data#large-data-scroll-to'
        },
        {
          'name': 'scrollToColumn',
          'type': '(column: ColumnConfig)=> Promise',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '如果有滚动条，则滚动到对应的列',
            'en-US': 'If there is a scroll bar, scroll to the corresponding column.'
          },
          'demoId': 'grid-large-data#large-data-scroll-to'
        },
        {
          'name': 'scrollToRow',
          'type': '(row: Row)=> Promise',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '如果有滚动条，则滚动到对应的行',
            'en-US': 'If there is a scroll bar, scroll to the corresponding line.'
          },
          'demoId': 'grid-large-data#large-data-scroll-to'
        },
        {
          'name': 'setActiveCell',
          'type': '(row: Row, field: string)=> Promise',
          'defaultValue': '--',
          'desc': { 'zh-CN': '激活单元格编辑', 'en-US': 'Activate cell editing' },
          'demoId': 'grid-edit#edit-trigger-mode-hm-editing'
        },
        {
          'name': 'setActiveRow',
          'type': '(row: Row)=> Promise',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '激活行编辑，如果是 mode=cell 则默认激活第一个单元格',
            'en-US': 'Activate line editing. If mode=cell is selected, the first cell is activated by default.'
          },
          'demoId': 'grid-edit#edit-trigger-mode-hm-editing'
        },
        {
          'name': 'setAllRowExpansion',
          'type': '(checked: boolean)=> Promise',
          'defaultValue': '--',
          'desc': { 'zh-CN': '设置所有行的展开与否', 'en-US': 'Set whether to expand all rows.' },
          'demoId': 'grid-expand#expand-set-row-expansion'
        },
        {
          'name': 'setAllSelection',
          'type': '(checked: boolean)=> void',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '入参为boolean,用于多选行，设置所有行的选中状态,',
            'en-US':
              'The input parameter is boolean, which is used to select multiple lines and set the selected status of all lines.'
          },
          'demoId': 'grid-operation-column#operation-column-selection-operation'
        },
        {
          'name': 'setAllTreeExpansion',
          'type': '(checked: boolean)=> Promise',
          'defaultValue': '--',
          'desc': { 'zh-CN': '设置所有树节点的展开与否', 'en-US': 'Sets whether to expand all tree nodes.' },
          'demoId': 'grid-tree-table#tree-table-set-tree-expansion'
        },
        {
          'name': 'setCurrentRow(row)',
          'type': '(row: Row)=> Promise',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '用于当前行，设置某一行为高亮状态',
            'en-US': 'Sets the highlight status of a row for the current row.'
          },
          'demoId': 'grid-highlight#highlight-highlight-hover-row'
        },
        {
          'name': 'setRadioRow',
          'type': '(row: Row)=> Promise',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '用于单选行，设置某一行为选中状态',
            'en-US': 'Select a row and set the selected status of a row.'
          },
          'demoId': 'grid-operation-column#operation-column-clear-and-set-radio-row'
        },
        {
          'name': 'setRowExpansion',
          'type': '(rows: Row | Row[], checked: boolean)=> Promise',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '设置展开行，第二个参数设置这一行展开与否',
            'en-US': 'Set the expansion row, and set whether to expand the row.'
          },
          'demoId': 'grid-expand#expand-set-row-expansion'
        },
        {
          'name': 'setSelection',
          'type': '(rows: Row | Row[], checked: boolean)=> Promise',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '用于多选行，设置行为选中状态，第二个参数为选中与否',
            'en-US':
              'This parameter is used to select multiple lines. The second parameter is whether to select or not.'
          },
          'demoId': 'grid-operation-column#operation-column-selection-operation'
        },
        {
          'name': 'setTreeExpansion',
          'type': '(rows: Row | Row[], checked: boolean)=> Promise',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '设置展开树形节点，第二个参数设置这一行展开与否',
            'en-US': 'Set the expansion tree node and set whether to expand the row.'
          },
          'demoId': 'grid-tree-table#tree-table-set-tree-expansion'
        },
        {
          'name': 'showColumn',
          'type': '(column: ColumnConfig)=> Promise',
          'defaultValue': '--',
          'desc': { 'zh-CN': '显示指定列', 'en-US': 'Display the specified column.' },
          'demoId': 'grid-custom#custom-hide-column'
        },
        {
          'name': 'sort',
          'type': `(field: string, order?: 'asc' | 'desc')=> Promise`,
          'defaultValue': '--',
          'desc': {
            'zh-CN': '手动对表格进行排序（如果 order 为空则自动切换排序）',
            'en-US': 'Sort the table manually. If the value of order is empty, the table is automatically sorted.'
          },
          'demoId': 'grid-sort#sort-sort'
        },
        {
          'name': 'toggleAllSelection',
          'type': '()=> Promise',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '用于多选行，切换所有行的选中状态',
            'en-US': 'Selection of multiple lines and switch the selected status of all lines.'
          },
          'demoId': 'grid-operation-column#operation-column-selection-operation'
        },
        {
          'name': 'toggleRowExpansion',
          'type': '(row: Row)=> Promise',
          'defaultValue': '--',
          'desc': { 'zh-CN': '用于可展开表格，切换展开行', 'en-US': 'For expanding tables or switching rows.' },
          'demoId': 'grid-expand#expand-set-row-expansion'
        },
        {
          'name': 'toggleRowSelection',
          'type': '(row: Row)=> Promise',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '用于多选行，切换某一行的选中状态',
            'en-US': 'Selection of multiple lines and switch the selected status of a line.'
          },
          'demoId': 'grid-operation-column#operation-column-selection-operation'
        },
        {
          'name': 'toggleTreeExpansion',
          'type': '(row: Row)=> Promise',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '用于可树形表格，切换展开树形节点',
            'en-US': 'This parameter is used to switch and expand tree nodes in a tree table.'
          },
          'demoId': 'grid-expand#expand-set-row-expansion'
        },
        {
          'name': 'validate',
          'type': '(rows: Row | Row[], callback: ()=> void)=> Promise',
          'defaultValue': '--',
          'desc': {
            'zh-CN':
              '表格校验函数，如果指定 row 或 rows 则校验指定一行或多行，否则校验整个表格。该回调函数会在校验结束后被调用，并传入两个参数：（是否校验成功，最近一列未通过校验的字段）。若不传入回调函数，则会返回一个 promise',
            'en-US':
              'Table verification function. If a row or rows is specified, the specified row or multiple rows are verified. Otherwise, the entire table is verified. This callback function is called after the verification is complete and the following parameters are transferred: (Whether the verification is successful. The fields in the latest column fail the verification.) If no callback function is passed in, a promise is returned'
          },
          'demoId': 'grid-validation#validation-before-submit-validation'
        }
      ],
      'events': [
        {
          'name': 'page-change',
          'type': '(args: IPageChangeArgs)=> void',
          'typeAnchorName': 'IPageChangeArgs',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '只对 pager-config 配置时有效，分页发生改变时会触发该事件 ',
            'en-US':
              'This event is valid only when pager-config is configured. This event is triggered when the paging is changed'
          },
          'demoId': 'grid-event#event-page-change-event'
        },
        {
          'name': 'before-page-change',
          'type': '(args: IBeforePageChangeArgs)=> void',
          'typeAnchorName': 'IBeforePageChangeArgs',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '在打开页面改变时的前置处理特性，并且进行翻页操作或者改变页大小操作时触发',
            'en-US': 'triggered when the page is changed and the page is turned or the page size is changed'
          },
          'demoId': 'grid-event#event-page-before-change-event'
        },
        {
          'name': 'toolbar-button-click',
          'type': '(args: IToolbarButtonClickArgs, event: Event)=> void',
          'typeAnchorName': 'IToolbarButtonClickArgs',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '只对 toolbar.buttons 配置时有效，当工具栏的按钮被点击时会后触发该事件',
            'en-US':
              'This event is valid only when toolbar.buttons are configured. This event is triggered when a toolbar button is clicked'
          },
          'demoId': 'grid-toolbar#toolbar-insert-delete-update'
        },
        {
          'name': 'cell-click',
          'type': '(args: ICellClickArgs, event: Event)=> void',
          'typeAnchorName': 'ICellClickArgs',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '单元格被点击时会触发该事件',
            'en-US': 'This event is triggered when a cell is clicked'
          },
          'demoId': 'grid-event#event-cell-click-event'
        },
        {
          'name': 'cancel-page-change',
          'type': '($grid: VueComponent)=> void',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '切换分页时有未保存的数据时，提示框确定按钮事件',
            'en-US':
              'When there is unsaved data during pagination switchover, a dialog box is displayed to determine the button event.'
          },
          'demoId': 'grid-pager#pager-show-save-msg'
        },
        {
          'name': 'cell-context-menu',
          'type': '(args: ICellContextMenuArgs)=> void',
          'typeAnchorName': 'ICellContextMenuArgs',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '单元格被鼠标右键点击时触发该事件',
            'en-US': 'This event is triggered when a cell is right-clicked'
          },
          'demoId': 'grid-context-menu#context-menu-cell-menu'
        },
        {
          'name': 'cell-dblclick',
          'type': '(args: ICellArgs, event: Event)=> void',
          'typeAnchorName': 'ICellArgs',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '单元格被双击时会触发该事件',
            'en-US': 'This event is triggered when a cell is double-clicked'
          },
          'demoId': 'grid-event#event-cell-click-event'
        },
        {
          'name': 'cell-mouseenter',
          'type': '(args: ICellArgs, event: Event)=> void',
          'typeAnchorName': 'ICellArgs',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '当单元格 hover 进入时会触发该事件',
            'en-US': 'This event is triggered when the cell hovers'
          },
          'demoId': 'grid-event#event-cell-mouse-event'
        },
        {
          'name': 'cell-mouseleave',
          'type': '(args: ICellArgs, event: Event)=> void',
          'typeAnchorName': 'ICellArgs',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '当单元格 hover 退出时会触发该事件',
            'en-US': 'This event is triggered when the cell hovers.'
          },
          'demoId': 'grid-event#event-cell-mouse-event'
        },
        {
          'name': 'context-menu-click',
          'type': '(args: IContextMenuArgs, event: Event)=> void',
          'typeAnchorName': 'IContextMenuArgs',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '只对 context-menu 配置时有效，当点击快捷菜单时会触发该事件',
            'en-US':
              'This event is valid only when context-menu is configured. This event is triggered when the shortcut menu is clicked'
          },
          'demoId': 'grid-event#event-context-menu-event'
        },
        {
          'name': 'current-change',
          'type': '(args: ICurrentChangeArgs, event: Event)=> void',
          'typeAnchorName': 'ICurrentChangeArgs',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '只对 highlightCurrentRow 有效，当手动选中行并且值发生改变时触发的事件',
            'en-US':
              'This parameter is valid only for highlightCurrentRow. This parameter is triggered when a row is manually selected and the value changes'
          },
          'demoId': 'grid-highlight#highlight-highlight-cell'
        },
        {
          'name': 'edit-actived',
          'type': '(args: IEditActivedArgs, event: Event)=> void',
          'typeAnchorName': 'IEditActivedArgs',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '单元格被激活编辑时会触发该事件',
            'en-US': 'This event is triggered when a cell is activated for editing'
          },
          'demoId': 'grid-event#event-edit-actived-event'
        },
        {
          'name': 'edit-closed',
          'type': '(args: IEditClosedArgs, event: Event)=> void',
          'typeAnchorName': 'IEditClosedArgs',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '单元格编辑状态下被关闭时会触发该事件',
            'en-US': 'This event is triggered when a cell is closed in the editing state'
          },
          'demoId': 'grid-event#event-edit-actived-event'
        },
        {
          'name': 'edit-disabled',
          'type': '(args: IEditDisabledArgs, event: Event)=> void',
          'typeAnchorName': 'IEditDisabledArgs',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '当单元格激活时如果是禁用状态时会触发该事件',
            'en-US': 'This event is triggered when a cell is activated and is disabled'
          },
          'demoId': 'grid-event#event-edit-actived-event'
        },
        {
          'name': 'filter-change',
          'type': '(args: IFilterChangeArgs)=> void',
          'typeAnchorName': 'IFilterChangeArgs',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '当筛选条件发生变化时会触发该事件',
            'en-US': 'This event is triggered when the filter condition changes'
          },
          'demoId': 'grid-filter#filter-server-filter'
        },
        {
          'name': 'footer-cell-click',
          'type': '(args: IFooterCellClickArgs, event: Event)=> void',
          'typeAnchorName': 'IFooterCellClickArgs',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '表尾单元格被点击时会触发该事件',
            'en-US': 'This event is triggered when a cell at the end of a table is clicked'
          },
          'demoId': 'grid-event#event-click-event'
        },
        {
          'name': 'footer-cell-context-menu',
          'type': '(args: IContextMenuArgs, event: Event)=> void',
          'typeAnchorName': 'IContextMenuArgs',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '表尾单元格被鼠标右键点击时触发该事件',
            'en-US': 'This event is triggered when a cell at the end of the table is right-clicked'
          },
          'demoId': 'grid-event#event-context-menu-event'
        },
        {
          'name': 'footer-cell-dblclick',
          'type': '(args: IFooterCellDblClickArgs, event: Event)=> void',
          'typeAnchorName': 'IFooterCellDblClickArgs',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '表尾单元格被双击时会触发该事件',
            'en-US': 'This event is triggered when a cell at the end of a table is double-clicked'
          },
          'demoId': 'grid-event#event-click-event'
        },
        {
          'name': 'header-cell-click',
          'type': '(args: IHeaderCellClickArgs, event: Event)=> void',
          'typeAnchorName': 'IHeaderCellClickArgs',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '表头单元格被点击时会触发该事件',
            'en-US': 'This event is triggered when a cell in the table header is clicked'
          },
          'demoId': 'grid-event#event-click-event'
        },
        {
          'name': 'header-cell-context-menu',
          'type': '(args: IContextMenuArgs, event: Event)=> void',
          'typeAnchorName': 'IContextMenuArgs',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '表头单元格被鼠标右键点击时触发该事件',
            'en-US': 'This event is triggered when a cell in the table header is right-clicked'
          },
          'demoId': 'grid-event#event-context-menu-event'
        },
        {
          'name': 'header-cell-dblclick',
          'type': '(args: IHeaderCellDblClickArgs, event: Event)=> void',
          'typeAnchorName': 'IHeaderCellDblClickArgs',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '表头单元格被双击时会触发该事件',
            'en-US': 'This event is triggered when a table header cell is double-clicked'
          },
          'demoId': 'grid-event#event-click-event'
        },
        {
          'name': 'radio-change',
          'type': '($table: VueComponent, event: Event)=> void',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '只对 type=radio 有效，当手动勾选并且值发生改变时触发的事件',
            'en-US':
              'This parameter is valid only for the event whose type is radio. It is triggered when the value is manually selected and the value changes'
          },
          'demoId': 'grid-event#event-radio-change-event'
        },
        {
          'name': 'resizable-change',
          'type': '(args: IResizableChangeArgs)=> void',
          'typeAnchorName': 'IResizableChangeArgs',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '当列宽拖动发生变化时会触发该事件',
            'en-US': 'This event is triggered when the column width changes'
          },
          'demoId': 'grid-event#event-resizable-change-event'
        },
        {
          'name': 'scroll',
          'type': '(args: IScrollArgs)=> void',
          'typeAnchorName': 'IScrollArgs',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '表格滚动时会触发该事件',
            'en-US': 'This event is triggered when the table scrolls'
          },
          'demoId': 'grid-event#event-grid-scroll-event'
        },
        {
          'name': 'select-all',
          'type': '(args: ISelectAllArgs, event: Event)=> void',
          'typeAnchorName': 'ISelectAllArgs',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '只对 type=selection 有效，当手动勾选全选时触发的事件',
            'en-US': 'This event is valid only when type=selection and is triggered when all are selected manually'
          },
          'demoId': 'grid-event#event-select-event'
        },
        {
          'name': 'select-change',
          'type': '(args: ISelectChangeArgs, event: Event)=> void',
          'typeAnchorName': 'ISelectChangeArgs',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '只对 type=selection 有效，当手动勾选并且值发生改变时触发的事件',
            'en-US':
              'This event is valid only for type=selection. It is triggered when the value is manually selected and the value changes'
          },
          'demoId': 'grid-event#event-select-event'
        },
        {
          'name': 'toggle-expand-change',
          'type': '(args: IToggleExpandChangeArgs, event: Event)=> void',
          'typeAnchorName': 'IToggleExpandChangeArgs',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '当行展开或收起时会触发该事件',
            'en-US': 'This event is triggered when a row is expanded or closed'
          },
          'demoId': 'grid-event#event-toggle-expand-change-event'
        },
        {
          'name': 'toggle-tree-change',
          'type': '(args: IToggleTreeChangeArgs, event: Event)=> void',
          'typeAnchorName': 'IToggleTreeChangeArgs',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '当树节点展开或收起时会触发该事件',
            'en-US': 'This event is triggered when a tree node is expanded or closed'
          },
          'demoId': 'grid-event#event-toggle-tree-change-event'
        },
        {
          'name': 'valid-error',
          'type': '(args: IValidErrorArgs)=> void',
          'typeAnchorName': 'IValidErrorArgs',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '当数据校验不通过时会触发该事件',
            'en-US': 'This event is triggered when data verification fails'
          },
          'demoId': 'grid-event#event-valid-error-event'
        },
        {
          'name': 'sort-change',
          'type': '(args: ISortChangeArgs)=> void',
          'typeAnchorName': 'ISortChangeArgs',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '点击列头，执行数据排序前触发的事件',
            'en-US': 'Event triggered before data sorting is performed when a column header is clicked'
          },
          'demoId': 'grid-sort#sort-server-sort'
        },
        {
          'name': 'fullscreen',
          'type': '()=> void',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '全屏时或关闭全屏时触发的时间',
            'en-US': 'Time triggered when full screen is enabled or disabled'
          },
          'demoId': 'grid-toolbar#toolbar-grid-full-screen'
        }
      ],
      'column-props': [
        {
          'name': 'align',
          'type': `'left' | 'center' | 'right'`,
          'defaultValue': '继承 table 的 align',
          'desc': {
            'zh-CN': '列对其方式;该属性的可选值为 left（左对其）, center（居中对其）, right（右对齐）',
            'en-US': 'Column pair mode; The optional values for this property are left, center, right'
          },
          'demoId': 'grid-align#align-grid-align'
        },
        {
          'name': 'class-name',
          'type': 'string | (args: IClassNameArgs)=> string',
          'typeAnchorName': 'IClassNameArgs',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '给单元格附加 className，也可以是函数',
            'en-US': 'Add a class name to a cell. The class name can also be the Function'
          },
          'demoId': 'grid-custom-style#custom-style-class-name'
        },
        {
          'name': 'multi',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN':
              "是 filter 对象内置的属性，筛选是否允许多选;设置选择列是否显示复选框。当 columnType 为 'select' 时有效。",
            'en-US':
              "is an attribute built in the filter object. Whether multiple selections are allowed for filtering. Sets whether to display the check box in the selected column. This parameter is valid only when columnType is set to'select'."
          },
          'demoId': 'grid-filter#filter-default-filter'
        },
        {
          'name': 'fixed',
          'type': 'string',
          'defaultValue': '--',
          'desc': {
            'zh-CN':
              '将列固定在左侧，其中 freezable 可冻结可解冻，在表格个性化面板中可操作，而 frozen 只能冻结不能解冻，在个性化面板中不可操作;将列固定在左侧或者右侧（注意：固定列应该放在左右两侧的位置）;该属性的可选值为 left（固定左侧）, right（固定右侧）',
            'en-US':
              'Fix columns on the left. Freezable can be frozen or unfrozen, but can be operated in the table personalized panel. Frozen can only be frozen but cannot be operated in the personalized panel. Fix the column to the left or right (Note: The fixed columns should be placed on the left and right sides.) The optional values of this attribute are left (fixed left) and right (fixed right)'
          },
          'demoId': 'grid-fixed#fixed-left-fixed'
        },
        {
          'name': 'footer-align',
          'type': `'left' | 'center' | 'right'`,
          'defaultValue': '继承 align > 继承 table 的 footer-align',
          'desc': {
            'zh-CN': '表尾列的对齐方式;该属性的可选值为 left（左对其）, center（居中对其）, right（右对齐）',
            'en-US':
              'Alignment mode of the column at the end of the table; The optional values for this property are left, center, right'
          },
          'demoId': 'grid-align#align-footer-align'
        },
        {
          'name': 'footer-class-name',
          'type': 'string | (args: IClassNameArgs)=> string',
          'typeAnchorName': 'IClassNameArgs',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '给表尾的单元格附加 className，也可以是函数',
            'en-US': 'Add a class name to the cell at the end of the table. The class name can also be the Function'
          },
          'demoId': 'grid-custom-style#custom-style-footer-style'
        },
        {
          'name': 'header-align',
          'type': "'left' | 'center' | 'right'",
          'defaultValue': '继承 align > 继承 table 的 header-align',
          'desc': {
            'zh-CN': '表头列的对齐方式;该属性的可选值为 left（左对其）, center（居中对其）, right（右对齐）',
            'en-US':
              'The alignment mode of the table header column; The optional values for this property are left, center, right'
          },
          'demoId': 'grid-align#align-header-align'
        },
        {
          'name': 'header-class-name',
          'type': 'string | (args: IClassNameArgs)=> string',
          'typeAnchorName': 'IClassNameArgs',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '设置列头样式名称;给表头的单元格附加 className，也可以是函数',
            'en-US': 'Set the column header style name. Add className to the cell in the table header, or the function'
          },
          'demoId': 'grid-custom-style#custom-style-header-style'
        },
        {
          'name': 'index-method',
          'type': 'string | (args: IIndexMethodArgs)=> string',
          'typeAnchorName': 'IIndexMethodArgs',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '只对 type=index 有效，自定义索引方法',
            'en-US': 'This parameter is valid only for type=index'
          },
          'demoId': 'grid-serial-column#serial-column-custom-serial-column'
        },
        {
          'name': 'min-width',
          'type': 'number | string',
          'defaultValue': '继承 table 的 column-min-width',
          'desc': {
            'zh-CN': '最小列宽度；会自动将剩余空间按比例分配;该属性的可选值为 整数, px，%',
            'en-US':
              'Minimum column width; The remaining space will be allocated in proportion. The optional values of this property are integers, px,%'
          },
          'demoId': 'grid-size#size-min-width'
        },
        {
          'name': 'show-icon',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '是否显示列头编辑图标，在编辑时有效',
            'en-US': 'Whether to display the column header editing icon. This parameter is valid during editing.'
          },
          'demoId': 'grid-edit#edit-editing'
        },
        {
          'name': 'params',
          'type': 'object',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '额外的参数（自定义一些数据参数，对于某些特殊的场景可能会用到）',
            'en-US': 'Extra parameters (User-defined data parameters, which may be used in some special scenarios)'
          },
          'demoId': ''
        },
        {
          'name': 'remote-sort',
          'type': 'boolean',
          'defaultValue': '继承 table 的 remote-sort',
          'desc': {
            'zh-CN': '是否使用服务端排序，如果设置为 true 则不会对数据进行处理',
            'en-US': 'Whether to use server sorting. If this parameter is set to true, data will not be processed.'
          },
          'demoId': 'grid-sort#sort-server-sort'
        },
        {
          'name': 'resizable',
          'type': 'boolean',
          'defaultValue': '继承 table 的 resizable',
          'desc': {
            'zh-CN': '设置该列是否可以调整列宽;列是否允许拖动列宽调整大小',
            'en-US':
              'Set whether the column width can be adjusted. Allows you to drag the column width to adjust the column size.'
          },
          'demoId': 'grid-custom#custom-column-width'
        },
        {
          'name': 'show-header-overflow',
          'type': 'string | boolean',
          'defaultValue': '继承 table 的 show-header-overflow',
          'desc': {
            'zh-CN':
              '当表头内容过长时显示为省略号;该属性的可选值为 ellipsis（只显示省略号）, title（并且显示为原生 title）, tooltip（并且显示为 tooltip 提示）',
            'en-US':
              'When the table header content is too long, the ellipsis is displayed. The optional values for this property are ellipsis (only the ellipsis is displayed), title (and the native title is displayed), tooltip (and the tooltip prompt is displayed)'
          },
          'demoId': 'grid-tip#tip-column-header-tip'
        },
        {
          'name': 'show-overflow',
          'type': 'string | boolean',
          'defaultValue': '继承 table 的 show-overflow',
          'desc': {
            'zh-CN':
              '当内容过长时显示为省略号;该属性的可选值为 ellipsis（只显示省略号）, title（并且显示为原生 title）, tooltip（并且显示为 tooltip 提示）',
            'en-US':
              'When the content is too long, an ellipsis is displayed. The optional values for this property are ellipsis (only the ellipsis is displayed), title (and the native title is displayed), tooltip (and the tooltip is displayed)'
          },
          'demoId': 'grid-tip#tip-cell-tip'
        },
        {
          'name': 'sort-by',
          'type': 'string | string[]',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '只对 sortable 有效，自定义排序的属性',
            'en-US': 'This parameter is valid only for sortable. It is a user-defined sorting attribute.'
          },
          'demoId': 'grid-sort#sort-combinations-sort'
        },
        {
          'name': 'rules',
          'type': 'IValidRules',
          'typeAnchorName': 'IValidRules',
          'defaultValue': '--',
          'desc': { 'zh-CN': '表单的验证功能', 'en-US': 'Form verification function' },
          'demoId': ''
        },
        {
          'name': 'required',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否必填，如不设置，则会根据校验规则自动生成',
            'en-US':
              'Mandatory. If this parameter is not set, the system will automatically generate a value based on the verification rule.'
          },
          'demoId': ''
        },
        {
          'name': 'sort-method',
          'type': '(row1: Row, row2: Row)=> boolean',
          'typeAnchorName': 'IValidRules',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '自定义所有列的排序方法，当触发排序时会调用该函数',
            'en-US': 'Customize the sorting method of all columns. When sorting is triggered.'
          },
          'demoId': 'grid-sort#sort-custom-sort'
        },
        {
          'name': 'sortable',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '设置该列数据是否可以排序。;是否允许列排序',
            'en-US': 'Whether the data in the column can be sorted.; Allow Sorting Columns'
          },
          'demoId': 'grid-sort#sort-default-sort'
        },
        {
          'name': 'title',
          'type': 'string | (h, params)=> string | VNode',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '列标题（支持开启国际化），可以是函数',
            'en-US': 'Column title (internationalization can be enabled). It can be the function'
          },
          'demoId': 'grid#base-basic-usage'
        },
        {
          'name': 'tree-node',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '只对 tree-config 配置时有效，指定为树节点',
            'en-US': 'This parameter is valid only when tree-config is configured. It is specified as a tree node.'
          },
          'demoId': 'grid-tree-table#tree-table-tree-grid-base'
        },
        {
          'name': 'format-text',
          'type': `'money' | 'enum' | 'select' | 'number' | 'integer' | 'filesize' | 'date' | 'dateTime' | 'longDateTime' | 'time' | 'longTime' | 'yearMonth' | 'ellipsis' | 'rate' | 'boole' | (params)=> string`,
          'defaultValue': '--',
          'desc': {
            'zh-CN':
              '设置当前表格列的显示获取编辑类型;设置当前表格列的显示获取编辑类型，也可以是函数;该属性的可选值为 ',
            'en-US':
              'Sets the display and editing mode of the current table column. Sets the display and obtaining editing type of the current table column. It can also be the function'
          },
          'demoId': 'grid-renderer#renderer-inner-renderer'
        },
        {
          'name': 'type',
          'type': `'index' | 'selection' | 'radio' | 'expand'`,
          'defaultValue': '--',
          'desc': {
            'zh-CN': '设置内置列的类型;设置内置列的类型',
            'en-US': 'Set the type of the built-in column'
          },
          'demoId': 'grid-serial-column#serial-column-default-serial-column'
        },
        {
          'name': 'width',
          'type': 'number | string',
          'defaultValue': '继承 table 的 column-width',
          'desc': {
            'zh-CN':
              "设置列的宽度，可以是像素或者百分比或者'auto'，设置为'auto'时，列宽会自动适应。;列宽度;该属性的可选值为 整数 / px /%",
            'en-US':
              'Set the column width. The value can be pixel, percentage, or auto. If the value is auto, the column width automatically adapts.; column width; The optional value of this property is integer/px/%'
          },
          'demoId': 'grid-size#size-fixed-column-width'
        },
        {
          'name': 'format-config',
          'type': 'IFormatConfig',
          'typeAnchorName': 'IFormatConfig',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '开启该列数据异步渲染。',
            'en-US': 'Enable the asynchronous rendering of the column data'
          },
          'demoId': 'grid-renderer#renderer-inner-renderer'
        },
        {
          'name': 'class-name',
          'type': 'string | IClassNameArgs',
          'typeAnchorName': 'IClassNameArgs',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '给单元格附加 className，也可以是函数',
            'en-US': 'Add a class name to a cell. The class name can also be the function'
          },
          'demoId': 'grid-custom-style#custom-style-class-name'
        },
        {
          'name': 'editor',
          'type': 'IEditorConfig | (h, {row:Row, column: ColumnConfig})=> VueComponent',
          'typeAnchorName': 'IEditorConfig',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '单元格编辑渲染配置项，也可以是函数 Function(h, params);设置表格列的编辑类型',
            'en-US':
              'Cell editing rendering configuration item, which can also be the function Function(h, params). Sets the editing type of the table column'
          },
          'demoId': 'grid-editor#editor-custom-editor-select'
        },
        {
          'name': 'filter',
          'type': 'boolean | IFilterConfig',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '设置表格列的筛选配置信息。默认值为 false 不配置筛选信息。',
            'en-US':
              'Set the filtering configuration of the table column. The default value is false. No filtering information is configured.'
          },
          'demoId': 'grid-filter#filter-default-filter'
        },
        {
          'name': 'renderer',
          'type': 'IEditorConfig | (h, {row: Row, column: ColumnConfig})=> VueComponent',
          'typeAnchorName': 'IEditorConfig',
          'defaultValue': '--',
          'desc': {
            'zh-CN':
              '设置表格列的渲染类型。其优先级高于列的 type 属性配置;单元格渲染配置项，其优先级高于列的 formatText 属性配置',
            'en-US':
              'Set the rendering type of the table column. The priority of the column is higher than that of the column type attribute. Cell rendering configuration item. Its priority is higher than that of the formatText attribute of the column'
          },
          'demoId': 'grid-renderer#renderer-custom-renderer'
        },
        {
          'name': 'show-tip',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '表格列单元格是否需要提示', 'en-US': 'Does the table column cells require prompts?' },
          'demoId': 'grid-tip#tip-cell-tip'
        },
        {
          'name': 'show-header-tip',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '表格列头是否需要提示', 'en-US': 'Whether to prompt the table column header.' },
          'demoId': 'grid-tip#tip-column-header-tip'
        }
      ],
      'column-slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '--',
          'desc': {
            'zh-CN':
              '自定义显示内容模板，作用插槽参数说明：slots.default({ $table, column, row },h)，$table：表格组件对象，column：当前列配置，row：当前行数据,h：vue的渲染函数',
            'en-US': 'Customized display content template'
          },
          'demoId': 'grid-slot#slot-default-slot'
        },
        {
          'name': 'edit',
          'type': '',
          'defaultValue': '--',
          'desc': {
            'zh-CN':
              '自定义可编辑组件模板，作用插槽参数说明：slots.edit({ $table, column, row },h)，$table：表格组件对象，column：当前列配置，row：当前行数据,h：vue的渲染函数',
            'en-US': 'Customized Editable Component Template'
          },
          'demoId': 'grid-slot#slot-editor-slot'
        },
        {
          'name': 'filter',
          'type': '',
          'defaultValue': '--',
          'desc': {
            'zh-CN':
              '自定义筛选模板，作用插槽参数说明：slots.filter({ $grid, values, args, context },h)，$grid：表格组件对象，values：筛选项集合，args：筛选相关参数,context：筛选面板组件上下文对象',
            'en-US': 'User-defined filtering template'
          },
          'demoId': 'grid-filter#filter-custom-filter'
        },
        {
          'name': 'header',
          'type': '',
          'defaultValue': '--',
          'desc': {
            'zh-CN':
              '自定义表头内容的模板，作用插槽参数说明：slots.header({ $table, column, columnIndex，$rowIndex},h)，$table：表格组件对象，column：当前列配置，columnIndex：当前列索引,$rowIndex:当前行索引,h：vue的渲染函数',
            'en-US': 'Template of custom table header content'
          },
          'demoId': 'grid-slot#slot-header-slot'
        }
      ],
      'toolbar-props': [
        {
          'name': 'buttons',
          'type': `{
            code: string
            name: string
          }[]`,
          'defaultValue': '--',
          'desc': { 'zh-CN': '按钮列表', 'en-US': 'Button List' },
          'demoId': 'grid-toolbar#toolbar-insert-delete-update'
        },
        {
          'name': 'id',
          'type': 'string',
          'defaultValue': '--',
          'desc': { 'zh-CN': '唯一 ID 标识', 'en-US': 'Unique ID' },
          'demoId': 'grid-custom#custom-column-width'
        },
        {
          'name': 'refresh',
          'type': 'boolean',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '工具栏组件开启表格刷新功能。',
            'en-US': 'The table refresh function is enabled for the toolbar component.'
          },
          'demoId': 'grid-toolbar#toolbar-refresh-grid'
        },
        {
          'name': 'resizable',
          'type': 'boolean | object',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '列宽拖动配置（需要设置 id）',
            'en-US': 'Column width dragging configuration (id needs to be set)'
          },
          'demoId': 'grid-customized#custom-column-width'
        },
        {
          'name': 'setting',
          'type': 'boolean | object',
          'defaultValue': '--',
          'desc': {
            'zh-CN':
              '设置表格属性是否显示个性化面板，当设置表格的name属性时有效;设置工具栏属性是否显示个性化配置（需要设置 id）',
            'en-US':
              'Whether to display the table attribute on the personalized panel. This parameter is valid only when the name attribute of the table is set. Set whether to display personalized configuration for toolbar attributes (id needs to be set)'
          },
          'demoId': 'grid-custom#custom-column-width'
        },
        {
          'name': 'full-screen',
          'type': 'boolean',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '设置表格是否可以全屏，或者需要全屏的容器。;设置工具栏属性是否显示全屏按钮',
            'en-US':
              'Sets whether the table can be displayed in full screen mode or whether the container needs to be displayed in full screen mode.; Sets whether to display the full-screen button on the toolbar.'
          },
          'demoId': 'grid-toolbar#toolbar-grid-full-screen'
        },
        {
          'name': 'size',
          'type': `'medium' | 'small' | 'mini'`,
          'defaultValue': '--',
          'desc': {
            'zh-CN': '尺寸;该属性的可选值为 medium,small,mini',
            'en-US': 'Dimension; The options of this attribute are medium, small, and mini'
          },
          'demoId': 'grid-toolbar#toolbar-copy-row-data'
        },
        {
          'name': 'before-open-full-screen',
          'type': '()=> boolean',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '全屏前的拦截方法，返回 false 则阻止全屏，返回 true 则不阻止',
            'en-US':
              'Intercept method before full screen, If false is returned, the full screen is blocked. If true is returned, the full screen is not blocked.'
          },
          'demoId': 'grid-toolbar#toolbar-grid-full-screen'
        },
        {
          'name': 'before-close-full-screen',
          'type': '()=> boolean',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '关闭全屏前的拦截方法，返回 false 则阻止关闭全屏，返回 true 则不阻止',
            'en-US':
              'Intercept method before full screen is disabled. If false is returned, the full screen is disabled. If true is returned, the full screen is not disabled.'
          },
          'demoId': 'grid-toolbar#toolbar-grid-full-screen'
        }
      ],
      'toolbar-slots': [
        {
          'name': 'toolbar',
          'type': '',
          'defaultValue': '--',
          'desc': { 'zh-CN': '工具栏插槽', 'en-US': 'Toolbar slot' },
          'demoId': 'grid-toolbar#toolbar-custom-toolbar'
        },
        {
          'name': 'buttons',
          'type': '',
          'defaultValue': '--',
          'desc': { 'zh-CN': '按钮列表', 'en-US': 'Button List' },
          'demoId': 'grid-toolbar#toolbar-custom-toolbar'
        }
      ],
      'toolbar-events': [
        {
          'name': 'button-click',
          'type': '(args: IButtonClick, event: Event)=> void',
          'typeAnchorName': 'IButtonClick',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '当工具栏的按钮被点击时会后触发该事件',
            'en-US': 'This event is triggered when a button on the toolbar is clicked'
          },
          'demoId': 'grid-event#event-toolbar-button-click-event'
        },
        {
          'name': 'save-setting',
          'type': '(args: ISettingConfigs)=> void',
          'typeAnchorName': 'ISettingConfigs',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '点击个性化面板的确认按钮触发该事件;settingConfigs:表格的个性化数据',
            'en-US':
              'Click the OK button on the personalized panel to trigger the event. settingConfigs: personalized data of the table'
          },
          'demoId': 'grid-custom#custom-ordercolumn-local'
        },
        {
          'name': 'cancel-setting',
          'type': '(args: ISettingConfigs)=> void',
          'typeAnchorName': 'ISettingConfigs',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '点击个性化面板的取消按钮触发该事件;settingConfigs:表格的个性化数据',
            'en-US':
              'Click the Cancel button on the personalized panel to trigger the event. settingConfigs: personalized data of the table'
          },
          'demoId': 'grid-custom#custom-ordercolumn-local'
        },
        {
          'name': 'reset-setting',
          'type': '()=> void',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '点击个性化面板的重置按钮触发该事件。',
            'en-US': 'Click the Reset button on the personalized panel to trigger the event.'
          },
          'demoId': 'grid-custom#custom-ordercolumn-local'
        },
        {
          'name': 'on-before-move',
          'type': `(type: 'column' | 'row', row: Row)=> boolean`,
          'defaultValue': '--',
          'desc': {
            'zh-CN': '个性化面板拖拽前事件',
            'en-US': 'event before the personalized panel is dragged'
          },
          'demoId': 'grid-custom#custom-prsonalized-drag'
        }
      ]
    }
  ],
  types: [
    {
      name: 'IPagerConfig',
      type: 'interface',
      code: `
interface IPagerConfig {
  component?: Component
  attrs: {
    currentPage: number
    pageSize: number
    pageSizes: number[]
    total: number
    // 分页组件布局默认值：'total, prev, pager, next, jumper, sizes'
    layout: string
  }
}
      `
    },
    {
      name: 'IDataHandler',
      type: 'type',
      code: `
interface IDataHandler {
  api: ()=> Promise
}
      `
    },
    {
      name: 'IRowGroup',
      type: 'type',
      code: `
interface IRowGroup {
  // 列标识符，行分组会将具有相同值的列进行分组展示
  field: string
}
      `
    },
    {
      name: 'IToolbarConfig',
      type: 'type',
      code: `
interface IToolbarConfig {
  component: GridToolbar
  buttons: {
    code: string
    name: string
  }[]
}
      `
    },
    {
      name: 'IContextMenuConfig',
      type: 'type',
      code: `
interface IMenuOptions {
  code: string
  name: string
  visible?: boolean
  disabled?: boolean
}

interface IContextMenuConfig {
  body?: { 
    options: IMenuOptions
  }
  footer?: { 
    options: IMenuOptions
  }
  visibleMethod?: ()=> boolean
}
      `
    },
    {
      name: 'IValidRules',
      type: 'type',
      code: `
interface IValidRules {
 [filed:string]: { 
  type?: string
  required?: boolean
  validator?: () => boolean
  message?: string
  min?: number
  max?: number
 }
}[]
      `
    },
    {
      name: 'IExpandConfig',
      type: 'type',
      code: `
interface IExpandConfig {
  // 默认展开所有行
  expandAll?: boolean 
  // 触发方式 default（点击按钮触发）,cell（点击单元格触发）,row（点击行触发）
  trigger?: 'default' | 'row' | cell
  // 默认展开指定行（需要有 row-id）
  expandRowKeys?: string[]
  // 对于同一级的节点，每次只能展开一个
  accordion?: boolean
  // 控制是否渲染展开行
  activeMethod?:({row: Row})=> boolean
  // 配置是否显示展开图标
  showIcon?: boolean 
}
      `
    },
    {
      name: 'IOptimizationConfig',
      type: 'type',
      code: `
interface IOptimizationConfig {
  animat: boolean
  delayHover: number
  scrollX: {
    // 指定大于多少范围时自动启动虚拟滚动（启用 X 虚拟滚动，必须固定所有列宽，否则无法兼容）默认100
    gt?: number
    // 当剩余数据少于指定范围时触发重新渲染 默认自动计算
    oSize?: number
    // 每次渲染条数 默认自动计算
    rSize?: number
    // 指定可视区域条数
    vSize?: number
  }
  scrollY: {
    // 指定大于多少范围时自动启动虚拟滚动（启用 Y 虚拟滚动，必须固定所有行高，否则无法兼容）默认500
    gt?: number
    // 当剩余数据少于指定范围时触发重新渲染 默认自动计算
    oSize?: number 
    // 每次渲染条数 默认自动计算
    rSize?: number
    // 指定可视区域条数 默认自动计算
    vSize?: number 
    // 指定行高 默认自动计算
    rHeight?: number 
    // 自动适配最优的渲染方式 默认true
    adaptive?: boolean 
  }
}
      `
    },
    {
      name: 'IKeyboardConfig',
      type: 'type',
      code: `
interface IKeyboardConfig {
  // 启用方向键功能
  isArrow?: boolean 
  isDel?: boolean
  isTab?: boolean 
  isEdit?: boolean
}
      `
    },
    {
      name: 'IMouseConfig',
      type: 'type',
      code: `
interface IMouseConfig {
  // 是否开启左键选中单元格功能（只对 editConfig.mode=cell 有效），默认为 false
  selected: boolean 
}
      `
    },
    {
      name: 'IRadioConfig',
      type: 'type',
      code: `
interface IRadioConfig {
  // 触发选中的方式，可选项包括 cell（单击图标所在单元格触发） / row（点击行触发），默认点击图标触发
  trigger?: 'cell' | 'row' 
  // 单选框显示的字段名，可以直接显示在单选框中
  labelField?: string |
  // 默认选中指定行（只会在初始化时被触发一次，需要有 row-id）
  checkRowKey?: string
  // 是否允许选中的方法，该方法的返回值用来决定这一行的 Radio 是否可以选中
  checkMethod?: ()=> boolean
}
      `
    },
    {
      name: 'ISelectConfig',
      type: 'type',
      code: `
interface ISelectConfig {
  // 触发选中的方式，可选项包括 cell（单击图标所在单元格触发） / row（点击行触发），默认点击图标触发
  trigger?: 'cell' | 'row'
  // 复选框显示的字段名，可以直接显示在复选框中
  labelField?: string
  // 默认勾选开指定行（只会在初始化时被触发一次，需要有 row-id）
  checkRowKeys?: string[] 
  // 是否允许选中的方法，该方法的返回值用来决定这一行的 checkbox 是否可以勾选
  checkMethod?: ()=> boolean 
  // 默认勾选所有（只会在初始化时被触发一次）}
  checkAll?: boolean
  // 是否显示全选按钮（如果 checkStrictly=true 则默认为 false）
  showHeader?: boolean 
  // 是否严格的遵循父子不互相关联的做法
  checkStrictly?: boolean
  // 翻页操作是否保留历史选择数据
  reserve?: boolean
}
      `
    },
    {
      name: 'ISortConfig',
      type: 'type',
      code: `
interface ISortConfig {
  // 排序触发方式，可配置为 cell（点击头部单元格触发排序），不配置时默认为点击上下箭头触发排序
  trigger?: 'cell'
} 
      `
    },
    {
      name: 'ITreeConfig',
      type: 'type',
      code: `
interface ITreeConfig {
  // 展开子级触发方式：'default'(点击按钮触发)；'cell'(点击单元格触发);'row'(点击行触发)
  trigger?: 'default' | 'cell' | 'row'
  // 子级索引是否按数字递增显示：true(子级索引按数字递增显示，父级1，子级2)；false(子级索引在父级索引基础上增加，父级1，子级1.1)
  ordered?: boolean
  // 控制水平缩进距离，默认 16，单位 px
  indent?: number
  // 指定子级数据的字段名
  children?: string
  // 是否展开所有行
  expandAll?: boolean
  // 默认展开所给数组中的指定行，需要有row-id，可以由行的'_RID'属性获取
  expandRowKeys?: string[]
  // 对于同一级的多个子节点，是否只能同时展开一个子节点
  accordion?: boolean
}
      `
    },
    {
      name: 'IValidConfig',
      type: 'type',
      code: `
interface IValidConfig {
  // 校验提示类型，'inline'(内置提示)；'tooltip'(tooltip文字提示)
  message?: 'inline' | 'tooltip'
}
      `
    },
    {
      name: 'ISummaryConfig',
      type: 'type',
      code: `
interface ISummaryConfig {
  // 统计字段名 
  fields: string[]
  // 小数点后保留的小数位
  fraction?: boolean
  // 是否截断，默认为四舍五入，不截断
  truncate?: boolean
  // 统计显示的文本
   text?: string
}
      `
    },
    {
      name: 'IScrollLoadConfig',
      type: 'type',
      code: `
interface IScrollLoadConfig {
  // 是否连续
  isInfinity: boolean
  // 每次加载多少条
  pageSize: number
}
      `
    },
    {
      name: 'IEventsConfig',
      type: 'type',
      code: `
interface IEventsConfig {
  [string]: ()=> void
}
      `
    },
    {
      name: 'IDropConfig',
      type: 'type',
      code: `
interface IDropConfig {
  // sortablejs 插件
  plugin: Sortable
  // 开启行拖拽
  row: boolean
  // 开启列拖拽
  column: boolean
  // 拖拽前函数，返回 false 取消拖动
  onBeforeMove?: ()=> boolean
  // 根据行的类名来控制是否可以拖动
  filter?: string
  // 如果变动了树层级，可以指定是否需要刷新数据
  refresh?: boolean
  }
      `
    },
    {
      name: 'IEditConfig',
      type: 'type',
      code: `
interface IEditConfig {
  // 激活触发方式
  trigger: 'click' | 'dblclick' | 'manual'
  // 激活类型单元格激活或者行
  mode: 'cell' | 'row'
  // 是否显示状态
  showStatus?: boolean
  // 自定义编辑规则，返回true可以编辑返回false则禁止编辑
  activeMethod?: ({row: Row, column: ColumnConfig})=> boolean
}
      `
    },
    {
      name: 'IRecordset',
      type: 'type',
      code: `
interface IRecordset {
  insertRecords: Row[]
  removeRecords: Row[]
  updateRecords: Row[]
}
      `
    },
    {
      name: 'IPageChangeArgs',
      type: 'type',
      code: `
interface IPageChangeArgs { 
  // table组件vue实例
  $grid: VueComponent
  // 当前页码
  currentPage: number
  //当前分页组件布局信息 'total, prev, pager, next, jumper, sizes'
  layout: string
  // 当前每页显示条数
  pageSize: number
  //可切换的每页条数
  pageSizes: number[] 
  //总数据条数
  total: number 
}
      `
    },
    {
      name: 'IBeforePageChangeArgs',
      type: 'type',
      code: `
interface IBeforePageChangeArgs { 
  //新页码
  newPage: number
  //新的分页大小 
  newPageSize: number
  //当前页码
  currentPage: number
  //当前的页大小
  currentPageSize: number
  //生效回调
  callback: ()=> void
  //失效回调
  rollback: ()=> void
}
      `
    },
    {
      name: 'IToolbarButtonClickArgs',
      type: 'type',
      code: `
interface IToolbarButtonClickArgs { 
  //表格组件实例对象信息 
  $grid: VueComponent
  //按钮信息对象 
  button: {
    code: string
    name: string
  }[]
  // 按钮功能类型
  code: string
}
      `
    },
    {
      name: 'ICellClickArgs',
      type: 'type',
      code: `
interface ICellClickArgs {
  // 当前行
  row: object,
  // 当前行的下标
  rowIndex: number
  // 当前列
  column: object
  // 当前列的下标
  columnIndex: number
}
      `
    },
    {
      name: 'ICellClickArgs',
      type: 'type',
      code: `
interface ICellClickArgs {
  // 当前行
  row: object
  // 当前行的下标
  rowIndex: number
  // 当前列
  column: object
  // 当前列的下标
  columnIndex: number
}
      `
    },
    {
      name: 'ICellContextMenuArgs',
      type: 'type',
      code: `
interface ICellContextMenuArgs {
  // 当前行
  row: object
}
      `
    },
    {
      name: 'ICellArgs',
      type: 'type',
      code: `
interface ICellArgs {
  //当前行
  row: object
  //当前行的下标
  rowIndex: number
  // 当前列 
  column: object
  // 当前列的下标 
  columnIndex: number
}
      `
    },
    {
      name: 'ICurrentChangeArgs',
      type: 'type',
      code: `
interface ICurrentChangeArgs {
  // 当前行
  row: object
}
      `
    },
    {
      name: 'IEditActivedArgs',
      type: 'type',
      code: `
interface IEditActivedArgs {
  // 当前行
  row: object
  // 当前列 
  column: object
}
      `
    },
    {
      name: 'IEditClosedArgs',
      type: 'type',
      code: `
interface IEditClosedArgs {
  // 当前行
  row: object
  // 当前列 
  column: object
}
      `
    },
    {
      name: 'IEditDisabledArgs',
      type: 'type',
      code: `
interface IEditDisabledArgs {
  //当前行
  row: object
  // 当前列 
  column: object
}
      `
    },
    {
      name: 'IFilterChangeArgs',
      type: 'type',
      code: `
interface IFilterChangeArgs {
  //表格的信息对象
  $table: VueComponent
  //过滤列的过滤数据信息
  filters: object
}
      `
    },
    {
      name: 'IFooterCellClickArgs',
      type: 'type',
      code: `
interface IFooterCellClickArgs {
  $columnIndex: number
  $rowIndex: number
  // table组件vue实例
  $table: VueComponent
  // 当前单元格节点 
  cell: HTMLElement
  // 当前列信息
  column: object
  columnIndex: number
}
      `
    },
    {
      name: 'IContextMenuArgs',
      type: 'type',
      code: `
interface IContextMenuArgs {
  $columnIndex: number
  $rowIndex: number
  // table组件vue实例
  $table: VueComponent
  // 当前单元格节点
  cell: HTMLElement
  // 当前列信息
  column: object
  columnIndex: number
  // 配置清除等功能信息
  options: object[]
  // 表格区域类型
  type: 'header' | 'footer' | 'body'
}
      `
    },
    {
      name: 'IFooterCellDblClickArgs',
      type: 'type',
      code: `
interface IFooterCellDblClickArgs {
  $columnIndex: number
  $rowIndex: number
  // table组件vue实例
  $table: VueComponent
  // 当前单元格节点
  cell: HTMLElement
  // 当前列信息
  column: object
  columnIndex: number
}
      `
    },
    {
      name: 'IHeaderCellClickArgs',
      type: 'type',
      code: `
interface IHeaderCellClickArgs {
  $columnIndex: number
  $rowIndex: number
  // table组件vue实例
  $table: VueComponent
  // 点击表头单元格
  cell: HTMLElement
  // 当前列信息
  column: object
  columnIndex: number
  // 当前点击节点过滤标识
  triggerFilter: boolean
  // 当前点击节点排序标识
  triggerSort: boolean
}
      `
    },
    {
      name: 'IHeaderCellDblClickArgs',
      type: 'type',
      code: `
interface IHeaderCellDblClickArgs {
  // 列数据
  column: object  
  // 列索引
  columnIndex: number
  // table组件 vue实例 
  $table: VueComponent
  // 点击的单元格dom
  cell: HTMLElement
}
      `
    },
    {
      name: 'IResizableChangeArgs',
      type: 'type',
      code: `
interface IResizableChangeArgs {
  // table组件的vue 实例 
  $table: VueComponent,
  // 列配置信息 
  column: object 
  // 拖动列的索引
  columnIndex: number
  // 是否固定列
  fixed: boolean
}
      `
    },
    {
      name: 'IScrollArgs',
      type: 'type',
      code: `
interface IScrollArgs {
  // 表格实例对象信息
  $table: VueComponent
  fixed: boolean
  // X轴滚动
  isX: boolean
  // Y轴滚动
  isY: true
  // X轴滚动距离
  scrollLeft: number
  // Y轴滚动距离
  scrollTop: number
  type: 'body' | 'header' | 'footer'
}
      `
    },
    {
      name: 'ISelectAllArgs',
      type: 'type',
      code: `
interface ISelectAllArgs {
  $columnIndex: number
  $rowIndex: number
  $seq: string
  // 表格实例对象信息
  $table: VueComponent 
  // 勾选状态
  checked: boolean
  // 列信息
  column: ColumnConfig
  // 列下标
  columnIndex: number
  // 表格数据
  data: Row[]
  fixed: boolean
  isHidden: boolean
  level: number
  // 勾选项的行数据信息
  row: Row
  // 勾选项的行下标
  rowIndex: number
  // 选中的数据
  selection: Row[]
  seq: number
}
      `
    },
    {
      name: 'IToggleExpandChangeArgs',
      type: 'type',
      code: `
interface IToggleExpandChangeArgs { 
  // 表格实例对象信息
  $table: VueComponent,
  //点击展开行的数据信息对象
  row: Row
  // 点击展开行的下标 
  rowIndex: number
}
      `
    },
    {
      name: 'IToggleTreeChangeArgs',
      type: 'type',
      code: `
interface IToggleTreeChangeArgs { 
  // 表格实例对象信息
  $table: VueComponent,
  //点击展开行的数据信息对象
  row: Row
  // 点击展开行的下标 
  rowIndex: number
}
      `
    },
    {
      name: 'IValidErrorArgs',
      type: 'type',
      code: `
interface IValidErrorArgs { 
  // 校验的单元格信息对象
  cell: Cell
  //校验单元格所在列的列配置信息对象
  column: ColumnConfig
  //校验单元格所在行的信息对象
  row: Row
  // 校验规则信息对象 
  rule: object
}
      `
    },
    {
      name: 'ISortChangeArgs',
      type: 'type',
      code: `
interface ISortChangeArgs { 
  // 表格实例对象信息
  $grid: VueComponent
  // 列信息
  column: ColumnConfign
  // 排序的字段名
  field: string 
  // 排序类型升序或降序
  order: 'asc' | 'desc' 
  prop: string
  property: string
}
      `
    },
    {
      name: 'IClassNameArgs',
      type: 'type',
      code: `
interface IClassNameArgs {
  seq: number
  row: Row
  rowIndex: number
  $rowIndex: number
  column: ColumnConfig
  columnIndex: number
  $columnIndex: number
}
      `
    },
    {
      name: 'IIndexMethodArgs',
      type: 'type',
      code: `
interface IIndexMethodArgs {
  row: Row
  rowIndex: number
  column: ColumnConfig
  columnIndex: number
}
      `
    },
    {
      name: 'IFormatConfig',
      type: 'type',
      code: `
interface IFormatConfig {
  // 列数据源
  data: ColumnConfig[] 
  // 内置渲染器类型，与 format-text 属性取值相同
  type: 'money' | 'enum' | 'select' | 'number' | 'integer' | 'filesize' | 'date' | 'dateTime' | 'longDateTime' | 'time' | 'longTime' | 'yearMonth' | 'ellipsis' | 'rate'
  // 配置为 true 后，支持动态修改 data 的数据。还可以配置为对象，配置为对象时，对象中可以配置 splitConfig.enabled（是否启用分隔配置）、splitConfig.valueSplit（指定 value 值的分隔符）、splitConfig.textSplit（指定 text 的分隔符）、fetch（列数据异步渲染，请求数据）
  async: true, 
  // 单元格显示内容的映射
  label: string
  // 单元格取值的映射
  value: string
}
      `
    },
    {
      name: 'IButtonClick',
      type: 'type',
      code: `
interface IButtonClick { 
  // 表格组件实例对象信息
  $grid: VueComponent 
  // 按钮列表信息对象   
  button: {
    code: string
    name: string
  }[]
   // 按钮类型 
   code: string
  } 
      `
    },
    {
      name: 'ISettingConfigs',
      type: 'type',
      code: `
interface ISettingConfigs {
  sortType: 'page' | 'all'
  pageSize: number
  columns: {
    property: string
    order: 'asc' | 'desc' | null 
    visible: boolean
    sortable: boolean
  }[]
}
      `
    },
    {
      name: 'ISpanMethodArgs',
      type: 'type',
      code: `
interface ISpanMethodArgs {
  // 行标
  $rowIndex: number
  // 列数据  
  column: ColumnConfig
  // 列下标 
  columnIndex: number
  // 一个数组，保存了当前合并和计算的数据
  data: (string | number | null)[][]
}
      `
    },
    {
      name: 'IExportCsvOptions',
      type: 'type',
      code: `
interface IExportCsvOptions {
  filename: string
  original: boolean
  isHeader: boolean
  data: Row[]
}
      `
    },
    {
      name: 'IEditorConfig',
      type: 'type',
      code: `
interface IEditorConfig {
  // 内置组件名称或者自定义组件实例
  component: 'input' | 'select' | VueComponent
  // 传递给组件的事件集合
  events?: {
    [event]: ()=> void
  }
  // 传递给编辑器组件的属性集合
  attrs?: {
    [prop]: any
  }
  // select 内置组件独有的下拉数据配置项
  options?: object[]
}
      `
    },
    {
      name: 'IFilterConfig',
      type: 'type',
      code: `
interface IFilterConfig {
  // 设置在显示枚举选项功能是否为多选, 仅在 enumable:true 下有效
  multi: boolean
  // 设置在过滤面板中显示枚举选项
  enumable: boolean
  // 设置在过滤面板中显示默认的筛选条件
  defaultFilter: boolean
  // 设置在过滤面板中显示输入筛选的项
  inputFilter: boolean
  // 设置在显示枚举选项功能(enumable)下制定静态数据源
  values: {
    // 设置枚举数据的显示值属性字段， 默认'label'
    label: string
    // 设置枚举数据的实际值属性字段， 默认'value'
    value: string 
  }[]
}
      `
    },
    {
      name: 'IOPConfig',
      type: 'type',
      code: `
interface IOPConfig {
  editConfig: IEditConfig
  pagerConfig: IPagerConfig
  columns: ColumnConfig[]
  data: Row[]
  }[]
}
      `
    }
  ]
}
