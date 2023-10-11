export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'data-source',
      'name': { 'zh-CN': '数据源', 'en-US': 'Data Source' },
      'desc': {
        'zh-CN': '<p>通过 <code>data</code> 属性设置里程碑数据。</p>\n',
        'en-US': '<p>Set milestone data through the <code>data</code> attribute. </p>\n'
      },
      'codeFiles': ['data-source.vue']
    },
    {
      'demoId': 'data-field-mapping',
      'name': { 'zh-CN': '数据字段映射', 'en-US': 'Data Field Mapping' },
      'desc': {
        'zh-CN':
          '<div class="tip custom-block"><p class="custom-block-title">数据字段映射属性说明</p>\n<p><code>completed-field</code>：设置里程碑完成状态对应的取值，默认为 <code>completed</code>\n<code>flag-content-field</code>：设置节点旗子数据中描述对应的字段名，默认为 <code>content</code>\n<code>flag-field</code>：设置节点信息中旗子数据所在字段名，默认为 <code>flags</code>\n<code>flag-name-field</code>：设置节点旗子数据中名称对应的字段名，默认为 <code>name</code>\n<code>flag-status-field</code>：设置节点旗子数据中状态对应的字段名，默认为 <code>status</code>\n<code>name-field</code>：设置节点信息中名称对应的字段名，默认为 <code>name</code>\n<code>status-field</code>：设置数据状态对应的字段名，默认为 <code>status</code>\n<code>time-field</code>：设置节点时间信息对应的字段名，默认为 <code>time</code></p>\n</div>\n',
        'en-US':
          '<div class="tip custom-block"><p class="custom-block-title"> Data Field Mapping Attribute Description </p>\n<p><code>completed-field</code>: Set the value corresponding to the milestone completion status. The default value is <code>completed</code>\n<code>flag-content-field</code>: Set the field name corresponding to the description in the node flag data. The default value is <code>content</code>\n<code>flag-field</code>: Set the field name of the node flag data. The default value is <code>flags</code>\n<code>flag-name-field</code>. Set the field name corresponding to the name in the node flag data. The default value is <code>name</code>\n<code>flag-status-field</code>: Set the field name corresponding to the status in the node flag data. The default value is <code>status</code>\n<code>name-field</code>: Set the field name corresponding to the name in the node information. The default value is <code>name</code>\n<code>status-field</code>: Set the field name corresponding to the data status. The default value is <code>status</code>\n<code>time-field</code>. Field name corresponding to the node time information. The default value is <code>time</code></p>\n</div>\n'
      },
      'codeFiles': ['data-field-mapping.vue']
    },
    {
      'demoId': 'flag-before',
      'name': { 'zh-CN': '旗帜数据来源前面节点', 'en-US': 'Flag data source node' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>flag-before</code> 可设置里程碑上活动（即旗子）上的数据从前面还是后面节点上获取，默认为 <code>false</code> 取后面节点上的数据。</p>\n',
        'en-US':
          '<p>You can use <code>flag-before</code> to set whether the data of the activity (i.e. flag) on the milestone is obtained from the previous node or the subsequent node. The default value is <code>false</code> to obtain the data of the subsequent node. </p>\n'
      },
      'codeFiles': ['flag-before.vue']
    },
    {
      'demoId': 'line-style',
      'name': { 'zh-CN': '进度条颜色', 'en-US': 'Progress bar color' },
      'desc': {
        'zh-CN': '<p>通过 <code>line-style</code> 属性设置线条颜色。</p>\n',
        'en-US': '<p>Sets the line color through the <code>line-style</code> attribute. </p>\n'
      },
      'codeFiles': ['line-style.vue']
    },
    {
      'demoId': 'milestones-status',
      'name': { 'zh-CN': '状态与颜色对应关系', 'en-US': 'Mapping Between Status and Color' },
      'desc': {
        'zh-CN':
          '<p><code>milestones-status</code> 属性对象中，键对应 <code>data</code> 属性的数据中的 <code>status</code> 字段，然后控制不同状态与颜色的对应关系。</p>\n',
        'en-US':
          'In the <p><code>milestones-status</code> attribute object, the key corresponds to the <code>status</code> field in the data of the <code>data</code> attribute, and then controls the mapping between different states and colors. </p>\n'
      },
      'codeFiles': ['milestones-status.vue']
    },
    {
      'demoId': 'show-number',
      'name': {
        'zh-CN': '取消未完成状态序号显示',
        'en-US': 'Cancel the display of the sequence number in the unfinished state.'
      },
      'desc': {
        'zh-CN': '<p>设置 <code>show-number</code> 为 false 后，里程碑未完成的节点上将不显示序号，默认为 true 。</p>\n',
        'en-US':
          '<p>After <code>show-number</code> is set to false, the sequence number is not displayed on the node where the milestone is not completed. The default value is true. </p>\n'
      },
      'codeFiles': ['show-number.vue']
    },
    {
      'demoId': 'solid-style',
      'name': { 'zh-CN': '已完成节点实心显示', 'en-US': 'Completed node solid display' },
      'desc': {
        'zh-CN':
          '<p>通过设置 <code>solid</code> 属性为 true 可设置已经完成节点显示为实心，且光晕不透明，默认为 false 。</p>\n',
        'en-US':
          '<p>You can set the <code>solid</code> attribute to true to set the completed node to be displayed as solid and the halo is opaque. The default value is false. </p>\n'
      },
      'codeFiles': ['solid-style.vue']
    },
    {
      'demoId': 'milestone-space',
      'name': { 'zh-CN': '宽度', 'en-US': 'Width' },
      'desc': {
        'zh-CN': '<p>通过 <code>space</code> 属性设置步骤条的宽度。</p>\n',
        'en-US': '<p>Use the <code>space</code> attribute to set the width of the step bar. </p>\n'
      },
      'codeFiles': ['milestone-space.vue']
    },
    {
      'demoId': 'start-index',
      'name': { 'zh-CN': '序号起始值', 'en-US': 'Start sequence number' },
      'desc': {
        'zh-CN': '<p>通过 <code>start</code> 属性设置里程碑节点的序号起始值，默认为 -1 。</p>\n',
        'en-US':
          '<p>Set the start sequence number of the milestone node through the <code>start</code> attribute. The default value is - 1. </p>\n'
      },
      'codeFiles': ['start-index.vue']
    },
    {
      'demoId': 'custom-icon-slot',
      'name': { 'zh-CN': '自定义节点图标', 'en-US': 'Custom Node Icons' },
      'desc': {
        'zh-CN': '<p>通过 <code>icon</code> 作用域插槽可自定义图标。</p>\n',
        'en-US': '<p>The icon can be customized through the <code>icon</code>scope slot. </p>\n'
      },
      'codeFiles': ['custom-icon-slot.vue']
    },
    {
      'demoId': 'custom-bottom',
      'name': { 'zh-CN': '自定义节点下方内容', 'en-US': 'Content under a customized node' },
      'desc': {
        'zh-CN': '<p>通过 <code>bottom</code> 作用域插槽可自定义节点下方的内容。</p>\n',
        'en-US': '<p>You can customize the content below a node through the <code>bottom</code> scope slot. </p>\n'
      },
      'codeFiles': ['custom-bottom.vue']
    },
    {
      'demoId': 'custom-top',
      'name': { 'zh-CN': '自定义节点上方内容', 'en-US': 'Content above the customized node' },
      'desc': {
        'zh-CN': '<p>通过 <code>top</code> 作用域插槽可自定义节点上方的内容。</p>\n',
        'en-US': '<p>The <code>top</code> scope slot allows you to customize the content above the node. </p>\n'
      },
      'codeFiles': ['custom-top.vue']
    },
    {
      'demoId': 'custom-flag',
      'name': { 'zh-CN': '自定义旗帜内容', 'en-US': 'Custom Flag Content' },
      'desc': {
        'zh-CN': '<p>通过 <code>flag</code> 作用域插槽可自定义节点旗帜的内容。</p>\n',
        'en-US': '<p>You can customize the content of the node flag through the <code>flag</code> scope slot. </p>\n'
      },
      'codeFiles': ['custom-flag.vue']
    },
    {
      'demoId': 'milestone-events',
      'name': { 'zh-CN': '事件', 'en-US': 'Event' },
      'desc': {
        'zh-CN':
          '<p>单击里程碑节点时触发 <code>click</code> 事件，参数（index:节点索引, node：节点数据信息）。单击里程碑旗帜时触发 <code>flag-click</code> 事件，参数（index:节点内旗子的索引, node：节点上旗子的数据信息）。</p>\n',
        'en-US':
          '<p>The <code>click</code> event is triggered when a milestone node is clicked. Parameter: (index: node index; node: node data information). The <code>flag-click</code> event is triggered when a milestone flag is clicked. (index: index of the flag on the node; node: data information of the flag on the node). </p>\n'
      },
      'codeFiles': ['milestone-events.vue']
    }
  ],
  apis: [
    {
      'name': 'milestone',
      'type': 'component',
      'properties': [
        {
          'name': 'completed-field',
          'type': 'string',
          'defaultValue': '该属性的默认值为 completed',
          'desc': {
            'zh-CN': "设置里程碑完成状态对应的取值，默认为 'completed'",
            'en-US': "Set the milestone completion status. The default value is'completed'"
          },
          'demoId': 'data-field-mapping'
        },
        {
          'name': 'data',
          'type': 'object , Array',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置步骤条的数据 。;设置步骤条的数据 。',
            'en-US': 'Set the step bar data. ;Set the data of the step bar.'
          },
          'demoId': 'data-source'
        },
        {
          'name': 'flag-before',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '设置里程碑上活动即旗子上的数据从前面还是后面节点上获取，默认为 false 取后面节点上的数据。',
            'en-US':
              'Set whether the data on the flag of an activity on a milestone is obtained from the previous node or the next node. The default value is false.'
          },
          'demoId': 'flag-before'
        },
        {
          'name': 'flag-content-field',
          'type': 'string',
          'defaultValue': '该属性的默认值为 content',
          'desc': {
            'zh-CN': "设置节点旗子数据中描述对应的字段名，默认为 'content'",
            'en-US':
              "Set the field name corresponding to the description in the node flag data. The default value is'content'"
          },
          'demoId': 'data-field-mapping'
        },
        {
          'name': 'flag-status-field',
          'type': 'string',
          'defaultValue': '该属性的默认值为 status',
          'desc': {
            'zh-CN': "设置节点旗子数据中状态对应的字段名，默认为 'status'",
            'en-US': "Name of the field corresponding to the status in the node flag data. The default value is'status'"
          },
          'demoId': 'data-field-mapping'
        },
        {
          'name': 'flag-field',
          'type': 'string',
          'defaultValue': '该属性的默认值为 flags',
          'desc': {
            'zh-CN': "设置节点信息中旗子数据所在字段名，默认为 'flags'",
            'en-US':
              'Set the name of the field where the flag data is located in the node information. The default value is flags.'
          },
          'demoId': 'data-field-mapping'
        },
        {
          'name': 'flag-name-field',
          'type': 'string',
          'defaultValue': '该属性的默认值为 name',
          'desc': {
            'zh-CN': "设置节点旗子数据中名称对应的字段名，默认为 'name'",
            'en-US': "Set the field name corresponding to the name in the node flag data. The default value is'name'"
          },
          'demoId': 'data-field-mapping'
        },
        {
          'name': 'line-style',
          'type': 'string , number',
          'defaultValue': '该属性的默认值为 1',
          'desc': {
            'zh-CN':
              '在里程碑模式下，设置线条颜色取值模式，默认为1，采用两种颜色区分完成与未完成状态，完成状态的线条颜色与milestonesStatus定义的完成颜色一致。\n设置为 2 时线条颜色根随节点状态。\n设置为 16进制的色值 如：#1890ff 时，线条不区分状态，全部为所设置的颜色。',
            'en-US':
              'In milestone mode, set the line color value mode. The default value is 1. Two colors are used to distinguish the completed state from the uncompleted state. The line color of the completed state is the same as the completion color defined by milestonesStatus. \nIf this parameter is set to 2, the line color is based on the node status. \nIf the color value is set to a hexadecimal value, for example, #1890ff, the line color is the configured color regardless of status.'
          },
          'demoId': 'line-style'
        },
        {
          'name': 'milestones-status',
          'type': 'object',
          'defaultValue': '该属性的默认值为 Function',
          'desc': {
            'zh-CN': "定义里程碑的状态与颜色对应关系，颜色取值必需为 16进制 如：{completed: '#1890FF'}",
            'en-US':
              "Define the mapping between the milestone status and color. The color must be a hexadecimal number, for example, {completed:'#1890FF'}"
          },
          'demoId': 'milestones-status'
        },
        {
          'name': 'name-field',
          'type': 'string',
          'defaultValue': '该属性的默认值为 name',
          'desc': {
            'zh-CN': "设置节点信息中名称对应的字段名，默认为 'name'",
            'en-US': "Set the field name corresponding to the name in the node information. The default value is'name'"
          },
          'demoId': 'data-field-mapping'
        },
        {
          'name': 'show-number',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': {
            'zh-CN': '设置未完成的状态是否显示序号，默认为 true',
            'en-US': 'Whether to display sequence numbers for unfinished states. The default value is true.'
          },
          'demoId': 'show-number'
        },
        {
          'name': 'solid',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '在里程碑模式下，设置已经完成节点显示为实心，且光晕不透明，默认为 false',
            'en-US':
              'In milestone mode, set the completed node to be displayed as solid and the halo is opaque. The default value is false.'
          },
          'demoId': 'solid-style'
        },
        {
          'name': 'space',
          'type': 'number',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置步骤条的宽度。', 'en-US': 'Set the width of the step bar.' },
          'demoId': 'milestone-space'
        },
        {
          'name': 'start',
          'type': 'number',
          'defaultValue': '该属性的默认值为 -1',
          'desc': {
            'zh-CN': '设置步骤条序号起始值，默认为 -1 。',
            'en-US': 'Set the start step sequence number. The default value is -1.'
          },
          'demoId': 'start-index'
        },
        {
          'name': 'status-field',
          'type': 'string',
          'defaultValue': '该属性的默认值为 status',
          'desc': {
            'zh-CN': "设置数据状态对应的字段名，默认为 'status'",
            'en-US': "Name of the field corresponding to the data status. The default value is'status'"
          },
          'demoId': 'data-field-mapping'
        },
        {
          'name': 'time-field',
          'type': 'string',
          'defaultValue': '该属性的默认值为 time',
          'desc': {
            'zh-CN': "设置节点时间信息对应的字段名，默认为 'time'",
            'en-US': "Name of the field corresponding to the node time information. The default value is'time'"
          },
          'demoId': 'data-field-mapping'
        }
      ],
      'events': [
        {
          'name': 'click',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '节点的点击事件，参数（index:节点索引, node：节点数据信息）',
            'en-US': 'Node click event (parameter) (index: node index, node: node data information)'
          },
          'demoId': 'milestone-events'
        },
        {
          'name': 'flagclick',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '[deprecated v3.5.0废弃，v3.17.0移除；移除原因：命名规范，建议使用flag-click代替]',
            'en-US':
              '[deprecated in v3.5.0 and removed in v3.17.0; Reason for removal: It is recommended that flag-click be used instead of flag-click]'
          },
          'demoId': 'milestone-events'
        },
        {
          'name': 'flag-click',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '里程碑模式下，活动旗子的点击事件，参数（index:节点内旗子的索引, node：节点上旗子的数据信息）',
            'en-US':
              'In milestone mode, this parameter indicates the click event of the activity flag. (index: index of the flag on the node; node: data information of the flag on the node)'
          },
          'demoId': 'milestone-events'
        }
      ],
      'slots': [
        {
          'name': 'top',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '节点上方内容', 'en-US': 'Content above the node' },
          'demoId': 'custom-top'
        },
        {
          'name': 'flag',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '旗帜内容', 'en-US': 'Flag Content' },
          'demoId': 'custom-flag'
        },
        {
          'name': 'bottom',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '节点下方内容', 'en-US': 'Content under a node' },
          'demoId': 'custom-bottom'
        },
        {
          'name': 'icon',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '节点图标', 'en-US': 'Node icon' },
          'demoId': 'custom-icon-slot'
        }
      ]
    }
  ]
}
