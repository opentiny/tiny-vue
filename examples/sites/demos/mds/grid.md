## grid

### Props

| 属性名                      | 类型                                                            | 默认值                     | 说明                                                                                                                                                                                                    |
| --------------------------- | --------------------------------------------------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| align                       | 'left' \| 'center' \| 'right'                                   | 'left'                     | 所有表格列的对齐方式                                                                                                                                                                                    |
| auto-load                   | boolean                                                         | true                       | 是否开启自动请求服务，配置 fetch-data 时有效                                                                                                                                                            |
| filter-popper-options       | IPopperOption                                                   | {}                         | 过滤面板弹出层配置项；具体参考 IPopperOption 的描述                                                                                                                                                     |
| auto-resize                 | boolean                                                         | false                      | 父元素响应式监听（对于父元素可能存在动态变化的场景可能会用到）                                                                                                                                          |
| border                      | boolean                                                         | false                      | 是否带有纵向边框                                                                                                                                                                                        |
| cell-class-name             | string \| (args: ICellClassNameArgs) => string                  |                            | 给单元格附加 className，也可以是函数                                                                                                                                                                    |
| column-key                  | boolean                                                         | false                      | 是否需要为每一列的 VNode 设置 key 属性（非特殊情况下不需要使用）                                                                                                                                        |
| column-min-width            | number \| string                                                |                            | 设置可以调整到的最小宽度，不设置时默认为列头 span 的宽度 + 36（头部固定宽度） ；所有最小列宽度；会自动将剩余空间按比例分配；该属性的可选值为 整数, px，%                                                |
| column-width                | number \| string                                                |                            | 所有列宽度；该属性的可选值为 整数, px，%                                                                                                                                                                |
| columnAnchor                | Array<String\|Object\|Array>                                    |                            | 配置一组列锚点                                                                                                                                                                                          |
| columns                     | IColumnConfig[]                                                 |                            | 表格列的配置信息，具体参考列配置项                                                                                                                                                                      |
| context-menu                | IContextMenuConfig                                              |                            | 快捷菜单配置项                                                                                                                                                                                          |
| custom-column-names         | string[]                                                        | ['TinyGridColumn']         | 封装 grid-column 时需要配置此字段，提供给表格收集配置                                                                                                                                                   |
| customs                     | ICustomConfig[]                                                 |                            | 表格的初始化个性配置，可以控制表格列是否隐藏，设置列宽。优先级高于grid-column上的配置。                                                                                                                 |
| data                        | Row[]                                                           |                            | 设置表格的数据                                                                                                                                                                                          |
| delete-data                 | IDataHandler                                                    |                            | 服务端数据删除方法                                                                                                                                                                                      |
| drop-config                 | IDropConfig                                                     |                            | 表格拖拽配置项                                                                                                                                                                                          |
| edit-config                 | IEditConfig                                                     |                            | 表格编辑配置项                                                                                                                                                                                          |
| edit-rules                  | IValidRules                                                     |                            | 校验规则配置项                                                                                                                                                                                          |
| events                      | IEventsConfig                                                   |                            | 事件对象                                                                                                                                                                                                |
| expand-config               | IExpandConfig                                                   |                            | 展开行配置项                                                                                                                                                                                            |
| fetch-data                  | IDataHandler                                                    |                            | 服务端数据查询方法                                                                                                                                                                                      |
| fit                         | boolean                                                         | true                       | 所有列的宽度是否自撑开                                                                                                                                                                                  |
| footer-align                | 'left' \| 'center' \| 'right'                                   | 'left'                     | 所有的表尾列的对齐方式                                                                                                                                                                                  |
| footer-cell-class-name      | string \| (args: IClassNameArgs) => string                      |                            | 给表尾的单元格附加 className，也可以是函数                                                                                                                                                              |
| footer-method               | ({columns: IColumnConfig[], data: IRow[]}) => string[][]        |                            | 表尾合计的计算方法 columns:所有的列配置数据, data： 当前所有的表格数据                                                                                                                                  |
| footer-row-class-name       | string \| (args: IClassNameArgs) => string                      |                            | 给表尾的行附加 className                                                                                                                                                                                |
| footer-span-method          | (args: ISpanMethodArgs) => { rowspan: number, colspan: number } |                            | 表尾合并行或列，该函数返回计算后的值；通过 footer-method 和 footer-span-method 设置表尾合计行或列逻辑 必须配置 show-footer                                                                              |
| header-align                | 'left' \| 'center' \| 'right'                                   | 'left'                     | 所有的表头列的对齐方式                                                                                                                                                                                  |
| header-cell-class-name      | string \| (args: IClassNameArgs) => string                      |                            | 给表头的单元格附加 className，也可以是函数                                                                                                                                                              |
| header-row-class-name       | string \| (args: IClassNameArgs) => string                      |                            | 表头的行附加 className，也可以是函数                                                                                                                                                                    |
| header-suffix-icon-absolute | boolean                                                         |                            | 表格属性 header-suffix-icon-absolute 设置为 true，表头后置图标使用绝对定位。默认值为 false                                                                                                              |
| height                      | number \| string                                                |                            | 设置表格内容区域（不含表格头部，底部）的高度。不设置时，表格内容区域的高度度自适应；表格的高度；支持铺满父容器或者固定宽高；该属性的可选值为 整数, px，%                                                |
| highlight-cell              | boolean                                                         | false                      | 只对 editConfig 配置时有效，是否在编辑时高亮单元格边框                                                                                                                                                  |
| highlight-current-column    | boolean                                                         | false                      | 是否要高亮当前列                                                                                                                                                                                        |
| highlight-current-row       | boolean                                                         | false                      | 是否要高亮当前行                                                                                                                                                                                        |
| highlight-hover-column      | boolean                                                         | false                      | 鼠标移到列是否要高亮显示                                                                                                                                                                                |
| highlight-hover-row         | boolean                                                         | false                      | 鼠标移到行是否要高亮显示                                                                                                                                                                                |
| intersectionOption          | Object                                                          |                            | 表格的相交性检测配置，参考 IntersectionObserver 的配置                                                                                                                                                  |
| is-async-column             | boolean                                                         |                            | 设置表格的列是否延迟加载；是否开启异步列功能，配合 scrollLoad 一起使用                                                                                                                                  |
| is-before-page-change       | boolean                                                         |                            | 是否打开页面改变时的前置处理特性。在值为 true 时，翻页操作或者改变页大小操作不会立即生效，留给用户处理业务逻辑，之后通过调用预留的 callback 或者 rollback 使之生效或者失效，详看事件 before-page-change |
| is-drag-header-sorting      | boolean                                                         |                            | 是否拖拽表头调整列顺序。默认值为 false                                                                                                                                                                  |
| is-multiple-history         | boolean                                                         |                            | 是否开启模板管理服务端存储功能。默认值为 false                                                                                                                                                          |
| keyboard-config             | IKeyboardConfig                                                 |                            | 按键配置项                                                                                                                                                                                              |
| loading                     | boolean                                                         | true                       | 表格是否显示加载中                                                                                                                                                                                      |
| loading-component           | Component                                                       |                            | 自定义表格 loading                                                                                                                                                                                      |
| max-height                  | number \| string                                                |                            | 设置表格内容区域（不含表格头部，底部）的最大高度；该属性的可选值为：整数, px，%                                                                                                                         |
| min-height                  | number \| string                                                |                            | 设置表格内容区域（不含表格头部，底部）的最小高度                                                                                                                                                        |
| mouse-config                | IMouseConfig                                                    |                            | 鼠标配置项                                                                                                                                                                                              |
| optimization                | IOptimizationConfig                                             |                            | 表格虚拟滚动的优化配置项                                                                                                                                                                                |
| pager                       | IPagerConfig                                                    |                            | 分页配置项                                                                                                                                                                                              |
| params                      | Object                                                          |                            | 额外的参数                                                                                                                                                                                              |
| prefetch                    | boolean\|Array                                                  |                            | 是否开启数据预加载                                                                                                                                                                                      |
| radio-config                | IRadioConfig                                                    |                            | 单选框配置项                                                                                                                                                                                            |
| remote-filter               | boolean                                                         | false                      | 所有列是否使用服务端筛选，如果设置为 true 则不会对数据进行处理                                                                                                                                          |
| remote-sort                 | boolean                                                         | false                      | 是否将服务端的全部数据进行排序。默认为 false 不进行服务端排序                                                                                                                                           |
| render-empty                | () => string \| VNode                                           |                            | 空数据渲染                                                                                                                                                                                              |
| renderFooter                | Function                                                        |                            | 自定义渲染表尾                                                                                                                                                                                          |
| resizable                   | boolean                                                         | true                       | 设置是否允许调整列宽                                                                                                                                                                                    |
| resizable-config            | IResizableConfig                                                |                            | 设置列宽拖拽参数                                                                                                                                                                                        |
| row-class-name              | string \| (args: IClassNameArgs) => string                      |                            | 自定义表格行类名，用于自定义表格的行样式的场景。可以直接设置字符串类名，也可以是用函数                                                                                                                  |
| row-group                   | IRowGroup                                                       |                            | row-group 属性可以配置行分组，行分组会将具有相同值的列进行分组展示                                                                                                                                      |
| row-id                      | string                                                          | '\_RID'                    | 自定义行数据唯一主键的字段名（行数据必须要有唯一主键，默认自动生成）                                                                                                                                    |
| row-key                     | boolean                                                         |                            | 是否需要为每一行的 VNode 设置 key 属性（非特殊情况下没必要设置）                                                                                                                                        |
| row-span                    | { field: string }[]                                             |                            | 设置行合并,该属性仅适用于普通表格，不可与 tree-config 同时使用                                                                                                                                          |
| save-data                   | IDataHandler                                                    |                            | 服务端数据保存方法                                                                                                                                                                                      |
| scroll-load                 | Object                                                          |                            | 滚动加载配置                                                                                                                                                                                            |
| select-config               | ISelectConfig                                                   |                            | 复选框配置项                                                                                                                                                                                            |
| seq-serial                  | boolean                                                         | false                      | 设置行序号是否连续，开启分页时有效, seqSerial 当 showSeq 为 true 时有效                                                                                                                                 |
| show-footer                 | boolean                                                         | false                      | 是否显示表尾合计                                                                                                                                                                                        |
| show-header                 | boolean                                                         | true                       | 是否显示表头                                                                                                                                                                                            |
| show-header-overflow        | boolean \| 'ellipsis' \| 'tooltip' \| 'title'                   |                            | 设置表头所有内容过长时显示为省略号；该属性的可选值为 ellipsis（只显示省略号）,title（并且显示为原生 title）,tooltip（并且显示为 tooltip 提示）                                                          |
| show-overflow               | boolean \| 'ellipsis' \| 'tooltip' \| 'title'                   |                            | 设置所有内容过长时显示为省略号（如果是固定列建议设置该值，提升渲染速度）；该属性的可选值为 ellipsis（只显示省略号）,title（并且显示为原生 title）,tooltip（并且显示为 tooltip 提示）                    |
| show-save-msg               | boolean                                                         |                            | 切换分页时有未保存的数据时是否进行提示                                                                                                                                                                  |
| size                        | 'medium' \| 'small' \| 'mini'                                   |                            | 表格的尺寸                                                                                                                                                                                              |
| sort-config                 | ISortConfig                                                     |                            | 排序配置项                                                                                                                                                                                              |
| sort-method                 | (row1: IRow, row2: IRow)=> boolean                              |                            | 自定义所有列的排序方法，当触发排序时会调用该函数返回排序后的结果；自定义排序方法，类似原生的sort排序                                                                                                    |
| sortable                    | boolean                                                         | true                       | 设置是否允许列数据排序。默认为 true 可排序                                                                                                                                                              |
| span-method                 | (args: ISpanMethodArgs) => { rowspan: number, colspan: number } | { rowspan: 1, colspan: 1 } | 合并行或列，该函数返回计算后的值                                                                                                                                                                        |
| start-index                 | number                                                          | 0                          | 只对 type=index 的列有效，动态索引的起始值                                                                                                                                                              |
| stripe                      | boolean                                                         | false                      | 是否带有斑马纹                                                                                                                                                                                          |
| summary-config              | ISummaryConfig                                                  |                            | 表格统计功能配置项                                                                                                                                                                                      |
| sync-resize                 | boolean                                                         | false                      | 响应式跟随某个属性（对于通过某个属性来控制显示/隐藏切换的场景可能会用到）                                                                                                                               |
| toolbar                     | IToolbarConfig                                                  |                            | 工具栏配置                                                                                                                                                                                              |
| tooltip-config              | Tooltip.Props                                                   |                            | Grid 内置 tooltip 配置项，配置项将透传至 Tooltip，请参考 Tooltip 组件属性说明                                                                                                                           |
| tree-config                 | ITreeConfig                                                     |                            | 树形结构配置项                                                                                                                                                                                          |
| valid-config                | IValidConfig                                                    |                            | 校验配置项                                                                                                                                                                                              |

