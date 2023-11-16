export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN':
          '通过<code>data</code>设置每个节点的标题、日期、和状态；<code>milestones-status</code>设置每种状态对应的颜色值；前者的<code>status</code>字段对应后者的键值。',
        'en-US':
          'Set the title, date, and status of each node through<code>data</code>; <code>Milestones status</code>Set the color values corresponding to each state; The<code>status</code>field of the former corresponds to the key value of the latter.'
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'flag-before',
      'name': { 'zh-CN': '旗子数据来源', 'en-US': 'Flag data source' },
      'desc': {
        'zh-CN':
          '通过<code>flag-before</code>设置旗子的数据来源，是来自前面还是后面的节点，默认为<code>false</code>取后面节点上的数据。',
        'en-US':
          'Set the data source of the flag through<code>flag-before</code>, whether it comes from the preceding or following nodes. The default value is<code>false</code>to retrieve the data from the following nodes.'
      },
      'codeFiles': ['flag-before.vue']
    },
    {
      'demoId': 'line-style',
      'name': { 'zh-CN': '线条颜色和间距', 'en-US': 'Line color and Space' },
      'desc': {
        'zh-CN': '通过<code>line-style</code>设置线条颜色，<code>space</code>设置节点间距。',
        'en-US': 'Set the line color and node spacing through<code>line-style</code>.'
      },
      'codeFiles': ['line-style.vue']
    },
    {
      'demoId': 'show-number',
      'name': {
        'zh-CN': '序号',
        'en-US': 'Sequence number'
      },
      'desc': {
        'zh-CN':
          '通过<code>show-number</code>设置未完成状态的节点是否显示序号；默认为<code>true</code>显示；<code>start</code>设置节点的序号起始值，默认为<code>-1</code>。',
        'en-US':
          'Set whether nodes in incomplete status display serial numbers through<code>show-number</code>; Default to display as<code>true</code>;<code>start</code>Set the starting value of the nodes sequence number, which defaults to<code>-1</code>.'
      },
      'codeFiles': ['show-number.vue']
    },
    {
      'demoId': 'solid-style',
      'name': { 'zh-CN': '实心显示', 'en-US': 'Completed node solid display' },
      'desc': {
        'zh-CN':
          '通过<code>solid</code>设置已完成状态的节点是否实心显示，实心显示则光晕不透明；默认为<code>false</code>不显示。',
        'en-US':
          'Set whether nodes in the completed state are displayed as solid through<code>solid</code>, and if solid is displayed, the halo is opaque; The default is not displayed as<code>false</code>.'
      },
      'codeFiles': ['solid-style.vue']
    },
    {
      'demoId': 'data-field-mapping',
      'name': { 'zh-CN': '数据字段映射', 'en-US': 'Data Field Mapping' },
      'desc': {
        'zh-CN': `自定义<code>data</code>属性的键名和键值：<br/>
          <div class="tip custom-block"><p class="custom-block-title">
          通过<code>completed-field</code>设置完成状态对应的键值，默认为<code>completed</code>；<br/>
          <code>flag-field</code>设置旗子信息数组对应的键名，默认为<code>flags</code>；<br/>
          <code>flag-content-field</code>设置旗子描述对应的键名，默认为<code>content</code>；<br/>
          <code>flag-name-field</code>设置旗子标题对应的键名，默认为<code>name</code>；<br/>
          <code>flag-status-field</code>设置旗子状态对应的键名，默认为<code>status</code>；<br/>
          <code>name-field</code>设置节点名称对应的键名，默认为<code>name</code>；<br/>
          <code>status-field</code>设置节点状态对应的键名，默认为<code>status</code>；<br/>
          <code>time-field</code>设置节点时间对应的键名，默认为<code>time</code>。</p></div>`,
        'en-US': `Customize the key names and values of<code>data</code>attributes:<br/>
          <div class="tip custom-block"><p class="custom-block-title">
          Set the key value corresponding to the completion status through<code>completed-field</code>, which defaults to<code>completed</code>;<br/>
          <code>flag-field</code>Set the key name corresponding to the flag information array, which defaults to<code>flags</code>;<br/>
          <code>flag-content-field</code>Set the key name corresponding to the flag description, which defaults to<code>content</code>;<br/>
          <code>flag-name-field</code>Set the key name corresponding to the flag subtitle, which defaults to<code>name</code>;<br/>
          <code>flag-status-field</code>Set the key name corresponding to the flag state, which defaults to<code>status</code>;<br/>
          <code>name-field</code>Set the key name corresponding to the node name, which defaults to<code>name</code>;<br/>
          <code>status-field</code>Set the key name corresponding to the node state, which defaults to<code>status</code>;<br/>
          <code>time-field</code>Set the key name corresponding to the node time, which defaults to<code>time</code>.</p> </div>`
      },
      'codeFiles': ['data-field-mapping.vue']
    },
    {
      'demoId': 'custom-icon-slot',
      'name': { 'zh-CN': '定义图标', 'en-US': 'Custom Node Icons' },
      'desc': {
        'zh-CN': '通过<code>icon</code>作用域插槽自定义节点的图标。',
        'en-US': 'Customize the node icon through the<code>icon</code>scope slot.'
      },
      'codeFiles': ['custom-icon-slot.vue']
    },
    {
      'demoId': 'custom-bottom',
      'name': { 'zh-CN': '定义下方内容', 'en-US': 'Content under a customized node' },
      'desc': {
        'zh-CN': '通过<code>bottom</code>作用域插槽自定义节点下方的内容。',
        'en-US': 'Customize the content below the node through the<code>bottom</code>scope slot.'
      },
      'codeFiles': ['custom-bottom.vue']
    },
    {
      'demoId': 'custom-top',
      'name': { 'zh-CN': '定义上方内容', 'en-US': 'Content above the customized node' },
      'desc': {
        'zh-CN': '通过<code>top</code>作用域插槽自定义节点上方的内容。',
        'en-US': 'Customize the content above the node through the<code>top</code>scope slot.'
      },
      'codeFiles': ['custom-top.vue']
    },
    {
      'demoId': 'custom-flag',
      'name': { 'zh-CN': '定义旗帜内容', 'en-US': 'Custom Flag Content' },
      'desc': {
        'zh-CN': '通过<code>flag</code>作用域插槽自定义节点旗子的内容。',
        'en-US': 'Customize the content of node flags through the<code>flag</code>scope slot.'
      },
      'codeFiles': ['custom-flag.vue']
    },
    {
      'demoId': 'milestone-events',
      'name': { 'zh-CN': '事件', 'en-US': 'Event' },
      'desc': {
        'zh-CN': '通过<code>click</code>监听单击节点事件，<code>flag-click</code>监听单击旗子事件。',
        'en-US':
          'Listen for click node events through<code>click</code>, and<code>flag-click</code>listen for click flag sub events.'
      },
      'codeFiles': ['milestone-events.vue']
    }
  ],
  apis: [
    {
      'name': 'milestone',
      'type': 'component',
      'props': [
        {
          'name': 'completed-field',
          'type': 'string',
          'defaultValue': 'completed',
          'desc': {
            'zh-CN': '设置节点完成状态对应的键值',
            'en-US': 'Set the key values corresponding to the node completion status'
          },
          'demoId': 'data-field-mapping'
        },
        {
          'name': 'data',
          'type': 'object | array',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置步骤条的数据',
            'en-US': 'Set the step bar data'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'flag-before',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '设置旗子的数据是取自前面还是后面的节点，默认取后面节点上的数据',
            'en-US':
              'Set whether the flag data is taken from the preceding or following nodes, and default to taking data from the following nodes'
          },
          'demoId': 'flag-before'
        },
        {
          'name': 'flag-content-field',
          'type': 'string',
          'defaultValue': 'content',
          'desc': {
            'zh-CN': '设置旗子内容描述部分对应的键名',
            'en-US': 'Set the key name corresponding to the flag content description section'
          },
          'demoId': 'data-field-mapping'
        },
        {
          'name': 'flag-field',
          'type': 'string',
          'defaultValue': 'flags',
          'desc': {
            'zh-CN': '设置旗子信息数组对应的键名',
            'en-US': 'Set the key name corresponding to the flag information array'
          },
          'demoId': 'data-field-mapping'
        },
        {
          'name': 'flag-name-field',
          'type': 'string',
          'defaultValue': 'name',
          'desc': {
            'zh-CN': '设置旗子标题对应的键名',
            'en-US': 'Set the key name corresponding to the flag title'
          },
          'demoId': 'data-field-mapping'
        },
        {
          'name': 'flag-status-field',
          'type': 'string',
          'defaultValue': 'status',
          'desc': {
            'zh-CN': '设置旗子状态对应的键名',
            'en-US': 'Set the key name corresponding to the flag state'
          },
          'demoId': 'data-field-mapping'
        },
        {
          'name': 'line-style',
          'type': 'number | string',
          'defaultValue': '1',
          'desc': {
            'zh-CN': `线条颜色取值模式为数字时，只有1和2可选；如果为字符串则需传入 16 进制颜色值<br />
              设置为数字 1 时只有完成与未完成两种状态的线条颜色，完成状态的线条颜色与 milestones-status 定义的 completed 状态的颜色一致<br />
              设置为数字 2 时线条颜色根随节点状态颜色<br />
              当设置为字符串形式的 16 进制色值时，如：#1890FF 时，线条不区分状态，全部统一为所设置的颜色`,
            'en-US': `When the line color value mode is numeric, only 1 and 2 can be selected; If it is a string, the hexadecimal color value needs to be passed in<br/>
              When set to the number 1, there are only two types of line colors: complete and incomplete. The color of the completed state line is consistent with the color of the completed state defined by milestone status<br/>
              When set to number 2, the root color of the line follows the node state color<br/>
              When set to a hexadecimal color value in string form, such as # 1890FF, the lines do not differentiate between states and are all unified to the set color`
          },
          'demoId': 'line-style'
        },
        {
          'name': 'milestones-status',
          'type': 'IStatus',
          'typeAnchorName': 'IStatus',
          'defaultValue': '',
          'desc': {
            'zh-CN': '定义状态与颜色对应关系，颜色取值须是 16 进制颜色值或组件库的主题变量',
            'en-US':
              'Define the correspondence between state and color, and the color value must be a hexadecimal color value or a theme variable from the component library'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'name-field',
          'type': 'string',
          'defaultValue': 'name',
          'desc': {
            'zh-CN': '设置节点名称对应的键名',
            'en-US': 'Set the key name corresponding to the node name'
          },
          'demoId': 'data-field-mapping'
        },
        {
          'name': 'show-number',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '设置未完成状态的节点是否显示序号',
            'en-US': 'Set whether nodes in incomplete status display serial numbers'
          },
          'demoId': 'show-number'
        },
        {
          'name': 'solid',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '在里程碑模式下，设置已经完成节点显示为实心，且光晕不透明',
            'en-US': 'In milestone mode, set the completed node to be displayed as solid and the halo is opaque'
          },
          'demoId': 'solid-style'
        },
        {
          'name': 'space',
          'type': 'number',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置相邻节点的间距，即节点间线条的长度',
            'en-US': 'Set the spacing between adjacent nodes, i.e. the length of lines between nodes'
          },
          'demoId': 'line-style'
        },
        {
          'name': 'start',
          'type': 'number',
          'defaultValue': '-1',
          'desc': {
            'zh-CN': '设置节点的序号起始值，从首个节点开始计算',
            'en-US': 'Set the starting value of the nodes sequence number, starting from the first node'
          },
          'demoId': 'show-number'
        },
        {
          'name': 'status-field',
          'type': 'string',
          'defaultValue': 'status',
          'desc': {
            'zh-CN': '设置节点状态对应的键名',
            'en-US': 'Set the key name corresponding to the node state'
          },
          'demoId': 'data-field-mapping'
        },
        {
          'name': 'time-field',
          'type': 'string',
          'defaultValue': 'time',
          'desc': {
            'zh-CN': '设置节点时间信息对应的键名',
            'en-US': 'Set the key name corresponding to node time information'
          },
          'demoId': 'data-field-mapping'
        }
      ],
      'events': [
        {
          'name': 'click',
          'type': '(index: number, node: object) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '节点的点击事件，参数（index:节点索引, node：节点数据信息）',
            'en-US': 'Node click event (parameter) (index: node index, node: node data information)'
          },
          'demoId': 'milestone-events'
        },
        {
          'name': 'flagclick',
          'type': '(index: number, node: object) => void',
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
          'type': '(index: number, node: object) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '旗子的点击事件，参数（index:旗子索引, node：旗子数据信息）',
            'en-US': 'Flag click event, parameters (index: flag index, node: data information of flag)'
          },
          'demoId': 'milestone-events'
        }
      ],
      'slots': [
        {
          'name': 'bottom',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '节点下方内容', 'en-US': 'Content under a node' },
          'demoId': 'custom-bottom'
        },
        {
          'name': 'flag',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '旗帜内容', 'en-US': 'Flag Content' },
          'demoId': 'custom-flag'
        },
        {
          'name': 'icon',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '节点图标', 'en-US': 'Node icon' },
          'demoId': 'custom-icon-slot'
        },
        {
          'name': 'top',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '节点上方内容', 'en-US': 'Content above the node' },
          'demoId': 'custom-top'
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
    }
  ]
}
