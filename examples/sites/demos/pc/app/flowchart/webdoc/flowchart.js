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
          "\n        <p>节点支持 <code>icon</code> | <code>label</code> | <code>content</code> 插槽定制内容，示例提供了 <code>content</code> 插槽的默认实现。节点使用 <code>row</code> | <code>col</code> 属性进行行列配置。连线使用 <code>p</code> 属性进行相对路径配置。流程图的其它设置通过 <code>config</code> 进行配置。组件预置了 <code>createItem</code> | <code>createNode</code> | <code>createLink</code> | <code>createConfig</code> 静态方法，以便于快速构建选项。流程图的行高列宽由 <code>config</code> 的属性 <code>width</code> | <code>height</code> | <code>cols</code> | <code>rows</code> 确定，节点的位置由流程图的行高列宽，以及节点的 <code>row</code> | <code>col</code> 位置确定。</p>\n        <p>连线相对路径配置详细介绍：</p>\n        <ul>\n          <li>'0'  表示从起始节点1的位置开始</li>\n          <li>'r2' 表示向右画两列宽度的连线</li>\n          <li>'c'  表示画一个圆角</li>\n          <li>'b2' 表示向下画两行高度的连线</li>\n          <li>'c'  再画一个圆角</li>\n          <li>'l1' 表示向左画一列宽度的连线</li>\n          <li>'c'  再画一个圆角</li>\n          <li>'t1' 向上画一行高度的连线</li>\n        </ul>\n        <p>连线配置参数举例:</p>\n        <span>const link = { from: '1', to: '2', p: '0 r2 c b2 c l1 c t1', status: 1 }</span>\n        ",
        'en-US':
          "\n        <p>The node supports custom content through the <code>icon</code> | <code>label</code> | <code>content</code> slots, with a default implementation provided for the <code>content</code> slot. Nodes can be configured for row and column placement using the <code>row</code> | <code>col</code> attributes, while connections between nodes can be configured using the <code>p</code> attribute for relative path configuration. Other settings for the flowchart can be configured through the <code>config</code> attribute. The component also provides static methods <code>createItem</code> | <code>createNode</code> | <code>createLink</code> | <code>createConfig</code> for quick option building. The row height and column width of the flowchart are determined by the <code>width</code> | <code>height</code> | <code>cols</code> | <code>rows</code> attributes of the <code>config</code>, while the position of each node is determined by the row height, column width, and the <code>row</code> | <code>col</code> position of the node.</p>\n        <p>Detailed introduction to configuring relative paths for connections:</p>\n        <ul>\n          <li>'0' represents starting from node 1 position.</li>\n          <li>'r2' represents drawing a line two columns wide to the right.</li>\n          <li>'c'  represents drawing a circle.</li>\n          <li>'b2' represents a downward line of two height units.</li>\n          <li>'c'  represents drawing a circle again.</li>\n          <li>'l1' represents drawing a line one columns wide to the left.</li>\n          <li>'t1' represents a upward line of two height units.</li>\n        </ul>\n        <p>Example of connection configuration parameters:</p>\n        <span>const link = { from: '1', to: '2', p: '0 r2 c b2 c l1 c t1', status: 1 }</span>\n        "
      },
      codeFiles: ['basic-usage.vue']
    }
  ]
}
