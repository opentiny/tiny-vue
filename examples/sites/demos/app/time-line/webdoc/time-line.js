export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>data</code> 属性设置时间线步骤条数据，通过 <code>active</code> 属性设置步骤条的选中步骤。</p>\n',
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
          'name': 'data',
          'type': 'Array',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置时间线步骤条数据', 'en-US': 'Set timeline step bar data' },
          'demoId': 'basic-usage'
        },
        {
          'name': 'vertical',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '竖式步骤条', 'en-US': 'vertical step bar' },
          'demoId': 'vertical-step'
        },
        {
          'name': 'horizontal',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '是否为横向步骤条', 'en-US': 'Whether it is a horizontal step bar' },
          'demoId': 'horizontal-step'
        },
        {
          'name': 'show-number',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': {
            'zh-CN': '设置未完成的状态是否显示序号',
            'en-US': 'Set whether to display sequence numbers for unfinished states.'
          },
          'demoId': 'show-number'
        },
        {
          'name': 'name-field',
          'type': 'String',
          'defaultValue': '该属性的默认值为 name',
          'desc': { 'zh-CN': '设置节点信息中名称对应的字段名', 'en-US': 'Set the field name in the node information.' },
          'demoId': 'different-data'
        },
        {
          'name': 'time-field',
          'type': 'String',
          'defaultValue': '该属性的默认值为 time',
          'desc': {
            'zh-CN': '设置节点时间信息对应的字段名',
            'en-US': 'Setting the name of the field corresponding to the node time information'
          },
          'demoId': 'different-data'
        },
        {
          'name': 'start',
          'type': 'Number',
          'defaultValue': '该属性的默认值为 1',
          'desc': { 'zh-CN': '设置步骤条序号起始值', 'en-US': 'Set the start step sequence number.' },
          'demoId': 'set-start-value'
        },
        {
          'name': 'space',
          'type': 'String， Numer',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置时间线节点的宽度, 取值为数字、带长度单位数值与百分比，数字会默认以px为长度单位。',
            'en-US': 'Set the width of the step bar'
          },
          'demoId': 'set-step-width'
        },
        {
          'name': 'active',
          'type': 'Number',
          'defaultValue': '该属性的默认值为 -1',
          'desc': { 'zh-CN': '设置步骤条的选中步骤', 'en-US': 'Set the selected step of the step bar' },
          'demoId': 'basic-usage'
        },
        {
          'name': 'reverse',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '设置竖向步骤条的方向', 'en-US': 'Set the direction of the vertical step bar' },
          'demoId': 'vertical-step-reverse'
        }
      ],
      'events': [
        {
          'name': 'click',
          'type': 'Function(arg1,arg2)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '节点的点击事件;arguments: arg1:点击节点的下标, arg2:{ name: 节点名称, time: 时间 }',
            'en-US':
              'Click event of a node. arguments: arg1: click the subscript of a node, arg2: {name: node name, time: time}'
          },
          'demoId': 'vertical-step-reverse1'
        }
      ],
      'slots': [
        {
          'name': 'top',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '定义步骤条顶部', 'en-US': 'Define the top of the step bar' },
          'demoId': 'custom-normal-step'
        },
        {
          'name': 'bottom',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '定义步骤条底部', 'en-US': 'Define the bottom of the step bar' },
          'demoId': 'custom-normal-step'
        },
        {
          'name': 'left',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '定义步骤条左侧内容', 'en-US': 'Define the content on the left of the step bar.' },
          'demoId': 'custom-vertical-step'
        },
        {
          'name': 'right',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '定义步骤条右侧内容', 'en-US': 'Define the content on the right of the step bar' },
          'demoId': 'custom-vertical-step'
        }
      ]
    }
  ]
}
