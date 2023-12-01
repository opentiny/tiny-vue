export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>data</code> 属性设置时间线的节点数据；<code>active</code> 属性设置当前节点，<code>click</code> 监听单节点的点击事件。</p>\n',
        'en-US':
          '<p>Use the <code>data</code> attribute to set data,  the <code>active</code> attribute to set the selected node, and <code>click</code> to listen to click event on node. </p>\n'
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'timeline-item',
      'name': { 'zh-CN': '时间线节点组件', 'en-US': 'Timeline Node Component' },
      'desc': {
        'zh-CN': '<p>通过时间线节点组件 <code>timeline-item</code> 自定义单个节点的属性、事件和插槽。</p>\n',
        'en-US':
          '<p>Customize the attributes, events, and slots of individual nodes through the <code>timeline-item</code> component of the Timeline node component.</p>\n'
      },
      'codeFiles': ['timeline-item.vue']
    },
    {
      'demoId': 'vertical-timeline',
      'name': { 'zh-CN': '竖向时间线', 'en-US': 'Vertical Timeline' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>vertical</code> 属性设置为竖直方向时间线，<code>reverse</code> 设置是否逆序展示数据。</p>\n',
        'en-US':
          '<p>Use the <code>vertical</code> attribute to set the vertical timeline and <code>reverse</code> to set whether display data in reverse order.</p>\n'
      },
      'codeFiles': ['vertical-timeline.vue']
    },
    {
      'demoId': 'shape',
      'name': { 'zh-CN': '圆点外观', 'en-US': 'Appearance of Node' },
      'desc': {
        'zh-CN': '<p>通过 <code>shape</code> 属性设置竖向时间线节点的外观风格。</p>',
        'en-US': '<p>Use the <code>shape</code> attribute to set the appearance of a vertical time line node. </p>'
      },
      'codeFiles': ['shape.vue']
    },
    {
      'demoId': 'status',
      'name': { 'zh-CN': '节点状态', 'en-US': 'Status of Node' },
      'desc': {
        'zh-CN': '<p>在单项数据中使用 <code>status</code> 指定对应节点的状态.</p>',
        'en-US': '<p>Use the <code>shape</code> attribute to set the appearance of a vertical time line node. </p>'
      },
      'codeFiles': ['status.vue']
    },
    {
      'demoId': 'set-node-width',
      'name': { 'zh-CN': '宽度设置', 'en-US': 'Width Setting' },
      'desc': {
        'zh-CN': '<p>通过 <code>space</code> 属性设置节点的宽度。</p>\n',
        'en-US': '<p>Use the <code>space</code> attribute to set the width of timeline node. </p>\n'
      },
      'codeFiles': ['set-node-width.vue']
    },
    {
      'demoId': 'custom-horizontal-timeline',
      'name': { 'zh-CN': '自定义横向时间线', 'en-US': 'Customizing a Horizontal Timeline' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>top</code> 插槽可以自定义步骤条顶部内容，<code>bottom</code> 插槽自定义步骤条底部内容。</p>\n',
        'en-US':
          'If <p><code>slot</code> is <code>top</code>, you can customize the top content of the timeline. If <p><code>slot</code> is <code>slot</code>, you can customize the bottom content of the timeline. </p>\n'
      },
      'codeFiles': ['custom-horizontal-timeline.vue']
    },
    {
      'demoId': 'custom-vertical-timeline',
      'name': { 'zh-CN': '自定义竖向时间线', 'en-US': 'Customized Vertical Timeline' },
      'desc': {
        'zh-CN':
          '<p>通过<code>left</code> 插槽自定义步骤条左侧内容，<code>right</code> 插槽自定义步骤条右侧内容。</p>\n',
        'en-US':
          'If <p><code>slot</code> is set to <code>left</code>, you can customize the content on the left of the timeline. If <p><code>slot</code> is set to <code>right</code>, you can customize the content on the right of the timeline. </p>\n'
      },
      'codeFiles': ['custom-vertical-timeline.vue']
    },
    {
      'demoId': 'custom-field',
      'name': { 'zh-CN': '自定义字段', 'en-US': 'Custom Field' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>name-field</code> 属性设置节点信息中名称对应的字段名，<code>time-field</code> 属性设置节点时间信息对应的字段名。</p>\n',
        'en-US':
          '<p>The <code>name-field</code> attribute is used to set the field name corresponding to the node name in the node information, and the <code>time-field</code> attribute is used to set the field name corresponding to the node time information. </p>\n'
      },
      'codeFiles': ['custom-field.vue']
    },
    {
      'demoId': 'set-start-value',
      'name': { 'zh-CN': '序号起始值', 'en-US': 'Start value of the sequence number' },
      'desc': {
        'zh-CN': '<p>通过 <code>start</code> 属性设置时间线序号起始值。</p>\n',
        'en-US': '<p>Set the start sequence number through the <code>start</code> attribute. </p>\n'
      },
      'codeFiles': ['set-start-value.vue']
    }
  ],
  apis: [
    {
      'name': 'time-line',
      'type': 'component',
      'properties': [
        {
          'name': 'active',
          'type': 'number',
          'defaultValue': '-1',
          'desc': {
            'zh-CN': '当前节点索引，从0开始计数',
            'en-US': 'Current node index and count from 0'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'data',
          'type': 'ITimelineItem',
          'typeAnchorName': 'ITimelineItem',
          'defaultValue': '[]',
          'desc': {
            'zh-CN': '节点数据',
            'en-US': 'Nodes data'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'horizontal',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '是否水平方向',
            'en-US': 'Whether horizontal constructure'
          },
          'demoId': ''
        },
        {
          'name': 'line-width',
          'type': 'string | number',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '连接线长度，仅当 text-position 取值为 true 时生效，设置后 space 属性失效。',
            'en-US':
              'The length of the connection line and it is valid only when text-position is set to true. After setting, the space property is invalid'
          },
          'demoId': ''
        },
        {
          'name': 'name-field',
          'type': 'string',
          'defaultValue': 'name',
          'desc': {
            'zh-CN': '节点名称对应的字段名',
            'en-US': 'Set the field name in the node information.'
          },
          'demoId': 'custom-field'
        },
        {
          'name': 'reverse',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否逆序排列节点，仅用于竖式时间线',
            'en-US': 'Whether the node in reverse order and only for vertical timeline'
          },
          'demoId': 'vertical-timeline'
        },
        {
          'name': 'shape',
          'type': 'string',
          'defaultValue': 'circle',
          'desc': {
            'zh-CN': '圆点外形: 空心圆形或实心圆点，分别对应 circle | dot',
            'en-US': 'Set the appearance of point, optional values include circle and dot'
          },
          'demoId': 'shape'
        },
        {
          'name': 'show-number',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '未完成状态的节点是否显示序号',
            'en-US': 'Whether to display sequence numbers for unfinished states'
          },
          'demoId': ''
        },
        {
          'name': 'space',
          'type': 'string | number',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '节点宽度， 取值为数字、带长度单位的数值字符串和百分比字符串，数字会默认以px为长度单位。',
            'en-US':
              'Set the width of the timeline.The value can be a number, a numeric string with length units, or a percentage string. For numbers, the default length unit is px'
          },
          'demoId': 'set-node-width'
        },
        {
          'name': 'start',
          'type': 'number',
          'defaultValue': '1',
          'desc': {
            'zh-CN': '节点序号起始值',
            'en-US': 'The start step sequence number.'
          },
          'demoId': 'set-start-value'
        },
        {
          'name': 'time-field',
          'type': 'string',
          'defaultValue': 'time',
          'desc': {
            'zh-CN': '节点时间信息对应的字段名',
            'en-US': 'The name of the field corresponding to the node time information'
          },
          'demoId': 'custome-filed'
        },
        {
          'name': 'vertical',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否竖直方向',
            'en-US': 'Vertical direction'
          },
          'demoId': 'vertical-timeline'
        }
      ],
      'events': [
        {
          'name': 'click',
          'type': '(index: number, node: ITimelineItem) => void',
          'desc': {
            'zh-CN': '节点的点击事件，参数：<br />index：点击节点的下标<br /> node： 点击节点数据}',
            'en-US': 'Click event of a node. arguments:<br />index: click the subscript of a node<br />node: node data'
          },
          'demoId': 'basic-usage'
        }
      ],
      'slots': [
        {
          'name': 'bottom',
          'desc': {
            'zh-CN': '自定义节点底部内容',
            'en-US': 'Customize bottom content for timeline item'
          },
          'demoId': 'custom-normal-timeline'
        },
        {
          'name': 'left',
          'desc': {
            'zh-CN': '自定义节点左侧内容',
            'en-US': 'Customize left content for timeline item'
          },
          'demoId': 'custom-vertical-timeline'
        },
        {
          'name': 'right',
          'desc': {
            'zh-CN': '自定义节点右侧内容',
            'en-US': 'Customize right content for timeline item'
          },
          'demoId': 'custom-horizontal-timeline'
        },
        {
          'name': 'top',
          'desc': {
            'zh-CN': '自定义节点顶部内容',
            'en-US': 'Customize bottom content for timeline item'
          },
          'demoId': 'custom-horizontal-timeline'
        }
      ]
    },
    {
      'name': 'timeline-item',
      'type': 'component',
      'properties': [
        {
          'name': 'node',
          'type': 'ITimelineItem',
          'typeAnchorName': 'ITimelineItem',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '节点数据',
            'en-US': 'Node data'
          },
          'demoId': 'timeline-item'
        },
        {
          'name': 'line-width',
          'type': 'string | number',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '连接线长度，仅当 timeline 组件 text-position 属性取值为 true 时生效，设置后 space 属性失效。',
            'en-US':
              'The length of the connection line and it is valid only when text-position is set to true. After setting, the space property is invalid'
          },
          'demoId': ''
        },
        {
          'name': 'space',
          'type': 'string | number',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '节点宽度， 取值为数字、带长度单位的数值字符串和百分比字符串，数字会默认以px为长度单位。',
            'en-US':
              'Set the width of the timeline.The value can be a number, a numeric string with length units, or a percentage string. For numbers, the default length unit is px'
          },
          'demoId': 'set-node-width'
        }
      ]
    }
  ],
  types: [
    {
      'name': 'ITimelineItem',
      'type': 'interface',
      'code': `
interface ITimelineItem {
  name: string // 节点名称
  time: string // 节点时间
  error: boolean // 是否异常状态
  disabled: boolean // 是否禁用
  type: ITimelineItemType // 节点类型
}
      `
    },
    {
      'name': 'ITimelineItemType',
      'type': 'type',
      'code': `type ITimelineItemType = 'primary' | 'success' | 'warning' | 'error' | 'info'`
    }
  ]
}
