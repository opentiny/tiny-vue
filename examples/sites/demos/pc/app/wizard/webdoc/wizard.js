export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN':
          '通过 <code>data</code> 设置流程节点信息，如：设置节点名称和状态；<code>node-click</code> 监听节点点击事件。',
        'en-US':
          'Set process node information through<code>data</code>, such as setting node name and status; <code>node-click</code> Listen for node click events.'
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'page-guide',
      'name': { 'zh-CN': '页向导模式', 'en-US': 'Page Wizard Mode' },
      'desc': {
        'zh-CN':
          '通过 <code>page-guide</code> 设置页向导模式，包含流程图区域、页面展示区域、功能按钮区域，用于导航当前页面与上一页面、下一页面的前后关系。',
        'en-US':
          'Set the page wizard mode through<code>page-guide</code>, including the flowchart area, page display area, and function button area, to navigate the relationship between the current page and the previous or next page.'
      },
      'codeFiles': ['page-guide.vue']
    },
    {
      'demoId': 'vertical',
      'name': { 'zh-CN': '垂直模式', 'en-US': 'Vertical Mode' },
      'desc': {
        'zh-CN':
          '通过 <code>vertical</code> 设置垂直模式，竖向显示流程节点信息及节点间关系，节点信息包含节点名称、内容、状态、完成时间。',
        'en-US':
          'Set vertical mode through<code>vertical</code>to vertically display process node information and relationships between nodes. Node information includes node name, content, status, and completion time.'
      },
      'codeFiles': ['vertical.vue']
    },
    {
      'demoId': 'time-line-flow',
      'name': { 'zh-CN': '时间线', 'en-US': 'Timeline' },
      'desc': {
        'zh-CN':
          '通过 <code>time-line-flow</code> 设置时间线，以时间点的方式竖向显示流程节点处理信息，包含节点名称、状态、完成时间、用户信息。',
        'en-US':
          'Set a timeline through<code>time-line-flow</code>to vertically display process node processing information in a time point manner, including node name, status, completion time, and user information.'
      },
      'codeFiles': ['time-line-flow.vue']
    },
    {
      'demoId': 'slot-base',
      'name': { 'zh-CN': '基本插槽', 'en-US': 'Basic slot' },
      'desc': {
        'zh-CN': '通过 <code>base</code> 作用域插槽自定义节点的名称。',
        'en-US': 'Customize the name of the node through the<code>base</code>scope slot.'
      },
      'codeFiles': ['slot-base.vue']
    },
    {
      'demoId': 'slot-step-button',
      'name': { 'zh-CN': '步骤插槽', 'en-US': 'Step Slot' },
      'desc': {
        'zh-CN': '通过 <code>stepbutton</code> 插槽自定义页向导模式的步骤按钮和内容。',
        'en-US':
          'Customize the step buttons and content of the page wizard mode through the<code>stepbutton</code>slot.'
      },
      'codeFiles': ['slot-step-button.vue']
    },
    {
      'demoId': 'btn-events',
      'name': { 'zh-CN': '按钮事件', 'en-US': 'Button Event' },
      'desc': {
        'zh-CN': `页向导模式下：通过 <code>btn-prev</code> 监听“上一步”按钮点击事件；<br /> 
        <code>btn-next</code> 监听“下一步”按钮点击事件；<br />
        <code>btn-save</code> 监听“保存”按钮点击事件；<br />
        <code>btn-submit</code> 监听“提交”按钮点击事件，流程需要走到最后一步才会显示此按钮。<br />`,
        'en-US': `In page wizard mode: listen for the "Previous" button click event through<code>btn-prev</code><br/>
        <code>btn-next</code>Listen for the "Next" button click event<br/>
        <code>btn-save</code>Listen for the "save" button click event<br/>
        <code>btn-submit</code>Listen for the "submit" button click event, and the process needs to go to the last step to display this button<br/>.`
      },
      'codeFiles': ['btn-events.vue']
    }
  ],
  apis: [
    {
      'name': 'wizard',
      'type': 'component',
      'props': [
        {
          'name': 'data',
          'type': 'IDataItem[]',
          'typeAnchorName': 'IDataItem',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置节点数据', 'en-US': 'Setting Node Data' },
          'demoId': 'basic-usage'
        },
        {
          'name': 'page-guide',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '设置页向导模式',
            'en-US': 'Set Page Wizard Mode'
          },
          'demoId': 'page-guide'
        },
        {
          'name': 'time-line-flow',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '设置时间线', 'en-US': 'Set timeline' },
          'demoId': 'time-line-flow'
        },
        {
          'name': 'vertical',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '设置为垂直模式', 'en-US': 'Set to vertical mode' },
          'demoId': 'vertical'
        }
      ],
      'events': [
        {
          'name': 'btn-next',
          'type': '(datas: IDataItem[]) => void',
          'typeAnchorName': 'IDataItem',
          'desc': {
            'zh-CN': '页向导模式下，点击“下一步”按钮触发的回调事件',
            'en-US': 'Callback event triggered by clicking the "Next" button in page wizard mode'
          },
          'demoId': 'btn-events'
        },
        {
          'name': 'btn-prev',
          'type': '(datas: IDataItem[]) => void',
          'typeAnchorName': 'IDataItem',
          'desc': {
            'zh-CN': '页向导模式下，点击“上一步”按钮触发的回调事件',
            'en-US': 'Callback event triggered by clicking the "Previous" button in page wizard mode'
          },
          'demoId': 'btn-events'
        },
        {
          'name': 'btn-save',
          'type': '(datas: IDataItem[]) => void',
          'typeAnchorName': 'IDataItem',
          'desc': {
            'zh-CN': '页向导模式下，点击“保存”按钮触发的回调事件',
            'en-US': 'Callback event triggered by clicking the "Save" button in page wizard mode'
          },
          'demoId': 'btn-events'
        },
        {
          'name': 'btn-submit',
          'type': '(datas: IDataItem[]) => void',
          'typeAnchorName': 'IDataItem',
          'desc': {
            'zh-CN': '页向导模式下，点击“下一步”导致最后一个节点的状态为 "doing" 时，点击“提交”按钮触发的回调事件',
            'en-US':
              'In page wizard mode, when clicking "Next" causes the status of the last node to be "doing", the callback event triggered by clicking the "Submit" button'
          },
          'demoId': 'btn-events'
        },
        {
          'name': 'node-click',
          'type': '(node: IDataItem, index: number, event: Event) => void',
          'typeAnchorName': 'IDataItem',
          'desc': {
            'zh-CN': '节点点击事件',
            'en-US': 'Node click event'
          },
          'demoId': 'basic-usage'
        }
      ],
      'slots': [
        {
          'name': 'base',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '基本插槽', 'en-US': 'Basic Slot' },
          'demoId': 'slot-base'
        },
        {
          'name': 'stepbutton',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '页向导模式按钮插槽', 'en-US': 'Page Wizard Mode Button Slot' },
          'demoId': 'slot-step-button'
        }
      ]
    }
  ],
  types: [
    {
      name: 'IDataItem',
      type: 'interface',
      code: `
interface IDataItem {
  name: string
  status: string
  showNode?: boolean
  content?: string
  imgUrl?: string
  users?: string
  userName?: string
  roleNumber?: string
  date?: string
  values?: IDataItemValuesItem[]
}

interface IDataItemValuesItem {
  text: string
  value: string
}`
    }
  ]
}
