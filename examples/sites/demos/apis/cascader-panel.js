export default {
  mode: ['pc'],
  apis: [
    {
      name: 'cascader-panel',
      type: 'component',
      props: [
        {
          name: 'modelValue / v-model',
          typeAnchorName: 'ICascaderPanelNodePropValue',
          type: 'ICascaderPanelNodePropValue',
          defaultValue: '',
          desc: {
            'zh-CN': '选中项绑定值, 其类型由 props.multiple、props.emitPath 共同决定',
            'en-US': 'Select an item binding value whose type is determined by both props.multiple and props.emitPath'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
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
          pcDemo: 'basic-usage'
        },
        {
          name: 'props',
          typeAnchorName: 'ICascaderPanelConfig',
          type: 'ICascaderPanelConfig',
          defaultValue: '',
          desc: {
            'zh-CN': '配置选项，具体见 ICascaderPanelConfig 表 ',
            'en-US': 'Configuration options. For details, see the ICascaderPanelConfig table.'
          },
          mode: ['pc'],
          pcDemo: 'cascader-panel-props'
        }
      ],
      events: [
        {
          name: 'change',
          typeAnchorName: 'ICascaderPanelNodePropValue',
          type: '(value: ICascaderPanelNodePropValue) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '当选中节点变化时触发; 回调参数为 选中节点的值',
            'en-US':
              'This event is triggered when the selected node changes. arg: The callback parameter is the value of the selected node (array type).'
          },
          mode: ['pc'],
          pcDemo: 'change'
        },
        {
          name: 'expand-change',
          typeAnchorName: 'ICascaderPanelNodeValue',
          type: '(value: ICascaderPanelNodeValue[]) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '当展开节点发生变化时触发; 回调参数为 各父级选项值组成的数组 (Array 类型)',
            'en-US':
              'This event is triggered when the expanded node changes. arg: The callback parameter is an array (Array type) consisting of parent option values.'
          },
          mode: ['pc'],
          pcDemo: 'change'
        }
      ],
      methods: [
        {
          name: 'clearCheckedNodes',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '清空选中的节点',
            'en-US': 'Clear selected nodes.'
          },
          mode: ['pc'],
          pcDemo: 'change'
        },
        {
          name: 'getCheckedNodes',
          typeAnchorName: 'ICascaderPanelNode',
          type: '(leafOnly: boolean = false) => ICascaderPanelNode[]',
          defaultValue: '',
          desc: {
            'zh-CN': '获取选中的节点;参数为 (leafOnly) 是否只是获取子节点，默认值为 false',
            'en-US':
              'Obtain the selected node. The parameter (leafOnly) indicates whether to obtain only subnodes. The default value is false'
          },
          mode: ['pc'],
          pcDemo: 'change'
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
          mode: ['pc'],
          pcDemo: 'custom-option-content'
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
          mode: ['pc']
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
          pcDemo: 'cascader-panel-props'
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
          pcDemo: 'cascader-panel-props'
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
          mode: ['pc']
        },
        {
          name: 'expandTrigger',
          type: "'click' | 'hover'",
          defaultValue: "'click'",
          desc: {
            'zh-CN': '次级菜单的展开方式',
            'en-US': 'The expansion mode of the secondary menu'
          },
          mode: ['pc']
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
          pcDemo: 'cascader-panel-props'
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
          mode: ['pc']
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
          mode: ['pc']
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
          pcDemo: 'cascader-panel-props'
        },
        {
          name: 'multiple',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否多选',
            'en-US': 'Whether to select multiple options'
          },
          mode: ['pc']
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
          pcDemo: 'cascader-panel-props'
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
