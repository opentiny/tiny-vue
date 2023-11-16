export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'large-data-scroll-paging',
      'name': { 'zh-CN': '滚动分页', 'en-US': 'Scroll Pagination' },
      'desc': {
        'zh-CN':
          '<p>滚动分页配置步骤：\n1、表格属性设置 <code>fetch-data</code> 开启服务请求；\n2、表格属性设置 <code>scroll-load</code> 开启滚动分页。</p>\n',
        'en-US':
          '<p>Scrolling pagination configuration procedure:\n1. Set the table attribute <code>fetch-data</code> to enable the service request. \n2. Set <code>scroll-load</code> to enable scrolling. </p>\n'
      },
      'codeFiles': ['large-data/scroll-paging.vue']
    },
    {
      'demoId': 'large-data-virtual-rolling',
      'name': { 'zh-CN': '虚拟滚动', 'en-US': 'Virtual Scrolling' },
      'desc': {
        'zh-CN':
          '<p>虚拟滚动配置步骤：\n1、表格属性设置 <code>height</code> 固定高度；\n2、表格属性设置 <code>optimization</code> 开启虚拟滚动。</p>\n<div class="tip custom-block"><p class="custom-block-title">optimization(object) 配置说明</p>\n<p>| delayHover(number) | 当表格发生拖动、滚动...等行为时，至少多少毫秒之后才允许触发 hover 事件 默认 250ms |\n| scrollX(object) | 横向 X 虚拟滚动配置（用于特殊场景手动调优）例如：{ gt: 100 } |\n| scrollY(object) | 纵向 Y 虚拟滚动配置（用于特殊场景手动调优）例如：{ gt: 500 } |</p>\n</div>\n<div class="tip custom-block"><p class="custom-block-title">开启虚拟滚动注意事项</p>\n<p>1、开启虚拟滚动的前提是需要保证每列的宽度一样，可以通过在 <code>&lt;tiny-grid&gt;</code> 标签上的 <code>column-width</code> 属性配置统一的宽度。\n2、开启虚拟滚动将会禁用列宽调整功能，因为列拖拽会改变列宽度，导致虚拟滚动渲染的列数计算有误从而引起表格样式错乱，所以禁止列拖拽。</p>\n</div>\n',
        'en-US':
          '<p>Virtual scrolling configuration procedure:\n1. Set <code>height</code> to a fixed height for table attributes. \n2. Set <code>optimization</code> to enable virtual scrolling. </p>\n<div class="tip custom-block"><p class="custom-block-title">optimization(object) configuration description: </p>\n<p>| delayHover(number) | (ms) after which the hover event can be triggered when a table is dragged or scrolled. The default value is 250 ms. |\n| scrollX(object) | Horizontal X virtual scrolling configuration (for manual optimization in special scenarios) Example: {gt: 100} |\n| scrollY(object) | Vertical Y Virtual Scrolling Configuration (for manual optimization in special scenarios) For example, {gt: 500} |</p>\n</div>\n<div class="tip custom-block"><p class="custom-block-title"> Precautions for enabling virtual scrolling</p>\n<p>1. Before enabling virtual scrolling, ensure that the width of each column is the same. You can configure the uniform width by setting the <code>column-width</code> attribute on the <code>&lt;tiny-grid&gt;</code> tag. \n2. Enabling virtual scrolling will disable the column width adjustment function. Column dragging will change the column width. As a result, the number of columns in virtual scrolling rendering is incorrectly calculated and the table style is disordered. Therefore, column dragging is prohibited. </p>\n</div>\n'
      },
      'codeFiles': ['large-data/virtual-rolling.vue']
    },
    {
      'demoId': 'large-data-grid-large-tree-data',
      'name': { 'zh-CN': '树表虚拟滚动', 'en-US': 'Virtual scrolling of the tree table' },
      'desc': {
        'zh-CN':
          '<p><table class="table"><thead><tr><th>名称</th> <th>类型</th> <th>描述</th> <th>默认值</th></tr></thead> <tbody><tr><td>optimization.scrollX.gt</td> <td>number</td> <td>指定大于多少列时自动启动 X 虚拟滚动</td> <td>100</td></tr> <tr><td>optimization.scrollX.rSize</td> <td>number</td> <td>每次渲染列数</td> <td></td></tr> <tr><td>optimization.scrollX.vSize</td> <td>number</td> <td>指定可视区域列数</td> <td></td></tr> <tr><td>optimization.scrollX.adaptive</td> <td>boolean</td> <td>自动适配最优的渲染方式（设置为 false 列数组只会在滚动完成后截取一次，便于大数据场景提升性能，但是会短暂白屏，渲染完成后即恢复）</td> <td>true</td></tr> <tr><td>optimization.scrollY.gt</td> <td>number</td> <td>指定大于多少行时自动启动 Y 虚拟滚动</td> <td>500</td></tr> <tr><td>optimization.scrollY.rSize</td> <td>number</td> <td>每次渲染行数</td> <td></td></tr> <tr><td>optimization.scrollY.adaptive</td> <td>boolean</td> <td>自动适配最优的渲染方式（设置为 false 行数组只会在滚动完成后截取一次，便于大数据场景提升性能，但是会短暂白屏，渲染完成后即恢复）</td> <td>true</td></tr></tbody></table></p>\n</div>\n',
        'en-US':
          '<p><table class="table"><thead><tr><th> Name</th><th>Type</th><th>Description</th>Default Value </th></tr></thead> <tbody><tr><td>optimization.scrollX.gt</td> <td>number</td> <td> Specifies the number of columns to be automatically started when the number of columns is greater than X Virtual scrolling </td> <td>100</td></tr> <tr><td>optimization.scrollX.rSize</td> <td>number</td> <td> number of columns to be rendered each time </td> <td></td></tr> <tr><td>optimization.scrollX.vSize</td> <td>number</td> <td> number of columns in the visible area </td> <td></td></tr> <tr><td>optimization.scrollX.adaptive</td> <td>boolean</td> <td> Automatically adapts to the optimal rendering mode (If this parameter is set to false, the column array is intercepted only once after the scrolling is complete, which improves the performance in big data scenarios. However, the white screen will be displayed for a short time and will be restored after the rendering is complete.) </td> <td>true</td></tr> <tr><td>optimization.scrollY.gt</td> <td>number</td> <td> specifies the number of lines. Y: The virtual scrolling function is automatically enabled. </td> <td>500</td></tr> <tr><td>optimization.scrollY.rSize</td> <td>number</td> <td>: number of lines to be rendered each time. </td> <td></td></tr> <tr><td>optimization.scrollY.adaptive</td> <td>boolean</td> <td>: automatically adapts to the optimal rendering mode. (If this parameter is set to false, the row array is captured only once after the scrolling is complete, which improves the performance in big data scenarios. However, white screen will be displayed for a short time and will be restored after the rendering is complete.) </td> <td>true</td></tr></tbody></table></p>\n</div>\n'
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
          '<div class="tip custom-block"><p class="custom-block-title">方法说明</p>\n<p> <code>scrollTo(scrollLeft, scrollTop)</code>：滚动到对应的位置\n<code>scrollToRow(row)</code>：滚动到对应的行\n<code>scrollToColumn(column)</code>：手滚动到对应的列</p>\n</div>\n',
        'en-US':
          '<div class="tip custom-block"><p class="custom-block-title"> Method Description </p>\n<p> <code>scrollTo(scrollLeft, scrollTop)</code>: Scroll to the corresponding position \n<code>scrollToRow(row)</code>: Scroll to the corresponding row \n<code>scrollToColumn(column)</code>: Scroll to the corresponding column </p>\n</div>\n'
      },
      'codeFiles': ['large-data/scroll-to.vue']
    }
  ],
  apis: [{ 'name': 'grid-large-data', 'type': 'component', 'properties': [], 'events': [], 'slots': [] }]
}
