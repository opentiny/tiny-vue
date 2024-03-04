export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN': '<p>在弹窗表格/树中选择数据。</p>',
        'en-US': 'For details, see the following example.'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'conditions',
      name: {
        'zh-CN': '自定义查询条件',
        'en-US': 'Customized Query Criteria'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>conditions</code> 属性可以自定义查询条件，组件内置的输入框支持按回车触发搜索的功能。</p>',
        'en-US':
          '<p>The <code>conditions</code> attribute can be used to customize search criteria. The built-in text box of the gadget supports the function of pressing Enter to trigger search. </p>'
      },
      codeFiles: ['conditions.vue']
    },
    {
      demoId: 'condition-layout',
      name: {
        'zh-CN': '布局',
        'en-US': 'Layout and Configuration'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>conditions</code> 项目里属性里的 <code>span</code> 配置栅格，<code>labelWidth</code> 配置 label 宽度，<code>component</code>配置自定义组件，并通过 <code>attrs</code> 配置组件属性。</p>',
        'en-US':
          '<p>Set <code>span</code> in the attributes of the <code>condition</code> project to configure the grid and <code>labelWidth</code> to configure the label width. <code>component</code>Configure custom components and set component attributes through <code>attrs</code></p>'
      },
      codeFiles: ['condition-layout.vue']
    },
    {
      demoId: 'condition-form',
      name: {
        'zh-CN': '表单中使用',
        'en-US': 'Used in a form and enabled form validation'
      },
      desc: {
        'zh-CN': '<p>PopEditor 可以在表单中使用。</p>',
        'en-US': 'For details, see the following example.'
      },
      codeFiles: ['condition-form.vue']
    },
    {
      demoId: 'draggable',
      name: {
        'zh-CN': '拖动窗口',
        'en-US': 'Drag Window'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>draggable</code> 属性设置弹出窗口拖动特性，默认为 <code>true</code>，表示可在标题栏按住鼠标左键拖动窗口，设置为 <code>false</code> 则固定窗口位置不可拖动。</p>',
        'en-US':
          '<p>Sets the drag feature of the pop-up window through the <code>draggable</code> property. The default value is <code>true</code>, indicating that you can drag the window on the title bar. If this parameter is set to <code>false</code>, the window cannot be dragged. </p>'
      },
      codeFiles: ['draggable.vue']
    },
    {
      demoId: 'radio-change-close',
      name: {
        'zh-CN': '单选选中后关闭',
        'en-US': 'Close after selectd'
      },
      desc: {
        'zh-CN': '<p>通过 <code>radio-change-close</code> 属性设置单选选中选项后，弹窗是否自动关闭。</p>',
        'en-US':
          '<p>Use the <code>radio-change-close</code> attribute to set whether the pop-up window will automatically close after selecting the radio option. </p>'
      },
      codeFiles: ['radio-change-close.vue']
    },
    {
      demoId: 'show-clear-btn',
      name: {
        'zh-CN': '不可清除',
        'en-US': 'Cannot be cleared'
      },
      desc: {
        'zh-CN': '<p>通过 <code>show-clear-btn</code> 属性设置是否可以清除。</p>',
        'en-US': '<p>The <code>show-clear-btn</code> attribute is used to set whether the content can be cleared. </p>'
      },
      codeFiles: ['show-clear-btn.vue']
    },
    {
      demoId: 'resize',
      name: {
        'zh-CN': '全屏展示',
        'en-US': 'Full-screen display'
      },
      desc: {
        'zh-CN': '<p>通过配置 <code>resize</code> 控制是否全屏展示。</p>',
        'en-US': '<p>You can set <code>resize</code> to determine whether to display the content in full screen.</p>'
      },
      codeFiles: ['resize.vue']
    },
    {
      demoId: 'grid',
      name: {
        'zh-CN': '表格编辑',
        'en-US': 'Table Edit'
      },
      desc: {
        'zh-CN':
          '<p>grid-op 当 popseletor 为 grid 时生效，目前支持配置 columns 表格列 和 data 数据源，详细配置项参考 Grid 表格组件，需同时配置 textField、valueField 字段。</p>',
        'en-US':
          '<p>grid-op: This parameter is valid only when popseletor is set to grid. Currently, columns and data data sources can be configured. For details about the configuration items, see the Grid table component. The textField and valueField fields must be configured at the same time. </p>'
      },
      codeFiles: ['grid.vue']
    },
    {
      demoId: 'selected-box',
      name: {
        'zh-CN': '显示为已选栏',
        'en-US': 'Width'
      },
      desc: {
        'zh-CN':
          '<p>多选场景，设置属性 show-selected-box 为 true，且通过属性 selected-box-op 指定 SelectedBox 组件配置，可以把已选表格显示为已选栏；组件 SelectedBox 的所有插槽也已经透传。</p>',
        'en-US':
          '<p>The width are configured through the <code>width</code> attribute. \n Use <code>dialog-class</code> to customize the pop-up window class name</p>'
      },
      codeFiles: ['selected-box.vue']
    },
    {
      demoId: 'width',
      name: {
        'zh-CN': '宽度',
        'en-US': 'Custom Icon'
      },
      desc: {
        'zh-CN': '<p>通过 <code>width</code> 属性配置宽，通过 <code>dialog-class</code> 自定义配置弹窗类名。</p>',
        'en-US':
          '<p>You can use the <code>icon</code> attribute to customize the component icon. You need to import the corresponding svg icon. </p>'
      },
      codeFiles: ['width.vue']
    },
    {
      demoId: 'icon',
      name: {
        'zh-CN': '自定义图标',
        'en-US': 'Multiple Choices'
      },
      desc: {
        'zh-CN': '<p>通过 <code>icon</code> 属性可以自定义组件图标，需引入对应的 svg 图标。</p>',
        'en-US':
          '<p>You can set <code>multi</code> to true to implement multiple selections. \nSet <code>show-history</code> to set whether to display tables on the History tab page when tables are configured on the pop-up panel. The default value is false. </p>'
      },
      codeFiles: ['icon.vue']
    },
    {
      demoId: 'multi',
      name: {
        'zh-CN': '多选',
        'en-US': 'Multiple choices. The initial data is an array.'
      },
      desc: {
        'zh-CN':
          '<p>通过设置 <code>multi</code> 属性为 true 实现多选。通过设置 <code>show-history</code> 当弹出面板配置的是表格时，设置历史记录标签页是否显示表格，默认为 false。</p>',
        'en-US': 'For details, see the following example.'
      },
      codeFiles: ['multi.vue']
    },
    {
      demoId: 'multi-value-array',
      name: {
        'zh-CN': '初始数据为数组',
        'en-US': 'change event'
      },
      desc: {
        'zh-CN': '<p>设置 multi 属性为 true，可以配置多选，此时可以设置 v-model 绑定值为一个数组。</p>',
        'en-US':
          'Change event of the input box of the <p><code>change</code> Popeditor component. <code>page-change</code>The table mode of the Popeditor component is switched by page. </p>'
      },
      codeFiles: ['multi-value-array.vue']
    },
    {
      demoId: 'before-close',
      name: {
        'zh-CN': '拦截弹窗关闭',
        'en-US': 'tabindex of the text box'
      },
      desc: {
        'zh-CN':
          '\n          <p>通过 <code>before-close</code> 属性可以配置一个拦截弹窗关闭的方法。如果方法返回 <code>false</code> 值，则拦截弹窗关闭；否则不拦截。</p>\n          <p>可以通过该拦截方法传入的参数获取关闭的操作类型 <code>confirm</code> 弹窗有以下关闭类型：</p>\n          <ul>\n            <li>confirm：点击确认时关闭</li>\n            <li>cancel：点击取消时关闭</li>\n            <li>close：点击关闭按钮时关闭</li>\n          </ul>\n        ',
        'en-US':
          '<p>The <code>tabindex</code> attribute is used to determine whether the focus can be obtained by pressing Tab and the focus sequence. This parameter is valid only when the <code>readonly</code> attribute is set to false. </p>'
      },
      codeFiles: ['before-close.vue']
    },
    {
      demoId: 'readonly',
      name: {
        'zh-CN': '只读',
        'en-US': 'Reset'
      },
      desc: {
        'zh-CN': '<p>通过 <code>readonly</code> 属性设置为是否禁用。</p>',
        'en-US': '<p>Use the <code>before-reset</code> attribute to set the hook function before reset. </p>'
      },
      codeFiles: ['readonly.vue']
    },
    {
      demoId: 'tabindex',
      name: {
        'zh-CN': '输入框的 tabindex',
        'en-US': 'Component Query Condition Slot'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>tabindex</code> 属性设置通过 Tab 键获焦及获焦顺序（<code>readonly</code> 属性设置为 false 时有效）。</p>',
        'en-US': '<p>Customize the pop-up panel query structure by slot <code>search</code>. </p>'
      },
      codeFiles: ['tabindex.vue']
    },
    {
      demoId: 'before-reset',
      name: {
        'zh-CN': '重置',
        'en-US': 'Disabled'
      },
      desc: {
        'zh-CN': '<p>通过 <code>before-reset</code> 属性设置重置前的钩子函数。</p>',
        'en-US': '<p> is set to read-only through the <code>disabled</code> attribute. </p>'
      },
      codeFiles: ['before-reset.vue']
    },
    {
      demoId: 'slot',
      name: {
        'zh-CN': '组件查询条件插槽',
        'en-US': 'The filter criteria in the pop-up window can be cleared.'
      },
      desc: {
        'zh-CN': '<p>通过插槽 <code>search</code> 自定义弹出面板查询结构。</p>',
        'en-US':
          'The <p><code>clearable</code> Popeditor component supports the configuration of the Clear button in the search form. </p>'
      },
      codeFiles: ['slot.vue']
    },
    {
      demoId: 'slot-footer',
      name: {
        'zh-CN': '自定义弹出框底部',
        'en-US': 'Display Field Mapping'
      },
      desc: {
        'zh-CN': '<p>通过插槽 <code>footer</code> 自定义弹出面板底部按钮栏结构。</p>',
        'en-US': '<p>Use the <code>text-field</code> attribute to set the fields displayed by the widget. </p>'
      },
      codeFiles: ['slot-footer.vue']
    },
    {
      demoId: 'disabled',
      name: {
        'zh-CN': '禁用',
        'en-US': 'Submit Field Mapping'
      },
      desc: {
        'zh-CN': '<p>通过 <code>disabled</code> 属性设置为是否只读。</p>',
        'en-US':
          '<p>The <code>value-field</code> attribute is used to set the fields submitted by the component to the background. </p>'
      },
      codeFiles: ['disabled.vue']
    },
    {
      demoId: 'clearable',
      name: {
        'zh-CN': '筛选条件支持可清空',
        'en-US': 'Custom Title'
      },
      desc: {
        'zh-CN': '<p><code>clearable</code> 配置是否在搜索表单增加清除按钮。</p>',
        'en-US':
          '<p>The <code>title</code> attribute is used to set the title of the pop-up window. The internationalization information is supported. </p>'
      },
      codeFiles: ['clearable.vue']
    },
    {
      demoId: 'text-field',
      name: {
        'zh-CN': '显示字段映射',
        'en-US': 'Remote Search'
      },
      desc: {
        'zh-CN': '<p>通过 <code>text-field</code> 属性设置组件显示的字段。</p>',
        'en-US':
          '<p>The <code>remote-search</code> attribute is used to configure remote search. In the remoteSearch method, the conditions search conditions can be sent to the background. After the background processes the data, the data can be properly displayed on the page. </p>'
      },
      codeFiles: ['textField.vue']
    },
    {
      demoId: 'title1',
      name: {
        'zh-CN': '提交字段映射',
        'en-US': 'Paging'
      },
      desc: {
        'zh-CN': '<p>通过 <code>value-field</code> 属性设置组件提交给后台的字段。</p>',
        'en-US':
          'The <p><code>showPager</code> attribute is valid only when <code>popseletor</code> is set to <code>grid</code>. The default value is <code>false</code>. Pagination is not enabled. If this parameter is set to <code>true</code>, you need to configure the <code>pager-op</code> attribute. In addition, you need to listen to the <code>page-change</code> event to change the <code>data</code> data source</p>\n of the <code>grid-op</code>'
      },
      codeFiles: ['title.vue']
    },
    {
      demoId: 'title',
      name: {
        'zh-CN': '自定义标题',
        'en-US': 'Rendering Query'
      },
      desc: {
        'zh-CN': '<p>通过 <code>title</code> 属性设置弹出窗口标题，支持国际化信息配置。</p>',
        'en-US':
          '<p>If the first batch of data loaded by the component does not contain the data corresponding to the currently set <code>value</code>, You can set <code>text-render-source</code> to perform reverse query</p>'
      },
      codeFiles: ['title.vue']
    },
    {
      demoId: 'remote-search',
      name: {
        'zh-CN': '远程搜索',
        'en-US': 'Enabling Tree Mode'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>remote-search</code> 属性配置远程搜索，在 remote-search 方法里可以把 conditions 搜索条件传给后台，后台处理好数据后就能正常的显示在页面上。</p>',
        'en-US':
          '<p>Enable the tree mode through the <code>popseletor</code> attribute. Then the <code>tree-op</code> attribute is the <code>op configuration mode</code> of the <code>Tree</code> component. </p>'
      },
      codeFiles: ['remote-search.vue']
    },
    {
      demoId: 'pager',
      name: {
        'zh-CN': '分页',
        'en-US': 'Single choice in tree mode'
      },
      desc: {
        'zh-CN':
          '<p><code>showPager</code> 属性只有当 <code>popseletor</code> 为 <code>grid</code> 时才能生效，默认值为 <code>false</code> 不启用分页，配置为 <code>true</code> 后还需配置 <code>pager-op</code> 属性；并且需要监听 <code>page-change</code> 事件改变 <code>grid-op</code> 的 <code>data</code> 数据源。</p>',
        'en-US':
          '<p>Enable the tree mode through the <code>popseletor</code> attribute. Then the <code>tree-op</code> attribute is the <code>op configuration mode</code> of the <code>Tree</code> component. </p>'
      },
      codeFiles: ['pager.vue']
    },
    {
      demoId: 'render-text',
      name: {
        'zh-CN': '渲染反查',
        'en-US': 'Edit box size'
      },
      desc: {
        'zh-CN':
          '<p>在组件加载的第一批数据中不含有当前所设置的 <code>value</code> 对应的数据时，可以设置 <code>text-render-source</code> 进行反查。</p>',
        'en-US':
          '<p>Sets the size of the PopEditor edit box through the <code>size</code> attribute. The options are <code>medium</code>, <code>small</code>, and <code>mini</code>. </p>'
      },
      codeFiles: ['render-text.vue']
    },
    {
      demoId: 'tree',
      name: {
        'zh-CN': '开启树模式',
        'en-US': 'Data beyond hidden'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>popseletor</code> 属性开启树模式，然后 <code>tree-op</code> 属性是 <code>Tree</code> 组件的 <code>op</code>配置方式。</p>',
        'en-US':
          '<p>Configure the <code>showOverflow</code> attribute on the data column to set the display and hiding of the data when the data exceeds the column width. Values can be of type boolean or string, with three values to choose from, as shown below. By default, all content is displayed in a new line. </p>\n<div class="tip custom-block"><p class="custom-block-title"> optional value description</p>\n<p>tooltip: The extra part is displayed...., and all information is displayed on the left or right. \ntitle: The value is the same as the title attribute of the native tag. \nellipsis: \'...\' is displayed, and no message is displayed. \ntrue: If the value is true, the effect is the same as that of the tooltip. </p>\n</div>'
      },
      codeFiles: ['tree.vue']
    },
    {
      demoId: 'single-select-radio',
      name: {
        'zh-CN': '树模式单选',
        'en-US': 'Mode of triggering a single selection'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>popseletor</code> 属性开启树模式，然后 <code>tree-op</code> 属性是 <code>Tree</code> 组件的 <code>op</code>配置方式。</p>',
        'en-US':
          '<p>When a single option is selected, you can only click the option button to select it by default. You can also set <code>trigger</code> to <code>row</code> to select any position in the row. Alternatively, set <code>trigger</code> to <code>cell</code> and click any position in the Operation column to select it. </p>'
      },
      codeFiles: ['single-select-radio.vue']
    },
    {
      demoId: 'size',
      name: {
        'zh-CN': '尺寸',
        'en-US': 'Set History tab'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>size</code> 属性设置 PopEditor 编辑框大小，可选值有 <code>medium</code>、<code>small</code>、<code>mini</code>。</p>',
        'en-US':
          '<p>When a table is configured on the pop-up panel, configure <code>show-history</code> to set whether to display the table on the History tab page. The default value is false. </p>'
      },
      codeFiles: ['size.vue']
    },
    {
      demoId: 'show-overflow',
      name: {
        'zh-CN': '数据超出隐藏',
        'en-US': 'Remote Data Request'
      },
      desc: {
        'zh-CN':
          "<p>在数据列上配置 <code>showOverflow</code> 属性用于设置数据超出列宽时的显示和隐藏。值的类型可以为 boolean 和 string，有三个值可以选择，如下所示。默认为换行显示全部内容。</p>\n          <div class=\"tip custom-block\">\n            <p class=\"custom-block-title\">可选值说明</p>\n            <p>'tooltip'：内容超出部分显示 ...，左侧/右侧弹出提示层显示全部信息。\n            <p>'title'：和原生标签的 title 属性一致。</p>\n            <p>'ellipsis'：内容超出部分显示 ...，没有提示。</p>\n            <p>boolean：为 true 时，效果和 'tooltip' 一致。</p>\n          </div>\n        ",
        'en-US':
          '<p>Configure the <code>auto-lookup</code> to false, set initialization to not request data, or call this $ref.popuptor.handleSearch() Proactively calls the request method</p>'
      },
      codeFiles: ['show-overflow.vue']
    },
    {
      demoId: 'trigger',
      name: {
        'zh-CN': '单选时触发勾选的方式',
        'en-US': 'Associative query'
      },
      desc: {
        'zh-CN':
          '<p>弹出编辑为单选时，默认只能通过单击单选按钮进行勾选。但也可以通过设置属性 <code>trigger</code> 为 <code>row</code> 实现单击行中任意位置进行勾选。或者设置 <code>trigger</code> 为 <code>cell</code>，单击操作列的单元格上任意位置进行勾选。</p>',
        'en-US':
          '<p>Configure the <code>suggest</code> to enable the association function, automatically triggering association queries after input in the input box; This function needs to be used in conjunction with <code>remoteSearch</code>.</p>'
      },
      codeFiles: ['trigger.vue']
    },
    {
      demoId: 'show-history',
      name: {
        'zh-CN': '历史记录标签页',
        'en-US': ''
      },
      desc: {
        'zh-CN':
          '<p>当弹出面板配置的是表格时，通过配置 <code>show-history</code> 设置历史记录标签页是否显示表格，该值默认为 false。</p>',
        'en-US': ''
      },
      codeFiles: ['show-history.vue']
    },
    {
      demoId: 'auto-lookup',
      name: {
        'zh-CN': '远程数据请求',
        'en-US': ''
      },
      desc: {
        'zh-CN':
          '<p>配置 <code>auto-lookup</code> 为false，设置初始化不请求数据，也可以调用 this.$refs.popeditor.handleSearch() 主动调用请求方法。</p>',
        'en-US': ''
      },
      codeFiles: ['auto-lookup.vue']
    },
    {
      demoId: 'suggest',
      name: {
        'zh-CN': '联想查询',
        'en-US': ''
      },
      desc: {
        'zh-CN':
          '<p>配置 <code>suggest</code> 开启联想功能，输入框输入后自动触发联想查询；该功能需要联合 <code>remoteSearch</code>使用。',
        'en-US': ''
      },
      codeFiles: ['suggest.vue']
    },
    {
      demoId: 'auto-reset',
      name: {
        'zh-CN': '自动重置',
        'en-US': 'auto reset'
      },
      desc: {
        'zh-CN': '<p>配置 <code>autoReset</code> 开启自动重置筛选项，筛选后点击关闭弹窗即可重置。',
        'en-US': ''
      },
      codeFiles: ['auto-reset.vue']
    },
    {
      demoId: 'events',
      name: {
        'zh-CN': '事件',
        'en-US': 'close event'
      },
      desc: {
        'zh-CN':
          '\n          <p><code>popup</code>：弹框打开时触发的事件。</p>\n          <p><code>close</code>：弹框关闭时触发的事件。</p>\n          <p><code>change</code>：Input 框的 change 事件。</p>\n          <p><code>page-change</code>：表格模式带分页切换事件。</p>\n        ',
        'en-US': 'Event triggered when the <p><code>close</code> dialog box is closed. </p>'
      },
      codeFiles: ['events.vue']
    }
  ]
}
