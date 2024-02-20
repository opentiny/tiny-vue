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
        'zh-CN': '<p>通过 <code>total</code> 设置总条数。</p>',
        'en-US': 'Set the total number of entries through <code>total</code> .'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'current-page',
      name: {
        'zh-CN': '当前所在页',
        'en-US': 'Current Page'
      },
      desc: {
        'zh-CN': '<p>通过 <code>current-page</code> 设置初始加载页码数。</p>\n',
        'en-US': '<p>Use <code>current-page</code> to set the number of initially loaded pages.</p>\n'
      },
      codeFiles: ['current-page.vue']
    },
    {
      demoId: 'page-size',
      name: {
        'zh-CN': '每页显示数量',
        'en-US': 'Display quantity per page'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>page-size</code> 设置每页显示条目数， <code>page-sizes</code> 设置可选择的 <code>page-size</code> 列表。</p>\n',
        'en-US':
          '<p>By setting the number of displayed entries per page through <code>page size</code> , <code>page sizes</code> provides a switchable <code>page size</code> list.</p>\n'
      },
      codeFiles: ['page-size.vue']
    },
    {
      demoId: 'align',
      name: {
        'zh-CN': '对齐方式',
        'en-US': 'Align mode'
      },
      desc: {
        'zh-CN': '<p>通过 <code>align</code> 设置对齐方式。</p>\n',
        'en-US': '<p>Set the alignment method through <code>align</code> .</p>'
      },
      codeFiles: ['align.vue']
    },
    {
      demoId: 'disabled-and-size',
      name: {
        'zh-CN': '禁用和尺寸',
        'en-US': 'Disabled and size'
      },
      desc: {
        'zh-CN': '<p>通过 <code>disabled</code> 设置分页禁用，通过 <code>size</code> 设置分页尺寸。</p>\n',
        'en-US': 'Set paging disabled through <code>disabled</code> , and set paging size through <code>size</code> .'
      },
      codeFiles: ['disabled-and-size.vue']
    },
    {
      demoId: 'custom-layout',
      name: {
        'zh-CN': '自定义布局和插槽',
        'en-US': 'Custom pager layout and slot'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>layout</code> 设置分页想要显示的子组件和顺序，子组件间用 <code>,</code> 分隔，子组件有 <code>total</code> 总条数、 <code>sizes</code> 分页大小、 <code>prev</code> 上一页、 <code>pager</code> 页码、 <code>next</code> 下一页、 <code>slot</code> 默认插槽、 <code>jumper</code> 页跳转、 <code>current</code> 当前页。</p>\n',
        'en-US':
          '<p>Set the subcomponents and order to be displayed through <code>layout</code> , separated by <code>,</code> . The subcomponents include <code>total</code> total count, <code>sizes</code> page size, <code>prev</code> previous page, <code>pager</code> page number, <code>next</code> next page, <code>slot</code> default slot, <code>jumper</code> page jump, <code>current</code> Current page.</p>\n'
      },
      codeFiles: ['custom-layout.vue']
    },
    {
      demoId: 'pager-mode',
      name: {
        'zh-CN': '分页模式',
        'en-US': 'Pager mode'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>mode</code> 设置分页组件组件渲染模式，不同模式是组件内置的 <code>layout</code> 设置， <code>mode</code> 优先级高于 <code>layout</code> 。</p>\n',
        'en-US':
          '<p>Set the rendering mode of pagination component components through <code>mode</code> . The different modes are the built-in layout settings of the components, and the priority of <code>mode</code> is higher than that of <code>layout</code> .</p>\n'
      },
      codeFiles: ['pager-mode.vue']
    },
    {
      demoId: 'page-count',
      name: {
        'zh-CN': '总页数',
        'en-US': 'Total Pages'
      },
      desc: {
        'zh-CN': '<p>通过 <code>page-count</code> 设置总页数。</p>\n',
        'en-US': '<p>Set the total number of pages through <code>page-count</code> .</p>\n'
      },
      codeFiles: ['page-count.vue']
    },
    {
      demoId: 'popper-append-to-body',
      name: {
        'zh-CN': '分页下拉框显示位置',
        'en-US': 'Paging drop-down list box display position'
      },
      desc: {
        'zh-CN': '<p>通过 <code>popper-append-to-body</code> 设置分页下拉框元素是否追加到body元素节点下。</p>',
        'en-US':
          'Indicates whether to add an element in the <p> <code>popper-append-to-body</code> paging drop-down list box to the body element node.</p>'
      },
      codeFiles: ['popper-append-to-body.vue']
    },
    {
      demoId: 'popper-class',
      name: {
        'zh-CN': '自定义分页下拉框的类名',
        'en-US': 'Class name of the customized paging drop-down list box'
      },
      desc: {
        'zh-CN': '<p>通过 <code>popper-class</code> 添加自定义分页下拉框的类名。</p>',
        'en-US':
          '<p>By <code>popper-class</code> You can customize the class name of the paging drop-down list box.</p>'
      },
      codeFiles: ['popper-class.vue']
    },
    {
      demoId: 'custom-total',
      name: {
        'zh-CN': '自定义总条数',
        'en-US': 'Customized pagination layout'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>custom-total</code> 设置分页总条数显示文本。传值为文本则显示传入的文本，传值为 <code>true</code> 时，<code>0 ～ 99999</code> 显示具体数值， <code>100000 ～ 999999</code> 显示 <code>10万+</code> 。<code>1000000 ～ 9999999</code> 显示 <code>100万+</code> 。超过 <code>10000000</code> 显示 <code>1千万+</code></p>',
        'en-US':
          '<p> <code>custom total</code> You can customize the total number of pages to display text. If the value is passed as text, the incoming text will be displayed; When the value is passed as <code>true</code> , a number is displayed normally when it is less than <code>100000</code> , and when it is greater than <code>100000</code> , it is displayed as <code>100K+</code> . By analogy, display <code>1M+</code> , <code>10M+</code> , and display as <code>10M+</code> when it is greater than <code>10 million</code> .\n'
      },
      codeFiles: ['custom-total.vue']
    },
    {
      demoId: 'show-total-loading',
      name: {
        'zh-CN': '总条数加载中',
        'en-US': 'Number of page buttons'
      },
      desc: {
        'zh-CN': '<p>通过 <code>show-total-loading</code> 设置总条数是否加载中。</p>',
        'en-US': '<p> <code>pager-count</code> Set the number of pages.</p>\n'
      },
      codeFiles: ['show-total-loading.vue']
    },
    {
      demoId: 'pager-count',
      name: {
        'zh-CN': '页码按钮数量',
        'en-US': 'Hide pagination when there is only one page.'
      },
      desc: {
        'zh-CN': '<p>通过 <code>pager-count</code> 设置页码数量。</p>\n',
        'en-US': '<p> <code>hide-on-single-page</code> Hide paging when there is only one page.</p>\n'
      },
      codeFiles: ['pager-count.vue']
    },
    {
      demoId: 'hide-on-single-page',
      name: {
        'zh-CN': '单页时隐藏',
        'en-US': 'Grid Table Pagination'
      },
      desc: {
        'zh-CN': '<p>通过 <code>hide-on-single-page</code> 设置当仅有一页时是否隐藏分页组件。</p>\n',
        'en-US': '<p>When there is only one page, the pagination will be hidden.</p>\n'
      },
      codeFiles: ['hide-on-single-page.vue']
    },
    {
      demoId: 'custom-next-prev-text',
      name: {
        'zh-CN': '自定义上下页按钮文本',
        'en-US': 'Pagination Size'
      },
      desc: {
        'zh-CN': '<p>通过 <code>prev-text</code> , <code>next-text</code> 自定义上下页按钮文本。</p>\n',
        'en-US':
          '<p>Customize the text of the up and down buttons through <code>prev-text</code> , <code>next-text</code> .</p>\n'
      },
      codeFiles: ['custom-next-prev-text.vue']
    },
    {
      demoId: 'pager-in-grid',
      name: {
        'zh-CN': '表格分页',
        'en-US': 'Pagination Disabled'
      },
      desc: {
        'zh-CN':
          '<p>Grid 表格使用分页组件，该示例中的 <code>services/getGridMockData</code> 服务需要自行实现，示例模拟了远程服务返回的数据。</p>\n',
        'en-US':
          '<p>The Grid table uses pagination components  n In this example, the <code>services/getGridMockData</code> service needs to be self implemented, and the example simulates the data returned by remote services.</p>\n'
      },
      codeFiles: ['pager-in-grid.vue']
    },
    {
      demoId: 'before-page-change',
      name: {
        'zh-CN': '分页变更前置处理',
        'en-US': 'Pre processing of pagination changes'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>is-before-page-change</code> 开启前置处理特性，翻页或者改变页大小时会触发 <code>before-page-change</code> 事件。调用传参中的 <code>callback</code> 继续变更，调用 <code>rollback</code> 中止变更。</p>\n',
        'en-US':
          '<p>By enabling the pre processing feature through <code>is before page change</code> , the <code>before page change</code> event is triggered when flipping or changing page size. The event function type is <a="#IBeforeChangeEvent">IBeforeChangeEvent</a> , call <code>callback</code> in the passed parameters to continue the change, and call <code>rollback</code> to abort the change.</p>\n'
      },
      codeFiles: ['before-page-change.vue']
    },
    {
      demoId: 'pager-event',
      name: {
        'zh-CN': '事件',
        'en-US': 'Event'
      },
      desc: {
        'zh-CN':
          '<p> \n        当前所在页改变后会触发 <code>current-change</code> 事件。<br />\n        每页展示条目数改变后会触发 <code>size-change</code> 事件。<br />\n        点击上一页按钮改变当前页后触发 <code>prev-click</code> 事件、下一页触发 <code>next-click</code> 事件。<br />\n        当在最后一页切换每页条目数时会同时触发 <code>current-change</code> 、<code>size-change</code> 两个事件，如果两个事件调用同一函数（比如后台拉取数据），则需要则做防抖处理。\n        </p>',
        'en-US': '<p> <code>current-change</code> Triggered when the current page number is switched.</p>\n'
      },
      codeFiles: ['pager-event.vue']
    }
  ]
}
