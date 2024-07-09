export default {
  mode: ['pc', 'mobile-first'],
  apis: [
    {
      name: 'time-line',
      type: 'component',
      props: [
        {
          name: 'active',
          type: 'number',
          defaultValue: '-1',
          desc: {
            'zh-CN': '当前节点索引，从0开始计数',
            'en-US': 'Current node index and count from 0'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'auto-color-field',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '显示组件二级标题内容，默认值为 autoColor',
            'en-US': 'Displays the level-2 title of the component. The default value is autoColor.'
          },
          mode: ['pc', 'mobile-first'],
          mfDemo: ''
        },
        {
          name: 'data',
          typeAnchorName: 'ITimelineItem',
          type: 'ITimelineItem',
          defaultValue: '[]',
          desc: {
            'zh-CN': '节点数据',
            'en-US': 'Nodes data'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'fold-disabled',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '禁用折叠',
            'en-US': 'to disable folding feature'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'horizontal',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否水平方向',
            'en-US': 'Whether horizontal constructure'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'limited-nodes',
          type: 'number | string',
          defaultValue: '3',
          desc: {
            'zh-CN': '折叠后展示的节点个数',
            'en-US': 'number of nodes displayed after folding'
          },
          mode: ['mobile-first'],
          mfDemo: 'limited-nodes'
        },
        {
          name: 'line-width',
          type: 'string | number',
          defaultValue: '',
          desc: {
            'zh-CN': "连接线长度，仅当 text-position 取值为 'right' 时生效，设置后 space 属性失效",
            'en-US':
              "The length of the connection line and it is valid only when text-position is set to 'right'. After setting, the space property is invalid"
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'name-field',
          type: 'string',
          defaultValue: "'name'",
          desc: {
            'zh-CN': '节点名称对应的字段名',
            'en-US': 'Set the field name in the node information.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'custom-field',
          mfDemo: ''
        },
        {
          name: 'node-max',
          type: 'number | string',
          defaultValue: '7',
          desc: {
            'zh-CN': '最大显示节点数',
            'en-US': 'maximum nodes to display'
          },
          mode: ['mobile-first'],
          mfDemo: 'node-max'
        },
        {
          name: 'only-number',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '节点序号是否只显示数字，适用于横向时间线',
            'en-US': 'Whether the node sequence number only displays numbers, used for horizontal timeline'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'reverse',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否逆序排列节点，仅用于竖式时间线',
            'en-US': 'Whether the node in reverse order and only for vertical timeline'
          },
          mode: ['pc'],
          pcDemo: 'vertical-timeline'
        },
        {
          name: 'shape',
          type: 'string',
          defaultValue: "'circle'",
          desc: {
            'zh-CN': "圆点外形: 空心圆形或实心圆点，取值分别对应 'circle' | 'dot'",
            'en-US': "Set the appearance of point, optional values include 'circle' and 'dot'"
          },
          mode: ['pc'],
          pcDemo: 'shape'
        },
        {
          name: 'show-divider',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否显示底部指标三角，适用于横向时间线',
            'en-US':
              'Indicates whether to display the bottom indicator triangle, which is applicable to the horizontal timeline.'
          },
          mode: ['pc'],
          pcDemo: 'show-divider'
        },
        {
          name: 'show-number',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '未完成状态的节点是否显示序号',
            'en-US': 'Whether to display sequence numbers for unfinished states'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'space',
          type: 'string | number',
          defaultValue: '',
          desc: {
            'zh-CN': '节点宽度， 取值为数字、带长度单位的数值字符串和百分比字符串，数字会默认以px为长度单位',
            'en-US':
              'Set the width of the timeline.The value can be a number, a numeric string with length units, or a percentage string. For numbers, the default length unit is px'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'set-node-width',
          mfDemo: ''
        },
        {
          name: 'start',
          type: 'number',
          defaultValue: '1',
          desc: {
            'zh-CN': '节点序号起始值',
            'en-US': 'The start step sequence number.'
          },
          mode: ['pc'],
          pcDemo: 'set-start-value'
        },
        {
          name: 'sub-field',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '设置时间线两侧展示',
            'en-US': 'Set the display on both sides of the timeline.'
          },
          mode: ['mobile-first'],
          mfDemo: 'sub-field'
        },
        {
          name: 'time-field',
          type: 'string',
          defaultValue: "'time'",
          desc: {
            'zh-CN': '节点时间信息对应的字段名',
            'en-US': 'The name of the field corresponding to the node time information'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'custom-field',
          mfDemo: ''
        },
        {
          name: 'tips-field',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '显示组件二级标题内容,默认值为 tips',
            'en-US': 'Displays the level-2 title of the component. The default value is tips.'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'vertical',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否竖直方向',
            'en-US': 'Vertical direction'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'vertical-timeline',
          mfDemo: ''
        }
      ],
      events: [
        {
          name: 'click',
          type: '(index: number, node: <a href="#ITimelineItem">ITimelineItem</a>) => void',
          desc: {
            'zh-CN': '节点的点击事件，参数：<br />index：点击节点的下标<br /> node： 点击节点数据}',
            'en-US': 'Click event of a node. arguments:<br />index: click the subscript of a node<br />node: node data'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        }
      ],
      methods: [],
      slots: [
        {
          name: 'bottom',
          desc: {
            'zh-CN': '自定义节点底部内容',
            'en-US': 'Customize bottom content for timeline item'
          },
          mode: ['pc'],
          pcDemo: 'custom-horizontal-timeline'
        },
        {
          name: 'description',
          desc: {
            'zh-CN': '节点描述信息插槽，适用于横向时间线',
            'en-US': 'Node description information slot, used for horizontal timeline'
          },
          mode: ['pc'],
          pcDemo: 'slot-description'
        },
        {
          name: 'left',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义节点左侧内容',
            'en-US': 'Customize left content for timeline item'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'custom-vertical-timeline',
          mfDemo: ''
        },
        {
          name: 'right',
          desc: {
            'zh-CN': '自定义节点右侧内容',
            'en-US': 'Customize right content for timeline item'
          },
          mode: ['pc'],
          pcDemo: 'custom-vertical-timeline'
        },
        {
          name: 'top',
          desc: {
            'zh-CN': '自定义节点顶部内容',
            'en-US': 'Customize bottom content for timeline item'
          },
          mode: ['pc'],
          pcDemo: 'custom-horizontal-timeline'
        }
      ]
    },
    {
      name: 'timeline-item',
      type: 'component',
      props: [
        {
          name: 'line-width',
          type: 'string | number',
          defaultValue: '',
          desc: {
            'zh-CN': '连接线长度，仅当 timeline 组件 text-position 属性取值为 true 时生效，设置后 space 属性失效',
            'en-US':
              'The length of the connection line and it is valid only when text-position is set to true. After setting, the space property is invalid'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'node',
          typeAnchorName: 'ITimelineItem',
          type: 'ITimelineItem',
          defaultValue: '',
          desc: {
            'zh-CN': '节点数据',
            'en-US': 'Node data'
          },
          mode: ['pc'],
          pcDemo: 'timeline-item'
        },
        {
          name: 'space',
          type: 'string | number',
          defaultValue: '',
          desc: {
            'zh-CN': '节点宽度， 取值为数字、带长度单位的数值字符串和百分比字符串，数字会默认以px为长度单位',
            'en-US':
              'Set the width of the timeline.The value can be a number, a numeric string with length units, or a percentage string. For numbers, the default length unit is px'
          },
          mode: ['pc'],
          pcDemo: ''
        }
      ],
      events: [],
      methods: [],
      slots: []
    }
  ],
  types: [
    {
      name: 'ITimelineItem',
      type: 'interface',
      code: `
interface ITimelineItem {
  name: string // 节点名称
  activeColor: 'success' | 'warning' | 'error' | Component
  time?: string // 节点时间
  error?: boolean // 是否异常状态
  disabled?: boolean // 是否禁用
  type?: ITimelineItemType // 节点类型
}
      `
    },
    {
      name: 'ITimelineItemType',
      type: 'type',
      code: `type ITimelineItemType = 'primary' | 'success' | 'warning' | 'error' | 'info'`
    }
  ]
}
