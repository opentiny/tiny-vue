export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': `<div class="tip custom-block"><code>Tabs</code> ：通过 v-model 设置选中的页签项，对应 TabItem 页签项中 name 属性的值；<br />
        <code>TabItem</code> ：通过 title 设置页签项标题， name 设置页签项的值，disabled 设置页签项禁用，默认插槽自定义对应的内容。</div>`,
        'en-US': `<div class="tip custom-block"><p> <code>Tabs</code> :Set the selected tag item through the v-model , corresponding to the value of the name attribute in the TabItem tag item;<br/>
        <code>TabItem</code> :Set the label item title through title .nameSet the value of tab items.disabledSet tab items to be disabled.Customize the corresponding content for the default slot.</div>`
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'tab-style-card',
      'name': { 'zh-CN': 'card 类型', 'en-US': 'Card Type' },
      'desc': {
        'zh-CN':
          '通过 <code>tab-style="card"</code> 设置风格类型为 <code>card</code> ， <code>active-name</code> 设置初始选中的页签项， <code>size="small"</code> 设置小尺寸类型。',
        'en-US':
          'Set the style type by <code>tab-style</code> , set the initially selected label item by <code>active-name</code> , and set the small size type by <code>size="small"</code> .'
      },
      'codeFiles': ['tab-style-card.vue']
    },
    {
      'demoId': 'tab-style-bordercard',
      'name': { 'zh-CN': 'bordercard 类型', 'en-US': 'BorderCard Type' },
      'desc': {
        'zh-CN': '通过 <code>tab-style="border-card"</code> 设置风格类型为 <code>bordercard</code> 。',
        'en-US': 'Use <code>tab-style="border-card</code> to set the tab style type to <code>bordercard</code> . '
      },
      'codeFiles': ['tab-style-bordercard.vue']
    },
    {
      'demoId': 'tabs-separator',
      'name': { 'zh-CN': '分隔符', 'en-US': 'Separator' },
      'desc': {
        'zh-CN': '<p>通过 <code>separator</code> 设置分隔符。</p>\n',
        'en-US': '<p>Use <code>separator</code> to set the separator.</p>\n'
      },
      'codeFiles': ['tabs-separator.vue']
    },
    {
      'demoId': 'custom-more-icon',
      'name': { 'zh-CN': "定义'更多'按钮", 'en-US': "'More' icon slot" },
      'desc': {
        'zh-CN':
          '通过 <code>show-more-tabs</code> 设置页签项超出时显示 <code>更多</code> 按钮； <code>moreIcon</code> 插槽自定义 <code>更多</code> 按钮； <code>popper-class</code> 给“更多”下拉框添加自定义类名，可用来自定义样式。',
        'en-US':
          'Set the <code>show-more-tabs</code> button to display the <code>More</code> button when the label item exceeds the limit< Code>moreIcon</code> Slot Customization <code>More</code> buttons;Add custom class names to "more" dropdown boxes, can be used to customize styles.'
      },
      'codeFiles': ['custom-more-icon.vue']
    },
    {
      'demoId': 'with-add',
      'name': { 'zh-CN': '添加功能', 'en-US': 'Adding Functionality' },
      'desc': {
        'zh-CN': '通过 <code>with-add</code> 打开添加按钮，并监听 <code>add</code> 事件自定义实现添加页签项的逻辑。',
        'en-US':
          'Open the add button through <code>with-add</code> and listen for the <code>add</code> event to customize the logic for adding tag items.'
      },
      'codeFiles': ['with-add.vue']
    },
    {
      'demoId': 'tabs-events-close',
      'name': { 'zh-CN': '删除', 'en-US': 'Delete' },
      'desc': {
        'zh-CN':
          '通过 <code>with-close</code> 打开关闭按钮，并监听 <code>close</code> 事件自定义实现删除页签项的逻辑。',
        'en-US':
          'Open the close button through <code>with-close</code> and listen to the <code>close</code> event to customize the logic of deleting tag items.'
      },
      'codeFiles': ['tabs-events-close.vue']
    },
    {
      'demoId': 'position',
      'name': { 'zh-CN': '位置', 'en-US': 'Position' },
      'desc': {
        'zh-CN':
          '通过 <code>position</code> 设置显示位置，可选值有 <code>top</code> 、 <code>right</code> 、 <code>bottom</code> 、 <code>left</code> ，默认为 <code>top</code> 。',
        'en-US':
          'Set the display position through <code>position</code> . The optional values include <code>top</code> , <code>right</code> , <code>bottom</code> , and <code>left</code> . The default value is <code>top</code> .'
      },
      'codeFiles': ['position.vue']
    },
    {
      'demoId': 'tooltip',
      'name': { 'zh-CN': '提示', 'en-US': 'Tip' },
      'desc': {
        'zh-CN': '通过 <code>tooltip-config</code> 设置 Title 提示。',
        'en-US': 'Set the Title prompt through <code>tooltip-config</code> .'
      },
      'codeFiles': ['tooltip.vue']
    },
    {
      'demoId': 'before-leave',
      'name': { 'zh-CN': '阻止切换', 'en-US': 'Block switching' },
      'desc': {
        'zh-CN':
          '通过 <code>before-leave</code> 钩子函数处理切换页签项前的逻辑，若返回是 <code>false</code> 或 <code>Promise.reject</code> ，则阻止切换，返回 true 则可以切换。',
        'en-US':
          'Use the <code>before-leave</code> hook function to handle the logic before switching label items. If <code>false</code> or <code>Promise.reject</code> is returned, the switch is blocked, and if true is returned, the switch can be made.'
      },
      'codeFiles': ['before-leave.vue']
    },
    {
      'demoId': 'stretch-wh',
      'name': { 'zh-CN': '自动撑宽', 'en-US': 'Automatic widening' },
      'desc': {
        'zh-CN': '通过 <code>stretch</code> 设置页签项的宽度是否自撑开，默认为 false 。',
        'en-US':
          'Set whether the width of the label item is self expanding by <code>stretch</code> , and the default is false.'
      },
      'codeFiles': ['stretch-wh.vue']
    },
    {
      'demoId': 'custom-tab-title',
      'name': { 'zh-CN': '定义页签项标题', 'en-US': 'Custom Tab Item Title' },
      'desc': {
        'zh-CN': '通过 <code>TabItem</code> 的 <code>title</code> 插槽自定义页签项标题，比如在标题前增加图标。',
        'en-US':
          'Customize the title of the tab page through the <code>title</code> slot of the <code>TabItem</code> , for example, add an icon before the title. '
      },
      'codeFiles': ['custom-tab-title.vue']
    },
    {
      'demoId': 'lazy',
      'name': { 'zh-CN': '懒加载', 'en-US': 'Lazy Loading' },
      'desc': {
        'zh-CN': '通过 <code>lazy</code> 设置页签项内容懒加载，默认值为 <code>false</code> 。',
        'en-US':
          'By setting the lazy loading of label item content through <code>lazy</code> , the default value is <code>false</code> .'
      },
      'codeFiles': ['lazy.vue']
    },
    {
      'demoId': 'tabs-second-layer',
      'name': { 'zh-CN': '多层级', 'en-US': 'Multi Level' },
      'desc': { 'zh-CN': '通过嵌套使用即可。', 'en-US': 'It can be used through nesting.' },
      'codeFiles': ['tabs-second-layer.vue']
    },
    {
      'demoId': 'show-different-grid-data',
      'name': { 'zh-CN': '与Grid结合', 'en-US': 'Combining with Grid' },
      'desc': {
        'zh-CN': 'Grid组件需要设置 <code>:auto-resize=“true”</code> ，自适应父元素 <code>TabItem</code> 相应变化。',
        'en-US':
          'The Grid component needs to set <code>:auto-resize="true"</code> to adapt to the corresponding changes of the parent element <code>TabItem</code> .'
      },
      'codeFiles': ['show-different-grid-data.vue']
    },
    {
      'demoId': 'tabs-draggable',
      'name': { 'zh-CN': '拖拽', 'en-US': 'Drag' },
      'desc': {
        'zh-CN': `<div class="tip custom-block"><p><code>drop-config</code> 设置 <code>Sortable</code> 排序插件；<br/>
          <code>tab-drag-start</code> 监听拖拽开始事件；<br/>
          <code>tab-drag-over</code> 监听拖拽中事件；<br/>
          <code>tab-drag-end</code> 监听拖拽结束事件，以此改变页签项顺序。</p></div>`,
        'en-US': `<div class="tip custom-block"><p> <code>drop configuration</code> Set the <code>Sortable</code> sorting plugin<br />
          <code>tab-drag-start</code> Listen for drag start events<br />
          <code>tab-drag-over</code> Listen for dragging events<br />
          <code>tab-drag-end</code> Listen for drag end events to change the order of tags.</p></div>`
      },
      'codeFiles': ['tabs-draggable.vue']
    },
    {
      'demoId': 'tabs-events-click',
      'name': { 'zh-CN': '点击事件', 'en-US': 'Click Event' },
      'desc': {
        'zh-CN': '通过 <code>click</code> 监听单击页签项事件。',
        'en-US': 'Listen for tag item click events through <code>click</code> .'
      },
      'codeFiles': ['tabs-events-click.vue']
    },
    {
      'demoId': 'tabs-events-edit',
      'name': { 'zh-CN': '编辑事件', 'en-US': 'Edit Event' },
      'desc': {
        'zh-CN':
          '通过 <code>editable</code> 设置同时显示 <code>删除</code> 和 <code>添加</code> 按钮， <code>edit</code> 监听这两类按钮的点击事件。',
        'en-US':
          'By setting <code>edit</code> to display both <code>delete</code> and <code>add</code> buttons, <code>edit</code> listens for click events of these two types of buttons.'
      },
      'codeFiles': ['tabs-events-edit.vue']
    }
  ],
  apis: [
    {
      'name': 'tabs',
      'type': 'component',
      'props': [
        {
          'name': 'active-name',
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置初始选中的页签项', 'en-US': 'Set initially selected label items' },
          'demoId': 'tab-style-card'
        },
        {
          'name': 'before-leave',
          'type': '(activeName: string, oldActiveName: string) => boolean | Promise',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '切换页签项之前的钩子，若返回 false 或返回 Promise 且被 reject，则阻止切换； activeName: 即将切换的页签项名称, oldActiveName: 当前页签项名称',
            'en-US':
              'The hook before the tag is switched. If false is returned or Promise is returned and rejected, the switch is blocked; ActiveName: The name of the label item that is about to be switched, oldActiveName: The name of the current label item'
          },
          'demoId': 'before-leave'
        },
        {
          'name': 'drop-config',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '启用页签拖拽功能，配置第三方排序插件，对页签项进行重新排序；需注意：不是通过 v-for 渲染的 tab-item，在拖拽排序后，无法在 tab-drag-end 事件中对其顺序进行保存',
            'en-US':
              'Enable tab drag and drop functionality, configure third-party sorting plugins, and reorder tabs; Please note that tab items that are not rendered through v-for cannot be saved in the tab drag end event after dragging and sorting'
          },
          'demoId': 'tabs-draggable'
        },
        {
          'name': 'editable',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否同时显示添加和删除按钮，与 edit 事件搭配使用',
            'en-US': 'Do you want to display both add and delete buttons for use with the edit event'
          },
          'demoId': 'tabs-events-edit'
        },
        {
          'name': 'modelValue / v-model',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '绑定选中值，选中项的 name',
            'en-US': 'Bound selected value, The name of the selected item'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'popper-class',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '为"更多"下拉页签框添加类名，可用于自定义下拉选项的样式',
            'en-US':
              'Add a class name to the “More” dropdown label box, which can be used to customize the style of dropdown options'
          },
          'demoId': 'custom-more-icon'
        },
        {
          'name': 'position',
          'type': 'IPosition',
          'typeAnchorName': 'IPosition',
          'defaultValue': `'top'`,
          'desc': {
            'zh-CN': '设置页签栏所在位置; 默认为 top',
            'en-US': 'Set the location of the label bar; Default to top'
          },
          'demoId': 'position'
        },
        {
          'name': 'separator',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '设置分隔符样式',
            'en-US': 'Set Separator Style'
          },
          'demoId': 'tabs-separator'
        },
        {
          'name': 'show-more-tabs',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN':
              '设置当页签栏超过一定宽度时是否显示"更多"按钮，若为 true，则当鼠标悬停到按钮上时，将出现下拉框展示超出宽度的页签项',
            'en-US':
              'Set whether to display the "More" button when the label bar exceeds a certain width. If true, a drop-down box will appear when the mouse hovers over the button to display label items that exceed the width'
          },
          'demoId': 'custom-more-icon'
        },
        {
          'name': 'size',
          'type': '"small"',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置页签尺寸,当与 tab-style 为 card 或者 border-card 时生效, 该属性可选值为 small',
            'en-US':
              'Sets the tabs size. This attribute is valid only when tab-style is set to card or border-card. The value of this attribute can be small'
          },
          'demoId': 'tab-style-card'
        },
        {
          'name': 'stretch',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '页签项的宽度是否自动撑开',
            'en-US': 'Does the width of the label item automatically expand'
          },
          'demoId': 'stretch-wh'
        },
        {
          'name': 'tab-style',
          'type': 'ITabStyle',
          'typeAnchorName': 'ITabStyle',
          'defaultValue': '',
          'desc': {
            'zh-CN': '页签的类型；默认为空字符串',
            'en-US': 'Tabs style; Default to empty string'
          },
          'demoId': 'tab-style-card'
        },
        {
          'name': 'tooltip-config',
          'type': 'ITooltipProps | "title"',
          'typeAnchorName': 'ITooltipProps',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '设置文字超出提示, object 类型的值参考 tooltip 组件的 <a href="tooltip#API">Props</a> 配置，如果想使用默认的 title 属性，可设置为 string 类型，值为 title，【3.8.0版本新增】',
            'en-US':
              'Set the message indicating that the text exceeds the limit. The value of the object type refers to the <a href="tooltip#API">Props</a> configuration of the tooltip component. If you want to use the default title attribute, set it to the string type and set it to title. [Added in 3.8.0]'
          },
          'demoId': 'tooltip'
        },
        {
          'name': 'with-add',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否显示添加按钮，用来添加页签项',
            'en-US': 'Do you want to display the add button to add tab item'
          },
          'demoId': 'with-add'
        },
        {
          'name': 'with-close',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否显示页签项的关闭按钮，用来删除页签项',
            'en-US': 'Do you want to display the close button for label items to delete them'
          },
          'demoId': 'tabs-events-close'
        }
      ],
      'events': [
        {
          'name': 'add',
          'type': '() => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '点击"添加"按钮后触发，用于编写增加页签项的逻辑',
            'en-US': 'Triggered after clicking the "Add" button, used to write logic for adding tab items'
          },
          'demoId': 'with-add'
        },
        {
          'name': 'click',
          'type': '(TabItem: VueComponent, event: Event) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '点击页签项时触发，tab 被选中时触发； TabItem: 点中页签项的vueComponent对象信息',
            'en-US':
              'Trigger an event when clicking on a tab item, Triggered when tab is selected; TabItem: Click on the VueComponent object information of the tab item in the middle'
          },
          'demoId': 'tabs-events-click'
        },
        {
          'name': 'close',
          'type': '(name: string) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '点击页签项关闭按钮后触发，用于编写删除页签项的逻辑； name: 要删除的页签项name值',
            'en-US':
              'Triggered after clicking the tab item close button, used to write logic for deleting tab items; name: The name value of the tab item to be deleted'
          },
          'demoId': 'tabs-events-close'
        },
        {
          'name': 'edit',
          'type': '(name: string, type: "add" | "remove") => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '点击"添加"或"关闭"按钮触发； name：null或删除的tab名称, type：添加或删除字段',
            'en-US':
              'Click the "Add" or "Close" button to trigger; name: null or deleted tab name, type: added or deleted field'
          },
          'demoId': 'tabs-events-edit'
        },
        {
          'name': 'tab-drag-end',
          'type': '(event: DragEvent) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '拖动结束后的事件',
            'en-US': 'Event after the drag is complete'
          },
          'demoId': 'tabs-draggable'
        },
        {
          'name': 'tab-drag-over',
          'type': '(event: DragEvent) => void',
          'defaultValue': '',
          'desc': { 'zh-CN': '拖动中的事件', 'en-US': 'Dragging event' },
          'demoId': 'tabs-draggable'
        },
        {
          'name': 'tab-drag-start',
          'type': '(event: DragEvent) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '拖动开始时的事件',
            'en-US': 'Drag start event'
          },
          'demoId': 'tabs-draggable'
        }
      ],
      'slots': [
        {
          'name': 'moreIcon',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '更多按钮插槽', 'en-US': 'More Button Slot' },
          'demoId': 'custom-more-icon'
        },
        {
          'name': 'title',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '页签项标题插槽', 'en-US': 'Label Item Title Slot' },
          'demoId': 'custom-tab-title'
        }
      ]
    },
    {
      'name': 'tab-item',
      'type': 'component',
      'props': [
        {
          'name': 'disabled',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '设置页签项禁用，设置为 true 则无法点击',
            'en-US': 'Set tab items to disable, set to true to prevent clicking'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'lazy',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '设置本页签项内容是否为懒加载，默认为否',
            'en-US': 'Set whether the content of this tab is lazy loading, default to no'
          },
          'demoId': 'lazy'
        },
        {
          'name': 'name',
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': '页签项的值', 'en-US': 'Value of tab items' },
          'demoId': 'basic-usage'
        },
        {
          'name': 'title',
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': '页签项标题', 'en-US': 'Tab Item Title' },
          'demoId': 'basic-usage'
        },
        {
          'name': 'with-close',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '页签项是否展示删除按钮，与 Tabs 的 with-close 取或，只要有一个为true，则此项展示删除按钮',
            'en-US': `Does the tab item display a delete button, which is equal to or greater than the 'with close' option in Tabs? As long as one of these options is true, this option displays the delete button`
          },
          'demoId': 'tabs-events-close'
        }
      ],
      'events': [
        {
          'name': 'tab-nav-update',
          'type': '() => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '当页签项的 title 值发生变化时触发',
            'en-US': 'Triggered when the title value of the tab item changes'
          },
          'demoId': ''
        }
      ],
      'slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '页签项对应内容部分的默认插槽，用来自定义页签项对应的页面内容',
            'en-US':
              'The default slot for the content section corresponding to the tab item, used to customize the page content corresponding to the tab item'
          },
          'demoId': 'basic-usage'
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
