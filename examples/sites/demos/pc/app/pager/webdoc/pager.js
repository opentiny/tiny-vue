export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': '<p>详细用法参考如下示例，通过 <code>total</code> 设置总条数。</p>',
        'en-US':
          'For detailed usage, refer to the following example, and set the total number of entries through <code>total</code> .'
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'current-page',
      'name': { 'zh-CN': '当前页', 'en-US': 'Current Page' },
      'desc': {
        'zh-CN': '<p>通过 <code>current-page</code> 设置初始加载页码数。</p>\n',
        'en-US': '<p>Use <code>current-page</code> to set the number of initially loaded pages.</p>\n'
      },
      'codeFiles': ['current-page.vue']
    },
    {
      'demoId': 'page-size',
      'name': { 'zh-CN': '每页显示数量', 'en-US': 'Display quantity per page' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>page-size</code> 设置每页显示条目个数， <code>page-sizes</code> 设置可选择的 <code>page-size</code> 列表，当 <code>page-size</code> 发生变化时，会触发 <code>size-change</code> 事件。</p>\n',
        'en-US':
          '<p>By setting the number of displayed entries per page through <code>page size</code> , <code>page sizes</code> provides a switchable <code>page size</code> list. When the <code>page size</code> changes, the <code>size change</code> event is triggered.</p>\n'
      },
      'codeFiles': ['page-size.vue']
    },
    {
      'demoId': 'current-change',
      'name': { 'zh-CN': '分页事件current-change', 'en-US': 'Paging event current-change' },
      'desc': {
        'zh-CN': '<p> <code>current-change</code> 切换当前页码时触发。</p>\n',
        'en-US': '<p> <code>current-change</code> Triggered when the current page number is switched.</p>\n'
      },
      'codeFiles': ['current-change.vue']
    },
    {
      'demoId': 'prev-next-click',
      'name': { 'zh-CN': '上一页、下一页事件', 'en-US': 'Prev click and next click event' },
      'desc': {
        'zh-CN': '<p> <code>prev-click</code> 切换至上一页时触发， <code>next-click</code> 切换至下一页时触发。</p>\n',
        'en-US':
          '<p>Triggered when switching to the previous page, and triggered when switching to the next page.</p>\n'
      },
      'codeFiles': ['prev-next-click.vue']
    },
    {
      'demoId': 'align',
      'name': { 'zh-CN': '对齐方式', 'en-US': 'Align mode' },
      'desc': {
        'zh-CN': '<p>通过 <code>align</code> 设置对齐方式。</p>\n',
        'en-US': '<p>Set the alignment method through <code>align</code> .</p>'
      },
      'codeFiles': ['align.vue']
    },
    {
      'demoId': 'disabled-and-size',
      'name': { 'zh-CN': '禁用和尺寸', 'en-US': 'Disabled and size' },
      'desc': {
        'zh-CN': '<p>通过 <code>disabled</code> 设置分页禁用，通过 <code>size</code> 设置分页尺寸。</p>\n',
        'en-US': 'Set paging disabled through <code>disabled</code> , and set paging size through <code>size</code> .'
      },
      'codeFiles': ['disabled-and-size.vue']
    },
    {
      'demoId': 'custom-layout',
      'name': { 'zh-CN': '自定义布局和插槽', 'en-US': 'Custom pager layout and slot' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>layout</code> 设置分页想要显示的子组件和顺序，子组件间用 <code>,</code> 分隔，子组件有 <code>total</code> 总条数、 <code>sizes</code> 分页大小、 <code>prev</code> 上一页、 <code>pager</code> 页码、 <code>next</code> 下一页、 <code>slot</code> 默认插槽、 <code>jumper</code> 页跳转、 <code>current</code> 当前页。</p>\n',
        'en-US':
          '<p>Set the subcomponents and order to be displayed through <code>layout</code> , separated by <code>,</code> . The subcomponents include <code>total</code> total count, <code>sizes</code> page size, <code>prev</code> previous page, <code>pager</code> page number, <code>next</code> next page, <code>slot</code> default slot, <code>jumper</code> page jump, <code>current</code> Current page.</p>\n'
      },
      'codeFiles': ['custom-layout.vue']
    },
    {
      'demoId': 'pager-mode',
      'name': { 'zh-CN': '分页模式', 'en-US': 'Pager mode' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>mode</code> 设置分页组件组件渲染模式，不同模式是组件内置的layout设置， <code>mode</code> 优先级高于 <code>layout</code> 。</p>\n',
        'en-US':
          '<p>Set the rendering mode of pagination component components through <code>mode</code> . The different modes are the built-in layout settings of the components, and the priority of <code>mode</code> is higher than that of <code>layout</code> .</p>\n'
      },
      'codeFiles': ['pager-mode.vue']
    },
    {
      'demoId': 'before-page-change',
      'name': { 'zh-CN': '分页事件before-page-change', 'en-US': 'Paging event before-page-change' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>is-before-page-change</code> 开启前置处理特性，翻页或者改变页大小时，触发 <code>before-page-change</code> 事件。事件函数类型为<a href="#IBeforeChangeFunc">IBeforeChangeFunc</a>，调用传参中的 <code>callback</code> 继续变更，调用 <code>rollback</code> 中止变更。</p>\n',
        'en-US':
          '<p>By enabling the pre processing feature through <code>is before page change</code> , the <code>before page change</code> event is triggered when flipping or changing page size. The event function type is<a="#IBeforeChangeFunc">IBeforeChangeFunc</a>, call <code>callback</code> in the passed parameters to continue the change, and call <code>rollback</code> to abort the change.</p>\n'
      },
      'codeFiles': ['before-page-change.vue']
    },
    {
      'demoId': 'page-count',
      'name': { 'zh-CN': '总页数', 'en-US': 'Total Pages' },
      'desc': {
        'zh-CN': '<p>通过 <code>page-count</code> 设置总页数。</p>\n',
        'en-US': '<p>Set the total number of pages through <code>page-count</code> .</p>\n'
      },
      'codeFiles': ['page-count.vue']
    },
    {
      'demoId': 'popper-append-to-body',
      'name': { 'zh-CN': '分页下拉框显示位置', 'en-US': 'Paging drop-down list box display position' },
      'desc': {
        'zh-CN':
          '<p> <code>popper-append-to-body</code> 可设置分页下拉框元素是否追加到body元素节点下，该属性的默认值为 <code>true</code> ,默认追加到body元素节点下 。</p>\n<p>若不想追加到body元素节点下，设置 <code>:popper-append-to-body="false"</code> 。</p>',
        'en-US':
          'Indicates whether to add an element in the <p> <code>popper-append-to-body</code> paging drop-down list box to the body element node. The default value of this attribute is <code>true</code> , indicating that the element is added to the body element node by default. </p>\n<p>If you do not want to add it to the body element node, set <code>:popper-append-to-body="false"</code> .</p>'
      },
      'codeFiles': ['page-append-to-body.vue']
    },
    {
      'demoId': 'popper-class',
      'name': { 'zh-CN': '自定义分页下拉框的类名', 'en-US': 'Class name of the customized paging drop-down list box' },
      'desc': {
        'zh-CN': '<p> <code>popper-class</code> 可以自定义分页下拉框的类名。</p>',
        'en-US': '<p> <code>popper-class</code> You can customize the class name of the paging drop-down list box.</p>'
      },
      'codeFiles': ['popper-class.vue']
    },
    {
      'demoId': 'custom-total',
      'name': { 'zh-CN': '自定义总条数', 'en-US': 'Customized pagination layout' },
      'desc': {
        'zh-CN':
          '<p> <code>custom-total</code> 可以自定义分页总条数显示文本。传值为文本则显示传入的文本；传值为 <code>true</code> 时，小于 <code>10万</code> 正常显示数字，大于 <code>10万</code> 显示 <code>10万+</code> 。以此类推显示 <code>100万+</code> 、 <code>1千万+</code> ，大于 <code>1千万</code> 后统一都显示为 <code>1千万+</code> 。</p>',
        'en-US':
          '<p> <code>custom total</code> You can customize the total number of pages to display text. If the value is passed as text, the incoming text will be displayed; When the value is passed as <code>true</code> , a number is displayed normally when it is less than <code>100000</code> , and when it is greater than <code>100000</code> , it is displayed as <code>100K+</code> . By analogy, display <code>1M+</code> , <code>10M+</code> , and display as <code>10M+</code> when it is greater than <code>10 million</code> .\n'
      },
      'codeFiles': ['custom-total.vue']
    },
    {
      'demoId': 'show-total-loading',
      'name': { 'zh-CN': '总条数加载中', 'en-US': 'Number of page buttons' },
      'desc': {
        'zh-CN': '<p> <code>show-total-loading</code> 可以设置总条数是否加载中。</p>',
        'en-US': '<p> <code>pager-count</code> Set the number of pages.</p>\n'
      },
      'codeFiles': ['show-total-loading.vue']
    },
    {
      'demoId': 'pager-count',
      'name': { 'zh-CN': '页码按钮数量', 'en-US': 'Hide pagination when there is only one page.' },
      'desc': {
        'zh-CN': '<p>通过 <code>pager-count</code> 设置页码数量。</p>\n',
        'en-US': '<p> <code>hide-on-single-page</code> Hide paging when there is only one page.</p>\n'
      },
      'codeFiles': ['pager-count.vue']
    },
    {
      'demoId': 'hide-on-single-page',
      'name': { 'zh-CN': '只有一页时隐藏分页', 'en-US': 'Grid Table Pagination' },
      'desc': {
        'zh-CN': '<p>当 <code>hide-on-single-page</code> 为 <code>true</code> 时，只有一页时会隐藏分页。</p>\n',
        'en-US': '<p>When there is only one page, the pagination will be hidden.</p>\n'
      },
      'codeFiles': ['hide-on-single-page.vue']
    },
    {
      'demoId': 'custom-next-prev-text',
      'name': { 'zh-CN': '自定义上下页按钮文本', 'en-US': 'Pagination Size' },
      'desc': {
        'zh-CN': '<p>通过 <code>prev-text</code> , <code>next-text</code> 自定义上下页按钮文本。</p>\n',
        'en-US':
          '<p>Customize the text of the up and down buttons through <code>prev-text</code> , <code>next-text</code> .</p>\n'
      },
      'codeFiles': ['custom-next-prev-text.vue']
    },
    {
      'demoId': 'pager-in-grid',
      'name': { 'zh-CN': 'Grid 表格分页', 'en-US': 'Pagination Disabled' },
      'desc': {
        'zh-CN':
          '<p>Grid 表格使用分页组件\n该示例中的 <code>services/getGridMockData</code> 服务需要自行实现，示例模拟了远程服务返回的数据。</p>\n',
        'en-US':
          '<p>The Grid table uses pagination components  n In this example, the <code>services/getGridMockData</code> service needs to be self implemented, and the example simulates the data returned by remote services.</p>\n'
      },
      'codeFiles': ['pager-in-grid.vue']
    }
  ],
  apis: [
    {
      'name': 'pager',
      'type': 'component',
      'props': [
        {
          'name': 'align',
          'type': 'left | center | right',
          'defaultValue': '',
          'desc': {
            'zh-CN': '分页对齐方式。',
            'en-US': 'Paging alignment.'
          },
          'demoId': 'align'
        },
        {
          'name': 'current-page',
          'type': 'number',
          'defaultValue': '1',
          'desc': {
            'zh-CN': '当前所在页。',
            'en-US': 'The current page.'
          },
          'demoId': 'current-page'
        },
        {
          'name': 'custom-total',
          'type': 'boolean, string',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '自定义总条数，传值为true时，显示10万+、100万+，传值为字符串则显示传入的字符串',
            'en-US':
              'Maximum number of page buttons to be displayed in the middle in number/complete mode. Number of page buttons. When the total number of pages exceeds the value, the buttons will be collapsed. The value of this attribute can be an odd number ranging from 5 to 21'
          },
          'demoId': 'custom-total'
        },
        {
          'name': 'disabled',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '禁用分页',
            'en-US': 'Disabled pager'
          },
          'demoId': 'disabled-and-size'
        },
        {
          'name': 'hide-on-single-page',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '只有一页时是否隐藏',
            'en-US': 'Hide when there is only one page'
          },
          'demoId': 'hide-on-single-page'
        },
        {
          'name': 'is-before-page-change',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN':
              '是否开启前置处理特性。开启后，翻页或者改变页大小不会立即生效，由用户处理业务逻辑，详看事件before-page-change和demo',
            'en-US':
              'Whether to enable the preprocessing feature. After opening, flipping or changing the page size will not take effect immediately. The user handles the business logic, as detailed in the events before page change and demo'
          },
          'demoId': 'before-page-change'
        },
        {
          'name': 'layout',
          'type': 'string',
          'defaultValue': 'total, prev, pager, next, jumper',
          'desc': {
            'zh-CN':
              '组件布局，子组件名用逗号分隔;该属性的可选值为 sizes, prev, pager, next, jumper, current, total, slot。',
            'en-US':
              'Component layout, with sub component names separated by commas; The optional values for this attribute are sizes, preview, pager, next, jumper, current, total, slot.'
          },
          'demoId': 'custom-layout'
        },
        {
          'name': 'mode',
          'type': 'number | simple | complete | fixed',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置分页组件显示模式，此属性优先级大于layout',
            'en-US': 'Set the display mode of pagination components, which takes priority over layout'
          },
          'demoId': 'pager-mode'
        },
        {
          'name': 'next-text',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '替代图标显示的下一页文字',
            'en-US': 'Replace icon display with next page text'
          },
          'demoId': 'custom-next-prev-text'
        },
        {
          'name': 'page-count',
          'type': 'number',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '总页数，total 和 page-count 设置任意一个就可以达到显示页码的功能；如果要支持 page-sizes 的更改，则需要使用 total 属性',
            'en-US':
              'Setting either the total number of pages, total, or page count can achieve the function of displaying page numbers; If you want to support changes to page sizes, you need to use the total attribute'
          },
          'demoId': 'page-count'
        },
        {
          'name': 'page-size/v-model:page-size',
          'type': 'number',
          'defaultValue': '10',
          'desc': {
            'zh-CN': '每页显示条目个数',
            'en-US': 'Number of items displayed on each page'
          },
          'demoId': 'page-size'
        },
        {
          'name': 'page-sizes',
          'type': 'number[]',
          'defaultValue': '[10, 20, 30, 40, 50, 100]',
          'desc': {
            'zh-CN': '设置指定可选择的每页显示条数;每页显示个数选择器的选项设置',
            'en-US':
              'Set the specified number of selectable display items per page; Option settings for displaying number selectors per page'
          },
          'demoId': 'page-size'
        },
        {
          'name': 'pager-count',
          'type': 'number',
          'defaultValue': '7',
          'desc': {
            'zh-CN':
              '设置页码按钮需要显示的最多个数;当总页数超过该值时会折叠;该属性的可选值为 大于等于 5 且小于等于 21 的奇数',
            'en-US':
              'Set the maximum number of page number buttons to display; When the total number of pages exceeds this value, it will collapse; The optional values for this attribute are odd numbers greater than or equal to 5 and less than or equal to 21'
          },
          'demoId': 'pager-count'
        },
        {
          'name': 'popper-append-to-body',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '是否将弹出框插入至 body 元素。可将该属性设置为 false (可参考 select 组件)',
            'en-US':
              'Whether to insert the pop-up box into the body element. You can set this attribute to false (refer to the select component)'
          },
          'demoId': 'page-append-to-body'
        },
        {
          'name': 'popper-class',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '为 popper 添加类名(可参考 popover 组件)',
            'en-US':
              'Indicates whether to insert a pop-up box to the body element. If an error occurs in locating a fault in the dialog box that is displayed, set this attribute to false (for details, see the select component).'
          },
          'demoId': 'popper-class'
        },
        {
          'name': 'prev-text',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '替代图标显示的上一页文字',
            'en-US': 'Replace the previous page text displayed by the icon'
          },
          'demoId': 'custom-next-prev-text'
        },
        {
          'name': 'show-total-loading',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '总条数是否加载中',
            'en-US': 'Is the total number of items being loaded'
          },
          'demoId': 'show-total-loading'
        },
        {
          'name': 'size',
          'type': 'mini',
          'defaultValue': '',
          'desc': {
            'zh-CN': '定义分页尺寸，该属性的可选值为 mini',
            'en-US': 'Define the page size, and the optional value for this attribute is mini'
          },
          'demoId': 'disabled-and-size'
        },
        {
          'name': 'total',
          'type': 'number',
          'defaultValue': '',
          'desc': {
            'zh-CN': '总条目数',
            'en-US': 'Total number of entries'
          },
          'demoId': 'basic-usage'
        }
      ],
      'events': [
        {
          'name': 'before-page-change',
          'type': 'IBeforeChangeFunc',
          'typeAnchorName': 'IBeforeChangeFunc',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '当is-before-page-change设置为true后，翻页或改变页大小前会触发此事件，用户可以在参数中获取相应事件和分页相关信息控制后续逻辑，详见demo',
            'en-US':
              'When the is before page change is set to true, this event will be triggered before flipping or changing the page size. Users can obtain the corresponding event and pagination related information in the parameters to control the subsequent logic. Please refer to the demo for details'
          },
          'demoId': 'before-page-change'
        },
        {
          'name': 'current-change',
          'type': '(currentPage: number) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': 'currentPage 改变时会触发',
            'en-US': 'Triggered when the currentPage changes'
          },
          'demoId': 'current-change'
        },
        {
          'name': 'next-click',
          'type': '(currentPage: number) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '点击下一页按钮改变当前页后触发',
            'en-US': 'Triggered after clicking the next page button to change the current page'
          },
          'demoId': 'prev-next-click'
        },
        {
          'name': 'prev-click',
          'type': '(currentPage: number) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '点击上一页按钮改变当前页后触发',
            'en-US': 'Triggered after clicking the previous page button to change the current page'
          },
          'demoId': 'prev-next-click'
        },
        {
          'name': 'size-change',
          'type': '() => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置分页跳转后的事件;pageSize 改变时会触发;arg1: pageSize 新的当前值',
            'en-US':
              'Set the event after pagination. This event is triggered when pageSize changes. arg1: pageSize new current value'
          },
          'demoId': 'page-size'
        }
      ],
      'slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '自定义内容，需要在 layout 中列出 slot',
            'en-US': 'User-defined content. Slots must be listed in the layout'
          },
          'demoId': 'custom-layout'
        }
      ]
    }
  ],
  types: [
    {
      name: 'IBeforeChangeFunc',
      type: 'interface',
      code: `
// 函数接受一个参数
interface IBeforeChangeFunc {
  (param: IBeforeChangeParam): void
}
interface IBeforeChangeParam {
  callback: () => void   // 回调函数，调用则继续本次变更
  rollback: () => void   // 回滚函数，调用则阻止本次变更
  newPage: number // 变更后所在页
  newPageSize: number // 变更后分页大小
  currentPage: number // 当前所在页
  currentPageSize: number // 当前分页大小
}`
    }
  ]
}
