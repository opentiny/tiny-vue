export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本使用',
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
      demoId: 'active-color',
      name: {
        'zh-CN': '当前页签颜色',
        'en-US': 'Active Label Color'
      },
      desc: {
        'zh-CN': '通过 <code>active-color</code> 设置当前页签的字体色。',
        'en-US': 'Specify the font color of the current label using the <code>active-color</code> property.'
      },
      codeFiles: ['active-color.vue']
    },
    {
      demoId: 'size',
      name: {
        'zh-CN': '页签尺寸',
        'en-US': 'Tab Size'
      },
      desc: {
        'zh-CN': '通过 <code>size</code> 设置当前页签的字体色。',
        'en-US': 'Set the font color of the current tag using the <code>size</code> attribute.'
      },
      codeFiles: ['size.vue']
    },
    {
      demoId: 'before-leave',
      name: {
        'zh-CN': '切换页签钩子函数',
        'en-US': 'Change Tab Hook'
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
      demoId: 'swipe',
      name: {
        'zh-CN': '滑动内容切换页签',
        'en-US': 'Slide Content to Switch Tabs'
      },
      desc: {
        'zh-CN': '通过 <code>swipeable</code> 属性设置滑动内容是否切换页签。',
        'en-US': 'Set whether swiping changes the selected tab through the <code>swipeable</code> attribute.'
      },
      codeFiles: ['swipe.vue']
    },
    {
      demoId: 'stretch',
      name: {
        'zh-CN': '自动撑宽',
        'en-US': 'Automatic widening'
      },
      desc: {
        'zh-CN': '通过 <code>stretch</code> 设置页签项的宽度是否自撑开，默认为 false 。',
        'en-US':
          'Set whether the width of the label item is self expanding by <code>stretch</code> , and the default is false.'
      },
      codeFiles: ['stretch.vue']
    },
    {
      demoId: 'add-delete-tab',
      name: {
        'zh-CN': '动态增减页签',
        'en-US': 'Dynamic Addition of Tabs'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>with-add</code> 打开添加按钮，并监听 <code>add</code> 事件自定义实现添加页签项的逻辑；</p>\n        <code>with-close</code> 显示删除按钮，并监听 <code>close</code> 事件自定义实现添加页签项的逻辑。</p>',
        'en-US':
          '<p>Open the add button through <code>with-add</code> and listen for the <code>add</code> event to customize the logic for adding tag items.</p><p>Show the delete button through <code>with-close</code> and listen for the <code>close</code> event to customize the logic for closing tag items.</p>'
      },
      codeFiles: ['add-delete-tab.vue']
    },
    {
      demoId: 'expand',
      name: {
        'zh-CN': '页签可展开',
        'en-US': 'Expandable Tab '
      },
      desc: {
        'zh-CN':
          '当页签数量比较多无法全部展示时，可通过设置 <code>:show-expand-tabs="true"</code> 显示展开按钮，点击后展开全部页签功能。',
        'en-US':
          'When there are too many tabs to display at once, you can use the <code>:show-expand-tabs="true"</code> attribute to show an expand button. Clicking on this button will expand and display all tabs.'
      },
      codeFiles: ['expand.vue']
    },
    {
      demoId: 'tabs-events',
      name: {
        'zh-CN': '点击事件',
        'en-US': ' Click Event'
      },
      desc: {
        'zh-CN': '通过 <code>click</code> 监听点击页签事件。',
        'en-US': 'Listen for click events on tab buttons using the <code>click</code> event.'
      },
      codeFiles: ['tabs-events.vue']
    }
  ]
}
