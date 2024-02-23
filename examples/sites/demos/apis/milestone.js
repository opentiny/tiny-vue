export default {
  mode: ['pc'],
  apis: [
    {
      name: 'milestone',
      type: 'component',
      props: [
        {
          name: 'completed-field',
          type: 'string',
          defaultValue: "'completed'",
          desc: {
            'zh-CN': '设置节点完成状态对应的键值',
            'en-US': 'Set the key values corresponding to the node completion status'
          },
          mode: ['pc'],
          pcDemo: 'data-field-mapping'
        },
        {
          name: 'data',
          typeAnchorName: 'ICustomData',
          type: 'ICustomData | ICustomData[]',
          defaultValue: '',
          desc: {
            'zh-CN': '设置步骤条的数据，可自定义键值映射',
            'en-US': 'Set the step bar data, Customizable key value mapping'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'flag-before',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '设置旗子的数据是取自前面还是后面的节点，默认取后面节点上的数据',
            'en-US':
              'Set whether the flag data is taken from the preceding or following nodes, and default to taking data from the following nodes'
          },
          mode: ['pc'],
          pcDemo: 'flag-before'
        },
        {
          name: 'flag-content-field',
          type: 'string',
          defaultValue: "'content'",
          desc: {
            'zh-CN': '设置旗子内容描述部分对应的键名',
            'en-US': 'Set the key name corresponding to the flag content description section'
          },
          mode: ['pc'],
          pcDemo: 'data-field-mapping'
        },
        {
          name: 'flag-field',
          type: 'string',
          defaultValue: "'flags'",
          desc: {
            'zh-CN': '设置旗子信息数组对应的键名',
            'en-US': 'Set the key name corresponding to the flag information array'
          },
          mode: ['pc'],
          pcDemo: 'data-field-mapping'
        },
        {
          name: 'flag-name-field',
          type: 'string',
          defaultValue: "'name'",
          desc: {
            'zh-CN': '设置旗子标题对应的键名',
            'en-US': 'Set the key name corresponding to the flag title'
          },
          mode: ['pc'],
          pcDemo: 'data-field-mapping'
        },
        {
          name: 'flag-status-field',
          type: 'string',
          defaultValue: "'status'",
          desc: {
            'zh-CN': '设置旗子状态对应的键名',
            'en-US': 'Set the key name corresponding to the flag state'
          },
          mode: ['pc'],
          pcDemo: 'data-field-mapping'
        },
        {
          name: 'line-style',
          type: "'number' | 'string'",
          defaultValue: '1',
          desc: {
            'zh-CN':
              '线条颜色取值模式为数字时，只有1和2可选；如果为字符串则需传入 16 进制颜色值<br />\n              设置为数字 1 时只有完成与未完成两种状态的线条颜色，完成状态的线条颜色与 milestones-status 定义的 completed 状态的颜色一致<br />\n              设置为数字 2 时线条颜色根随节点状态颜色<br />\n              当设置为字符串形式的 16 进制色值时，如：#1890FF 时，线条不区分状态，全部统一为所设置的颜色',
            'en-US':
              'When the line color value mode is numeric, only 1 and 2 can be selected; If it is a string, the hexadecimal color value needs to be passed in<br/>\n              When set to the number 1, there are only two types of line colors: complete and incomplete. The color of the completed state line is consistent with the color of the completed state defined by milestone status<br/>\n              When set to number 2, the root color of the line follows the node state color<br/>\n              When set to a hexadecimal color value in string form, such as # 1890FF, the lines do not differentiate between states and are all unified to the set color'
          },
          mode: ['pc'],
          pcDemo: 'line-style'
        },
        {
          name: 'milestones-status',
          typeAnchorName: 'IStatus',
          type: 'IStatus',
          defaultValue: '',
          desc: {
            'zh-CN': '定义状态与颜色对应关系，颜色取值须是 16 进制颜色值或组件库的主题变量',
            'en-US':
              'Define the correspondence between state and color, and the color value must be a hexadecimal color value or a theme variable from the component library'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'name-field',
          type: 'string',
          defaultValue: "'name'",
          desc: {
            'zh-CN': '设置节点名称对应的键名',
            'en-US': 'Set the key name corresponding to the node name'
          },
          mode: ['pc'],
          pcDemo: 'data-field-mapping'
        },
        {
          name: 'show-number',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '设置未完成状态的节点是否显示序号',
            'en-US': 'Set whether nodes in incomplete status display serial numbers'
          },
          mode: ['pc'],
          pcDemo: 'show-number'
        },
        {
          name: 'solid',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '在里程碑模式下，设置已经完成节点显示为实心，且光晕不透明',
            'en-US': 'In milestone mode, set the completed node to be displayed as solid and the halo is opaque'
          },
          mode: ['pc'],
          pcDemo: 'solid-style'
        },
        {
          name: 'space',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN': '设置相邻节点的间距，即节点间线条的长度',
            'en-US': 'Set the spacing between adjacent nodes, i.e. the length of lines between nodes'
          },
          mode: ['pc'],
          pcDemo: 'line-style'
        },
        {
          name: 'start',
          type: 'number',
          defaultValue: '-1',
          desc: {
            'zh-CN': '设置节点的序号起始值，从首个节点开始计算',
            'en-US': 'Set the starting value of the nodes sequence number, starting from the first node'
          },
          mode: ['pc'],
          pcDemo: 'show-number'
        },
        {
          name: 'status-field',
          type: 'string',
          defaultValue: "'status'",
          desc: {
            'zh-CN': '设置节点状态对应的键名',
            'en-US': 'Set the key name corresponding to the node state'
          },
          mode: ['pc'],
          pcDemo: 'data-field-mapping'
        },
        {
          name: 'time-field',
          type: 'string',
          defaultValue: "'time'",
          desc: {
            'zh-CN': '设置节点时间信息对应的键名',
            'en-US': 'Set the key name corresponding to node time information'
          },
          mode: ['pc'],
          pcDemo: 'data-field-mapping'
        }
      ],
      events: [
        {
          name: 'click',
          typeAnchorName: 'ICustomData',
          type: '(index: number, node: ICustomData) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '节点的点击事件，参数（index:节点索引, node：节点数据信息）',
            'en-US': 'Node click event (parameter) (index: node index, node: node data information)'
          },
          mode: ['pc'],
          pcDemo: 'milestone-events'
        },
        {
          name: 'flag-click',
          typeAnchorName: 'ICustomData',
          type: '(index: number, node: ICustomData) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '旗子的点击事件，参数（index:旗子索引, node：旗子数据信息）',
            'en-US': 'Flag click event, parameters (index: flag index, node: data information of flag)'
          },
          mode: ['pc'],
          pcDemo: 'milestone-events'
        },
        {
          name: 'flagclick',
          typeAnchorName: 'ICustomData',
          type: '(index: number, node: ICustomData) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '[使用flag-click代替， deprecated v3.5.0废弃，v3.17.0移除；移除原因：命名规范]',
            'en-US':
              '[It is recommended that flag-click be used instead of flag-click, deprecated in v3.5.0 and removed in v3.17.0; Reason for removal: ]'
          },
          mode: ['pc'],
          pcDemo: 'milestone-events'
        }
      ],
      methods: [],
      slots: [
        {
          name: 'bottom',
          defaultValue: '',
          desc: {
            'zh-CN': '节点下方内容',
            'en-US': 'Content under a node'
          },
          mode: ['pc'],
          pcDemo: 'custom-bottom-top'
        },
        {
          name: 'flag',
          defaultValue: '',
          desc: {
            'zh-CN': '旗帜内容',
            'en-US': 'Flag Content'
          },
          mode: ['pc'],
          pcDemo: 'custom-flag'
        },
        {
          name: 'icon',
          defaultValue: '',
          desc: {
            'zh-CN': '节点图标',
            'en-US': 'Node icon'
          },
          mode: ['pc'],
          pcDemo: 'custom-icon-slot'
        },
        {
          name: 'top',
          defaultValue: '',
          desc: {
            'zh-CN': '节点上方内容',
            'en-US': 'Content above the node'
          },
          mode: ['pc'],
          pcDemo: 'custom-bottom-top'
        }
      ]
    }
  ],
  types: [
    {
      name: 'IStatus',
      type: 'interface',
      code: `
interface IStatus {
  completed?: string // 可通过completed-field自定义completed键名
  doing: string
  back: string
  end: string
  cancel: string
}`
    },
    {
      name: 'ICustomData',
      type: 'interface',
      code: `
interface ICustomData { 
  name?: string
  time?: string
  status?: string
  flags?: string
  content?: string
  [propName: string]: string // 可自定义以上的默认属性
}`
    }
  ]
}
