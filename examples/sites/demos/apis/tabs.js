export default {
  mode: ['pc', 'mobile', 'mobile-first'],
  apis: [
    {
      name: 'tabs',
      type: 'component',
      props: [
        {
          name: 'active-color',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '当前页签的字体颜色',
            'en-US': 'active tab color'
          },
          mode: ['mobile'],
          mobileDemo: 'active-color'
        },
        {
          name: 'active-name',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '设置初始选中的页签项',
            'en-US': 'Set initially selected label items'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'tab-style-card',
          mobileDemo: 'active-name',
          mfDemo: ''
        },
        {
          name: 'before-leave',
          type: '(activeName: string, oldActiveName: string) => boolean | Promise',
          defaultValue: '',
          desc: {
            'zh-CN':
              '切换页签项之前的钩子，若返回 false 或返回 Promise 且被 reject，则阻止切换； activeName: 即将切换的页签项名称, oldActiveName: 当前页签项名称',
            'en-US':
              'The hook before the tag is switched. If false is returned or Promise is returned and rejected, the switch is blocked; ActiveName: The name of the label item that is about to be switched, oldActiveName: The name of the current label item'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'before-leave',
          mobileDemo: 'before-leave',
          mfDemo: ''
        },
        {
          name: 'drop-config',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN':
              '启用页签拖拽功能，配置第三方排序插件，对页签项进行重新排序；需注意：不是通过 v-for 渲染的 tab-item，在拖拽排序后，无法在 tab-drag-end 事件中对其顺序进行保存',
            'en-US':
              'Enable tab drag and drop functionality, configure third-party sorting plugins, and reorder tabs; Please note that tab items that are not rendered through v-for cannot be saved in the tab drag end event after dragging and sorting'
          },
          mode: ['pc'],
          pcDemo: 'tabs-draggable'
        },
        {
          name: 'editable',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否同时显示添加和删除按钮，与 edit 事件搭配使用',
            'en-US': 'Do you want to display both add and delete buttons for use with the edit event'
          },
          mode: ['pc'],
          pcDemo: 'tabs-events-edit'
        },
        {
          name: 'expand-tabs-mode',
          type: 'string',
          defaultValue: 'columns',
          desc: {
            'zh-CN': '展开内容的排列方式，可选值 column：为单列，columns：为多列',
            'en-US':
              "The arrangement of content can be displayed in either a single column format, which is referred to as 'column', or in multiple columns, which is referred to as 'columns'."
          },
          mode: ['mobile'],
          mobileDemo: 'expend'
        },
        {
          name: 'expand-tabs-title',
          type: 'string',
          defaultValue: '请选择',
          desc: {
            'zh-CN': '展开内容的标题',
            'en-US': 'Expand Content Title'
          },
          mode: ['mobile'],
          mobileDemo: 'expend'
        },
        {
          name: 'modelValue / v-model',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '绑定选中值，选中项的 name',
            'en-US': 'Bound selected value, The name of the selected item'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'optimized',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '是否开启优化渲染，默认值为true，表示开启优化渲染，此时只会渲染当前标签项',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'popper-class',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '为"更多"下拉页签框添加类名，可用于自定义下拉选项的样式',
            'en-US':
              'Add a class name to the “More” dropdown label box, which can be used to customize the style of dropdown options'
          },
          mode: ['pc'],
          pcDemo: 'custom-more-icon'
        },
        {
          name: 'position',
          typeAnchorName: 'IPosition',
          type: 'IPosition',
          defaultValue: "'top'",
          desc: {
            'zh-CN': '设置页签栏所在位置; 默认为 top',
            'en-US': 'Set the location of the label bar; Default to top'
          },
          mode: ['pc'],
          pcDemo: 'position'
        },
        {
          name: 'separator',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '设置分隔符样式',
            'en-US': 'Set Separator Style'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'tabs-separator',
          mfDemo: ''
        },
        {
          name: 'show-expand-tabs',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '页签可展开',
            'en-US': 'tabs expandable'
          },
          mode: ['mobile'],
          mobileDemo: 'expend'
        },
        {
          name: 'show-more-tabs',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN':
              '设置当页签栏超过一定宽度时是否显示"更多"按钮，若为 true，则当鼠标悬停到按钮上时，将出现下拉框展示超出宽度的页签项',
            'en-US':
              'Set whether to display the "More" button when the label bar exceeds a certain width. If true, a drop-down box will appear when the mouse hovers over the button to display label items that exceed the width'
          },
          mode: ['pc'],
          pcDemo: 'custom-more-icon'
        },
        {
          name: 'size',
          type: "'small' | 'large'",
          defaultValue: '',
          desc: {
            'zh-CN':
              '设置 tabs 页签尺寸,该属性可选值为 large 或 small，其中 small 在 tabStyle 为 card 或者 border-card 时生效',
            'en-US':
              'Sets the tab size. The value can be large or small. This parameter is valid only when tabStyle is set to card or border-card'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'tab-style-card',
          mfDemo: ''
        },
        {
          name: 'stretch',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '页签项的宽度是否自动撑开',
            'en-US': 'Does the width of the label item automatically expand'
          },
          mode: ['pc'],
          pcDemo: 'stretch-wh'
        },
        {
          name: 'swipeable',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '滑动页签内容切换页签',
            'en-US': 'slide tab content to switch tab'
          },
          mode: ['mobile'],
          mobileDemo: 'swipe'
        },
        {
          name: 'tab-style',
          typeAnchorName: 'ITabStyle',
          type: 'ITabStyle',
          defaultValue: '',
          desc: {
            'zh-CN': '页签的类型；默认为空字符串',
            'en-US': 'Tabs style; Default to empty string'
          },
          mode: ['pc'],
          pcDemo: 'tab-style-card'
        },
        {
          name: 'tooltip-config',
          typeAnchorName: 'ITooltipProps',
          type: 'ITooltipProps | "title"',
          defaultValue: '',
          desc: {
            'zh-CN':
              '设置文字超出提示, object 类型的值参考 tooltip 组件的 <a href="tooltip#API">Props</a> 配置，如果想使用默认的 title 属性，可设置为 string 类型，值为 title，【3.8.0版本新增】',
            'en-US':
              'Set the message indicating that the text exceeds the limit. The value of the object type refers to the <a href="tooltip#API">Props</a> configuration of the tooltip component. If you want to use the default title attribute, set it to the string type and set it to title. [Added in 3.8.0]'
          },
          mode: ['pc'],
          pcDemo: 'tooltip'
        },
        {
          name: 'v-model',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '绑定值，选中选项卡的 name',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'v-model / modelValue',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '选中选项卡的 name',
            'en-US': 'the name of the selected item'
          },
          mode: ['mobile'],
          mobileDemo: 'basic-usage'
        },
        {
          name: 'with-add',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否显示添加按钮，用来添加页签项',
            'en-US': 'Do you want to display the add button to add tab item'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'with-add',
          mobileDemo: 'add-delete-tab',
          mfDemo: ''
        },
        {
          name: 'with-close',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否显示页签项的关闭按钮，用来删除页签项',
            'en-US': 'Do you want to display the close button for label items to delete them'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'tabs-events-close',
          mobileDemo: 'add-delete-tab',
          mfDemo: ''
        }
      ],
      events: [
        {
          name: 'add',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '点击"添加"按钮后触发，用于编写增加页签项的逻辑',
            'en-US': 'Triggered after clicking the "Add" button, used to write logic for adding tab items'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'with-add',
          mobileDemo: 'tabs-events',
          mfDemo: ''
        },
        {
          name: 'click',
          type: '(TabItem: Component, event: Event) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '点击页签项时触发，tab 被选中时触发； TabItem: 点中页签项的vueComponent对象信息',
            'en-US':
              'Trigger an event when clicking on a tab item, Triggered when tab is selected; TabItem: Click on the Component object information of the tab item in the middle'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'tabs-events-click',
          mobileDemo: 'tabs-events',
          mfDemo: ''
        },
        {
          name: 'close',
          type: '(name: string) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '点击页签项关闭按钮后触发，用于编写删除页签项的逻辑； name: 要删除的页签项name值',
            'en-US':
              'Triggered after clicking the tab item close button, used to write logic for deleting tab items; name: The name value of the tab item to be deleted'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'tabs-events-close',
          mobileDemo: 'tabs-events',
          mfDemo: ''
        },
        {
          name: 'edit',
          type: '(name: string, type: "add" | "remove") => void',
          defaultValue: '',
          desc: {
            'zh-CN': '点击"添加"或"关闭"按钮触发； name：null或删除的tab名称, type：添加或删除字段',
            'en-US':
              'Click the "Add" or "Close" button to trigger; name: null or deleted tab name, type: added or deleted field'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'tabs-events-edit',
          mfDemo: ''
        },
        {
          name: 'tab-drag-end',
          type: '(event: DragEvent) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '拖动结束后的事件',
            'en-US': 'Event after the drag is complete'
          },
          mode: ['pc'],
          pcDemo: 'tabs-draggable'
        },
        {
          name: 'tab-drag-over',
          type: '(event: DragEvent) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '拖动中的事件',
            'en-US': 'Dragging event'
          },
          mode: ['pc'],
          pcDemo: 'tabs-draggable'
        },
        {
          name: 'tab-drag-start',
          type: '(event: DragEvent) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '拖动开始时的事件',
            'en-US': 'Drag start event'
          },
          mode: ['pc'],
          pcDemo: 'tabs-draggable'
        }
      ],
      methods: [],
      slots: [
        {
          name: 'default',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '默认插槽',
            'en-US': 'default slot'
          },
          mode: ['mobile', 'mobile-first'],
          mobileDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'moreIcon',
          defaultValue: '',
          desc: {
            'zh-CN': '更多按钮插槽',
            'en-US': 'More Button Slot'
          },
          mode: ['pc'],
          pcDemo: 'custom-more-icon'
        },
        {
          name: 'title',
          defaultValue: '',
          desc: {
            'zh-CN': '页签项标题插槽',
            'en-US': 'Label Item Title Slot'
          },
          mode: ['pc'],
          pcDemo: 'custom-tab-title'
        }
      ]
    },
    {
      name: 'tab-item',
      type: 'component',
      props: [
        {
          name: 'disabled',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '设置页签项禁用，设置为 true 则无法点击',
            'en-US': 'Set tab items to disable, set to true to prevent clicking'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'lazy',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '设置本页签项内容是否为懒加载，默认为否',
            'en-US': 'Set whether the content of this tab is lazy loading, default to no'
          },
          mode: ['pc'],
          pcDemo: 'lazy'
        },
        {
          name: 'name',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '页签项的值',
            'en-US': 'Value of tab items'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'title',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '页签项标题',
            'en-US': 'Tab Item Title'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'with-close',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '页签项是否展示删除按钮，与 Tabs 的 with-close 取或，只要有一个为true，则此项展示删除按钮',
            'en-US':
              "Does the tab item display a delete button, which is equal to or greater than the 'with close' option in Tabs? As long as one of these options is true, this option displays the delete button"
          },
          mode: ['pc'],
          pcDemo: 'tabs-events-close'
        }
      ],
      events: [
        {
          name: 'tab-nav-update',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '当页签项的 title 值发生变化时触发',
            'en-US': 'Triggered when the title value of the tab item changes'
          },
          mode: ['pc'],
          pcDemo: ''
        }
      ],
      methods: [],
      slots: [
        {
          name: 'default',
          defaultValue: '',
          desc: {
            'zh-CN': '页签项对应内容部分的默认插槽，用来自定义页签项对应的页面内容',
            'en-US':
              'The default slot for the content section corresponding to the tab item, used to customize the page content corresponding to the tab item'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        }
      ]
    }
  ],
  types: [
    {
      name: 'IPosition',
      type: 'type',
      code: `
type IPosition = 'top' | 'right' | 'bottom' | 'left'
`
    },
    {
      name: 'ITabStyle',
      type: 'type',
      code: `
type ITabStyle = 'card' | 'border-card' | 'button-card' | ''
`
    },
    {
      name: 'ITooltipProps',
      type: 'interface',
      code: `
interface ITooltipProps { // 参照tooltip的props进行配置
  effect?: string
  placement?: string
  visible?: string
  [propName: string]: any
}
`
    }
  ]
}
