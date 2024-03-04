export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'large-data-virtual-rolling',
      'name': { 'zh-CN': '虚拟滚动', 'en-US': 'Virtual Scrolling' },
      'desc': {
        'zh-CN': `
        <p>虚拟滚动配置步骤：1、表格属性设置 <code>height</code> 固定高度；2、表格属性设置 <code>optimization</code> 开启虚拟滚动。</p>
        <div class="tip custom-block">
          <p class="custom-block-title">optimization(object) 配置说明：</p>
          <ul>
            <li><code>delayHover</code>：当表格发生拖动、滚动...等行为时，至少多少毫秒之后才允许触发 hover 事件 默认 250ms</li>
            <li><code>scrollX</code>：横向 X 虚拟滚动配置（用于特殊场景手动调优）例如：{ gt: 100 }</li>
            <li><code>scrollY</code>：纵向 Y 虚拟滚动配置（用于特殊场景手动调优）例如：{ gt: 500 }</li>
          </ul>
        </div>
        <div class="tip custom-block">
          <p class="custom-block-title">开启虚拟滚动注意事项</p>
          <p>1、开启虚拟滚动的前提是需要保证每列的宽度一样，可以通过在 <code>&lt;tiny-grid&gt;</code> 标签上的 <code>column-width</code> 属性配置统一的宽度。\n2、开启虚拟滚动将会禁用列宽调整功能，因为列拖拽会改变列宽度，导致虚拟滚动渲染的列数计算有误从而引起表格样式错乱，所以禁止列拖拽。</p>\n
        </div>
      `,
        'en-US': ''
      },
      'codeFiles': ['large-data/virtual-rolling.vue']
    },
    {
      'demoId': 'large-data-grid-large-tree-data',
      'name': { 'zh-CN': '树表虚拟滚动', 'en-US': 'Virtual scrolling of the tree table' },
      'desc': {
        'zh-CN': `
        <p>通过 <code>optimization</code> 属性配置树表虚拟滚动执行方式，具体参考类型：<code>IOptimizationConfig</code> 。</p> 
        `,
        'en-US': ''
      },
      'codeFiles': ['large-data/grid-large-tree-data.vue']
    },
    {
      'demoId': 'large-data-full-data-loading',
      'name': { 'zh-CN': '全量加载', 'en-US': 'Full Load' },
      'desc': {
        'zh-CN':
          '<p>当表格数据过多时会有性能问题，用户可通过 <code>$refs</code> 获取表格对象，设置表格对象的 <code>loadData</code> 方法启用全量加载来优化性能。</p>\n',
        'en-US':
          '<p>Performance problems may occur when there is too much data in a table. You can use <code>$refs</code> to obtain table objects and set the <code>loadData</code> method of the table objects to enable full loading to optimize performance. </p>\n'
      },
      'codeFiles': ['large-data/full-data-loading.vue']
    },
    {
      'demoId': 'large-data-load-column',
      'name': { 'zh-CN': '生成 1000 列', 'en-US': 'Generate 1000 columns' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>loadColumn(columns)</code> 方法可以加载列配置，对于需要重新加载列的场景下可能会用到。</p>\n',
        'en-US':
          '<p>You can use the <code>loadColumn(columns)</code> method to load column configurations. This method may be used in scenarios where columns need to be reloaded. </p>\n'
      },
      'codeFiles': ['large-data/load-column.vue']
    },
    {
      'demoId': 'large-data-scroll-to',
      'name': { 'zh-CN': '滚动到指定位置', 'en-US': 'Scroll to the specified position' },
      'desc': {
        'zh-CN':
          '<div class="tip custom-block"><p class="custom-block-title">方法说明</p>\n<p> <code>scrollTo(scrollLeft, scrollTop)</code>：滚动到对应的位置\n<code>scrollToRow(row)</code>：滚动到对应的行\n<code>scrollToColumn(column)</code>：手滚动到对应的列。</p>\n</div>\n',
        'en-US':
          '<div class="tip custom-block"><p class="custom-block-title"> Method Description </p>\n<p> <code>scrollTo(scrollLeft, scrollTop)</code>: Scroll to the corresponding position \n<code>scrollToRow(row)</code>: Scroll to the corresponding row \n<code>scrollToColumn(column)</code>: Scroll to the corresponding column </p>\n</div>\n'
      },
      'codeFiles': ['large-data/scroll-to.vue']
    }
  ],
  apis: [{ 'name': 'grid-large-data', 'type': 'component', 'props': [], 'events': [], 'slots': [] }]
}
