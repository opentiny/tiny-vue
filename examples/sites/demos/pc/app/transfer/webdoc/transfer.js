export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': `<p>
            通过 <code>data</code> 属性提供左右列表全量的数据源，其是一个对象数组，每个数据项中默认字段有 key、label、disabled。<br>
            通过 <code>value</code> 属性指定右列表值的数组，其选择项只展示在右侧列表。
          </p>`,
        'en-US': `<p>
            The <code>data</code> property provides the full data source for the left and right lists, which is an array of objects with the default fields key, label, and disabled for each item. <br>
            The <code>value</code> property specifies an array of values for the right list whose selections are displayed only in the right list. 
          </p>`
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'custom-titles',
      'name': { 'zh-CN': '自定义列表标题区', 'en-US': 'Customized List Title' },
      'desc': {
        'zh-CN': `<p>
          通过 <code>titles</code> 属性，可对左右列表的标题进行自定义。<br>
          通过 <code>format</code> 属性，可定制左右侧列表顶部的数据统计的显示格式，请参考下面示例。
        </p>`,
        'en-US': `<p>
            The titles of the left and right lists can be customized using the <code>titles</code> property. <br>
            The <code>format</code> attribute allows you to customize the format of the statistics at the top of the left and right lists, as shown in the following example:
          </p>`
      },
      'codeFiles': ['custom-titles.vue']
    },
    {
      'demoId': 'custom-btns',
      'name': { 'zh-CN': '自定义按钮区', 'en-US': 'Display All Move Buttons' },
      'desc': {
        'zh-CN': `<p>
          按钮区包含默认按钮和全部按钮2类按钮。按钮的高亮与禁用，组件内部会自动识别处理。<br>
          通过 <code>show-all-btn</code> 属性设置展示全部移动按钮，属性默认值为<code>false</code>。<br>
          通过 <code>button-texts</code> 属性自定义左右穿梭的默认按钮文本，接受包含2个字符串的数组值。全部按钮不能自定义文本。<br>
          你可以通过<code>to-left-disable</code> 和 <code>to-right-disable</code> 属性来指定默认按钮没有选中项时的状态。
        </p>`,
        'en-US': `<p>
          The button area contains two types of buttons: default buttons and all buttons. Buttons are highlighted and disabled automatically by the component itself. <br>
          show all the move buttons with the <code>show-all-btn</code> property, which defaults to <code>false</code>. <br>
          The default button texts of the left and right shuttles are defined by the <code>button-texts</code> attribute, which accepts an array value containing 2 strings. No custom text for all buttons. <br>
          The <code>to-left-disable</code> and <code>to-right-disable</code> properties allow you to specify the state of the default button when no items are selected.
         </p>`
      },
      'codeFiles': ['custom-btns.vue']
    },
    {
      'demoId': 'custom-footer',
      'name': { 'zh-CN': '自定义列表底部', 'en-US': 'Custom List Bottom' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>left-footer</code>、<code>right-footer</code> 插槽可分别对左右列表底部进行自定义。</p>\n',
        'en-US':
          '<p>The bottom of the list can be customized using the <code>left-footer</code> and <code>right-footer</code> slots, respectively. </p>'
      },
      'codeFiles': ['custom-footer.vue']
    },
    {
      'demoId': 'custom-render',
      'name': { 'zh-CN': '自定义数据项显示', 'en-US': 'Customized Data Item Rendering' },
      'desc': {
        'zh-CN': `<p>
          通过 <code> props </code> 属性,可以简单的指定<code> key / label /disabled </code>映射到数据项的指定列。<br>
          通过 <code> default </code> 插槽,可以完全自定义数据项渲染的dom结构，推荐使用插槽的方式。<br>
          通过 <code> render-content </code> 属性,也可以完全自定义数据项渲染的dom结构。<br>
          <div class="tip custom-block"><p class="custom-block-title">如果数据格式不是标准属性格式，则一定要通过<code>props</code>做属性映射！</p></div>
        </p>`,
        'en-US': `<p>
        Using the <code> props </code> property, you can simply specify that the <code> key/label /disabled </code> maps to the specified column of the data item. <br>
        The <code> default </code> slot allows you to fully customize the dom structure rendered by the data items.It is recommended that you use slots. <br>
        It is also possible to fully customize the dom structure rendered by a data item via the <code> render-content </code> property. <br>
        <div class="tip custom-block"><p class="custom-block-title">If the data is not in a standard attribute format, be sure to use <code>props</code> for property mapping!</p></div>
      </p>`
      },
      'codeFiles': ['custom-render.vue']
    },
    {
      'demoId': 'custom-filter',
      'name': { 'zh-CN': '过滤搜索', 'en-US': 'Custom Search Method' },
      'desc': {
        'zh-CN': `<p>
          在左右列表的上部，支持显示一个输入框，去过滤显示左右列表的数据项。<br>
          通过 <code>filterable</code> 属性开启左右侧列表的搜索功能，默认根据label内容过滤。<br>
          通过 <code>filter-placeholder</code> 属性自定义左右搜索框占位符。<br>
          通过 <code>filter-method</code> 钩子函数，可自定义左右列表搜索的方法。
        </p>`,
        'en-US': `<p>
          At the top of the left and right lists, you can display an input field to filter the data items that display the left and right lists. <br>
          Use the <code>filterable</code> attribute to enable the search function of the left and right lists, which by default filter based on the label content. <br>
          Use the <code>filter-placeholder</code> attribute to define the placeholder for the left and right search boxes. <br>
          The <code>filter-method</code> hook allows you to customize the way you search the left and right lists.
        </p>`
      },
      'codeFiles': ['custom-filter.vue']
    },
    {
      'demoId': 'default-checked',
      'name': { 'zh-CN': '默认勾选项', 'en-US': 'Default options' },
      'desc': {
        'zh-CN': `<p>
          通过 <code>left-default-checked</code>、<code>right-default-checked</code> 属性分别指定左右侧列表默认的勾选数据。禁用数据项默认无法勾选。<br>
          通过组件实例上的<code>state</code>属性，可以查询组件当前左右列表的数据项和数据选中项等信息。
        </p>`,
        'en-US': `<p>
            The <code>left-default-checked</code> and <code>right-default-checked</code> attributes specify the default check data for the left and right lists, respectively. Disabling the data item cannot be checked by default. <br>
            Using the <code>state</code> property on the component instance, you can query the current left and right list of the component for data items and data selected items.
          </p>`
      },
      'codeFiles': ['default-checked.vue']
    },

    {
      'demoId': 'drop-config',
      'name': { 'zh-CN': '可拖拽', 'en-US': 'Drag left and right' },
      'desc': {
        'zh-CN':
          '<div class="tip custom-block"><p class="custom-block-title">使用拖拽功能时请先安装 sortablejs 插件</p></div><p>通过 <code>drop-config</code> 属性配置 sortablejs 插件进行左右拖拽穿梭。</p>\n',
        'en-US': `<div class="tip custom-block"><p class="custom-block-title"> Please install sortablejs plugin before using drag and drop function </p></div><p> Pass The <code>drop-config</code> property config the sortablejs plugin to do the left-right drag shuttle.</p>`
      },
      'codeFiles': ['drop-config.vue']
    },
    {
      'demoId': 'target-order',
      'name': { 'zh-CN': '右侧排序策略', 'en-US': 'Right Sorting Policy' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>target-order</code> 属性设置右侧列表元素的排序策略，有 original、push、unshift 三个选项，默认为 original 。</p>\n<div class="tip custom-block"><p class="custom-block-title">排序策略</p>\n<p>若为 original，则保持与数据源相同的顺序\n若为 push，则新加入的元素排在最后\n若为 unshift，则新加入的元素排在最前</p>\n</div>',
        'en-US':
          '<p>The <code>target-order</code> property sets the sorting strategy of the elements in the list on the right.There are three options: original, push, and unshift.The default is original. </p>\n<div class="tip custom-block"><p class="custom-block-title"> Sorting strategy </p>\n<p> If original, keep same order as data source \n if push, Then the new element is last.  nIf unshift, the new element is first. </p>\n</div>'
      },
      'codeFiles': ['target-order.vue']
    },
    {
      'demoId': 'manual-clear-query',
      'name': { 'zh-CN': '手动清空搜索框', 'en-US': 'Clear the search box manually' },
      'desc': {
        'zh-CN': '<p>调用 <code>clearQuery()</code> 方法可清空左右侧列表的搜索框，参数为 left 或者 right 。</p>',
        'en-US':
          '<p>The <code>clearQuery()</code> method clears the search box in the left and right lists with either the left or right arguments.</p>'
      },
      'codeFiles': ['manual-clear-query.vue']
    },
    {
      'demoId': 'before-transfer',
      'name': { 'zh-CN': '穿梭拦截', 'en-US': 'Clear the search box manually' },
      'desc': {
        'zh-CN': `<p>
          调用 <code>before-transfer</code> 属性，接受一个函数来拦截穿梭的动作。 <br>
          该函数参数为一个回调函数，执行回调函数，数据项才允许穿梭。
        </p>`,
        'en-US': `<p>
            Call the <code>before-transfer</code> property, which accepts a function to intercept the shuttle action. <br>
            This function takes a callback function and executes the callback function before the data item is allowed to shuttle.
          </p>`
      },
      'codeFiles': ['before-transfer.vue']
    },
    {
      'demoId': 'nested-table',
      'name': { 'zh-CN': '嵌套表格', 'en-US': 'Nested Table' },
      'desc': {
        'zh-CN':
          '<p>当 <code>render</code> 属性里的 <code>plugin</code> 设置为 <code>Table</code> 时指定穿梭框渲染成表格，具体配置可参考 <code>grid</code> 组件的配置。</p>\n',
        'en-US':
          '<p>The <code>plugin</code> in the <code>render</code> attribute is set to <code>Table</code>, which is specified in the <code>grid</code> component configuration.</p>\n'
      },
      'codeFiles': ['nested-table.vue']
    },
    {
      'demoId': 'nested-tree',
      'name': { 'zh-CN': '嵌套树', 'en-US': 'Nested Tree' },
      'desc': {
        'zh-CN':
          '<p>当 <code>render</code> 属性里的 <code>plugin</code> 设置为 <code>Tree</code> 时指定穿梭框渲染成树，通过 <code>treeConfig</code> 属性配置树相关的配置（具体配置可参考 <code>tree</code> 组件的配置）。</p>',
        'en-US':
          '<p>When the <code>plugin</code> in the <code>render</code> attribute is set to <code>Tree</code>, you specify the shuttle to render as a tree. Configure the tree-like configuration via the <code>treeConfig</code> property (see the configuration of the <code>tree</code> component).</p>'
      },
      'codeFiles': ['nested-tree.vue']
    },
    {
      'demoId': 'transfer-events',
      'name': { 'zh-CN': '穿梭框事件', 'en-US': 'transfer Event' },
      'desc': {
        'zh-CN':
          '<p>主要有 <code>change</code>、<code>left-check-change</code>、<code>right-check-change</code> 三个事件。</p>\n<div class="tip custom-block"><p class="custom-block-title">事件说明</p>\n<p>change：右侧列表元素变化时触发\nleft-check-change：左侧列表元素被用户选中 / 取消选中时触发\nright-check-change：右侧列表元素被用户选中 / 取消选中时触发</p>\n</div>',
        'en-US':
          '<p>There are three main events: <code>change</code>, <code>left-check-change</code>, and <code>right-check-change</code>. </p>\n<div class="tip custom-block"><p class="custom-block-title"> Event description </p>\n<p>change: \nleft-check-change fires when the right side of the list changes: \nright-check-change: Fires when the left list element is selected/deselected by the user </p>\n</div>'
      },
      'codeFiles': ['transfer-events.vue']
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
          'defaultValue': '[]',
          'desc': { 'zh-CN': '左右列表的全量数据源', 'en-US': 'Full data source for the left and right lists' },
          'demoId': 'basic-usage'
        },
        {
          'name': 'modelValue / v-model',
          'type': 'Array',
          'defaultValue': '[]',
          'desc': {
            'zh-CN': '移动到右列表的数据项的key的数组值',
            'en-US': 'The array value of the key of the data item that moves to the right list'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'filterable',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '是否可搜索', 'en-US': 'Filterable or not' },
          'demoId': 'custom-filter'
        },
        {
          'name': 'filter-placeholder',
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': '搜索框占位符', 'en-US': 'Search box placeholder' },
          'demoId': 'custom-filter'
        },
        {
          'name': 'filter-method',
          'type': 'Function(arg1,arg2)',
          'defaultValue': '',
          'desc': {
            'zh-CN': `设置穿梭框的搜索过滤函数，仅在默认列表和嵌套表时有效; <br>
                嵌套树时，请使用treeConfig进行搜索配置;<br> 
                其类型声明为：(query:string ,  item:object) => boolean`,
            'en-US': `Set the search filter function for the transfer to work only for default lists and nested tables. <br>
              When nesting trees, use treeConfig for search configuration. <br>
              Its type is declared as: (query:string, item:object) => boolean`
          },
          'demoId': 'custom-filter'
        },
        {
          'name': 'titles',
          'type': 'Array',
          'defaultValue': '[]',
          'desc': {
            'zh-CN':
              '自定义列表标题;不设置titles时，左右列表的标题默认显示为： <code> 列表 1</code><code> 列表 2</code>',
            'en-US':
              'Custom list titles When titles are not set, the titles of the left and right lists are displayed by default: <code> list 1</code><code> list 2</code>'
          },
          'demoId': 'custom-titles'
        },
        {
          'name': 'button-texts',
          'type': 'Array',
          'defaultValue': '[]',
          'desc': { 'zh-CN': '自定义按钮文案', 'en-US': 'Custom Button Text' },
          'demoId': 'custom-btns'
        },
        {
          'name': 'render-content',
          'type': 'Function(arg1,arg2)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '自定义数据项渲染函数;其类型声明为：(h, item) => vnode',
            'en-US': 'Custom data item rendering function; Its type is declared as: (h, item) => vnode'
          },
          'demoId': 'custom-render'
        },
        {
          'name': 'format',
          'type': 'object',
          'defaultValue':
            "{ <br>&nbsp; noChecked:'${checked}/${total}', <br>&nbsp; hasChecked: '${checked}/${total}' <br>}",
          'desc': { 'zh-CN': '列表顶部勾选状态文案', 'en-US': 'Check the status copy at the top of the list' },
          'demoId': 'custom-titles'
        },
        {
          'name': 'props',
          'type': 'object',
          'defaultValue': '',
          'desc': {
            'zh-CN': '数据源的字段别名映射配置',
            'en-US': 'Field alias mapping configuration for the data source'
          },
          'demoId': 'custom-render'
        },
        {
          'name': 'left-default-checked',
          'type': 'Array',
          'defaultValue': '[]',
          'desc': {
            'zh-CN': '初始状态下左侧列表的已勾选项的 key 数组',
            'en-US': 'Initially, the key array of the checked items in the left list'
          },
          'demoId': 'default-checked'
        },
        {
          'name': 'right-default-checked',
          'type': 'Array',
          'defaultValue': '[]',
          'desc': {
            'zh-CN': '初始状态下右侧列表的已勾选项的 key 数组',
            'en-US': 'Initially, the key array of the checked items in the right list'
          },
          'demoId': 'default-checked'
        },
        {
          'name': 'target-order',
          'type': 'string',
          'defaultValue': 'original',
          'desc': {
            'zh-CN': ` 右侧列表元素的插入排序策略,该属性的可选值为 original / push / unshift;<br>
                &nbsp; 若为 original，则保持与数据源相同的顺序；<br>
                &nbsp; 若为 push，则新加入的元素排在最后；<br>
                &nbsp; 若为 unshift，则新加入的元素排在最前;`,
            'en-US': `The insertion sort strategy for the elements in the list on the right, with the optional values original/push/unshift; <br>
                &nbsp;  If original, it maintains the same order as the data source. <br>
                &nbsp;  If it is a push, the new element is listed last. <br>
                &nbsp;  If unshift is used, the new element is listed first.
              `
          },
          'demoId': 'target-order'
        },
        {
          'name': 'to-left-disable',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '组件初始化状态下未选中时，默认按钮显示禁用状态',
            'en-US': 'When a component is initialized unselected, the default button is disabled'
          },
          'demoId': 'custom-btns'
        },
        {
          'name': 'to-right-disable',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '组件初始化状态下未选中时，默认按钮显示禁用状态',
            'en-US': 'When a component is initialized unselected, the default button is disabled'
          },
          'demoId': 'custom-btns'
        },
        {
          'name': 'show-all-btn',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '是否展示全部移动按钮', 'en-US': 'Whether to show all move buttons' },
          'demoId': 'custom-btns'
        },
        {
          'name': 'drop-config',
          'type': 'object',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置穿梭框列表项可拖拽',
            'en-US': 'Make the transfer list item draggable'
          },
          'demoId': 'drop-config'
        },
        {
          'name': 'columns',
          'type': 'Array',
          'defaultValue': '',
          'desc': {
            'zh-CN': '在渲染类型为 table 时，设置穿梭框的表格列配置',
            'en-US': `When the render type is table, set the transfer's table column configuration`
          },
          'demoId': 'nested-table'
        },
        {
          'name': 'page-vo',
          'type': 'object',
          'defaultValue': '{currentPage:1,pageSize:10}',
          'desc': {
            'zh-CN': '在渲染类型为 table 时，设置分页配置，需要与 pager-op 一起使用',
            'en-US': 'Set the paging configuration when the render type is table, which needs to be used with pager-op'
          },
          'demoId': 'nested-table'
        },
        {
          'name': 'show-pager',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '在渲染类型为 table 时，设置是否显示分页',
            'en-US': 'Sets whether pagination should be displayed when the render type is table.'
          },
          'demoId': 'nested-table'
        },
        {
          'name': 'pager-op',
          'type': 'object',
          'defaultValue': "{mode: 'fixed',pageVO: {currentPage: 1,pageSize: 10}",
          'desc': {
            'zh-CN': '在渲染类型为 table 时，设置分页配置',
            'en-US': 'When the render type is table, set the paging configuration'
          },
          'demoId': 'nested-table'
        },
        {
          'name': 'render',
          'type': 'object',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '设置左右区域的渲染类型。该属性值的plugin设置为Table时设置渲染为表格;该属性值的pluginplugin设置为Tree渲染为树',
            'en-US':
              'Sets the rendering type for the left and right regions. This property renders to a Table when plugin is set to table; The value of the pluginplugin set to Tree renders as a tree'
          },
          'demoId': 'nested-table'
        },
        {
          'name': 'tree-op',
          'type': 'object',
          'defaultValue': '',
          'desc': {
            'zh-CN': '在渲染类型为 tree 时，设置树的相关配置属性',
            'en-US': 'Set the tree-related configuration attributes when the plug-in is set to tree.'
          },
          'demoId': 'nested-tree'
        }
      ],
      'events': [
        {
          'name': 'change',
          'type': '(value, move, keyArray)=>void',
          'defaultValue': '',
          'desc': {
            'zh-CN': `右侧列表元素变化时触发;<br>
                value:Array 穿梭框右侧数据值列表<br>
                move:string 数据移动方向，是left或者right<br>
                keyArray:Array 被移动的数据值列表`,
            'en-US': `Fires when the right side of the list changes <br>
                value: List of data values to the right of the Array <br>
                move:string direction to move the data, either left or right<br>
                keyArray:A list of data values whose Array has been moved
              `
          },
          'demoId': 'transfer-events'
        },
        {
          'name': 'left-check-change',
          'type': '(checked, statusChanged) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': `左侧列表元素被用户选中 / 取消选中时触发;<br>
              checked:Array 穿梭框左侧被选中的数据值列表<br>
              statusChanged:Array 穿梭框左侧选中状态发生变化的数据值列表`,
            'en-US': `Triggered when an element in the left list is selected/unselected by the user. <br>
              checked: List of selected values to the left of the Array <br>
              statusChanged: The list of data values whose status has changed is selected on the left side of the Array transfer`
          },
          'demoId': 'transfer-events'
        },
        {
          'name': 'right-check-change',
          'type': '(checked, statusChanged) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': `右侧列表元素被用户选中 / 取消选中时触发;<br>
              checked:Array 穿梭框右侧被选中的数据值列表<br>
              statusChanged:Array 穿梭框右侧选中状态发生变化的数据值列表`,
            'en-US': `Triggered when an element in the list on the right is selected/unselected by the user <br>
              checked: List of selected data values to the right of the Array shuttle box <br>
              statusChanged: The list of data values whose status has changed is selected to the right of the Array shuttle box`
          },
          'demoId': 'transfer-events'
        }
      ],
      'slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '自定义数据项的内容，插槽数据上下文为： { option }',
            'en-US': 'The content of the custom data item, slot data context is {option}.'
          },
          'demoId': 'custom-render'
        },
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
          'desc': { 'zh-CN': '右侧列表底部的内容', 'en-US': 'Content at the bottom of the right list' },
          'demoId': 'custom-footer'
        },
        {
          'name': 'button-panel',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '自定义穿梭按钮', 'en-US': 'Customized transfer button' },
          'demoId': ''
        },
        {
          'name': 'left-panel',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '左侧自定义内容', 'en-US': 'Customized content on the left' },
          'demoId': ''
        },
        {
          'name': 'right-panel',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '右侧自定义内容', 'en-US': 'Customized content on the right' },
          'demoId': ''
        }
      ],
      'methods': [
        {
          'name': 'clearQuery',
          'type': '(name) => void',
          'defaultValue': '',
          'desc': { 'zh-CN': '清空某个面板的搜索关键词', 'en-US': 'Clear the search keywords of a panel.' },
          'demoId': 'manual-clear-query'
        }
      ]
    }
  ]
}
