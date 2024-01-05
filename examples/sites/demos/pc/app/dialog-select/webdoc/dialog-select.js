export default {
  column: '2',
  owner: '詹旖旎 30021340',
  demos: [
    {
      'demoId': 'nest-grid-multi',
      'name': {
        'zh-CN': '表格多选',
        'en-US': 'Table Multiple Selection'
      },
      'desc': {
        'zh-CN':
          '<p>通过 <code>auto-lookup</code>、<code>lookup-method</code> 属性 和 <code>change</code> 事件设置初始化时数据的反查回显功能。</p> \n' +
          '<p>表格多选场景需要设置 <code>popselector</code> 为 <code>grid</code>，<code>multi</code> 为 <code>true</code>，<code>checkRowKeys</code> 设置默认选中数据。</p >\n',
        'en-US':
          '<p>Use the <code>auto-lookup</code>,<code>lookup-method</code> attributes, and <code>change</code> event settings to perform data backtracking during initialization. <code>autoLookup</code>The default value is <code>true</code>. </p>\n' +
          '<p> Multiple selection scenarios in the table require setting<code>popcollector</code>as grid,<code>multi</code>as true, and<code>checkRowKeys</code>as default selected data. </p >\n'
      },
      'codeFiles': ['nest-grid-multi.vue']
    },
    {
      'demoId': 'nest-grid-single',
      'name': {
        'zh-CN': '表格单选',
        'en-US': 'Table single selection'
      },
      'desc': {
        'zh-CN':
          '<p>通过 <code>auto-lookup</code>、<code>lookup-method</code> 属性和 <code>change</code> 事件设置初始化时数据的反查回显功能。</p>\n' +
          '<p>表格单选场景需要设置 <code>popselector</code> 为 <code>grid</code>，<code>multi</code> 为 <code>false</code>，<code>checkRowKey</code> 设置默认选中数据。</p >\n',
        'en-US':
          '<p> Use the <code>auto-lookup</code>,<code>lookup-method</code> properties, and <code>change</code> event settings to enable data backtracking and echo during initialization.</p>\n' +
          '<p>Table radio selection scenarios require setting <code>popcollector</code> to <code>grid</code>,<code>multi</code> to <code> false</code>, and <code>checkRowKey</code> to set default selected data.</p>\n'
      },
      'codeFiles': ['nest-grid-single.vue']
    },
    {
      'demoId': 'nest-tree-multi',
      'name': {
        'zh-CN': '树多选',
        'en-US': 'Multiple Tree Selection'
      },
      'desc': {
        'zh-CN':
          '<p>通过 <code>auto-lookup</code>、<code>lookup-method</code> 属性和 <code>change</code> 事件设置初始化时数据的反查回显功能。</p>\n ' +
          '<p>树多选场景需要设置 <code>popselector</code> 为 <code>tree</code>，属性 <code>multi</code> 为 <code>true</code>，<code>defaultCheckedKeys</code> 设置默认选中数据。</p>\n',
        'en-US':
          '<p>Set the anti lookup and echo function of data during initialization through <code>auto-lookup</code>,<code>lookup-method</code>, and <code>change</code> event settings.</p>\n' +
          '<p>Tree selection scenarios require setting <code>popcollector</code> to <code>tree</code>, attribute <code>multi</code> to <code>true</code>, and <code>defaultCheckedKeys</code> to set default selected data.</p>'
      },
      'codeFiles': ['nest-tree-multi.vue']
    },
    {
      'demoId': 'nest-tree-single',
      'name': {
        'zh-CN': '树单选',
        'en-US': 'Tree radio selection'
      },
      'desc': {
        'zh-CN':
          '<p>通过 <code>auto-lookup</code>、<code>lookup-method</code> 属性和 <code>change</code> 事件设置初始化时数据的反查回显功能。</p>\n' +
          '<p>树单选场景需要设置 <code>popselector</code> 为 <code>tree</code>，<code>multi</code> 为 <code>false</code >，<code>defaultCheckedKeys</code> 设置默认选中数据。</p>\n',
        'en-US':
          '<p>Use the <code>auto-lookup</code>,<code>lookup-method</code> attributes, and <code>change</code> events to set the anti lookup echo function for data initialization.</p>\n' +
          '<p>Tree selection scenarios require setting <code>popcollector</code> to <code>tree</code>,<code>multi</code> to <code>false</code>, and<code>defaultCheckedKeys</code>to set default selected data.</p>\n'
      },
      'codeFiles': ['nest-tree-single.vue']
    }
  ],
  apis: [
    {
      'name': 'dialog-select',
      'type': 'component',
      'props': [
        {
          'name': 'auto-lookup ',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '是否在初始化时根据选中数据的 id 加载选中数据，为 true 时可省略设置',
            'en-US':
              'If this parameter is set to true, the header and bottom of the dialog box are automatically centered.'
          },
          'demoId': ''
        },
        {
          'name': 'before-close',
          'type': '() => boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN': '弹窗关闭前的回调，返回 false 会阻止弹窗关闭',
            'en-US': 'Close the pop-up window. The form data is reset by default.'
          },
          'demoId': 'nest-grid-multi'
        },
        {
          'name': 'dialog-op',
          'type': 'IDialogOption',
          'typeAnchorName': 'IDialogOption',
          'defaultValue': '{}',
          'desc': {
            'zh-CN': '用于配置 DialogBox 对话框组件的属性，对话框事件和插槽已透传',
            'en-US': 'Whether to display the close button'
          },
          'demoId': 'nest-grid-multi'
        },
        {
          'name': 'grid-op',
          'type': 'IGridOption',
          'typeAnchorName': 'IGridOption',
          'defaultValue': '{}',
          'desc': {
            'zh-CN': '表格场景时，配置 Grid 组件的属性',
            'en-US': 'Indicates whether to enable the drag function for pop-up windows. The default value is false.'
          },
          'demoId': 'nest-grid-multi'
        },
        {
          'name': 'lookup-method',
          'type': '() => Promise',
          'defaultValue': '',
          'desc': {
            'zh-CN': '初始化选中数据的加载方法',
            'en-US':
              'Indicates whether pop-up windows can be closed by clicking the mask layer. The default value is true. You can set modal-closable="false" on the tag. The pop-up windows cannot be closed by clicking the mask layer.'
          },
          'demoId': 'nest-grid-mult'
        },
        {
          'name': 'main-height',
          'type': 'number',
          'defaultValue': '290',
          'desc': {
            'zh-CN': '配置表格或树区域的高度',
            'en-US': 'Specifies whether the mask layer can be disabled by pressing ESC.'
          },
          'demoId': 'nest-grid-mult'
        },
        {
          'name': 'multi',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否多选',
            'en-US':
              'Indicates whether the mask layer is applied to the body. If the value is false, the mask layer is applied to the parent element of DialogBox.'
          },
          'demoId': 'nest-grid-multi'
        },
        {
          'name': 'pager-op',
          'type': 'IPagerOption',
          'typeAnchorName': 'IPagerOption',
          'defaultValue': `<pre>{
  currentPage: 1,
  pageSize: 10,
  pageSizes: [10, 20, 30, 40, 50, 100],
  total: 0,
  layout: 'total, prev, pager, next, jumper'
}</pre>`,
          'desc': {
            'zh-CN': '使用表格展示数据时，属性 pagerOp 用于配置 Pager 分页组件的属性，分页事件已透传',
            'en-US':
              'Indicates whether the DialogBox itself is inserted into the body. This attribute must be specified and set to true for nested Dialogs.'
          },
          'demoId': 'nest-grid-multi'
        },
        {
          'name': 'popseletor',
          'type': 'string',
          'defaultValue': "'grid'",
          'desc': {
            'zh-CN': "弹窗内展示数据的组件类型，目前支持：'grid' / 'tree'",
            'en-US': 'Indicates whether to enable the pop-up slide-out function. The default value is false.'
          },
          'demoId': 'nest-grid-multi'
        },
        {
          'name': 'remote-search',
          'type': '() => Promise',
          'defaultValue': '',
          'desc': {
            'zh-CN': '使用表格展示数据时，配置表格分页查询操作函数；使用树展示数据时，配置通过pid查询所有子数据的方法',
            'en-US': 'Whether to disable the scroll bar when a log is displayed.'
          },
          'demoId': 'nest-grid-mult'
        },
        {
          'name': 'selected-box-op',
          'type': 'ISelectedBoxOption',
          'typeAnchorName': 'ISelectedBoxOption',
          'defaultValue': '{}',
          'desc': {
            'zh-CN': '使用表格展示数据时，属性 selectedBoxOp 用于配置 SelectedBox 已选栏组件的属性，已选栏插槽已透传',
            'en-US': 'Indicates whether to display the pop-up header. The default value is true.'
          },
          'demoId': 'nest-grid-mult'
        },
        {
          'name': 'show-pager',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '使用表格展示数据时，是否显示分页组件',
            'en-US': 'Pop-up dialog box title.'
          },
          'demoId': ''
        },
        {
          'name': 'show-selected-box',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '使用表格展示数据时，是否显示已选栏组件',
            'en-US':
              'Height between the pop-up box and the top of the window. The default value is 15% of the screen height.'
          },
          'demoId': ''
        },
        {
          'name': 'text-field',
          'type': 'string',
          'defaultValue': "'label'",
          'desc': {
            'zh-CN': '数据项的显示值字段',
            'en-US': 'Wideness of the dialog box that is displayed.'
          },
          'demoId': 'nest-grid-multi'
        },
        {
          'name': 'text-split',
          'type': 'string',
          'defaultValue': "'/'",
          'desc': {
            'zh-CN': '多选时用于拼接数据项的 label 字段 ',
            'en-US': 'Customized configuration pop-up window class name'
          },
          'demoId': ''
        },
        {
          'name': 'tree-op',
          'type': 'ITreeOption',
          'typeAnchorName': 'ITreeOption',
          'defaultValue': '{}',
          'desc': {
            'zh-CN': '使用树展示数据时，树组件的配置对象',
            'en-US': 'When using a tree to display data, the configuration object of the tree component'
          },
          'demoId': 'nest-tree-multi'
        },
        {
          'name': 'value-field',
          'type': 'string',
          'defaultValue': "'id'",
          'desc': {
            'zh-CN': '数据项的选中值字段',
            'en-US': 'Selected value fields for data items'
          },
          'demoId': 'nest-grid-multi'
        },
        {
          'name': 'value-split',
          'type': 'string',
          'defaultValue': "';'",
          'desc': {
            'zh-CN': '多选时用于拼接数据项的选中值',
            'en-US': 'The selected value used for concatenating data items during multiple selection'
          },
          'demoId': ''
        },
        {
          'name': 'visible',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '控制弹出框显示与关闭',
            'en-US': 'Control pop-up display and closing'
          },
          'demoId': 'nest-grid-multi'
        }
      ],
      'methods': [
        {
          'name': 'queryGridData',
          'type': '() => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '使用表格展示数据时，加载表格数据的方法',
            'en-US': 'The method of loading table data when using tables to display data'
          },
          'demoId': 'nest-grid-multi'
        }
      ],
      'events': [
        {
          'name': 'before-page-change',
          'type': '(beforeChangeParam:IBeforeChangeParam) => void',
          'typeAnchorName': 'IBeforeChangeParam',
          'defaultValue': '',
          'desc': {
            'zh-CN': '透传子组件 Pager 的 before-page-change 事件',
            'en-US': 'Before page change event of the transparent sub component Pager'
          },
          'demoId': ''
        },
        {
          'name': 'close',
          'type': '() => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '透传子组件 DialogBox 的 close 事件',
            'en-US': 'Close event for transparent sub component DialogBox'
          },
          'demoId': ''
        },
        {
          'name': 'closed',
          'type': '() => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '透传子组件 DialogBox 的 closed 事件',
            'en-US': 'The closed event of the transparent sub component DialogBox'
          },
          'demoId': ''
        },
        {
          'name': 'change',
          'type': '(changeParam:IChangeParam) => void',
          'typeAnchorName': 'IChangeParam',
          'defaultValue': '',
          'desc': {
            'zh-CN': '监听弹窗选择的值发生变化的事件',
            'en-US': 'Event where the value selected in the monitoring pop-up changes'
          },
          'demoId': 'nest-grid-multi'
        },
        {
          'name': 'current-change',
          'type': '(currentPage: number) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '透传子组件 Pager 的 current-change 事件',
            'en-US': 'The current change event of the transparent sub component Pager'
          },
          'demoId': 'nest-grid-multi'
        },
        {
          'name': 'drag-end',
          'type': '() => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '透传子组件 DialogBox 的 drag-end 事件',
            'en-US': 'The drag end event of the transparent sub component DialogBox'
          },
          'demoId': ''
        },
        {
          'name': 'drag-move',
          'type': '() => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '透传子组件 DialogBox 的 drag-move 事件',
            'en-US': 'The drag move event of the transparent sub component DialogBox'
          },
          'demoId': ''
        },
        {
          'name': 'drag-start',
          'type': '() => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '透传子组件 DialogBox 的 drag-start 事件',
            'en-US': 'The drag start event of the transparent sub component DialogBox'
          },
          'demoId': ''
        },
        {
          'name': 'next-click',
          'type': '(currentPage: number) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '透传子组件 Pager 的 next-click 事件',
            'en-US': 'Next click event for transparent sub component Pager'
          },
          'demoId': ''
        },
        {
          'name': 'open',
          'type': '() => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '透传子组件 DialogBox 的 open 事件',
            'en-US': 'Open event for transparent sub component DialogBox'
          },
          'demoId': ''
        },
        {
          'name': 'opened',
          'type': '() => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '透传子组件 DialogBox 的 opened 事件',
            'en-US': 'The opened event of the transparent sub component DialogBox'
          },
          'demoId': ''
        },
        {
          'name': 'prev-click',
          'type': '(currentPage: number) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '透传子组件 Pager 的 prev-click 事件',
            'en-US': ''
          },
          'demoId': 'The pre click event of the transparent sub component Pager'
        },
        {
          'name': 'size-change',
          'type': '(pageSize: number) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '透传子组件 Pager 的 size-change 事件',
            'en-US': 'The size change event of the transparent sub component Pager'
          },
          'demoId': 'nest-grid-multi'
        }
      ],
      'slots': [
        {
          'name': 'button',
          'type': 'Slot',
          'defaultValue': '',
          'desc': {
            'zh-CN': '使用表格展示数据时，自定义已选栏的自定义按钮区域',
            'en-US': 'When displaying data in a table, customize the custom button area of the selected column'
          },
          'demoId': ''
        },
        {
          'name': 'clear',
          'type': 'Slot',
          'defaultValue': '',
          'desc': {
            'zh-CN': '使用表格展示数据时，自定义已选栏的清空按钮区域',
            'en-US': 'When displaying data in a table, customize the clear button area of the selected column'
          },
          'demoId': ''
        },
        {
          'name': 'close',
          'type': 'Slot',
          'defaultValue': '',
          'desc': {
            'zh-CN': '使用表格展示数据时，自定义已选栏的选项的删除按钮',
            'en-US': 'Customize the delete button for the selected column options when displaying data in a table'
          },
          'demoId': 'nest-tree-multi'
        },
        {
          'name': 'footer',
          'type': 'Slot',
          'defaultValue': '',
          'desc': {
            'zh-CN': '自定义弹窗底部',
            'en-US': 'Custom Pop Up Bottom'
          },
          'demoId': ''
        },
        {
          'name': 'option',
          'type': 'Slot',
          'defaultValue': '',
          'desc': {
            'zh-CN': '使用表格展示数据时，自定义已选栏的选项',
            'en-US': 'Customize options for selected columns when displaying data in a table'
          },
          'demoId': 'nest-tree-multi'
        },
        {
          'name': 'search',
          'type': 'Slot',
          'defaultValue': '',
          'desc': {
            'zh-CN': '使用表格展示数据时，自定义搜索区域',
            'en-US': 'Customize the search area when displaying data in a table'
          },
          'demoId': 'nest-grid-multi'
        },
        {
          'name': 'select',
          'type': 'Slot',
          'defaultValue': '',
          'desc': {
            'zh-CN': '使用表格展示数据时，自定义已选栏的已选提示区域',
            'en-US': 'When displaying data in a table, customize the selected prompt area for the selected column'
          },
          'demoId': ''
        },
        {
          'name': 'title',
          'type': 'Slot',
          'defaultValue': '',
          'desc': {
            'zh-CN': '自定义弹窗标题',
            'en-US': 'Custom pop-up title'
          },
          'demoId': ''
        }
      ]
    }
  ],
  types: [
    {
      name: 'IDialogOption',
      type: 'interface',
      code: `
interface IDialogOption {
  // 设置弹出框距离窗口顶部的高度，默认为 15vh
  top: string,
  // 弹出框的宽度,默认 500px
  width: string
  // 弹出框标题
  title: string
  beforeClose: () => boolean
  // 自定义配置弹窗类名
  dialogClass: string
}
`
    },
    {
      name: 'IGridOption',
      type: 'interface',
      code: `
interface IGridOption {
  // 表格列配置
  columns: IColumnConfig[]  
  // 表格列数据
  data: [] 
  // 表格多选配置
  selectConfig: { 
    // 翻页操作是否保留历史选择数据
    reserve: boolean  
    // 嵌套表格多选时，设置默认表格选中的数据
    checkRowKeys: Array<string|number> 
  }
  // 表格单选配置
  radioConfig: { 
    //嵌套表格单选时，设置默认表格选中的数据 
    checkRowKey: string|number  
  }
}
`
    },
    {
      name: 'IColumnConfig ',
      type: 'interface',
      code: `
interface IColumnConfig  {
  type: 'index' | 'radio' | 'checkbox'
  id: string
  title: string
  label: string
  width: string | number
}
`
    },
    {
      name: 'IPagerOption',
      type: 'interface',
      code: `
interface IPagerOption {
  // 当前页，默认 1
  currentPage: number 
  // 每页显示条目个数，默认 10
  pageSize: number   
  // 每页显示个数选择器的选项设置，默认 [10, 20, 30, 40, 50, 100]
  pageSizes: Array<number> 
  // 总条目数
  total:number
  // 分页布局，默认 'total, prev, pager, next, jumper'
  layout: string 
}
`
    },
    {
      name: 'ISelectedBoxOption',
      type: 'interface',
      code: `
interface ISelectedBoxOption {
  config: {
    pkField: string
    pkFieldType: string,
    showField: Array<string>,
    // 传 sortablejs 插件
    plugin: () => void   
  }
}
`
    },
    {
      name: 'ITreeOption',
      type: 'interface',
      code: `
interface ITreeOption {
  // 树节点的唯一标识
  nodeKey: string 
  pathSplit: string
  props: { 
    // 默认为 children
    children:string  
    // 默认为 label
    label: string   
    // 默认为 isLeaf'
    isLeaf: string 
  },
  // 是否为父子严格模式
  checkStrictly: boolean 
  // 相邻级节点间的水平缩进，单位为像素
  baseIndent: number 
  // 加载子树数据的方法
  load: (node, resolve)=> void 
  // 使用树展示数据时，用于配置搜索过滤接口
  queryPidsBySearch: () => ITreeNodeData 
  // 使用树展示数据时，用于配置初始化过滤接口 
  queryPidsByIds: () => ITreeNodeData 
  // 默认勾选的节点的keys
  defaultCheckedKeys: Array<string|number> 
}
`
    },
    {
      name: 'ITreeNodeData',
      type: 'interface',
      code: `
interface ITreeNodeData {
  // node-key='id' 设置节点的唯一标识
  "id": number|string 
  // 节点显示文本  
  "label": string 
  // 子节点
  "children"?: ITreeNodeData[]  
}        
`
    },
    {
      name: 'IChangeParam',
      type: 'interface',
      code: `
// 树组件的节点数据信息
interface ItreeData = {
  id: number|string
  label: string
  pid: number|string
}

// 用户自定义的表格行数据
interface IGridData = {
  id: number|string
 [otherKeys] :any
}

interface IChangeParam = {
 values: Array<number|string>|number|string
 texts: string|Array<string>
 selectedDatas: ItreeData[]|IGridData[]
}
`
    },
    {
      name: 'IBeforeChangeParam',
      type: 'interface',
      code: `interface IBeforeChangeParam {
callback: () => void   // 回调函数，调用则继续本次变更
rollback: () => void   // 回滚函数，调用则阻止本次变更
newPage: number // 变更后所在页
newPageSize: number // 变更后分页大小
currentPage: number // 当前所在页
currentPageSize: number // 当前分页大小
}`
    }
  ]
}
