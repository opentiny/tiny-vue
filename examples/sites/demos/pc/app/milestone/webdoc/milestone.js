export default {
  column: '2',
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
          '通过 <code>data</code> 设置每个节点的标题、日期、和状态； <code>milestones-status</code> 设置每种状态对应的颜色值；前者的 <code>status</code> 字段对应后者的键值。',
        'en-US':
          'Set the title, date, and status of each node through <code>data</code> ; <code>Milestones status</code> Set the color values corresponding to each state; The <code>status</code> field of the former corresponds to the key value of the latter.'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'flag-before',
      name: {
        'zh-CN': '旗子数据来源',
        'en-US': 'Flag data source'
      },
      desc: {
        'zh-CN':
          '通过 <code>flag-before</code> 设置旗子的数据来源，是来自前面还是后面的节点，默认为 <code>false</code> 取后面节点上的数据。',
        'en-US':
          'Set the data source of the flag through <code>flag-before</code> , whether it comes from the preceding or following nodes. The default value is <code>false</code> to retrieve the data from the following nodes.'
      },
      codeFiles: ['flag-before.vue']
    },
    {
      demoId: 'line-style',
      name: {
        'zh-CN': '线条颜色和间距',
        'en-US': 'Line color and Space'
      },
      desc: {
        'zh-CN': '通过 <code>line-style</code> 设置线条颜色， <code>space</code> 设置节点间距。',
        'en-US': 'Set the line color and node spacing through <code>line-style</code> .'
      },
      codeFiles: ['line-style.vue']
    },
    {
      demoId: 'show-number',
      name: {
        'zh-CN': '序号',
        'en-US': 'Sequence number'
      },
      desc: {
        'zh-CN':
          '通过 <code>show-number</code> 设置未完成状态的节点是否显示序号；默认为 <code>true</code> 显示； <code>start</code> 设置节点的序号起始值，默认为 <code>-1</code> 。',
        'en-US':
          'Set whether nodes in incomplete status display serial numbers through <code>show-number</code> ; Default to display as <code>true</code> ; <code>start</code> Set the starting value of the nodes sequence number, which defaults to <code>-1</code> .'
      },
      codeFiles: ['show-number.vue']
    },
    {
      demoId: 'solid-style',
      name: {
        'zh-CN': '实心显示',
        'en-US': 'Completed node solid display'
      },
      desc: {
        'zh-CN':
          '通过 <code>solid</code> 设置已完成状态的节点是否实心显示，实心显示则光晕不透明；默认为 <code>false</code> 不显示。',
        'en-US':
          'Set whether nodes in the completed state are displayed as solid through <code>solid</code> , and if solid is displayed, the halo is opaque; The default is not displayed as <code>false</code> .'
      },
      codeFiles: ['solid-style.vue']
    },
    {
      demoId: 'data-field-mapping',
      name: {
        'zh-CN': '数据字段映射',
        'en-US': 'Data Field Mapping'
      },
      desc: {
        'zh-CN':
          '\n          <div class="tip custom-block"><p class="custom-block-title">\n          自定义 <code>data</code> 属性的键名和键值：<br/> </p>\n          <code>completed-field</code> 设置完成状态对应的键值，默认为 <code>completed</code> ；<br/>\n          <code>flag-field</code> 设置旗子信息数组对应的键名，默认为 <code>flags</code> ；<br/>\n          <code>flag-content-field</code> 设置旗子描述对应的键名，默认为 <code>content</code> ；<br/>\n          <code>flag-name-field</code> 设置旗子标题对应的键名，默认为 <code>name</code> ；<br/>\n          <code>flag-status-field</code> 设置旗子状态对应的键名，默认为 <code>status</code> ；<br/>\n          <code>name-field</code> 设置节点名称对应的键名，默认为 <code>name</code> ；<br/>\n          <code>status-field</code> 设置节点状态对应的键名，默认为 <code>status</code> ；<br/>\n          <code>time-field</code> 设置节点时间对应的键名，默认为 <code>time</code> 。</div>',
        'en-US':
          '\n          <div class="tip custom-block"><p class="custom-block-title">\n          Customize the key names and values of <code>data</code> attributes:<br/> </p>\n          <code>completed-field</code> Set the key value corresponding to the completion status, which defaults to <code>completed</code> ;<br/>\n          <code>flag-field</code> Set the key name corresponding to the flag information array, which defaults to <code>flags</code> ;<br/>\n          <code>flag-content-field</code> Set the key name corresponding to the flag description, which defaults to <code>content</code> ;<br/>\n          <code>flag-name-field</code> Set the key name corresponding to the flag subtitle, which defaults to <code>name</code> ;<br/>\n          <code>flag-status-field</code> Set the key name corresponding to the flag state, which defaults to <code>status</code> ;<br/>\n          <code>name-field</code> Set the key name corresponding to the node name, which defaults to <code>name</code> ;<br/>\n          <code>status-field</code> Set the key name corresponding to the node state, which defaults to <code>status</code> ;<br/>\n          <code>time-field</code> Set the key name corresponding to the node time, which defaults to <code>time</code> . </div>'
      },
      codeFiles: ['data-field-mapping.vue']
    },
    {
      demoId: 'custom-icon-slot',
      name: {
        'zh-CN': '定义图标',
        'en-US': 'Custom Node Icons'
      },
      desc: {
        'zh-CN': '通过 <code>icon</code> 作用域插槽自定义节点的图标。',
        'en-US': 'Customize the node icon through the <code>icon</code> scope slot.'
      },
      codeFiles: ['custom-icon-slot.vue']
    },
    {
      demoId: 'custom-bottom-top',
      name: {
        'zh-CN': '定义上下方内容',
        'en-US': 'Define the content above and below'
      },
      desc: {
        'zh-CN':
          '通过 <code>bottom</code> 作用域插槽自定义节点下方的内容；<br/> 通过 <code>top</code> 作用域插槽自定义节点上方的内容。',
        'en-US':
          'Customize the content below the node through the <code>bottom</code> scope slot;<br/> Customize the content above the node through the <code>top</code> scope slot.'
      },
      codeFiles: ['custom-bottom-top.vue']
    },
    {
      demoId: 'custom-flag',
      name: {
        'zh-CN': '定义旗帜内容',
        'en-US': 'Custom Flag Content'
      },
      desc: {
        'zh-CN': '通过 <code>flag</code> 作用域插槽自定义节点旗子的内容。',
        'en-US': 'Customize the content of node flags through the <code>flag</code> scope slot.'
      },
      codeFiles: ['custom-flag.vue']
    },
    {
      demoId: 'milestone-events',
      name: {
        'zh-CN': '事件',
        'en-US': 'Event'
      },
      desc: {
        'zh-CN': '通过 <code>click</code> 监听单击节点事件， <code>flag-click</code> 监听单击旗子事件。',
        'en-US':
          'Listen for click node events through <code>click</code> , and <code>flag-click</code> listen for click flag sub events.'
      },
      codeFiles: ['milestone-events.vue']
    }
  ]
}
