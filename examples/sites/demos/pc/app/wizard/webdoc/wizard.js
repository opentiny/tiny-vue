export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'base-flow',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN':
          '通过<code>base-flow</code>设置基本流程图模式，以节点图示的方式，显示流程节点及节点间关系，节点的信息只有节点名称和状态。',
        'en-US':
          'Sets the basic flowchart mode through the<code>base-flow</code>attribute. The process nodes and relationships between nodes are displayed in node diagrams. The node information is only the node name and status. '
      },
      'codeFiles': ['base-flow.vue']
    },
    {
      'demoId': 'page-guide',
      'name': { 'zh-CN': '页向导流程图', 'en-US': 'Page Wizard Flowchart' },
      'desc': {
        'zh-CN':
          '通过<code>page-guide</code>设置页向导流程图模式，用于导航当前页面与上一页面、下一页面的前后关系，包括流程图区域、页面展示区域、功能按钮区域。',
        'en-US':
          'The<code>page-guide</code>attribute is used to set the page wizard flow chart mode, which is used to navigate the relationship between the current page and the previous and next pages, including the flow chart area, page display area, and function button area. '
      },
      'codeFiles': ['page-guide.vue']
    },
    {
      'demoId': 'vertical',
      'name': { 'zh-CN': '垂直流程图', 'en-US': 'Vertical Flowchart' },
      'desc': {
        'zh-CN':
          '通过<code>vertical</code>设置垂直流程图模式，以节点图示的方式竖向显示流程节点及节点间关系，节点的信息包含节点名称、状态、完成时间、用户。',
        'en-US':
          'The<code>vertical</code>attribute is used to set the vertical flowchart mode. Process nodes and relationships between nodes are displayed vertically in node diagram mode. Node information includes the node name, status, completion time, and user. '
      },
      'codeFiles': ['vertical.vue']
    },
    {
      'demoId': 'time-line-flow',
      'name': { 'zh-CN': '时间线流程图', 'en-US': 'Timeline Flowchart' },
      'desc': {
        'zh-CN':
          '通过<code>time-line-flow</code>设置时间线流程图，通过<code>time-icon</code>自定义时间图标。以时间点的方式竖向显示流程节点处理信息，包括节点名称、状态、完成时间、用户。',
        'en-US':
          'Set the timeline flowchart through the<code>time-line-flow</code>attribute, and customize the time icon through the<code>time-icon</code>attribute. Process node processing information is displayed vertically by time point, including the node name, status, completion time, and user. '
      },
      'codeFiles': ['time-line-flow.vue']
    },
    {
      'demoId': 'slot-step-button',
      'name': { 'zh-CN': '步骤插槽', 'en-US': 'Step Slot' },
      'desc': {
        'zh-CN': '页向导流程图里通过<code>stepbutton</code>插槽可以自定义步骤按钮或内容。',
        'en-US':
          'The<code>stepbutton</code>slot can be used to customize step buttons or content in the page wizard flowchart. '
      },
      'codeFiles': ['slot-step-button.vue']
    },
    {
      'demoId': 'slot-base',
      'name': { 'zh-CN': '基本插槽', 'en-US': 'Basic slot' },
      'desc': {
        'zh-CN': '通过<code>base</code>配置基本内容。',
        'en-US': 'Configure the basic content through<code>base</code>. '
      },
      'codeFiles': ['slot-base.vue']
    }
  ],
  apis: [
    {
      'name': 'wizard',
      'type': 'component',
      'properties': [
        {
          'name': 'base-flow',
          'type': 'boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置流程图为基本流程图模式',
            'en-US': 'Set the flow chart to the basic flow chart mode.'
          },
          'demoId': 'base-flow'
        },
        {
          'name': 'data',
          'type': 'Array',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置流程图的数据', 'en-US': 'Setting Flowchart Data' },
          'demoId': 'base-flow'
        },
        {
          'name': 'page-guide',
          'type': 'boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置流程图为页向导流程图，配合 base-flow 属性使用',
            'en-US':
              'Set the flowchart to a page wizard flowchart, which is used together with the base-flow attribute.'
          },
          'demoId': 'page-guide'
        },
        {
          'name': 'time-line-flow',
          'type': 'boolean',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置流程图为时间线流程图', 'en-US': 'Set the flowchart to a timeline flowchart.' },
          'demoId': 'time-line-flow'
        },
        {
          'name': 'vertical',
          'type': 'boolean',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置流程图为垂直流程图', 'en-US': 'Set the flowchart to a vertical flowchart.' },
          'demoId': 'vertical'
        }
      ],
      'events': [],
      'slots': [
        {
          'name': 'base',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '基本流程图插槽', 'en-US': 'Basic Flowchart Slot' },
          'demoId': 'slot-base'
        },
        {
          'name': 'stepbutton',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '页向导流程图按钮插槽', 'en-US': 'Page Wizard Flowchart Button Slot' },
          'demoId': 'slot-step-button'
        }
      ]
    }
  ]
}
