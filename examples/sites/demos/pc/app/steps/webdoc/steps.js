export default {
  column: '1',
  owner: '',
  demos: [
    {
      demoId: 'line-horizontal',
      name: {
        'zh-CN': '横向单链型',
        'en-US': 'Horizontal Chain Steps'
      },
      desc: {
        'zh-CN': '<p>通过添加 <code>line</code> 用作横向单链型步骤条。</p>',
        'en-US': '<p>Use the <code>line</code> property to create a horizontal chain steps.</p>'
      },
      codeFiles: ['line-horizontal.vue']
    },
    {
      demoId: 'line-vertical',
      name: {
        'zh-CN': '垂直单链型',
        'en-US': 'Vertical Line Steps'
      },
      desc: {
        'zh-CN': '<p>使用 <code>line</code> 与 <code>vertical</code> 设置为条形步骤条。</p>\n',
        'en-US': 'Use <code>line</code> and <code>vertical<</code> attribute to set vertical steps.'
      },
      codeFiles: ['line-vertical.vue']
    },
    {
      demoId: 'line-dot',
      name: {
        'zh-CN': '垂直点状型',
        'en-US': 'Vertical dot Steps'
      },
      desc: {
        'zh-CN': '<p>使用 <code>dot</code> 与 <code>vertical</code> 设置为垂直点状形。</p>\n',
        'en-US': 'Use<code>dot</code>and<code>vertical</code>to set it as a vertical dot shape.'
      },
      codeFiles: ['line-dot.vue']
    },
    {
      demoId: 'advanced-steps',
      name: {
        'zh-CN': '条形步骤条',
        'en-US': 'Bar steps'
      },
      desc: {
        'zh-CN': '<p>默认显示为条形步骤条。</p>\n',
        'en-US': '<p>The default display is a bar-style steps.</p>'
      },
      codeFiles: ['advanced-steps.vue']
    },
    {
      demoId: 'size',
      name: {
        'zh-CN': '尺寸',
        'en-US': 'Use of slots'
      },
      desc: {
        'zh-CN':
          '<p>步骤条两种模式支持 <code>size</code> 设置尺寸：</p>\n        <p>1. <code>line</code> 单链型模式支持 <code>mini</code>、<code>small</code>、<code>medium</code>、<code>large</code> 4 种尺寸，默认值为 <code>medium</code>。</p>\n        <p>2. <code>advanced</code> 高级向导模式支持 <code>medium</code>、<code>large</code> 2 种尺寸，默认值为 <code>medium</code>。</p>',
        'en-US':
          '<p>Two modes of the steps support the <code>size</code>  setting:</p>\n        <p>1. The <code>line</code> mode supports 4 sizes: <code>mini</code>, <code>small</code>, <code>medium</code>, and <code>large</code>, with a default value of <code>medium</code>.</p>\n        <p>2. The <code>advanced</code> mode support 2 sizes: <code>medium</code>, and <code>large</code>, with a default value of <code>medium</code>.</p>'
      },
      codeFiles: ['size.vue']
    },
    {
      demoId: 'node-width',
      name: {
        'zh-CN': '节点宽度',
        'en-US': 'Common Step Bar'
      },
      desc: {
        'zh-CN':
          '<p>使用 <code>space</code> 配置步骤条节点的宽度。</p><p>通过 <code>flex</code> 开启总宽度自适应，节点等宽，撑满父容器，节点名称超出省略。</p>',
        'en-US':
          '<p>Using <code>space</code> attribute to set node width. </p><p>Enable responsive total width using the <code>flex</code> property, with equal width for nodes that fill the parent container, and node names that exceed the container width are truncated.</p>'
      },
      codeFiles: ['node-width.vue']
    },
    {
      demoId: 'duration',
      name: {
        'zh-CN': '节点滚动时间',
        'en-US': 'Node Scroll Time'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>duration</code> 设置节点左右滚动的持续时间，默认值为 300（单位 ms），设置 0 则无滚动动画，仅开启 advanced 高级向导模式有效。</p>',
        'en-US':
          '<p>Set the duration of node left and right scrolling through the <code>duration</code> parameter, with a default value of 300 (in ms). Setting it to 0 disables the scrolling animation. This parameter only works in advanced wizard mode.</p>'
      },
      codeFiles: ['duration.vue']
    },
    {
      demoId: 'custom-steps-item',
      name: {
        'zh-CN': '自定义字段',
        'en-US': 'Custom fields'
      },
      desc: {
        'zh-CN':
          "<p>可以通过以下属性自定义数据项字段：<br /><code>name-field</code>： 设置节点信息中名称对应的字段名，默认为 'name'  <br /><code>count-field</code>：设置条形步骤条里徽标计数对应的字段名，默认为 'count' 。<br /><code>status-field</code>：设置数据状态对应的字段名，默认为 'status' 。</p>\n",
        'en-US':
          "You can customize the data item fields with the following attributes.<br /><code>name-field</code>: Set the field name corresponding to the name in the node information, the default is 'name'.<br /><code>count-field</code>Set the field name corresponding to the count in the logo counter of the bar step bar, the default is 'count'.<br /><code>status-field</code>: Set the field name corresponding to the status in the data item, the default is 'status'."
      },
      codeFiles: ['custom-steps-item.vue']
    },
    {
      demoId: 'slot-item',
      name: {
        'zh-CN': 'item插槽',
        'en-US': 'item slot'
      },
      desc: {
        'zh-CN': '<p>通过插槽 <code>item</code> 自定义节点内容。</p>\n',
        'en-US': 'Customize step bar node content through scope slot <code>item</code>.'
      },
      codeFiles: ['slot-item.vue']
    },
    {
      demoId: 'click',
      name: {
        'zh-CN': '点击事件',
        'en-US': ''
      },
      desc: {
        'zh-CN': '<p>点击节点时触发 <code>click</code> 事件。</p>\n',
        'en-US': 'Trigger <code>click</code> event when clicking on a node.'
      },
      codeFiles: ['click.vue']
    }
  ]
}
