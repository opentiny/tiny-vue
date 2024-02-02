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
          '通过 <code>label</code> 设置标题，<code>value</code> 设置标题右侧内容，<code>disabled</code> 设置是否禁用；通过默认插槽自定义过滤面板内容。',
        'en-US':
          'Set the title through<code>label</code>,<code>value</code>set the content to the right of the title, and<code>disabled</code>set whether to disable it; \n          Customize filter panel content through default slots.'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'popper-class',
      name: {
        'zh-CN': '自定义下拉面板',
        'en-US': 'Custom dropdown box'
      },
      desc: {
        'zh-CN':
          '通过 <code>placement</code> 控制下拉面板的位置， <code>popper-class</code> 设置类名，自定义下拉面板的样式；<code>popper-append-to-body</code> 设置弹下拉面板是否插入至 body 元素。在下拉面板的定位出现问题时，可将其设置为 false。',
        'en-US':
          'Control the position of the drop-down panel through<code>placement</code>. Set the class name and customize the style of the dropdown box through<code>popper-class</code>. <code>popper-append-to-body</code>Set whether the pop-up \n          menu is inserted into the body element. When there is an issue with the positioning of the dropdown box, it can be set to false.'
      },
      codeFiles: ['popper-class.vue']
    },
    {
      demoId: 'tip',
      name: {
        'zh-CN': '背景与提示',
        'en-US': 'Background and Tips'
      },
      desc: {
        'zh-CN':
          "通过 <code>blank</code> 控制过滤器背景是否透明； <code>:clearable='false'</code> 隐藏清空按钮；配合 <code>tip</code> 添加标题右侧提示信息。",
        'en-US':
          "Use <code>blank</code> to control whether the filter background is transparent. <code>:clearable='false'</code>Hide the Clear button; Add the prompt information on the right of the title together with <code>tip</code>."
      },
      codeFiles: ['tip.vue']
    },
    {
      demoId: 'manual-hide',
      name: {
        'zh-CN': '手动隐藏',
        'en-US': 'Manually hide'
      },
      desc: {
        'zh-CN': '手动调用 <code>hide</code> 实例方法完成收起下拉面板功能。',
        'en-US': 'Manually call the<code>hide</code>instance method to complete the collapse dropdown function.'
      },
      codeFiles: ['manual-hide.vue']
    },
    {
      demoId: 'code',
      name: {
        'zh-CN': '批量编码',
        'en-US': 'Batch coding'
      },
      desc: {
        'zh-CN': '通过默认插槽定义下拉框内容。',
        'en-US': 'Define the contents of the drop-down list box by default slot.'
      },
      codeFiles: ['code.vue']
    },
    {
      demoId: 'event',
      name: {
        'zh-CN': '事件',
        'en-US': 'Event'
      },
      desc: {
        'zh-CN':
          '<code>handle-clear</code> 监听清空按钮点击事件，执行删除操作； <code>visible-change</code> 监听下拉面板的显隐事件。',
        'en-US':
          '<code>handle-clear</code>Listen to the clear button click event and execute the delete operation<code>visible-change</code>listens to the explicit and implicit events of the drop-down panel.'
      },
      codeFiles: ['event.vue']
    }
  ]
}