### Events

| 事件名                   | 回调参数                                             | 说明                                                                     |
| ------------------------ | ---------------------------------------------------- | ------------------------------------------------------------------------ |
| after-refresh-column     | ()=> void                                            | 在新增或者删除列后，列配置是异步更新的，列配置刷新后触发的回调           |
| before-page-change       | (args: IBeforePageChangeArgs)=> void                 | 在打开页面改变时的前置处理特性，并且进行翻页操作或者改变页大小操作时触发 |
| BeforeEdit               |                                                      | 点击单元格，显示编辑组件前触发的事件                                     |
| cancel-page-change       | ($grid: Component)=> void                            | 切换分页时有未保存的数据时，提示框确定按钮事件                           |
| cell-click               | (args: ICellClickArgs, event: Event)=> void          | 单元格被点击时会触发该事件                                               |
| cell-context-menu        | (args: ICellContextMenuArgs)=> void                  | 单元格被鼠标右键点击时触发该事件                                         |
| cell-dblclick            | (args: ICellArgs, event: Event)=> void               | 单元格被双击时会触发该事件                                               |
| cell-mouseenter          | (args: ICellArgs, event: Event)=> void               | 当单元格 hover 进入时会触发该事件                                        |
| cell-mouseleave          | (args: ICellArgs, event: Event)=> void               | 当单元格 hover 退出时会触发该事件                                        |
| context-menu-click       | (args: IContextMenuArgs, event: Event)=> void        | 只对 context-menu 配置时有效，当点击快捷菜单时会触发该事件               |
| current-change           | (args: ICurrentChangeArgs, event: Event)=> void      | 只对 highlightCurrentRow 有效，当手动选中行并且值发生改变时触发的事件    |
| edit-actived             | (args: IEditActivedArgs, event: Event)=> void        | 单元格被激活编辑时会触发该事件                                           |
| edit-closed              | (args: IEditClosedArgs, event: Event)=> void         | 单元格编辑状态下被关闭时会触发该事件                                     |
| edit-disabled            | (args: IEditDisabledArgs, event: Event)=> void       | 当单元格激活时如果是禁用状态时会触发该事件                               |
| filter-change            | (args: IFilterChangeArgs)=> void                     | 当筛选条件发生变化时会触发该事件                                         |
| footer-cell-click        | (args: IFooterCellClickArgs, event: Event)=> void    | 表尾单元格被点击时会触发该事件                                           |
| footer-cell-context-menu | (args: IContextMenuArgs, event: Event)=> void        | 表尾单元格被鼠标右键点击时触发该事件                                     |
| footer-cell-dblclick     | (args: IFooterCellDblClickArgs, event: Event)=> void | 表尾单元格被双击时会触发该事件                                           |
| fullscreen               | () => void                                           | 全屏时或关闭全屏时触发的时间                                             |
| header-cell-click        | (args: IHeaderCellClickArgs, event: Event)=> void    | 表头单元格被点击时会触发该事件                                           |
| header-cell-context-menu | (args: IContextMenuArgs, event: Event)=> void        | 表头单元格被鼠标右键点击时触发该事件                                     |
| header-cell-dblclick     | (args: IHeaderCellDblClickArgs, event: Event)=> void | 表头单元格被双击时会触发该事件                                           |
| page-change              | (args: IPageChangeArgs)=> void                       | 只对 pager-config 配置时有效，分页发生改变时会触发该事件                 |
| radio-change             | ($table: Component, event: Event)=> void             | 只对 type=radio 有效，当手动勾选并且值发生改变时触发的事件               |
| resizable-change         | (args: IResizableChangeArgs)=> void                  | 当列宽拖动发生变化时会触发该事件                                         |
| scroll                   | (args: IScrollArgs)=> void                           | 表格滚动时会触发该事件                                                   |
| select-all               | (args: ISelectAllArgs, event: Event)=> void          | 只对 type=selection 有效，当手动勾选全选时触发的事件                     |
| select-change            | (args: object, event: Event)=> void                  | 只对 type=selection 有效，当手动勾选并且值发生改变时触发的事件           |
| sort-change              | (args: ISortChangeArgs)=> void                       | 点击列头，执行数据排序前触发的事件                                       |
| toggle-expand-change     | (args: IToggleExpandChangeArgs, event: Event)=> void | 当行展开或收起时会触发该事件                                             |
| toggle-group-change      | (row: IRow) => void                                  | 当分组的展开和收起时会触发该事件                                         |
| toggle-tree-change       | (args: IToggleTreeChangeArgs, event: Event)=> void   | 当树节点展开或收起时会触发该事件                                         |
| toolbar-button-click     | (args: IToolbarButtonClickArgs, event: Event)=> void | 只对 toolbar.buttons 配置时有效，当工具栏的按钮被点击时会后触发该事件    |
| valid-error              | (args: IValidErrorArgs)=> void                       | 当数据校验不通过时会触发该事件                                           |

