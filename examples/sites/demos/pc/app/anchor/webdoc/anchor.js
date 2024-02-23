export default {
  column: '1',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN': '通过 <code>links</code> 设置导航数据， <code>type</code> 设置类型。',
        'en-US': 'Set navigation data through <code>links</code> , and <code>type</code> to set the type.'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'is-affix',
      name: {
        'zh-CN': '固定模式',
        'en-US': 'Fixed mode'
      },
      desc: {
        'zh-CN': '通过 <code>is-affix</code> 设置固定定位，不随页面滚动。',
        'en-US': 'Set fixed positioning through <code>is-affix</code> , without scrolling with the page.'
      },
      codeFiles: ['is-affix.vue']
    },
    {
      demoId: 'set-container',
      name: {
        'zh-CN': '滚动容器',
        'en-US': 'Rolling Container'
      },
      desc: {
        'zh-CN':
          '通过 <code>container-id</code> 设置滚动容器， <code>link-click</code> 监听锚点点击事件，阻止浏览器默认行为，实现单页面 <code>hash</code> 路由模式的页内跳转，在指定容器内滚动。<br/>\n            <code>mark-class</code> 设置自定义类名，高亮显示导航的目标元素。',
        'en-US':
          'By setting the scrolling container through <code>container-id</code> , <code>link-click</code> listens for anchor click events, prevents browser default behavior, and implements single page <code>hash</code> routing mode for page hopping, scrolling within the specified container<br/>\n             <code>mark-class</code> Set a custom class name to highlight the target element for navigation.'
      },
      codeFiles: ['set-container.vue']
    },
    {
      demoId: 'change',
      name: {
        'zh-CN': 'change事件',
        'en-US': 'change event'
      },
      desc: {
        'zh-CN': '通过 <code>change</code> 监听锚点改变的事件。',
        'en-US': ' <code>change</code> event. Callback is triggered when the anchor link changes.'
      },
      codeFiles: ['change.vue']
    }
  ]
}
