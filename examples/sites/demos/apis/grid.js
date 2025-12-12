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
              'Alignment mode for all table columns; optional values are left (left-aligned), center (center-aligned), and right (right-aligned)'
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
            'en-US': 'Whether to enable automatic service requests; effective when fetch-data is configured'
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
              'Responsive listening for the parent element (useful in scenarios where the parent element may undergo dynamic changes)'
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
            'en-US': 'Whether a vertical border is present'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-appearance-settings#appearance-settings-grid-border',
          mfDemo: ''
        },
        {
          name: 'cell-class-name',
          typeAnchorName: 'ICellClassNameArgs',
          type: 'string | (args: ICellClassNameArgs) => string',
          defaultValue: '',
          desc: {
            'zh-CN': '给单元格附加 className，也可以是函数',
            'en-US': 'Add a className to a cell; can also be a function'
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
            'en-US':
              'Whether to set the key attribute for VNodes in each column (not required unless under special circumstances)'
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
              'Set the minimum adjustable width; defaults to column header span width + 36 (fixed header width) if not set; applies to all minimum column widths; remaining space is automatically allocated proportionally; optional values are integers, px, %'
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
            'en-US': 'Width of all columns; optional values are integers, px, %'
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
            'en-US': 'Configure a set of column anchors'
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
            'en-US': 'Configuration information for table columns; refer to column configuration items for details'
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
              'This field must be configured when encapsulating grid-column, provided for table configuration collection'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-faq#custom-column'
        },
        {
          name: 'customs',
          typeAnchorName: 'ICustomConfig',
          type: 'ICustomConfig[]',
          defaultValue: '',
          desc: {
            'zh-CN': '表格的初始化个性配置，可以控制表格列是否隐藏，设置列宽。优先级高于grid-column上的配置。',
            'en-US':
              'Initialize the table personalized configuration to control whether the table columns are hidden and set the column width. It takes precedence over the configuration on grid-column.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-faq#custom-column'
        },
        {
          name: 'data',
          typeAnchorName: 'IRow',
          type: 'Row[]',
          defaultValue: '',
          desc: {
            'zh-CN': '设置表格的数据',
            'en-US': 'Set the data for the table'
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
            'en-US': 'Server-side data deletion method'
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
            'en-US': 'Table drag-and-drop configuration item'
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
            'en-US': 'Table editing configuration item'
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
            'en-US': 'Validation rule configuration item'
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
            'en-US': 'Expandable row configuration item'
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
            'en-US': 'Server-side data query method'
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
            'en-US': 'Whether the widths of all columns are automatically expanded'
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
              'Alignment mode for all footer columns; optional values are left (left-aligned), center (center-aligned), and right (right-aligned)'
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
            'en-US': 'Add a className to footer cells; can also be a function'
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
              'Calculation method for footer totals; columns: all column configuration data, data: current table data'
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
            'en-US': 'Add a className to footer rows'
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
            'en-US':
              'Merge rows or columns in the footer; this function returns the calculated value; set footer total row or column logic via footer-method and footer-span-method, requires show-footer to be configured'
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
              'Alignment mode for all header columns; optional values are left (left-aligned), center (center-aligned), and right (right-aligned)'
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
            'en-US': 'Add a className to header cells; can also be a function'
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
            'en-US': 'Add a className to header rows; can also be a function'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-custom-style#custom-style-header-style',
          mfDemo: ''
        },
        {
          name: 'header-suffix-icon-absolute',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '表格属性 header-suffix-icon-absolute 设置为 true，表头后置图标使用绝对定位。默认值为 false',
            'en-US':
              'When the table property header-suffix-icon-absolute is set to true, the header suffix icon uses absolute positioning; default value is false'
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
              '设置表格内容区域（不含表格头部，底部）的高度。不设置时，表格内容区域的高度度自适应；表格的高度；支持铺满父容器或者固定宽高；该属性的可选值为 整数, px，%',
            'en-US':
              'Set the height of the table content area (excluding header and footer); if not set, the height adapts automatically; table height; supports filling the parent container or fixed height; optional values are integers, px, %'
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
            'en-US': 'Effective only when editConfig is configured; whether to highlight cell borders during editing'
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
            'en-US': 'Whether to highlight the current column'
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
            'en-US': 'Whether to highlight the current row'
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
            'en-US': 'Whether to highlight a column when the mouse hovers over it'
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
            'en-US': 'Whether to highlight a row when the mouse hovers over it'
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
            'en-US': 'Configuration for table intersection detection; refer to IntersectionObserver configuration'
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
              'Set whether table columns are loaded asynchronously; whether to enable asynchronous column functionality, used with scrollLoad'
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
              '是否打开页面改变时的前置处理特性。在值为 true 时，翻页操作或者改变页大小操作不会立即生效，留给用户处理业务逻辑，之后通过调用预留的 callback 或者 rollback 使之生效或者失效，详看事件 before-page-change',
            'en-US':
              'Whether to enable preprocessing when the page changes; when set to true, page turning or page size changes do not take effect immediately, allowing users to handle business logic, then activated or canceled via the reserved callback or rollback; see the before-page-change event for details'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-event#event-page-before-change-event',
          mfDemo: ''
        },
        {
          name: 'is-drag-header-sorting',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '是否拖拽表头调整列顺序。默认值为 false',
            'en-US': 'Whether to drag the header to adjust column order; default value is false'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'is-multiple-history',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '是否开启模板管理服务端存储功能。默认值为 false',
            'en-US': 'Whether to enable server-side storage for template management; default value is false'
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
            'en-US': 'Keyboard configuration item'
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
            'en-US': 'Whether the table displays a loading state'
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
            'zh-CN': '自定义表格 loading',
            'en-US': 'Custom table loading component'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-loading#loading-grid-custom-loading'
        },
        {
          name: 'max-height',
          type: 'number | string',
          defaultValue: '',
          desc: {
            'zh-CN': '设置表格内容区域（不含表格头部，底部）的最大高度；该属性的可选值为：整数, px，%',
            'en-US':
              'Set the maximum height of the table content area (excluding header and footer); optional values are integers, px, %'
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
            'en-US': 'Set the minimum height of the table content area (excluding header and footer)'
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
            'en-US': 'Mouse configuration item'
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
            'en-US': 'Optimization configuration item for table virtual scrolling'
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
            'en-US': 'Pagination configuration item'
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
            'en-US': 'Additional parameters'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'prefetch',
          type: 'boolean|Array',
          defaultValue: '',
          desc: {
            'zh-CN': '是否开启数据预加载',
            'en-US': 'Whether to enable data preloading'
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
            'en-US': 'Radio button configuration item'
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
            'en-US': 'Whether all columns use server-side filtering; if set to true, data will not be processed locally'
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
            'en-US': 'Whether to sort all server-side data; defaults to false, no server-side sorting'
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
            'en-US': 'Render content for empty data'
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
            'en-US': 'Custom rendering of the table footer'
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
            'en-US': 'Set whether column width adjustment is allowed'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-size#size-resize-column-width',
          mfDemo: ''
        },
        {
          name: 'resizable-config',
          typeAnchorName: 'IResizableConfig',
          type: 'IResizableConfig',
          defaultValue: '',
          meta: {
            stable: '3.19.0'
          },
          desc: {
            'zh-CN': '设置列宽拖拽参数',
            'en-US': 'Set parameters for column width dragging'
          },
          mode: ['pc', 'mobile-first'],
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
            'en-US': 'Custom table row class name for customizing row styles; can be a string or a function'
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
            'en-US': 'The row-group attribute configures row grouping, grouping columns with the same value for display'
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
              'Field name for the unique primary key of custom row data (row data must have a unique key, automatically generated by default)'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-operation-column#operation-column-grid-pager-reserve',
          mfDemo: ''
        },
        {
          name: 'row-key',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '是否需要为每一行的 VNode 设置 key 属性（非特殊情况下没必要设置）',
            'en-US':
              "Whether to set the key attribute for each row's VNode (not necessary unless under special circumstances)"
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
              'Set row merging; this attribute applies only to regular tables and cannot be used with tree-config'
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
            'en-US': 'Server-side data saving method'
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
            'en-US': 'Scroll loading configuration'
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
            'en-US': 'Checkbox configuration item'
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
              'Set whether row sequence numbers are continuous; effective when pagination is enabled and showSeq is true'
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
            'en-US': 'Whether to display the footer total'
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
              'Set whether to display an ellipsis when header content is too long; optional values are ellipsis (show only ellipsis), title (also show native title), tooltip (also show tooltip)'
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
              'Set whether to display an ellipsis when content is too long (recommended for fixed columns to improve rendering speed); optional values are ellipsis (show only ellipsis), title (also show native title), tooltip (also show tooltip)'
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
            'en-US': 'Whether to prompt when switching pages with unsaved data'
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
            'en-US': 'Table size; optional values are medium, small, mini'
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
            'en-US': 'Sort configuration item'
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
              'Custom sorting method for all columns; called when sorting is triggered to return sorted results; similar to native sort method'
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
            'en-US': 'Set whether column data sorting is allowed; defaults to true (sortable)'
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
            'en-US': 'Merge rows or columns; this function returns the calculated value'
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
            'en-US': 'Effective only for columns with type=index; starting value of dynamic index'
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
            'en-US': 'Whether to display zebra stripes'
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
            'en-US': 'Table statistics function configuration item'
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
              'Responsive tracking of a property (useful in scenarios where display/hide toggling is controlled by a property)'
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
          linkTo: 'tooltip#tooltip--props',
          type: 'Tooltip.Props',
          defaultValue: '',
          desc: {
            'zh-CN': 'Grid 内置 tooltip 配置项，配置项将透传至 Tooltip，请参考 Tooltip 组件属性说明',
            'en-US':
              "Configuration item for Grid's built-in tooltip; passed through to Tooltip; refer to Tooltip component property description"
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
            'en-US': 'Tree structure configuration item'
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
            'en-US': 'Validation configuration item'
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
          meta: {
            stable: '3.18.0'
          },
          defaultValue: '',
          desc: {
            'zh-CN': '在新增或者删除列后，列配置是异步更新的，列配置刷新后触发的回调',
            'en-US':
              'Callback triggered after column configuration is asynchronously updated following the addition or deletion of columns'
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
            'en-US':
              'Triggered when enabling preprocessing for page changes and performing page turning or page size change operations'
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
            'en-US': 'Event triggered before displaying the editing component when clicking a cell'
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
            'en-US': 'Event triggered by the confirm button in the prompt dialog when switching pages with unsaved data'
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
            'en-US': 'Event triggered when a cell is clicked'
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
            'en-US': 'Event triggered when a cell is right-clicked'
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
            'en-US': 'Event triggered when a cell is double-clicked'
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
            'en-US': 'Event triggered when a cell is hovered over'
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
            'en-US': 'Event triggered when a cell hover exits'
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
            'en-US': 'Effective only when context-menu is configured; triggered when the context menu is clicked'
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
              'Effective only for highlightCurrentRow; triggered when a row is manually selected and the value changes'
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
            'en-US': 'Event triggered when a cell is activated for editing'
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
            'en-US': 'Event triggered when a cell in editing state is closed'
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
            'en-US': 'Event triggered when a cell is activated but in a disabled state'
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
            'en-US': 'Event triggered when filter conditions change'
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
            'en-US': 'Event triggered when a footer cell is clicked'
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
            'en-US': 'Event triggered when a footer cell is right-clicked'
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
            'en-US': 'Event triggered when a footer cell is double-clicked'
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
            'en-US': 'Event triggered when entering or exiting fullscreen'
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
            'en-US': 'Event triggered when a header cell is clicked'
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
            'en-US': 'This event is triggered when a table header cell is right-clicked'
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
              'This event is valid only when pager-config is configured. This event is triggered when pagination changes'
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
              'This event is valid only for type=radio. It is triggered when a selection is made manually and the value changes'
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
            'en-US': 'This event is triggered when the column width is dragged and changed'
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
            'en-US': 'This event is triggered when the table is scrolled'
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
            'en-US': 'This event is valid only for type=selection. It is triggered when all items are manually selected'
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
              'This event is valid only for type=selection. It is triggered when a selection is made manually and the value changes'
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
            'en-US': 'This event is triggered before data sorting is executed when a column header is clicked'
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
            'en-US': 'This event is triggered when a row is expanded or collapsed'
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
            'en-US': 'This event is triggered when a group is expanded or collapsed'
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
            'en-US': 'This event is triggered when a tree node is expanded or collapsed'
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
              'This event is valid only when toolbar.buttons is configured. It is triggered when a toolbar button is clicked'
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
            'en-US': 'This event is triggered when data validation fails'
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
            'en-US': 'Manually clear the cell activation state'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-edit#edit-has-row-change'
        },
        {
          name: 'clearAll',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN':
              '手动清除表格所有条件，还原到初始状态（对于增删改查的场景中可能会用到，比如在数据保存之后清除表格缓存）',
            'en-US':
              'Manually clear all conditions in the table and restore it to the initial state (useful in scenarios involving adding, deleting, modifying, and querying, such as clearing the table cache after saving data)'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-toolbar#toolbar-insert-delete-update'
        },
        {
          name: 'clearCurrentColumn',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '用于当前列，手动清空当前高亮的状态',
            'en-US': 'For the current column, manually clear the highlighted state'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-highlight#highlight-highlight-current-column'
        },
        {
          name: 'clearCurrentRow',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '用于当前行，手动清空当前高亮的状态',
            'en-US': 'For the current row, manually clear the highlighted state'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-highlight#highlight-highlight-current-row'
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
              'Manually clear cell content; if no parameters are passed, clear the entire table content; if a row is passed, clear the specified row content; if a specific field is passed, clear that field’s content'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-toolbar#toolbar-clear-data'
        },
        {
          name: 'clearFilter',
          type: '(field: string)=> void',
          defaultValue: '',
          desc: {
            'zh-CN': '手动清空筛选条件（如果不传 field 则清空所有筛选条件），数据会恢复成未筛选的状态',
            'en-US':
              'Manually clear filter conditions (if no field is passed, clear all filter conditions), and the data will return to an unfiltered state'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-filter#filter-default-filter'
        },
        {
          name: 'clearRadioRow',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '用于单选行，手动清空用户的选择',
            'en-US': 'For single-select rows, manually clear the user’s selection'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-operation-column#operation-column-clear-and-set-radio-row'
        },
        {
          name: 'clearRowExpand',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '手动清空展开行状态，数据会恢复成未展开的状态',
            'en-US': 'Manually clear the expanded row state, and the data will return to an unexpanded state'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-expand#expand-set-row-expansion'
        },
        {
          name: 'clearScroll',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '手动清除滚动相关信息，还原到初始状态',
            'en-US': 'Manually clear scroll-related information and restore to the initial state'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-size#size-max-min-grid-height'
        },
        {
          name: 'clearSelected',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '手动清除单元格选中状态',
            'en-US': 'Manually clear the cell selection state'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-highlight#highlight-highlight-cell'
        },
        {
          name: 'clearSelection',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '用于多选行，手动清空用户的选择',
            'en-US': 'For multi-select rows, manually clear the user’s selection'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-operation-column#operation-column-selection-operation'
        },
        {
          name: 'clearSort',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '手动清空排序条件，数据会恢复成未排序的状态',
            'en-US': 'Manually clear sorting conditions, and the data will return to an unsorted state'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-sort#sort-default-sort'
        },
        {
          name: 'clearTreeExpand',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '手动清空树形节点的展开状态，数据会恢复成未展开的状态',
            'en-US': 'Manually clear the expanded state of tree nodes, and the data will return to an unexpanded state'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-tree-table#tree-table-tree-grid-insert-delete-update'
        },
        {
          name: 'getTreeExpandeds',
          type: '() => IRow[]',
          defaultValue: '',
          meta: {
            stable: '3.22.0'
          },
          desc: {
            'zh-CN': '获取展开的行数据',
            'en-US': 'Get the expanded row data'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-tree-table#tree-table-tree-grid-expand'
        },
        {
          name: 'closeFilter',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '手动关闭筛选面板（某些特殊场景可能会用到）',
            'en-US': 'Manually close the filter panel (may be used in certain special scenarios)'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-filter#filter-default-filter'
        },
        {
          name: 'closeMenu',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '手动关闭快捷菜单（某些特殊场景可能会用到）',
            'en-US': 'Manually close the context menu (may be used in certain special scenarios)'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-context-menu#context-menu-cell-menu'
        },
        {
          name: 'createRow',
          typeAnchorName: 'IRow',
          type: '(records: IRow | IRow[])=> Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '创建 IRow | IRows 对象（对于某些特殊场景需要对数据进行手动插入时可能会用到）',
            'en-US':
              'Create an IRow | IRows object (may be used in certain special scenarios requiring manual data insertion)'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-tree-table#tree-table-tree-grid-insert-delete-update'
        },
        {
          name: 'exportCsv',
          typeAnchorName: 'IExportCsvOptions',
          type: '(options: IExportCsvOptions)=> void',
          defaultValue: '',
          desc: {
            'zh-CN': '将表格数据导出为 .csv 文件（支持所有主流的浏览器，不支持合并行或列）',
            'en-US':
              'Export table data to a .csv file (supported by all mainstream browsers, does not support merging rows or columns)'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-import-export#import-export-export-excel'
        },
        {
          name: 'fullValidate',
          typeAnchorName: 'IRow',
          type: '(rows: IRow[], callback: () => void)=> Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '表格完整校验函数，和 validate 的区别就是会对全量数据的所有规则进行完整校验',
            'en-US':
              'A complete table validation function, differing from validate in that it performs a full validation of all rules for all data'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-validation#validation-before-submit-validation'
        },
        {
          name: 'getActiveRow',
          typeAnchorName: 'IRow',
          type: '() => IRow',
          defaultValue: '',
          desc: {
            'zh-CN': '获取已激活的行数据',
            'en-US': 'Get the activated row data'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-edit#edit-trigger-mode-hm-editing'
        },
        {
          name: 'getColumnByField',
          typeAnchorName: 'IColumnConfig',
          type: '(field: string)=> IColumnConfig',
          defaultValue: '',
          desc: {
            'zh-CN': '根据列的字段名获取列',
            'en-US': 'Get a column by its field name'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-large-data#large-data-scroll-to'
        },
        {
          name: 'getColumnById',
          typeAnchorName: 'IColumnConfig',
          type: '(colid: string)=> IColumnConfig',
          defaultValue: '',
          desc: {
            'zh-CN': '根据列的唯一主键获取列',
            'en-US': 'Get a column by its unique primary key'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: ''
        },
        {
          name: 'getColumnIndex',
          typeAnchorName: 'IColumnConfig',
          type: '(column: IColumnConfig)=> number',
          defaultValue: '',
          desc: {
            'zh-CN': '根据 column 获取相对于 columns 中的索引',
            'en-US': 'Get the index relative to columns based on the column'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: ''
        },
        {
          name: 'getColumnNode',
          typeAnchorName: 'IColumnConfig',
          type: '(cell: HTMLElement)=> IColumnConfig',
          defaultValue: '',
          desc: {
            'zh-CN': '根据 th/td 元素获取对应的 column 信息',
            'en-US': 'Get the corresponding column information based on the th/td element'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: ''
        },
        {
          name: 'getColumns',
          typeAnchorName: 'IColumnConfig',
          type: '(columnIndex?: number)=> IColumnConfig | IColumnConfig[]',
          defaultValue: '',
          desc: {
            'zh-CN': '获取表格的可视列，也可以指定索引获取列',
            'en-US': 'Get the visible columns of the table, or specify an index to get a column'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-custom#custom-server-storage'
        },
        {
          name: 'getCurrentRow',
          typeAnchorName: 'IRow',
          type: '() => IRow',
          defaultValue: '',
          desc: {
            'zh-CN': '用于当前行，获取当前行的数据',
            'en-US': 'For the current row, get the data of the current row'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-event#event-get-row-method'
        },
        {
          name: 'getData',
          typeAnchorName: 'IRow',
          type: '(rowIndex?: number)=> IRow | IRow[]',
          defaultValue: '',
          desc: {
            'zh-CN': '获取数据，和 data 的行为一致，也可以指定索引获取数据',
            'en-US': 'Get data, consistent with the behavior of data, or specify an index to get data'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-toolbar#toolbar-clear-data'
        },
        {
          name: 'getInsertRecords',
          typeAnchorName: 'IRow',
          type: '() => IRow[]',
          defaultValue: '',
          desc: {
            'zh-CN': '获取新增的数据',
            'en-US': 'Get the newly added data'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-toolbar#toolbar-insert-delete-update'
        },
        {
          name: 'getRadioRow',
          typeAnchorName: 'IRow',
          type: '() => IRow',
          defaultValue: '',
          desc: {
            'zh-CN': '用于单选行，获取当已选中的数据',
            'en-US': 'For single-select rows, get the currently selected data'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-event#event-get-row-method'
        },
        {
          name: 'getRecordset',
          typeAnchorName: 'IRecordset',
          type: '() => IRecordset',
          defaultValue: '',
          desc: {
            'zh-CN': '获取表格数据集（获取新增、删除、更改的数据，对于增删改查表格非常方便）',
            'en-US':
              'Get the table dataset (retrieve added, deleted, and modified data, very convenient for tables with CRUD operations)'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-toolbar#toolbar-insert-delete-update'
        },
        {
          name: 'getRemoveRecords',
          typeAnchorName: 'IRow',
          type: '() => IRow[]',
          defaultValue: '',
          desc: {
            'zh-CN': '获取已删除的数据',
            'en-US': 'Get the deleted data'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-toolbar#toolbar-insert-delete-update'
        },
        {
          name: 'getRowById',
          typeAnchorName: 'IRow',
          type: '(rowid: string)=> IRow',
          defaultValue: '',
          desc: {
            'zh-CN': '根据行的唯一主键获取行',
            'en-US': 'Get a row by its unique primary key'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-event#event-get-row-method'
        },
        {
          name: 'getRowIndex',
          typeAnchorName: 'IRow',
          type: '(row: IRow)=> number',
          defaultValue: '',
          desc: {
            'zh-CN': '根据 row 获取相对于 data 中的索引',
            'en-US': 'Get the index relative to data based on the row'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-event#event-get-row-method'
        },
        {
          name: 'getRowNode',
          typeAnchorName: 'IRow',
          type: '(tr: HTMLElement)=> IRow',
          defaultValue: '',
          desc: {
            'zh-CN': '根据 tr 元素获取对应的 row 信息',
            'en-US': 'Get the corresponding row information based on the tr element'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-event#event-get-row-method'
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
            'en-US': 'Get all selected data saved across pagination'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-operation-column#operation-column-grid-pager-reserve'
        },
        {
          name: 'getSelectRecords',
          typeAnchorName: 'IRow',
          type: '() => IRow[]',
          defaultValue: '',
          desc: {
            'zh-CN': '用于多选行，获取当前页已选中的数据',
            'en-US': 'For multi-select rows, get the selected data on the current page'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-toolbar#toolbar-insert-delete-update'
        },
        {
          name: 'getTableColumn',
          typeAnchorName: 'IRow',
          type: '() => IRow[]',
          defaultValue: '',
          desc: {
            'zh-CN': '获取当前表格的列（完整的全量表头列、处理条件之后的全量表头列、当前渲染中的表头列）',
            'en-US':
              'Get the columns of the current table (complete full header columns, full header columns after processing conditions, currently rendered header columns)'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-custom#custom-hide-column'
        },
        {
          name: 'getTableData',
          typeAnchorName: 'IRow',
          type: '() => IRow[]',
          defaultValue: '',
          desc: {
            'zh-CN': `
            获取当前表格的数据（完整的全量表体数据、处理条件之后的全量表体数据、当前渲染中的表体数据、当前渲染中的表尾数据） <br/>
            footerData: 表尾数据。 <br/>
            fullData: 表格全量数据。  <br/>
            visibleData: 经过筛选处理后，表格可视数据。 <br/>
            tableData: 经过虚拟滚动剪切处理和筛选处理，表格实际用于渲染的数据。<br/>
            `,
            'en-US':
              'Get the data of the current table (complete full body data, full body data after processing conditions, currently rendered body data, currently rendered footer data)'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-toolbar#toolbar-clear-data'
        },
        {
          name: 'getUpdateRecords',
          typeAnchorName: 'IRow',
          type: '() => IRow[]',
          defaultValue: '',
          desc: {
            'zh-CN': '获取已修改的数据',
            'en-US': 'Get the modified data'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-toolbar#toolbar-insert-delete-update'
        },
        {
          name: 'handleFetch',
          type: '(code: "reload") => Promise<null>',
          defaultValue: '',
          desc: {
            'zh-CN': '触发表格的 fetch-data，当 code="reload" 时会将分支重置为 1，且清除筛选、排序等条件',
            'en-US': 'Trigger the fetch-data of the table'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-data-source#data-source-request-service'
        },
        {
          name: 'hasActiveRow',
          typeAnchorName: 'IRow',
          type: '(row: IRow)=> boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '检查行是否已激活为编辑状态',
            'en-US': 'Check if the row has been activated for editing'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-edit#edit-trigger-mode-hm-editing'
        },
        {
          name: 'hasRowChange',
          typeAnchorName: 'IRow',
          type: '(row: IRow, field: string)=> boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '检查行或列数据是否发生改变',
            'en-US': 'Check if the row or column data has changed'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-edit#edit-has-row-change'
        },
        {
          name: 'hasRowExpand',
          typeAnchorName: 'IRow',
          type: '(row: IRow)=> boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '检查行是否已展开',
            'en-US': 'Check if the row is expanded'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-expand#expand-has-row-expand'
        },
        {
          name: 'hasTreeExpand',
          typeAnchorName: 'IRow',
          type: '(row: IRow)=> boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '检查树节点是否已展开',
            'en-US': 'Check if the tree node is expanded'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-tree-table#tree-table-has-tree-expand'
        },
        {
          name: 'hideColumn',
          typeAnchorName: 'IColumnConfig',
          type: '(column: IColumnConfig)=> Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '隐藏指定列',
            'en-US': 'Hide the specified column'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-custom#custom-hide-column'
        },
        {
          name: 'insert',
          typeAnchorName: 'IRow',
          type: '(records: IRow | IRow[])=> Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '在表格中新增数据；往表格插入数据，从第一行新增一行或多行新数据',
            'en-US': 'Add data to the table; insert data into the table, adding one or more new rows from the first row'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-toolbar#toolbar-insert-delete-update'
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
              'Insert data into the table from a specified position, adding one or more rows; second parameter: row specifies the position (tree tables not supported), null inserts from the first row, -1 inserts from the last row'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-toolbar#toolbar-insert-remove-rows'
        },
        {
          name: 'loadColumn',
          typeAnchorName: 'IColumnConfig',
          type: '(columns: IColumnConfig[])=> Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '加载列配置（对于表格列需要重载、局部递增场景下可能会用到）',
            'en-US':
              'Load column configuration (may be used in scenarios where table columns need to be reloaded or incrementally updated)'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-large-data#large-data-load-column'
        },
        {
          name: 'loadData',
          typeAnchorName: 'IRow',
          type: '(data: IRow[])=> Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '加载数据（对于表格数据需要重载、局部递增场景下可能会用到）',
            'en-US':
              'Load data (may be used in scenarios where table data needs to be reloaded or incrementally updated)'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-large-data#large-data-full-data-loading'
        },
        {
          name: 'recalculate',
          type: '() => Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '重新计算表格（对于某些特殊场景可能会用到，比如隐藏的表格、更新列宽...等）',
            'en-US':
              'Recalculate the table (may be used in special scenarios, such as hidden tables, updating column widths, etc.)'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-size#size-recalculate'
        },
        {
          name: 'refreshColumn',
          type: '() => Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '刷新列配置（对于显示/隐藏列场景下可能会用到）',
            'en-US': 'Refresh column configuration (may be used in scenarios involving showing/hiding columns)'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-custom#custom-hide-column'
        },
        {
          name: 'refreshData',
          type: '() => Promise',
          defaultValue: '',
          desc: {
            'zh-CN':
              '同步刷新 data 数据；如果用了该方法，那么组件将不再记录增删改的状态，只能自行实现对应逻辑（对于某些特殊的场景，比如深层树节点元素发生变动时可能会用到）',
            'en-US':
              'Synchronously refresh data; if this method is used, the component will no longer track add/delete/modify states, requiring manual implementation of the corresponding logic (may be used in special scenarios, such as changes to deep tree node elements)'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-tree-table#tree-table-tree-grid-insert-delete-update'
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
              'Initialize loading of shown/hidden columns (may be used in asynchronous update scenarios), customs represents the column information set, sortable indicates whether to load in column order'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-custom#custom-server-storage'
        },
        {
          name: 'remove',
          typeAnchorName: 'IRow',
          type: '(rows: IRow | IRow[])=> Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '删除指定行数据，指定 row 或 [row, ...] 删除多条数据，如果为空则删除所有数据',
            'en-US':
              'Delete specified row data; specify row or [row, ...] to delete multiple rows, if empty, delete all data'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-toolbar#toolbar-insert-delete-update'
        },
        {
          name: 'removeSelecteds',
          type: '() => Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '删除已选中的所有行数据',
            'en-US': 'Delete all selected row data'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-toolbar#toolbar-insert-delete-update'
        },
        {
          name: 'resetAll',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '手动重置列的所有操作，还原到初始状态（如果已关联工具栏，则会同步更新）',
            'en-US':
              'Manually reset all column operations and restore to the initial state (if linked to a toolbar, it will update synchronously)'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-custom#custom-reset-resizable'
        },
        {
          name: 'resetCustoms',
          type: '() => Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '手动重置列的显示/隐藏操作，还原到初始状态（如果已关联工具栏，则会同步更新）',
            'en-US':
              'Manually reset column show/hide operations and restore to the initial state (if linked to a toolbar, it will update synchronously)'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-custom#custom-reset-resizable'
        },
        {
          name: 'resetResizable',
          type: '() => Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '手动重置列宽拖动的操作，还原到初始状态（如果已关联工具栏，则会同步更新）',
            'en-US':
              'Manually reset column width dragging operations and restore to the initial state (if linked to a toolbar, it will update synchronously)'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-custom#custom-reset-resizable'
        },
        {
          name: 'revertData',
          typeAnchorName: 'IRow',
          type: '(rows: IRow | IRow[], field?: string)=> Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '还原更改，还原指定行 row 或者整个表格的数据',
            'en-US': 'Revert changes, restoring the specified row or the entire table’s data'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-edit#edit-revert-data'
        },
        {
          name: 'scrollTo',
          type: '(scrollLeft: number, scrollTop: number)=> Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '如果有滚动条，则滚动到对应的位置',
            'en-US': 'If there is a scrollbar, scroll to the corresponding position'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-large-data#large-data-scroll-to'
        },
        {
          name: 'scrollToColumn',
          typeAnchorName: 'IColumnConfig',
          type: '(column: IColumnConfig)=> Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '如果有滚动条，则滚动到对应的列',
            'en-US': 'If there is a scrollbar, scroll to the corresponding column'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-large-data#large-data-scroll-to'
        },
        {
          name: 'scrollToRow',
          typeAnchorName: 'IRow',
          type: '(row: IRow)=> Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '如果有滚动条，则滚动到对应的行',
            'en-US': 'If there is a scrollbar, scroll to the corresponding row'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-large-data#large-data-scroll-to'
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
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-edit#edit-trigger-mode-hm-editing'
        },
        {
          name: 'setActiveRow',
          typeAnchorName: 'IRow',
          type: '(row: IRow)=> Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '激活行编辑，如果是 mode=cell 则默认激活第一个单元格',
            'en-US': 'Activate row editing; if mode=cell, the first cell is activated by default'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-edit#edit-trigger-mode-hm-editing'
        },
        {
          name: 'setAllRowExpansion',
          type: '(checked: boolean)=> Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '设置所有行的展开与否',
            'en-US': 'Set whether all rows are expanded'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-expand#expand-set-row-expansion'
        },
        {
          name: 'setAllSelection',
          type: '(checked: boolean)=> void',
          defaultValue: '',
          desc: {
            'zh-CN': '入参为boolean,用于多选行，设置所有行的选中状态,',
            'en-US': 'The parameter is a boolean, used for multi-select rows to set the selection state of all rows'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-operation-column#operation-column-selection-operation'
        },
        {
          name: 'setAllTreeExpansion',
          type: '(checked: boolean)=> Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '设置所有树节点的展开与否',
            'en-US': 'Set whether all tree nodes are expanded'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-tree-table#tree-table-set-tree-expansion'
        },
        {
          name: 'setCurrentRow',
          typeAnchorName: 'IRow',
          type: '(row: IRow)=> Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '用于当前行，设置某一行为高亮状态',
            'en-US': 'For the current row, set a specific row to a highlighted state'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-highlight#highlight-set-current-row'
        },
        {
          name: 'setRadioRow',
          typeAnchorName: 'IRow',
          type: '(row: IRow)=> Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '用于单选行，设置某一行为选中状态',
            'en-US': 'For single-select rows, set a specific row to a selected state'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-operation-column#operation-column-clear-and-set-radio-row'
        },
        {
          name: 'setRowExpansion',
          typeAnchorName: 'IRow',
          type: '(rows: IRow | IRow[], checked: boolean)=> Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '设置展开行，第二个参数设置这一行展开与否',
            'en-US': 'Set expanded rows; the second parameter determines whether the row is expanded'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-expand#expand-set-row-expansion'
        },
        {
          name: 'setSelection',
          typeAnchorName: 'IRow',
          type: '(rows: IRow | IRow[], checked: boolean)=> Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '用于多选行，设置行为选中状态，第二个参数为选中与否',
            'en-US':
              'For multi-select rows, set the selection state of rows; the second parameter determines whether they are selected'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-operation-column#operation-column-selection-operation'
        },
        {
          name: 'setTreeExpansion',
          typeAnchorName: 'IRow',
          type: '(rows: IRow | IRow[], checked: boolean)=> Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '设置展开树形节点，第二个参数设置这一行展开与否',
            'en-US': 'Set expanded tree nodes; the second parameter determines whether the row is expanded'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-tree-table#tree-table-set-tree-expansion'
        },
        {
          name: 'showColumn',
          typeAnchorName: 'IColumnConfig',
          type: '(column: IColumnConfig)=> Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '显示指定列',
            'en-US': 'Show the specified column'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-custom#custom-hide-column'
        },
        {
          name: 'sort',
          type: "(field: string, order?: 'asc' | 'desc')=> Promise",
          defaultValue: '',
          desc: {
            'zh-CN': '手动对表格进行排序（如果 order 为空则自动切换排序）',
            'en-US': 'Manually sort the table (automatically toggles sorting if order is empty)'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-sort#sort-sort'
        },
        {
          name: 'toggleAllSelection',
          type: '() => Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '用于多选行，切换所有行的选中状态',
            'en-US': 'For multi-select rows, toggle the selection state of all rows'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-operation-column#operation-column-selection-operation'
        },
        {
          name: 'toggleRowExpansion',
          typeAnchorName: 'IRow',
          type: '(row: IRow)=> Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '用于可展开表格，切换展开行',
            'en-US': 'For expandable tables, toggle row expansion'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-expand#expand-set-row-expansion'
        },
        {
          name: 'toggleRowSelection',
          typeAnchorName: 'IRow',
          type: '(row: IRow)=> Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '用于多选行，切换某一行的选中状态',
            'en-US': 'For multi-select rows, toggle the selection state of a specific row'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-operation-column#operation-column-selection-operation'
        },
        {
          name: 'toggleTreeExpansion',
          typeAnchorName: 'IRow',
          type: '(row: IRow)=> Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '用于可树形表格，切换展开树形节点',
            'en-US': 'For tree tables, toggle the expansion of tree nodes'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-tree-table#tree-table-set-tree-expansion'
        },
        {
          name: 'updateFooter',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '更新表尾数据',
            'en-US': 'Update footer data'
          },
          mode: ['pc', 'mobile-first'],
          mfDemo: ''
        },
        {
          name: 'validate',
          typeAnchorName: 'IRow',
          type: '(rows: IRow | IRow[], callback: () => void)=> Promise',
          defaultValue: '',
          desc: {
            'zh-CN':
              '表格校验函数，如果指定 row 或 rows 则校验指定一行或多行，否则校验整个表格。该回调函数会在校验结束后被调用，并传入两个参数：（是否校验成功，最近一列未通过校验的字段）。若不传入回调函数，则会返回一个 promise, 校验成功返回 true (3.22.0新增)，校验失败返回错误信息对象',
            'en-US':
              'Table validation function; validates specified row(s) if row or rows are provided, otherwise validates the entire table; callback is called after validation with parameters (validation success, last failed field); returns a promise if no callback is provided, true on success (added in 3.22.0), error object on failure'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-validation#validation-before-submit-validation'
        }
      ],
      slots: [
        {
          name: 'default',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '默认插槽（表格列）',
            'en-US': 'Default slot (table columns)'
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
            'en-US': 'Text content displayed when data is empty'
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
            'en-US': 'Pagination plugin, <pager>'
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
            'en-US': 'Toolbar (includes: zoom, personalization, table refresh, custom buttons)'
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
            'en-US': 'Column alignment mode; optional values are left, center, right'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-align#align-grid-align'
        },
        {
          name: 'class-name',
          typeAnchorName: 'IClassNameArgs',
          type: 'string | (args: IClassNameArgs)=> string',
          defaultValue: '',
          desc: {
            'zh-CN': '给单元格附加 className，也可以是函数',
            'en-US': 'Add a className to cells; can also be a function'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-custom-style#custom-style-class-name'
        },
        {
          name: 'editor',
          typeAnchorName: 'IEditorConfig',
          type: 'IEditorConfig | (h, {row:Row, column: IColumnConfig})=> Component',
          defaultValue: '',
          desc: {
            'zh-CN': '单元格编辑渲染配置项，也可以是函数返回 Vue 组件',
            'en-US': 'Cell editing rendering configuration item; can also be a function returning a Vue component'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-editor#editor-custom-editor-select'
        },
        {
          name: 'field',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '设置表格列的单元格显示字段',
            'en-US': 'Set the display field for table column cells'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid#base-basic-usage'
        },
        {
          name: 'filter',
          type: 'boolean | IFilterConfig',
          typeAnchorName: 'IFilterConfig',
          defaultValue: 'false',
          desc: {
            'zh-CN': '设置表格列的筛选配置信息。默认值为 false 不配置筛选信息',
            'en-US': 'Set the filter configuration for table columns; defaults to false (no filtering configured)'
          },
          mode: ['pc', 'mobile-first'],
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
              'Fix columns on the left; freezable can be frozen/unfrozen and operated in the personalization panel, while frozen can only be frozen and not operated; fix columns to the left or right (note: fixed columns should be placed on the left or right sides)'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-fixed#fixed-left-fixed'
        },
        {
          name: 'footer-align',
          type: "'left' | 'center' | 'right'",
          defaultValue: "'left'",
          desc: {
            'zh-CN': '表尾列的对齐方式）',
            'en-US': 'Footer column alignment mode; optional values are left, center, right'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-align#align-footer-align'
        },
        {
          name: 'footer-class-name',
          typeAnchorName: 'IClassNameArgs',
          type: 'string | (args: IClassNameArgs)=> string',
          defaultValue: '',
          desc: {
            'zh-CN': '给表尾的单元格附加 className，也可以是函数',
            'en-US': 'Add a className to footer cells; can also be a function'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-custom-style#custom-style-footer-style'
        },
        {
          name: 'format-config',
          typeAnchorName: 'IFormatConfig',
          type: 'IFormatConfig',
          defaultValue: '',
          desc: {
            'zh-CN': '开启该列数据异步渲染',
            'en-US': "Enable asynchronous rendering of this column's data"
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-renderer#renderer-inner-renderer'
        },
        {
          name: 'format-text',
          typeAnchorName: 'IFormatText',
          type: 'IFormatText',
          defaultValue: '',
          desc: {
            'zh-CN': '设置当前表格列的显示获取编辑类型；设置当前表格列的显示获取编辑类型，也可以是函数',
            'en-US': 'Set the display and edit type for the current table column; can also be a function'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-renderer#renderer-inner-renderer'
        },
        {
          name: 'header-align',
          type: "'left' | 'center' | 'right'",
          defaultValue: "'left'",
          desc: {
            'zh-CN': '表头列的对齐方式',
            'en-US': 'Header column alignment mode; optional values are left, center, right'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-align#align-header-align'
        },
        {
          name: 'header-class-name',
          typeAnchorName: 'IClassNameArgs',
          type: 'string | (args: IClassNameArgs)=> string',
          defaultValue: '',
          desc: {
            'zh-CN': '设置列头样式名称；给表头的单元格附加 className，也可以是函数',
            'en-US': 'Set the header style name; add a className to header cells, can also be a function'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-custom-style#custom-style-header-style'
        },
        {
          name: 'index-method',
          typeAnchorName: 'IIndexMethodArgs',
          type: 'string | (args: IIndexMethodArgs)=> string',
          defaultValue: '',
          desc: {
            'zh-CN': '只对 type=index 有效，自定义索引方法',
            'en-US': 'Effective only for type=index; custom index method'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-serial-column#serial-column-custom-serial-column'
        },
        {
          name: 'min-width',
          type: 'number | string',
          defaultValue: '',
          desc: {
            'zh-CN': '最小列宽度；会自动将剩余空间按比例分配；该属性的可选值为 整数, px，%',
            'en-US':
              'Minimum column width; remaining space is automatically allocated proportionally; optional values are integers, px, %'
          },
          mode: ['pc', 'mobile-first'],
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
              'Built-in filter object property; whether filtering allows multiple selections; sets whether the selection column shows checkboxes; effective when columnType is select'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-filter#filter-default-filter'
        },
        {
          name: 'params',
          type: 'object',
          defaultValue: '',
          desc: {
            'zh-CN': '额外的参数（自定义一些数据参数，对于某些特殊的场景可能会用到）',
            'en-US': 'Additional parameters (custom data parameters, useful in specific scenarios)'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: ''
        },
        {
          name: 'remote-sort',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '是否使用服务端排序，如果设置为 true 则不会对数据进行处理',
            'en-US': 'Whether to use server-side sorting; if set to true, data will not be processed locally'
          },
          mode: ['pc', 'mobile-first'],
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
              "Set the rendering type for table columns; takes precedence over the column's type attribute; cell rendering configuration item, takes precedence over formatText attribute"
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-editor#editor-custom-editor-select'
        },
        {
          name: 'required',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否必填，如不设置，则会根据校验规则自动生成',
            'en-US': 'Whether required; if not set, automatically generated based on validation rules'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: ''
        },
        {
          name: 'resizable',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '设置该列是否可以调整列宽；列是否允许拖动列宽调整大小',
            'en-US': "Set whether this column's width can be adjusted; whether column width dragging is allowed"
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-custom#custom-column-width'
        },
        {
          name: 'rules',
          typeAnchorName: 'IValidRules',
          type: 'IValidRules',
          defaultValue: '',
          desc: {
            'zh-CN': '表单的验证功能',
            'en-US': 'Form validation function'
          },
          mode: ['pc', 'mobile-first'],
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
              'Display ellipsis when header content is too long; optional values are ellipsis (only ellipsis), title (also native title), tooltip (also tooltip)'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-tip#tip-column-header-tip'
        },
        {
          name: 'show-header-tip',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '表格列头是否需要提示',
            'en-US': 'Whether the table column header requires a tooltip'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-tip#tip-column-header-tip'
        },
        {
          name: 'show-icon',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否显示列头编辑图标，在编辑时有效',
            'en-US': 'Whether to display the column header edit icon; effective during editing'
          },
          mode: ['pc', 'mobile-first'],
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
              'Display ellipsis when content is too long; optional values are ellipsis (only ellipsis), title (also native title), tooltip (also tooltip)'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-tip#tip-cell-tip'
        },
        {
          name: 'show-tip',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '表格列单元格是否需要提示',
            'en-US': 'Whether table column cells require a tooltip'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-tip#tip-cell-tip'
        },
        {
          name: 'sort-by',
          type: 'string | string[]',
          defaultValue: '',
          desc: {
            'zh-CN': '只对 sortable 有效，自定义排序的属性',
            'en-US': 'Effective only for sortable; custom sorting attribute'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-sort#sort-combinations-sort'
        },
        {
          name: 'sort-method',
          typeAnchorName: 'IRow',
          type: '(row1: IRow, row2: IRow)=> boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义所有列的排序方法，当触发排序时会调用该函数',
            'en-US': 'Custom sorting method for all columns; called when sorting is triggered'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-sort#sort-custom-sort'
        },
        {
          name: 'sortable',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '设置该列数据是否可以排序',
            'en-US': "Set whether this column's data can be sorted"
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-sort#sort-default-sort'
        },
        {
          name: 'title',
          type: 'string | (h, params)=> string | VNode',
          defaultValue: '',
          desc: {
            'zh-CN': '列标题（支持开启国际化），可以是函数',
            'en-US': 'Column title (supports internationalization); can be a function'
          },
          mode: ['pc', 'mobile-first'],
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
          mode: ['pc', 'mobile-first'],
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
          mode: ['pc', 'mobile-first'],
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
          mode: ['pc', 'mobile-first'],
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
            'zh-CN': `自定义显示内容模板，作用域插槽参数说明：<br/>
            slots.default({ $table, column, row, level, data, rowIndex, $rowIndex, columnIndex, $columnIndex, seq }, h)，<br/>
               $table：表格组件对象，column：当前列配置，row：当前行数据，<br/>
               level：当前行在树表中的层级，data：表格数据，<br/>
               rowIndex：所有行中(包含虚拟滚动等隐藏列)下标，$rowIndex:已渲染行中的下标，<br/>
               columnIndex：所有列中(包含虚拟滚动等隐藏列)下标，$columnIndex:已渲染列中的下标，<br/>
               seq：单元格所在行的序号，$seq:已弃用，<br/>
               h：vue的渲染函数`,
            'en-US': 'Customized display content template'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-slot#slot-default-slot'
        },
        {
          name: 'edit',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义可编辑组件模板，作用域插槽参数同 <code>default</code> 插槽',
            'en-US': 'Customized Editable Component Template'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-slot#slot-editor-slot'
        },
        {
          name: 'expand-trigger',
          defaultValue: '',
          meta: {
            stable: '3.25.0'
          },
          desc: {
            'zh-CN': '自定义展开行图标，作用域插槽参数同 <code>default</code> 插槽',
            'en-US': 'Customized expand row icon'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-expand#expand-trigger-slot'
        },
        {
          name: 'filter',
          defaultValue: '',
          desc: {
            'zh-CN':
              '自定义筛选模板，作用插槽参数说明：slots.filter({ $grid, values, args, context },h)，$grid：表格组件对象，values：筛选项集合，args：筛选相关参数,context：筛选面板组件上下文对象',
            'en-US': 'User-defined filtering template'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-filter#filter-custom-filter'
        },
        {
          name: 'header',
          defaultValue: '',
          desc: {
            'zh-CN': `自定义表头内容的模板，作用插槽参数说明：<br/>
            slots.header({ $table, column, columnIndex，$columnIndex，} ,h)，<br/>
              $table：表格组件对象，column：当前列配置，<br/>
              columnIndex：所有列中(包含虚拟滚动等隐藏列)下标，$columnIndex:已渲染列中的下标，<br/>
              h：vue的渲染函数`,
            'en-US': 'Template of custom table header content'
          },
          mode: ['pc', 'mobile-first'],
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
          mode: ['pc', 'mobile-first'],
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
          mode: ['pc', 'mobile-first'],
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
          mode: ['pc', 'mobile-first'],
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
          mode: ['pc', 'mobile-first'],
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
          mode: ['pc', 'mobile-first'],
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
          mode: ['pc', 'mobile-first'],
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
          mode: ['pc', 'mobile-first'],
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
          mode: ['pc', 'mobile-first'],
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
          mode: ['pc', 'mobile-first'],
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
          mode: ['pc', 'mobile-first'],
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
          mode: ['pc', 'mobile-first'],
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
          mode: ['pc', 'mobile-first'],
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
          mode: ['pc', 'mobile-first'],
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
          mode: ['pc', 'mobile-first'],
          pcDemo: 'grid-toolbar#toolbar-custom-toolbar'
        },
        {
          name: 'toolbar',
          defaultValue: '',
          desc: {
            'zh-CN': '工具栏插槽',
            'en-US': 'Toolbar slot'
          },
          mode: ['pc', 'mobile-first'],
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
  [field: string]: any
}
      `
    },
    {
      name: 'IColumnConfig',
      type: 'interface',
      depTypes: ['IValidRules'],
      code: `
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
 [field:string]: { 
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
  // 悬浮是否显示对齐辅助线(3.27.0新增)
  hover: boolean
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
  // 3.25.0版本新新增，当trigger为 'default' 时，点击按钮事件是否冒泡，默认为false
  bubbling?: boolean
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
  // 是否高亮已经校验过错误的单元格 (3.27.0新增)
  highlightError?: boolean
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
  // 配置 filter 时，设置为 false 可以允许输入框正常聚焦
  preventOnFilter?: boolean
  // 更多其余参数请参考 sortablejs 插件配置
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
  // （3.19.0新增）当mode为'row'时，行编辑激活状态下默认会忽略activeMethod，配置为true使其生效
  activeStrictly?: boolean
  //（3.25.0新增）自定义编辑态的退出逻辑。当返回true时，不会退出编辑态。
  blurOutside?: ({ cell, event, $table }: { cell: HTMLElement, event: Event, $table: Component }) => boolean
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
  // 3.25.0新增，设置过滤面板根节点属性
  attrs: { [props: string]: string }
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
    },
    {
      name: 'ICellClassNameArgs',
      type: 'type',
      depTypes: ['IColumnConfig', 'IRow'],
      code: `
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
}`
    },
    {
      name: 'ICustomConfig',
      type: 'type',
      code: `
interface ICustomConfig {
  // 表格列字段
  property: string
  // 是否显示
  visible?: boolean
  // 列宽
  width?: number | string
}`
    }
  ]
}