### Methods

| 方法名              | 返回值                                                       | 说明                                                                                                                                                                                                                                                                                                                                   |
| ------------------- | ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| clearActived        | () => void                                                   | 手动清除单元格激活状态                                                                                                                                                                                                                                                                                                                 |
| clearAll            | () => void                                                   | 手动清除表格所有条件，还原到初始状态（对于增删改查的场景中可能会用到，比如在数据保存之后清除表格缓存）                                                                                                                                                                                                                                 |
| clearCurrentColumn  | () => void                                                   | 用于当前列，手动清空当前高亮的状态                                                                                                                                                                                                                                                                                                     |
| clearCurrentRow     | () => void                                                   | 用于当前行，手动清空当前高亮的状态                                                                                                                                                                                                                                                                                                     |
| clearData           | (rows?: IRow \| IRow[], field?: string)=> void               | 手动清空单元格内容，如果不传参数，则清空整个表格内容，如果传了行则清空指定行内容，如果传了指定字段，则清空该字段内容                                                                                                                                                                                                                   |
| clearFilter         | (field: string)=> void                                       | 手动清空筛选条件（如果不传 field 则清空所有筛选条件），数据会恢复成未筛选的状态                                                                                                                                                                                                                                                        |
| clearRadioRow       | () => void                                                   | 用于单选行，手动清空用户的选择                                                                                                                                                                                                                                                                                                         |
| clearRowExpand      | () => void                                                   | 手动清空展开行状态，数据会恢复成未展开的状态                                                                                                                                                                                                                                                                                           |
| clearScroll         | () => void                                                   | 手动清除滚动相关信息，还原到初始状态                                                                                                                                                                                                                                                                                                   |
| clearSelected       | () => void                                                   | 手动清除单元格选中状态                                                                                                                                                                                                                                                                                                                 |
| clearSelection      | () => void                                                   | 用于多选行，手动清空用户的选择                                                                                                                                                                                                                                                                                                         |
| clearSort           | () => void                                                   | 手动清空排序条件，数据会恢复成未排序的状态                                                                                                                                                                                                                                                                                             |
| clearTreeExpand     | () => void                                                   | 手动清空树形节点的展开状态，数据会恢复成未展开的状态                                                                                                                                                                                                                                                                                   |
| getTreeExpandeds    | () => IRow[]                                                 | 获取展开的行数据                                                                                                                                                                                                                                                                                                                       |
| closeFilter         | () => void                                                   | 手动关闭筛选面板（某些特殊场景可能会用到）                                                                                                                                                                                                                                                                                             |
| closeMenu           | () => void                                                   | 手动关闭快捷菜单（某些特殊场景可能会用到）                                                                                                                                                                                                                                                                                             |
| createRow           | (records: IRow \| IRow[])=> Promise                          | 创建 IRow \| IRows 对象（对于某些特殊场景需要对数据进行手动插入时可能会用到）                                                                                                                                                                                                                                                          |
| exportCsv           | (options: IExportCsvOptions)=> void                          | 将表格数据导出为 .csv 文件（支持所有主流的浏览器，不支持合并行或列）                                                                                                                                                                                                                                                                   |
| fullValidate        | (rows: IRow[], callback: () => void)=> Promise               | 表格完整校验函数，和 validate 的区别就是会对全量数据的所有规则进行完整校验                                                                                                                                                                                                                                                             |
| getActiveRow        | () => IRow                                                   | 获取已激活的行数据                                                                                                                                                                                                                                                                                                                     |
| getColumnByField    | (field: string)=> IColumnConfig                              | 根据列的字段名获取列                                                                                                                                                                                                                                                                                                                   |
| getColumnById       | (colid: string)=> IColumnConfig                              | 根据列的唯一主键获取列                                                                                                                                                                                                                                                                                                                 |
| getColumnIndex      | (column: IColumnConfig)=> number                             | 根据 column 获取相对于 columns 中的索引                                                                                                                                                                                                                                                                                                |
| getColumnNode       | (cell: HTMLElement)=> IColumnConfig                          | 根据 th/td 元素获取对应的 column 信息                                                                                                                                                                                                                                                                                                  |
| getColumns          | (columnIndex?: number)=> IColumnConfig \| IColumnConfig[]    | 获取表格的可视列，也可以指定索引获取列                                                                                                                                                                                                                                                                                                 |
| getCurrentRow       | () => IRow                                                   | 用于当前行，获取当前行的数据                                                                                                                                                                                                                                                                                                           |
| getData             | (rowIndex?: number)=> IRow \| IRow[]                         | 获取数据，和 data 的行为一致，也可以指定索引获取数据                                                                                                                                                                                                                                                                                   |
| getInsertRecords    | () => IRow[]                                                 | 获取新增的数据                                                                                                                                                                                                                                                                                                                         |
| getRadioRow         | () => IRow                                                   | 用于单选行，获取当已选中的数据                                                                                                                                                                                                                                                                                                         |
| getRecordset        | () => IRecordset                                             | 获取表格数据集（获取新增、删除、更改的数据，对于增删改查表格非常方便）                                                                                                                                                                                                                                                                 |
| getRemoveRecords    | () => IRow[]                                                 | 获取已删除的数据                                                                                                                                                                                                                                                                                                                       |
| getRowById          | (rowid: string)=> IRow                                       | 根据行的唯一主键获取行                                                                                                                                                                                                                                                                                                                 |
| getRowIndex         | (row: IRow)=> number                                         | 根据 row 获取相对于 data 中的索引                                                                                                                                                                                                                                                                                                      |
| getRowNode          | (tr: HTMLElement)=> IRow                                     | 根据 tr 元素获取对应的 row 信息                                                                                                                                                                                                                                                                                                        |
| getAllSelection     | () => IRow[]                                                 | 获取所有翻页中保存的已选中的数据                                                                                                                                                                                                                                                                                                       |
| getSelectRecords    | () => IRow[]                                                 | 用于多选行，获取当前页已选中的数据                                                                                                                                                                                                                                                                                                     |
| getTableColumn      | () => IRow[]                                                 | 获取当前表格的列（完整的全量表头列、处理条件之后的全量表头列、当前渲染中的表头列）                                                                                                                                                                                                                                                     |
| getTableData        | () => IRow[]                                                 | <br> 获取当前表格的数据（完整的全量表体数据、处理条件之后的全量表体数据、当前渲染中的表体数据、当前渲染中的表尾数据） <br/><br> footerData: 表尾数据。 <br/><br> fullData: 表格全量数据。 <br/><br> visibleData: 经过筛选处理后，表格可视数据。 <br/><br> tableData: 经过虚拟滚动剪切处理和筛选处理，表格实际用于渲染的数据。<br/><br> |
| getUpdateRecords    | () => IRow[]                                                 | 获取已修改的数据                                                                                                                                                                                                                                                                                                                       |
| handleFetch         | (code: "reload") => Promise<null>                            | 触发表格的 fetch-data，当 code="reload" 时会将分支重置为 1，且清除筛选、排序等条件                                                                                                                                                                                                                                                     |
| hasActiveRow        | (row: IRow)=> boolean                                        | 检查行是否已激活为编辑状态                                                                                                                                                                                                                                                                                                             |
| hasRowChange        | (row: IRow, field: string)=> boolean                         | 检查行或列数据是否发生改变                                                                                                                                                                                                                                                                                                             |
| hasRowExpand        | (row: IRow)=> boolean                                        | 检查行是否已展开                                                                                                                                                                                                                                                                                                                       |
| hasTreeExpand       | (row: IRow)=> boolean                                        | 检查树节点是否已展开                                                                                                                                                                                                                                                                                                                   |
| hideColumn          | (column: IColumnConfig)=> Promise                            | 隐藏指定列                                                                                                                                                                                                                                                                                                                             |
| insert              | (records: IRow \| IRow[])=> Promise                          | 在表格中新增数据；往表格插入数据，从第一行新增一行或多行新数据                                                                                                                                                                                                                                                                         |
| insertAt            | (records: IRow \| IRow[], row: IRow \| null \| -1)=> Promise | 往表格插入数据，从指定位置插入一行或多行；第二个参数：row 指定位置（不支持树表格）、null从第一行插入、-1 从最后插入                                                                                                                                                                                                                    |
| loadColumn          | (columns: IColumnConfig[])=> Promise                         | 加载列配置（对于表格列需要重载、局部递增场景下可能会用到）                                                                                                                                                                                                                                                                             |
| loadData            | (data: IRow[])=> Promise                                     | 加载数据（对于表格数据需要重载、局部递增场景下可能会用到）                                                                                                                                                                                                                                                                             |
| recalculate         | () => Promise                                                | 重新计算表格（对于某些特殊场景可能会用到，比如隐藏的表格、更新列宽...等）                                                                                                                                                                                                                                                              |
| refreshColumn       | () => Promise                                                | 刷新列配置（对于显示/隐藏列场景下可能会用到）                                                                                                                                                                                                                                                                                          |
| refreshData         | () => Promise                                                | 同步刷新 data 数据；如果用了该方法，那么组件将不再记录增删改的状态，只能自行实现对应逻辑（对于某些特殊的场景，比如深层树节点元素发生变动时可能会用到）                                                                                                                                                                                 |
| reloadCustoms       | (customs: IColumnConfig[], sortable?: boolean)=> Promise     | 初始化加载显示/隐藏列（对于异步更新的场景下可能会用到），customs表示列信息集合，sortable表示是否按列顺序加载                                                                                                                                                                                                                           |
| remove              | (rows: IRow \| IRow[])=> Promise                             | 删除指定行数据，指定 row 或 [row, ...] 删除多条数据，如果为空则删除所有数据                                                                                                                                                                                                                                                            |
| removeSelecteds     | () => Promise                                                | 删除已选中的所有行数据                                                                                                                                                                                                                                                                                                                 |
| resetAll            | () => void                                                   | 手动重置列的所有操作，还原到初始状态（如果已关联工具栏，则会同步更新）                                                                                                                                                                                                                                                                 |
| resetCustoms        | () => Promise                                                | 手动重置列的显示/隐藏操作，还原到初始状态（如果已关联工具栏，则会同步更新）                                                                                                                                                                                                                                                            |
| resetResizable      | () => Promise                                                | 手动重置列宽拖动的操作，还原到初始状态（如果已关联工具栏，则会同步更新）                                                                                                                                                                                                                                                               |
| revertData          | (rows: IRow \| IRow[], field?: string)=> Promise             | 还原更改，还原指定行 row 或者整个表格的数据                                                                                                                                                                                                                                                                                            |
| scrollTo            | (scrollLeft: number, scrollTop: number)=> Promise            | 如果有滚动条，则滚动到对应的位置                                                                                                                                                                                                                                                                                                       |
| scrollToColumn      | (column: IColumnConfig)=> Promise                            | 如果有滚动条，则滚动到对应的列                                                                                                                                                                                                                                                                                                         |
| scrollToRow         | (row: IRow)=> Promise                                        | 如果有滚动条，则滚动到对应的行                                                                                                                                                                                                                                                                                                         |
| setActiveCell       | (row: IRow, field: string)=> Promise                         | 激活单元格编辑                                                                                                                                                                                                                                                                                                                         |
| setActiveRow        | (row: IRow)=> Promise                                        | 激活行编辑，如果是 mode=cell 则默认激活第一个单元格                                                                                                                                                                                                                                                                                    |
| setAllRowExpansion  | (checked: boolean)=> Promise                                 | 设置所有行的展开与否                                                                                                                                                                                                                                                                                                                   |
| setAllSelection     | (checked: boolean)=> void                                    | 入参为boolean,用于多选行，设置所有行的选中状态,                                                                                                                                                                                                                                                                                        |
| setAllTreeExpansion | (checked: boolean)=> Promise                                 | 设置所有树节点的展开与否                                                                                                                                                                                                                                                                                                               |
| setCurrentRow       | (row: IRow)=> Promise                                        | 用于当前行，设置某一行为高亮状态                                                                                                                                                                                                                                                                                                       |
| setRadioRow         | (row: IRow)=> Promise                                        | 用于单选行，设置某一行为选中状态                                                                                                                                                                                                                                                                                                       |
| setRowExpansion     | (rows: IRow \| IRow[], checked: boolean)=> Promise           | 设置展开行，第二个参数设置这一行展开与否                                                                                                                                                                                                                                                                                               |
| setSelection        | (rows: IRow \| IRow[], checked: boolean)=> Promise           | 用于多选行，设置行为选中状态，第二个参数为选中与否                                                                                                                                                                                                                                                                                     |
| setTreeExpansion    | (rows: IRow \| IRow[], checked: boolean)=> Promise           | 设置展开树形节点，第二个参数设置这一行展开与否                                                                                                                                                                                                                                                                                         |
| showColumn          | (column: IColumnConfig)=> Promise                            | 显示指定列                                                                                                                                                                                                                                                                                                                             |
| sort                | (field: string, order?: 'asc' \| 'desc')=> Promise           | 手动对表格进行排序（如果 order 为空则自动切换排序）                                                                                                                                                                                                                                                                                    |
| toggleAllSelection  | () => Promise                                                | 用于多选行，切换所有行的选中状态                                                                                                                                                                                                                                                                                                       |
| toggleRowExpansion  | (row: IRow)=> Promise                                        | 用于可展开表格，切换展开行                                                                                                                                                                                                                                                                                                             |
| toggleRowSelection  | (row: IRow)=> Promise                                        | 用于多选行，切换某一行的选中状态                                                                                                                                                                                                                                                                                                       |
| toggleTreeExpansion | (row: IRow)=> Promise                                        | 用于可树形表格，切换展开树形节点                                                                                                                                                                                                                                                                                                       |
| updateFooter        |                                                              | 更新表尾数据                                                                                                                                                                                                                                                                                                                           |
| validate            | (rows: IRow \| IRow[], callback: () => void)=> Promise       | 表格校验函数，如果指定 row 或 rows 则校验指定一行或多行，否则校验整个表格。该回调函数会在校验结束后被调用，并传入两个参数：（是否校验成功，最近一列未通过校验的字段）。若不传入回调函数，则会返回一个 promise, 校验成功返回 true (3.22.0新增)，校验失败返回错误信息对象                                                                |

