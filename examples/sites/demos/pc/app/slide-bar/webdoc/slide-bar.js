export default {
  column: '2',
  owner: '',
  metaData: {
    deprecated: '3.12.0',
    removed: '3.15.0'
  },
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN': '通过<code>:init-blocks="4"</code>设置可显示的块数。',
        'en-US': 'Set the number of blocks that can be displayed through<code>: init blocks="4"</code>.'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'wheel-blocks',
      name: {
        'zh-CN': '每次滚动块数',
        'en-US': 'Number of blocks scrolled each time'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>wheel-blocks</code> 设置每次滚动块数。\n通过 <code>value</code> 调用服务时候获取数据的来源。</p>\n',
        'en-US':
          '<p>You can use <code>wheel-blocks</code> to set the number of blocks to be scrolled each time. \nThe data source can be obtained when the service is invoked through <code>value</code>. </p>\n'
      },
      codeFiles: ['wheel-blocks.vue']
    },
    {
      demoId: 'custom-content',
      name: {
        'zh-CN': '自定义滚动块内容',
        'en-US': 'Custom Scroll Block Content'
      },
      desc: {
        'zh-CN': '<p>通过插槽自定义滚动块内容。</p>\n',
        'en-US': '<p>Customize the scroll block content by slot. </p>\n'
      },
      codeFiles: ['custom-content.vue']
    },
    {
      demoId: 'custom-tag',
      name: {
        'zh-CN': '自定义 DOM 标签',
        'en-US': 'Customized DOM Label'
      },
      desc: {
        'zh-CN': '<p>通过 <code>tag sub-tag</code> 自定义 DOM 标签。</p>\n',
        'en-US': '<p>You can use <code>tag sub-tag</code> to customize DOM tags. </p>\n'
      },
      codeFiles: ['custom-tag.vue']
    },
    {
      demoId: 'slide-bar-events',
      name: {
        'zh-CN': '滚动块事件',
        'en-US': 'Scroll Block Event'
      },
      desc: {
        'zh-CN': '通过<code>@before-click</code>触发滑动点击前事件。',
        'en-US': 'Trigger the pre click event by<code>@ before click</code>.'
      },
      codeFiles: ['slide-bar-events.vue']
    }
  ]
}
