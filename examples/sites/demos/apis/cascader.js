export default {
  mode: ['pc', 'mobile-first'],
  apis: [
    {
      name: 'cascader',
      type: 'component',
      props: [
        {
          mode: []
        },
        {
          name: 'before-filter',
          type: '(value: string) => boolean | Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '筛选之前的钩子，参数为输入的值，若返回 false 或者返回 Promise 且被 reject，则停止筛选',
            'en-US':
              'Hook before filtering. The parameter is the input value. If false is returned or Promise is returned and rejected, the filtering stops.'
          },
          mode: ['pc'],
          pcDemo: 'filter-method'
        },
        {
          name: 'blank',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': "shape='filter' 时生效，设置过滤器模式背景为透明",
            'en-US': "Takes effect when shape='filter' and sets the filter mode background to transparent"
          },
          mode: ['pc'],
          pcDemo: 'filter-mode'
        },
        {
          name: 'clearable',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否支持清空选项',
            'en-US': 'Whether to support the clear option'
          },
          mode: ['pc'],
          pcDemo: 'clearable'
        },
        {
          name: 'collapse-tags',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '多选模式下是否折叠 Tag',
            'en-US': 'Whether to collapse tags in multi-choice mode'
          },
          mode: ['pc'],
          pcDemo: 'collapse-tags'
        },
        {
          name: 'debounce',
          type: 'number',
          defaultValue: '300',
          desc: {
            'zh-CN': '搜索关键词输入的去抖延迟，单位毫秒',
            'en-US': 'Debounce delay of the search keyword, in milliseconds.'
          },
          mode: ['pc'],
          pcDemo: 'filterable'
        },
        {
          name: 'disabled',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否禁用',
            'en-US': 'Disable'
          },
          mode: ['pc'],
          pcDemo: 'disabled-items'
        },
        {
          name: 'filter-method',
          typeAnchorName: 'ICascaderPanelNode',
          type: '(node: ICascaderPanelNode, keyword: string) => boolean',
          defaultValue: '',
          desc: {
            'zh-CN':
              '自定义搜索逻辑，第一个参数是节点 node，第二个参数是搜索关键词 keyword，通过返回布尔值表示是否命中',
            'en-US':
              'Customize the search logic. The first parameter is node, and the second parameter is keyword. A boolean value is returned to indicate whether the search is hit.'
          },
          mode: ['pc'],
          pcDemo: 'filter-method'
        },
        {
          name: 'filterable',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '是否可搜索选项',
            'en-US': 'Whether to search for options'
          },
          mode: ['pc'],
          pcDemo: 'filterable'
        },
        {
          name: 'label',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': "shape='filter' 时生效，可传入 label 显示标题",
            'en-US': "Take effect when shape='filter', and label can be passed to display the title"
          },
          mode: ['pc'],
          pcDemo: 'filter-mode'
        },
        {
          name: 'level-title',
          type: 'string[]',
          defaultValue: '[]',
          desc: {
            'zh-CN': '小屏时，为组件每一级数据指定级联标题',
            'en-US': 'On a small screen, specify a cascade title for each level of data of the component'
          },
          mode: ['mobile-first']
        },
        {
          name: 'modelValue / v-model',
          typeAnchorName: 'ICascaderPanelNodeValue',
          type: 'ICascaderPanelNodePropValue',
          defaultValue: '',
          desc: {
            'zh-CN': '选中项绑定值, 其类型由 props.multiple、props.emitPath 共同决定',
            'en-US':
              'Binding value of the selected item, its type is determined by props.multiple, props.emitPath together.'
          },
          mode: ['pc'],
          pcDemo: 'clearable'
        },
        {
          name: 'options',
          typeAnchorName: 'ICascaderPanelData',
          type: 'ICascaderPanelData[]',
          defaultValue: '',
          desc: {
            'zh-CN': '可选项数据源，键名可通过 Props 属性配置',
            'en-US': 'Optional data source. The key name can be configured through the Props attribute.'
          },
          mode: ['pc'],
          pcDemo: 'disabled-items'
        },
        {
          name: 'placeholder',
          type: 'string',
          defaultValue: "'请选择'",
          desc: {
            'zh-CN': '输入框占位文本',
            'en-US': 'Placeholder text in the text box'
          },
          mode: ['pc'],
          pcDemo: 'filterable'
        },
        {
          name: 'popper-append-to-body',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN':
              '是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false (可参考 select 组件)',
            'en-US':
              'Indicates whether to insert a pop-up box to the body element. If an error occurs in locating a fault in the dialog box that is displayed, set this attribute to false (for details, see the select component).'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'popper-class',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '为 popper 添加类名(可参考 popover 组件)',
            'en-US': 'Add a class name for the popper. For details, see the popover component.'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'props',
          typeAnchorName: 'ICascaderPanelConfig',
          type: 'ICascaderPanelConfig',
          defaultValue: '',
          desc: {
            'zh-CN': '配置选项，具体见 ICascaderPanelConfig 表',
            'en-US': 'Configuration options. For details, see the ICascaderPanelConfig table.'
          },
          mode: ['pc'],
          pcDemo: 'props-children'
        },
        {
          name: 'separator',
          type: 'string',
          defaultValue: "'/'",
          desc: {
            'zh-CN': '选项分隔符',
            'en-US': 'Option separator'
          },
          mode: ['pc'],
          pcDemo: 'clearable1'
        },
        {
          name: 'shape',
          type: "'filter'",
          defaultValue: '',
          desc: {
            'zh-CN': "通过 shape='filter' 属性切换至过滤器模式",
            'en-US': "Use the shape='filter' attribute to switch to filter mode"
          },
          mode: ['pc'],
          pcDemo: 'filter-mode'
        },
        {
          name: 'show-all-levels',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '输入框中是否显示选中值的完整路径',
            'en-US': 'Whether to display the full path of the selected value in the text box'
          },
          mode: ['pc'],
          pcDemo: 'show-all-levels'
        },
        {
          name: 'show-header',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '小屏时，是否显示标题',
            'en-US': 'Whether to display the title on a small screen'
          },
          mode: ['mobile-first']
        },
        {
          name: 'size',
          type: "'medium' | 'small' | 'mini'",
          defaultValue: '',
          desc: {
            'zh-CN': '尺寸',
            'en-US': 'Dimension;'
          },
          mode: ['pc'],
          pcDemo: 'size'
        },
        {
          name: 'tip',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': "shape='filter' 时生效，可传入 tip 显示提示信息",
            'en-US': "This parameter is valid when shape='filter'. You can enter tip to display prompt information"
          },
          mode: ['pc'],
          pcDemo: 'filter-mode'
        },
        {
          name: 'title',
          type: 'string',
          defaultValue: "''",
          desc: {
            'zh-CN': '小屏时，弹窗顶部的标题名字',
            'en-US': 'On a small screen, pop up the title name at the top of the window'
          },
          mode: ['mobile-first']
        }
      ],
      events: [
        {
          name: 'blur',
          type: '(event: FocusEvent) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '当失去焦点时触发',
            'en-US': 'This event is triggered when the focus is lost.'
          },
          mode: ['pc'],
          pcDemo: 'events'
        },
        {
          name: 'change',
          typeAnchorName: 'ICascaderPanelNodePropValue',
          type: '(value: ICascaderPanelNodePropValue) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '当选中节点变化时触发',
            'en-US': 'This event is triggered when the selected node changes.'
          },
          mode: ['pc'],
          pcDemo: 'events'
        },
        {
          name: 'expand-change',
          typeAnchorName: 'ICascaderPanelNodeValue',
          type: '(value: ICascaderPanelNodeValue[]) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '当展开节点发生变化时触发',
            'en-US':
              'This event is triggered when the expanded node changes. arg: The callback parameter is an array (Array type) consisting of parent option values.'
          },
          mode: ['pc'],
          pcDemo: 'events'
        },
        {
          name: 'focus',
          type: '(event: FocusEvent) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '当获得焦点时触发',
            'en-US': 'This event is triggered when the focus is obtained.'
          },
          mode: ['pc'],
          pcDemo: 'events'
        },
        {
          name: 'remove-tag',
          typeAnchorName: 'ICascaderPanelNodeValue',
          type: '(removeValue: ICascaderPanelNodeValue[]) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '在多选模式下，移除Tag时触发',
            'en-US': 'In multi-choice mode, this event is triggered when a tag is removed.'
          },
          mode: ['pc'],
          pcDemo: 'default-multiple'
        },
        {
          name: 'visible-change',
          type: '(visible: boolean) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '下拉框出现/隐藏时触发',
            'en-US': 'This event is triggered when the drop-down list box is displayed or hidden.'
          },
          mode: ['pc'],
          pcDemo: 'events'
        }
      ],
      methods: [
        {
          name: 'getCheckedNodes',
          typeAnchorName: 'ICascaderPanelNode',
          type: '(leafOnly: boolean = false) => ICascaderPanelNode[]',
          defaultValue: '',
          desc: {
            'zh-CN': '获取选中的节点',
            'en-US': 'Obtain the selected node'
          },
          mode: ['pc'],
          pcDemo: 'events'
        }
      ],
      slots: [
        {
          name: 'default',
          defaultValue: '',
          desc: {
            'zh-CN':
              '自定义备选项的节点内容，参数为 { node: ICascaderPanelNode, data: ICascaderPanelData }，分别为当前节点的 Node 对象和数据',
            'en-US':
              'User-defined candidate node content. The parameter is {node, data}, which indicates the node object and data of the current node.'
          },
          mode: ['pc']
        },
        {
          name: 'empty',
          defaultValue: '',
          desc: {
            'zh-CN': '无匹配选项时的内容',
            'en-US': 'Content when no matching option is found'
          },
          mode: ['pc'],
          pcDemo: 'filterable'
        },
        {
          name: 'no-data',
          defaultValue: '',
          desc: {
            'zh-CN': '通过 <code>no-data</code> 插槽设置没有数据时显示的内容',
            'en-US': 'Set what is displayed when there is no data via the <code>no-data</code> slot'
          },
          mode: ['pc'],
          pcDemo: 'slot-nodata'
        }
      ]
    },
    {
      name: 'ICascaderPanelConfig ',
      type: 'component',
      props: [
        {
          name: 'checkStrictly',
          type: 'boolean',
          defaultValue: ' false',
          desc: {
            'zh-CN': '是否严格的遵守父子节点不互相关联',
            'en-US':
              'Whether to strictly comply with the principle that parent and child nodes are not associated with each other'
          },
          mode: ['pc'],
          pcDemo: 'check-strictly'
        },
        {
          name: 'children',
          type: 'string',
          defaultValue: "'children'",
          desc: {
            'zh-CN': '指定选项的子选项为选项对象的某个属性值',
            'en-US': 'Specifies that the sub-option of an option is an attribute value of the option object.'
          },
          mode: ['pc'],
          pcDemo: 'props-children'
        },
        {
          name: 'disabled',
          type: 'string',
          defaultValue: "'disabled'",
          desc: {
            'zh-CN': '指定选项的禁用为选项对象的某个属性值',
            'en-US': 'Specify that an option is disabled as an attribute value of the option object.'
          },
          mode: ['pc'],
          pcDemo: 'disabled-items'
        },
        {
          name: 'emitPath',
          type: 'boolean',
          defaultValue: ' true',
          desc: {
            'zh-CN':
              '在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置 false，则只返回该节点的值',
            'en-US':
              'Indicates whether to return an array consisting of the values of menus at different levels of the selected node when the selected node is changed. If this parameter is set to false, only the value of the selected node is returned.'
          },
          mode: ['pc'],
          pcDemo: 'events'
        },
        {
          name: 'expandTrigger',
          type: "'click' | 'hover'",
          defaultValue: "'click'",
          desc: {
            'zh-CN': '次级菜单的展开方式',
            'en-US': 'The expansion mode of the secondary menu'
          },
          mode: ['pc'],
          pcDemo: 'expand-trigger'
        },
        {
          name: 'label',
          type: 'string',
          defaultValue: "'label'",
          desc: {
            'zh-CN': '指定选项标签为选项对象的某个属性值',
            'en-US': 'Specify that the option label is an attribute value of the option object.'
          },
          mode: ['pc'],
          pcDemo: 'props-children'
        },
        {
          name: 'lazy',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否动态加载子节点，需与 lazyLoad 方法结合使用',
            'en-US':
              'Whether to dynamically load subnodes. This parameter must be used together with the lazyLoad method.'
          },
          mode: ['pc'],
          pcDemo: 'auto-load'
        },
        {
          name: 'lazyLoad',
          typeAnchorName: 'ICascaderPanelLazyLoad',
          type: 'ICascaderPanelLazyLoad',
          defaultValue: '',
          desc: {
            'zh-CN':
              '加载动态数据的方法，仅在 lazy 为 true 时有效;参数说明： node 为当前点击的节点，resolve 为数据加载完成的回调(必须调用)',
            'en-US':
              'Method for loading dynamic data. This parameter is valid only when lazy is set to true. Parameter description: node indicates the currently clicked node. resolve indicates the callback after data loading is complete (mandatory).'
          },
          mode: ['pc'],
          pcDemo: 'auto-load'
        },
        {
          name: 'leaf',
          type: 'string',
          defaultValue: "'leaf'",
          desc: {
            'zh-CN': '指定选项的叶子节点的标志位为选项对象的某个属性值',
            'en-US': 'The flag bit of the leaf node of the specified option is an attribute value of the option object.'
          },
          mode: ['pc'],
          pcDemo: 'props-children'
        },
        {
          name: 'multiple',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否多选',
            'en-US': 'Whether to select multiple options'
          },
          mode: ['pc'],
          pcDemo: 'default-multiple'
        },
        {
          name: 'value',
          type: 'string',
          defaultValue: "'value'",
          desc: {
            'zh-CN': '指定选项的值为选项对象的某个属性值',
            'en-US': 'The value of an option is the value of an attribute of the option object.'
          },
          mode: ['pc'],
          pcDemo: 'props-children'
        }
      ],
      events: [],
      methods: [],
      slots: []
    }
  ],
  types: [
    {
      name: 'ICascaderPanelNodeValue',
      type: 'type',
      code: `type ICascaderPanelNodeValue = string | number`
    },
    {
      name: 'ICascaderPanelNodePropValue',
      type: 'type',
      code: `
type ICascaderPanelNodePropValue =
  | ICascaderPanelNodeValue
  | ICascaderPanelNodeValue[]
  | ICascaderPanelNodeValue[][]`
    },
    {
      name: 'ICascaderPanelData',
      type: 'type',
      code: `
type ICascaderPanelData = {
  value?: ICascaderPanelNodeValue
  label?: string
  children?: ICascaderPanelData[]
  disabled?: boolean
  leaf?: boolean
  [key: string]: ICascaderPanelNodeValue | ICascaderPanelData[] | string | boolean | undefined
}`
    },
    {
      name: 'ICascaderPanelConfig',
      type: 'interface',
      code: `
interface ICascaderPanelConfig {
  emitPath: boolean
  expandTrigger: 'click' | 'hover'
  hoverThreshold: number
  checkStrictly?: boolean
  multiple?: boolean
  lazy: boolean
  lazyLoad: (
    node: ICascaderPanelNode,
    resolve: (dataList: ICascaderPanelData[]) => void
  ) => void
  value: string
  label: string
  children: string
  disabled: string
  leaf: string
}`
    },
    {
      name: 'ICascaderPanelNode',
      type: 'type',
      code: `
type ICascaderPanelNode = {
  parent: ICascaderPanelNode | null
  level: number
  data: ICascaderPanelData
  config: ICascaderPanelConfig
  uid: number
  value: ICascaderPanelNodeValue
  label: string
  pathNodes: Node[]
  path: ICascaderPanelNodeValue[]
  pathLabels: string[]
  loaded: boolean
  loading: boolean
  hasChildren: boolean
  children: Node[]
  checked?: boolean
  indeterminate?: boolean
  root?: boolean
}`
    },
    {
      name: 'ICascaderPanelLazyLoad',
      type: 'type',
      code: `
type ICascaderPanelLazyLoad = (node: ICascaderPanelNode, resolve: (dataList: ICascaderPanelData[]) => void) => void
      `
    }
  ]
}