### Slots

| 插槽名  | 说明                                                |
| ------- | --------------------------------------------------- |
| default | 默认插槽（表格列）                                  |
| empty   | 空数据时显示的文本内容                              |
| pager   | 分页插件，<pager>                                   |
| toolbar | 工具栏，（包含：缩放、个性化、刷新表格、自定义按钮) |

## grid-column

### Props

| 属性名               | 类型                                                                 | 默认值 | 说明                                                                                                                                                                                    |
| -------------------- | -------------------------------------------------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| align                | 'left' \| 'center' \| 'right'                                        | 'left' | 列对齐方式                                                                                                                                                                              |
| class-name           | string \| (args: IClassNameArgs)=> string                            |        | 给单元格附加 className，也可以是函数                                                                                                                                                    |
| editor               | IEditorConfig \| (h, {row:Row, column: IColumnConfig})=> Component   |        | 单元格编辑渲染配置项，也可以是函数返回 Vue 组件                                                                                                                                         |
| field                | string                                                               |        | 设置表格列的单元格显示字段                                                                                                                                                              |
| filter               | boolean \| IFilterConfig                                             | false  | 设置表格列的筛选配置信息。默认值为 false 不配置筛选信息                                                                                                                                 |
| fixed                | 'left' \| 'right'                                                    |        | 将列固定在左侧，其中 freezable 可冻结可解冻，在表格个性化面板中可操作，而 frozen 只能冻结不能解冻，在个性化面板中不可操作；将列固定在左侧或者右侧（注意：固定列应该放在左右两侧的位置） |
| footer-align         | 'left' \| 'center' \| 'right'                                        | 'left' | 表尾列的对齐方式）                                                                                                                                                                      |
| footer-class-name    | string \| (args: IClassNameArgs)=> string                            |        | 给表尾的单元格附加 className，也可以是函数                                                                                                                                              |
| format-config        | IFormatConfig                                                        |        | 开启该列数据异步渲染                                                                                                                                                                    |
| format-text          | IFormatText                                                          |        | 设置当前表格列的显示获取编辑类型；设置当前表格列的显示获取编辑类型，也可以是函数                                                                                                        |
| header-align         | 'left' \| 'center' \| 'right'                                        | 'left' | 表头列的对齐方式                                                                                                                                                                        |
| header-class-name    | string \| (args: IClassNameArgs)=> string                            |        | 设置列头样式名称；给表头的单元格附加 className，也可以是函数                                                                                                                            |
| index-method         | string \| (args: IIndexMethodArgs)=> string                          |        | 只对 type=index 有效，自定义索引方法                                                                                                                                                    |
| min-width            | number \| string                                                     |        | 最小列宽度；会自动将剩余空间按比例分配；该属性的可选值为 整数, px，%                                                                                                                    |
| multi                | boolean                                                              | true   | 是 filter 对象内置的属性，筛选是否允许多选；设置选择列是否显示复选框。当 columnType 为 select 时有效                                                                                    |
| params               | object                                                               |        | 额外的参数（自定义一些数据参数，对于某些特殊的场景可能会用到）                                                                                                                          |
| remote-sort          | boolean                                                              |        | 是否使用服务端排序，如果设置为 true 则不会对数据进行处理                                                                                                                                |
| renderer             | IEditorConfig \| (h, {row: IRow, column: IColumnConfig})=> Component |        | 设置表格列的渲染类型。其优先级高于列的 type 属性配置；单元格渲染配置项，其优先级高于列的 formatText 属性配置                                                                            |
| required             | boolean                                                              | false  | 是否必填，如不设置，则会根据校验规则自动生成                                                                                                                                            |
| resizable            | boolean                                                              | true   | 设置该列是否可以调整列宽；列是否允许拖动列宽调整大小                                                                                                                                    |
| rules                | IValidRules                                                          |        | 表单的验证功能                                                                                                                                                                          |
| show-header-overflow | string \| boolean                                                    |        | 当表头内容过长时显示为省略号；该属性的可选值为 ellipsis （只显示省略号）， title （并且显示为原生 title ）， tooltip （并且显示为 tooltip 提示）                                        |
| show-header-tip      | boolean                                                              | false  | 表格列头是否需要提示                                                                                                                                                                    |
| show-icon            | boolean                                                              | true   | 是否显示列头编辑图标，在编辑时有效                                                                                                                                                      |
| show-overflow        | string \| boolean                                                    |        | 当内容过长时显示为省略号；该属性的可选值为 ellipsis（只显示省略号）, title（并且显示为原生 title）, tooltip（并且显示为 tooltip 提示）                                                  |
| show-tip             | boolean                                                              | false  | 表格列单元格是否需要提示                                                                                                                                                                |
| sort-by              | string \| string[]                                                   |        | 只对 sortable 有效，自定义排序的属性                                                                                                                                                    |
| sort-method          | (row1: IRow, row2: IRow)=> boolean                                   |        | 自定义所有列的排序方法，当触发排序时会调用该函数                                                                                                                                        |
| sortable             | boolean                                                              | false  | 设置该列数据是否可以排序                                                                                                                                                                |
| title                | string \| (h, params)=> string \| VNode                              |        | 列标题（支持开启国际化），可以是函数                                                                                                                                                    |
| tree-node            | boolean                                                              | false  | 只对 tree-config 配置时有效，指定为树节点                                                                                                                                               |
| type                 | 'index' \| 'selection' \| 'radio' \| 'expand'                        |        | 设置内置列的类型                                                                                                                                                                        |
| width                | number \| string                                                     |        | 设置列的宽度，可以是像素或者百分比或者 auto ，设置为 auto 时，列宽会自动适应；该属性的可选值为 整数 ， px ，%                                                                           |

