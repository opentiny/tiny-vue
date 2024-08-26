export default {
  mode: ['pc', 'mobile-first'],
  apis: [
    {
      name: 'grid',
      type: 'component',
      props: [
        {
          name: 'align',
          type: "'left' | 'center' | 'right'",
          defaultValue: "'left'",
          desc: {
            'zh-CN': '所有表格列的对齐方式',
            'en-US':
              'All column alignment mode; The optional values of this attribute are left (left-aligned), center (center-aligned), and right (right-aligned)'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-align#align-grid-align',
          mfDemo: ''
        },
        {
          name: 'auto-load',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否开启自动请求服务，配置 fetch-data 时有效',
            'en-US': ''
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-data-source#data-source-auto-load',
          mfDemo: ''
        },
        {
          name: 'auto-resize',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '父元素响应式监听（对于父元素可能存在动态变化的场景可能会用到）',
            'en-US':
              'Parent element responsive listening (This may be used in scenarios where the parent element may have dynamic changes.)'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-size#size-auto-height',
          mfDemo: ''
        },
        {
          name: 'border',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否带有纵向边框',
            'en-US': 'Whether there is a vertical border'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-appearance-settings#appearance-settings-grid-border',
          mfDemo: ''
        },
        {
          name: 'cell-class-name',
          typeAnchorName: 'IClassNameArgs',
          type: 'string | (args: IClassNameArgs) => string',
          defaultValue: '',
          desc: {
            'zh-CN': '给单元格附加 className，也可以是函数',
            'en-US': 'Add a class name to a cell. The class name can also be the Function'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-custom-style#custom-style-body-style',
          mfDemo: ''
        },
        {
          name: 'column-key',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否需要为每一列的 VNode 设置 key 属性（非特殊情况下不需要使用）',
            'en-US': 'Whether to set the key attribute for VNodes in each column (not required in special cases).'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: '',
          mfDemo: ''
        },
        {
          name: 'column-min-width',
          type: 'number | string',
          defaultValue: '',
          desc: {
            'zh-CN':
              '设置可以调整到的最小宽度，不设置时默认为列头 span 的宽度 + 36（头部固定宽度） ；所有最小列宽度；会自动将剩余空间按比例分配；该属性的可选值为 整数, px，%',
            'en-US':
              'Minimum width that can be adjusted. If this parameter is not set, the default value is the width of the column head span plus 36 (fixed width of the head).; all minimum column widths; The remaining space will be allocated in proportion automatically. The optional values of this attribute are integers, px,%'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-size#size-column-min-width',
          mfDemo: ''
        },
        {
          name: 'column-width',
          type: 'number | string',
          defaultValue: '',
          desc: {
            'zh-CN': '所有列宽度；该属性的可选值为 整数, px，%',
            'en-US': 'Width of all columns; The optional values of this attribute are integers, px,%'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-size#size-column-width',
          mfDemo: ''
        },
        {
          name: 'columnAnchor',
          type: 'Array<String|Object|Array>',
          defaultValue: '',
          desc: {
            'zh-CN': '配置一组列锚点',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'columns',
          typeAnchorName: 'IColumnConfig',
          type: 'IColumnConfig[]',
          defaultValue: '',
          desc: {
            'zh-CN': '表格列的配置信息，具体参考列配置项',
            'en-US': 'Configuration information of the table column. For details, see the column configuration items.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-data-source#data-source-columns',
          mfDemo: ''
        },
        {
          name: 'context-menu',
          typeAnchorName: 'IContextMenuConfig',
          type: 'IContextMenuConfig',
          defaultValue: '',
          desc: {
            'zh-CN': '快捷菜单配置项',
            'en-US': 'Shortcut menu configuration item'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-context-menu#context-menu-footer-menu',
          mfDemo: ''
        },
        {
          name: 'custom-column-names',
          type: 'string[]',
          defaultValue: "['TinyGridColumn']",
          meta: {
            stable: '3.17.0'
          },
          desc: {
            'zh-CN': '封装 grid-column 时需要配置此字段，提供给表格收集配置',
            'en-US':
              'This field needs to be configured when encapsulating grid-column and is provided for table collection configuration'
          },
          mode: ['pc'],
          pcDemo: 'grid-faq#custom-column'
        },
        {
          name: 'data',
          typeAnchorName: 'IRow',
          type: 'Row[]',
          defaultValue: '',
          desc: {
            'zh-CN': '设置表格的数据',
            'en-US': 'Set table data.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-data-source#data-source-static-data',
          mfDemo: ''
        },
        {
          name: 'delete-data',
          typeAnchorName: 'IDataHandler',
          type: 'IDataHandler',
          defaultValue: '',
          desc: {
            'zh-CN': '服务端数据删除方法',
            'en-US': ''
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-toolbar#toolbar-save-data',
          mfDemo: ''
        },
        {
          name: 'drop-config',
          typeAnchorName: 'IDropConfig',
          type: 'IDropConfig',
          defaultValue: '',
          desc: {
            'zh-CN': '表格拖拽配置项',
            'en-US': 'Drag configuration items in a table'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-drag#drag-row-drag',
          mfDemo: ''
        },
        {
          name: 'edit-config',
          typeAnchorName: 'IEditConfig',
          type: 'IEditConfig',
          defaultValue: '',
          desc: {
            'zh-CN': '表格编辑配置项',
            'en-US': 'Configuration item for editing the table'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-editor#editor-inner-editor',
          mfDemo: ''
        },
        {
          name: 'edit-rules',
          typeAnchorName: 'IValidRules',
          type: 'IValidRules',
          defaultValue: '',
          desc: {
            'zh-CN': '校验规则配置项',
            'en-US': 'Check rule configuration item'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-validation#validation-editing-validation',
          mfDemo: ''
        },
        {
          name: 'events',
          typeAnchorName: 'IEventsConfig',
          type: 'IEventsConfig',
          defaultValue: '',
          desc: {
            'zh-CN': '事件对象',
            'en-US': 'Event object'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-event#event-grid-events',
          mfDemo: ''
        },
        {
          name: 'expand-config',
          typeAnchorName: 'IExpandConfig',
          type: 'IExpandConfig',
          defaultValue: '',
          desc: {
            'zh-CN': '展开行配置项',
            'en-US': ''
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-expand#expand-expand-config',
          mfDemo: ''
        },
        {
          name: 'fetch-data',
          typeAnchorName: 'IDataHandler',
          type: 'IDataHandler',
          defaultValue: '',
          desc: {
            'zh-CN': '服务端数据查询方法',
            'en-US': 'Querying Server Data'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-data-source#data-source-request-service',
          mfDemo: ''
        },
        {
          name: 'fit',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '所有列的宽度是否自撑开',
            'en-US': 'Whether the widths of all columns are extended automatically.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-size#size-adaptive-column-width',
          mfDemo: ''
        },
        {
          name: 'footer-align',
          type: "'left' | 'center' | 'right'",
          defaultValue: "'left'",
          desc: {
            'zh-CN': '所有的表尾列的对齐方式',
            'en-US':
              'Alignment mode of all table tail columns; The optional values of this attribute are left (left-aligned), center (center-aligned), and right (right-aligned)'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-align#align-footer-align',
          mfDemo: ''
        },
        {
          name: 'footer-cell-class-name',
          typeAnchorName: 'IClassNameArgs',
          type: 'string | (args: IClassNameArgs) => string',
          defaultValue: '',
          desc: {
            'zh-CN': '给表尾的单元格附加 className，也可以是函数',
            'en-US': 'Add the class name to the cell at the end of the table. The class name can also be the function'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-custom-style#custom-style-footer-style',
          mfDemo: ''
        },
        {
          name: 'footer-method',
          typeAnchorName: 'IColumnConfig',
          type: '({columns: IColumnConfig[], data: IRow[]}) => string[][]',
          defaultValue: '',
          desc: {
            'zh-CN': '表尾合计的计算方法 columns:所有的列配置数据, data： 当前所有的表格数据',
            'en-US':
              'Calculation method of table tail total Function({columns, data});params:{columns: all column configuration data: all table data}'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-footer#footer-footer-summation-empty',
          mfDemo: ''
        },
        {
          name: 'footer-row-class-name',
          typeAnchorName: 'IClassNameArgs',
          type: 'string | (args: IClassNameArgs) => string',
          defaultValue: '',
          desc: {
            'zh-CN': '给表尾的行附加 className',
            'en-US': 'Add className to the row at the end of the table'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-custom-style#custom-style-footer-style',
          mfDemo: ''
        },
        {
          name: 'footer-span-method',
          typeAnchorName: 'ISpanMethodArgs',
          type: '(args: ISpanMethodArgs) => { rowspan: number, colspan: number }',
          defaultValue: '',
          desc: {
            'zh-CN':
              '表尾合并行或列，该函数返回计算后的值；通过 footer-method 和 footer-span-method 设置表尾合计行或列逻辑 必须配置 show-footer',
            'en-US': ''
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-footer#footer-footer-row-or-column-span',
          mfDemo: ''
        },
        {
          name: 'header-align',
          type: "'left' | 'center' | 'right'",
          defaultValue: "'left'",
          desc: {
            'zh-CN': '所有的表头列的对齐方式',
            'en-US':
              'Alignment mode of all table header columns; The optional values of this attribute are left (left-aligned), center (center-aligned), and right (right-aligned)'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-align#align-header-align',
          mfDemo: ''
        },
        {
          name: 'header-cell-class-name',
          typeAnchorName: 'IClassNameArgs',
          type: 'string | (args: IClassNameArgs) => string',
          defaultValue: '',
          desc: {
            'zh-CN': '给表头的单元格附加 className，也可以是函数',
            'en-US': 'Add a class name to the cell in the table header. The class name can also be the function'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-custom-style#custom-style-header-style',
          mfDemo: ''
        },
        {
          name: 'header-row-class-name',
          typeAnchorName: 'IClassNameArgs',
          type: 'string | (args: IClassNameArgs) => string',
          defaultValue: '',
          desc: {
            'zh-CN': '表头的行附加 className，也可以是函数',
            'en-US': 'Add className to the row in the table header. It can also be the function'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-custom-style#custom-style-header-style',
          mfDemo: ''
        },
        {
          name: 'header-suffix-icon-absolute',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '表格属性 header-suffix-icon-absolute 设置为 true，表头后置图标使用绝对定位。默认值为 false',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'height',
          type: 'number | string',
          defaultValue: '',
          desc: {
            'zh-CN':
              '设置表格内容区域（不含表格头部，底部）的高度。 不设置时，表格内容区域的高度度自适应；表格的高度；支持铺满父容器或者固定宽高；该属性的可选值为 整数, px，%',
            'en-US':
              'Set the height of the table content area (excluding the table header and bottom). If this parameter is not set, the height of the table content area is adaptive.; height of table; Supports full parent containers or fixed width and height. The optional values of this attribute are integers, px,%'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-size#size-fixed-grid-height',
          mfDemo: ''
        },
        {
          name: 'highlight-cell',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '只对 editConfig 配置时有效，是否在编辑时高亮单元格边框',
            'en-US':
              'This parameter is valid only when editConfig is configured. Whether to highlight the cell border during edit.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-highlight#highlight-highlight-cell',
          mfDemo: ''
        },
        {
          name: 'highlight-current-column',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否要高亮当前列',
            'en-US': 'Do you want to highlight the current column?'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-highlight#highlight-highlight-current-column',
          mfDemo: ''
        },
        {
          name: 'highlight-current-row',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否要高亮当前行',
            'en-US': 'Do you want to highlight the current line?'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-highlight#highlight-highlight-current-row',
          mfDemo: ''
        },
        {
          name: 'highlight-hover-column',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '鼠标移到列是否要高亮显示',
            'en-US': 'Do you want to highlight the column when you move the cursor to the column?'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-highlight#highlight-highlight-hover-column',
          mfDemo: ''
        },
        {
          name: 'highlight-hover-row',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '鼠标移到行是否要高亮显示',
            'en-US': 'Do you want to highlight the line when you move the cursor to the line?'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-highlight#highlight-highlight-hover-row',
          mfDemo: ''
        },
        {
          name: 'intersectionOption',
          type: 'Object',
          defaultValue: '',
          desc: {
            'zh-CN': '表格的相交性检测配置，参考 IntersectionObserver 的配置',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'is-async-column',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '设置表格的列是否延迟加载；是否开启异步列功能，配合 scrollLoad 一起使用',
            'en-US':
              'Sets whether to delay the loading of columns in the table. Indicates whether to enable the asynchronous column function. This parameter is used together with scrollLoad'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-data-source#data-source-column-asyn-rendering',
          mfDemo: ''
        },
        {
          name: 'is-before-page-change',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN':
              '是否打开页面改变时的前置处理特性。在值为 true 时，翻页操作或者改变页大小操作不会立即生效，留给用户处理业务逻辑，之后通过调用预留的 callback 或者 rollback 使之生效或者失效，详看事件 before-page-change ',
            'en-US':
              'Whether to enable the preprocessing feature when the page changes. If the value is true, the page turning operation or page size change operation does not take effect immediately. The service logic is left for the user to process. Then, the reserved callback or rollback is invoked to make the operation take effect or invalid. For details, see the before-page-change event'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-event#event-page-before-change-event',
          mfDemo: ''
        },
        {
          name: 'is-drag-header-sorting',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '是否拖拽表头调整列顺序。默认值为 false',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'is-multiple-history',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '是否开启模板管理服务端存储功能。默认值为 false',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'keyboard-config',
          typeAnchorName: 'IKeyboardConfig',
          type: 'IKeyboardConfig',
          defaultValue: '',
          desc: {
            'zh-CN': '按键配置项',
            'en-US': 'Key configuration item; {isArrow: true //Enable the arrow keys}'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-mouse-keyboard#mouse-keyboard-keyboard-navigation',
          mfDemo: ''
        },
        {
          name: 'loading',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '表格是否显示加载中',
            'en-US': 'Whether the table is being loaded.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-loading#loading-grid-loading-tip',
          mfDemo: ''
        },
        {
          name: 'loading-component',
          type: 'Component',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义表格 loading ',
            'en-US': 'Whether the table is being loaded.'
          },
          mode: ['pc'],
          pcDemo: 'grid-loading#loading-grid-custom-loading'
        },
        {
          name: 'max-height',
          type: 'number | string',
          defaultValue: '',
          desc: {
            'zh-CN': '设置表格内容区域（不含表格头部，底部）的最大高度；该属性的可选值为：整数, px，%',
            'en-US':
              'Set the maximum height of the table content area (excluding the table header and bottom).; The optional values of this attribute are integers, px,%'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-size#size-max-min-grid-height',
          mfDemo: ''
        },
        {
          name: 'min-height',
          type: 'number | string',
          defaultValue: '',
          desc: {
            'zh-CN': '设置表格内容区域（不含表格头部，底部）的最小高度',
            'en-US': 'Set the minimum height of the table content area (excluding the table header and bottom).'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-size#size-max-min-grid-height',
          mfDemo: ''
        },
        {
          name: 'mouse-config',
          typeAnchorName: 'IMouseConfig',
          type: 'IMouseConfig',
          defaultValue: '',
          desc: {
            'zh-CN': '鼠标配置项',
            'en-US':
              'Mouse configuration item; {selected: true //Whether to enable the function of selecting cells by left-clicking. This function is valid only for edit-config.mode=cell. The default value is false.}'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-mouse-keyboard#mouse-keyboard-mouse-config',
          mfDemo: ''
        },
        {
          name: 'optimization',
          typeAnchorName: 'IOptimizationConfig',
          type: 'IOptimizationConfig',
          defaultValue: '',
          desc: {
            'zh-CN': '表格虚拟滚动的优化配置项',
            'en-US': 'Optimize configuration items'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-large-data#large-data-virtual-rolling',
          mfDemo: ''
        },
        {
          name: 'pager',
          typeAnchorName: 'IPagerConfig',
          type: 'IPagerConfig',
          defaultValue: '',
          desc: {
            'zh-CN': '分页配置项',
            'en-US': ''
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-pager#pager-inner-pager',
          mfDemo: ''
        },
        {
          name: 'params',
          type: 'Object',
          defaultValue: '',
          desc: {
            'zh-CN': '额外的参数',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'prefetch',
          type: 'Boolean|Array',
          defaultValue: '',
          desc: {
            'zh-CN': '是否开启数据预加载',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'radio-config',
          typeAnchorName: 'IRadioConfig',
          type: 'IRadioConfig',
          defaultValue: '',
          desc: {
            'zh-CN': '单选框配置项',
            'en-US': ''
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-operation-column#operation-column-radio-config',
          mfDemo: ''
        },
        {
          name: 'remote-filter',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '所有列是否使用服务端筛选，如果设置为 true 则不会对数据进行处理',
            'en-US':
              'Whether to use server filtering for all columns. If this parameter is set to true, data will not be processed.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-filter#filter-server-filter',
          mfDemo: ''
        },
        {
          name: 'remote-sort',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否将服务端的全部数据进行排序。默认为 false 不进行服务端排序',
            'en-US':
              'Whether to sort all data on the server. The default value is false. The server-side sorting is not performed.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-sort#sort-server-sort',
          mfDemo: ''
        },
        {
          name: 'render-empty',
          type: '() => string | VNode',
          defaultValue: '',
          desc: {
            'zh-CN': '空数据渲染',
            'en-US': 'Render empty data'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-empty#empty-empty-data-tip',
          mfDemo: ''
        },
        {
          name: 'renderFooter',
          type: 'Function',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义渲染表尾',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'resizable',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '设置是否允许调整列宽',
            'en-US': 'Set whether to allow column width adjustment'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-size#size-resize-column-width',
          mfDemo: ''
        },
        {
          name: 'IResizableConfig',
          typeAnchorName: 'IResizableConfig',
          type: 'IResizableConfig',
          defaultValue: '',
          metaData: {
            new: '3.19.0'
          },
          desc: {
            'zh-CN': '设置列宽拖拽参数',
            'en-US': 'Set column width drag parameters'
          },
          mode: ['pc'],
          pcDemo: 'grid-size#size-resizable-config',
          mfDemo: ''
        },
        {
          name: 'row-class-name',
          typeAnchorName: 'IClassNameArgs',
          type: 'string | (args: IClassNameArgs) => string',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义表格行类名，用于自定义表格的行样式的场景。可以直接设置字符串类名，也可以是用函数',
            'en-US':
              'User-defined table row class name, which is used in the scenario where the row style of the table is customized. You can set the string class name directly or use the Function.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-custom-style#custom-style-body-style',
          mfDemo: ''
        },
        {
          name: 'row-group',
          typeAnchorName: 'IRowGroup',
          type: 'IRowGroup',
          defaultValue: '',
          desc: {
            'zh-CN': 'row-group 属性可以配置行分组，行分组会将具有相同值的列进行分组展示',
            'en-US':
              'The row group attribute can be configured. Columns with the same value are displayed in a row group.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-row-grouping#row-grouping-row-grouping',
          mfDemo: ''
        },
        {
          name: 'row-id',
          type: 'string',
          defaultValue: "'_RID'",
          desc: {
            'zh-CN': '自定义行数据唯一主键的字段名（行数据必须要有唯一主键，默认自动生成）',
            'en-US':
              'Field name of the unique primary key of the customized row data (The row data must have a unique primary key, which is automatically generated by default)'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-operation-column#operation-column-grid-pager-reserve',
          mfDemo: ''
        },
        {
          name: 'row-key',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '是否需要为每一行的 VNode 设置 key 属性（非特殊情况下没必要设置）',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'row-span',
          type: '{ field: string }[]',
          defaultValue: '',
          desc: {
            'zh-CN': '设置行合并,该属性仅适用于普通表格，不可与 tree-config 同时使用',
            'en-US':
              'Set row combination. This attribute applies only to common tables and cannot be used together with tree-config.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-span#span-row-span-easy',
          mfDemo: ''
        },
        {
          name: 'save-data',
          typeAnchorName: 'IDataHandler',
          type: 'IDataHandler',
          defaultValue: '',
          desc: {
            'zh-CN': '服务端数据保存方法',
            'en-US': 'Method of saving server data'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-toolbar#toolbar-save-data',
          mfDemo: ''
        },
        {
          name: 'scroll-load',
          type: 'Object',
          defaultValue: '',
          desc: {
            'zh-CN': '滚动加载配置',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'select-config',
          typeAnchorName: 'ISelectConfig',
          type: 'ISelectConfig',
          defaultValue: '',
          desc: {
            'zh-CN': '复选框配置项',
            'en-US': ''
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-operation-column#operation-column-selection-config',
          mfDemo: ''
        },
        {
          name: 'seq-serial',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '设置行序号是否连续，开启分页时有效, seqSerial 当 showSeq 为 true 时有效',
            'en-US':
              'Whether to set the row sequence number consecutive. This parameter is valid only when showSeq is set to true.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-pager#pager-inner-pager',
          mfDemo: ''
        },
        {
          name: 'show-footer',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否显示表尾合计',
            'en-US': 'Display the total at the end of the table'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-footer#footer-footer-summation-empty',
          mfDemo: ''
        },
        {
          name: 'show-header',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否显示表头',
            'en-US': 'Whether to display the table header'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-header#header-hide-grid-header',
          mfDemo: ''
        },
        {
          name: 'show-header-overflow',
          type: "boolean | 'ellipsis' | 'tooltip' | 'title'",
          defaultValue: '',
          desc: {
            'zh-CN':
              '设置表头所有内容过长时显示为省略号；该属性的可选值为 ellipsis（只显示省略号）,title（并且显示为原生 title）,tooltip（并且显示为 tooltip 提示）',
            'en-US':
              'Sets the display of all contents in the table header as ellipsis if the length is too long. The optional values for this property are ellipsis (only the ellipsis is displayed), title (and the native title is displayed), and tooltip (and tooltip is displayed)'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-tip#tip-column-header-tip',
          mfDemo: ''
        },
        {
          name: 'show-overflow',
          type: "boolean | 'ellipsis' | 'tooltip' | 'title'",
          defaultValue: '',
          desc: {
            'zh-CN':
              '设置所有内容过长时显示为省略号（如果是固定列建议设置该值，提升渲染速度）；该属性的可选值为 ellipsis（只显示省略号）,title（并且显示为原生 title）,tooltip（并且显示为 tooltip 提示）',
            'en-US':
              'Set the display of all content as ellipsis when the content is too long. (If the column is fixed, you are advised to set this parameter to improve the rendering speed.) The optional values for this property are ellipsis (only the ellipsis is displayed), title (and the native title is displayed), tooltip (and the tooltip prompt is displayed)'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-tip#tip-cell-tip',
          mfDemo: ''
        },
        {
          name: 'show-save-msg',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '切换分页时有未保存的数据时是否进行提示',
            'en-US': 'Whether to display a prompt when there is unsaved data during page switching.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-pager#pager-show-save-msg',
          mfDemo: ''
        },
        {
          name: 'size',
          type: "'medium' | 'small' | 'mini'",
          defaultValue: '',
          desc: {
            'zh-CN': '表格的尺寸',
            'en-US': 'Table size; The options of this attribute are medium, small, and mini'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-size#size-grid-size',
          mfDemo: ''
        },
        {
          name: 'sort-config',
          typeAnchorName: 'ISortConfig',
          type: 'ISortConfig',
          defaultValue: '',
          desc: {
            'zh-CN': '排序配置项',
            'en-US': 'Sort configuration items'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-sort#sort-default-sort',
          mfDemo: ''
        },
        {
          name: 'sort-method',
          typeAnchorName: 'IRow',
          type: '(row1: IRow, row2: IRow)=> boolean',
          defaultValue: '',
          desc: {
            'zh-CN':
              '自定义所有列的排序方法，当触发排序时会调用该函数返回排序后的结果；自定义排序方法，类似原生的sort排序',
            'en-US':
              'Customize the sorting method of all columns. When sorting is triggered, the function is invoked to return the sorting result. User-defined sorting method, similar to the native sort sorting method'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-sort#sort-custom-sort',
          mfDemo: ''
        },
        {
          name: 'sortable',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '设置是否允许列数据排序。默认为 true 可排序',
            'en-US': 'Whether to allow column data sorting. The default value is true, which can be sorted.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-sort#sort-default-sort',
          mfDemo: ''
        },
        {
          name: 'span-method',
          typeAnchorName: 'ISpanMethodArgs',
          type: '(args: ISpanMethodArgs) => { rowspan: number, colspan: number }',
          defaultValue: '{ rowspan: 1, colspan: 1 }',
          desc: {
            'zh-CN': '合并行或列，该函数返回计算后的值',
            'en-US': 'Consolidate rows or columns. This function returns the calculated value.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-span#span-row-span',
          mfDemo: ''
        },
        {
          name: 'start-index',
          type: 'number',
          defaultValue: '0',
          desc: {
            'zh-CN': '只对 type=index 的列有效，动态索引的起始值',
            'en-US':
              'This parameter is valid only for columns whose type is index. The value of this parameter is the start value of the dynamic index.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-serial-column#serial-column-start-index',
          mfDemo: ''
        },
        {
          name: 'stripe',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否带有斑马纹',
            'en-US': 'Zebra pattern'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-appearance-settings#appearance-settings-stripe',
          mfDemo: ''
        },
        {
          name: 'summary-config',
          typeAnchorName: 'ISummaryConfig',
          type: 'ISummaryConfig',
          defaultValue: '',
          desc: {
            'zh-CN': '表格统计功能配置项',
            'en-US': 'Configuration item of the table statistics function'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-footer#footer-configuration-summary',
          mfDemo: ''
        },
        {
          name: 'sync-resize',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '响应式跟随某个属性（对于通过某个属性来控制显示/隐藏切换的场景可能会用到）',
            'en-US':
              'Responsively follow an attribute. (This may be used in scenarios where the display/hide switchover is controlled by an attribute)'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: '',
          mfDemo: ''
        },
        {
          name: 'toolbar',
          typeAnchorName: 'IToolbarConfig',
          type: 'IToolbarConfig',
          defaultValue: '',
          desc: {
            'zh-CN': '工具栏配置',
            'en-US': 'Toolbar configuration'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-toolbar#toolbar-toolbar-op-config',
          mfDemo: ''
        },
        {
          name: 'tooltip-config',
          type: 'IToolTipConfig',
          typeAnchorName: 'IToolTipConfig',
          defaultValue: '',
          desc: {
            'zh-CN': 'Grid 内置 tooltip 配置项，请参考 Tooltip 组件属性说明',
            'en-US':
              'Configuration item of the built-in tooltip of the Grid. For details, see the Tooltip Attribute Description.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-tip#tip-cell-tip-config',
          mfDemo: ''
        },
        {
          name: 'tree-config',
          typeAnchorName: 'ITreeConfig',
          type: 'ITreeConfig',
          defaultValue: '',
          desc: {
            'zh-CN': '树形结构配置项',
            'en-US': 'tree structure configuration item'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-tree-table#tree-table-tree-grid-base',
          mfDemo: ''
        },
        {
          name: 'valid-config',
          typeAnchorName: 'IValidConfig',
          type: 'IValidConfig',
          defaultValue: '',
          desc: {
            'zh-CN': '校验配置项',
            'en-US': 'Check configuration items'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-validation#validation-bubbling',
          mfDemo: ''
        }
      ],
      events: [
        {
          name: 'after-refresh-column',
          type: '()=> void',
          defaultValue: '',
          desc: {
            'zh-CN': '在新增或者删除列后，列配置是异步更新的，列配置刷新后触发的回调',
            'en-US':
              'After adding or deleting a column, the column configuration is updated asynchronously, and the callback is triggered after the column configuration is refreshed.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-dynamically-columns#column-switching-scroll',
          mfDemo: ''
        },
        {
          name: 'before-page-change',
          typeAnchorName: 'IBeforePageChangeArgs',
          type: '(args: IBeforePageChangeArgs)=> void',
          defaultValue: '',
          desc: {
            'zh-CN': '在打开页面改变时的前置处理特性，并且进行翻页操作或者改变页大小操作时触发',
            'en-US': 'triggered when the page is changed and the page is turned or the page size is changed'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-event#event-page-before-change-event',
          mfDemo: ''
        },
        {
          name: 'BeforeEdit',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '点击单元格，显示编辑组件前触发的事件',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'cancel-page-change',
          type: '($grid: Component)=> void',
          defaultValue: '',
          desc: {
            'zh-CN': '切换分页时有未保存的数据时，提示框确定按钮事件',
            'en-US':
              'When there is unsaved data during pagination switchover, a dialog box is displayed to determine the button event.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-pager#pager-show-save-msg',
          mfDemo: ''
        },
        {
          name: 'cell-click',
          typeAnchorName: 'ICellClickArgs',
          type: '(args: ICellClickArgs, event: Event)=> void',
          defaultValue: '',
          desc: {
            'zh-CN': '单元格被点击时会触发该事件',
            'en-US': 'This event is triggered when a cell is clicked'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-event#event-click-event',
          mfDemo: ''
        },
        {
          name: 'cell-context-menu',
          typeAnchorName: 'ICellContextMenuArgs',
          type: '(args: ICellContextMenuArgs)=> void',
          defaultValue: '',
          desc: {
            'zh-CN': '单元格被鼠标右键点击时触发该事件',
            'en-US': 'This event is triggered when a cell is right-clicked'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-context-menu#context-menu-cell-menu',
          mfDemo: ''
        },
        {
          name: 'cell-dblclick',
          typeAnchorName: 'ICellArgs',
          type: '(args: ICellArgs, event: Event)=> void',
          defaultValue: '',
          desc: {
            'zh-CN': '单元格被双击时会触发该事件',
            'en-US': 'This event is triggered when a cell is double-clicked'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-event#event-click-event',
          mfDemo: ''
        },
        {
          name: 'cell-mouseenter',
          typeAnchorName: 'ICellArgs',
          type: '(args: ICellArgs, event: Event)=> void',
          defaultValue: '',
          desc: {
            'zh-CN': '当单元格 hover 进入时会触发该事件',
            'en-US': 'This event is triggered when the cell hovers'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-event#event-cell-mouse-event',
          mfDemo: ''
        },
        {
          name: 'cell-mouseleave',
          typeAnchorName: 'ICellArgs',
          type: '(args: ICellArgs, event: Event)=> void',
          defaultValue: '',
          desc: {
            'zh-CN': '当单元格 hover 退出时会触发该事件',
            'en-US': 'This event is triggered when the cell hovers.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-event#event-cell-mouse-event',
          mfDemo: ''
        },
        {
          name: 'context-menu-click',
          typeAnchorName: 'IContextMenuArgs',
          type: '(args: IContextMenuArgs, event: Event)=> void',
          defaultValue: '',
          desc: {
            'zh-CN': '只对 context-menu 配置时有效，当点击快捷菜单时会触发该事件',
            'en-US':
              'This event is valid only when context-menu is configured. This event is triggered when the shortcut menu is clicked'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-event#event-context-menu-event',
          mfDemo: ''
        },
        {
          name: 'current-change',
          typeAnchorName: 'ICurrentChangeArgs',
          type: '(args: ICurrentChangeArgs, event: Event)=> void',
          defaultValue: '',
          desc: {
            'zh-CN': '只对 highlightCurrentRow 有效，当手动选中行并且值发生改变时触发的事件',
            'en-US':
              'This parameter is valid only for highlightCurrentRow. This parameter is triggered when a row is manually selected and the value changes'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-highlight#highlight-highlight-cell',
          mfDemo: ''
        },
        {
          name: 'edit-actived',
          typeAnchorName: 'IEditActivedArgs',
          type: '(args: IEditActivedArgs, event: Event)=> void',
          defaultValue: '',
          desc: {
            'zh-CN': '单元格被激活编辑时会触发该事件',
            'en-US': 'This event is triggered when a cell is activated for editing'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-event#event-edit-event',
          mfDemo: ''
        },
        {
          name: 'edit-closed',
          typeAnchorName: 'IEditClosedArgs',
          type: '(args: IEditClosedArgs, event: Event)=> void',
          defaultValue: '',
          desc: {
            'zh-CN': '单元格编辑状态下被关闭时会触发该事件',
            'en-US': 'This event is triggered when a cell is closed in the editing state'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-event#event-edit-event',
          mfDemo: ''
        },
        {
          name: 'edit-disabled',
          typeAnchorName: 'IEditDisabledArgs',
          type: '(args: IEditDisabledArgs, event: Event)=> void',
          defaultValue: '',
          desc: {
            'zh-CN': '当单元格激活时如果是禁用状态时会触发该事件',
            'en-US': 'This event is triggered when a cell is activated and is disabled'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-event#event-edit-event',
          mfDemo: ''
        },
        {
          name: 'filter-change',
          typeAnchorName: 'IFilterChangeArgs',
          type: '(args: IFilterChangeArgs)=> void',
          defaultValue: '',
          desc: {
            'zh-CN': '当筛选条件发生变化时会触发该事件',
            'en-US': 'This event is triggered when the filter condition changes'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-filter#filter-server-filter',
          mfDemo: ''
        },
        {
          name: 'footer-cell-click',
          typeAnchorName: 'IFooterCellClickArgs',
          type: '(args: IFooterCellClickArgs, event: Event)=> void',
          defaultValue: '',
          desc: {
            'zh-CN': '表尾单元格被点击时会触发该事件',
            'en-US': 'This event is triggered when a cell at the end of a table is clicked'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-event#event-click-event',
          mfDemo: ''
        },
        {
          name: 'footer-cell-context-menu',
          typeAnchorName: 'IContextMenuArgs',
          type: '(args: IContextMenuArgs, event: Event)=> void',
          defaultValue: '',
          desc: {
            'zh-CN': '表尾单元格被鼠标右键点击时触发该事件',
            'en-US': 'This event is triggered when a cell at the end of the table is right-clicked'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-event#event-context-menu-event',
          mfDemo: ''
        },
        {
          name: 'footer-cell-dblclick',
          typeAnchorName: 'IFooterCellDblClickArgs',
          type: '(args: IFooterCellDblClickArgs, event: Event)=> void',
          defaultValue: '',
          desc: {
            'zh-CN': '表尾单元格被双击时会触发该事件',
            'en-US': 'This event is triggered when a cell at the end of a table is double-clicked'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-event#event-click-event',
          mfDemo: ''
        },
        {
          name: 'fullscreen',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '全屏时或关闭全屏时触发的时间',
            'en-US': 'Time triggered when full screen is enabled or disabled'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-toolbar#toolbar-grid-full-screen',
          mfDemo: ''
        },
        {
          name: 'header-cell-click',
          typeAnchorName: 'IHeaderCellClickArgs',
          type: '(args: IHeaderCellClickArgs, event: Event)=> void',
          defaultValue: '',
          desc: {
            'zh-CN': '表头单元格被点击时会触发该事件',
            'en-US': 'This event is triggered when a cell in the table header is clicked'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-event#event-click-event',
          mfDemo: ''
        },
        {
          name: 'header-cell-context-menu',
          typeAnchorName: 'IContextMenuArgs',
          type: '(args: IContextMenuArgs, event: Event)=> void',
          defaultValue: '',
          desc: {
            'zh-CN': '表头单元格被鼠标右键点击时触发该事件',
            'en-US': 'This event is triggered when a cell in the table header is right-clicked'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-event#event-context-menu-event',
          mfDemo: ''
        },
        {
          name: 'header-cell-dblclick',
          typeAnchorName: 'IHeaderCellDblClickArgs',
          type: '(args: IHeaderCellDblClickArgs, event: Event)=> void',
          defaultValue: '',
          desc: {
            'zh-CN': '表头单元格被双击时会触发该事件',
            'en-US': 'This event is triggered when a table header cell is double-clicked'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-event#event-click-event',
          mfDemo: ''
        },
        {
          name: 'page-change',
          typeAnchorName: 'IPageChangeArgs',
          type: '(args: IPageChangeArgs)=> void',
          defaultValue: '',
          desc: {
            'zh-CN': '只对 pager-config 配置时有效，分页发生改变时会触发该事件 ',
            'en-US':
              'This event is valid only when pager-config is configured. This event is triggered when the paging is changed'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-event#event-page-change-event',
          mfDemo: ''
        },
        {
          name: 'radio-change',
          type: '($table: Component, event: Event)=> void',
          defaultValue: '',
          desc: {
            'zh-CN': '只对 type=radio 有效，当手动勾选并且值发生改变时触发的事件',
            'en-US':
              'This parameter is valid only for the event whose type is radio. It is triggered when the value is manually selected and the value changes'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-event#event-radio-change-event',
          mfDemo: ''
        },
        {
          name: 'resizable-change',
          typeAnchorName: 'IResizableChangeArgs',
          type: '(args: IResizableChangeArgs)=> void',
          defaultValue: '',
          desc: {
            'zh-CN': '当列宽拖动发生变化时会触发该事件',
            'en-US': 'This event is triggered when the column width changes'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-event#event-resizable-change-event',
          mfDemo: ''
        },
        {
          name: 'scroll',
          typeAnchorName: 'IScrollArgs',
          type: '(args: IScrollArgs)=> void',
          defaultValue: '',
          desc: {
            'zh-CN': '表格滚动时会触发该事件',
            'en-US': 'This event is triggered when the table scrolls'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-event#event-grid-scroll-event',
          mfDemo: ''
        },
        {
          name: 'select-all',
          typeAnchorName: 'ISelectAllArgs',
          type: '(args: ISelectAllArgs, event: Event)=> void',
          defaultValue: '',
          desc: {
            'zh-CN': '只对 type=selection 有效，当手动勾选全选时触发的事件',
            'en-US': 'This event is valid only when type=selection and is triggered when all are selected manually'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-event#event-select-event',
          mfDemo: ''
        },
        {
          name: 'select-change',
          type: '(args: object, event: Event)=> void',
          defaultValue: '',
          desc: {
            'zh-CN': '只对 type=selection 有效，当手动勾选并且值发生改变时触发的事件',
            'en-US':
              'This event is valid only for type=selection. It is triggered when the value is manually selected and the value changes'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-event#event-select-event',
          mfDemo: ''
        },
        {
          name: 'sort-change',
          typeAnchorName: 'ISortChangeArgs',
          type: '(args: ISortChangeArgs)=> void',
          defaultValue: '',
          desc: {
            'zh-CN': '点击列头，执行数据排序前触发的事件',
            'en-US': 'Event triggered before data sorting is performed when a column header is clicked'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-sort#sort-server-sort',
          mfDemo: ''
        },
        {
          name: 'toggle-expand-change',
          typeAnchorName: 'IToggleExpandChangeArgs',
          type: '(args: IToggleExpandChangeArgs, event: Event)=> void',
          defaultValue: '',
          desc: {
            'zh-CN': '当行展开或收起时会触发该事件',
            'en-US': 'This event is triggered when a row is expanded or closed'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-event#event-toggle-expand-change-event',
          mfDemo: ''
        },
        {
          name: 'toggle-group-change',
          type: '(row: IRow) => void',
          defaultValue: '',
          meta: {
            stable: '3.17.0'
          },
          desc: {
            'zh-CN': '当分组的展开和收起时会触发该事件',
            'en-US': 'This event is triggered when the group is expanded and collapsed.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-row-grouping#row-grouping-row-group-render',
          mfDemo: ''
        },
        {
          name: 'toggle-tree-change',
          typeAnchorName: 'IToggleTreeChangeArgs',
          type: '(args: IToggleTreeChangeArgs, event: Event)=> void',
          defaultValue: '',
          desc: {
            'zh-CN': '当树节点展开或收起时会触发该事件',
            'en-US': 'This event is triggered when a tree node is expanded or closed'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-event#event-toggle-tree-change-event',
          mfDemo: ''
        },
        {
          name: 'toolbar-button-click',
          typeAnchorName: 'IToolbarButtonClickArgs',
          type: '(args: IToolbarButtonClickArgs, event: Event)=> void',
          defaultValue: '',
          desc: {
            'zh-CN': '只对 toolbar.buttons 配置时有效，当工具栏的按钮被点击时会后触发该事件',
            'en-US':
              'This event is valid only when toolbar.buttons are configured. This event is triggered when a toolbar button is clicked'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-event#event-toolbar-button-click-event',
          mfDemo: ''
        },
        {
          name: 'valid-error',
          typeAnchorName: 'IValidErrorArgs',
          type: '(args: IValidErrorArgs)=> void',
          defaultValue: '',
          desc: {
            'zh-CN': '当数据校验不通过时会触发该事件',
            'en-US': 'This event is triggered when data verification fails'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-event#event-valid-error-event',
          mfDemo: ''
        }
      ],
      methods: [
        {
          name: 'clearActived',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '手动清除单元格激活状态',
            'en-US': 'Manually clear cell activation status'
          },
          mode: ['pc'],
          pcDemo: 'grid-edit#edit-has-row-change'
        },
        {
          name: 'clearActived()',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '手动清除单元格激活状态',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'clearAll',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN':
              '手动清除表格所有条件，还原到初始状态（对于增删改查的场景中可能会用到，比如在数据保存之后清除表格缓存）',
            'en-US':
              'Manually clear all conditions in the table and restore the table to the initial state. (This may be used in the scenario of adding, deleting, modifying, and querying, for example, clearing the table cache after data is saved.)'
          },
          mode: ['pc'],
          pcDemo: 'grid-toolbar#toolbar-insert-delete-update'
        },
        {
          name: 'clearAll()',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN':
              '手动清除表格所有条件，还原到初始状态（对于增删改查的场景中可能会用到，比如在数据保存之后清除表格缓存）',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'clearCurrentColumn',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '用于当前列，手动清空当前高亮的状态',
            'en-US': 'This command is used to manually clear the current highlighted status.'
          },
          mode: ['pc'],
          pcDemo: 'grid-highlight#highlight-highlight-current-column'
        },
        {
          name: 'clearCurrentColumn()',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '用于当前列，手动清空当前高亮的状态',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'clearCurrentRow',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '用于当前行，手动清空当前高亮的状态',
            'en-US': 'For the current line. Manually clear the highlighted status.'
          },
          mode: ['pc'],
          pcDemo: 'grid-highlight#highlight-highlight-current-row'
        },
        {
          name: 'clearCurrentRow()',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '用于当前行，手动清空当前高亮的状态',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'clearData',
          typeAnchorName: 'IRow',
          type: '(rows?: IRow | IRow[], field?: string)=> void',
          defaultValue: '',
          desc: {
            'zh-CN':
              '手动清空单元格内容，如果不传参数，则清空整个表格内容，如果传了行则清空指定行内容，如果传了指定字段，则清空该字段内容',
            'en-US':
              'Manually clear the cell content. If no parameter is transferred, the entire table content is cleared. If a row is transferred, the specified row content is cleared. If a specified field is transferred, the field content is cleared.'
          },
          mode: ['pc'],
          pcDemo: 'grid-toolbar#toolbar-clear-data'
        },
        {
          name: 'clearData(rows, field)',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN':
              '手动清空单元格内容，如果不传参数，则清空整个表格内容，如果传了行则清空指定行内容，如果传了指定字段，则清空该字段内容',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'clearFilter',
          type: '(field: string)=> void',
          defaultValue: '',
          desc: {
            'zh-CN': '手动清空筛选条件（如果不传 field 则清空所有筛选条件），数据会恢复成未筛选的状态',
            'en-US':
              'Manually clear the filter criteria (if field is not transferred, all filter criteria are cleared). Data will be restored to the unfiltered state.'
          },
          mode: ['pc'],
          pcDemo: 'grid-filter#filter-default-filter'
        },
        {
          name: 'clearFilter(field)',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '手动清空筛选条件（如果不传 field 则清空所有筛选条件），数据会恢复成未筛选的状态',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'clearRadioRow',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '用于单选行，手动清空用户的选择',
            'en-US': 'This is used to select a single row. Manually clear the user selection.'
          },
          mode: ['pc'],
          pcDemo: 'grid-operation-column#operation-column-clear-and-set-radio-row'
        },
        {
          name: 'clearRadioRow()',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '用于单选行，手动清空用户的选择',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'clearRowExpand',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '手动清空展开行状态，数据会恢复成未展开的状态',
            'en-US': 'Manually clear the expanded row status. The data will be restored to the unexpanded state.'
          },
          mode: ['pc'],
          pcDemo: 'grid-expand#expand-set-row-expansion'
        },
        {
          name: 'clearRowExpand()',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '手动清空展开行状态，数据会恢复成未展开的状态',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'clearScroll',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '手动清除滚动相关信息，还原到初始状态',
            'en-US': 'Manually clear scrolling information and restore the original state.'
          },
          mode: ['pc'],
          pcDemo: 'grid-size#size-max-min-grid-height'
        },
        {
          name: 'clearScroll()',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '手动清除滚动相关信息，还原到初始状态',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'clearSelected',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '手动清除单元格选中状态',
            'en-US': 'Clear cell selection manually'
          },
          mode: ['pc'],
          pcDemo: 'grid-highlight#highlight-highlight-cell'
        },
        {
          name: 'clearSelected()',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '手动清除单元格选中状态',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'clearSelection',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '用于多选行，手动清空用户的选择',
            'en-US': 'For selecting multiple lines. Manually clear the user selection.'
          },
          mode: ['pc'],
          pcDemo: 'grid-operation-column#operation-column-selection-operation'
        },
        {
          name: 'clearSelection()',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '用于多选行，手动清空用户的选择',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'clearSort',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '手动清空排序条件，数据会恢复成未排序的状态',
            'en-US': 'Manually clear the sorting conditions. Data will be restored to the unsorted state.'
          },
          mode: ['pc'],
          pcDemo: 'grid-sort#sort-default-sort'
        },
        {
          name: 'clearSort()',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '手动清空排序条件，数据会恢复成未排序的状态',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'clearTreeExpand',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '手动清空树形节点的展开状态，数据会恢复成未展开的状态',
            'en-US':
              'Manually clear the expanded state of the tree node. The data will be restored to the un-folded state.'
          },
          mode: ['pc'],
          pcDemo: 'grid-tree-table#tree-table-tree-grid-insert-delete-update'
        },
        {
          name: 'clearTreeExpand()',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '手动清空树形节点的展开状态，数据会恢复成未展开的状态',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'closeFilter',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '手动关闭筛选面板（某些特殊场景可能会用到）',
            'en-US': 'Manually close the filter panel (which may be used in some special scenarios)'
          },
          mode: ['pc'],
          pcDemo: 'grid-filter#filter-default-filter'
        },
        {
          name: 'closeFilter()',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '手动关闭筛选面板（某些特殊场景可能会用到）',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'closeMenu',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '手动关闭快捷菜单（某些特殊场景可能会用到）',
            'en-US': 'Manually close the shortcut menu (which may be used in some special scenarios)'
          },
          mode: ['pc'],
          pcDemo: 'grid-context-menu#context-menu-cell-menu'
        },
        {
          name: 'closeMenu()',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '手动关闭快捷菜单（某些特殊场景可能会用到）',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'createData(records)',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '创建 data 对象（对于某些特殊场景可能会用到，会自动对数据的字段名进行检测，如果不存在就自动定义）',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'createRow',
          typeAnchorName: 'IRow',
          type: '(records: IRow | IRow[])=> Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '创建 IRow | IRows 对象（对于某些特殊场景需要对数据进行手动插入时可能会用到）',
            'en-US':
              'Create a IRow | IRows object. (This method may be used when data needs to be manually inserted in some special scenarios.)'
          },
          mode: ['pc'],
          pcDemo: 'grid-tree-table#tree-table-tree-grid-insert-delete-update'
        },
        {
          name: 'createRow(records)',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '创建 Row|Rows 对象（对于某些特殊场景需要对数据进行手动插入时可能会用到）',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'exportCsv',
          typeAnchorName: 'IExportCsvOptions',
          type: '(options: IExportCsvOptions)=> void',
          defaultValue: '',
          desc: {
            'zh-CN': '将表格数据导出为 .csv 文件（支持所有主流的浏览器，不支持合并行或列）',
            'en-US':
              'Exports table data to a .csv file. (All mainstream browsers are supported. IRows or columns cannot be combined.)'
          },
          mode: ['pc'],
          pcDemo: 'grid-import-export#import-export-export-excel'
        },
        {
          name: 'exportCsv(options)',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '将表格数据导出为 .csv 文件（支持所有主流的浏览器，不支持合并行或列）',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'fullValidate',
          typeAnchorName: 'IRow',
          type: '(rows: IRow[], callback: () => void)=> Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '表格完整校验函数，和 validate 的区别就是会对全量数据的所有规则进行完整校验',
            'en-US':
              'Complete table verification function. The difference between this function and validate is that all rules of full data are verified.'
          },
          mode: ['pc'],
          pcDemo: 'grid-validation#validation-before-submit-validation'
        },
        {
          name: 'fullValidate(rows, callback)',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '表格完整校验函数，和 validate 的区别就是会对全量数据的所有规则进行完整校验',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'getActiveRow',
          typeAnchorName: 'IRow',
          type: '() => IRow',
          defaultValue: '',
          desc: {
            'zh-CN': '获取已激活的行数据',
            'en-US': 'Obtain activated row data'
          },
          mode: ['pc'],
          pcDemo: 'grid-edit#edit-trigger-mode-hm-editing'
        },
        {
          name: 'getActiveRow()',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '获取已激活的行数据',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'getColumnByField',
          typeAnchorName: 'IColumnConfig',
          type: '(field: string)=> IColumnConfig',
          defaultValue: '',
          desc: {
            'zh-CN': '根据列的字段名获取列',
            'en-US': 'Obtain columns based on column field names.'
          },
          mode: ['pc'],
          pcDemo: 'grid-large-data#large-data-scroll-to'
        },
        {
          name: 'getColumnByField(field)',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '根据列的字段名获取列',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'getColumnById',
          typeAnchorName: 'IColumnConfig',
          type: '(colid: string)=> IColumnConfig',
          defaultValue: '',
          desc: {
            'zh-CN': '根据列的唯一主键获取列',
            'en-US': 'Obtain a column based on the unique primary key of the column.'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'getColumnById(colid)',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '根据列的唯一主键获取列',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'getColumnIndex',
          typeAnchorName: 'IColumnConfig',
          type: '(column: IColumnConfig)=> number',
          defaultValue: '',
          desc: {
            'zh-CN': '根据 column 获取相对于 columns 中的索引',
            'en-US': 'Obtain the index relative to the column based on the column.'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'getColumnIndex(column)',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '根据 column 获取相对于 columns 中的索引',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'getColumnNode',
          typeAnchorName: 'IColumnConfig',
          type: '(cell: HTMLElement)=> IColumnConfig',
          defaultValue: '',
          desc: {
            'zh-CN': '根据 th/td 元素获取对应的 column 信息',
            'en-US': 'Obtain the column information based on the th/td element.'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'getColumnNode(cell)',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '根据 th/td 元素获取对应的 column 信息',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'getColumns',
          typeAnchorName: 'IColumnConfig',
          type: '(columnIndex?: number)=> IColumnConfig | IColumnConfig[]',
          defaultValue: '',
          desc: {
            'zh-CN': '获取表格的可视列，也可以指定索引获取列',
            'en-US': 'Obtains the visual column of the table or specifies the index to obtain the column.'
          },
          mode: ['pc'],
          pcDemo: 'grid-custom#custom-server-storage'
        },
        {
          name: 'getColumns(columnIndex)',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '获取表格的可视列，也可以指定索引获取列',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'getCurrentRow',
          typeAnchorName: 'IRow',
          type: '() => IRow',
          defaultValue: '',
          desc: {
            'zh-CN': '用于当前行，获取当前行的数据',
            'en-US': 'This is used for the current row to obtain the data of the current row.'
          },
          mode: ['pc'],
          pcDemo: 'grid-event#event-get-row-method'
        },
        {
          name: 'getCurrentRow()',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '用于当前行，获取当前行的数据',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'getData',
          typeAnchorName: 'IRow',
          type: '(rowIndex?: number)=> IRow | IRow[]',
          defaultValue: '',
          desc: {
            'zh-CN': '获取数据，和 data 的行为一致，也可以指定索引获取数据',
            'en-US':
              'The behavior of obtaining data is the same as that of data. You can also specify an index to obtain data.'
          },
          mode: ['pc'],
          pcDemo: 'grid-toolbar#toolbar-clear-data'
        },
        {
          name: 'getData(rowIndex)',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '获取数据，和 data 的行为一致，也可以指定索引获取数据',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'getInsertRecords',
          typeAnchorName: 'IRow',
          type: '() => IRow[]',
          defaultValue: '',
          desc: {
            'zh-CN': '获取新增的数据',
            'en-US': 'Obtain the new data'
          },
          mode: ['pc'],
          pcDemo: 'grid-toolbar#toolbar-insert-delete-update'
        },
        {
          name: 'getInsertRecords()',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '获取新增的数据',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'getRadioRow',
          typeAnchorName: 'IRow',
          type: '() => IRow',
          defaultValue: '',
          desc: {
            'zh-CN': '用于单选行，获取当已选中的数据',
            'en-US': 'This command is used to select a single row to obtain the selected data.'
          },
          mode: ['pc'],
          pcDemo: 'grid-event#event-get-row-method'
        },
        {
          name: 'getRadioRow()',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '用于单选行，获取当已选中的数据',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'getRecordset',
          typeAnchorName: 'IRecordset',
          type: '() => IRecordset',
          defaultValue: '',
          desc: {
            'zh-CN': '获取表格数据集（获取新增、删除、更改的数据，对于增删改查表格非常方便）',
            'en-US':
              'Obtaining a table data set (Obtain the data of adding, deleting, and changing. It is very convenient for adding, deleting, modifying, and querying tables.)'
          },
          mode: ['pc'],
          pcDemo: 'grid-toolbar#toolbar-insert-delete-update'
        },
        {
          name: 'getRecordset()',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '获取表格数据集（获取新增、删除、更改的数据，对于增删改查表格非常方便）',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'getRemoveRecords',
          typeAnchorName: 'IRow',
          type: '() => IRow[]',
          defaultValue: '',
          desc: {
            'zh-CN': '获取已删除的数据',
            'en-US': 'Obtain deleted data'
          },
          mode: ['pc'],
          pcDemo: 'grid-toolbar#toolbar-insert-delete-update'
        },
        {
          name: 'getRemoveRecords()',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '获取已删除的数据',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'getRowById',
          typeAnchorName: 'IRow',
          type: '(rowid: string)=> IRow',
          defaultValue: '',
          desc: {
            'zh-CN': '根据行的唯一主键获取行',
            'en-US': 'Obtain a row based on the unique primary key of the row.'
          },
          mode: ['pc'],
          pcDemo: 'grid-event#event-get-row-method'
        },
        {
          name: 'getRowById(rowid)',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '根据行的唯一主键获取行',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'getRowIndex',
          typeAnchorName: 'IRow',
          type: '(row: IRow)=> number',
          defaultValue: '',
          desc: {
            'zh-CN': '根据 row 获取相对于 data 中的索引',
            'en-US': 'Obtains indexes relative to data based on rows.'
          },
          mode: ['pc'],
          pcDemo: 'grid-event#event-get-row-method'
        },
        {
          name: 'getRowIndex(row:Object)',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '根据 row 获取相对于 data 中的索引',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'getRowNode',
          typeAnchorName: 'IRow',
          type: '(tr: HTMLElement)=> IRow',
          defaultValue: '',
          desc: {
            'zh-CN': '根据 tr 元素获取对应的 row 信息',
            'en-US': 'Obtain row information based on the tr element.'
          },
          mode: ['pc'],
          pcDemo: 'grid-event#event-get-row-method'
        },
        {
          name: 'getRowNode(tr)',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '根据 tr 元素获取对应的 row 信息',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'getAllSelection',
          typeAnchorName: 'IRow',
          type: '() => IRow[]',
          meta: {
            stable: '3.19.0'
          },
          defaultValue: '',
          desc: {
            'zh-CN': '获取所有翻页中保存的已选中的数据',
            'en-US': 'This command is used to select multiple lines to obtain the selected data.'
          },
          mode: ['pc'],
          pcDemo: 'grid-operation-column#operation-column-grid-pager-reserve'
        },
        {
          name: 'getSelectRecords',
          typeAnchorName: 'IRow',
          type: '() => IRow[]',
          defaultValue: '',
          desc: {
            'zh-CN': '用于多选行，获取当前页已选中的数据',
            'en-US': 'This command is used to select multiple lines to obtain the selected data.'
          },
          mode: ['pc'],
          pcDemo: 'grid-toolbar#toolbar-insert-delete-update'
        },
        {
          name: 'getSelectRecords(notCopy)',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '用于多选行，获取已选中的数据',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'getTableColumn',
          typeAnchorName: 'IRow',
          type: '() => IRow[]',
          defaultValue: '',
          desc: {
            'zh-CN': '获取当前表格的列（完整的全量表头列、处理条件之后的全量表头列、当前渲染中的表头列）',
            'en-US':
              'Obtains columns in the current table. (full table header column, full table header column after processing condition, table header column in current rendering)'
          },
          mode: ['pc'],
          pcDemo: 'grid-custom#custom-hide-column'
        },
        {
          name: 'getTableColumn()',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '获取当前表格的列（完整的全量表头列、处理条件之后的全量表头列、当前渲染中的表头列）',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'getTableData',
          typeAnchorName: 'IRow',
          type: '() => IRow[]',
          defaultValue: '',
          desc: {
            'zh-CN':
              '获取当前表格的数据（完整的全量表体数据、处理条件之后的全量表体数据、当前渲染中的表体数据、当前渲染中的表尾数据）',
            'en-US':
              'Obtains data in the current table. (complete table body data, full table body data after processing conditions, table body data in the current rendering, table tail data in the current rendering)'
          },
          mode: ['pc'],
          pcDemo: 'grid-toolbar#toolbar-clear-data'
        },
        {
          name: 'getTableData()',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN':
              '获取当前表格的数据（完整的全量表体数据、处理条件之后的全量表体数据、当前渲染中的表体数据、当前渲染中的表尾数据）',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'getUpdateRecords',
          typeAnchorName: 'IRow',
          type: '() => IRow[]',
          defaultValue: '',
          desc: {
            'zh-CN': '获取已修改的数据',
            'en-US': 'Obtain modified data'
          },
          mode: ['pc'],
          pcDemo: 'grid-toolbar#toolbar-insert-delete-update'
        },
        {
          name: 'getUpdateRecords()',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '获取已修改的数据',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'handleFetch',
          type: '() => Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '触发表格的 fetch-data ',
            'en-US': 'Fetch-data of the trigger table'
          },
          mode: ['pc'],
          pcDemo: 'grid-data-source#data-source-request-service'
        },
        {
          name: 'handleFetch()',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '触发表格的fetch-data',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'hasActiveRow',
          typeAnchorName: 'IRow',
          type: '(row: IRow)=> boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '检查行是否已激活为编辑状态',
            'en-US': 'Check whether the row has been activated and is in the editing state.'
          },
          mode: ['pc'],
          pcDemo: 'grid-edit#edit-trigger-mode-hm-editing'
        },
        {
          name: 'hasActiveRow(row)',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '检查行是否已激活为编辑状态',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'hasRowChange',
          typeAnchorName: 'IRow',
          type: '(row: IRow, field: string)=> boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '检查行或列数据是否发生改变',
            'en-US': 'Check whether the row or column data is changed.'
          },
          mode: ['pc'],
          pcDemo: 'grid-edit#edit-has-row-change'
        },
        {
          name: 'hasRowChange(row, field)',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '检查行或列数据是否发生改变',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'hasRowExpand',
          typeAnchorName: 'IRow',
          type: '(row: IRow)=> boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '检查行是否已展开',
            'en-US': 'Check whether the row is expanded.'
          },
          mode: ['pc'],
          pcDemo: 'grid-expand#expand-has-row-expand'
        },
        {
          name: 'hasRowExpand(row)',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '检查行是否已展开',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'hasTreeExpand',
          typeAnchorName: 'IRow',
          type: '(row: IRow)=> boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '检查树节点是否已展开',
            'en-US': 'Check whether the tree node is expanded.'
          },
          mode: ['pc'],
          pcDemo: 'grid-tree-table#tree-table-has-tree-expand'
        },
        {
          name: 'hasTreeExpand(row)',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '检查树节点是否已展开',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'hideColumn',
          typeAnchorName: 'IColumnConfig',
          type: '(column: IColumnConfig)=> Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '隐藏指定列',
            'en-US': 'Hide a specified column.'
          },
          mode: ['pc'],
          pcDemo: 'grid-custom#custom-hide-column'
        },
        {
          name: 'hideColumn(column)',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '隐藏指定列',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'insert',
          typeAnchorName: 'IRow',
          type: '(records: IRow | IRow[])=> Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '在表格中新增数据；往表格插入数据，从第一行新增一行或多行新数据',
            'en-US':
              'Add data to the table.; Insert data into the table, add one or more rows of data from the first row'
          },
          mode: ['pc'],
          pcDemo: 'grid-toolbar#toolbar-insert-delete-update'
        },
        {
          name: 'insert(records)',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '在表格中新增数据',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'insertAt',
          typeAnchorName: 'IRow',
          type: '(records: IRow | IRow[], row: IRow | null | -1)=> Promise',
          defaultValue: '',
          desc: {
            'zh-CN':
              '往表格插入数据，从指定位置插入一行或多行；第二个参数：row 指定位置（不支持树表格）、null从第一行插入、-1 从最后插入',
            'en-US':
              'Inserts one or more rows into a table. Second parameter: row specified position (tree tables are not supported), null inserted from the first row, and –1 inserted from the last row'
          },
          mode: ['pc'],
          pcDemo: 'grid-toolbar#toolbar-insert-remove-rows'
        },
        {
          name: 'insertAt(records, row)',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN':
              '往表格插入数据，从指定位置插入一行或多行；第二个参数：row 指定位置（不支持树表格）、null从第一行插入、-1 从最后插入',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'loadColumn',
          typeAnchorName: 'IColumnConfig',
          type: '(columns: IColumnConfig[])=> Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '加载列配置（对于表格列需要重载、局部递增场景下可能会用到）',
            'en-US':
              'Load column configuration (This function may be used in the scenario where table columns need to be reloaded or partially incremented.)'
          },
          mode: ['pc'],
          pcDemo: 'grid-large-data#large-data-load-column'
        },
        {
          name: 'loadColumn(columns)',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '加载列配置（对于表格列需要重载、局部递增场景下可能会用到）',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'loadData',
          typeAnchorName: 'IRow',
          type: '(data: IRow[])=> Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '加载数据（对于表格数据需要重载、局部递增场景下可能会用到）',
            'en-US':
              'Load data (This parameter may be used in the scenario where table data needs to be reloaded or partially incremented.)'
          },
          mode: ['pc'],
          pcDemo: 'grid-large-data#large-data-full-data-loading'
        },
        {
          name: 'loadData(data)',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '加载数据（对于表格数据需要重载、局部递增场景下可能会用到）',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'recalculate',
          type: '() => Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '重新计算表格（对于某些特殊场景可能会用到，比如隐藏的表格、更新列宽...等）',
            'en-US':
              'Recalculate the table. (This may be used in some special scenarios, such as hidden tables and column width update.)'
          },
          mode: ['pc'],
          pcDemo: 'grid-size#size-recalculate'
        },
        {
          name: 'recalculate()',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '重新计算表格（对于某些特殊场景可能会用到，比如隐藏的表格、更新列宽...等）',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'refreshColumn',
          type: '() => Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '刷新列配置（对于显示/隐藏列场景下可能会用到）',
            'en-US':
              'Refresh column configuration (This parameter may be used in the scenario of displaying or hiding columns.)'
          },
          mode: ['pc'],
          pcDemo: 'grid-custom#custom-hide-column'
        },
        {
          name: 'refreshColumn()',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '刷新列配置（对于显示/隐藏列场景下可能会用到）',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'refreshData',
          type: '() => Promise',
          defaultValue: '',
          desc: {
            'zh-CN':
              '同步刷新 data 数据；如果用了该方法，那么组件将不再记录增删改的状态，只能自行实现对应逻辑（对于某些特殊的场景，比如深层树节点元素发生变动时可能会用到）',
            'en-US':
              'Data data is refreshed synchronously. If this method is used, the component does not record the status of adding, deleting, and modifying, and can only implement the corresponding logic. (This parameter may be used in some special scenarios, for example, when a node element in a deep tree changes.)'
          },
          mode: ['pc'],
          pcDemo: 'grid-tree-table#tree-table-tree-grid-insert-delete-update'
        },
        {
          name: 'refreshData()',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN':
              '同步刷新 data 数据；如果用了该方法，那么组件将不再记录增删改的状态，只能自行实现对应逻辑（对于某些特殊的场景，比如深层树节点元素发生变动时可能会用到）',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'reloadCustoms',
          typeAnchorName: 'IColumnConfig',
          type: '(customs: IColumnConfig[], sortable?: boolean)=> Promise',
          defaultValue: '',
          desc: {
            'zh-CN':
              '初始化加载显示/隐藏列（对于异步更新的场景下可能会用到），customs表示列信息集合，sortable表示是否按列顺序加载',
            'en-US':
              'Initialize loading to display or hide columns (which may be used in asynchronous update scenarios).'
          },
          mode: ['pc'],
          pcDemo: 'grid-custom#custom-server-storage'
        },
        {
          name: 'reloadCustoms(customs, sort)',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '初始化加载显示/隐藏列（对于异步更新的场景下可能会用到）',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'remove',
          typeAnchorName: 'IRow',
          type: '(rows: IRow | IRow[])=> Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '删除指定行数据，指定 row 或 [row, ...] 删除多条数据，如果为空则删除所有数据',
            'en-US':
              'Deletes data in a specified row. Multiple data records in a specified row or [row, ...] are deleted. If the value is empty, all data records are deleted.'
          },
          mode: ['pc'],
          pcDemo: 'grid-toolbar#toolbar-insert-delete-update'
        },
        {
          name: 'remove(rows)',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '删除指定行数据，指定 row 或 [row, ...] 删除多条数据，如果为空则删除所有数据',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'removeSelecteds',
          type: '() => Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '删除已选中的所有行数据',
            'en-US': 'Delete all selected rows.'
          },
          mode: ['pc'],
          pcDemo: 'grid-toolbar#toolbar-insert-delete-update'
        },
        {
          name: 'removeSelecteds()',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '删除已选中的所有行数据',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'resetAll',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '手动重置列的所有操作，还原到初始状态（如果已关联工具栏，则会同步更新）',
            'en-US':
              'Manually reset all operations in the column to the initial state. If the toolbar has been associated, the operations will be updated accordingly.'
          },
          mode: ['pc'],
          pcDemo: 'grid-custom#custom-reset-resizable'
        },
        {
          name: 'resetAll()',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '手动重置列的所有操作，还原到初始状态（如果已关联工具栏，则会同步更新）',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'resetCustoms',
          type: '() => Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '手动重置列的显示/隐藏操作，还原到初始状态（如果已关联工具栏，则会同步更新）',
            'en-US':
              'Manually reset the display/hide operations of columns to restore the initial status (if the toolbar has been associated, it will be updated accordingly)'
          },
          mode: ['pc'],
          pcDemo: 'grid-custom#custom-reset-resizable'
        },
        {
          name: 'resetCustoms()',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '手动重置列的显示/隐藏操作，还原到初始状态（如果已关联工具栏，则会同步更新）',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'resetResizable',
          type: '() => Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '手动重置列宽拖动的操作，还原到初始状态（如果已关联工具栏，则会同步更新）',
            'en-US':
              'Manually reset the column width and drag the column width to the initial state (if the toolbar has been associated, the column width will be updated accordingly).'
          },
          mode: ['pc'],
          pcDemo: 'grid-custom#custom-reset-resizable'
        },
        {
          name: 'resetResizable()',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '手动重置列宽拖动的操作，还原到初始状态（如果已关联工具栏，则会同步更新）',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'revertData',
          typeAnchorName: 'IRow',
          type: '(rows: IRow | IRow[], field?: string)=> Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '还原更改，还原指定行 row 或者整个表格的数据',
            'en-US': 'Restore the data of a specified row or the entire table.'
          },
          mode: ['pc'],
          pcDemo: 'grid-edit#edit-revert-data'
        },
        {
          name: 'revertData(rows, field)',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '还原更改，还原指定行 row 或者整个表格的数据',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'scrollTo',
          type: '(scrollLeft: number, scrollTop: number)=> Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '如果有滚动条，则滚动到对应的位置',
            'en-US': 'If there is a scroll bar, scroll to the corresponding position.'
          },
          mode: ['pc'],
          pcDemo: 'grid-large-data#large-data-scroll-to'
        },
        {
          name: 'scrollTo(scrollLeft, scrollTop)',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '如果有滚动条，则滚动到对应的位置',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'scrollToColumn',
          typeAnchorName: 'IColumnConfig',
          type: '(column: IColumnConfig)=> Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '如果有滚动条，则滚动到对应的列',
            'en-US': 'If there is a scroll bar, scroll to the corresponding column.'
          },
          mode: ['pc'],
          pcDemo: 'grid-large-data#large-data-scroll-to'
        },
        {
          name: 'scrollToColumn(column)',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '如果有滚动条，则滚动到对应的列',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'scrollToRow',
          typeAnchorName: 'IRow',
          type: '(row: IRow)=> Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '如果有滚动条，则滚动到对应的行',
            'en-US': 'If there is a scroll bar, scroll to the corresponding line.'
          },
          mode: ['pc'],
          pcDemo: 'grid-large-data#large-data-scroll-to'
        },
        {
          name: 'scrollToRow(row)',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '如果有滚动条，则滚动到对应的行',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'setActiveCell',
          typeAnchorName: 'IRow',
          type: '(row: IRow, field: string)=> Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '激活单元格编辑',
            'en-US': 'Activate cell editing'
          },
          mode: ['pc'],
          pcDemo: 'grid-edit#edit-trigger-mode-hm-editing'
        },
        {
          name: 'setActiveCell(row, field)',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '激活单元格编辑',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'setActiveRow',
          typeAnchorName: 'IRow',
          type: '(row: IRow)=> Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '激活行编辑，如果是 mode=cell 则默认激活第一个单元格',
            'en-US': 'Activate line editing. If mode=cell is selected, the first cell is activated by default.'
          },
          mode: ['pc'],
          pcDemo: 'grid-edit#edit-trigger-mode-hm-editing'
        },
        {
          name: 'setActiveRow(row)',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '激活行编辑，如果是 mode=cell 则默认激活第一个单元格',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'setAllRowExpansion',
          type: '(checked: boolean)=> Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '设置所有行的展开与否',
            'en-US': 'Set whether to expand all rows.'
          },
          mode: ['pc'],
          pcDemo: 'grid-expand#expand-set-row-expansion'
        },
        {
          name: 'setAllRowExpansion(checked)',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '设置所有行的展开与否',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'setAllSelection',
          type: '(checked: boolean)=> void',
          defaultValue: '',
          desc: {
            'zh-CN': '入参为boolean,用于多选行，设置所有行的选中状态,',
            'en-US':
              'The input parameter is boolean, which is used to select multiple lines and set the selected status of all lines.'
          },
          mode: ['pc'],
          pcDemo: 'grid-operation-column#operation-column-selection-operation'
        },
        {
          name: 'setAllSelection(checked)',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '用于多选行，设置所有行的选中状态',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'setAllTreeExpansion',
          type: '(checked: boolean)=> Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '设置所有树节点的展开与否',
            'en-US': 'Sets whether to expand all tree nodes.'
          },
          mode: ['pc'],
          pcDemo: 'grid-tree-table#tree-table-set-tree-expansion'
        },
        {
          name: 'setAllTreeExpansion(checked)',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '设置所有树节点的展开与否',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'setCurrentRow',
          typeAnchorName: 'IRow',
          type: '(row: IRow)=> Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '用于当前行，设置某一行为高亮状态',
            'en-US': 'Sets the highlight status of a row for the current row.'
          },
          mode: ['pc'],
          pcDemo: 'grid-highlight#highlight-set-current-row'
        },
        {
          name: 'setCurrentRow(row)',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '用于当前行，设置某一行为高亮状态',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'setRadioRow',
          typeAnchorName: 'IRow',
          type: '(row: IRow)=> Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '用于单选行，设置某一行为选中状态',
            'en-US': 'Select a row and set the selected status of a row.'
          },
          mode: ['pc'],
          pcDemo: 'grid-operation-column#operation-column-clear-and-set-radio-row'
        },
        {
          name: 'setRadioRow(row)',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '用于单选行，设置某一行为选中状态',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'setRowExpansion',
          typeAnchorName: 'IRow',
          type: '(rows: IRow | IRow[], checked: boolean)=> Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '设置展开行，第二个参数设置这一行展开与否',
            'en-US': 'Set the expansion row, and set whether to expand the row.'
          },
          mode: ['pc'],
          pcDemo: 'grid-expand#expand-set-row-expansion'
        },
        {
          name: 'setRowExpansion(rows, checked)',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '设置展开行，二个参数设置这一行展开与否',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'setSelection',
          typeAnchorName: 'IRow',
          type: '(rows: IRow | IRow[], checked: boolean)=> Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '用于多选行，设置行为选中状态，第二个参数为选中与否',
            'en-US':
              'This parameter is used to select multiple lines. The second parameter is whether to select or not.'
          },
          mode: ['pc'],
          pcDemo: 'grid-operation-column#operation-column-selection-operation'
        },
        {
          name: 'setSelection(rows, checked)',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '用于多选行，设置行为选中状态，第二个参数为选中与否',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'setTreeExpansion',
          typeAnchorName: 'IRow',
          type: '(rows: IRow | IRow[], checked: boolean)=> Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '设置展开树形节点，第二个参数设置这一行展开与否',
            'en-US': 'Set the expansion tree node and set whether to expand the row.'
          },
          mode: ['pc'],
          pcDemo: 'grid-tree-table#tree-table-set-tree-expansion'
        },
        {
          name: 'setTreeExpansion(rows, checked)',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '设置展开树形节点，二个参数设置这一行展开与否',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'showColumn',
          typeAnchorName: 'IColumnConfig',
          type: '(column: IColumnConfig)=> Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '显示指定列',
            'en-US': 'Display the specified column.'
          },
          mode: ['pc'],
          pcDemo: 'grid-custom#custom-hide-column'
        },
        {
          name: 'showColumn(column)',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '显示指定列',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'sort',
          type: "(field: string, order?: 'asc' | 'desc')=> Promise",
          defaultValue: '',
          desc: {
            'zh-CN': '手动对表格进行排序（如果 order 为空则自动切换排序）',
            'en-US': 'Sort the table manually. If the value of order is empty, the table is automatically sorted.'
          },
          mode: ['pc'],
          pcDemo: 'grid-sort#sort-sort'
        },
        {
          name: 'sort(field, order)',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '手动对表格进行排序（如果 order 为空则自动切换排序）',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'toggleAllSelection',
          type: '() => Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '用于多选行，切换所有行的选中状态',
            'en-US': 'Selection of multiple lines and switch the selected status of all lines.'
          },
          mode: ['pc'],
          pcDemo: 'grid-operation-column#operation-column-selection-operation'
        },
        {
          name: 'toggleAllSelection()',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '用于多选行，切换所有行的选中状态',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'toggleRowExpansion',
          typeAnchorName: 'IRow',
          type: '(row: IRow)=> Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '用于可展开表格，切换展开行',
            'en-US': 'For expanding tables or switching rows.'
          },
          mode: ['pc'],
          pcDemo: 'grid-expand#expand-set-row-expansion'
        },
        {
          name: 'toggleRowExpansion(row)',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '用于可展开表格，切换展开行',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'toggleRowSelection',
          typeAnchorName: 'IRow',
          type: '(row: IRow)=> Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '用于多选行，切换某一行的选中状态',
            'en-US': 'Selection of multiple lines and switch the selected status of a line.'
          },
          mode: ['pc'],
          pcDemo: 'grid-operation-column#operation-column-selection-operation'
        },
        {
          name: 'toggleRowSelection(row)',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '用于多选行，切换某一行的选中状态',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'toggleTreeExpansion',
          typeAnchorName: 'IRow',
          type: '(row: IRow)=> Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '用于可树形表格，切换展开树形节点',
            'en-US': 'This parameter is used to switch and expand tree nodes in a tree table.'
          },
          mode: ['pc'],
          pcDemo: 'grid-tree-table#tree-table-set-tree-expansion'
        },
        {
          name: 'toggleTreeExpansion(row)',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '用于可树形表格，切换展开树形节点',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'validate',
          typeAnchorName: 'IRow',
          type: '(rows: IRow | IRow[], callback: () => void)=> Promise',
          defaultValue: '',
          desc: {
            'zh-CN':
              '表格校验函数，如果指定 row 或 rows 则校验指定一行或多行，否则校验整个表格。该回调函数会在校验结束后被调用，并传入两个参数：（是否校验成功，最近一列未通过校验的字段）。若不传入回调函数，则会返回一个 promise',
            'en-US':
              'Table verification function. If a row or rows is specified, the specified row or multiple rows are verified. Otherwise, the entire table is verified. This callback function is called after the verification is complete and the following parameters are transferred: (Whether the verification is successful. The fields in the latest column fail the verification.) If no callback function is passed in, a promise is returned'
          },
          mode: ['pc'],
          pcDemo: 'grid-validation#validation-before-submit-validation'
        },
        {
          name: 'validate(rows, callback)',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN':
              '表格校验函数，如果指定 row 或 rows 则校验指定一行或多行，否则校验整个表格。该回调函数会在校验结束后被调用，并传入两个参数：（是否校验成功，最近一列未通过校验的字段）。若不传入回调函数，则会返回一个 promise',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        }
      ],
      slots: [
        {
          name: 'default',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '默认插槽（表格列）',
            'en-US': 'Default slot (Table column)'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-slot#slot-default-slot',
          mfDemo: ''
        },
        {
          name: 'empty',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '空数据时显示的文本内容',
            'en-US': 'Text content displayed when the data is empty'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-slot#slot-empty-slot',
          mfDemo: ''
        },
        {
          name: 'pager',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '分页插件，<pager>',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'toolbar',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '工具栏，（包含：缩放、个性化、刷新表格、自定义按钮)',
            'en-US': 'Toolbar, (Includes: Zoom, Personalize, Refresh Table, and Custom Buttons)'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-slot#slot-buttons-slot',
          mfDemo: ''
        }
      ]
    },
    {
      name: 'grid-column',
      type: 'component',
      props: [
        {
          name: 'align',
          type: "'left' | 'center' | 'right'",
          defaultValue: "'left'",
          desc: {
            'zh-CN': '列对齐方式',
            'en-US': 'Column pair mode; The optional values for this property are left, center, right'
          },
          mode: ['pc'],
          pcDemo: 'grid-align#align-grid-align'
        },
        {
          name: 'class-name',
          typeAnchorName: 'IClassNameArgs',
          type: 'string | (args: IClassNameArgs)=> string',
          defaultValue: '',
          desc: {
            'zh-CN': '给单元格附加 className，也可以是函数',
            'en-US': 'Add a class name to a cell. The class name can also be the Function'
          },
          mode: ['pc'],
          pcDemo: 'grid-custom-style#custom-style-class-name'
        },
        {
          name: 'editor',
          typeAnchorName: 'IEditorConfig',
          type: 'IEditorConfig | (h, {row:Row, column: IColumnConfig})=> Component',
          defaultValue: '',
          desc: {
            'zh-CN': '单元格编辑渲染配置项，也可以是函数返回 Vue 组件',
            'en-US':
              'Cell editing rendering configuration item, which can also be the function Function(h, params). Sets the editing type of the table column'
          },
          mode: ['pc'],
          pcDemo: 'grid-editor#editor-custom-editor-select'
        },
        {
          name: 'filed',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '设置表格列的单元格显示字段',
            'en-US': 'Set the cell display field for table columns'
          },
          mode: ['pc'],
          pcDemo: 'grid#base-basic-usage'
        },
        {
          name: 'filter',
          type: 'boolean | IFilterConfig',
          typeAnchorName: 'IFilterConfig',
          defaultValue: 'false',
          desc: {
            'zh-CN': '设置表格列的筛选配置信息。默认值为 false 不配置筛选信息',
            'en-US':
              'Set the filtering configuration of the table column. The default value is false. No filtering information is configured.'
          },
          mode: ['pc'],
          pcDemo: 'grid-filter#filter-default-filter'
        },
        {
          name: 'fixed',
          type: "'left' | 'right'",
          defaultValue: '',
          desc: {
            'zh-CN':
              '将列固定在左侧，其中 freezable 可冻结可解冻，在表格个性化面板中可操作，而 frozen 只能冻结不能解冻，在个性化面板中不可操作；将列固定在左侧或者右侧（注意：固定列应该放在左右两侧的位置）',
            'en-US':
              'Fix columns on the left. Freezable can be frozen or unfrozen, but can be operated in the table personalized panel. Frozen can only be frozen but cannot be operated in the personalized panel. Fix the column to the left or right (Note: The fixed columns should be placed on the left and right sides.) The optional values of this attribute are left (fixed left) and right (fixed right)'
          },
          mode: ['pc'],
          pcDemo: 'grid-fixed#fixed-left-fixed'
        },
        {
          name: 'footer-align',
          type: "'left' | 'center' | 'right'",
          defaultValue: "'left'",
          desc: {
            'zh-CN': '表尾列的对齐方式）',
            'en-US':
              'Alignment mode of the column at the end of the table; The optional values for this property are left, center, right'
          },
          mode: ['pc'],
          pcDemo: 'grid-align#align-footer-align'
        },
        {
          name: 'footer-class-name',
          typeAnchorName: 'IClassNameArgs',
          type: 'string | (args: IClassNameArgs)=> string',
          defaultValue: '',
          desc: {
            'zh-CN': '给表尾的单元格附加 className，也可以是函数',
            'en-US': 'Add a class name to the cell at the end of the table. The class name can also be the Function'
          },
          mode: ['pc'],
          pcDemo: 'grid-custom-style#custom-style-footer-style'
        },
        {
          name: 'format-config',
          typeAnchorName: 'IFormatConfig',
          type: 'IFormatConfig',
          defaultValue: '',
          desc: {
            'zh-CN': '开启该列数据异步渲染',
            'en-US': 'Enable the asynchronous rendering of the column data'
          },
          mode: ['pc'],
          pcDemo: 'grid-renderer#renderer-inner-renderer'
        },
        {
          name: 'format-text',
          typeAnchorName: 'IFormatText',
          type: 'IFormatText',
          defaultValue: '',
          desc: {
            'zh-CN': '设置当前表格列的显示获取编辑类型；设置当前表格列的显示获取编辑类型，也可以是函数',
            'en-US':
              'Sets the display and editing mode of the current table column. Sets the display and obtaining editing type of the current table column. It can also be the function'
          },
          mode: ['pc'],
          pcDemo: 'grid-renderer#renderer-inner-renderer'
        },
        {
          name: 'header-align',
          type: "'left' | 'center' | 'right'",
          defaultValue: "'left'",
          desc: {
            'zh-CN': '表头列的对齐方式',
            'en-US':
              'The alignment mode of the table header column; The optional values for this property are left, center, right'
          },
          mode: ['pc'],
          pcDemo: 'grid-align#align-header-align'
        },
        {
          name: 'header-class-name',
          typeAnchorName: 'IClassNameArgs',
          type: 'string | (args: IClassNameArgs)=> string',
          defaultValue: '',
          desc: {
            'zh-CN': '设置列头样式名称；给表头的单元格附加 className，也可以是函数',
            'en-US': 'Set the column header style name. Add className to the cell in the table header, or the function'
          },
          mode: ['pc'],
          pcDemo: 'grid-custom-style#custom-style-header-style'
        },
        {
          name: 'index-method',
          typeAnchorName: 'IIndexMethodArgs',
          type: 'string | (args: IIndexMethodArgs)=> string',
          defaultValue: '',
          desc: {
            'zh-CN': '只对 type=index 有效，自定义索引方法',
            'en-US': 'This parameter is valid only for type=index'
          },
          mode: ['pc'],
          pcDemo: 'grid-serial-column#serial-column-custom-serial-column'
        },
        {
          name: 'min-width',
          type: 'number | string',
          defaultValue: '',
          desc: {
            'zh-CN': '最小列宽度；会自动将剩余空间按比例分配；该属性的可选值为 整数, px，%',
            'en-US':
              'Minimum column width; The remaining space will be allocated in proportion. The optional values of this property are integers, px,%'
          },
          mode: ['pc'],
          pcDemo: 'grid-size#size-min-width'
        },
        {
          name: 'multi',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN':
              '是 filter 对象内置的属性，筛选是否允许多选；设置选择列是否显示复选框。当 columnType 为 select 时有效',
            'en-US':
              "is an attribute built in the filter object. Whether multiple selections are allowed for filtering. Sets whether to display the check box in the selected column. This parameter is valid only when columnType is set to'select'."
          },
          mode: ['pc'],
          pcDemo: 'grid-filter#filter-default-filter'
        },
        {
          name: 'params',
          type: 'object',
          defaultValue: '',
          desc: {
            'zh-CN': '额外的参数（自定义一些数据参数，对于某些特殊的场景可能会用到）',
            'en-US': 'Extra parameters (User-defined data parameters, which may be used in some special scenarios)'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'remote-sort',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '是否使用服务端排序，如果设置为 true 则不会对数据进行处理',
            'en-US': 'Whether to use server sorting. If this parameter is set to true, data will not be processed.'
          },
          mode: ['pc'],
          pcDemo: 'grid-sort#sort-server-sort'
        },
        {
          name: 'renderer',
          typeAnchorName: 'IEditorConfig',
          type: 'IEditorConfig | (h, {row: IRow, column: IColumnConfig})=> Component',
          defaultValue: '',
          desc: {
            'zh-CN':
              '设置表格列的渲染类型。其优先级高于列的 type 属性配置；单元格渲染配置项，其优先级高于列的 formatText 属性配置',
            'en-US':
              'Set the rendering type of the table column. The priority of the column is higher than that of the column type attribute. Cell rendering configuration item. Its priority is higher than that of the formatText attribute of the column'
          },
          mode: ['pc'],
          pcDemo: 'grid-renderer#renderer-custom-renderer'
        },
        {
          name: 'required',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否必填，如不设置，则会根据校验规则自动生成',
            'en-US':
              'Mandatory. If this parameter is not set, the system will automatically generate a value based on the verification rule.'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'resizable',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '设置该列是否可以调整列宽；列是否允许拖动列宽调整大小',
            'en-US':
              'Set whether the column width can be adjusted. Allows you to drag the column width to adjust the column size.'
          },
          mode: ['pc'],
          pcDemo: 'grid-custom#custom-column-width'
        },
        {
          name: 'rules',
          typeAnchorName: 'IValidRules',
          type: 'IValidRules',
          defaultValue: '',
          desc: {
            'zh-CN': '表单的验证功能',
            'en-US': 'Form verification function'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'show-header-overflow',
          type: 'string | boolean',
          defaultValue: '',
          desc: {
            'zh-CN':
              '当表头内容过长时显示为省略号；该属性的可选值为 ellipsis （只显示省略号）， title （并且显示为原生 title ）， tooltip （并且显示为 tooltip 提示）',
            'en-US':
              'When the table header content is too long, the ellipsis is displayed. The optional values for this property are ellipsis (only the ellipsis is displayed), title (and the native title is displayed), tooltip (and the tooltip prompt is displayed)'
          },
          mode: ['pc'],
          pcDemo: 'grid-tip#tip-column-header-tip'
        },
        {
          name: 'show-header-tip',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '表格列头是否需要提示',
            'en-US': 'Whether to prompt the table column header.'
          },
          mode: ['pc'],
          pcDemo: 'grid-tip#tip-column-header-tip'
        },
        {
          name: 'show-icon',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否显示列头编辑图标，在编辑时有效',
            'en-US': 'Whether to display the column header editing icon. This parameter is valid during editing.'
          },
          mode: ['pc'],
          pcDemo: 'grid-edit#edit-editing'
        },
        {
          name: 'show-overflow',
          type: 'string | boolean',
          defaultValue: '',
          desc: {
            'zh-CN':
              '当内容过长时显示为省略号；该属性的可选值为 ellipsis（只显示省略号）, title（并且显示为原生 title）, tooltip（并且显示为 tooltip 提示）',
            'en-US':
              'When the content is too long, an ellipsis is displayed. The optional values for this property are ellipsis (only the ellipsis is displayed), title (and the native title is displayed), tooltip (and the tooltip is displayed)'
          },
          mode: ['pc'],
          pcDemo: 'grid-tip#tip-cell-tip'
        },
        {
          name: 'show-tip',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '表格列单元格是否需要提示',
            'en-US': 'Does the table column cells require prompts?'
          },
          mode: ['pc'],
          pcDemo: 'grid-tip#tip-cell-tip'
        },
        {
          name: 'sort-by',
          type: 'string | string[]',
          defaultValue: '',
          desc: {
            'zh-CN': '只对 sortable 有效，自定义排序的属性',
            'en-US': 'This parameter is valid only for sortable. It is a user-defined sorting attribute.'
          },
          mode: ['pc'],
          pcDemo: 'grid-sort#sort-combinations-sort'
        },
        {
          name: 'sort-method',
          typeAnchorName: 'IRow',
          type: '(row1: IRow, row2: IRow)=> boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义所有列的排序方法，当触发排序时会调用该函数',
            'en-US': 'Customize the sorting method of all columns. When sorting is triggered.'
          },
          mode: ['pc'],
          pcDemo: 'grid-sort#sort-custom-sort'
        },
        {
          name: 'sortable',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '设置该列数据是否可以排序',
            'en-US': 'Whether the data in the column can be sorted.; Allow Sorting Columns'
          },
          mode: ['pc'],
          pcDemo: 'grid-sort#sort-default-sort'
        },
        {
          name: 'title',
          type: 'string | (h, params)=> string | VNode',
          defaultValue: '',
          desc: {
            'zh-CN': '列标题（支持开启国际化），可以是函数',
            'en-US': 'Column title (internationalization can be enabled). It can be the function'
          },
          mode: ['pc'],
          pcDemo: 'grid#base-basic-usage'
        },
        {
          name: 'tree-node',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '只对 tree-config 配置时有效，指定为树节点',
            'en-US': 'This parameter is valid only when tree-config is configured. It is specified as a tree node.'
          },
          mode: ['pc'],
          pcDemo: 'grid-tree-table#tree-table-tree-grid-base'
        },
        {
          name: 'type',
          type: "'index' | 'selection' | 'radio' | 'expand'",
          defaultValue: '',
          desc: {
            'zh-CN': '设置内置列的类型',
            'en-US': 'Set the type of the built-in column'
          },
          mode: ['pc'],
          pcDemo: 'grid-serial-column#serial-column-default-serial-column'
        },
        {
          name: 'width',
          type: 'number | string',
          defaultValue: '',
          desc: {
            'zh-CN':
              '设置列的宽度，可以是像素或者百分比或者 auto ，设置为 auto 时，列宽会自动适应；该属性的可选值为 整数 ， px ，%',
            'en-US':
              'Set the column width. The value can be pixel, percentage, or auto. If the value is auto, the column width automatically adapts.; column width; The optional value of this property is integer/px/%'
          },
          mode: ['pc'],
          pcDemo: 'grid-size#size-fixed-column-width'
        }
      ],
      events: [],
      methods: [],
      slots: [
        {
          name: 'default',
          defaultValue: '',
          desc: {
            'zh-CN':
              '自定义显示内容模板，作用插槽参数说明：slots.default({ $table, column, row },h)，$table：表格组件对象，column：当前列配置，row：当前行数据,h：vue的渲染函数',
            'en-US': 'Customized display content template'
          },
          mode: ['pc'],
          pcDemo: 'grid-slot#slot-default-slot'
        },
        {
          name: 'edit',
          defaultValue: '',
          desc: {
            'zh-CN':
              '自定义可编辑组件模板，作用插槽参数说明：slots.edit({ $table, column, row },h)，$table：表格组件对象，column：当前列配置，row：当前行数据,h：vue的渲染函数',
            'en-US': 'Customized Editable Component Template'
          },
          mode: ['pc'],
          pcDemo: 'grid-slot#slot-editor-slot'
        },
        {
          name: 'filter',
          defaultValue: '',
          desc: {
            'zh-CN':
              '自定义筛选模板，作用插槽参数说明：slots.filter({ $grid, values, args, context },h)，$grid：表格组件对象，values：筛选项集合，args：筛选相关参数,context：筛选面板组件上下文对象',
            'en-US': 'User-defined filtering template'
          },
          mode: ['pc'],
          pcDemo: 'grid-filter#filter-custom-filter'
        },
        {
          name: 'header',
          defaultValue: '',
          desc: {
            'zh-CN':
              '自定义表头内容的模板，作用插槽参数说明：slots.header({ $table, column, columnIndex，$rowIndex},h)，$table：表格组件对象，column：当前列配置，columnIndex：当前列索引,$rowIndex:当前行索引,h：vue的渲染函数',
            'en-US': 'Template of custom table header content'
          },
          mode: ['pc'],
          pcDemo: 'grid-slot#slot-header-slot'
        }
      ]
    },
    {
      name: 'grid-toolbar',
      type: 'component',
      props: [
        {
          name: 'before-close-full-screen',
          type: '() => boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '关闭全屏前的拦截方法，返回 false 则阻止关闭全屏，返回 true 则不阻止',
            'en-US':
              'Intercept method before full screen is disabled. If false is returned, the full screen is disabled. If true is returned, the full screen is not disabled.'
          },
          mode: ['pc'],
          pcDemo: 'grid-toolbar#toolbar-grid-full-screen'
        },
        {
          name: 'before-open-full-screen',
          type: '() => boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '全屏前的拦截方法，返回 false 则阻止全屏，返回 true 则不阻止',
            'en-US':
              'Intercept method before full screen, If false is returned, the full screen is blocked. If true is returned, the full screen is not blocked.'
          },
          mode: ['pc'],
          pcDemo: 'grid-toolbar#toolbar-grid-full-screen'
        },
        {
          name: 'buttons',
          type: '{\n            code: string\n            name: string\n          }[]',
          defaultValue: '',
          desc: {
            'zh-CN': '按钮列表',
            'en-US': 'Button List'
          },
          mode: ['pc'],
          pcDemo: 'grid-toolbar#toolbar-insert-delete-update'
        },
        {
          name: 'full-screen',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '设置表格是否可以全屏，或者需要全屏的容器；设置工具栏属性是否显示全屏按钮',
            'en-US':
              'Sets whether the table can be displayed in full screen mode or whether the container needs to be displayed in full screen mode.; Sets whether to display the full-screen button on the toolbar.'
          },
          mode: ['pc'],
          pcDemo: 'grid-toolbar#toolbar-grid-full-screen'
        },
        {
          name: 'id',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '唯一 ID 标识',
            'en-US': 'Unique ID'
          },
          mode: ['pc'],
          pcDemo: 'grid-custom#custom-column-width'
        },
        {
          name: 'refresh',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '工具栏组件开启表格刷新功能',
            'en-US': 'The table refresh function is enabled for the toolbar component.'
          },
          mode: ['pc'],
          pcDemo: 'grid-toolbar#toolbar-refresh-grid'
        },
        {
          name: 'resizable',
          type: 'boolean | {storage: boolean}',
          defaultValue: '',
          desc: {
            'zh-CN': '列宽拖动配置（需要设置 id）',
            'en-US': 'Column width dragging configuration (id needs to be set)'
          },
          mode: ['pc'],
          pcDemo: 'grid-custom#custom-column-width'
        },
        {
          name: 'setting',
          typeAnchorName: 'IToolbarSetting',
          type: 'boolean | IToolbarSetting',
          defaultValue: '',
          desc: {
            'zh-CN':
              '设置表格属性是否显示个性化面板，当设置表格的 name 属性时有效；设置工具栏属性是否显示个性化配置（需要设置 id ）',
            'en-US':
              'Whether to display the table attribute on the personalized panel. This parameter is valid only when the name attribute of the table is set. Set whether to display personalized configuration for toolbar attributes (id needs to be set)'
          },
          mode: ['pc'],
          pcDemo: 'grid-custom#custom-column-width'
        },
        {
          name: 'size',
          type: "'medium' | 'small' | 'mini'",
          defaultValue: '',
          desc: {
            'zh-CN': '表格的尺寸',
            'en-US': 'Dimension; The options of this attribute are medium, small, and mini'
          },
          mode: ['pc'],
          pcDemo: 'grid-toolbar#toolbar-copy-row-data'
        }
      ],
      events: [
        {
          name: 'button-click',
          typeAnchorName: 'IButtonClick',
          type: '(args: IButtonClick, event: Event)=> void',
          defaultValue: '',
          desc: {
            'zh-CN': '当工具栏的按钮被点击时会后触发该事件',
            'en-US': 'This event is triggered when a button on the toolbar is clicked'
          },
          mode: ['pc'],
          pcDemo: 'grid-validation#validation-before-submit-validation'
        },
        {
          name: 'cancel-setting',
          typeAnchorName: 'ISettingConfigs',
          type: '(args: ISettingConfigs)=> void',
          defaultValue: '',
          desc: {
            'zh-CN': '点击个性化面板的取消按钮触发该事件',
            'en-US':
              'Click the Cancel button on the personalized panel to trigger the event. settingConfigs: personalized data of the table'
          },
          mode: ['pc'],
          pcDemo: 'grid-custom#custom-ordercolumn-local'
        },
        {
          name: 'reset-setting',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '点击个性化面板的重置按钮触发该事件',
            'en-US': 'Click the Reset button on the personalized panel to trigger the event.'
          },
          mode: ['pc'],
          pcDemo: 'grid-custom#custom-ordercolumn-local'
        },
        {
          name: 'save-setting',
          typeAnchorName: 'ISettingConfigs',
          type: '(args: ISettingConfigs)=> void',
          defaultValue: '',
          desc: {
            'zh-CN': '点击个性化面板的确认按钮触发该事件',
            'en-US':
              'Click the OK button on the personalized panel to trigger the event. settingConfigs: personalized data of the table'
          },
          mode: ['pc'],
          pcDemo: 'grid-custom#custom-ordercolumn-local'
        }
      ],
      methods: [],
      slots: [
        {
          name: 'buttons',
          defaultValue: '',
          desc: {
            'zh-CN': '按钮列表',
            'en-US': 'Button List'
          },
          mode: ['pc'],
          pcDemo: 'grid-toolbar#toolbar-custom-toolbar'
        },
        {
          name: 'toolbar',
          defaultValue: '',
          desc: {
            'zh-CN': '工具栏插槽',
            'en-US': 'Toolbar slot'
          },
          mode: ['pc'],
          pcDemo: 'grid-toolbar#toolbar-custom-toolbar'
        }
      ]
    }
  ],
  types: [
    {
      name: 'IRow',
      type: 'interface',
      code: `
interface IRow {
  // 表格行数据
  [filed: string]: any
}
      `
    },
    {
      name: 'IColumnConfig',
      type: 'interface',
      depTypes: ['IValidRules'],
      code: `
interface IColumnConfig {
  type: 'index' | 'radio' | 'checkbox'
  id: string
  prop: string
  rules: IValidRules
  required: boolean
  property: string
  title: string
  label: string
  width: string | number
  minWidth: string | number
  resizable: boolean
  fixed: boolean
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
      `
    },
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
    // 分页组件布局默认值：'total, prev, pager, next, jumper'
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
  api: () => Promise
}
      `
    },
    {
      name: 'IRowGroup',
      type: 'type',
      code: `
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
      name: 'IToolTipConfig',
      type: 'type',
      code: `
interface IToolTipConfig {
  placement?: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end'
  visibleArrow?: boolean
  enterable?: boolean
  type?: 'normal' | 'warning' | 'error' | 'info' | 'success'
  effect?: 'dark' | 'light'
  // 自定义提示内容
  contentMethod?: () => string | VNode
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
  visibleMethod?: () => boolean
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
  activeMethod?:({row: IRow})=> boolean
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
  checkMethod?: () => boolean
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
  [field: string]: () => void
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
  onBeforeMove?: () => boolean
  // 拖拽触发源选择器一般是class类名
  trigger?: string
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
  activeMethod?: ({row: IRow, column: IColumnConfig})=> boolean
}
      `
    },
    {
      name: 'IRecordset',
      type: 'type',
      code: `
interface IRecordset {
  insertRecords: IRow[]
  removeRecords: IRow[]
  updateRecords: IRow[]
}
      `
    },
    {
      name: 'IPageChangeArgs',
      type: 'type',
      code: `
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
  callback: () => void
  //失效回调
  rollback: () => void
}
      `
    },
    {
      name: 'IToolbarButtonClickArgs',
      type: 'type',
      code: `
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
      `
    },
    {
      name: 'ICellClickArgs',
      type: 'type',
      depTypes: ['IColumnConfig'],
      code: `
interface ICellClickArgs {
  // 当前行
  row: IRow,
  // 当前行的下标
  rowIndex: number
  // 当前列
  column: IColumnConfig
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
  row: IRow
}
      `
    },
    {
      name: 'ICellArgs',
      type: 'type',
      depTypes: ['IColumnConfig'],
      code: `
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
      `
    },
    {
      name: 'ICurrentChangeArgs',
      type: 'type',
      code: `
interface ICurrentChangeArgs {
  // 当前行
  row: IRow
}
      `
    },
    {
      name: 'IEditActivedArgs',
      type: 'type',
      depTypes: ['IColumnConfig'],
      code: `
interface IEditActivedArgs {
  // 当前行
  row: IRow
  // 当前列 
  column: IColumnConfig
}
      `
    },
    {
      name: 'IEditClosedArgs',
      type: 'type',
      depTypes: ['IColumnConfig'],
      code: `
interface IEditClosedArgs {
  // 当前行
  row: IRow
  // 当前列 
  column: IColumnConfig
}
      `
    },
    {
      name: 'IEditDisabledArgs',
      type: 'type',
      depTypes: ['IColumnConfig'],
      code: `
interface IEditDisabledArgs {
  //当前行
  row: IRow
  // 当前列 
  column: IColumnConfig
}
      `
    },
    {
      name: 'IFilterChangeArgs',
      type: 'type',
      code: `
interface IFilterChangeArgs {
  //表格的信息对象
  $table: Component
  //过滤列的过滤数据信息
  filters: object
}
      `
    },
    {
      name: 'IFooterCellClickArgs',
      type: 'type',
      depTypes: ['IColumnConfig'],
      code: `
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
      `
    },
    {
      name: 'IContextMenuArgs',
      type: 'type',
      depTypes: ['IColumnConfig'],
      code: `
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
      `
    },
    {
      name: 'IFooterCellDblClickArgs',
      type: 'type',
      depTypes: ['IColumnConfig'],
      code: `
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
      `
    },
    {
      name: 'IHeaderCellClickArgs',
      type: 'type',
      depTypes: ['IColumnConfig'],
      code: `
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
      `
    },
    {
      name: 'IHeaderCellDblClickArgs',
      type: 'type',
      depTypes: ['IColumnConfig'],
      code: `
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
      `
    },
    {
      name: 'IResizableChangeArgs',
      type: 'type',
      depTypes: ['IColumnConfig'],
      code: `
interface IResizableChangeArgs {
  // table组件的vue 实例 
  $table: Component,
  // 列配置信息 
  column: IColumnConfig 
  // 拖动列的索引
  columnIndex: number
  // 是否固定列
  fixed: boolean
}
      `
    },
    {
      name: 'IResizableConfig',
      type: 'type',
      code: `
interface IResizableConfig {
  // 拖拽宽度限制函数，field: 当前拖拽的列名，width: 当前拖拽的宽度
  limit: ({ field: string, width: number }) => number
}
      `
    },
    {
      name: 'IScrollArgs',
      type: 'type',
      code: `
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
      `
    },
    {
      name: 'ISelectAllArgs',
      type: 'type',
      depTypes: ['IColumnConfig'],
      code: `
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
      `
    },
    {
      name: 'IToggleExpandChangeArgs',
      type: 'type',
      code: `
interface IToggleExpandChangeArgs { 
  // 表格实例对象信息
  $table: Component,
  //点击展开行的数据信息对象
  row: IRow
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
  $table: Component,
  //点击展开行的数据信息对象
  row: IRow
  // 点击展开行的下标 
  rowIndex: number
}
      `
    },
    {
      name: 'IValidErrorArgs',
      type: 'type',
      depTypes: ['IColumnConfig'],
      code: `
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
      `
    },
    {
      name: 'ISortChangeArgs',
      type: 'type',
      depTypes: ['IColumnConfig'],
      code: `
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
      `
    },
    {
      name: 'IClassNameArgs',
      type: 'type',
      depTypes: ['IColumnConfig'],
      code: `
interface IClassNameArgs {
  seq: number
  row: IRow
  rowIndex: number
  $rowIndex: number
  column: IColumnConfig
  columnIndex: number
  $columnIndex: number
}
      `
    },
    {
      name: 'IIndexMethodArgs',
      type: 'type',
      depTypes: ['IColumnConfig'],
      code: `
interface IIndexMethodArgs {
  row: IRow
  rowIndex: number
  column: IColumnConfig
  columnIndex: number
}
      `
    },
    {
      name: 'IFormatConfig',
      type: 'type',
      depTypes: ['IColumnConfig'],
      code: `
interface IFormatConfig {
  // 列数据源
  data: IColumnConfig[] 
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
  $grid: Component 
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
      depTypes: ['IColumnConfig'],
      code: `
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
      `
    },
    {
      name: 'IExportCsvOptions',
      depTypes: ['IRow'],
      type: 'type',
      code: `
interface IExportCsvOptions {
  filename: string
  original: boolean
  isHeader: boolean
  data: IRow[]
}
      `
    },
    {
      name: 'IEditorConfig',
      type: 'type',
      code: `
interface IEditorConfig {
  // 内置组件名称或者自定义组件实例
  component: 'input' | 'select' | Component
  // 传递给组件的事件集合
  events?: {
    [event]: () => void
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
  // 设置在显示枚举选项功能(enumable)下制定静态数据源，也可以是函数返回一个Promise对象
  values: {
    // 设置枚举数据的显示值属性字段， 默认'label'
    label: string
    // 设置枚举数据的实际值属性字段， 默认'value'
    value: string 
  }[] | () => Promise
}
      `
    },
    {
      name: 'IFormatText',
      type: 'type',
      code: `
      'money' | 'enum' | 'select' | 'number' | 'integer' | 'filesize' | 'date' | 'dateTime' | 'longDateTime' | 'time' | 'longTime' | 'yearMonth' | 'ellipsis' | 'rate' | 'boole' | (params)=> string
      `
    },
    {
      name: 'IToolbarSetting',
      type: 'type',
      code: `
      interface IToolbarSetting {
        remote?: boolean
        storage?: string
        sortable?: Sortable 
      }
      `
    }
  ]
}
