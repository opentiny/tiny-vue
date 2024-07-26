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
        'zh-CN':
          '<div class="tip custom-block"><code>Tabs</code> ：通过 v-model 设置选中的页签项，对应 TabItem 页签项中 name 属性的值；<br />\n        <code>TabItem</code> ：通过 title 设置页签项标题， name 设置页签项的值，disabled 设置页签项禁用，默认插槽自定义对应的内容。</div>',
        'en-US':
          '<div class="tip custom-block"><p> <code>Tabs</code> :Set the selected tag item through the v-model , corresponding to the value of the name attribute in the TabItem tag item;<br/>\n        <code>TabItem</code> :Set the label item title through title .nameSet the value of tab items.disabledSet tab items to be disabled.Customize the corresponding content for the default slot.</div>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'tab-style-card',
      name: {
        'zh-CN': 'card 类型',
        'en-US': 'Card Type'
      },
      desc: {
        'zh-CN':
          '通过 <code>tab-style="card"</code> 设置风格类型为 <code>card</code> ， <code>active-name</code> 设置初始选中的页签项。',
        'en-US':
          'Set the style type by <code>tab-style</code> , set the initially selected label item by <code>active-name</code>  .'
      },
      codeFiles: ['tab-style-card.vue']
    },
    {
      demoId: 'tab-style-bordercard',
      name: {
        'zh-CN': 'bordercard 类型',
        'en-US': 'BorderCard Type'
      },
      desc: {
        'zh-CN':
          '通过 <code>tab-style="border-card"</code> 设置风格类型为 <code>bordercard</code>， <code>size="small"</code> 设置小尺寸类型。',
        'en-US':
          'Use <code>tab-style="border-card</code> to set the tab style type to <code>bordercard</code> , and set the small size type by <code>size="small"</code>. '
      },
      codeFiles: ['tab-style-bordercard.vue']
    },
    {
      demoId: 'tabs-separator',
      name: {
        'zh-CN': '分隔符',
        'en-US': 'Separator'
      },
      desc: {
        'zh-CN': '<p>通过 <code>separator</code> 设置分隔符。</p>\n',
        'en-US': '<p>Use <code>separator</code> to set the separator.</p>\n'
      },
      codeFiles: ['tabs-separator.vue']
    },
    {
      demoId: 'size',
      name: {
        'zh-CN': '尺寸',
        'en-US': 'Size'
      },
      desc: {
        'zh-CN': '<p>通过 <code>size</code> 改变尺寸。</p>\n',
        'en-US': '<p>Use <code>size</code> to set the size.</p>\n'
      },
      codeFiles: ['size.vue']
    },
    {
      demoId: 'custom-more-icon',
      name: {
        'zh-CN': "定义'更多'按钮",
        'en-US': "'More' icon slot"
      },
      desc: {
        'zh-CN':
          '通过 <code>show-more-tabs</code> 设置页签项超出时显示 <code>更多</code> 按钮； <code>moreIcon</code> 插槽自定义 <code>更多</code> 按钮； <code>popper-class</code> 给“更多”下拉框添加自定义类名，可用来自定义样式。',
        'en-US':
          'Set the <code>show-more-tabs</code> button to display the <code>More</code> button when the label item exceeds the limit< Code>moreIcon</code> Slot Customization <code>More</code> buttons;Add custom class names to "more" dropdown boxes, can be used to customize styles.'
      },
      codeFiles: ['custom-more-icon.vue']
    },
    {
      demoId: 'with-add',
      name: {
        'zh-CN': '添加功能',
        'en-US': 'Adding Functionality'
      },
      desc: {
        'zh-CN': '通过 <code>with-add</code> 打开添加按钮，并监听 <code>add</code> 事件自定义实现添加页签项的逻辑。',
        'en-US':
          'Open the add button through <code>with-add</code> and listen for the <code>add</code> event to customize the logic for adding tag items.'
      },
      codeFiles: ['with-add.vue']
    },
    {
      demoId: 'tabs-events-close',
      name: {
        'zh-CN': '删除',
        'en-US': 'Delete'
      },
      desc: {
        'zh-CN': `通过 <code>with-close</code> 打开关闭按钮，并监听 <code>close</code> 事件自定义实现删除页签项的逻辑。
          <code>beforeClose</code> 设置删除前的操作，返回为false则取消删除，反之则执行删除。`,
        'en-US': `Use <code>with-close</code> to open the close button and listen to the <code>close</code> event to customize the logic for deleting tab items.
          <code>beforeClose</code> sets the operation before the deletion. If the return value is false, the deletion is canceled. Otherwise, the deletion is performed.`
      },
      codeFiles: ['tabs-events-close.vue']
    },
    {
      demoId: 'position',
      name: {
        'zh-CN': '位置',
        'en-US': 'Position'
      },
      desc: {
        'zh-CN':
          '通过 <code>position</code> 设置显示位置，可选值有 <code>top</code> 、 <code>right</code> 、 <code>bottom</code> 、 <code>left</code> ，默认为 <code>top</code> 。',
        'en-US':
          'Set the display position through <code>position</code> . The optional values include <code>top</code> , <code>right</code> , <code>bottom</code> , and <code>left</code> . The default value is <code>top</code> .'
      },
      codeFiles: ['position.vue']
    },
    {
      demoId: 'tooltip',
      name: {
        'zh-CN': '提示',
        'en-US': 'Tip'
      },
      desc: {
        'zh-CN': '通过 <code>tooltip-config</code> 设置 Title 提示。',
        'en-US': 'Set the Title prompt through <code>tooltip-config</code> .'
      },
      codeFiles: ['tooltip.vue']
    },
    {
      demoId: 'before-leave',
      name: {
        'zh-CN': '阻止切换',
        'en-US': 'Block switching'
      },
      desc: {
        'zh-CN':
          '通过 <code>before-leave</code> 钩子函数处理切换页签项前的逻辑，若返回是 <code>false</code> 或 <code>Promise.reject</code> ，则阻止切换，返回 true 则可以切换。',
        'en-US':
          'Use the <code>before-leave</code> hook function to handle the logic before switching label items. If <code>false</code> or <code>Promise.reject</code> is returned, the switch is blocked, and if true is returned, the switch can be made.'
      },
      codeFiles: ['before-leave.vue']
    },
    {
      demoId: 'stretch-wh',
      name: {
        'zh-CN': '自动撑宽',
        'en-US': 'Automatic widening'
      },
      desc: {
        'zh-CN': '通过 <code>stretch</code> 设置页签项的宽度是否自撑开，默认为 false 。',
        'en-US':
          'Set whether the width of the label item is self expanding by <code>stretch</code> , and the default is false.'
      },
      codeFiles: ['stretch-wh.vue']
    },
    {
      demoId: 'more-show-all',
      name: {
        'zh-CN': '超长数据下拉展示',
        'en-US': 'Drop-down display of ultra-long data'
      },
      desc: {
        'zh-CN':
          '通过 <code>more-show-all</code> 设置下拉面板展示全部页签项，<code>panel-max-height</code> 设置面板最大高度； <code>panel-width</code> 设置面板宽度。',
        'en-US':
          'Use <code>more-show-all</code> to set the drop-down panel to display all tab items and <code>panel-max-height</code> to set the maximum height of the panel. <code>panel-width</code> sets the width of the panel.'
      },
      codeFiles: ['more-show-all.vue']
    },
    {
      demoId: 'custom-tab-title',
      name: {
        'zh-CN': '定义页签项标题',
        'en-US': 'Custom Tab Item Title'
      },
      desc: {
        'zh-CN': '通过 <code>TabItem</code> 的 <code>title</code> 插槽自定义页签项标题，比如在标题前增加图标。',
        'en-US':
          'Customize the title of the tab page through the <code>title</code> slot of the <code>TabItem</code> , for example, add an icon before the title. '
      },
      codeFiles: ['custom-tab-title.vue']
    },
    {
      demoId: 'lazy',
      name: {
        'zh-CN': '懒加载',
        'en-US': 'Lazy Loading'
      },
      desc: {
        'zh-CN': '通过 <code>lazy</code> 设置页签项内容懒加载，默认值为 <code>false</code> 。',
        'en-US':
          'By setting the lazy loading of label item content through <code>lazy</code> , the default value is <code>false</code> .'
      },
      codeFiles: ['lazy.vue']
    },
    {
      demoId: 'tabs-second-layer',
      name: {
        'zh-CN': '多层级',
        'en-US': 'Multi Level'
      },
      desc: {
        'zh-CN': '通过嵌套使用即可。',
        'en-US': 'It can be used through nesting.'
      },
      codeFiles: ['tabs-second-layer.vue']
    },
    {
      demoId: 'show-different-grid-data',
      name: {
        'zh-CN': '与Grid结合',
        'en-US': 'Combining with Grid'
      },
      desc: {
        'zh-CN': 'Grid组件需要设置 <code>:auto-resize=“true”</code> ，自适应父元素 <code>TabItem</code> 相应变化。',
        'en-US':
          'The Grid component needs to set <code>:auto-resize="true"</code> to adapt to the corresponding changes of the parent element <code>TabItem</code> .'
      },
      codeFiles: ['show-different-grid-data.vue']
    },
    {
      demoId: 'tabs-draggable',
      name: {
        'zh-CN': '拖拽',
        'en-US': 'Drag'
      },
      desc: {
        'zh-CN':
          '<div class="tip custom-block"><p><code>drop-config</code> 设置 <code>Sortable</code> 排序插件；<br/>\n          <code>tab-drag-start</code> 监听拖拽开始事件；<br/>\n          <code>tab-drag-over</code> 监听拖拽中事件；<br/>\n          <code>tab-drag-end</code> 监听拖拽结束事件，以此改变页签项顺序。</p></div>',
        'en-US':
          '<div class="tip custom-block"><p> <code>drop configuration</code> Set the <code>Sortable</code> sorting plugin<br />\n          <code>tab-drag-start</code> Listen for drag start events<br />\n          <code>tab-drag-over</code> Listen for dragging events<br />\n          <code>tab-drag-end</code> Listen for drag end events to change the order of tags.</p></div>'
      },
      codeFiles: ['tabs-draggable.vue']
    },
    {
      demoId: 'tabs-events-click',
      name: {
        'zh-CN': '点击事件',
        'en-US': 'Click Event'
      },
      desc: {
        'zh-CN': '通过 <code>click</code> 监听单击页签项事件。',
        'en-US': 'Listen for tag item click events through <code>click</code> .'
      },
      codeFiles: ['tabs-events-click.vue']
    },
    {
      demoId: 'tabs-events-edit',
      name: {
        'zh-CN': '编辑事件',
        'en-US': 'Edit Event'
      },
      desc: {
        'zh-CN':
          '通过 <code>editable</code> 设置同时显示 <code>删除</code> 和 <code>添加</code> 按钮， <code>edit</code> 监听这两类按钮的点击事件。',
        'en-US':
          'By setting <code>edit</code> to display both <code>delete</code> and <code>add</code> buttons, <code>edit</code> listens for click events of these two types of buttons.'
      },
      codeFiles: ['tabs-events-edit.vue']
    },
    {
      demoId: 'overflow-title',
      name: {
        'zh-CN': '超出显示 tooltip',
        'en-US': 'Out of Display tooltip'
      },
      desc: {
        'zh-CN':
          '通过 <code>overflow-title</code> 设置标题超出一定长度（默认 256px）时隐藏并显示...，鼠标移到标题上可显示 tooltip，<code>title-width</code>设置标题超出的长度。',
        'en-US':
          'Use <code>overflow-title</code> to set the title to hide and show when it exceeds a certain length (default 256px)... , move the cursor to the title to display the tooltip, and set <code>title-width</code> to the excess length of the title.'
      },
      codeFiles: ['overflow-title.vue']
    }
  ]
}
