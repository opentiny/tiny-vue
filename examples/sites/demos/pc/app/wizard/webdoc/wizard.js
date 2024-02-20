export default {
  column: '1',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN':
          '通过 <code>data</code> 设置流程节点信息，如：设置节点名称和状态；<code>node-click</code> 监听节点点击事件。',
        'en-US':
          'Set process node information through<code>data</code>, such as setting node name and status; <code>node-click</code> Listen for node click events.'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'page-guide',
      name: {
        'zh-CN': '页向导模式',
        'en-US': 'Page Wizard Mode'
      },
      desc: {
        'zh-CN':
          '通过 <code>page-guide</code> 设置页向导模式，包含流程图区域、页面展示区域、功能按钮区域，用于导航当前页面与上一页面、下一页面的前后关系。',
        'en-US':
          'Set the page wizard mode through<code>page-guide</code>, including the flowchart area, page display area, and function button area, to navigate the relationship between the current page and the previous or next page.'
      },
      codeFiles: ['page-guide.vue']
    },
    {
      demoId: 'vertical',
      name: {
        'zh-CN': '垂直模式',
        'en-US': 'Vertical Mode'
      },
      desc: {
        'zh-CN':
          '通过 <code>vertical</code> 设置垂直模式，竖向显示流程节点信息及节点间关系，节点信息包含节点名称、内容、状态、完成时间。',
        'en-US':
          'Set vertical mode through<code>vertical</code>to vertically display process node information and relationships between nodes. Node information includes node name, content, status, and completion time.'
      },
      codeFiles: ['vertical.vue']
    },
    {
      demoId: 'time-line-flow',
      name: {
        'zh-CN': '时间线',
        'en-US': 'Timeline'
      },
      desc: {
        'zh-CN':
          '通过 <code>time-line-flow</code> 设置时间线，以时间点的方式竖向显示流程节点处理信息，包含节点名称、状态、完成时间、用户信息。',
        'en-US':
          'Set a timeline through<code>time-line-flow</code>to vertically display process node processing information in a time point manner, including node name, status, completion time, and user information.'
      },
      codeFiles: ['time-line-flow.vue']
    },
    {
      demoId: 'slot-base',
      name: {
        'zh-CN': '基本插槽',
        'en-US': 'Basic slot'
      },
      desc: {
        'zh-CN': '通过 <code>base</code> 作用域插槽自定义节点的名称。',
        'en-US': 'Customize the name of the node through the<code>base</code>scope slot.'
      },
      codeFiles: ['slot-base.vue']
    },
    {
      demoId: 'slot-step-button',
      name: {
        'zh-CN': '步骤插槽',
        'en-US': 'Step Slot'
      },
      desc: {
        'zh-CN': '通过 <code>stepbutton</code> 插槽自定义页向导模式的步骤按钮和内容。',
        'en-US':
          'Customize the step buttons and content of the page wizard mode through the<code>stepbutton</code>slot.'
      },
      codeFiles: ['slot-step-button.vue']
    },
    {
      demoId: 'btn-events',
      name: {
        'zh-CN': '按钮事件',
        'en-US': 'Button Event'
      },
      desc: {
        'zh-CN':
          '页向导模式下：通过 <code>btn-prev</code> 监听“上一步”按钮点击事件；<br /> \n        <code>btn-next</code> 监听“下一步”按钮点击事件；<br />\n        <code>btn-save</code> 监听“保存”按钮点击事件；<br />\n        <code>btn-submit</code> 监听“提交”按钮点击事件，流程需要走到最后一步才会显示此按钮。<br />',
        'en-US':
          'In page wizard mode: listen for the "Previous" button click event through<code>btn-prev</code><br/>\n        <code>btn-next</code>Listen for the "Next" button click event<br/>\n        <code>btn-save</code>Listen for the "save" button click event<br/>\n        <code>btn-submit</code>Listen for the "submit" button click event, and the process needs to go to the last step to display this button<br/>.'
      },
      codeFiles: ['btn-events.vue']
    }
  ]
}
