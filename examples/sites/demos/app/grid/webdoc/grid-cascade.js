export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'grid_Example-dataCascading-cascade',
      'name': { 'zh-CN': 'Grid-数据级联-正常列级联', 'en-US': 'Grid-data concatenation-normal column concatenation' },
      'desc': {
        'zh-CN':
          '<p>需要在 <code>grid</code> 标签上配 <code>edit-config</code> 对象，<code>activeMethod</code> 编辑前的事件处理编辑项数据集。\n<code>grid-column</code> 列上面配置 <code>editor</code> 对象，<code>component</code> 用来渲染编辑组件。\n<code>attrs</code> 配置级联数据。\n<code>events</code> 来设置事件。\n具体参考下面示例。</p>\n',
        'en-US':
          '<p>You need to configure the <code>edit-config</code> object on the <code>grid</code> tag, and <code>activeMethod</code> before editing the event processing edit item data set. \nThe <code>editor</code> object is configured in the <code>grid-column</code> column. <code>component</code> is used to render the editing component. \n<code>attrs</code>Configure cascading data. \n<code>events</code> to set events. \nFor details, see the following example. </p>\n'
      },
      'codeFiles': ['grid_Example/dataCascading/cascade.vue']
    },
    {
      'demoId': 'grid_Example-dataCascading-arbitraryCascade',
      'name': { 'zh-CN': 'Grid-数据级联-任意父级联', 'en-US': 'Grid-data concatenation-any parent concatenation' },
      'desc': {
        'zh-CN':
          '<p>需要在 <code>grid</code> 标签上配 <code>edit-config</code> 对象，<code>activeMethod</code> 编辑前的事件处理编辑项数据集。\n<code>grid-column</code> 列上面配置 <code>editor</code> 对象，<code>component</code> 用来渲染编辑组件。\n<code>attrs</code> 配置级联数据。\n<code>events</code> 来设置事件。\n具体参考下面示例。</p>\n',
        'en-US':
          '<p>You need to configure the <code>edit-config</code> object on the <code>grid</code> tag, and <code>activeMethod</code> before editing the event processing edit item data set. \nThe <code>editor</code> object is configured in the <code>grid-column</code> column. <code>component</code> is used to render the editing component. \n<code>attrs</code>Configure cascading data. \n<code>events</code> to set events. \nFor details, see the following example. </p>\n'
      },
      'codeFiles': ['grid_Example/dataCascading/arbitraryCascade.vue']
    }
  ],
  apis: [{ 'name': 'grid-cascade', 'type': 'component', 'properties': [], 'events': [], 'slots': [] }]
}
