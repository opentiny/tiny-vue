export default {
  column: '1',
  owner: '',
  show: true,
  cloud: true,
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      hideSaas: true,
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
      demoId: 'offset-top',
      name: {
        'zh-CN': '顶部偏移量',
        'en-US': 'Offset Top'
      },
      desc: {
        'zh-CN': '通过 <code>offset-top</code> 设置锚点距离顶部的偏移量。',
        'en-US': 'Set the offset from the top of the anchor through <code>offset-top</code>.'
      },
      codeFiles: ['offset-top.vue']
    },
    {
      demoId: 'change',
      name: {
        'zh-CN': 'change 事件',
        'en-US': 'change event'
      },
      desc: {
        'zh-CN': '通过 <code>change</code> 监听锚点改变的事件。',
        'en-US': ' <code>change</code> event. Callback is triggered when the anchor link changes.'
      },
      codeFiles: ['change.vue']
    }
  ],
  features: [
    {
      id: 'links',
      name: '导航数据',
      support: {
        value: true
      },
      description: '通过 links 属性设置导航数据。',
      cloud: {
        value: true
      },
      apis: ['links'],
      demos: ['basic-usage']
    },
    {
      id: 'type',
      name: '类型设置',
      support: {
        value: true
      },
      description: '通过 type 属性设置导航类型。',
      cloud: {
        value: true
      },
      apis: ['type'],
      demos: ['basic-usage']
    },
    {
      id: 'is-affix',
      name: '固定模式',
      support: {
        value: true
      },
      description: '通过 is-affix 属性设置固定定位，使导航不随页面滚动。',
      cloud: {
        value: true
      },
      apis: ['is-affix'],
      demos: ['is-affix']
    },
    {
      id: 'container',
      name: '滚动容器',
      support: {
        value: true
      },
      description: '通过 container-id 设置滚动容器，实现指定容器内的滚动效果。',
      cloud: {
        value: true
      },
      apis: ['container-id'],
      demos: ['set-container']
    },
    {
      id: 'mark-class',
      name: '高亮样式',
      support: {
        value: true
      },
      description: '通过 mark-class 设置自定义类名，用于高亮显示导航的目标元素。',
      cloud: {
        value: true
      },
      apis: ['mark-class'],
      demos: ['set-container']
    },
    {
      id: 'events',
      name: '事件处理',
      support: {
        value: true
      },
      description: '支持监听锚点点击事件（link-click）和锚点改变事件（change）。',
      cloud: {
        value: true
      },
      apis: ['link-click', 'change'],
      demos: ['set-container', 'change']
    },
    // 在features数组中添加新的特性说明
    {
      id: 'offset-top',
      name: '顶部偏移量',
      support: {
        value: true
      },
      description: '通过 offset-top 属性设置锚点距离顶部的偏移量。',
      cloud: {
        value: true
      },
      apis: ['offset-top'],
      demos: ['offset-top']
    }
  ]
}
