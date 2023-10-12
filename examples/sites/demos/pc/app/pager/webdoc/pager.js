export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN':
          "详细用法参考如下示例,可以通过<code>align</code>属性设置分页的对齐方式，可选值有<code>['left', 'center', 'right']</code>",
        'en-US': 'For details, see the following example.'
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'current-page',
      'name': { 'zh-CN': '当前页', 'en-US': 'Current Page' },
      'desc': {
        'zh-CN': '<p>通过 <code>current-page</code> 设置初始加载页码数, 通过 <code>total</code> 设置总条数</p>\n',
        'en-US':
          '<p>Use <code>current-page</code> to set the number of initially loaded pages, and use <code>total</code> to set the total number of records</p>\n'
      },
      'codeFiles': ['current-page.vue']
    },
    {
      'demoId': 'pager-mode-number',
      'name': { 'zh-CN': 'number 模式', 'en-US': 'number mode' },
      'desc': {
        'zh-CN': '<p>通过 <code>mode=&quot;number&quot;</code> 设置组件渲染模式</p>\n',
        'en-US': '<p>Set the component rendering mode through <code>mode=&quot;number&quot;</code></p>\n'
      },
      'codeFiles': ['pager-mode-number.vue']
    },
    {
      'demoId': 'pager-mode-fixed',
      'name': { 'zh-CN': 'fixed 模式', 'en-US': 'fixed mode' },
      'desc': {
        'zh-CN': '<p>通过 <code>mode=&quot;fixed&quot;</code> 设置组件渲染模式</p>\n',
        'en-US': '<p>Set the component rendering mode through <code>mode=&quot;fixed&quot;</code></p>\n'
      },
      'codeFiles': ['pager-mode-fixed.vue']
    },
    {
      'demoId': 'pager-mode-simple',
      'name': { 'zh-CN': 'simple 模式', 'en-US': 'simple mode' },
      'desc': {
        'zh-CN': '<p>通过 <code>mode=&quot;simple&quot;</code> 设置组件渲染模式</p>\n',
        'en-US': '<p>Set the component rendering mode through <code>mode=&quot;simple&quot;</code></p>\n'
      },
      'codeFiles': ['pager-mode-simple.vue']
    },
    {
      'demoId': 'pager-mode',
      'name': { 'zh-CN': 'complete 模式', 'en-US': 'complete mode' },
      'desc': {
        'zh-CN': '<p>通过 <code>mode=&quot;complete&quot;</code> 设置组件渲染模式</p>\n',
        'en-US': '<p>Set the component rendering mode through <code>mode=&quot;complete&quot;</code></p>\n'
      },
      'codeFiles': ['pager-mode.vue']
    },
    {
      'demoId': 'page-count',
      'name': { 'zh-CN': '总页数', 'en-US': 'Total Pages' },
      'desc': {
        'zh-CN': '<p>通过 <code>page-count</code> 设置总页数</p>\n',
        'en-US': '<p>Set the total number of pages through <code>page-count</code></p>\n'
      },
      'codeFiles': ['page-count.vue']
    },
    {
      'demoId': 'pager-events',
      'name': { 'zh-CN': '分页事件size-change', 'en-US': 'Paging event size-change' },
      'desc': {
        'zh-CN': '<p><code>size-change</code> 每页条数改变时触发</p>\n',
        'en-US': '<p><code>size-change</code> Triggered when the number of records on each page changes</p>\n'
      },
      'codeFiles': ['pager-events.vue']
    },
    {
      'demoId': 'pager-events-current-change',
      'name': { 'zh-CN': '分页事件current-change', 'en-US': 'Paging event current-change' },
      'desc': {
        'zh-CN': '<p><code>current-change</code> 切换当前页码时触发</p>\n',
        'en-US': '<p><code>current-change</code> Triggered when the current page number is switched</p>\n'
      },
      'codeFiles': ['pager-events-current-change.vue']
    },
    {
      'demoId': 'pager-events-prev-click',
      'name': { 'zh-CN': '分页事件prev-click', 'en-US': 'Paging event prev-click' },
      'desc': {
        'zh-CN': '<p><code>prev-click</code> 切换至前一页时触发</p>\n',
        'en-US': '<p><code>prev-click</code> Triggered when switching to the previous page</p>\n'
      },
      'codeFiles': ['pager-events-prev-click.vue']
    },
    {
      'demoId': 'pager-events-nextclick',
      'name': { 'zh-CN': '分页事件next-click', 'en-US': 'Paging event next-click' },
      'desc': {
        'zh-CN': '<p><code>next-click</code> 切换至后一页时触发</p>\n',
        'en-US': '<p><code>next-click</code> Triggered when switching to the next page</p>\n'
      },
      'codeFiles': ['pager-events-nextclick.vue']
    },
    {
      'demoId': 'before-page-change',
      'name': { 'zh-CN': '分页事件before-page-change', 'en-US': 'Paging event before-page-change' },
      'desc': {
        'zh-CN': '<p><code>before-page-change</code> 切换分页前事件</p>\n',
        'en-US': '<p><code>before-page-change</code> Pre-paging event</p>\n'
      },
      'codeFiles': ['before-page-change.vue']
    },
    {
      'demoId': 'popper-append-to-body',
      'name': { 'zh-CN': '分页下拉框显示位置', 'en-US': 'Paging drop-down list box display position' },
      'desc': {
        'zh-CN':
          '<p><code>popper-append-to-body</code> 分页下拉框元素是否追加到body元素节点下，该属性的默认值为 <code>true</code> ,默认追加到body元素节点下 。</p>\n<p>若不想追加到body元素节点下，设置 <code>:popper-append-to-body="false"</code> </p>',
        'en-US':
          'Indicates whether to add an element in the <p><code>popper-append-to-body</code> paging drop-down list box to the body element node. The default value of this attribute is <code>true</code>, indicating that the element is added to the body element node by default. </p>\n<p>If you do not want to add it to the body element node, set <code>:popper-append-to-body="false"</code> </p>'
      },
      'codeFiles': ['page-append-to-body.vue']
    },
    {
      'demoId': 'popper-class',
      'name': { 'zh-CN': '自定义分页下拉框的类名', 'en-US': 'Class name of the customized paging drop-down list box' },
      'desc': {
        'zh-CN': '<p><code>popper-class</code> 可以自定义分页下拉框的类名</p>',
        'en-US': '<p><code>popper-class</code> You can customize the class name of the paging drop-down list box</p>'
      },
      'codeFiles': ['popper-class.vue']
    },
    {
      'demoId': 'custom-total',
      'name': { 'zh-CN': '自定义总条数', 'en-US': 'Customized pagination layout' },
      'desc': {
        'zh-CN': '<p><code>custom-total</code> 可以自定义分页总条数显示文本</p>',
        'en-US':
          '<p><code>layout</code> Set the paging layout. You can adjust the position of <code>slot</code> in <code>layout</code> to adjust the position where the slot content is rendered.</p>\n'
      },
      'codeFiles': ['custom-total.vue']
    },
    {
      'demoId': 'show-total-loading',
      'name': { 'zh-CN': '总条数加载中', 'en-US': 'Number of page buttons' },
      'desc': {
        'zh-CN': '<p><code>show-total-loading</code> 可以设置总条数是否加载中</p>',
        'en-US': '<p><code>pager-count</code> Set the number of pages</p>\n'
      },
      'codeFiles': ['show-total-loading.vue']
    },
    {
      'demoId': 'custom-layout',
      'name': { 'zh-CN': '自定义分页布局', 'en-US': 'Number of pages to be displayed' },
      'desc': {
        'zh-CN':
          '<p><code>layout</code> 设置分页布局，通过在<code>layout</code>里调整<code>slot</code>的位置，从而调整插槽内容渲染的位置</p>\n',
        'en-US':
          'Use <p><code>page-sizes</code> together with <code>page-size</code> to adjust the number of pages to be displayed on each page.</p>\n'
      },
      'codeFiles': ['custom-layout.vue']
    },
    {
      'demoId': 'pager-count',
      'name': { 'zh-CN': '页码按钮数量', 'en-US': 'Hide pagination when there is only one page.' },
      'desc': {
        'zh-CN': '<p><code>pager-count</code> 设置页码数量</p>\n',
        'en-US': '<p><code>hide-on-single-page</code> Hide paging when there is only one page</p>\n'
      },
      'codeFiles': ['pager-count.vue']
    },
    {
      'demoId': 'page-size',
      'name': { 'zh-CN': '每页显示数量', 'en-US': 'Customize the text of the page-up button' },
      'desc': {
        'zh-CN': '<p><code>page-sizes</code> 和 <code>page-size</code> 结合使用调整每页显示数量</p>\n',
        'en-US': '<p><code>prev-text</code> ,<code>next-text</code> Custom Page Up Button Text</p>\n'
      },
      'codeFiles': ['page-size.vue']
    },
    {
      'demoId': 'hide-on-single-page',
      'name': { 'zh-CN': '只有一页时隐藏分页', 'en-US': 'Grid Table Pagination' },
      'desc': {
        'zh-CN': '<p><code>hide-on-single-page</code> 只有一页时隐藏分页</p>\n',
        'en-US':
          '<p>The grid table uses the pagination component.\nThe <code>services/getGridMockData</code> service in this example needs to be implemented by yourself. The example simulates the data returned by the remote service.\n</p>\n'
      },
      'codeFiles': ['hide-on-single-page.vue']
    },
    {
      'demoId': 'custom-next-prev-text',
      'name': { 'zh-CN': '自定义上下页按钮文本', 'en-US': 'Pagination Size' },
      'desc': {
        'zh-CN': '<p><code>prev-text</code> ,<code>next-text</code> 自定义上下页按钮文本</p>\n',
        'en-US':
          '<p>The grid table uses the pagination component.\nThe <code>services/getGridMockData</code> service in this example needs to be implemented by yourself. The example simulates the data returned by the remote service.\n</p>\n'
      },
      'codeFiles': ['custom-next-prev-text.vue']
    },
    {
      'demoId': 'pager-in-grid',
      'name': { 'zh-CN': 'Grid 表格分页', 'en-US': 'Pagination Disabled' },
      'desc': {
        'zh-CN':
          '<p>Grid 表格使用分页组件\n该示例中的 <code>services/getGridMockData</code> 服务需要自行实现，示例模拟了远程服务返回的数据\n</p>\n',
        'en-US': '<p>Disabled pagination all functions.</p>\n'
      },
      'codeFiles': ['pager-in-grid.vue']
    },
    {
      'demoId': 'pager-size',
      'name': { 'zh-CN': '尺寸', 'en-US': '' },
      'desc': { 'zh-CN': '<p>定义分页尺寸大小，可选值有 mini。</p>\n', 'en-US': '' },
      'codeFiles': ['pager-size.vue']
    },
    {
      'demoId': 'pager-disabled',
      'name': { 'zh-CN': '禁用', 'en-US': '' },
      'desc': { 'zh-CN': '<p>禁用分页所有功能。</p>\n', 'en-US': '' },
      'codeFiles': ['pager-disabled.vue']
    }
  ],
  apis: [
    {
      'name': 'pager',
      'type': 'component',
      'properties': [
        {
          'name': 'page-size',
          'type': 'number',
          'defaultValue': '该属性的默认值为 10',
          'desc': {
            'zh-CN': '每页显示条目个数，支持 .sync 修饰符',
            'en-US': 'Number of items displayed on each page. The .sync modifier is supported.'
          },
          'demoId': 'pager-events'
        },
        {
          'name': 'align',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': "分页对齐方式，可选值有['left', 'center', 'right']",
            'en-US':
              'Indicates whether to enable the pre-processing feature when the page is changed. When the value is true, the operation of turning pages or changing the page size does not take effect immediately. Instead, the service logic is processed by the user. Then, the reserved callback or rollback is invoked to make the operation take effect or invalid. For details, see the before-page-change event'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'is-before-page-change',
          'type': 'boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '是否打开页面改变时的前置处理特性。在值为true时，翻页操作或者改变页大小操作不会立即生效，留给用户处理业务逻辑，之后通过调用预留的callback或者rollback使之生效或者失效，详看事件before-page-change',
            'en-US': 'Add a class name for the popper. For details, see the popover component.'
          },
          'demoId': 'before-page-change'
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
          'name': 'popper-append-to-body',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': {
            'zh-CN':
              '是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false (可参考 select 组件)',
            'en-US': 'Total number of entries'
          },
          'demoId': ''
        },
        {
          'name': 'total',
          'type': 'number',
          'defaultValue': '',
          'desc': {
            'zh-CN': '总条目数',
            'en-US':
              'Total number of pages. You can set either total or page-count to display the page number. If you want to support page-sizes changes, you need to use the total attribute'
          },
          'demoId': 'current-page'
        },
        {
          'name': 'custom-total',
          'type': 'boolean, string',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '自定义总条数，传值为true显示10万+、100万+，传值为字符串则显示传入的字符串',
            'en-US':
              'Maximum number of page buttons to be displayed in the middle in number/complete mode. Number of page buttons. When the total number of pages exceeds the value, the buttons will be collapsed. The value of this attribute can be an odd number ranging from 5 to 21'
          },
          'demoId': 'custom-total'
        },
        {
          'name': 'show-total-loading',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '总条数是否加载中', 'en-US': 'Number of current pages. The .sync modifier is supported.' },
          'demoId': 'show-total-loading'
        },
        {
          'name': 'page-count',
          'type': 'number',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '总页数，total 和 page-count 设置任意一个就可以达到显示页码的功能；如果要支持 page-sizes 的更改，则需要使用 total 属性',
            'en-US':
              'Component layout. Subcomponent names are separated by commas (,). The optional value of this attribute is sizes, prev, pager, next, jumper, ->, total, slot'
          },
          'demoId': 'page-count'
        },
        {
          'name': 'pager-count',
          'type': 'number',
          'defaultValue': '该属性的默认值为 7',
          'desc': {
            'zh-CN':
              '数字分页（number/complete）的模式下中间的页码按钮需要显示的最多个数;页码按钮的数量，当总页数超过该值时会折叠;该属性的可选值为 大于等于 5 且小于等于 21 的奇数',
            'en-US':
              'Set the number of records that can be displayed on each page. Option settings of the number of display items per page selector'
          },
          'demoId': 'pager-count'
        },
        {
          'name': 'current-page',
          'type': 'number',
          'defaultValue': '该属性的默认值为 1',
          'desc': {
            'zh-CN': '当前页数，支持 .sync 修饰符',
            'en-US': 'Substitute the text on the previous page of the icon.'
          },
          'demoId': 'current-page'
        },
        {
          'name': 'layout',
          'type': 'string',
          'defaultValue': '该属性的默认值为 prev, pager, next, jumper, ->, total',
          'desc': {
            'zh-CN': '组件布局，子组件名用逗号分隔;该属性的可选值为 sizes, prev, pager, next, jumper, ->, total, slot',
            'en-US': 'Substitute the text on the next page of the icon.'
          },
          'demoId': 'current-page'
        },
        {
          'name': 'page-sizes',
          'type': 'Array',
          'defaultValue': '该属性的默认值为 [10, 20, 30, 40, 50, 100]',
          'desc': {
            'zh-CN': '设置指定可选择的每页显示条数;每页显示个数选择器的选项设置',
            'en-US': 'Whether to hide only one page'
          },
          'demoId': 'page-size'
        },
        {
          'name': 'prev-text',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '替代图标显示的上一页文字',
            'en-US':
              'Set the pagination display mode. The default value is number. Set the pagination display mode. The optional values of this attribute are number / simple / complete / fixed'
          },
          'demoId': 'custom-next-prev-text'
        },
        {
          'name': 'next-text',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '替代图标显示的下一页文字',
            'en-US': 'Define the pager size. The value of this attribute can be mini'
          },
          'demoId': 'custom-next-prev-text'
        },
        {
          'name': 'hide-on-single-page',
          'type': 'boolean',
          'defaultValue': '',
          'desc': { 'zh-CN': '只有一页时是否隐藏', 'en-US': 'Disabled pager' },
          'demoId': 'hide-on-single-page'
        },
        {
          'name': 'mode',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '设置分页显示模式,默认为number;设置分页显示模式;该属性的可选值为 number / simple / complete / fixed',
            'en-US': ''
          },
          'demoId': 'pager-mode-number'
        },
        {
          'name': 'size',
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': '定义分页尺寸;该属性的可选值为 mini', 'en-US': '' },
          'demoId': 'pager-size'
        },
        {
          'name': 'disabled',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为false',
          'desc': { 'zh-CN': '禁用分页', 'en-US': '' },
          'demoId': 'pager-disabled'
        }
      ],
      'events': [
        {
          'name': 'before-page-change',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              "在打开页面改变时的前置处理特性，并且进行翻页操作或者改变页大小操作时触发。;//参数arg\n { $grid: VueComponent, //table组件vue实例 \ncurrentPage: 1 //当前页码 \nlayout: 'total, prev, pager, next, jumper, sizes' //当前分页组件布局信息 \npageSize: 10// 当前每页显示条数 \npageSizes:[5, 10] //可切换的每页条数 \ntotal: 10 //总数据条数 }",
            'en-US':
              "This event is triggered when the pre-processing feature is enabled when the page is changed and the page turning or page size is changed. ; / / Parameter arg\n {$grid: VueComponent, //table component vue instance \ncurrentPage: 1 // Current page number \nlayout: 'total, prev, pager, next, jumper, sizes' / / Current paging component layout information \npageSize: 10 // Number of records displayed on each page. \npageSizes: [5, 10] //Number of records that can be switched on each page.\ntotal: 10 //Total number of records}"
          },
          'demoId': 'before-page-change'
        },
        {
          'name': 'size-change',
          'type': 'Function(arg1)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置分页跳转后的事件;pageSize 改变时会触发;arg1: pageSize 新的当前值',
            'en-US':
              'Set the event after pagination. This event is triggered when pageSize changes. arg1: pageSize new current value'
          },
          'demoId': 'pager-events'
        },
        {
          'name': 'current-change',
          'type': 'Function(arg1)',
          'defaultValue': '',
          'desc': {
            'zh-CN': 'currentPage 改变时会触发;arg1: 新的当前页的值',
            'en-US': 'This event is triggered when the currentPage changes. arg1: new current page value'
          },
          'demoId': 'pager-events-current-change'
        },
        {
          'name': 'prev-click',
          'type': 'Function(arg1)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '用户点击上一页按钮改变当前页后触发;arg1: 新的当前页的值',
            'en-US':
              'This event is triggered when a user clicks the previous button to change the current page. arg1: new current page value'
          },
          'demoId': 'pager-events-prev-click'
        },
        {
          'name': 'next-click',
          'type': 'Function(arg1)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '用户点击下一页按钮改变当前页后触发;arg1: Number 新的当前页的值',
            'en-US':
              'This event is triggered when a user clicks Next to change the current page. arg1: Number New current page value'
          },
          'demoId': 'pager-events-nextclick'
        }
      ],
      'slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '自定义内容，需要在 layout 中列出 slot',
            'en-US': 'User-defined content. Slots must be listed in the layout.'
          },
          'demoId': 'custom-layout'
        }
      ]
    }
  ]
}