### Slots

| 插槽名         | 说明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| default        | 自定义显示内容模板，作用域插槽参数说明：<br/><br> slots.default({ $table, column, row, level, data, rowIndex, $rowIndex, columnIndex, $columnIndex, seq }, h)，<br/><br>               $table：表格组件对象，column：当前列配置，row：当前行数据，<br/><br>               level：当前行在树表中的层级，data：表格数据，<br/><br>               rowIndex：所有行中(包含虚拟滚动等隐藏列)下标，$rowIndex:已渲染行中的下标，<br/><br> columnIndex：所有列中(包含虚拟滚动等隐藏列)下标，$columnIndex:已渲染列中的下标，<br/><br>               seq：单元格所在行的序号，$seq:已弃用，<br/><br> h：vue的渲染函数 |
| edit           | 自定义可编辑组件模板，作用域插槽参数同 <code>default</code> 插槽                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| expand-trigger | 自定义展开行图标，作用域插槽参数同 <code>default</code> 插槽                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| filter         | 自定义筛选模板，作用插槽参数说明：slots.filter({ $grid, values, args, context },h)，$grid：表格组件对象，values：筛选项集合，args：筛选相关参数,context：筛选面板组件上下文对象                                                                                                                                                                                                                                                                                                                                                                                                                             |
| header         | 自定义表头内容的模板，作用插槽参数说明：<br/><br> slots.header({ $table, column, columnIndex，$columnIndex，} ,h)，<br/><br> $table：表格组件对象，column：当前列配置，<br/><br>              columnIndex：所有列中(包含虚拟滚动等隐藏列)下标，$columnIndex:已渲染列中的下标，<br/><br> h：vue的渲染函数                                                                                                                                                                                                                                                                                                    |

## grid-toolbar

### Props

| 属性名                   | 类型                                        | 默认值 | 说明                                                                                                           |
| ------------------------ | ------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------- |
| before-close-full-screen | () => boolean                               |        | 关闭全屏前的拦截方法，返回 false 则阻止关闭全屏，返回 true 则不阻止                                            |
| before-open-full-screen  | () => boolean                               |        | 全屏前的拦截方法，返回 false 则阻止全屏，返回 true 则不阻止                                                    |
| buttons                  | {<br> code: string<br> name: string<br> }[] |        | 按钮列表                                                                                                       |
| full-screen              | boolean                                     |        | 设置表格是否可以全屏，或者需要全屏的容器；设置工具栏属性是否显示全屏按钮                                       |
| id                       | string                                      |        | 唯一 ID 标识                                                                                                   |
| refresh                  | boolean                                     |        | 工具栏组件开启表格刷新功能                                                                                     |
| resizable                | boolean \| {storage: boolean}               |        | 列宽拖动配置（需要设置 id）                                                                                    |
| setting                  | boolean \| IToolbarSetting                  |        | 设置表格属性是否显示个性化面板，当设置表格的 name 属性时有效；设置工具栏属性是否显示个性化配置（需要设置 id ） |
| size                     | 'medium' \| 'small' \| 'mini'               |        | 表格的尺寸                                                                                                     |

