export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'base',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['base.vue']
    },
    {
      'demoId': 'conditions',
      'name': { 'zh-CN': '自定义查询条件', 'en-US': 'Customized Query Criteria' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>conditions</code> 属性可以自定义查询条件,组件内置的输入框支持按回车触发搜索的功能。</p>\n',
        'en-US':
          '<p>The <code>conditions</code> attribute can be used to customize search criteria. The built-in text box of the gadget supports the function of pressing Enter to trigger search. </p>\n'
      },
      'codeFiles': ['conditions.vue']
    },
    {
      'demoId': 'condition-layout',
      'name': { 'zh-CN': '布局与配置', 'en-US': 'Layout and Configuration' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>conditions</code> 项目里属性里的<code>span</code>配置栅格，<code>labelWidth</code> 配置label宽度。 <code>component</code>配置自定义组件，并通过 <code>attrs</code>配置组件属性</p>\n',
        'en-US':
          '<p>Set <code>span</code> in the attributes of the <code>condition</code> project to configure the grid and <code>labelWidth</code> to configure the label width. <code>component</code>Configure custom components and set component attributes through <code>attrs</code></p>\n'
      },
      'codeFiles': ['condition-layout.vue']
    },
    {
      'demoId': 'condition-form',
      'name': { 'zh-CN': 'Form 表单中使用并开启表单校验', 'en-US': 'Used in a form and enabled form validation' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['condition-form.vue']
    },
    {
      'demoId': 'draggable',
      'name': { 'zh-CN': '拖动窗口', 'en-US': 'Drag Window' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>draggable</code> 属性设置弹出窗口拖动特性。默认为 <code>true</code> 表示可在标题栏按住鼠标左键拖动窗口，设置为 <code>false</code> 则固定窗口位置不可拖动。</p>\n',
        'en-US':
          '<p>Sets the drag feature of the pop-up window through the <code>draggable</code> property. The default value is <code>true</code>, indicating that you can drag the window on the title bar. If this parameter is set to <code>false</code>, the window cannot be dragged. </p>\n'
      },
      'codeFiles': ['draggable.vue']
    },
    {
      'demoId': 'showClearBtn',
      'name': { 'zh-CN': '不可清除', 'en-US': 'Cannot be cleared' },
      'desc': {
        'zh-CN': '<p>通过 <code>show-clear-btn</code> 属性设置是否可以清除。</p>\n',
        'en-US':
          '<p>The <code>show-clear-btn</code> attribute is used to set whether the content can be cleared. </p>\n'
      },
      'codeFiles': ['showClearBtn.vue']
    },
    {
      'demoId': 'resize',
      'name': { 'zh-CN': '全屏展示', 'en-US': 'Full-screen display' },
      'desc': {
        'zh-CN': '<p>通过配置 <code>resize</code> 控制是否全屏展示</p>\n',
        'en-US': '<p>You can set <code>resize</code> to determine whether to display the content in full screen.</p>\n'
      },
      'codeFiles': ['resize.vue']
    },
    {
      'demoId': 'grid',
      'name': { 'zh-CN': '表格编辑', 'en-US': 'Table Edit' },
      'desc': {
        'zh-CN':
          '<p>gridOp 当 popseletor 为 grid 时生效，目前支持配置 columns 表格列 和 data 数据源，详细配置项参考 Grid 表格组件，需同时配置 textField、valueField 字段。</p>\n',
        'en-US':
          '<p>gridOp: This parameter is valid only when popseletor is set to grid. Currently, columns and data data sources can be configured. For details about the configuration items, see the Grid table component. The textField and valueField fields must be configured at the same time. </p>\n'
      },
      'codeFiles': ['grid.vue']
    },
    {
      'demoId': 'selected-box',
      'name': { 'zh-CN': '已选表格显示为已选栏', 'en-US': 'Width' },
      'desc': {
        'zh-CN':
          '<p>多选场景，设置属性 show-selected-box 为 true，且通过属性 selected-box-op 指定 SelectedBox 组件配置，可以把已选表格显示为已选栏；组件 SelectedBox 的所有插槽也已经透传</p>\n',
        'en-US':
          '<p>The width are configured through the <code>width</code> attribute. \n Use <code>dialog-class</code> to customize the pop-up window class name</p>\n'
      },
      'codeFiles': ['selected-box.vue']
    },
    {
      'demoId': 'width',
      'name': { 'zh-CN': '宽度', 'en-US': 'Custom Icon' },
      'desc': {
        'zh-CN': '<p>通过 <code>width </code> 属性配置宽。\n通过 <code>dialog-class</code> 自定义配置弹窗类名</p>\n',
        'en-US':
          '<p>You can use the <code>icon</code> attribute to customize the component icon. You need to import the corresponding svg icon. </p>\n'
      },
      'codeFiles': ['width.vue']
    },
    {
      'demoId': 'icon',
      'name': { 'zh-CN': '自定义图标', 'en-US': 'Multiple Choices' },
      'desc': {
        'zh-CN': '<p>通过 <code>icon</code> 属性可以自定义组件图标，需引入对应的 svg 图标。</p>\n',
        'en-US':
          '<p>You can set <code>multi</code> to true to implement multiple selections. \nSet <code>show-history</code> to set whether to display tables on the History tab page when tables are configured on the pop-up panel. The default value is false. </p>\n'
      },
      'codeFiles': ['icon.vue']
    },
    {
      'demoId': 'multi',
      'name': { 'zh-CN': '多选', 'en-US': 'Multiple choices. The initial data is an array.' },
      'desc': {
        'zh-CN':
          '<p>通过设置 <code>multi</code> 属性为 true 实现多选。\n通过设置 <code>show-history</code> 当弹出面板配置的是表格时，设置历史记录标签页是否显示表格，默认为 false。</p>\n',
        'en-US': 'For details, see the following example.'
      },
      'codeFiles': ['multi.vue']
    },
    {
      'demoId': 'multi-value-array',
      'name': { 'zh-CN': '多选且初始数据为数组', 'en-US': 'change event' },
      'desc': {
        'zh-CN': '详细用法参考如下示例',
        'en-US':
          'Change event of the input box of the <p><code>change</code> Popeditor component. <code>page-change</code>The table mode of the Popeditor component is switched by page. </p>\n'
      },
      'codeFiles': ['multi-value-array.vue']
    },
    {
      'demoId': 'events',
      'name': { 'zh-CN': 'change 事件', 'en-US': 'close event' },
      'desc': {
        'zh-CN':
          '<p><code>change</code> Popeditor 组件 Input 框的 change 事件。 <code>page-change</code> Popeditor 组件表格模式带分页切换事件。</p>\n',
        'en-US': 'Event triggered when the <p><code>close</code> dialog box is closed. </p>\n'
      },
      'codeFiles': ['events.vue']
    },
    {
      'demoId': 'close-event',
      'name': { 'zh-CN': 'close 事件', 'en-US': 'Read-only' },
      'desc': {
        'zh-CN': '<p><code>close</code> 弹框关闭时触发的事件。</p>\n',
        'en-US': '<p>The <code>readonly</code> attribute is used to set whether to read only. </p>\n'
      },
      'codeFiles': ['close-event.vue']
    },
    {
      'demoId': 'before-close',
      'name': { 'zh-CN': '拦截弹窗关闭', 'en-US': 'tabindex of the text box' },
      'desc': {
        'zh-CN':
          '通过 <code>before-close</code> 属性可以配置一个拦截弹窗关闭的方法。如果方法返回 <code>false</code> 值，则拦截弹窗关闭；否则不拦截。<br>可以通过该拦截方法传入的参数获取关闭的操作类型 <code>confirm</code> 弹窗有以下关闭类型：<br> <code>confirm</code> ：点击确认时关闭 <br> <code>cancel</code> ：点击取消时关闭 <br> <code>close</code> ：点击关闭按钮时关闭</p>\n',
        'en-US':
          '<p>The <code>tabindex</code> attribute is used to determine whether the focus can be obtained by pressing Tab and the focus sequence. This parameter is valid only when the <code>readonly</code> attribute is set to false. </p>\n'
      },
      'codeFiles': ['before-close.vue']
    },
    {
      'demoId': 'readonly',
      'name': { 'zh-CN': '只读', 'en-US': 'Reset' },
      'desc': {
        'zh-CN': '<p>通过 <code>readonly</code> 属性设置为是否只读。</p>\n',
        'en-US': '<p>Use the <code>before-reset</code> attribute to set the hook function before reset. </p>\n'
      },
      'codeFiles': ['readonly.vue']
    },
    {
      'demoId': 'tabindex',
      'name': { 'zh-CN': '输入框的 tabindex', 'en-US': 'Component Query Condition Slot' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>tabindex</code> 属性置是否可通过 Tab 键获焦及获焦顺序（<code>readonly</code> 属性设置为 false 时有效）。</p>\n',
        'en-US': '<p>Customize the pop-up panel query structure by slot <code>search</code>. </p>\n'
      },
      'codeFiles': ['tabindex.vue']
    },
    {
      'demoId': 'before-reset',
      'name': { 'zh-CN': '重置', 'en-US': 'Disabled' },
      'desc': {
        'zh-CN': '<p>通过 <code>before-reset</code> 属性设置重置前的钩子函数。</p>\n',
        'en-US': '<p> is set to read-only through the <code>disabled</code> attribute. </p>\n'
      },
      'codeFiles': ['before-reset.vue']
    },
    {
      'demoId': 'slot',
      'name': { 'zh-CN': '组件查询条件插槽', 'en-US': 'The filter criteria in the pop-up window can be cleared.' },
      'desc': {
        'zh-CN': '<p>通过插槽 <code>search</code> 自定义弹出面板查询结构。</p>\n',
        'en-US':
          'The <p><code>clearable</code> Popeditor component supports the configuration of the Clear button in the search form. </p>\n'
      },
      'codeFiles': ['slot.vue']
    },
    {
      'demoId': 'slot-footer',
      'name': { 'zh-CN': '自定义弹出框底部', 'en-US': 'Display Field Mapping' },
      'desc': {
        'zh-CN': '<p>通过插槽 <code>footer</code> 自定义弹出面板底部按钮栏结构。</p>\n',
        'en-US': '<p>Use the <code>text-field</code> attribute to set the fields displayed by the widget. </p>\n'
      },
      'codeFiles': ['slot-footer.vue']
    },
    {
      'demoId': 'disabled',
      'name': { 'zh-CN': '禁用', 'en-US': 'Submit Field Mapping' },
      'desc': {
        'zh-CN': '<p>通过 <code>disabled</code> 属性设置为是否只读。</p>\n',
        'en-US':
          '<p>The <code>value-field</code> attribute is used to set the fields submitted by the component to the background. </p>\n'
      },
      'codeFiles': ['disabled.vue']
    },
    {
      'demoId': 'clearable',
      'name': { 'zh-CN': '弹出窗筛选条件支持可清空', 'en-US': 'Custom Title' },
      'desc': {
        'zh-CN': '<p><code>clearable</code> Popeditor 组件 支持在搜索表单配置清除按钮。</p>\n',
        'en-US':
          '<p>The <code>title</code> attribute is used to set the title of the pop-up window. The internationalization information is supported. </p>\n'
      },
      'codeFiles': ['clearable.vue']
    },
    {
      'demoId': 'textField',
      'name': { 'zh-CN': '显示字段映射', 'en-US': 'Remote Search' },
      'desc': {
        'zh-CN': '<p>通过 <code>text-field</code> 属性设置组件显示的字段。</p>\n',
        'en-US':
          '<p>The <code>remote-search</code> attribute is used to configure remote search. In the remoteSearch method, the conditions search conditions can be sent to the background. After the background processes the data, the data can be properly displayed on the page. </p>\n'
      },
      'codeFiles': ['textField.vue']
    },
    {
      'demoId': 'title1',
      'name': { 'zh-CN': '提交字段映射', 'en-US': 'Paging' },
      'desc': {
        'zh-CN': '<p>通过 <code>value-field</code> 属性设置组件提交给后台的字段。</p>\n',
        'en-US':
          'The <p><code>showPager</code> attribute is valid only when <code>popseletor</code> is set to <code>grid</code>. The default value is <code>false</code>. Pagination is not enabled. If this parameter is set to <code>true</code>, you need to configure the <code>pagerOp</code> attribute. In addition, you need to listen to the <code>page-change</code> event to change the <code>data</code> data source</p>\n of the <code>gridOp</code>'
      },
      'codeFiles': ['title.vue']
    },
    {
      'demoId': 'title',
      'name': { 'zh-CN': '自定义标题', 'en-US': 'Rendering Query' },
      'desc': {
        'zh-CN': '<p>通过 <code>title</code> 属性设置弹出窗口标题，支持国际化信息配置。</p>\n',
        'en-US':
          '<p>If the first batch of data loaded by the component does not contain the data corresponding to the currently set <code>value</code>, You can set <code>text-render-source</code> to perform reverse query</p>\n'
      },
      'codeFiles': ['title.vue']
    },
    {
      'demoId': 'remote-search',
      'name': { 'zh-CN': '远程搜索', 'en-US': 'Enabling Tree Mode' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>remote-search</code> 属性配置远程搜索，在 remoteSearch 方法里可以把 conditions 搜索条件传给后台，后台处理好数据后就能正常的显示在页面上。</p>\n',
        'en-US':
          '<p>Enable the tree mode through the <code>popseletor</code> attribute. Then the <code>tree-op</code> attribute is the <code>op configuration mode</code> of the <code>Tree</code> component. </p>\n'
      },
      'codeFiles': ['remote-search.vue']
    },
    {
      'demoId': 'pager',
      'name': { 'zh-CN': '分页', 'en-US': 'Single choice in tree mode' },
      'desc': {
        'zh-CN':
          '<p><code>showPager</code> 属性只有当 <code>popseletor</code> 为 <code>grid</code> 时才能生效，默认值为 <code>false</code> 不启用分页，配置为 <code>true</code> 后还需配置 <code>pagerOp</code> 属性；并且需要监听 <code>page-change</code> 事件改变 <code>gridOp</code> 的 <code>data</code> 数据源</p>\n',
        'en-US':
          '<p>Enable the tree mode through the <code>popseletor</code> attribute. Then the <code>tree-op</code> attribute is the <code>op configuration mode</code> of the <code>Tree</code> component. </p>\n'
      },
      'codeFiles': ['pager.vue']
    },
    {
      'demoId': 'render-text',
      'name': { 'zh-CN': '渲染反查', 'en-US': 'Edit box size' },
      'desc': {
        'zh-CN':
          '<p>在组件加载的第一批数据中不含有当前所设置的 <code>value</code> 对应的数据时，可以设置 <code>text-render-source</code> 进行反查</p>\n',
        'en-US':
          '<p>Sets the size of the PopEditor edit box through the <code>size</code> attribute. The options are <code>medium</code>, <code>small</code>, and <code>mini</code>. </p>\n'
      },
      'codeFiles': ['render-text.vue']
    },
    {
      'demoId': 'tree',
      'name': { 'zh-CN': '开启树模式', 'en-US': 'Data beyond hidden' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>popseletor</code> 属性开启树模式，然后 <code>tree-op</code> 属性是 <code>Tree</code> 组件的 <code>op 配置方式</code>。</p>\n',
        'en-US':
          '<p>Configure the <code>showOverflow</code> attribute on the data column to set the display and hiding of the data when the data exceeds the column width. Values can be of type boolean or string, with three values to choose from, as shown below. By default, all content is displayed in a new line. </p>\n<div class="tip custom-block"><p class="custom-block-title"> optional value description</p>\n<p>tooltip: The extra part is displayed...., and all information is displayed on the left or right. \ntitle: The value is the same as the title attribute of the native tag. \nellipsis: \'...\' is displayed, and no message is displayed. \ntrue: If the value is true, the effect is the same as that of the tooltip. </p>\n</div>\n'
      },
      'codeFiles': ['tree.vue']
    },
    {
      'demoId': 'single-select-radio',
      'name': { 'zh-CN': '树模式单选', 'en-US': 'Mode of triggering a single selection' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>popseletor</code> 属性开启树模式，然后 <code>tree-op</code> 属性是 <code>Tree</code> 组件的 <code>op 配置方式</code>。</p>\n',
        'en-US':
          '<p>When a single option is selected, you can only click the option button to select it by default. You can also set <code>trigger</code> to <code>row</code> to select any position in the row. Alternatively, set <code>trigger</code> to <code>cell</code> and click any position in the Operation column to select it. </p>\n'
      },
      'codeFiles': ['single-select-radio.vue']
    },
    {
      'demoId': 'size',
      'name': { 'zh-CN': '编辑框大小', 'en-US': 'Set History tab' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>size</code> 属性设置 PopEditor 编辑框大小，可选值有 <code>medium</code>、<code>small</code>、<code>mini</code>。</p>\n',
        'en-US':
          '<p>When a table is configured on the pop-up panel, configure <code>show-history</code> to set whether to display the table on the History tab page. The default value is false. </p>\n'
      },
      'codeFiles': ['size.vue']
    },
    {
      'demoId': 'showOverflow',
      'name': { 'zh-CN': '数据超出隐藏', 'en-US': 'Remote Data Request' },
      'desc': {
        'zh-CN':
          '<p>在数据的列上配置 <code>showOverflow</code> 属性用于设置数据超出列宽时的显示和隐藏。值的类型可以为 boolean 和 string，有三个值可以选择，如下所示。默认为换行显示全部内容。</p>\n<div class="tip custom-block"><p class="custom-block-title">可选值说明</p>\n<p>tooltip：内容超出部分显示 ...，左侧/右侧弹出提示层显示全部信息。\ntitle：和原生标签的 title 属性一致。\nellipsis：内容超出部分显示 ...，没有提示。\ntrue：为 true 时，效果和 tooltip 一致。</p>\n</div>\n',
        'en-US':
          '<p>Configure the <code>auto-lookup</code> to false, set initialization to not request data, or call this $ref.popuptor.handleSearch() Proactively calls the request method</p>\n'
      },
      'codeFiles': ['showOverflow.vue']
    },
    {
      'demoId': 'trigger',
      'name': { 'zh-CN': '单选时触发勾选的方式', 'en-US': 'Associative query' },
      'desc': {
        'zh-CN':
          '<p>弹出编辑为单选时，默认只能通过单击单选按钮进行勾选。但也可以通过设置属性 <code>trigger</code> 为 <code>row</code> 实现单击行中任意位置进行勾选。或者设置 <code>trigger</code> 为 <code>cell</code>，单击操作列的单元格上任意位置进行勾选。</p>\n',
        'en-US':
          '<p>Configure the <code>suggest</code> to enable the association function, automatically triggering association queries after input in the input box; This function needs to be used in conjunction with <code>remoteSearch</code>.</p>\n'
      },
      'codeFiles': ['trigger.vue']
    },
    {
      'demoId': 'show-history',
      'name': { 'zh-CN': '设置历史记录标签页', 'en-US': '' },
      'desc': {
        'zh-CN':
          '<p>当弹出面板配置的是表格时，通过配置 <code>show-history</code> 设置历史记录标签页是否显示表格，该值默认为false。</p>\n',
        'en-US': ''
      },
      'codeFiles': ['show-history.vue']
    },
    {
      'demoId': 'auto-lookup',
      'name': { 'zh-CN': '远程数据请求', 'en-US': '' },
      'desc': {
        'zh-CN':
          '<p>配置 <code>auto-lookup</code> 为false，设置初始化不请求数据，也可以调用 this.$refs.popeditor.handleSearch() 主动调用请求方法</p>\n',
        'en-US': ''
      },
      'codeFiles': ['auto-lookup.vue']
    },
    {
      'demoId': 'suggest',
      'name': { 'zh-CN': '联想查询', 'en-US': '' },
      'desc': {
        'zh-CN':
          '<p>配置 <code>suggest</code> 开启联想功能，输入框输入后自动触发联想查询；该功能需要联合 <code>remoteSearch</code>使用\n',
        'en-US': ''
      },
      'codeFiles': ['suggest.vue']
    },
    {
      'demoId': 'auto-reset',
      'name': { 'zh-CN': '自动重置', 'en-US': 'auto reset' },
      'desc': {
        'zh-CN':
          '<p>配置 <code>autoReset</code> 开启自动重置筛选项，筛选后点击关闭弹窗即可重置\n',
        'en-US': ''
      },
      'codeFiles': ['auto-reset.vue']
    }
  ],
  apis: [
    {
      'name': 'popeditor',
      'type': 'component',
      'properties': [
        {
          'name': 'modelValue / v-model',
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': '绑定值', 'en-US': 'Bound Value' },
          'demoId': 'base'
        },
        {
          'name': 'placeholder',
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': '占位符', 'en-US': 'Placeholder' },
          'demoId': 'base'
        },
        {
          'name': 'tabindex',
          'type': 'string',
          'defaultValue': '该属性的默认值为 1',
          'desc': {
            'zh-CN': '设置是否可通过 Tab 键获焦及获焦顺序（readonly 属性设置为 false 时有效）',
            'en-US':
              'Sets whether focus can be obtained by pressing Tab and the focus sequence. This parameter is valid only when readonly is set to false.'
          },
          'demoId': 'tabindex'
        },
        {
          'name': 'remote-search',
          'type': 'Function({ page, conditions })',
          'defaultValue': '',
          'desc': { 'zh-CN': '配置远程搜索', 'en-US': 'Configure remote search' },
          'demoId': 'remote-search'
        },
        {
          'name': 'before-reset',
          'type': 'Function',
          'defaultValue': '',
          'desc': { 'zh-CN': '重置前的钩子函数', 'en-US': 'Hook function before reset' },
          'demoId': 'before-reset'
        },
        {
          'name': 'resize',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '是否显示弹框全屏按钮',
            'en-US': 'Whether to display the full-screen button in the pop-up box'
          },
          'demoId': 'resize'
        },
        {
          'name': 'draggable',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': { 'zh-CN': '设置弹出窗口是否可拖动', 'en-US': 'Set whether the pop-up window can be dragged.' },
          'demoId': 'draggable'
        },
        {
          'name': 'showOverflow',
          'type': 'string,object',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '（popeditor 嵌套 grid 表格时，配置在gridOp属性的columns中）设置表格数据过长出现的展示问题,值可为：tooltip，title，ellipsis;①tooltip：内容超出部分显示 ...，左侧/右侧弹出提示层显示全部信息。②title：和原生标签的 title 属性一致。③ellipsis：内容超出部分显示 ...，没有提示。④true：为 true 时，效果和 tooltip 一致。',
            'en-US':
              ' (When a grid table is nested in popeditor, it is configured in columns of the gridOp attribute.) Sets the display problem caused by excessively long table data. The value can be tooltip, title, or ellipsis;1tooltip: The extra part is displayed.... The prompt layer on the left or right displays all information. 2title: The value is the same as the title attribute of the native tag. 3ellipsis: The part that exceeds the content is displayed as..., and no prompt is displayed. 4true: If the value is true, the effect is the same as that of the tooltip.'
          },
          'demoId': 'showOverflow'
        },
        {
          'name': 'size',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置组件的size大小，三种类型可以选择：medium，small，mini',
            'en-US': 'Set the component size. The options are medium, small, and mini.'
          },
          'demoId': 'size'
        },
        {
          'name': 'trigger',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '弹框表格中为单选时radio的选中配置，可配置：default（默认）, cell（点击单元格触发）, row（点击行触发）',
            'en-US':
              'In the table in the dialog box that is displayed, the radio is selected. The options are as follows: default (default), cell (clicking a cell), and row (clicking a row)'
          },
          'demoId': 'trigger'
        },
        {
          'name': 'disabled',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '设置组件是否为禁用状态。', 'en-US': 'Sets whether a component is disabled.' },
          'demoId': 'disabled'
        },
        {
          'name': 'conditions',
          'type': 'Array',
          'defaultValue': '',
          'desc': {
            'zh-CN': '当弹出面板配置的是表格时，设置弹出面板中的表单查询项。',
            'en-US': 'When a table is configured on the pop-up panel, set the table query items in the pop-up panel.'
          },
          'demoId': 'conditions'
        },
        {
          'name': 'grid-op',
          'type': 'object',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置弹出面板中表格组件的配置信息。',
            'en-US': 'Set the configuration information of the table component in the pop-up panel.'
          },
          'demoId': 'grid'
        },
        {
          'name': 'pager-op',
          'type': 'object',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置分页配置', 'en-US': 'Setting Pagination Configuration' },
          'demoId': 'pager'
        },
        {
          'name': 'icon',
          'type': 'object',
          'defaultValue': '',
          'desc': {
            'zh-CN': 'popEditor 组件的 Icon 图标设置。默认为 svg 组件',
            'en-US': 'Set the icon of the popEditor component. The default value is svg component'
          },
          'demoId': 'icon'
        },
        {
          'name': 'multi',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '设置弹出面板中的数据是否可多选。',
            'en-US': 'Specifies whether multiple data can be selected in the pop-up panel.'
          },
          'demoId': 'multi'
        },
        {
          'name': 'popseletor',
          'type': 'string',
          'defaultValue': '该属性的默认值为 grid',
          'desc': {
            'zh-CN': '设置弹出面板中可显示的树或者表格组件。',
            'en-US': 'Set the tree or table components that can be displayed in the pop-up panel.'
          },
          'demoId': 'tree'
        },
        {
          'name': 'readonly',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': {
            'zh-CN': '设置是否只读，【3.0】设置为 false 后点击 Ipunt 框可以弹出选择框',
            'en-US':
              'Set [3.0] to read-only. If [3.0] is set to false, click the Ipunt box to display the selection box.'
          },
          'demoId': 'readonly'
        },
        {
          'name': 'show-clear-btn',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': {
            'zh-CN': '设置输入框中右侧是否显示清除按钮。',
            'en-US': 'Specifies whether to display the Clear button on the right of the text box.'
          },
          'demoId': 'showClearBtn'
        },
        {
          'name': 'show-pager',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '展示分页', 'en-US': 'Paging' },
          'demoId': 'pager'
        },
        {
          'name': 'show-history',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '当弹出面板配置的是表格时，设置历史记录标签页是否显示表格。',
            'en-US':
              'Specifies whether to display tables on the History tab page when tables are configured on the pop-up panel.'
          },
          'demoId': 'show-history'
        },
        {
          'name': 'text-field',
          'type': 'string',
          'defaultValue': '该属性的默认值为 label',
          'desc': {
            'zh-CN': '设置输入框中显示文本的字段，提交数据时，不提交该显示文本。',
            'en-US': 'Set the text field in the text box. When data is submitted, the text is not submitted.'
          },
          'demoId': 'textField'
        },
        {
          'name': 'text-split',
          'type': 'string',
          'defaultValue': '该属性的默认值为 /',
          'desc': {
            'zh-CN': '在多选的情况下，设置输入框中要显示多个数据时的分隔符。',
            'en-US': 'Separator for displaying multiple records in the text box when multiple records are selected.'
          },
          'demoId': 'multi'
        },
        {
          'name': 'title',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置弹出面板的标题，并且支持国际化。',
            'en-US': 'Set the title of the pop-up panel and support internationalization.'
          },
          'demoId': 'title'
        },
        {
          'name': 'value-field',
          'type': 'string',
          'defaultValue': '该属性的默认值为 id',
          'desc': {
            'zh-CN': '设置输入框要提交数据的字段。',
            'en-US': 'Set the field to which data is to be submitted in the text box.'
          },
          'demoId': 'title'
        },
        {
          'name': 'value-split',
          'type': 'string',
          'defaultValue': '该属性的默认值为 ;',
          'desc': {
            'zh-CN': '在多选的情况下，设置输入框要提交多个数据时的分隔符。',
            'en-US':
              'Separator for submitting multiple pieces of data in the text box when multiple pieces of data are selected.'
          },
          'demoId': 'multi'
        },
        {
          'name': 'width',
          'type': 'number , string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置弹出面板的宽度（单位像素）。当组件的 multi = true 时，宽度最小为900px；否则宽度最小为600px;',
            'en-US':
              'Wide of the pop-up panel, in pixels.When multi of a component is set to true, the minimum width is 900px. Otherwise, the minimum width is 600px.'
          },
          'demoId': 'width'
        },
        {
          'name': 'dialog-class',
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': '自定义配置弹窗类名', 'en-US': 'Customized configuration pop-up window class name' },
          'demoId': 'width'
        },
        {
          'name': 'auto-lookup',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': { 'zh-CN': '设置初始化不请求数据', 'en-US': 'Set initialization not to request data' },
          'demoId': 'auto-lookup'
        },
        {
          'name': 'suggest',
          'type': 'boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN': '配置suggest 开启联想功能，输入框输入后自动触发联想查询；该功能需要联合 remoteSearch 使用',
            'en-US':
              'Configure the suggest to enable the association function, and automatically trigger the association query after entering the input box; This function needs to be used in conjunction with remoteSearch'
          },
          'demoId': 'suggest'
        },
        {
          'name': 'before-close',
          'type': 'boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN': '可以配置一个拦截弹窗关闭的方法。如果方法返回 false 值，则拦截弹窗关闭；否则不拦截',
            'en-US': ''
          },
          'demoId': 'before-close'
        },
        {
          'name': 'show-selected-box',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '多选场景,是否将已选表格显示为已选栏，默认值为false', 'en-US': '' },
          'demoId': 'show-selected-box'
        },
        {
          'name': 'selected-box-op',
          'type': 'object',
          'defaultValue': '',
          'desc': {
            'zh-CN': '通过属性 selected-box-op 指定 SelectedBox 组件配置，可以把已选表格显示为已选栏',
            'en-US': ''
          },
          'demoId': 'selected-box-op'
        },
        {
          'name': 'autoReset',
          'type': 'Boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '筛选后点击关闭是否自动重置筛选条件',
            'en-US': 'After filtering, click Off to reset the filter automatically'
          },
          'demoId': 'auto-reset'
        }
      ],
      'events': [
        {
          'name': 'change',
          'type': 'Function(arg1,arg2)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              'Popeditor 组件 Input 框的 change 事件。;onChange(arg1,arg2){\n// arg1 =  state.commitValue   arg1为提交信息索引\n// arg2 =  state.selectedDatas   arg2为提交信息数据\n// do something you want... }',
            'en-US':
              'Change event in the input box of the Popeditor component. ; onChange(arg1, arg2){\n// arg1 = state.commitValue arg1 is the index of the submitted information. \n// arg2 = state.selectedDatas arg2 is the data of the submitted information. \n// do something you want...}'
          },
          'demoId': 'events'
        },
        {
          'name': 'close',
          'type': 'Function',
          'defaultValue': '',
          'desc': {
            'zh-CN': 'Popeditor 组件弹框关闭时触发的事件。',
            'en-US': 'Event triggered when the pop-up dialog box of the Popeditor component is closed.'
          },
          'demoId': 'close-event'
        },
        {
          "name": "popup",
          "type": "Function",
          "defaultValue": "",
          "desc": {
            'zh-CN': "Popeditor 组件弹框打开时触发的事件。",
            'en-US': "The event that is triggered when the Popeditor component pop-up box is opened."
          },
          "demoId": "popup-event"
        },
        {
          'name': 'page-change',
          'type': 'Function(arg1)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              'Popeditor 组件表格模式带分页切换事件。;onPageChange（arg1）{// arg1 = val   arg1为分页切换页码// do something you want... }',
            'en-US':
              'Indicates that the table mode of the Popeditor component is switched by page. ; onPageChange (arg1) {// arg1 = val arg1 is the page number. // do something you want...}'
          },
          'demoId': 'events'
        }
      ],
      'slots': [
        {
          'name': 'search',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '查询条件插槽', 'en-US': 'Query Condition Slot' },
          'demoId': 'slot'
        },
        {
          'name': 'footer',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '查询条件插槽', 'en-US': '' },
          'demoId': 'slot-footer'
        }
      ]
    }
  ]
}
