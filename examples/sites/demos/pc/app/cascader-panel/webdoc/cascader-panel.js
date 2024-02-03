export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>options</code> 来指定选项，也可通过 <code>props</code> 来设置多选、动态加载等功能，具体详情见下方 API 表格。</p>\n',
        'en-US':
          '<p>Use <code>options</code> to specify options. You can also use <code>props</code> to set functions such as multiple selection and dynamic loading. For details, see the API table below. </p>\n'
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'custom-option-content',
      'name': { 'zh-CN': '自定义节点内容', 'en-US': 'Custom Node Content' },
      'desc': {
        'zh-CN': `<p>
            <div>可以通过 <code>scoped slot</code> 对级联面板的备选项的节点内容进行自定义。</div>
            <div><code>scoped slot</code> 会传入两个字段 <code>node</code> 和 <code>data</code>，分别表示当前节点的 Node 对象和数据。</div>
          </p>`,
        'en-US': `<p>
          The <div> can customize the node contents of the cascade panel's alternatives through the <code>scoped slot</code>. </div>
          <div><code>scoped slot</code> passes in two fields, <code>node</code> and <code>data</code>, representing the Node object and data of the current node, respectively. </div>
        </p>`
      },
      'codeFiles': ['custom-option-content.vue']
    },
    {
      'demoId': 'cascader-panel-props',
      'name': { 'zh-CN': 'Props 选项', 'en-US': 'Props Options' },
      'desc': {
        'zh-CN': `<p>
              <div>通过 <code>children</code> 指定子级选项，默认值为 'children'。</div>
              <div>通过 <code>emitPath</code> 是否返回由该节点所在的各级菜单的值所组成的数组。</div>
              <div>通过 <code>label</code> 指定显示选项 label 值，默认为 'label'。</div>
              <div>通过 <code>value</code> 指定值选项 value 值，默认为 'value'。</div>
            </p>`,
        'en-US': `<p>
            <div> specifies the child options through <code>children</code>, which defaults to children. </div>
            <div> Whether to return an array of values from the menu levels where the node resides via <code>emitPath</code>. </div>
            <div> specifies the display option label value by <code>label</code>, which defaults to label. </div>
            <div> Specifies the value option value by <code>value</code>, which defaults to value. </div>
          </p>`
      },
      'codeFiles': ['cascader-panel-props.vue']
    },
    {
      'demoId': 'change',
      'name': { 'zh-CN': '事件与方法', 'en-US': 'Selected node changes' },
      'desc': {
        'zh-CN': `<p>
            <div>通过 <code>change</code> 点击节点后触发的事件，回调参数为"选中节点的值"。</div>
            <div>通过 <code>clearCheckedNodes</code> 清除选中的节点。</div>
            <div>通过 <code>getCheckedNodes</code> 获取选中的节点。</dic>
          </p>`,
        'en-US': `<p>
            <div> The event triggered by clicking the node through <code>change</code>, with the callback parameter "Select the value of the node". </div>
            <div> Clear the selected nodes with <code>clearCheckedNodes</code>. </div>
            <div> Get the selected nodes from <code>getCheckedNodes</code>. </dic>
          </p>`
      },
      'codeFiles': ['change.vue']
    }
  ],
  apis: [
    {
      'name': 'cascader-panel',
      'type': 'component',
      'props': [
        {
          'name': 'modelValue / v-model',
          'type': 'ICascaderPanelNodePropValue',
          'typeAnchorName': 'ICascaderPanelNodePropValue',
          'defaultValue': '',
          'desc': {
            'zh-CN': `选中项绑定值, 其类型由 props.multiple、props.emitPath 共同决定`,
            'en-US': `Select an item binding value whose type is determined by both props.multiple and props.emitPath`
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'options',
          'type': 'ICascaderPanelData[]',
          'typeAnchorName': 'ICascaderPanelData',
          'defaultValue': '',
          'desc': {
            'zh-CN': '可选项数据源，键名可通过 Props 属性配置',
            'en-US': 'Optional data source. The key name can be configured through the Props attribute.'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'props',
          'type': 'ICascaderPanelConfig',
          'typeAnchorName': 'ICascaderPanelConfig',
          'defaultValue': '',
          'desc': {
            'zh-CN': '配置选项，具体见 ICascaderPanelConfig 表 ',
            'en-US': 'Configuration options. For details, see the ICascaderPanelConfig table.'
          },
          'demoId': 'cascader-panel-props'
        }
      ],
      'events': [
        {
          'name': 'change',
          'type': '(value: ICascaderPanelNodePropValue) => void',
          'typeAnchorName': 'ICascaderPanelNodePropValue',
          'defaultValue': '',
          'desc': {
            'zh-CN': '当选中节点变化时触发; 回调参数为 选中节点的值',
            'en-US':
              'This event is triggered when the selected node changes. arg: The callback parameter is the value of the selected node (array type).'
          },
          'demoId': 'change'
        },
        {
          'name': 'expand-change',
          'type': '(value: ICascaderPanelNodeValue[]) => void',
          'typeAnchorName': 'ICascaderPanelNodeValue',
          'defaultValue': '',
          'desc': {
            'zh-CN': '当展开节点发生变化时触发; 回调参数为 各父级选项值组成的数组 (Array 类型)',
            'en-US':
              'This event is triggered when the expanded node changes. arg: The callback parameter is an array (Array type) consisting of parent option values.'
          },
          'demoId': 'change'
        }
      ],
      'slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '自定义备选项的节点内容，参数为 { node: ICascaderPanelNode, data: ICascaderPanelData }，分别为当前节点的 Node 对象和数据',
            'en-US':
              'User-defined candidate node content. The parameter is {node, data}, which indicates the node object and data of the current node.'
          },
          'demoId': 'custom-option-content'
        }
      ],
      'methods': [
        {
          'name': 'getCheckedNodes',
          'type': '(leafOnly: boolean = false) => ICascaderPanelNode[]',
          'typeAnchorName': 'ICascaderPanelNode',
          'defaultValue': '',
          'desc': {
            'zh-CN': '获取选中的节点;参数为 (leafOnly) 是否只是获取子节点，默认值为 false',
            'en-US':
              'Obtain the selected node. The parameter (leafOnly) indicates whether to obtain only subnodes. The default value is false'
          },
          'demoId': 'change'
        },
        {
          'name': 'clearCheckedNodes',
          'type': '() => void',
          'defaultValue': '',
          'desc': { 'zh-CN': '清空选中的节点', 'en-US': 'Clear selected nodes.' },
          'demoId': 'change'
        }
      ]
    },
    {
      'name': 'ICascaderPanelConfig ',
      'type': 'interface',
      'props': [
        {
          'name': 'expandTrigger',
          'type': `'click' | 'hover'`,
          'defaultValue': `'click'`,
          'desc': {
            'zh-CN': '次级菜单的展开方式',
            'en-US': 'The expansion mode of the secondary menu'
          }
        },
        {
          'name': 'multiple',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '是否多选', 'en-US': 'Whether to select multiple options' }
        },
        {
          'name': 'checkStrictly',
          'type': 'boolean',
          'defaultValue': ' false',
          'desc': {
            'zh-CN': '是否严格的遵守父子节点不互相关联',
            'en-US':
              'Whether to strictly comply with the principle that parent and child nodes are not associated with each other'
          }
        },
        {
          'name': 'emitPath',
          'type': 'boolean',
          'defaultValue': ' true',
          'desc': {
            'zh-CN':
              '在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置 false，则只返回该节点的值',
            'en-US':
              'Indicates whether to return an array consisting of the values of menus at different levels of the selected node when the selected node is changed. If this parameter is set to false, only the value of the selected node is returned.'
          }
        },
        {
          'name': 'lazy',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否动态加载子节点，需与 lazyLoad 方法结合使用',
            'en-US':
              'Whether to dynamically load subnodes. This parameter must be used together with the lazyLoad method.'
          }
        },
        {
          'name': 'lazyLoad',
          'type': 'ICascaderPanelLazyLoad',
          'typeAnchorName': 'ICascaderPanelLazyLoad',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '加载动态数据的方法，仅在 lazy 为 true 时有效;参数说明： node 为当前点击的节点，resolve 为数据加载完成的回调(必须调用)',
            'en-US':
              'Method for loading dynamic data. This parameter is valid only when lazy is set to true. Parameter description: node indicates the currently clicked node. resolve indicates the callback after data loading is complete (mandatory).'
          }
        },
        {
          'name': 'value',
          'type': 'string',
          'defaultValue': "'value'",
          'desc': {
            'zh-CN': '指定选项的值为选项对象的某个属性值',
            'en-US': 'The value of an option is the value of an attribute of the option object.'
          },
          'demoId': 'cascader-panel-props'
        },
        {
          'name': 'label',
          'type': 'string',
          'defaultValue': "'label'",
          'desc': {
            'zh-CN': '指定选项标签为选项对象的某个属性值',
            'en-US': 'Specify that the option label is an attribute value of the option object.'
          },
          'demoId': 'cascader-panel-props'
        },
        {
          'name': 'children',
          'type': 'string',
          'defaultValue': "'children'",
          'desc': {
            'zh-CN': '指定选项的子选项为选项对象的某个属性值',
            'en-US': 'Specifies that the sub-option of an option is an attribute value of the option object.'
          },
          'demoId': 'cascader-panel-props'
        },
        {
          'name': 'disabled',
          'type': 'string',
          'defaultValue': "'disabled'",
          'desc': {
            'zh-CN': '指定选项的禁用为选项对象的某个属性值',
            'en-US': 'Specify that an option is disabled as an attribute value of the option object.'
          },
          'demoId': 'cascader-panel-props'
        },
        {
          'name': 'leaf',
          'type': 'string',
          'defaultValue': "'leaf'",
          'desc': {
            'zh-CN': '指定选项的叶子节点的标志位为选项对象的某个属性值',
            'en-US': 'The flag bit of the leaf node of the specified option is an attribute value of the option object.'
          },
          'demoId': 'cascader-panel-props'
        }
      ]
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
