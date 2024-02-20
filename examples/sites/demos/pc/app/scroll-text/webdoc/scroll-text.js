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
        'zh-CN': '可通过 text 自定义文本内容。',
        'en-US': 'You can use <code>text</code> to customize the text content. '
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'scroll-direction',
      name: {
        'zh-CN': '文字滚动方向',
        'en-US': 'Text scrolling direction'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>direction</code> 设置文字滚动方向。</p>\n',
        'en-US': '<p>You can use <code>direction</code> to set the text scrolling direction. </p>\n'
      },
      codeFiles: ['scroll-direction.vue']
    },
    {
      demoId: 'hover-stop',
      name: {
        'zh-CN': '鼠标悬停时文本停止滚动',
        'en-US': 'The text stops scrolling when the mouse is hovered.'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>hover-stop</code> 设鼠标悬停时文本是否停止滚动。</p>\n',
        'en-US':
          '<p>You can use <code>hover-stop</code> to set whether the text stops scrolling when the mouse is hovered. </p>\n'
      },
      codeFiles: ['hover-stop.vue']
    },
    {
      demoId: 'scroll-time',
      name: {
        'zh-CN': '滚动时间间隔',
        'en-US': 'Scrolling Interval'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>time</code> 设置滚动时间间隔。</p>\n',
        'en-US': '<p>You can use <code>time</code> to set the scrolling interval. </p>\n'
      },
      codeFiles: ['scroll-time.vue']
    },
    {
      demoId: 'custom-text-style',
      name: {
        'zh-CN': '自定义文本样式',
        'en-US': 'Custom Text Style'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>class</code> 自定义文本样式。</p>\n',
        'en-US': '<p>You can use <code>class</code> to customize the text style. </p>\n'
      },
      codeFiles: ['custom-text-style.vue']
    },
    {
      demoId: 'slots',
      name: {
        'zh-CN': '插槽',
        'en-US': 'Solt'
      },
      desc: {
        'zh-CN': '<p>可通过 solt 插槽自定义文本内容。</p>\n',
        'en-US': '<p>You can customize the text content through the solt slot. </p>\n'
      },
      codeFiles: ['slots.vue']
    }
  ]
}
