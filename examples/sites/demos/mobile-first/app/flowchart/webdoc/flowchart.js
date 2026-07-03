export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN':
          'Flowchart 流程图最基础的用法，展示节点与连线的基本渲染。通过 <code>createConfig</code> 创建配置与数据，并使用 <code>hooks.markRaw</code> 避免 Vue 对 Canvas 对象进行响应式代理。',
        'en-US':
          'The most basic usage of Flowchart, demonstrating the basic rendering of nodes and links. Use <code>createConfig</code> to create configuration and data, and use <code>hooks.markRaw</code> to prevent Vue from making Canvas objects reactive.'
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'horizon',
      'name': { 'zh-CN': '横向流程图', 'en-US': 'Horizontal Flowchart' },
      'desc': {
        'zh-CN':
          '标准模式下的横向流程图示例。节点使用矩形形状，通过 <code>fromJoint</code> 和 <code>toJoint</code> 控制连线在节点的连接位置，支持 <code>click-node</code>、<code>click-link</code>、<code>click-blank</code> 事件。',
        'en-US':
          'A horizontal flowchart example in standard mode. Nodes use rectangular shapes, and the connection positions of links on nodes are controlled via <code>fromJoint</code> and <code>toJoint</code>. Supports <code>click-node</code>, <code>click-link</code>, and <code>click-blank</code> events.'
      },
      'codeFiles': ['horizon.vue']
    },
    {
      'demoId': 'dot-horizon',
      'name': { 'zh-CN': 'Dot 点模式横向', 'en-US': 'Dot Mode Horizontal' },
      'desc': {
        'zh-CN':
          'Dot 点模式下的横向流程图。设置 <code>type: "dot"</code> 开启点模式，节点以圆形图标展示，支持 <code>renderOuter</code> 自定义节点渲染，使用 <code>resizeMixin</code> 实现自适应宽度。',
        'en-US':
          'Horizontal flowchart in dot mode. Set <code>type: "dot"</code> to enable dot mode, where nodes are displayed as circular icons. Supports <code>renderOuter</code> for custom node rendering and uses <code>resizeMixin</code> for adaptive width.'
      },
      'codeFiles': ['dot-horizon.vue']
    },
    {
      'demoId': 'dot-vertical',
      'name': { 'zh-CN': 'Dot 点模式纵向', 'en-US': 'Dot Mode Vertical' },
      'desc': {
        'zh-CN':
          'Dot 点模式下的纵向流程图。设置 <code>nodeLayout: "left-right"</code> 使标签显示在节点右侧，支持 <code>linkPath</code> 自定义连线路径、<code>groups</code> 分组以及 <code>click-group</code> 事件。',
        'en-US':
          'Vertical flowchart in dot mode. Set <code>nodeLayout: "left-right"</code> to display labels on the right side of nodes. Supports <code>linkPath</code> for custom link paths, <code>groups</code> for grouping, and <code>click-group</code> events.'
      },
      'codeFiles': ['dot-vertical.vue']
    },
    {
      'demoId': 'dot-horizon-async',
      'name': { 'zh-CN': 'Dot 点模式横向异步', 'en-US': 'Dot Mode Horizontal Async' },
      'desc': {
        'zh-CN':
          '使用 <code>TinyAsyncFlowchart</code> 组件实现异步加载的横向 Dot 点模式流程图。通过 <code>fetch</code> 属性传入数据加载函数，模拟异步请求后渲染图形。',
        'en-US':
          'Use the <code>TinyAsyncFlowchart</code> component to implement an asynchronously loaded horizontal dot mode flowchart. Data is loaded via the <code>fetch</code> prop, simulating an async request before rendering the chart.'
      },
      'codeFiles': ['dot-horizon-async.vue']
    },
    {
      'demoId': 'dot-vertical-async',
      'name': { 'zh-CN': 'Dot 点模式纵向异步', 'en-US': 'Dot Mode Vertical Async' },
      'desc': {
        'zh-CN':
          '使用 <code>TinyAsyncFlowchart</code> 组件实现异步加载的纵向 Dot 点模式流程图。支持分组、自定义路径和条件连线，展示异步数据加载后的完整交互。',
        'en-US':
          'Use the <code>TinyAsyncFlowchart</code> component to implement an asynchronously loaded vertical dot mode flowchart. Supports grouping, custom paths, and conditional links, demonstrating full interaction after async data loading.'
      },
      'codeFiles': ['dot-vertical-async.vue']
    },
    {
      'demoId': 'holistic',
      'name': { 'zh-CN': '整体自定义渲染', 'en-US': 'Holistic Custom Rendering' },
      'desc': {
        'zh-CN':
          '通过 <code>renderOuter</code> 完全自定义节点外观，通过 <code>linkPath</code> 自定义连线路径和渐变颜色。展示如何对流程图进行整体视觉定制。',
        'en-US':
          'Completely customize the node appearance via <code>renderOuter</code> and custom link paths and gradient colors via <code>linkPath</code>. Demonstrates how to perform overall visual customization of the flowchart.'
      },
      'codeFiles': ['holistic.vue']
    },
    {
      'demoId': 'holistic-fork',
      'name': { 'zh-CN': '整体自定义渲染-分叉', 'en-US': 'Holistic Custom Rendering - Fork' },
      'desc': {
        'zh-CN':
          '在整体自定义渲染的基础上，展示分叉布局流程图。通过 <code>layout</code> 自定义节点位置，配合 <code>linkPath</code> 实现复杂的分叉连线路径。',
        'en-US':
          'Based on holistic custom rendering, demonstrates a fork layout flowchart. Uses <code>layout</code> to customize node positions and <code>linkPath</code> to implement complex forked link paths.'
      },
      'codeFiles': ['holistic-fork.vue']
    },
    {
      demoId: 'link-path',
      name: {
        'zh-CN': '定制连线',
        'en-US': 'Link Path'
      },
      desc: {
        'zh-CN': '<p>使用属性 config.linkPath，可以定制连线。<p>',
        'en-US': '<p>Use the attribute <code>config.linkpath</code> to customize the links.</p>'
      },
      codeFiles: ['link-path.vue']
    },
    {
      'demoId': 'node-size',
      'name': { 'zh-CN': '节点尺寸', 'en-US': 'Node Size' },
      'desc': {
        'zh-CN':
          '通过 <code>nodeSize</code> 配置切换节点尺寸（mini / small / medium），配合 <code>TinyButtonGroup</code> 实现动态切换，并调用 <code>refresh()</code> 方法刷新图形。',
        'en-US':
          'Switch node sizes (mini / small / medium) via the <code>nodeSize</code> configuration, combined with <code>TinyButtonGroup</code> for dynamic switching, and call the <code>refresh()</code> method to refresh the chart.'
      },
      'codeFiles': ['node-size.vue']
    }
  ]
}
