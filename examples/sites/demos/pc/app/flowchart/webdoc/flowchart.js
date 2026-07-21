export default {
  column: '1',
  owner: '',
  show: true,
  cloud: false,
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN':
          "\n<p>节点支持 <code>icon</code> | <code>label</code> | <code>content</code> 插槽定制内容，示例提供了 <code>content</code> 插槽的默认实现。节点使用 <code>row</code> | <code>col</code> 属性进行行列配置。连线使用 <code>p</code> 属性进行相对路径配置。流程图的其它设置通过 <code>config</code> 进行配置。组件预置了 <code>createItem</code> | <code>createNode</code> | <code>createLink</code> | <code>createConfig</code> 静态方法，以便于快速构建选项。流程图的行高列宽由 <code>config</code> 的属性 <code>width</code> | <code>height</code> | <code>cols</code> | <code>rows</code> 确定，节点的位置由流程图的行高列宽，以及节点的 <code>row</code> | <code>col</code> 位置确定。</p>\n<p>连线相对路径配置详细介绍：</p>\n<ul>\n<li>'0' 表示从起始节点 1 的位置开始</li>\n<li>'r2' 表示向右画两列宽度的连线</li>\n<li>'c' 表示画一个圆角</li>\n<li>'b2' 表示向下画两行高度的连线</li>\n<li>'l1' 表示向左画一列宽度的连线</li>\n<li>'t1' 向上画一行高度的连线</li>\n</ul>\n<p>连线配置参数举例:</p>\n<pre><code>const link = { from: '1', to: '2', p: '0 r2 c b2 c l1 c t1', status: 1 }</code></pre>\n",
        'en-US':
          '\n<p>The node supports custom content through the <code>icon</code> | <code>label</code> | <code>content</code> slots, with a default implementation provided for the <code>content</code> slot. Nodes can be configured for row and column placement using the <code>row</code> | <code>col</code> attributes, while connections between nodes can be configured using the <code>p</code> attribute for relative path configuration. Other settings for the flowchart can be configured through the <code>config</code> attribute. The component also provides static methods <code>createItem</code> | <code>createNode</code> | <code>createLink</code> | <code>createConfig</code> for quick option building. The row height and column width of the flowchart are determined by the <code>width</code> | <code>height</code> | <code>cols</code> | <code>rows</code> attributes of the <code>config</code>, while the position of each node is determined by the row height, column width, and the <code>row</code> | <code>col</code> position of the node.</p>\n'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'custom-style',
      name: {
        'zh-CN': '自定义样式',
        'en-US': 'Custom Style'
      },
      desc: {
        'zh-CN':
          '\n<p>通过 <code>config</code> 对象的属性可以自定义流程图的样式，包括：</p>\n<ul>\n<li><code>colors</code>：自定义状态颜色映射</li>\n<li><code>background</code>：画布背景色</li>\n<li><code>font</code>：Canvas 字体</li>\n<li><code>radius</code>：圆角半径</li>\n<li><code>thin</code>：是否使用细线模式</li>\n<li><code>iconWrapperSize</code> / <code>iconSize</code> / <code>iconSvgSize</code>：图标尺寸</li>\n<li><code>labelWidth</code> / <code>labelHeight</code> / <code>labelSpacing</code> / <code>labelDateColor</code>：标签样式</li>\n<li><code>listWidth</code> / <code>listIconSize</code> / <code>headSize</code>：人员列表样式</li>\n</ul>\n',
        'en-US':
          '\n<p>Customize the flowchart style through the <code>config</code> object properties, including <code>colors</code>, <code>background</code>, <code>font</code>, <code>radius</code>, <code>thin</code>, <code>icon*</code>, <code>label*</code>, and <code>list*</code> properties.</p>\n'
      },
      codeFiles: ['custom-style.vue']
    },
    {
      demoId: 'person-list',
      name: {
        'zh-CN': '人员列表',
        'en-US': 'Person List'
      },
      desc: {
        'zh-CN':
          '\n<p>通过 <code>createItem</code> 静态方法创建人员列表项，传入节点的 <code>items</code> 属性中。当 <code>items</code> 数量大于 <code>config.listThreshold</code>（默认 1）时，节点下方会显示人员列表。可以通过 <code>config.listWidth</code>、<code>config.listBorderColor</code>、<code>config.listIconColor</code>、<code>config.listIconSize</code>、<code>config.headSize</code>、<code>config.headUrl</code> 等属性自定义人员列表的样式。</p>\n',
        'en-US':
          "\n<p>Use the <code>createItem</code> static method to create personnel list items and pass them into the node's <code>items</code> property. When the number of <code>items</code> exceeds <code>config.listThreshold</code> (default 1), a personnel list is displayed below the node. Customize the list style through <code>config.listWidth</code>, <code>config.listBorderColor</code>, <code>config.listIconColor</code>, <code>config.listIconSize</code>, <code>config.headSize</code>, and <code>config.headUrl</code>.</p>\n"
      },
      codeFiles: ['person-list.vue']
    },
    {
      demoId: 'branch-flow',
      name: {
        'zh-CN': '分支流程',
        'en-US': 'Branch Flow'
      },
      desc: {
        'zh-CN':
          '\n<p>展示条件分支流程，使用 <code>row</code> 和 <code>col</code> 控制节点在网格中的位置。连线使用 <code>p</code> 属性控制走向，支持 <code>solid</code>（实线）和 <code>dashed</code>（虚线）两种样式。通过调整 <code>config.width</code>、<code>config.height</code>、<code>config.rows</code>、<code>config.cols</code> 可以扩展画布以容纳更多节点。</p>\n',
        'en-US':
          '\n<p>Demonstrate conditional branch flows using <code>row</code> and <code>col</code> to control node positions in the grid. Links use the <code>p</code> property to control direction, supporting <code>solid</code> and <code>dashed</code> styles. Adjust <code>config.width</code>, <code>config.height</code>, <code>config.rows</code>, and <code>config.cols</code> to expand the canvas.</p>\n'
      },
      codeFiles: ['branch-flow.vue']
    },
    {
      demoId: 'slots',
      name: {
        'zh-CN': '插槽定制',
        'en-US': 'Slots Usage'
      },
      desc: {
        'zh-CN':
          '\n<p>节点支持 <code>icon</code>、<code>label</code>、<code>content</code> 三个插槽自定义内容。插槽参数包含 <code>afterNode</code>、<code>node</code>、<code>config</code>、<code>allItem</code>、<code>dropdowns</code>、<code>showPop</code> 等上下文信息。</p>\n',
        'en-US':
          '\n<p>Nodes support three slots for customization: <code>icon</code>, <code>label</code>, and <code>content</code>. Slot parameters include <code>afterNode</code>, <code>node</code>, <code>config</code>, <code>allItem</code>, <code>dropdowns</code>, and <code>showPop</code>.</p>\n'
      },
      codeFiles: ['slots.vue']
    },
    {
      demoId: 'event-handling',
      name: {
        'zh-CN': '事件处理',
        'en-US': 'Event Handling'
      },
      desc: {
        'zh-CN':
          '\n<p>流程图支持 <code>click-node</code>、<code>click-link</code>、<code>click-blank</code> 三种点击事件。事件回调参数包含节点/连线/空白区域的详细信息，可用于实现交互逻辑。</p>\n',
        'en-US':
          '\n<p>The flowchart supports three click events: <code>click-node</code>, <code>click-link</code>, and <code>click-blank</code>. Event callback parameters contain detailed information about nodes, links, or blank areas.</p>\n'
      },
      codeFiles: ['event-handling.vue']
    },
    {
      demoId: 'dynamic-update',
      name: {
        'zh-CN': '动态更新',
        'en-US': 'Dynamic Update'
      },
      desc: {
        'zh-CN':
          '\n<p>演示如何动态更新流程图的状态。通过修改 <code>data.nodes[i].info.status</code> 和 <code>data.links[i].info.status</code> 可以实时刷新流程图。配合 <code>config.delay</code> 属性可以控制 Canvas 绘制的动画延迟效果。</p>\n',
        'en-US':
          '\n<p>Demonstrate how to dynamically update flowchart status. Modify <code>data.nodes[i].info.status</code> and <code>data.links[i].info.status</code> to refresh the flowchart in real-time. Use <code>config.delay</code> to control Canvas drawing animation delay.</p>\n'
      },
      codeFiles: ['dynamic-update.vue']
    },
    {
      demoId: 'custom-link-style',
      name: {
        'zh-CN': '自定义连线样式',
        'en-US': 'Custom Link Style'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>config.styleLink</code> 可以自定义连线的样式。这个函数接收连线数据对象，返回 Canvas 样式对象（如 <code>strokeStyle</code>、<code>lineWidth</code>、<code>shadowColor</code> 等）。<code>config.drawLink</code> 则提供更底层的自定义 Canvas 绘制能力，与<code>config.styleLink</code>互斥。</p>',
        'en-US':
          'You can customize the style of connections via <code>config.styleLink</code>. This function accepts a connection data object and returns a Canvas style object (e.g., <code>strokeStyle</code>, <code>lineWidth</code>, <code>shadowColor</code>, etc.). <code>config.drawLink</code> provides more granular control over Canvas rendering, mutually exclusive with <code>config.styleLink</code>'
      },
      codeFiles: ['custom-link-style.vue']
    },
    {
      demoId: 'other',
      name: {
        'zh-CN': '其他用法',
        'en-US': 'Other Usage'
      },
      desc: {
        'zh-CN':
          "<p>连线相对路径配置详细介绍：</p>\n        <ul>\n          <li>'0'  表示从起始节点 1 的位置开始</li>\n          <li>'r2' 表示向右画两列宽度的连线</li>\n          <li>'c'  表示画一个圆角</li>\n          <li>'b2' 表示向下画两行高度的连线</li>\n          <li>'c'  再画一个圆角</li>\n          <li>'l1' 表示向左画一列宽度的连线</li>\n          <li>'c'  再画一个圆角</li>\n          <li>'t1' 向上画一行高度的连线</li>\n        </ul>\n        <p>连线配置参数举例:</p>\n        <span>const link = { from: '1', to: '2', p: '0 r2 c b2 c l1 c t1', status: 1 }</span>\n        ",
        'en-US':
          "<p>Detailed introduction to configuring relative paths for connections:</p>\n        <ul>\n          <li>'0' represents starting from node 1 position.</li>\n          <li>'r2' represents drawing a line two columns wide to the right.</li>\n          <li>'c'  represents drawing a circle.</li>\n          <li>'b2' represents a downward line of two height units.</li>\n          <li>'c'  represents drawing a circle again.</li>\n          <li>'l1' represents drawing a line one column wide to the left.</li>\n          <li>'t1' represents an upward line of one height unit.</li>\n        </ul>\n        <p>Example of connection configuration parameters:</p>\n        <span>const link = { from: '1', to: '2', p: '0 r2 c b2 c l1 c t1', status: 1 }</span>\n        "
      },
      codeFiles: ['other.vue']
    }
  ],
  features: [
    {
      id: 'slots',
      name: '插槽定制',
      support: { value: true },
      description: '节点支持 icon、label、content 插槽定制内容。',
      cloud: { value: false },
      apis: ['icon-slot', 'label-slot', 'content-slot'],
      demos: ['slots']
    },
    {
      id: 'node-position',
      name: '节点位置',
      support: { value: true },
      description: '节点使用 row、col 属性进行行列配置。',
      cloud: { value: false },
      apis: ['row', 'col'],
      demos: ['basic-usage', 'branch-flow']
    },
    {
      id: 'link-path',
      name: '连线路径',
      support: { value: true },
      description: '连线使用 p 属性进行相对路径配置。',
      cloud: { value: false },
      apis: ['p'],
      demos: ['basic-usage', 'branch-flow']
    },
    {
      id: 'link-style',
      name: '连线样式',
      support: { value: true },
      description: '支持 solid、dashed 两种连线样式，可通过 styleLink 自定义。',
      cloud: { value: false },
      apis: ['style', 'styleLink', 'styleHoverLink'],
      demos: ['branch-flow', 'custom-link-style']
    },
    {
      id: 'config',
      name: '流程图配置',
      support: { value: true },
      description: '流程图的其它设置通过 config 进行配置，包括 width、height、cols、rows、colors、background 等属性。',
      cloud: { value: false },
      apis: ['config'],
      demos: ['basic-usage', 'custom-style']
    },
    {
      id: 'person-list',
      name: '人员列表',
      support: { value: true },
      description: '节点支持通过 items 属性显示人员列表，可通过 createItem 快速创建。',
      cloud: { value: false },
      apis: ['items', 'createItem', 'listWidth', 'listThreshold'],
      demos: ['person-list']
    },
    {
      id: 'events',
      name: '事件交互',
      support: { value: true },
      description: '支持 click-node、click-link、click-blank 事件。',
      cloud: { value: false },
      apis: ['click-node', 'click-link', 'click-blank'],
      demos: ['event-handling']
    },
    {
      id: 'dynamic-update',
      name: '动态更新',
      support: { value: true },
      description: '支持动态修改节点和连线状态，实时刷新流程图。',
      cloud: { value: false },
      apis: ['status'],
      demos: ['dynamic-update']
    },
    {
      id: 'static-methods',
      name: '静态方法',
      support: { value: true },
      description: '组件预置了 createItem、createNode、createLink、createConfig 静态方法，以便于快速构建选项。',
      cloud: { value: false },
      apis: ['createItem', 'createNode', 'createLink', 'createConfig'],
      demos: ['basic-usage']
    }
  ]
}