### Events

| 事件名         | 回调参数                                  | 说明                                 |
| -------------- | ----------------------------------------- | ------------------------------------ |
| button-click   | (args: IButtonClick, event: Event)=> void | 当工具栏的按钮被点击时会后触发该事件 |
| cancel-setting | (args: ISettingConfigs)=> void            | 点击个性化面板的取消按钮触发该事件   |
| reset-setting  | () => void                                | 点击个性化面板的重置按钮触发该事件   |
| save-setting   | (args: ISettingConfigs)=> void            | 点击个性化面板的确认按钮触发该事件   |

### Slots

| 插槽名  | 说明       |
| ------- | ---------- |
| buttons | 按钮列表   |
| toolbar | 工具栏插槽 |

## Types

### IPopperOption

```typescript
interface IPopperOption {
  bubbling: boolean // 是否监听元素所有上级有滚动元素的scroll事件，监听到则更新popper的位置。用于解决某些弹出层位置在页面滚动时，位置不正确的场景，默认true
  followReferenceHide: boolean // 当触发源隐藏时，自动隐藏弹出层，默认true
  removeOnDestroy: boolean // 弹出层消失后，是否移除弹出层的DOM元素，布尔false
  updateHiddenPopperOnScroll: boolean // 滚动过程中是否更新隐藏的弹出层位置
  boundariesElement: 'viewport' | 'body' | HTMLElement // 滚动过程中,弹出层的碰撞边界。 默认值为： 'viewport'
  ignoreBoundaries: boolean // 忽略边界判断，弹出的位置始终是设置的 placement 值
  scrollParent: HTMLElement // 指定滚动的父节点，优化级最高。 默认为null
}
```

### IRow

```typescript
interface IRow {
  // 表格行数据
  [field: string]: any
}
```

### IColumnConfig

```typescript
interface IColumnConfig {
  // 功能列的类型， 'index'行索引，'radio' 单选行， 'selection' 多选行
  type: 'index' | 'radio' | 'selection'
  // 列id
  id: string
  // 校验规则
  rules: IValidRules
  // 是否必填
  required: boolean
  property: string
  title: string
  // 列宽度
  width: string | number
  // 自动分配宽度时的最小宽度
  minWidth: string | number
  // 是否可以调整列宽
  resizable: boolean
  // 是否左、右冻结
  fixed: 'left' | 'right'
  align: 'left' | 'center' | 'right'
  headerAlign: 'left' | 'center' | 'right'
  footerAlign: 'left' | 'center' | 'right'
  showOverflow: boolean | 'ellipsis' | 'tooltip' | 'title'
  showHeaderOverflow: boolean | 'ellipsis' | 'tooltip' | 'title'
  showTip: boolean
  showHeaderTip: boolean
  className: string
  headerClassName: string
  footerClassName: string
}
```

### IPagerConfig

```typescript
interface IPagerConfig {
  component?: Component
  attrs: {
    currentPage: number
    pageSize: number
    pageSizes: number[]
    total: number
    // 分页组件布局默认值：'total, prev, pager, next, jumper'
    layout: string
  }
}
```

### IDataHandler

```typescript
interface IDataHandler {
  api: () => Promise
}
```

### IRowGroup

```typescript
interface IRowGroup {
  // 自定义渲染内容
  render: () => Vnode
  // 列标识符，行分组会将具有相同值的列进行分组展示
  field: string
  // 3.17版本新增，配置分组行的列合并数量
  colspan: number
  // 3.17版本新增，控制分组行是否可以手动折叠
  closeable: boolean
  // 3.17版本新增，控制分组生成时是否默认收起
  activeMethod: (row: IRow) => boolean
}
```

### IToolbarConfig

```typescript
interface IToolbarConfig {
  component: GridToolbar
  buttons: {
    code: string
    name: string
  }[]
}
```

### IToolTipConfig

```typescript
interface IToolTipConfig {
  placement?:
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'left'
    | 'left-start'
    | 'left-end'
    | 'right'
    | 'right-start'
    | 'right-end'
  visibleArrow?: boolean
  enterable?: boolean
  type?: 'normal' | 'warning' | 'error' | 'info' | 'success'
  effect?: 'dark' | 'light'
  // 自定义提示内容
  contentMethod?: () => string | VNode
}
```

### IContextMenuConfig

```typescript
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
  visibleMethod?: () => boolean
}
```

### IValidRules

```typescript
interface IValidRules {
  [field: string]: {
    type?: string
    required?: boolean
    validator?: () => boolean
    message?: string
    min?: number
    max?: number
  }
}
;[]
```

### IExpandConfig

```typescript
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
  activeMethod?: ({ row: IRow }) => boolean
  // 配置是否显示展开图标
  showIcon?: boolean
}
```

### IOptimizationConfig

```typescript
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
```

### IKeyboardConfig

```typescript
interface IKeyboardConfig {
  // 启用方向键功能
  isArrow?: boolean
  isDel?: boolean
  isTab?: boolean
  isEdit?: boolean
}
```

### IMouseConfig

```typescript
interface IMouseConfig {
  // 是否开启左键选中单元格功能（只对 editConfig.mode=cell 有效），默认为 false
  selected: boolean
  // 悬浮是否显示对齐辅助线(3.27.0新增)
  hover: boolean
}
```

### IRadioConfig

```typescript
interface IRadioConfig {
  // 触发选中的方式，可选项包括 cell（单击图标所在单元格触发） / row（点击行触发），默认点击图标触发
  trigger?: 'cell' | 'row'
  // 单选框显示的字段名，可以直接显示在单选框中
  labelField?: string |
  // 默认选中指定行（只会在初始化时被触发一次，需要有 row-id）
  checkRowKey?: string
  // 是否允许选中的方法，该方法的返回值用来决定这一行的 Radio 是否可以选中
  checkMethod?: () => boolean
}
```

### ISelectConfig

```typescript
interface ISelectConfig {
  // 触发选中的方式，可选项包括 cell（单击图标所在单元格触发） / row（点击行触发），默认点击图标触发
  trigger?: 'cell' | 'row'
  // 复选框显示的字段名，可以直接显示在复选框中
  labelField?: string
  // 默认勾选开指定行（只会在初始化时被触发一次，需要有 row-id）
  checkRowKeys?: string[]
  // 是否允许选中的方法，该方法的返回值用来决定这一行的 checkbox 是否可以勾选
  checkMethod?: () => boolean
  // 默认勾选所有（只会在初始化时被触发一次）}
  checkAll?: boolean
  // 是否显示全选按钮（如果 checkStrictly=true 则默认为 false）
  showHeader?: boolean
  // 是否严格的遵循父子不互相关联的做法
  checkStrictly?: boolean
  // 翻页操作是否保留历史选择数据
  reserve?: boolean
}
```

### ISortConfig

```typescript
interface ISortConfig {
  // 排序触发方式，可配置为 cell（点击头部单元格触发排序），不配置时默认为点击上下箭头触发排序
  trigger?: 'cell'
}
```

### ITreeConfig

```typescript
interface ITreeConfig {
  // 展开子级触发方式：'default'(点击按钮触发)；'cell'(点击单元格触发)；'row'(点击行触发)
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
  // 3.25.0版本新新增，当trigger为 'default' 时，点击按钮事件是否冒泡，默认为false
  bubbling?: boolean
}
```

### IValidConfig

```typescript
interface IValidConfig {
  // 校验提示类型，'inline'(内置提示)；'tooltip'(tooltip文字提示)
  message?: 'inline' | 'tooltip'
  // 是否高亮已经校验过错误的单元格 (3.27.0新增)
  highlightError?: boolean
}
```

