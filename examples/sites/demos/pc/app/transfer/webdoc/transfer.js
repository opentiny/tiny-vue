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
        'zh-CN':
          '\n            通过 <code>data</code> 属性提供左右列表全量的数据源，其是一个数组，每个数据项中默认字段有 <code>key</code>、<code>label</code>、<code>disabled</code>。<br>\n            通过 <code>value</code> 属性指定右列表值的数组，其选择项只展示在右侧列表。\n          ',
        'en-US':
          '\n            The <code>data</code> property provides the full data source for the left and right lists, which is an array of objects with the default fields key, label, and disabled for each item. <br>\n            The <code>value</code> property specifies an array of values for the right list whose selections are displayed only in the right list.\n          '
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'custom-titles',
      name: {
        'zh-CN': '自定义列表标题区',
        'en-US': 'Customized List Title'
      },
      desc: {
        'zh-CN':
          '\n          通过 <code>titles</code> 属性，可对左右列表的标题进行自定义。<br>\n          通过 <code>format</code> 属性，可定制左右侧列表顶部的数据统计的显示格式，请参考下面示例。\n        ',
        'en-US':
          '\n            The titles of the left and right lists can be customized using the <code>titles</code> property. <br>\n            The <code>format</code> attribute allows you to customize the format of the statistics at the top of the left and right lists, as shown in the following example:\n          '
      },
      codeFiles: ['custom-titles.vue']
    },
    {
      demoId: 'custom-btns',
      name: {
        'zh-CN': '自定义按钮区',
        'en-US': 'Display All Move Buttons'
      },
      desc: {
        'zh-CN':
          '\n          按钮区包含默认转移按钮和全部转移按钮。按钮的高亮与禁用，组件内部会自动识别处理。<br>\n          通过 <code>show-all-btn</code> 属性设置展示全部转移按钮，属性默认值为<code>false</code>。<br>\n          通过 <code>button-texts</code> 属性自定义左右穿梭的默认转移按钮文本，接受包含2个字符串的数组值。全部转移按钮不能自定义文本。<br>\n          你可以通过<code>to-left-disable</code> 和 <code>to-right-disable</code> 属性来指定默认转移按钮没有选中项时的状态。\n        ',
        'en-US':
          '\n          The button area contains two types of buttons: default buttons and all buttons. Buttons are highlighted and disabled automatically by the component itself. <br>\n          show all the move buttons with the <code>show-all-btn</code> property, which defaults to <code>false</code>. <br>\n          The default button texts of the left and right shuttles are defined by the <code>button-texts</code> attribute, which accepts an array value containing 2 strings. No custom text for all buttons. <br>\n          The <code>to-left-disable</code> and <code>to-right-disable</code> properties allow you to specify the state of the default button when no items are selected.\n         '
      },
      codeFiles: ['custom-btns.vue']
    },
    {
      demoId: 'custom-footer',
      name: {
        'zh-CN': '自定义列表底部',
        'en-US': 'Custom List Bottom'
      },
      desc: {
        'zh-CN': '通过 <code>left-footer</code> 、 <code>right-footer</code> 插槽可分别对左右列表底部进行自定义。\n',
        'en-US':
          'The bottom of the list can be customized using the <code>left-footer</code> and <code>right-footer</code> slots, respectively. '
      },
      codeFiles: ['custom-footer.vue']
    },
    {
      demoId: 'custom-render',
      name: {
        'zh-CN': '自定义数据项显示',
        'en-US': 'Customized Data Item Rendering'
      },
      desc: {
        'zh-CN':
          '\n          通过 <code> props </code> 属性,可以指定<code> key / label /disabled </code>的映射列，以支持用户传入非标准格式的数据到<code>data</code>属性。<br>\n          通过 <code> default </code> 插槽,自定义数据项渲染的 dom 结构，推荐使用插槽的方式。<br>\n          通过 <code> render-content </code> 属性函数,使用 JSX 功能，去自定义数据项渲染的 dom 结构。<br>\n          <div class="tip custom-block"><p class="custom-block-title">如果数据格式不是标准属性格式，则一定要通过<code>props</code>做属性映射！</div>\n        ',
        'en-US':
          '\n        Using the <code> props </code> property, you can simply specify that the <code> key/label /disabled </code> maps to the specified column of the data item. <br>\n        The <code> default </code> slot allows you to fully customize the dom structure rendered by the data items.It is recommended that you use slots. <br>\n        It is also possible to fully customize the dom structure rendered by a data item via the <code> render-content </code> property. <br>\n        <div class="tip custom-block"><p class="custom-block-title">If the data is not in a standard attribute format, be sure to use <code>props</code> for property mapping!</div>\n      '
      },
      codeFiles: ['custom-render.vue']
    },
    {
      demoId: 'custom-filter',
      name: {
        'zh-CN': '过滤搜索',
        'en-US': 'Custom Search Method'
      },
      desc: {
        'zh-CN':
          '\n          组件支持显示一个输入框，去过滤显示在左右列表的数据项。<br>\n          通过 <code>filterable</code> 属性开启左右侧列表的搜索功能，默认是根据 label 内容过滤。<br>\n          通过 <code>filter-placeholder</code> 属性自定义左右搜索框占位符。<br>\n          通过 <code>filter-method</code> 钩子函数，可自定义左右列表搜索的方法。<br>\n          调用 <code>clearQuery()</code> 方法，可清空左右侧列表的搜索框，参数为 left 或者 right 。<br>\n        ',
        'en-US':
          '\n          At the top of the left and right lists, you can display an input field to filter the data items that display the left and right lists. <br>\n          Use the <code>filterable</code> attribute to enable the search function of the left and right lists, which by default filter based on the label content. <br>\n          Use the <code>filter-placeholder</code> attribute to define the placeholder for the left and right search boxes. <br>\n          The <code>filter-method</code> hook allows you to customize the way you search the left and right lists.<br>\n          The <code>clearQuery()</code> method clears the search box in the left and right lists with either the left or right arguments.<br>\n        '
      },
      codeFiles: ['custom-filter.vue']
    },
    {
      demoId: 'default-checked',
      name: {
        'zh-CN': '默认勾选项',
        'en-US': 'Default options'
      },
      desc: {
        'zh-CN':
          '\n          通过 <code>left-default-checked</code>、<code>right-default-checked</code> 属性分别指定左右侧列表默认的勾选数据。禁用数据项默认无法勾选。<br>\n          通过组件实例上的<code>state</code>属性，可以查询组件当前左右列表的数据项和数据选中项等信息。\n        ',
        'en-US':
          '\n            The <code>left-default-checked</code> and <code>right-default-checked</code> attributes specify the default check data for the left and right lists, respectively. Disabling the data item cannot be checked by default. <br>\n            Using the <code>state</code> property on the component instance, you can query the current left and right list of the component for data items and data selected items.\n          '
      },
      codeFiles: ['default-checked.vue']
    },
    {
      demoId: 'drop-config',
      name: {
        'zh-CN': '可拖拽',
        'en-US': 'Drag left and right'
      },
      desc: {
        'zh-CN':
          '<div class="tip custom-block"><p class="custom-block-title">使用拖拽功能时请先安装 sortablejs 插件</div>通过 <code>drop-config</code> 属性配置 sortablejs 插件进行左右拖拽穿梭。\n',
        'en-US':
          '<div class="tip custom-block"><p class="custom-block-title"> Please install sortablejs plugin before using drag and drop function </div> Pass The <code>drop-config</code> property config the sortablejs plugin to do the left-right drag shuttle.'
      },
      codeFiles: ['drop-config.vue']
    },
    {
      demoId: 'target-order',
      name: {
        'zh-CN': '右侧排序策略',
        'en-US': 'Right Sorting Policy'
      },
      desc: {
        'zh-CN':
          '通过 <code>target-order</code> 属性设置右侧列表元素的排序策略，有 original 、push 、unshift 三个选项，默认为 original 。\n            <div class="tip custom-block">\n              <p class="custom-block-title">排序策略</p>\n              <div>\n                若为 original，则保持与数据源相同的顺序；<br>若为 push，则新加入的元素排在最后；<br>若为 unshift，则新加入的元素排在最前\n              </div>\n            </div>',
        'en-US':
          'The <code>target-order</code> property sets the sorting strategy of the elements in the list on the right.There are three options: original, push, and unshift.The default is original. \n<div class="tip custom-block"><p class="custom-block-title"> Sorting strategy \n If original, keep same order as data source \n if push, Then the new element is last.  nIf unshift, the new element is first. \n</div>'
      },
      codeFiles: ['target-order.vue']
    },
    {
      demoId: 'before-transfer',
      name: {
        'zh-CN': '穿梭拦截',
        'en-US': 'Clear the search box manually'
      },
      desc: {
        'zh-CN':
          '\n          调用 <code>before-transfer</code> 属性，接受一个函数来拦截穿梭的动作。 <br>\n          该函数参数为一个回调函数，执行回调函数，数据项才允许穿梭。\n        ',
        'en-US':
          '\n            Call the <code>before-transfer</code> property, which accepts a function to intercept the shuttle action. <br>\n            This function takes a callback function and executes the callback function before the data item is allowed to shuttle.\n          '
      },
      codeFiles: ['before-transfer.vue']
    },
    {
      demoId: 'nested-table',
      name: {
        'zh-CN': '嵌套表格',
        'en-US': 'Nested Table'
      },
      desc: {
        'zh-CN':
          '当 <code>render</code> 属性里的 <code>plugin</code> 设置为 <code>Table</code> 时指定穿梭框渲染成表格，\n            以下属性 <code> columns </code>  <code> pager-op </code> <code> show-pager </code> 是会传递给内部的表格组件。<br>\n            属性 <code> left-columns </code> <code> right-columns </code> 可以分别指定左右列表的表头，优先级高于 <code> columns </code>  属性。\n          ',
        'en-US':
          'When <code>plugin</code> in the <code>render</code> attribute is set to <code>Table</code>, the shuttle box is rendered as a table,\n            The following property <code> columns </code> <code> pager-op </code> <code> show-pager </code> is a table component that will be passed inside.<br>\n            The <code> left-columns </code> <code> right-columns </code> attribute can specify the table headers of the left and right lists. The priority of the <code> left-columns </code> <code> right-columns </code> attribute is higher than that of the <code>columns</code> attribute.\n          '
      },
      codeFiles: ['nested-table.vue']
    },
    {
      demoId: 'nested-tree',
      name: {
        'zh-CN': '嵌套树',
        'en-US': 'Nested Tree'
      },
      desc: {
        'zh-CN':
          '当 <code>render</code> 属性里的 <code>plugin</code> 设置为 <code>Tree</code> 时指定穿梭框渲染成树，通过 <code>treeConfig</code> 属性配置树相关的配置（具体配置可参考 <code>tree</code> 组件的配置）。',
        'en-US':
          'When the <code>plugin</code> in the <code>render</code> attribute is set to <code>Tree</code>, you specify the shuttle to render as a tree. Configure the tree-like configuration via the <code>treeConfig</code> property (see the configuration of the <code>tree</code> component).'
      },
      codeFiles: ['nested-tree.vue']
    },
    {
      demoId: 'transfer-events',
      name: {
        'zh-CN': '穿梭框事件',
        'en-US': 'transfer Event'
      },
      desc: {
        'zh-CN':
          '主要有 <code>change</code>、<code>left-check-change</code>、<code>right-check-change</code> 三个事件。\n            <div class="tip custom-block">\n              <p class="custom-block-title">事件说明</p>\n                change：右侧列表元素变化时触发; <br> left-check-change：左侧列表元素被用户选中 / 取消选中时触发; <br>right-check-change：右侧列表元素被用户选中 / 取消选中时触发;\n              </div>',
        'en-US':
          'There are three main events: <code>change</code>, <code>left-check-change</code>, and <code>right-check-change</code>. \n<div class="tip custom-block"><p class="custom-block-title"> Event description \nchange: \nleft-check-change fires when the right side of the list changes: \nright-check-change: Fires when the left list element is selected/deselected by the user \n</div>'
      },
      codeFiles: ['transfer-events.vue']
    }
  ]
}
