export default {
  mode: ['pc', 'mobile-first'],
  apis: [
    {
      name: 'pager',
      type: 'component',
      props: [
        {
          name: 'align',
          type: "'left' | 'center' | 'right'",
          defaultValue: "'left'",
          desc: {
            'zh-CN': '分页对齐方式，Aurora、SMB主题默认值为 right',
            'en-US': 'Pagination alignment, the default value for Aurora and SMB themes is right'
          },
          mode: ['pc'],
          pcDemo: 'align'
        },
        {
          name: 'current-page',
          type: 'number',
          defaultValue: '1',
          desc: {
            'zh-CN': '当前所在页',
            'en-US': 'The current page'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'current-page',
          mfDemo: ''
        },
        {
          name: 'custom-total',
          type: 'boolean | string',
          defaultValue: 'false',
          desc: {
            'zh-CN': '自定义总条数，传值为 true 时，显示10万+、100万+，传值为字符串则显示传入的字符串',
            'en-US':
              'Maximum number of page buttons to be displayed in the middle in number/complete mode. Number of page buttons. When the total number of pages exceeds the value, the buttons will be collapsed. The value of this attribute can be an odd number ranging from 5 to 21'
          },
          mode: ['pc'],
          pcDemo: 'custom-total'
        },
        {
          name: 'disabled',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否禁用分页',
            'en-US': 'Disabled pager'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'disabled-and-size',
          mfDemo: ''
        },
        {
          name: 'hide-on-single-page',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '只有一页时是否隐藏',
            'en-US': 'Hide when there is only one page'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'hide-on-single-page',
          mfDemo: ''
        },
        {
          name: 'is-before-page-change',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否开启前置处理特性，开启后，翻页或者改变页大小不会立即生效，由用户处理业务逻辑',
            'en-US':
              'Whether to enable the preprocessing feature. After opening, flipping or changing the page size will not take effect immediately. The user handles the business logic'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'before-page-change',
          mfDemo: ''
        },
        {
          name: 'layout',
          type: 'string',
          defaultValue: "'total, prev, pager, next, jumper'",
          desc: {
            'zh-CN':
              '组件布局，子组件名用英文逗号分隔，子组件类型有 sizes、 prev、 pager、 next、 jumper、 current、 total、 slot',
            'en-US':
              'Component layout, with sub component names separated by commas; The optional values for this attribute are sizes, preview, pager, next, jumper, current, total, slot.'
          },
          mode: ['pc'],
          pcDemo: 'custom-layout'
        },
        {
          name: 'mode',
          type: "'number' | 'simple' | 'complete' | 'fixed'",
          defaultValue: '',
          desc: {
            'zh-CN': '设置分页组件显示模式，此属性优先级大于 layout',
            'en-US': 'Set the display mode of pagination components, which takes priority over layout'
          },
          mode: ['pc'],
          pcDemo: 'pager-mode'
        },
        {
          name: 'next-text',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '替代图标显示的下一页文字',
            'en-US': 'Replace icon display with next page text'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'custom-next-prev-text',
          mfDemo: ''
        },
        {
          name: 'page-count',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN':
              '总页数，total 和 page-count 设置任意一个就可以达到显示页码的功能，如果要支持 page-sizes 的更改，则需要使用 total 属性',
            'en-US':
              'Setting either the total number of pages, total, or page count can achieve the function of displaying page numbers; If you want to support changes to page sizes, you need to use the total attribute'
          },
          mode: ['pc'],
          pcDemo: 'page-count'
        },
        {
          name: 'page-size',
          type: 'Number',
          defaultValue: '',
          desc: {
            'zh-CN': '每页显示条目个数，支持 .sync 修饰符',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'page-size/v-model:page-size',
          type: 'number',
          defaultValue: '10',
          desc: {
            'zh-CN': '每页显示条目数',
            'en-US': 'Number of items displayed on each page'
          },
          mode: ['pc'],
          pcDemo: 'page-size'
        },
        {
          name: 'page-sizes',
          type: 'number[]',
          defaultValue: '[10, 20, 30, 40, 50, 100]',
          desc: {
            'zh-CN': '设置指定可选择的每页显示条数，每页显示个数选择器的选项设置',
            'en-US':
              'Set the specified number of selectable display items per page; Option settings for displaying number selectors per page'
          },
          mode: ['pc'],
          pcDemo: 'page-size'
        },
        {
          name: 'pager-count',
          type: 'number',
          defaultValue: '7',
          desc: {
            'zh-CN':
              '设置页码按钮需要显示的最多个数，当总页数超过该值时会折叠，该属性的合法值为大于等于 5 且小于等于 21 的奇数',
            'en-US':
              'Set the maximum number of page number buttons to display; When the total number of pages exceeds this value, it will collapse; The optional values for this attribute are odd numbers greater than or equal to 5 and less than or equal to 21'
          },
          mode: ['pc'],
          pcDemo: 'pager-count'
        },
        {
          name: 'popper-append-to-body',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否将弹出框插入至 body 元素，可将该属性设置为 false（可参考 select 组件）',
            'en-US':
              'Whether to insert the pop-up box into the body element. You can set this attribute to false (refer to the select component)'
          },
          mode: ['pc'],
          pcDemo: 'popper-append-to-body'
        },
        {
          name: 'popper-class',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '为 popper 添加类名（可参考 popover 组件）',
            'en-US':
              'Indicates whether to insert a pop-up box to the body element. If an error occurs in locating a fault in the dialog box that is displayed, set this attribute to false (for details, see the select component).'
          },
          mode: ['pc'],
          pcDemo: 'popper-class'
        },
        {
          name: 'prev-text',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '替代图标显示的上一页文字',
            'en-US': 'Replace the previous page text displayed by the icon'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'custom-next-prev-text',
          mfDemo: ''
        },
        {
          name: 'show-total-loading',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否显示总条数加载中',
            'en-US': 'Is the total number of items being loaded'
          },
          mode: ['pc'],
          pcDemo: 'show-total-loading'
        },
        {
          name: 'size',
          type: "'mini'",
          defaultValue: '',
          desc: {
            'zh-CN': '定义分页尺寸',
            'en-US': 'Define the page size'
          },
          mode: ['pc'],
          pcDemo: 'disabled-and-size'
        },
        {
          name: 'total',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN': '总条目数',
            'en-US': 'Total number of entries'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'total-fixed-left',
          type: 'boolean',
          defaultValue: 'false',
          meta: {
            stable: '3.18.0'
          },
          desc: {
            'zh-CN': '总条目数是否固定在左侧，Aurora、SMB主题默认值为 true',
            'en-US':
              'Whether the total number of entries is fixed on the left, the default value for Aurora and SMB themes is true'
          },
          mode: ['pc'],
          pcDemo: ''
        }
      ],
      events: [
        {
          name: 'before-page-change',
          typeAnchorName: 'IBeforeChangeEvent',
          type: 'IBeforeChangeEvent',
          defaultValue: '',
          desc: {
            'zh-CN':
              '当 is-before-page-change 设置为 true 后，翻页或改变页大小前会触发此事件，用户可以在参数中获取相应事件和分页相关信息控制后续逻辑',
            'en-US':
              'When the is-before-page-change is set to true, this event will be triggered before flipping or changing the page size. Users can obtain the corresponding event and pagination related information in the parameters to control the subsequent logic'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'before-page-change',
          mfDemo: ''
        },
        {
          name: 'current-change',
          type: '(currentPage: number) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '当前所在页改变时会触发',
            'en-US': 'Triggered when the currentPage changes'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'pager-event',
          mfDemo: ''
        },
        {
          name: 'next-click',
          type: '(currentPage: number) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '点击下一页按钮改变当前页后触发',
            'en-US': 'Triggered after clicking the next page button to change the current page'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'pager-event',
          mfDemo: ''
        },
        {
          name: 'prev-click',
          type: '(currentPage: number) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '点击上一页按钮改变当前页后触发',
            'en-US': 'Triggered after clicking the previous page button to change the current page'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'pager-event',
          mfDemo: ''
        },
        {
          name: 'size-change',
          type: '(pageSize: number) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '每页显示条目数改变后会触发',
            'en-US':
              'Set the event after pagination. This event is triggered when pageSize changes. arg1: pageSize new current value'
          },
          mode: ['pc'],
          pcDemo: 'pager-event'
        }
      ],
      methods: [],
      slots: [
        {
          name: 'default',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义内容，需要在 layout 中列出 slot',
            'en-US': 'User-defined content. Slots must be listed in the layout'
          },
          mode: ['pc'],
          pcDemo: 'custom-layout'
        }
      ]
    }
  ],
  types: [
    {
      name: 'IBeforeChangeEvent',
      type: 'interface',
      code: `
// 函数接受一个参数
interface IBeforeChangeEvent {
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
