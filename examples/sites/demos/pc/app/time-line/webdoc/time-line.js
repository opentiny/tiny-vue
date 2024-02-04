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
          '<p>通过 <code>data</code> 属性设置时间线的节点数据；<code>active</code> 属性设置当前节点，<code>click</code> 监听单节点的点击事件。</p>\n',
        'en-US':
          '<p>Use the <code>data</code> attribute to set data,  the <code>active</code> attribute to set the selected node, and <code>click</code> to listen to click event on node. </p>\n'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'timeline-item',
      name: {
        'zh-CN': '时间线节点组件',
        'en-US': 'Timeline Node Component'
      },
      desc: {
        'zh-CN': '<p>通过时间线节点组件 <code>timeline-item</code> 自定义单个节点的属性、事件和插槽。</p>\n',
        'en-US':
          '<p>Customize the attributes, events, and slots of individual nodes through the <code>timeline-item</code> component of the Timeline node component.</p>\n'
      },
      codeFiles: ['timeline-item.vue']
    },
    {
      demoId: 'vertical-timeline',
      name: {
        'zh-CN': '竖向时间线',
        'en-US': 'Vertical Timeline'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>vertical</code> 属性设置为竖直方向时间线，<code>reverse</code> 设置是否逆序展示数据。</p>\n',
        'en-US':
          '<p>Use the <code>vertical</code> attribute to set the vertical timeline and <code>reverse</code> to set whether display data in reverse order.</p>\n'
      },
      codeFiles: ['vertical-timeline.vue']
    },
    {
      demoId: 'text-position',
      name: {
        'zh-CN': '节点名称位置',
        'en-US': 'Node name position'
      },
      desc: {
        'zh-CN': '<p>通过 <code>text-position</code> 属性设置节点名称位置，仅适用于横向时间线。</p>',
        'en-US':
          '<p>Set the position of the node name using the <code>text-position</code> attribute, which applies only to horizontal timelines.</p>'
      },
      codeFiles: ['text-position.vue']
    },
    {
      demoId: 'shape',
      name: {
        'zh-CN': '圆点外观',
        'en-US': 'Appearance of Node'
      },
      desc: {
        'zh-CN': '<p>通过 <code>shape</code> 属性设置竖向时间线节点的外观风格。</p>',
        'en-US': '<p>Use the <code>shape</code> attribute to set the appearance of a vertical time line node. </p>'
      },
      codeFiles: ['shape.vue']
    },
    {
      demoId: 'status',
      name: {
        'zh-CN': '节点状态',
        'en-US': 'Status of Node'
      },
      desc: {
        'zh-CN': '<p>横向时间线可以使用 <code>error</code>|<code>disabled</code> 指定单节点的状态。</p>',
        'en-US':
          '<p>Use the <code>error</code> or <code>disabled</code> attribute to set the appearance of a horizontal timeline node. </p>'
      },
      codeFiles: ['status.vue']
    },
    {
      demoId: 'set-node-width',
      name: {
        'zh-CN': '宽度',
        'en-US': 'Width Setting'
      },
      desc: {
        'zh-CN': '<p>通过 <code>space</code> 属性设置节点的宽度。</p>\n',
        'en-US': '<p>Use the <code>space</code> attribute to set the width of timeline node. </p>\n'
      },
      codeFiles: ['set-node-width.vue']
    },
    {
      demoId: 'show-divider',
      name: {
        'zh-CN': '底部分割线',
        'en-US': 'Bottom dividing line'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>show-divider</code> 属性设置是否显示时间线底部分隔线，仅当节点文本内容位于序号右边时生效。</p>',
        'en-US':
          '<p><code>show-divider</code> attribute is used to set whether to display the bottom dividing line of the timeline. It only takes effect when the node text content is located to the right of the number. </p>'
      },
      codeFiles: ['show-divider.vue']
    },
    {
      demoId: 'slot-description',
      name: {
        'zh-CN': '节点描述插槽',
        'en-US': 'Node Description'
      },
      desc: {
        'zh-CN': '<p>通过 <code>description</code> 插槽添加单个节点的描述信息。</p>',
        'en-US': '<p>Add description information for a single node through the <code>description</code> slot.</p>'
      },
      codeFiles: ['slot-description.vue']
    },
    {
      demoId: 'custom-horizontal-timeline',
      name: {
        'zh-CN': '自定义横向时间线',
        'en-US': 'Customizing a Horizontal Timeline'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>top</code> 插槽可以自定义时间线顶部内容，<code>bottom</code> 插槽自定义时间线底部内容。</p>\n',
        'en-US':
          'If <p><code>slot</code> is <code>top</code>, you can customize the top content of the timeline. If <p><code>slot</code> is <code>slot</code>, you can customize the bottom content of the timeline. </p>\n'
      },
      codeFiles: ['custom-horizontal-timeline.vue']
    },
    {
      demoId: 'custom-vertical-timeline',
      name: {
        'zh-CN': '自定义竖向时间线',
        'en-US': 'Customized Vertical Timeline'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>left</code> 插槽自定义时间线左侧内容，<code>right</code> 插槽自定义时间线右侧内容。</p>\n',
        'en-US':
          'If <p><code>slot</code> is set to <code>left</code>, you can customize the content on the left of the timeline. If <p><code>slot</code> is set to <code>right</code>, you can customize the content on the right of the timeline. </p>\n'
      },
      codeFiles: ['custom-vertical-timeline.vue']
    },
    {
      demoId: 'custom-field',
      name: {
        'zh-CN': '自定义字段',
        'en-US': 'Custom Field'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>name-field</code> 属性设置节点信息中名称对应的字段名，<code>time-field</code> 属性设置节点时间信息对应的字段名。</p>\n',
        'en-US':
          '<p>The <code>name-field</code> attribute is used to set the field name corresponding to the node name in the node information, and the <code>time-field</code> attribute is used to set the field name corresponding to the node time information. </p>\n'
      },
      codeFiles: ['custom-field.vue']
    },
    {
      demoId: 'set-start-value',
      name: {
        'zh-CN': '序号起始值',
        'en-US': 'Start value of the sequence number'
      },
      desc: {
        'zh-CN': '<p>通过 <code>start</code> 属性设置时间线序号起始值。</p>\n',
        'en-US': '<p>Set the start sequence number through the <code>start</code> attribute. </p>\n'
      },
      codeFiles: ['set-start-value.vue']
    }
  ]
}
