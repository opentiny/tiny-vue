export default {
  column: '2',
  owner: '詹旖旎 30021340',
  demos: [
    {
      'demoId': 'grid-multi',
      'name': {
        'zh-CN': '表格多选',
        'en-US': 'Multiple selections in the table'
      },
      'desc': {
        'zh-CN':
          '<p>属性<code>autoLookup</code>、<code>lookupMethod</code> 和事件 <code>change</code> 用于初始化时数据反查回显，<code>autoLookup</code> 默认值为 <code>true</code></p>\n<p> 表格多选场景需要设置属性 <code> popselector</code> 为 <code> grid</code>，属性 <code> multi</code>为 <code> true</code>，默认数据由属性 <code> gridOp.selectConfig.checkRowKeys</code>设置。</p >\n',
        'en-US':
          '<p>attributes <code>autoLookup</code>, <code>lookupMethod</code>, and the event <code>change</code> are used to query the data during initialization. <code>autoLookup</code>The default value is <code>true</code>. </p>\n<p> In the multi - select table scenario, you need to set <code> popselector</code>to <code> grid</code>and <code> multi</code>to <code> true</code>.The default data is set by the<code>gridOp.selectConfig.checkRowKeys</code> attribute. </p >\n'
      },
      'codeFiles': ['grid-multi.vue']
    },
    {
      'demoId': 'grid-radio',
      'name': { 'zh-CN': '表格单选', 'en-US': 'Single-choice Table' },
      'desc': {
        'zh-CN':
          '<p>属性 <code>autoLookup</code>、<code>lookupMethod</code> 和事件 <code>change</code> 用于初始化时数据反查回显，<code>autoLookup</code> 默认值为 <code>true</code> </p>\n<p> 表格单选场景需要设置属性 <code> popselector</code> 为 <code> grid</code>，属性 <code> multi</code> 为 <code> false</code>，默认数据由属性 <code> gridOp.radioConfig.checkRowKey</code> 设置 </p >\n',
        'en-US':
          '<p>attributes <code>autoLookup</code>, <code>lookupMethod</code>, and event <code>change</code> are used to query the output of data during initialization. The default value of <code>autoLookup</code> is <code>true</code> </p>\n<p> In the single - choice scenario, you need to set <code> popselector</code> to <code> grid</code> and <code> multi</code> to <code> false</code>.The default data is set by the property<code> gridOp.radioConfig.checkRowKey</code></p >\n'
      },
      'codeFiles': ['grid-radio.vue']
    },
    {
      'demoId': 'tree-multi',
      'name': { 'zh-CN': '树多选', 'en-US': 'Tree Multiple Choices' },
      'desc': {
        'zh-CN':
          '<p>属性 <code>autoLookup</code>、<code>lookupMethod</code> 和事件 <code>change</code> 用于初始化时数据反查回显，<code>autoLookup</code> 默认值为 <code>true</code></p>\n <p> 树多选场景需要设置属性 <code> popselector</code> 为 <code> tree</code>，属性 <code> multi</code> 为 <code> true</code>，默认数据由属性 <code> treeOp.defaultCheckedKeys</code> 设置</p >\n',
        'en-US':
          '<p>attributes <code>autoLookup</code>, <code>lookupMethod</code>, and event <code>change</code> are used to query the output of data during initialization. The default value of <code>autoLookup</code> is <code>true</code></p>\n<p> tree multi - selection scenario, set <code> popselector</code> to <code> tree</code> and <code> multi</code> to <code> true</code>.The default data is set by the property <code> treeOp.defaultCheckedKeys</code></p >\n'
      },
      'codeFiles': ['tree-multi.vue']
    },
    {
      'demoId': 'tree-radio',
      'name': { 'zh-CN': '树单选', 'en-US': 'Tree Single Choice' },
      'desc': {
        'zh-CN':
          '<p>属性 <code>autoLookup</code>、<code>lookupMethod</code> 和事件 <code>change</code> 用于初始化时数据反查回显，<code>autoLookup</code> 默认值为 <code>true</code></p>\n<p> 树单选场景需要设置属性 <code> popselector</code> 为 <code> tree</code>，属性 <code> multi</code > 为 <code> false</code >，默认数据由属性 < code > treeOp.defaultCheckedKeys</code> 设置</p >\n',
        'en-US':
          '<p>attributes <code>autoLookup</code>, <code>lookupMethod</code>, and event <code>change</code> are used to query the output of data during initialization. The default value of <code>autoLookup</code> is <code>true</code></p>\n<p> tree selection scenario, you need to set <code> popselector</code> to <code> tree</code> and <code> multi</code> to <code> false</code>.Default data is set by property <code> treeOp.defaultCheckedKeys</code></p >\n'
      },
      'codeFiles': ['tree-radio.vue']
    }
  ],
  apis: [
    {
      'name': 'dialog-select',
      'type': 'component',
      'properties': [
        {
          'name': 'auto-lookup ',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': {
            'zh-CN': '是否通过初始化选中数据的id加载初始化选中数据，默认true',
            'en-US':
              'If this parameter is set to true, the header and bottom of the dialog box are automatically centered.'
          },
          'demoId': 'grid-multi'
        },
        {
          'name': 'before-close',
          'type': 'Function',
          'defaultValue': 'function(){}',
          'desc': {
            'zh-CN': '用于配置弹窗关闭前的回调，返回 false 会阻止弹窗关闭',
            'en-US': 'Close the pop-up window. The form data is reset by default.'
          },
          'demoId': ''
        },
        {
          'name': 'dialog-op',
          'type': 'object',
          'defaultValue': '{}',
          'desc': {
            'zh-CN': '属性 dialogOp 用于配置 DialogBox 对话框组件的属性，对话框事件和插槽已透传',
            'en-US': 'Whether to display the close button'
          },
          'demoId': ''
        },
        {
          'name': 'grid-op',
          'type': 'object',
          'defaultValue': '{}',
          'desc': {
            'zh-CN': '子组件 Grid 的配置对象',
            'en-US': 'Indicates whether to enable the drag function for pop-up windows. The default value is false.'
          },
          'demoId': 'grid-multi'
        },
        {
          'name': 'gridOp.radioConfig.checkRowKey',
          'type': 'string|number',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '表格单选场景需要设置属性 popselector 为 grid，属性 multi 为 false，默认数据由属性 gridOp.radioConfig.checkRowKey 设置。',
            'en-US': 'Whether the dialog box is displayed in full screen mode'
          },
          'demoId': 'grid-radio'
        },
        {
          'name': 'gridOp.selectConfig.checkRowKeys ',
          'type': 'Array<string|number>',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN':
              '表格多选场景需要设置属性 popselector 为 grid，属性 multi 为 true，默认数据由属性 gridOp.selectConfig.checkRowKeys 设置',
            'en-US': ''
          },
          'demoId': 'grid-multi'
        },
        {
          'name': 'lookup-method',
          'type': 'Function',
          'defaultValue': 'function(){}',
          'desc': {
            'zh-CN': '初始化选中数据的加载方法',
            'en-US':
              'Indicates whether pop-up windows can be closed by clicking the mask layer. The default value is true. You can set modal-closable="false" on the tag. The pop-up windows cannot be closed by clicking the mask layer.'
          },
          'demoId': ''
        },
        {
          'name': 'main-height',
          'type': 'number',
          'defaultValue': '',
          'desc': {
            'zh-CN': '配置表格或树区域的高度',
            'en-US': 'Specifies whether the mask layer can be disabled by pressing ESC.'
          },
          'demoId': ''
        },
        {
          'name': 'multi',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '是否多选',
            'en-US':
              'Indicates whether the mask layer is applied to the body. If the value is false, the mask layer is applied to the parent element of DialogBox.'
          },
          'demoId': 'grid-multi'
        },
        {
          'name': 'pager-op',
          'type': 'object',
          'defaultValue': '该属性的默认值为 {}',
          'desc': {
            'zh-CN': '使用表格展示数据时，属性 pagerOp 用于配置 Pager 分页组件的属性，分页事件已透传',
            'en-US':
              'Indicates whether the DialogBox itself is inserted into the body. This attribute must be specified and set to true for nested Dialogs.'
          },
          'demoId': 'grid-multi'
        },
        {
          'name': 'popseletor',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '弹窗内展示数据的组件类型，目前支持：grid/tree',
            'en-US': 'Indicates whether to enable the pop-up slide-out function. The default value is false.'
          },
          'demoId': 'grid-multi'
        },
        {
          'name': 'remote-search',
          'type': 'Function',
          'defaultValue': 'function(){}',
          'desc': {
            'zh-CN': '使用表格展示数据时，配置表格分页查询操作函数；使用树展示数据时，配置通过pid查询所有子数据的方法',
            'en-US': 'Whether to disable the scroll bar when a log is displayed.'
          },
          'demoId': ''
        },
        {
          'name': 'selected-box-op',
          'type': 'object',
          'defaultValue': '该属性的默认值为 {}',
          'desc': {
            'zh-CN': '使用表格展示数据时，属性 selectedBoxOp 用于配置 SelectedBox 已选栏组件的属性，已选栏插槽已透传',
            'en-US': 'Indicates whether to display the pop-up header. The default value is true.'
          },
          'demoId': ''
        },
        {
          'name': 'show-pager',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': {
            'zh-CN': '使用表格展示数据时，是否显示分页组件，默认true',
            'en-US': 'Pop-up dialog box title.'
          },
          'demoId': ''
        },
        {
          'name': 'show-selected-box',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': {
            'zh-CN': '使用表格展示数据时，是否显示已选栏组件，默认true',
            'en-US':
              'Height between the pop-up box and the top of the window. The default value is 15% of the screen height.'
          },
          'demoId': ''
        },
        {
          'name': 'text-field',
          'type': 'string',
          'defaultValue': '该属性的默认值为 label',
          'desc': {
            'zh-CN': '数据项的 Label 字段，默认是label',
            'en-US': 'Wideness of the dialog box that is displayed.'
          },
          'demoId': 'grid-multi'
        },
        {
          'name': 'text-split',
          'type': 'string',
          'defaultValue': '/',
          'desc': {
            'zh-CN': '多选时用于拼接数据项的 Label 字段，默认是 / ',
            'en-US': 'Customized configuration pop-up window class name'
          },
          'demoId': 'grid-multi'
        },
        {
          'name': 'tree-op',
          'type': 'object',
          'defaultValue': '{}',
          'desc': {
            'zh-CN': '使用树展示数据时，树组件的配置对象',
            'en-US': ''
          },
          'demoId': 'tree-multi'
        },
        {
          'name': 'treeOp.defaultCheckedKeys',
          'type': 'Array',
          'defaultValue': '[]',
          'desc': {
            'zh-CN':
              '树单选场景需要设置属性 popselector 为 tree，属性 multi 为 false，默认数据由属性 treeOp.defaultCheckedKeys 设置',
            'en-US': ''
          },
          'demoId': 'tree-multi'
        },
        {
          'name': 'treeOp.load',
          'type': 'Function',
          'defaultValue': 'function(){}',
          'desc': {
            'zh-CN': '使用树展示数据时，属性 treeOp.load 用于配置子级数据查询接口',
            'en-US': ''
          },
          'demoId': 'tree-multi'
        },
        {
          'name': 'treeOp.queryPidsByIds',
          'type': 'Function',
          'defaultValue': 'function(){}',
          'desc': {
            'zh-CN': '使用树展示数据时，用于配置初始化过滤接口',
            'en-US': ''
          },
          'demoId': 'tree-multi'
        },
        {
          'name': 'treeOp.queryPidsBySearch',
          'type': 'Function',
          'defaultValue': 'function(){}',
          'desc': {
            'zh-CN': '使用树展示数据时，用于配置搜索过滤接口',
            'en-US': ''
          },
          'demoId': 'tree-multi'
        },
        {
          'name': 'value-field',
          'type': 'string',
          'defaultValue': '默认是 id',
          'desc': {
            'zh-CN': '数据项的 Value 字段，默认是id',
            'en-US': ''
          },
          'demoId': 'grid-multi'
        },
        {
          'name': 'value-split',
          'type': 'string',
          'defaultValue': '默认是;',
          'desc': {
            'zh-CN': '多选时用于拼接数据项的 Value 字段，默认是 ; ',
            'en-US': ''
          },
          'demoId': 'grid-multi'
        },
        {
          'name': 'visible',
          'type': 'boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN': '控制弹出框显示与关闭',
            'en-US': ''
          },
          'demoId': 'grid-multi'
        }
      ],
      'methods': [
        {
          'name': 'queryGridData()',
          'type': 'Function',
          'defaultValue': 'function(){}',
          'desc': {
            'zh-CN': '使用表格展示数据时，加载表格数据的方法',
            'en-US': ''
          },
          'demoId': 'grid-multi'
        }
      ],
      'events': [
        {
          'name': 'before-page-change',
          'type': 'Function',
          'defaultValue': 'function(){}',
          'desc': {
            'zh-CN': '透传子组件 Pager 的 before-page-change 事件',
            'en-US': ''
          },
          'demoId': 'grid-multi'
        },
        {
          'name': 'close',
          'type': 'Function',
          'defaultValue': 'function(){}',
          'desc': {
            'zh-CN': '透传子组件 DialogBox 的 close 事件',
            'en-US': ''
          },
          'demoId': 'grid-multi'
        },
        {
          'name': 'closed',
          'type': 'Function',
          'defaultValue': 'function(){}',
          'desc': {
            'zh-CN': '透传子组件 DialogBox 的 closed 事件',
            'en-US': ''
          },
          'demoId': 'grid-multi'
        },
        {
          'name': 'current-change',
          'type': 'Function',
          'defaultValue': 'function(){}',
          'desc': {
            'zh-CN': '透传子组件 Pager 的 current-change 事件',
            'en-US': ''
          },
          'demoId': 'grid-multi'
        },
        {
          'name': 'drag-end',
          'type': 'Function',
          'defaultValue': 'function(){}',
          'desc': {
            'zh-CN': '透传子组件 DialogBox 的 drag-end 事件',
            'en-US': ''
          },
          'demoId': 'grid-multi'
        },
        {
          'name': 'drag-move',
          'type': 'Function',
          'defaultValue': 'function(){}',
          'desc': {
            'zh-CN': '透传子组件 DialogBox 的 drag-move 事件',
            'en-US': ''
          },
          'demoId': 'grid-multi'
        },
        {
          'name': 'drag-start',
          'type': 'Function',
          'defaultValue': 'function(){}',
          'desc': {
            'zh-CN': '透传子组件 DialogBox 的 drag-start 事件',
            'en-US': ''
          },
          'demoId': 'grid-multi'
        },
        {
          'name': 'next-click',
          'type': 'Function',
          'defaultValue': 'function(){}',
          'desc': {
            'zh-CN': '透传子组件 Pager 的 next-click 事件',
            'en-US': ''
          },
          'demoId': 'grid-multi'
        },
        {
          'name': 'open',
          'type': 'Function',
          'defaultValue': 'function(){}',
          'desc': {
            'zh-CN': '透传子组件 DialogBox 的 open 事件',
            'en-US': ''
          },
          'demoId': 'grid-multi'
        },
        {
          'name': 'opened',
          'type': 'Function',
          'defaultValue': 'function(){}',
          'desc': {
            'zh-CN': '透传子组件 DialogBox 的 opened 事件',
            'en-US': ''
          },
          'demoId': 'grid-multi'
        },
        {
          'name': 'prev-click',
          'type': 'Function',
          'defaultValue': 'function(){}',
          'desc': {
            'zh-CN': '透传子组件 Pager 的 prev-click 事件',
            'en-US': ''
          },
          'demoId': 'grid-multi'
        },
        {
          'name': 'size-change',
          'type': 'Function',
          'defaultValue': 'function(){}',
          'desc': {
            'zh-CN': '透传子组件 Pager 的 size-change 事件',
            'en-US': ''
          },
          'demoId': 'grid-multi'
        }
      ],
      'slots': [
        {
          'name': 'button',
          'type': 'Slot',
          'defaultValue': '',
          'desc': {
            'zh-CN': '使用表格展示数据时，自定义已选栏的自定义按钮区域',
            'en-US': ''
          },
          'demoId': 'grid-multi'
        },
        {
          'name': 'clear',
          'type': 'Slot',
          'defaultValue': '',
          'desc': {
            'zh-CN': '使用表格展示数据时，自定义已选栏的清空按钮区域',
            'en-US': ''
          },
          'demoId': 'grid-multi'
        },
        {
          'name': 'close',
          'type': 'Slot',
          'defaultValue': '',
          'desc': {
            'zh-CN': '使用表格展示数据时，自定义已选栏的选项的删除按钮',
            'en-US': ''
          },
          'demoId': 'tree-multi'
        },
        {
          'name': 'footer',
          'type': 'Slot',
          'defaultValue': '',
          'desc': {
            'zh-CN': '自定义弹窗底部',
            'en-US': ''
          },
          'demoId': 'grid-multi'
        },
        {
          'name': 'option',
          'type': 'Slot',
          'defaultValue': '',
          'desc': {
            'zh-CN': '使用表格展示数据时，自定义已选栏的选项',
            'en-US': ''
          },
          'demoId': 'tree-multi'
        },
        {
          'name': 'search',
          'type': 'Slot',
          'defaultValue': '',
          'desc': {
            'zh-CN': '使用表格展示数据时，自定义搜索区域',
            'en-US': ''
          },
          'demoId': 'grid-multi'
        },
        {
          'name': 'select',
          'type': 'Slot',
          'defaultValue': '',
          'desc': {
            'zh-CN': '使用表格展示数据时，自定义已选栏的已选提示区域',
            'en-US': ''
          },
          'demoId': 'grid-multi'
        },
        {
          'name': 'title',
          'type': 'Slot',
          'defaultValue': '',
          'desc': {
            'zh-CN': '自定义弹窗标题',
            'en-US': ''
          },
          'demoId': 'grid-multi'
        }
      ]
    }
  ]
}