### ISummaryConfig

```typescript
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
```

### IScrollLoadConfig

```typescript
interface IScrollLoadConfig {
  // 是否连续
  isInfinity: boolean
  // 每次加载多少条
  pageSize: number
}
```

### IEventsConfig

```typescript
interface IEventsConfig {
  [field: string]: () => void
}
```

### IDropConfig

```typescript
interface IDropConfig {
  // sortablejs 插件
  plugin: Sortable
  // 开启行拖拽
  row: boolean
  // 开启列拖拽
  column: boolean
  // 拖拽前函数，返回 false 取消拖动
  onBeforeMove?: () => boolean
  // 拖拽触发源选择器一般是class类名
  trigger?: string
  // 根据行的类名来控制是否可以拖动
  filter?: string
  // 如果变动了树层级，可以指定是否需要刷新数据
  refresh?: boolean
  // 配置 filter 时，设置为 false 可以允许输入框正常聚焦
  preventOnFilter?: boolean
  // 更多其余参数请参考 sortablejs 插件配置
}
```

### IEditConfig

```typescript
interface IEditConfig {
  // 激活触发方式
  trigger: 'click' | 'dblclick' | 'manual'
  // 激活类型单元格激活或者行
  mode: 'cell' | 'row'
  // 是否显示状态
  showStatus?: boolean
  // 自定义编辑规则，返回true可以编辑返回false则禁止编辑
  activeMethod?: ({ row: IRow, column: IColumnConfig }) => boolean
  // （3.19.0新增）当mode为'row'时，行编辑激活状态下默认会忽略activeMethod，配置为true使其生效
  activeStrictly?: boolean
  //（3.25.0新增）自定义编辑态的退出逻辑。当返回true时，不会退出编辑态。
  blurOutside?: ({ cell, event, $table }: { cell: HTMLElement; event: Event; $table: Component }) => boolean
}
```

### IRecordset

```typescript
interface IRecordset {
  insertRecords: IRow[]
  removeRecords: IRow[]
  updateRecords: IRow[]
}
```

### IPageChangeArgs

```typescript
interface IPageChangeArgs {
  // table组件vue实例
  $grid: Component
  // 当前页码
  currentPage: number
  //当前分页组件布局信息 'total, prev, pager, next, jumper'
  layout: string
  // 当前每页显示条数
  pageSize: number
  //可切换的每页条数
  pageSizes: number[]
  //总数据条数
  total: number
}
```

### IBeforePageChangeArgs

```typescript
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
  callback: () => void
  //失效回调
  rollback: () => void
}
```

### IToolbarButtonClickArgs

```typescript
interface IToolbarButtonClickArgs {
  //表格组件实例对象信息
  $grid: Component
  //按钮信息对象
  button: {
    code: string
    name: string
  }[]
  // 按钮功能类型
  code: string
}
```

### ICellClickArgs

```typescript
interface ICellClickArgs {
  // 当前行
  row: IRow
  // 当前行的下标
  rowIndex: number
  // 当前列
  column: IColumnConfig
  // 当前列的下标
  columnIndex: number
}
```

### ICellContextMenuArgs

```typescript
interface ICellContextMenuArgs {
  // 当前行
  row: IRow
}
```

### ICellArgs

```typescript
interface ICellArgs {
  //当前行
  row: IRow
  //当前行的下标
  rowIndex: number
  // 当前列
  column: IColumnConfig
  // 当前列的下标
  columnIndex: number
}
```

### ICurrentChangeArgs

```typescript
interface ICurrentChangeArgs {
  // 当前行
  row: IRow
}
```

### IEditActivedArgs

```typescript
interface IEditActivedArgs {
  // 当前行
  row: IRow
  // 当前列
  column: IColumnConfig
}
```

### IEditClosedArgs

```typescript
interface IEditClosedArgs {
  // 当前行
  row: IRow
  // 当前列
  column: IColumnConfig
}
```

### IEditDisabledArgs

```typescript
interface IEditDisabledArgs {
  //当前行
  row: IRow
  // 当前列
  column: IColumnConfig
}
```

### IFilterChangeArgs

```typescript
interface IFilterChangeArgs {
  //表格的信息对象
  $table: Component
  //过滤列的过滤数据信息
  filters: object
}
```

### IFooterCellClickArgs

```typescript
interface IFooterCellClickArgs {
  $columnIndex: number
  $rowIndex: number
  // table组件vue实例
  $table: Component
  // 当前单元格节点
  cell: HTMLElement
  // 当前列信息
  column: IColumnConfig
  columnIndex: number
}
```

### IContextMenuArgs

```typescript
interface IContextMenuArgs {
  $columnIndex: number
  $rowIndex: number
  // table组件vue实例
  $table: Component
  // 当前单元格节点
  cell: HTMLElement
  // 当前列信息
  column: IColumnConfig
  columnIndex: number
  // 配置清除等功能信息
  options: object[]
  // 表格区域类型
  type: 'header' | 'footer' | 'body'
}
```

### IFooterCellDblClickArgs

```typescript
interface IFooterCellDblClickArgs {
  $columnIndex: number
  $rowIndex: number
  // table组件vue实例
  $table: Component
  // 当前单元格节点
  cell: HTMLElement
  // 当前列信息
  column: IColumnConfig
  columnIndex: number
}
```

### IHeaderCellClickArgs

```typescript
interface IHeaderCellClickArgs {
  $columnIndex: number
  $rowIndex: number
  // table组件vue实例
  $table: Component
  // 点击表头单元格
  cell: HTMLElement
  // 当前列信息
  column: IColumnConfig
  columnIndex: number
  // 当前点击节点过滤标识
  triggerFilter: boolean
  // 当前点击节点排序标识
  triggerSort: boolean
}
```

### IHeaderCellDblClickArgs

```typescript
interface IHeaderCellDblClickArgs {
  // 列数据
  column: IColumnConfig
  // 列索引
  columnIndex: number
  // table组件 vue实例
  $table: Component
  // 点击的单元格dom
  cell: HTMLElement
}
```

### IResizableChangeArgs

```typescript
interface IResizableChangeArgs {
  // table组件的vue 实例
  $table: Component
  // 列配置信息
  column: IColumnConfig
  // 拖动列的索引
  columnIndex: number
  // 是否固定列
  fixed: boolean
}
```

### IResizableConfig

```typescript
interface IResizableConfig {
  // 拖拽宽度限制函数，field: 当前拖拽的列名，width: 当前拖拽的宽度
  limit: ({ field: string, width: number }) => number
}
```

### IScrollArgs

```typescript
interface IScrollArgs {
  // 表格实例对象信息
  $table: Component
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
```

### ISelectAllArgs

```typescript
interface ISelectAllArgs {
  $columnIndex: number
  $rowIndex: number
  $seq: string
  // 表格实例对象信息
  $table: Component
  // 勾选状态
  checked: boolean
  // 列信息
  column: IColumnConfig
  // 列下标
  columnIndex: number
  // 表格数据
  data: IRow[]
  fixed: boolean
  isHidden: boolean
  level: number
  // 勾选项的行数据信息
  row: IRow
  // 勾选项的行下标
  rowIndex: number
  // 选中的数据
  selection: IRow[]
  seq: number
}
```

### IToggleExpandChangeArgs

```typescript
interface IToggleExpandChangeArgs {
  // 表格实例对象信息
  $table: Component
  //点击展开行的数据信息对象
  row: IRow
  // 点击展开行的下标
  rowIndex: number
}
```

### IToggleTreeChangeArgs

```typescript
interface IToggleTreeChangeArgs {
  // 表格实例对象信息
  $table: Component
  //点击展开行的数据信息对象
  row: IRow
  // 点击展开行的下标
  rowIndex: number
}
```

### IValidErrorArgs

```typescript
interface IValidErrorArgs {
  // 校验的单元格信息对象
  cell: Cell
  //校验单元格所在列的列配置信息对象
  column: IColumnConfig
  //校验单元格所在行的信息对象
  row: IRow
  // 校验规则信息对象
  rule: object
}
```

### ISortChangeArgs

