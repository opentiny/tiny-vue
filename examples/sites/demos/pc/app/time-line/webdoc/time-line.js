export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': '<p>通过 <code>data</code> 属性设置时间线的节点数据；<code>active</code> 属性设置当前节点。</p>\n',
        'en-US':
          '<p>Use the <code>data</code> attribute to set the timeline step bar data, and use the <code>active</code> attribute to set the selected step of the step bar. </p>\n'
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'timeline-item',
      'name': { 'zh-CN': '时间线节点', 'en-US': 'Timeline Node' },
      'desc': {
        'zh-CN': '<p>可以通过时间线节点组件<code>TimelineItem</code>自定义单个节点的属性、事件和插槽。</p>\n',
        'en-US': ''
      },
      'codeFiles': ['timeline-item.vue']
    },
    {
      'demoId': 'horizontal-step',
      'name': { 'zh-CN': '横向时间线', 'en-US': 'horizontal timeline' },
      'desc': {
        'zh-CN': '<p>通过 <code>horizontal</code> 属性设置横向时间线。</p>\n',
        'en-US': '<p>Set the horizontal timeline through the <code>horizontal</code> attribute. </p>\n'
      },
      'codeFiles': ['horizontal-step.vue']
    },
    {
      'demoId': 'vertical-step',
      'name': { 'zh-CN': '竖向时间线', 'en-US': 'Vertical Timeline' },
      'desc': {
        'zh-CN': '<p>通过 <code>vertical</code> 属性设置竖向时间线。</p>\n',
        'en-US': '<p>Use the <code>vertical</code> attribute to set the vertical timeline. </p>\n'
      },
      'codeFiles': ['vertical-step.vue']
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
      'demoId': 'vertical-step-reverse',
      'name': { 'zh-CN': '竖向时间线的方向', 'en-US': 'Direction of the vertical timeline' },
      'desc': {
        'zh-CN': '<p>通过 <code>reverse</code> 属性设置竖向步骤条的方向。</p>\n',
        'en-US': '<p>Sets the direction of the vertical step bar through the <code>reverse</code> attribute. </p>\n'
      },
      'codeFiles': ['vertical-step-reverse.vue']
    },
    {
      'demoId': 'set-step-width',
      'name': { 'zh-CN': '宽度设置', 'en-US': 'Width Setting' },
      'desc': {
        'zh-CN': '<p>详细用法参考如下示例。</p>\n',
        'en-US': '<p>Use the <code>space</code> attribute to set the width of the step bar. </p>\n'
      },
      'codeFiles': ['set-step-width.vue']
    },
    {
      'demoId': 'different-data',
      'name': { 'zh-CN': '数据映射', 'en-US': 'Data Mapping' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>name-field</code> 属性设置节点信息中名称对应的字段名，通过 <code>time-field</code> 属性设置节点时间信息对应的字段名。</p>\n',
        'en-US':
          '<p>The <code>name-field</code> attribute is used to set the field name corresponding to the node name in the node information, and the <code>time-field</code> attribute is used to set the field name corresponding to the node time information. </p>\n'
      },
      'codeFiles': ['different-data.vue']
    },
    {
      'demoId': 'set-start-value',
      'name': { 'zh-CN': '设置序号起始值', 'en-US': 'Set the start value of the sequence number' },
      'desc': {
        'zh-CN': '<p>通过 <code>start</code> 属性设置步骤条序号起始值。</p>\n',
        'en-US': '<p>Set the start step sequence number through the <code>start</code> attribute. </p>\n'
      },
      'codeFiles': ['set-start-value.vue']
    },
    {
      'demoId': 'show-status',
      'name': { 'zh-CN': '显示组件内部状态', 'en-US': 'Display the internal status of a component.' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>show-status</code> 属性设置是否显示组件内部状态。默认为 <code>false</code>，表示不显示。</p>\n',
        'en-US':
          '<p>The <code>show-status</code> attribute is used to set whether to display the internal status of a component. The default value is <code>false</code>, indicating that the parameter is not displayed. </p>\n'
      },
      'codeFiles': ['show-status.vue']
    },
    {
      'demoId': 'show-number',
      'name': { 'zh-CN': '未完成的序号显示', 'en-US': 'Unfinished Sequence Number Display' },
      'desc': {
        'zh-CN': '<p>通过 <code>show-number</code> 属性设置未完成的状态是否显示序号。</p>\n',
        'en-US':
          '<p>The <code>show-number</code> attribute is used to set whether to display sequence numbers for uncompleted states. </p>\n'
      },
      'codeFiles': ['show-number.vue']
    },
    {
      'demoId': 'custom-normal-step',
      'name': { 'zh-CN': '自定义横向时间线', 'en-US': 'Customizing a Horizontal Timeline' },
      'desc': {
        'zh-CN':
          '<p><code>slot</code> 为 <code>top</code>可以自定义步骤条顶部内容，<code>slot</code> 为 <code>bottom</code> 可以自定义步骤条底部内容。</p>\n',
        'en-US':
          'If <p><code>slot</code> is <code>top</code>, you can customize the top content of the step bar. If <p><code>slot</code> is <code>slot</code>, you can customize the bottom content of the step bar. </p>\n'
      },
      'codeFiles': ['custom-normal-step.vue']
    },
    {
      'demoId': 'custom-vertical-step',
      'name': { 'zh-CN': '自定义竖向时间线', 'en-US': 'Customized Vertical Timeline' },
      'desc': {
        'zh-CN':
          '<p><code>slot</code> 为 <code>left</code>可以自定义步骤条左侧内容，<code>slot</code> 为 <code>right</code> 可以自定义步骤条右侧内容。</p>\n',
        'en-US':
          'If <p><code>slot</code> is set to <code>left</code>, you can customize the content on the left of the step bar. If <p><code>slot</code> is set to <code>right</code>, you can customize the content on the right of the step bar. </p>\n'
      },
      'codeFiles': ['custom-vertical-step.vue']
    },
    {
      'demoId': 'vertical-step-reverse1',
      'name': { 'zh-CN': 'click 事件', 'en-US': 'click event' },
      'desc': {
        'zh-CN': '<p>单击时触发 click 事件</p>\n',
        'en-US': '<p>The click event is triggered upon a click</p>\n'
      },
      'codeFiles': ['vertical-step-reverse.vue']
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
          'demoId': 'vertical-step-reverse'
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
            'en-US': 'Whether to display sequence numbers for unfinished states.'
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
              'Set the width of the step bar.The value can be a number, a numeric string with length units, or a percentage string. For numbers, the default length unit is px'
          },
          'demoId': 'set-step-width'
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
          'demoId': 'vertical-step'
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
          'demoId': 'custom-normal-step'
        },
        {
          'name': 'left',
          'desc': {
            'zh-CN': '自定义节点左侧内容',
            'en-US': 'Customize left content for timeline item'
          },
          'demoId': 'custom-vertical-step'
        },
        {
          'name': 'right',
          'desc': {
            'zh-CN': '自定义节点右侧内容',
            'en-US': 'Customize right content for timeline item'
          },
          'demoId': 'custom-vertical-step'
        },
        {
          'name': 'top',
          'desc': {
            'zh-CN': '自定义节点顶部内容',
            'en-US': 'Customize bottom content for timeline item'
          },
          'demoId': 'custom-normal-step'
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
              'Set the width of the step bar.The value can be a number, a numeric string with length units, or a percentage string. For numbers, the default length unit is px'
          },
          'demoId': ''
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
