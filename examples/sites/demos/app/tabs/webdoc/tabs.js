export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>v-model</code> 设置初始激活的标签页，绑定的值对应 <code>tiny-tab-item</code> 元素中 <code>name</code> 属性的值。一个 <code>tiny-tab-item</code> 为一个标签页，通过 <code>title</code> 属性设置标签页标题。</p>\n',
        'en-US':
          '<p> uses <code>v-model</code> to set the initial activated tab page. The bound value corresponds to the value of the <code>name</code> attribute in the <code>tiny-tab-item</code> element. A <code>tiny-tab-item</code> is a tab. You can use the <code>title</code> attribute to set the tab title. </p>\n'
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'tab-style-card',
      'name': { 'zh-CN': 'card 类型', 'en-US': 'card type' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>tab-style</code> 设置标签页风格类型， 通过 <code>active-name</code> 设置初始激活的标签页 。</p>\n',
        'en-US':
          '<p>Use <code>tab-style</code> to set the tab style type and <code>active-name</code> to set the initially activated tab. </p>\n'
      },
      'codeFiles': ['tab-style-card.vue']
    },
    {
      'demoId': 'tab-style-bordercard',
      'name': { 'zh-CN': 'bordercard 类型', 'en-US': 'bordercard type' },
      'desc': {
        'zh-CN': '<p>通过 <code>tab-style</code> 设置标签页风格类型为 <code>bordercard</code> 。</p>\n',
        'en-US': '<p>Use <code>tab-style</code> to set the tab style type to <code>bordercard</code>. </p>\n'
      },
      'codeFiles': ['tab-style-bordercard.vue']
    },
    {
      'demoId': 'with-add',
      'name': { 'zh-CN': '标签页可增加', 'en-US': 'The tab page can be added.' },
      'desc': {
        'zh-CN':
          '<p>设置 <code>with-add</code> 属性启用标签可增加功能。同时通过 <code>add</code> 事件自定义实现增加标签页的逻辑。配置 <code>show-more-tabs</code> 属性后当标签页超过一定宽度时将显示 <code>更多</code> 按钮。</p>\n',
        'en-US':
          '<p>Set the <code>with-add</code> attribute to enable tags to add functions. In addition, the <code>add</code> event is used to customize the logic for adding tabs. After the <code>show-more-tabs</code> attribute is configured, the <code>More</code> button is displayed when the tab page exceeds a certain width. </p>\n'
      },
      'codeFiles': ['with-add.vue']
    },
    {
      'demoId': 'custom-more-icon',
      'name': { 'zh-CN': "'更多'图标插槽", 'en-US': "'More' icon slot" },
      'desc': {
        'zh-CN': '<p>通过 <code>show-more-tabs</code> 和 <code>moreIcon</code> 插槽实现自定义更多图标</p>\n',
        'en-US': '<p>Customize more icons through <code>show-more-tabs</code> and <code>moreIcon</code> slots</p>\n'
      },
      'codeFiles': ['custom-more-icon.vue']
    },
    {
      'demoId': 'tabs-events-close1',
      'name': { 'zh-CN': '标签页可关闭', 'en-US': 'The tab page can be closed.' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>withClose</code> 属性设置是否可关闭标签页。同时可通过 <code>close</code> 事件自定义实现关闭标签页的逻辑。</p>\n',
        'en-US':
          '<p>The <code>withClose</code> attribute specifies whether the tab page can be closed. In addition, the <code>close</code> event can be used to customize the logic for closing the tab page. </p>\n'
      },
      'codeFiles': ['tabs-events-close.vue']
    },
    {
      'demoId': 'position',
      'name': { 'zh-CN': 'top 显示位置', 'en-US': 'top display position' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>position</code> 属性设置标签页显示位置，可选值有 <code>top</code>、<code>right</code>、<code>bottom</code>、<code>left</code>，默认为 <code>top</code> 。</p>\n',
        'en-US':
          '<p>Set the display position of the tab page through the <code>position</code> attribute. The options are <code>top</code>, <code>right</code>, <code>bottom</code>, and <code>left</code>. The default value is <code>top</code>. </p>\n'
      },
      'codeFiles': ['position.vue']
    },
    {
      'demoId': 'position-right',
      'name': { 'zh-CN': '右侧显示', 'en-US': 'Display on the right' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['position-right.vue']
    },
    {
      'demoId': 'position-bottom',
      'name': { 'zh-CN': '下方显示', 'en-US': 'Display below' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['position-bottom.vue']
    },
    {
      'demoId': 'position-left',
      'name': { 'zh-CN': '左侧显示', 'en-US': 'Display on the left' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['position-left.vue']
    },
    {
      'demoId': 'before-leave',
      'name': { 'zh-CN': '离开前事件', 'en-US': 'Event Before Leaving' },
      'desc': {
        'zh-CN':
          '<p><code>before-leave</code> 切换标签之前的钩子函数，若返回 false 或者返回 Promise 且被 reject，则阻止切换，返回 true 则可以切换。</p>\n',
        'en-US':
          'The hook function before <p><code>before-leave</code> switches the label. If false or Promise is returned and rejected, the switchover is blocked. If true is returned, the switchover is allowed. </p>\n'
      },
      'codeFiles': ['before-leave.vue']
    },
    {
      'demoId': 'stretch-wh',
      'name': { 'zh-CN': '可自动撑开', 'en-US': 'Automatically open' },
      'desc': {
        'zh-CN': '<p><code>stretch</code> 属性设置标签的宽度是否自撑开，默认为 false 。</p>\n',
        'en-US':
          'The <p><code>stretch</code> property specifies whether the width of a label is self-expanded. The default value is false. </p>\n'
      },
      'codeFiles': ['stretch-wh.vue']
    },
    {
      'demoId': 'tabs-draggable',
      'name': { 'zh-CN': '标签页可拖拽', 'en-US': 'The tab page can be dragged.' },
      'desc': {
        'zh-CN':
          '<p>设置 <code>drop-config</code> 属性，并传入 <code>Sortable</code> 插件，启用标签页拖拽功能，对标签页进行重新排序。</p>\n',
        'en-US':
          '<p>Set the <code>drop-config</code> attribute, transfer the <code>Sortable</code> plug-in, enable the tab page drag function, and reorder the tab pages. </p>\n'
      },
      'codeFiles': ['tabs-draggable.vue']
    },
    {
      'demoId': 'tabs-events-add',
      'name': { 'zh-CN': 'add 事件', 'en-US': 'add event' },
      'desc': {
        'zh-CN': '<p>点击新增按钮增加标签页时触发 <code>add</code> 事件</p>\n',
        'en-US': '<p>The <code>add</code> event is triggered when the Add button is clicked to add a tab page</p>\n'
      },
      'codeFiles': ['tabs-events-add.vue']
    },
    {
      'demoId': 'tabs-events-click',
      'name': { 'zh-CN': 'click 事件', 'en-US': 'click event' },
      'desc': {
        'zh-CN': '<p>单击标签页时触发 <code>click</code> 事件</p>\n',
        'en-US': '<p>The <code>click</code> event is triggered when a tab page is clicked</p>\n'
      },
      'codeFiles': ['tabs-events-click.vue']
    },
    {
      'demoId': 'tabs-events-close',
      'name': { 'zh-CN': 'close 事件', 'en-US': 'close event' },
      'desc': {
        'zh-CN': '<p>关闭标签页时触发 <code>close</code> 事件</p>\n',
        'en-US': '<p>The <code>close</code> event is triggered when a tab page is closed</p>\n'
      },
      'codeFiles': ['tabs-events-close.vue']
    },
    {
      'demoId': 'tabs-events-edit',
      'name': { 'zh-CN': 'edit 事件', 'en-US': 'edit Event' },
      'desc': {
        'zh-CN': '<p>点击新增按钮增加标签页 或 标签页被关闭后触发 <code>edit</code> 事件</p>\n',
        'en-US':
          '<p>The <code>edit</code> event is triggered after you click Add to add a tab page or the tab page is closed</p>\n'
      },
      'codeFiles': ['tabs-events-edit.vue']
    },
    {
      'demoId': 'custom-tab-title',
      'name': { 'zh-CN': '自定义标签页标题', 'en-US': 'Custom Tab Title' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>tiny-tab-item</code> 的 <code>title</code> 插槽自定义标签页标题，比如在标题前增加图标。</p>\n',
        'en-US':
          '<p>Customize the title of the tab page through the <code>title</code> slot of the <code>tiny-tab-item</code>, for example, add an icon before the title. </p>\n'
      },
      'codeFiles': ['custom-tab-title.vue']
    },
    {
      'demoId': 'tabdata-title',
      'name': { 'zh-CN': '循环创建标签页', 'en-US': 'Creating tab pages cyclically' },
      'desc': {
        'zh-CN': '<p>通过 <code>v-for</code> 根据数据循环创建多个 <code>tiny-tab-item</code> 。</p>\n',
        'en-US':
          '<p>Creates multiple <code>tiny-tab-items</code> based on the data loop through <code>v-for</code>. </p>\n'
      },
      'codeFiles': ['tabdata-title.vue']
    },
    {
      'demoId': 'show-different-grid-data',
      'name': { 'zh-CN': '标签页切换不同 Grid', 'en-US': 'Switching a tab page to a grid' },
      'desc': {
        'zh-CN':
          '<blockquote>\n<p>Tabs 组件里使用 Grid 组件需要 Grid 设置属性 <code>:auto-resize=&quot;true&quot;</code>，这样才能让 Grid 自适应父元素响应变化。</p>\n</blockquote>\n',
        'en-US':
          'Using the Grid component in the <blockquote>\n<p>Tabs component requires the Grid to set the <code>:auto-resize=&quot;true&quot;</code> property so that the Grid can adapt to changes in the parent element. </p>\n</blockquote>\n'
      },
      'codeFiles': ['show-different-grid-data.vue']
    },
    {
      'demoId': 'tabs-second-layer',
      'name': { 'zh-CN': '二级标签页', 'en-US': 'Level-2 tab' },
      'desc': { 'zh-CN': '页签嵌套页签', 'en-US': 'Nested tab' },
      'codeFiles': ['tabs-second-layer.vue']
    },
    {
      'demoId': 'lazy',
      'name': { 'zh-CN': '懒加载', 'en-US': 'Lazy Loading' },
      'desc': {
        'zh-CN':
          '设置标签项的 <code>lazy</code> 属性为 <code>true</code>，可以使标签项内容懒加载。默认值为 <code>false</code>',
        'en-US':
          'Set the <code>lazy</code> attribute of a tag item to <code>true</code> to enable lazy loading of the tag item content. The default value is <code>false</code>'
      },
      'codeFiles': ['lazy.vue']
    }
  ],
  apis: [
    {
      'name': 'tabs',
      'type': 'component',
      'properties': [
        {
          'name': 'tab-style',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '标签页样式;该属性的可选值为 card / border-card / button-card',
            'en-US': 'Label page style; The optional value of this attribute is card / border-card / button-card'
          },
          'demoId': 'tab-style-card'
        },
        {
          'name': 'popper-class',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '为 popper 添加类名(可参考 popover 组件)',
            'en-US': 'Add a class name for the popper. For details, see the popover component.'
          },
          'demoId': ''
        },
        {
          'name': 'with-add',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '标签是否可增加', 'en-US': 'Whether tags can be added' },
          'demoId': 'with-add'
        },
        {
          'name': 'with-close',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '标签是否可关闭;标签是否可关闭',
            'en-US': 'Whether the tag can be closed; Whether the tag can be closed'
          },
          'demoId': 'tabs-events-close'
        },
        {
          'name': 'editable',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '标签是否同时可增加和关闭',
            'en-US': 'Whether tags can be added and disabled at the same time'
          },
          'demoId': 'tabs-events-add'
        },
        {
          'name': 'show-more-tabs',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '当标签页超过一定宽度时将显示 更多 ，鼠标悬停到 更多 时，将显示超出宽度的标签页。',
            'en-US':
              'When the width of a tab page exceeds a specified value, more tabs are displayed. When you hover the cursor to more tabs, the tab page that exceeds the width is displayed.'
          },
          'demoId': 'with-add'
        },
        {
          'name': 'modelValue / v-model',
          'type': 'String',
          'defaultValue': '该属性的默认值为 第一个选项卡的 name',
          'desc': {
            'zh-CN': '绑定值，选中选项卡的 name',
            'en-US': 'Bound value, which is the name of the selected tab.'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'position',
          'type': 'String',
          'defaultValue': '该属性的默认值为 top',
          'desc': {
            'zh-CN': '选项卡所在位置;该属性的可选值为 top/right/bottom/left',
            'en-US': 'Location of the tab; The optional values for this property are top/right/bottom/left'
          },
          'demoId': 'position'
        },
        {
          'name': 'stretch',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '标签的宽度是否自撑开', 'en-US': 'Whether the label width is self-expanded' },
          'demoId': 'stretch-wh'
        },
        {
          'name': 'before-leave',
          'type': 'Function(activeName, oldActiveName)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换',
            'en-US':
              'The hook before the tag is switched. If false is returned or Promise is returned and rejected, the switch is blocked.'
          },
          'demoId': 'before-leave'
        },
        {
          'name': 'active-name',
          'type': 'String',
          'defaultValue': '',
          'desc': { 'zh-CN': '激活当前页面', 'en-US': 'Activate the current page' },
          'demoId': 'tab-style-card'
        },
        {
          'name': 'size',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置 tabs 标签页尺寸,当与 tabStyle 为 card 或者 border-card 时生效, 该属性可选值为 small',
            'en-US':
              'Sets the tab page size. This attribute is valid only when tabStyle is set to card or border-card. The value of this attribute can be small.'
          },
          'demoId': 'tab-style-card'
        },
        {
          'name': 'drop-config',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '启用标签页拖拽功能，对标签页进行重新排序，注意：不是通过 v-for 渲染的 tab-item，在拖拽排序后，无法在 tab-drag-end 事件中对其顺序进行保存',
            'en-US':
              'Enable the tab page drag function to reorder tab pages. Note that tab-items that are not rendered by v-for cannot be saved in the tab-drag-end event after being dragged and sorted.'
          },
          'demoId': 'tabs-draggable'
        },
        {
          'name': 'tooltip-config',
          'type': 'Object , String',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '设置文字超出提示, Object类型的值参考tooltip组件配置，如果想使用默认的title属性，可设置为String 类型，值为title，【3.8.0版本新增】',
            'en-US':
              'Set the message indicating that the text exceeds the limit. For details about the value of the Object type, see the configuration of the tooltip component. If you want to use the default title attribute, set it to the String type and set it to title. [Added in 3.8.0]'
          },
          'demoId': 'position-left'
        }
      ],
      'events': [
        {
          'name': 'tab-drag-start',
          'type': 'Function(arg1)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '拖动开始时的事件, arguments: arg1:event',
            'en-US': 'Drag start event, arguments: arg1:event'
          },
          'demoId': 'tabs-events-add'
        },
        {
          'name': 'tab-drag-over',
          'type': 'Function(arg1)',
          'defaultValue': '',
          'desc': { 'zh-CN': '拖动中的事件, arguments: arg1:event', 'en-US': 'Draging event, arguments: arg1:event' },
          'demoId': 'tabs-events-add'
        },
        {
          'name': 'tab-drag-end',
          'type': 'Function(arg1)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '拖动结束后的事件, arguments: arg1:event',
            'en-US': 'Event after the drag is complete. arguments: arg1:event'
          },
          'demoId': 'tabs-events-add'
        },
        {
          'name': 'add',
          'type': 'Function()',
          'defaultValue': '',
          'desc': {
            'zh-CN': '增加tabitem时触发事件;点击 tabs 的新增按钮后触发;无arguments',
            'en-US': 'This event is triggered when a tab item is added. Click the Add button on the tabs. No arguments'
          },
          'demoId': 'tabs-events-add'
        },
        {
          'name': 'click',
          'type': 'Function(arg1,arg2)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '点击tabitem时触发事件;tab 被选中时触发;arguments: arg1:VueComponent 点击tab的compent对象信息, arg2:event ',
            'en-US':
              'This event is triggered when a tabitem is clicked. Triggered when a tab is selected. arguments: arg1:VueComponent Click the compent object information of the tab, arg2:event'
          },
          'demoId': 'tabs-events-click'
        },
        {
          'name': 'close',
          'type': 'Function(arg)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '删除tabitem时触发事件;点击 tab 移除按钮后触发;arguments: arg1:删除的tab名称',
            'en-US':
              'This event is triggered when a tab item is deleted. This event is triggered after the tab removal button is clicked. arguments: arg1: name of the deleted tab'
          },
          'demoId': 'tabs-events-close'
        },
        {
          'name': 'edit',
          'type': 'Function(arg1,arg2)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              "点击 tabs 的新增按钮或 tab 被关闭后触发;arguments: arg1:null或删除的tab名称, arg2:'add' 或者 'remove'",
            'en-US':
              "This event is triggered when you click the new button of a tab or the tab is closed. arguments: arg1:null or name of the deleted tab, arg2:'add' or'remove'"
          },
          'demoId': 'tabs-events-edit'
        }
      ],
      'slots': [
        {
          'name': 'title',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '自定义title内容', 'en-US': 'Customized titl content' },
          'demoId': 'custom-tab-title'
        },
        {
          'name': 'moreIcon',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '自定义更多图标', 'en-US': 'Customize More Icons' },
          'demoId': 'custom-more-icon'
        }
      ]
    }
  ]
}
