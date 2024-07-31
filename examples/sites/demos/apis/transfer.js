export default {
  mode: ['pc'],
  apis: [
    {
      name: 'transfer',
      type: 'component',
      props: [
        {
          name: 'button-texts',
          type: 'string[]',
          defaultValue: '[]',
          desc: {
            'zh-CN': '通过传入一个2值的字符串数组，自定义左右穿梭按钮的文案',
            'en-US':
              'Customize the copy of the left and right shuttle button by passing in an array of 2-valued strings'
          },
          mode: ['pc'],
          pcDemo: 'custom-btns'
        },
        {
          name: 'columns',
          linkTo: 'grid#IColumnConfig',
          type: 'IColumnConfig',
          defaultValue: '',
          desc: {
            'zh-CN': '在渲染类型为 table 时，设置穿梭框表格的列配置',
            'en-US': "When the render type is table, set the transfer's table column configuration"
          },
          mode: ['pc'],
          pcDemo: 'nested-table'
        },
        {
          name: 'data',
          type: 'ITransferData[]',
          defaultValue: '[]',
          desc: {
            'zh-CN': '左右列表的全量数据源',
            'en-US': 'Full data source for the left and right lists'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'drop-config',
          typeAnchorName: 'IDropConfig',
          type: 'IDropConfig',
          defaultValue: '',
          desc: {
            'zh-CN': '设置穿梭框列表项可拖拽的参数，参见sortablejs插件',
            'en-US': 'To set drag-and-drop parameters for shuttle list items, see sortablejs plugin'
          },
          mode: ['pc'],
          pcDemo: 'drop-config'
        },
        {
          name: 'filter-method',
          type: '(query:string, item:object) => boolean',
          defaultValue: '',
          desc: {
            'zh-CN':
              '\n              设置穿梭框的搜索过滤函数，仅在默认列表和嵌套表时有效<br>\n              嵌套树时，请使用treeConfig进行搜索配置<br>\n            ',
            'en-US':
              '\n              Set the search filter function for the transfer to work only for default lists and nested tables. <br>\n              When nesting trees, use treeConfig for search configuration. <br>\n            '
          },
          mode: ['pc'],
          pcDemo: 'custom-filter'
        },
        {
          name: 'filter-placeholder',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '启用搜索时，搜索框占位文本',
            'en-US': "When Search, filter box's placeholder"
          },
          mode: ['pc'],
          pcDemo: 'custom-filter'
        },
        {
          name: 'filterable',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否启用搜索的功能',
            'en-US': 'Whether to enable the search function'
          },
          mode: ['pc'],
          pcDemo: 'custom-filter'
        },
        {
          name: 'format',
          type: 'object',
          defaultValue:
            // eslint-disable-next-line no-template-curly-in-string
            "{ <br>&nbsp;&nbsp; noChecked:'${checked}/${total}', <br>&nbsp;&nbsp; hasChecked: '${checked}/${total}' <br>}",
          desc: {
            'zh-CN': '列表顶部勾选状态文案',
            'en-US': 'Check the status copy at the top of the list'
          },
          mode: ['pc'],
          pcDemo: 'custom-titles'
        },
        {
          name: 'left-columns',
          linkTo: 'grid#IColumnConfig',
          type: 'IColumnConfig',
          defaultValue: '',
          desc: {
            'zh-CN': '在渲染类型为 table 时，左边表格的列配置,优先级高于 columns',
            'en-US':
              "When the render type is table, set the transfer's left table column configuration,the priority is higher than that of columns"
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'left-default-checked',
          type: 'string[]',
          defaultValue: '[]',
          desc: {
            'zh-CN': '默认左侧列表的已勾选项的 key 数组',
            'en-US': 'The key array of the checked items in the left list'
          },
          mode: ['pc'],
          pcDemo: 'default-checked'
        },
        {
          name: 'pager-op',
          typeAnchorName: 'IPagerOp',
          type: 'IPagerOp',
          defaultValue: "{ mode: 'fixed',pageVO: {currentPage: 1,pageSize: 10}",
          desc: {
            'zh-CN': '在渲染类型为 table 时，设置表格的分页配置',
            'en-US': 'When the render type is table, set the paging configuration'
          },
          mode: ['pc'],
          pcDemo: 'nested-table'
        },
        {
          name: 'props',
          type: '{key:string, label:string, disabled:string}',
          defaultValue: '',
          desc: {
            'zh-CN': '数据源的字段别名映射配置',
            'en-US': 'Field alias mapping configuration for the data source'
          },
          mode: ['pc'],
          pcDemo: 'custom-render'
        },
        {
          name: 'render',
          type: 'Table | Tree',
          defaultValue: '',
          desc: {
            'zh-CN':
              '设置左右区域的渲染类型,Table 和 Tree 对象需要从组件包中引入相应的组件变量。<br>该属性值的plugin设置为Table时设置渲染为表格;该属性值的 plugin 设置为Tree渲染为树',
            'en-US':
              'Sets the rendering type for the left and right regions. <br>This property renders to a Table when plugin is set to table; The value of the pluginplugin set to Tree renders as a tree'
          },
          mode: ['pc'],
          pcDemo: 'nested-table'
        },
        {
          name: 'render-content',
          type: '(h: Vue.h, item: any) => vnode',
          defaultValue: '',
          desc: {
            'zh-CN': '数据项的自定义渲染函数',
            'en-US': 'Custom data item rendering function'
          },
          mode: ['pc'],
          pcDemo: 'custom-render'
        },
        {
          name: 'right-columns',
          linkTo: 'grid#IColumnConfig',
          type: 'IColumnConfig',
          defaultValue: '',
          desc: {
            'zh-CN': '在渲染类型为 table 时，右边表格的列配置,优先级高于 columns',
            'en-US':
              "When the render type is table, set the transfer's right table column configuration,the priority is higher than that of columns"
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'right-default-checked',
          type: 'string[]',
          defaultValue: '[]',
          desc: {
            'zh-CN': '默认右侧列表的已勾选项的 key 数组',
            'en-US': 'The key array of the checked items in the right list'
          },
          mode: ['pc'],
          pcDemo: 'default-checked'
        },
        {
          name: 'show-all-btn',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否显示全部移动按钮',
            'en-US': 'Whether to show all move buttons'
          },
          mode: ['pc'],
          pcDemo: 'custom-btns'
        },
        {
          name: 'show-pager',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '在渲染类型为 table 时，设置表格是否显示分页',
            'en-US': 'Sets whether pagination should be displayed when the render type is table.'
          },
          mode: ['pc'],
          pcDemo: 'nested-table'
        },
        {
          name: 'target-order',
          type: '"original" / "push" / "unshift"',
          defaultValue: '"original"',
          desc: {
            'zh-CN':
              ' 右侧列表元素的插入排序策略<br>\n                &nbsp; 若为 original，则保持与数据源相同的顺序 <br>\n                &nbsp; 若为 push，则新加入的元素排在最后 <br>\n                &nbsp; 若为 unshift，则新加入的元素排在最前。',
            'en-US':
              'The insertion sort strategy for the elements in the list on the right<br>\n                &nbsp;  If original, it maintains the same order as the data source<br>\n                &nbsp;  If it is a push, the new element is listed last<br>\n                &nbsp;  If unshift is used, the new element is listed first\n              '
          },
          mode: ['pc'],
          pcDemo: 'target-order'
        },
        {
          name: 'titles',
          type: 'string[]',
          defaultValue: '[]',
          desc: {
            'zh-CN':
              '自定义列表的标题；不设置titles时，左右列表的标题默认显示为： <code> 列表 1</code>，<code> 列表 2</code>',
            'en-US':
              'Custom list titles When titles are not set, the titles of the left and right lists are displayed by default: <code> list 1</code>,<code> list 2</code>'
          },
          mode: ['pc'],
          pcDemo: 'custom-titles'
        },
        {
          name: 'to-left-disable',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '组件初始化状态下未选中时，默认按钮显示禁用状态',
            'en-US': 'When a component is initialized unselected, the default button is disabled'
          },
          mode: ['pc'],
          pcDemo: 'custom-btns'
        },
        {
          name: 'to-right-disable',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '组件初始化状态下未选中时，默认按钮显示禁用状态',
            'en-US': 'When a component is initialized unselected, the default button is disabled'
          },
          mode: ['pc'],
          pcDemo: 'custom-btns'
        },
        {
          name: 'tree-op',
          linkTo: 'tree#API',
          type: 'Tree props',
          defaultValue: '',
          desc: {
            'zh-CN': '在渲染类型为 tree 时，设置树的相关配置属性',
            'en-US': 'Set the tree-related configuration attributes when the plug-in is set to tree.'
          },
          mode: ['pc'],
          pcDemo: 'nested-tree'
        },
        {
          name: 'v-model / modelValue',
          type: 'string[]',
          defaultValue: '[]',
          desc: {
            'zh-CN': '移动到右列表的数据项的key的数组值',
            'en-US': 'The array value of the key of the data item that moves to the right list'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        }
      ],
      events: [
        {
          name: 'change',
          type: '(value:string[], move:string, keyArray:string[])=>void',
          defaultValue: '',
          desc: {
            'zh-CN':
              '右侧列表元素变化时触发的事件;<br>\n                value: 穿梭框右侧数据值列表<br>\n                move: 数据移动方向，是left或者right<br>\n                keyArray: 被移动的数据值列表',
            'en-US':
              'Fires when the right side of the list changes <br>\n                value: List of data values to the right of the Array <br>\n                move: direction to move the data, either left or right<br>\n                keyArray:A list of data values whose Array has been moved\n              '
          },
          mode: ['pc'],
          pcDemo: 'transfer-events'
        },
        {
          name: 'left-check-change',
          type: '(checked:string[], statusChanged:string[]) => void',
          defaultValue: '',
          desc: {
            'zh-CN':
              '左侧列表元素选择时触发的事件;<br>\n              checked: 穿梭框左侧被选中的数据值列表<br>\n              statusChanged: 穿梭框左侧选中状态发生变化的数据值列表',
            'en-US':
              'Triggered when an element in the left list is selected/unselected by the user. <br>\n              checked: List of selected values to the left of the Array <br>\n              statusChanged: The list of data values whose status has changed is selected on the left side of the Array transfer'
          },
          mode: ['pc'],
          pcDemo: 'transfer-events'
        },
        {
          name: 'right-check-change',
          type: '(checked:string[], statusChanged:string[]) => void',
          defaultValue: '',
          desc: {
            'zh-CN':
              '右侧列表元素选择时触发的事件;<br>\n              checked: 穿梭框右侧被选中的数据值列表<br>\n              statusChanged: 穿梭框右侧选中状态发生变化的数据值列表',
            'en-US':
              'Triggered when an element in the list on the right is selected/unselected by the user <br>\n              checked: List of selected data values to the right of the Array shuttle box <br>\n              statusChanged: The list of data values whose status has changed is selected to the right of the Array shuttle box'
          },
          mode: ['pc'],
          pcDemo: 'transfer-events'
        }
      ],
      methods: [
        {
          name: 'clearQuery',
          type: '(name: string) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '开启过滤功能时，清空左右面板的搜索关键词',
            'en-US': 'When the filtering function is enabled, clear the search keywords on the left and right panels'
          },
          mode: ['pc'],
          pcDemo: 'custom-filter'
        }
      ],
      slots: [
        {
          name: 'button-panel',
          defaultValue: '',
          desc: {
            'zh-CN': '穿梭按钮插槽',
            'en-US': 'Customized transfer button'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'default',
          defaultValue: '',
          desc: {
            'zh-CN': '数据项的内容插槽，插槽数据上下文为： { option }',
            'en-US': 'The content of the custom data item, slot data context is {option}.'
          },
          mode: ['pc'],
          pcDemo: 'custom-render'
        },
        {
          name: 'left-footer',
          defaultValue: '',
          desc: {
            'zh-CN': '左侧列表底部的内容插槽',
            'en-US': 'Content at the bottom of the left list'
          },
          mode: ['pc'],
          pcDemo: 'custom-footer'
        },
        {
          name: 'left-panel',
          defaultValue: '',
          desc: {
            'zh-CN': '左侧自定义内容插槽',
            'en-US': 'Customized content on the left'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'right-footer',
          defaultValue: '',
          desc: {
            'zh-CN': '右侧列表底部的内容插槽',
            'en-US': 'Content at the bottom of the right list'
          },
          mode: ['pc'],
          pcDemo: 'custom-footer'
        },
        {
          name: 'right-panel',
          defaultValue: '',
          desc: {
            'zh-CN': '右侧自定义内容插槽',
            'en-US': 'Customized content on the right'
          },
          mode: ['pc'],
          pcDemo: ''
        }
      ]
    }
  ],
  types: [
    {
      name: 'ITransferData',
      type: 'interface',
      code: `
interface ITransferData {
  key: string,
  label: string,
  disabled: string,
  [other:string]: any
}
      `
    },
    {
      name: 'IDropConfig',
      type: 'interface',
      code: `
interface IDropConfig {
  plugin: object // 指定拖放排序的插件Sortable, 该变量通过 import Sortable from 'sortablejs' 导入
}
      `
    },
    {
      name: 'IPagerOp',
      type: 'interface',
      code: `
interface IPagerOp {
  mode: string  // 通过 mode 设置分页组件组件渲染模式，不同模式是组件内置的 layout 设置， mode 优先级高于 layout
  pagerCount:number  // 总页数
  pageVo:{
    currentPage: number
    pageSize: number
    pageSizes: number[]
    layout: string   // 分页组件布局默认值：'total, prev, pager, next, jumper, sizes'
  }
}
      `
    }
  ]
}