```typescript
interface ISortChangeArgs {
  // 表格实例对象信息
  $grid: Component
  // 列信息
  column: IColumnConfig
  // 排序的字段名
  field: string
  // 排序类型升序或降序
  order: 'asc' | 'desc'
  prop: string
  property: string
}
```

### IClassNameArgs

```typescript
interface IClassNameArgs {
  seq: number
  row: IRow
  rowIndex: number
  $rowIndex: number
  column: IColumnConfig
  columnIndex: number
  $columnIndex: number
}
```

### IIndexMethodArgs

```typescript
interface IIndexMethodArgs {
  row: IRow
  rowIndex: number
  column: IColumnConfig
  columnIndex: number
}
```

### IFormatConfig

```typescript
interface IFormatConfig {
  // 列数据源
  data: IColumnConfig[]
  // 内置渲染器类型，与 format-text 属性取值相同
  type:
    | 'money'
    | 'enum'
    | 'select'
    | 'number'
    | 'integer'
    | 'filesize'
    | 'date'
    | 'dateTime'
    | 'longDateTime'
    | 'time'
    | 'longTime'
    | 'yearMonth'
    | 'ellipsis'
    | 'rate'
  // 配置为 true 后，支持动态修改 data 的数据。还可以配置为对象，配置为对象时，对象中可以配置 splitConfig.enabled（是否启用分隔配置）、splitConfig.valueSplit（指定 value 值的分隔符）、splitConfig.textSplit（指定 text 的分隔符）、fetch（列数据异步渲染，请求数据）
  async: true
  // 单元格显示内容的映射
  label: string
  // 单元格取值的映射
  value: string
}
```

### IButtonClick

```typescript
interface IButtonClick {
  // 表格组件实例对象信息
  $grid: Component
  // 按钮列表信息对象
  button: {
    code: string
    name: string
  }[]
  // 按钮类型
  code: string
}
```

### ISettingConfigs

```typescript
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
```

### ISpanMethodArgs

```typescript
interface ISpanMethodArgs {
  // 行标
  $rowIndex: number
  // 列数据
  column: IColumnConfig
  // 列下标
  columnIndex: number
  // 一个数组，保存了当前合并和计算的数据
  data: (string | number | null)[][]
}
```

### IExportCsvOptions

```typescript
interface IExportCsvOptions {
  filename: string
  original: boolean
  isHeader: boolean
  data: IRow[]
}
```

### IEditorConfig

```typescript
interface IEditorConfig {
  // 内置组件名称或者自定义组件实例
  component: 'input' | 'select' | Component
  // 传递给组件的事件集合(v3.23.0开始支持)
  events?: {
    // change、click等
    [event]: () => void
  }
  // 传递给编辑器组件的属性集合
  attrs?: {
    [prop]: any
  }
  // select 内置组件独有的下拉数据配置项
  options?: object[]
}
```

### IFilterConfig

```typescript
interface IFilterConfig {
  // 设置在显示枚举选项功能是否为多选，仅在 enumable:true 下有效，默认 true
  multi?: boolean
  // 设置在过滤面板中显示枚举选项
  enumable?: boolean
  // 设置在过滤面板中显示空/非空筛选条件
  defaultFilter?: boolean
  // 设置在过滤面板中显示输入筛选，true 使用默认 input，或传入 IInputFilterConfig 配置
  inputFilter?: boolean | IInputFilterConfig
  // 设置枚举选项的静态数据源，也可为函数 (params) => Promise<Array<{label,value,checked?}>>
  values?: Array<{ [key: string]: any }> | (params: { property: string; filter: IFilterConfig }) => Promise<Array<{ [key: string]: any }>>
  // 设置枚举数据的显示值属性字段，默认 'label'
  label?: string
  // 设置枚举数据的实际值属性字段，默认 'value'
  value?: string
  // 设置筛选项的显示顺序和组合，默认为 'input,enum,default,extends,base'
  // 可选项：input | enum | default | extends | base | simple（简化版与其它互斥）
  layout?: string
  // 初始筛选条件
  condition?: IFilterCondition
  // 扩展快捷筛选项，点击后直接应用对应 method 筛选
  extends?: IExtendsFilterItem[]
  // 自定义筛选方法，用于 filter 插槽或 extends 扩展项
  method?: (params: { row: IRow; column: IColumnConfig; property: string }) => boolean
  // 简化版筛选配置，layout 需包含 'simple'
  simpleFilter?: ISimpleFilterConfig
  // 3.25.0 新增，设置过滤面板根节点属性
  attrs?: Record<string, string>
  // 数据源配置，用于异步获取枚举选项
  dataset?: any
}

// 输入筛选配置
interface IInputFilterConfig {
  // 输入组件，默认 'input'，可传入 TinyDatePicker、TinyNumeric 等
  component?: string | object
  // 传递给输入组件的属性
  attrs?: Record<string, any>
  // 筛选关系选项，内置：equals|unequal|greaterThan|lessThan|equalToGreaterThan|equalToLessThan|contains|startwith|endwith|exclude
  relations?: IRelationFilterItem[]
  // 默认选中的 relation 值
  relation?: string
  // 重置输入时的回调
  onResetInputFilter?: (ref: any) => void
}

// 关系选项项
interface IRelationFilterItem {
  label: string
  value: string
  // 自定义筛选方法，(params) => boolean，不传则使用内置 relation 逻辑
  method?: (params: { value: any; input: any; row?: IRow; column?: IColumnConfig }) => boolean
}

// 扩展筛选项
interface IExtendsFilterItem {
  label: string
  value?: string
  // 本地筛选时必填；服务端筛选可不填
  method?: (params: { value: any; row: IRow; column: IColumnConfig }) => boolean
}

// 筛选条件
interface IFilterCondition {
  input?: string | number
  relation?: string
  empty?: boolean | null
  type?: 'input' | 'enum' | 'empty' | 'extend' | 'date' | 'custom' | null
  value?: any[]
  dateList?: [string, string]
}

// 简化版筛选配置
interface ISimpleFilterConfig {
  // 是否为日期时间模式，true 时渲染日期范围选择器
  isDatetime?: boolean
  // 是否显示全选按钮，多选模式下有效；搜索模式下与 searchable 互斥显示
  selectAll?: boolean
  // 日期时间配置，isDatetime 为 true 时必填
  datetimeConfig?: IDatetimeFilterConfig
  // 搜索配置，isDatetime 为 false 时可配置，用于在枚举列表中增加搜索框
  searchConfig?: ISearchFilterConfig
}

// 简化版-日期时间配置
interface IDatetimeFilterConfig {
  component: object
  format?: string
  valueFormat?: string
  type?: 'date' | 'datetime' | 'daterange'
  min?: Date
  max?: Date
  startDate?: string
  endDate?: string
}

// 简化版-搜索配置
interface ISearchFilterConfig {
  component?: object
  searchValue?: string
}
```

### IFormatText

```typescript
'money' | 'enum' | 'select' | 'number' | 'integer' | 'filesize' | 'date' | 'dateTime' | 'longDateTime' | 'time' | 'longTime' | 'yearMonth' | 'ellipsis' | 'rate' | 'boole' | (params)=> string
```

### IToolbarSetting

```typescript
interface IToolbarSetting {
  remote?: boolean
  storage?: string
  sortable?: Sortable
}
```

### ICellClassNameArgs

```typescript
interface ICellClassNameArgs {
  // 当前行在树表中的层级
  level: number
  // 当前行数据
  row: IRow
  // 表格数据
  data: IRow[]
  // 所有行中(包含虚拟滚动等隐藏列)下标
  rowIndex: number
  // 已渲染行中的下标
  $rowIndex: number
  // 表格列配置
  column: IColumnConfig
  // 所有列中(包含虚拟滚动等隐藏列)下标
  columnIndex: number
  // 已渲染列中的下标
  $columnIndex: number
  // 单元格所在行的序号
  seq: number
  $seq: string // 已弃用
}
```

### ICustomConfig

```typescript
interface ICustomConfig {
  // 表格列字段
  property: string
  // 是否显示
  visible?: boolean
  // 列宽
  width?: number | string
}
```
