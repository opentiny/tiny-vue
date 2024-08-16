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
        'zh-CN': '通过 data 属性设置时间线步骤条数据，通过 active 属性设置步骤条的选中步骤。',
        'en-US':
          '<p>Use the <code>data</code> attribute to set data,  the <code>active</code> attribute to set the selected node, and <code>click</code> to listen to click event on node. </p>\n'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'vertical1',
      name: {
        'zh-CN': '竖向时间线1',
        'en-US': 'Timeline Node Component'
      },
      desc: {
        'zh-CN': '通过 vertical 属性设置竖向时间线。',
        'en-US':
          '<p>Customize the attributes, events, and slots of individual nodes through the <code>timeline-item</code> component of the Timeline node component.</p>\n'
      },
      codeFiles: ['vertical1.vue']
    },
    {
      demoId: 'vertical2',
      name: {
        'zh-CN': '竖向时间线2',
        'en-US': 'Vertical Timeline'
      },
      desc: {
        'zh-CN': '通过 reverse 属性设置竖向步骤条的方向。',
        'en-US':
          '<p>Use the <code>vertical</code> attribute to set the vertical timeline and <code>reverse</code> to set whether display data in reverse order.</p>\n'
      },
      codeFiles: ['vertical2.vue']
    },
    {
      demoId: 'width',
      name: {
        'zh-CN': '宽度设置',
        'en-US': 'Status of Node'
      },
      desc: {
        'zh-CN': '通过 space属性设置步骤条的宽度。',
        'en-US':
          '<p>Specify the state of timeline nodes by setting the <code>autoColor</code> or <code>type</code> attribute, and use the <code>disabled</code> attribute to enable or disable them.</p>'
      },
      codeFiles: ['width.vue']
    },
    {
      demoId: 'different-data1',
      name: {
        'zh-CN': '数据映射1',
        'en-US': 'Node name position'
      },
      desc: {
        'zh-CN':
          '通过 name-field 属性设置节点信息中名称对应的字段名，通过 time-field 属性设置节点时间信息对应的字段名。',
        'en-US':
          '<p>Set the position of the node name using the <code>text-position</code> attribute, which applies only to horizontal timelines.</p>'
      },
      codeFiles: ['different-data1.vue']
    },
    {
      demoId: 'different-data2',
      name: {
        'zh-CN': '数据映射2',
        'en-US': 'Appearance of Node'
      },
      desc: {
        'zh-CN': '通过 auto-color-field 属性设置节点信息图标对应的字段名。',
        'en-US': '<p>Use the <code>shape</code> attribute to set the appearance of a vertical time line node. </p>'
      },
      codeFiles: ['different-data2.vue']
    },
    {
      demoId: 'set-start-value',
      name: {
        'zh-CN': '设置序号起始值',
        'en-US': 'Width Setting'
      },
      desc: {
        'zh-CN': '通过 start 属性设置步骤条序号起始值。',
        'en-US': '<p>Use the <code>space</code> attribute to set the width of timeline node. </p>\n'
      },
      codeFiles: ['set-start-value.vue']
    },
    {
      demoId: 'show-status',
      name: {
        'zh-CN': '显示组件内部状态',
        'en-US': 'Custom Icon'
      },
      desc: {
        'zh-CN': '通过 show-status 属性设置是否显示组件内部状态。默认为 false，表示不显示。',
        'en-US': '<p>Customize icon by using the <code>auto-color</code> attribute.</p>'
      },
      codeFiles: ['show-status.vue']
    },
    {
      demoId: 'node-toset1',
      name: {
        'zh-CN': '节点配置图标1',
        'en-US': 'Custom Field'
      },
      desc: {
        'zh-CN': '通过在data里面的属性autoColor设置自定义状态',
        'en-US':
          '<p>The <code>name-field</code> attribute is used to set the field name corresponding to the node name in the node information, the <code>time-field</code> attribute is used to set the field name corresponding to the node time information and the <code>auto-color-field</code> attribute is used to set the field name corresponding to the icon. </p>'
      },
      codeFiles: ['node-toset1.vue']
    },
    {
      demoId: 'node-toset2',
      name: {
        'zh-CN': '节点配置图标2',
        'en-US': 'Start value of the sequence number'
      },
      desc: {
        'zh-CN': '通过在data里面的属性autoColor设置自定义图标',
        'en-US': '<p>Set the start sequence number through the <code>start</code> attribute. </p>\n'
      },
      codeFiles: ['node-toset2.vue']
    },
    {
      demoId: 'show-number',
      name: {
        'zh-CN': '未完成的序号显示',
        'en-US': 'Bottom indicator triangle'
      },
      desc: {
        'zh-CN': '通过 show-number 属性设置未完成的状态是否显示序号。',
        'en-US':
          'The <code>show-divider</code> attribute is used to set whether to display the indicator triangle at the bottom. This parameter is valid only when the node text is on the right of the sequence number.'
      },
      codeFiles: ['show-number.vue']
    },
    {
      demoId: 'custom-normal-step',
      name: {
        'zh-CN': '自定义横向时间线',
        'en-US': 'Customizing a Horizontal Timeline'
      },
      desc: {
        'zh-CN': 'slot 为 top可以自定义步骤条顶部内容，slot 为 bottom 可以自定义步骤条底部内容。',
        'en-US':
          'If <p><code>slot</code> is <code>top</code>, you can customize the top content of the timeline. If <p><code>slot</code> is <code>slot</code>, you can customize the bottom content of the timeline. </p>\n'
      },
      codeFiles: ['custom-normal-step.vue']
    },
    {
      demoId: 'custom-vertical-step',
      name: {
        'zh-CN': '自定义竖向时间线',
        'en-US': 'Customized Vertical Timeline'
      },
      desc: {
        'zh-CN': 'slot 为 left可以自定义步骤条左侧内容，slot 为 right 可以自定义步骤条右侧内容。',
        'en-US':
          'If <p><code>slot</code> is set to <code>left</code>, you can customize the content on the left of the timeline. If <p><code>slot</code> is set to <code>right</code>, you can customize the content on the right of the timeline. </p>\n'
      },
      codeFiles: ['custom-vertical-step.vue']
    },
    {
      demoId: 'event',
      name: {
        'zh-CN': 'click 事件',
        'en-US': 'Node Description'
      },
      desc: {
        'zh-CN': '单击时触发 click 事件',
        'en-US': '<p>Add description information for a single node through the <code>description</code> slot.</p>'
      },
      codeFiles: ['event.vue']
    }
  ]
}
