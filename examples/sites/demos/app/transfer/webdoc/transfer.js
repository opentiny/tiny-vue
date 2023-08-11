export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>value</code> 属性进行双向绑定，其指定的值为默认选择的值，将展示在右侧列表。\n\n<code>data</code> 属性提供数据源，其是一个对象数组，对象中默认字段有 key、label、disabled 。</p>\n',
        'en-US':
          '<p>The <code>value</code> attribute is used for bidirectional binding. The specified value is the default value and is displayed in the list on the right. \n\nThe <code>data</code> attribute provides the data source. It is an object array. The default fields in the object are key, label, and disabled. </p>\n'
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'data-source',
      'name': { 'zh-CN': '数据源', 'en-US': 'Data Source' },
      'desc': {
        'zh-CN': '<p>可请求服务获取数据，再将数据赋予 <code>data</code> 。</p>\n',
        'en-US': '<p>You can request the service to obtain data and assign the data to <code>data</code>. </p>\n'
      },
      'codeFiles': ['data-source.vue']
    },
    {
      'demoId': 'show-all-btn',
      'name': { 'zh-CN': '展示全部移动按钮', 'en-US': 'Display All Move Buttons' },
      'desc': {
        'zh-CN': '<p>可通过 <code>show-all-btn</code> 属性设置展示全部移动按钮。</p>\n',
        'en-US': '<p>You can set the <code>show-all-btn</code> attribute to display all mobile buttons. </p>\n'
      },
      'codeFiles': ['show-all-btn.vue']
    },
    {
      'demoId': 'custom-transfer-titles',
      'name': { 'zh-CN': '自定义列表标题', 'en-US': 'Customized List Title' },
      'desc': {
        'zh-CN': '<p>通过 <code>titles</code> 属性可对左右列表的标题进行自定义。</p>\n',
        'en-US':
          '<p>You can use the <code>titles</code> attribute to customize the titles of the left and right lists. </p>\n'
      },
      'codeFiles': ['custom-transfer-titles.vue']
    },
    {
      'demoId': 'custom-button-texts',
      'name': { 'zh-CN': '自定义按钮文案', 'en-US': 'Custom Button Copywriting' },
      'desc': {
        'zh-CN': '<p>通过 <code>button-texts</code> 属性自定义左右穿梭的按钮文本。</p>\n',
        'en-US':
          '<p>The <code>button-texts</code> attribute is used to customize the left and right button text. </p>\n'
      },
      'codeFiles': ['custom-button-texts.vue']
    },
    {
      'demoId': 'filter-placeholder',
      'name': { 'zh-CN': '搜索框占位符', 'en-US': 'Search box placeholder' },
      'desc': {
        'zh-CN': '<p>通过 <code>filter-placeholder</code> 属性自定义搜索框占位符。</p>\n',
        'en-US': '<p>Customize the search box placeholder through the <code>filter-placeholder</code> attribute. </p>\n'
      },
      'codeFiles': ['filter-placeholder.vue']
    },
    {
      'demoId': 'custom-filter-method',
      'name': { 'zh-CN': '自定义搜索方法', 'en-US': 'Custom Search Method' },
      'desc': {
        'zh-CN': '<p>提供 <code>filter-method</code> 钩子函数，可自定义搜索的方法。</p>\n',
        'en-US': '<p>Provides the <code>filter-method</code> hook function to customize the search method. </p>\n'
      },
      'codeFiles': ['custom-filter-method.vue']
    },
    {
      'demoId': 'default-checked',
      'name': { 'zh-CN': '默认勾选项', 'en-US': 'Default options' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>left-default-checked</code>、<code>right-default-checked</code> 属性分别指定左右侧列表默认的勾选数据。</p>\n',
        'en-US':
          '<p>Use the <code>left-default-checked</code> and <code>right-default-checked</code> attributes to specify the default selected data in the left and right lists. </p>\n'
      },
      'codeFiles': ['default-checked.vue']
    },
    {
      'demoId': 'custom-render-content',
      'name': { 'zh-CN': '自定义数据项渲染', 'en-US': 'Customized Data Item Rendering' },
      'desc': {
        'zh-CN': '<p>使用 render-content 自定义数据项</p>\n',
        'en-US': '<p>Use render-content to customize data items</p>\n'
      },
      'codeFiles': ['custom-render-content.vue']
    },
    {
      'demoId': 'checked-format-text',
      'name': { 'zh-CN': '列表顶部勾选状态文案', 'en-US': 'Selected status copywriting at the top of the list' },
      'desc': {
        'zh-CN':
          '<p>指定 <code>format</code> 属性后，勾选数据时，左右侧列表顶部将展示已勾选数据和所有数据的比值。</p>\n',
        'en-US':
          '<p>After the <code>format</code> attribute is specified, the ratio of the selected data to all data is displayed on the top of the left and right lists when data is selected. </p>\n'
      },
      'codeFiles': ['checked-format-text.vue']
    },
    {
      'demoId': 'filterable',
      'name': { 'zh-CN': '可搜索', 'en-US': 'Searchable' },
      'desc': {
        'zh-CN': '<p>通过 <code>filterable</code> 属性开启左右侧列表的搜索功能。</p>\n',
        'en-US':
          '<p>The <code>filterable</code> attribute is used to enable the search function for the left and right lists. </p>\n'
      },
      'codeFiles': ['filterable.vue']
    },
    {
      'demoId': 'props-of-data-source',
      'name': { 'zh-CN': '数据源的字段别名', 'en-US': 'Field alias of the data source' },
      'desc': {
        'zh-CN': '<p>当数据对象中的字段和默认不一致时，可通过 <code>props</code> 属性进行映射。</p>\n',
        'en-US':
          '<p>When a field in a data object is inconsistent with the default value, the <code>props</code> attribute can be used for mapping. </p>\n'
      },
      'codeFiles': ['props-of-data-source.vue']
    },
    {
      'demoId': 'target-order',
      'name': { 'zh-CN': '右侧排序策略', 'en-US': 'Right Sorting Policy' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>target-order</code> 属性设置右侧列表元素的排序策略，有 original、push、unshift 三个选项，默认为 original 。</p>\n<div class="tip custom-block"><p class="custom-block-title">排序策略</p>\n<p>若为 original，则保持与数据源相同的顺序\n若为 push，则新加入的元素排在最后\n若为 unshift，则新加入的元素排在最前</p>\n</div>\n',
        'en-US':
          '<p>Use the <code>target-order</code> attribute to set the sorting policy of the elements in the list on the right. The options are original, push, and unshift. The default value is original. </p>\n<div class="tip custom-block"><p class="custom-block-title"> Sorting Policy</p>\n<p>If the value is original, the sequence of the data source is the same as that of the data source.\nIf the value is push, the newly added elements are ranked last.\nIf the value is unshift, the newly added elements are ranked first </p>\n</div>\n'
      },
      'codeFiles': ['target-order.vue']
    },
    {
      'demoId': 'drop-config',
      'name': { 'zh-CN': '左右拖拽', 'en-US': 'Drag left and right' },
      'desc': {
        'zh-CN':
          '<div class="tip custom-block"><p class="custom-block-title">使用拖拽功能时请先安装 sortablejs 插件</p>\n</div>\n<p>通过 <code>drop-config</code> 属性配置 sortablejs 插件进行左右拖拽穿梭。</p>\n',
        'en-US':
          'Before using the drag-and-drop function for the <div class="tip custom-block"><p class="custom-block-title">, install the sortablejs plug-in. The </p>\n</div>\n<p> uses the drop-config attribute to configure the sortablejs plug-in. </p>\n'
      },
      'codeFiles': ['drop-config.vue']
    },
    {
      'demoId': 'transfer-events',
      'name': { 'zh-CN': '穿梭框事件', 'en-US': 'Shuttle Box Event' },
      'desc': {
        'zh-CN':
          '<p>主要有 <code>change</code>、<code>left-check-change</code>、<code>right-check-change</code> 三个事件。</p>\n<div class="tip custom-block"><p class="custom-block-title">事件说明</p>\n<p>change：右侧列表元素变化时触发\nleft-check-change：左侧列表元素被用户选中 / 取消选中时触发\nright-check-change：右侧列表元素被用户选中 / 取消选中时触发</p>\n</div>\n',
        'en-US':
          '<p>There are three events: <code>change</code>, <code>left-check-change</code>, and <code>right-check-change</code>. </p>\n<div class="tip custom-block"><p class="custom-block-title"> Event Description</p>\n<p>change: Triggered when an element in the list on the right changes.\nleft-check-change: Triggered when an element in the list on the left is selected or deselected.\nright-check-change: Triggered when an element in the list on the right is selected or deselected'
      },
      'codeFiles': ['transfer-events.vue']
    },
    {
      'demoId': 'manual-clear-query',
      'name': { 'zh-CN': '手动清空搜索框', 'en-US': 'Clear the search box manually' },
      'desc': {
        'zh-CN': '<p>调用 <code>clearQuery()</code> 方法可清空左右侧列表的搜索框，参数为 left 或者 right 。</p>\n',
        'en-US':
          '<p>Invoke the <code>clearQuery()</code> method to clear the search boxes in the left and right lists. The parameter is left or right. </p>\n'
      },
      'codeFiles': ['manual-clear-query.vue']
    },
    {
      'demoId': 'custom-footer',
      'name': { 'zh-CN': '自定义列表底部', 'en-US': 'Custom List Bottom' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>left-footer</code>、<code>right-footer</code> 插槽可分别对左右列表底部进行自定义。</p>\n',
        'en-US':
          '<p>You can customize the bottom of the left and right lists through the <code>left-footer</code> and <code>right-footer</code> slots. </p>\n'
      },
      'codeFiles': ['custom-footer.vue']
    },
    {
      'demoId': 'panel-slot',
      'name': { 'zh-CN': '面板插槽', 'en-US': 'Panel Slot' },
      'desc': {
        'zh-CN':
          '<p>可通过 <code>left-panel</code> 和 <code>right-panel</code> 自定义左、右侧面板内容；通过 <code>button-panel</code> 自定义穿梭按钮</p>\n',
        'en-US':
          '<p>You can use <code>left-panel</code> and <code>right-panel</code> to customize the contents of the left and right panels. Use <code>button-panel</code> to customize the shuttle button</p>\n'
      },
      'codeFiles': ['panel-slot.vue']
    },
    {
      'demoId': 'nested-table',
      'name': { 'zh-CN': '嵌套表格', 'en-US': 'Nested Table' },
      'desc': {
        'zh-CN':
          '<p>当 <code>render</code> 属性里的 <code>plugin</code> 设置为 <code>Table</code> 时指定穿梭框渲染成表格，具体配置可参考 <code>grid</code> 组件的配置。</p>\n',
        'en-US':
          '<p>When <code>plugin</code> in the <code>render</code> attribute is set to <code>Table</code>, the shuttle box is rendered as a table. For details, see the configuration of the <code>grid</code> component. </p>\n'
      },
      'codeFiles': ['nested-table.vue']
    },
    {
      'demoId': 'nested-tree',
      'name': { 'zh-CN': '嵌套树', 'en-US': 'Nested Tree' },
      'desc': {
        'zh-CN':
          '<p>当 <code>render</code> 属性里的 <code>plugin</code> 设置为 <code>Tree</code> 时指定穿梭框渲染成树，通过 <code>treeConfig</code> 属性配置树相关的配置（具体配置可参考 <code>tree</code> 组件的配置）。</p>\n',
        'en-US':
          '<p>When <code>plugin</code> in the <code>render</code> attribute is set to <code>Tree</code>, the shuttle box is rendered as a tree. Configure tree-related configurations through the <code>treeConfig</code> attribute. (For details, see the configuration of the <code>tree</code> component.) </p>\n'
      },
      'codeFiles': ['nested-tree.vue']
    }
  ],
  apis: [
    {
      'name': 'transfer',
      'type': 'component',
      'properties': [
        {
          'name': 'data',
          'type': 'Array',
          'defaultValue': '',
          'desc': { 'zh-CN': 'Transfer 的数据源', 'en-US': 'Transfer data source' },
          'demoId': 'data-source'
        },
        {
          'name': 'modelValue / v-model',
          'type': 'Array',
          'defaultValue': '',
          'desc': { 'zh-CN': '绑定值', 'en-US': 'Bound Value' },
          'demoId': 'data-source'
        },
        {
          'name': 'filterable',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': { 'zh-CN': '是否可搜索', 'en-US': 'Searchable' },
          'demoId': 'filterable'
        },
        {
          'name': 'filter-placeholder',
          'type': 'String',
          'defaultValue': '该属性的默认值为 请输入搜索内容',
          'desc': { 'zh-CN': '搜索框占位符', 'en-US': 'Search box placeholder' },
          'demoId': 'filter-placeholder'
        },
        {
          'name': 'filter-method',
          'type': 'Function(arg1,arg2)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '设置穿梭框的搜索过滤字段, 此属性只在渲染类型（renderType）为 table 时生效;// 自定义搜索方法参数 \narg1:String 输入的过滤字串\narg2:Object 每一个数据项',
            'en-US':
              'Set the search filtering field of the shuttle box. This attribute is valid only when RenderType is set to table. //Customize the search method parameter \narg1:String Input filter string \narg2:Object Each data item'
          },
          'demoId': 'custom-filter-method'
        },
        {
          'name': 'titles',
          'type': 'Array',
          'defaultValue': "该属性的默认值为 ['列表 1', '列表 2']",
          'desc': { 'zh-CN': '自定义列表标题', 'en-US': 'User-defined list title' },
          'demoId': 'custom-transfer-titles'
        },
        {
          'name': 'button-texts',
          'type': 'Array',
          'defaultValue': '该属性的默认值为 []',
          'desc': { 'zh-CN': '自定义按钮文案', 'en-US': 'Custom Button Copywriting' },
          'demoId': 'custom-button-texts'
        },
        {
          'name': 'render-content',
          'type': 'Function(arg1,arg2)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '自定义数据项渲染函数;arg1:{Function 创建虚拟节点的函数}，arg2:{Object 数据项}',
            'en-US':
              'Customized data item rendering function; arg1:{Function for creating a virtual node}, arg2:{Object data item}'
          },
          'demoId': 'custom-render-content'
        },
        {
          'name': 'format',
          'type': 'Object',
          'defaultValue': "该属性的默认值为 { noChecked: '${checked}/${total}', hasChecked: '${checked}/${total}' }",
          'desc': { 'zh-CN': '列表顶部勾选状态文案', 'en-US': 'Selected status copywriting at the top of the list' },
          'demoId': 'checked-format-text'
        },
        {
          'name': 'props',
          'type': 'Object',
          'defaultValue': '',
          'desc': { 'zh-CN': '数据源的字段别名', 'en-US': 'Field alias of the data source' },
          'demoId': 'props-of-data-source'
        },
        {
          'name': 'left-default-checked',
          'type': 'Array',
          'defaultValue': '该属性的默认值为 []',
          'desc': {
            'zh-CN': '初始状态下左侧列表的已勾选项的 key 数组',
            'en-US': 'Key array of selected items in the list on the left in the initial state'
          },
          'demoId': 'default-checked'
        },
        {
          'name': 'right-default-checked',
          'type': 'Array',
          'defaultValue': '该属性的默认值为 []',
          'desc': {
            'zh-CN': '初始状态下右侧列表的已勾选项的 key 数组',
            'en-US': 'Key array of selected items in the list on the right in the initial state'
          },
          'demoId': 'default-checked'
        },
        {
          'name': 'target-order',
          'type': 'String',
          'defaultValue': '该属性的默认值为 original',
          'desc': {
            'zh-CN':
              '右侧列表元素的排序策略：若为 original，则保持与数据源相同的顺序；若为 push，则新加入的元素排在最后；若为 unshift，则新加入的元素排在最前;该属性的可选值为 original / push / unshift',
            'en-US':
              'Sorting policy of elements in the right list: If the value is original, the sequence of elements in the right list is the same as that in the data source. If the value is push, the newly added element is ranked last. If the value is unshift, the newly added element is ranked first. The value of this attribute can be original / push / unshift'
          },
          'demoId': 'target-order'
        },
        {
          'name': 'to-left-disable',
          'type': 'Boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN': '提供给用户控制穿梭框按钮禁用状态的属性,组件初始化状态下未选中时显示禁用状态，默认值为true',
            'en-US':
              'Provides users to control the disabled status of the shuttle button. If the button is not selected during component initialization, the disabled status is displayed. The default value is true.'
          },
          'demoId': 'data-source'
        },
        {
          'name': 'to-right-disable',
          'type': 'Boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN': '提供给用户控制穿梭框按钮禁用状态的属性,组件初始化状态下未选中时显示禁用状态，默认值为true',
            'en-US':
              'Provides users to control the disabled status of the shuttle button. If the button is not selected during component initialization, the disabled status is displayed. The default value is true.'
          },
          'demoId': 'data-source'
        },
        {
          'name': 'show-all-btn',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '展示全部移动按钮', 'en-US': 'All Move Buttons' },
          'demoId': 'show-all-btn'
        },
        {
          'name': 'drop-config',
          'type': 'Object',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置穿梭框列表项可拖拽',
            'en-US': 'Set the list items in the shuttle box to be dragged.'
          },
          'demoId': 'drop-config'
        },
        {
          'name': 'columns',
          'type': 'Array',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '设置穿梭框的表格列配置, 此属性只在渲染类型（renderType）为 table 时生效;设置穿梭框的表格列配置, 此属性只在渲染类型（renderType）为 grid 时生效',
            'en-US':
              'Sets the table column configuration of the shuttle box. This attribute is valid only when RenderType is set to table. Sets the table column configuration of the shuttle box. This attribute is valid only when the rendering type (renderType) is grid.'
          },
          'demoId': 'nested-table'
        },
        {
          'name': 'page-vo',
          'type': 'Object',
          'defaultValue': '该属性的默认值为 {currentPage:1,pageSize:10}',
          'desc': {
            'zh-CN': '设置分页配置，此属性只在渲染类型为 grid 时生效,需要与 pager-op 一起使用',
            'en-US':
              'Sets the pagination configuration. This attribute is valid only when the rendering type is grid and must be used together with pager-op.'
          },
          'demoId': 'nested-table'
        },
        {
          'name': 'show-pager',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '设置是否显示分页，当渲染为表格时有效',
            'en-US': 'Specifies whether to display pagination. This parameter is valid only when tables are rendered.'
          },
          'demoId': 'nested-table'
        },
        {
          'name': 'pager-op',
          'type': 'Object',
          'defaultValue': "该属性的默认值为 {mode: 'fixed',pageVO: {currentPage: 1,pageSize: 10}",
          'desc': {
            'zh-CN': '设置分页配置，当渲染为表格时有效',
            'en-US': 'Sets the pagination configuration. This parameter is valid when the table is rendered.'
          },
          'demoId': 'nested-table'
        },
        {
          'name': 'render',
          'type': 'Object',
          'defaultValue': '',
          'desc': {
            'zh-CN': '当plugin设置为Table时设置渲染为表格;当plugin设置为Tree渲染为树',
            'en-US': 'When plugin is set to Table, set the rendering to table. When the plugin is set to Tree'
          },
          'demoId': 'nested-table'
        },
        {
          'name': 'tree-op',
          'type': 'Object',
          'defaultValue': '',
          'desc': {
            'zh-CN': '当plugin设置为Tree渲染为树时，设置树的相关配置属性',
            'en-US': 'Set the tree-related configuration attributes when the plug-in is set to tree.'
          },
          'demoId': 'nested-tree'
        }
      ],
      'events': [
        {
          'name': 'change',
          'type': 'Function(arg1,arg2,arg3)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '右侧列表元素变化时触发;//参数arg1:Array 穿梭框右侧数据值列表\n//参数arg2:String 数据移动方向，是left或者right\n//参数arg3:Array 被移动的数据值列表',
            'en-US':
              'Triggered when an element in the list on the right changes. //Parameter arg1: Data value list on the right of the Array shuttle box.\n//Parameter arg2: String Data movement direction, which can be left or right\n//Parameter arg3: Array data value list to be moved'
          },
          'demoId': 'transfer-events'
        },
        {
          'name': 'left-check-change',
          'type': 'Function(arg1,arg2)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '左侧列表元素被用户选中 / 取消选中时触发;//参数arg1:Array 穿梭框左侧被选中的数据值列表\n//参数arg2:Array 穿梭框左侧选中状态发生变化的数据值列表',
            'en-US':
              'This event is triggered when an element in the list on the left is selected or deselected. //Parameter arg1: List of selected data values on the left of the Array shuttle box.\n//Parameter arg2: List of selected data values whose status changes on the left of the Array shuttle box'
          },
          'demoId': 'transfer-events'
        },
        {
          'name': 'right-check-change',
          'type': 'Function(arg1,arg2)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '右侧列表元素被用户选中 / 取消选中时触发;//参数arg1:Array 穿梭框右侧被选中的数据值列表\n//参数arg2:Array 穿梭框右侧选中状态发生变化的数据值列表',
            'en-US':
              'This event is triggered when an element in the list on the right is selected or deselected. //Parameter arg1: list of selected data values on the right of the Array shuttle box.\n//Parameter arg2: list of selected data values whose status changes on the right of the Array shuttle box'
          },
          'demoId': 'transfer-events'
        }
      ],
      'slots': [
        {
          'name': 'left-footer',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '左侧列表底部的内容', 'en-US': 'Content at the bottom of the left list' },
          'demoId': 'custom-footer'
        },
        {
          'name': 'right-footer',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '右侧列表底部的内容', 'en-US': 'Content at the bottom of the list on the right' },
          'demoId': 'custom-footer'
        },
        {
          'name': 'button-panel',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '自定义穿梭按钮', 'en-US': 'Customized shuttle button' },
          'demoId': 'panel-slot'
        },
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '自定义数据项的内容，参数为 { option }',
            'en-US': 'Content of a user-defined data item. The parameter is {option}.'
          },
          'demoId': 'custom-render-content'
        },
        {
          'name': 'left-panel',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '左侧自定义内容', 'en-US': 'Customized content on the left' },
          'demoId': 'panel-slot'
        },
        {
          'name': 'right-panel',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '右侧自定义内容', 'en-US': 'Customized content on the right' },
          'demoId': 'panel-slot'
        }
      ],
      'methods': [
        {
          'name': 'clearQuery',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '清空某个面板的搜索关键词', 'en-US': 'Clear the search keywords of a panel.' },
          'demoId': 'manual-clear-query'
        }
      ]
    }
  ]
}
