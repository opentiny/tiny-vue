export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': '属性<code>links</code>传入数据渲染',
        'en-US': 'Attribute <code>links</code>: input data rendering'
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'is-affix',
      'name': { 'zh-CN': '固定模式', 'en-US': 'Fixed mode' },
      'desc': {
        'zh-CN': '设置属性<code>is-affix</code>为true, 让锚点不随页面滚动',
        'en-US': 'Set the <code>is-affix</code> attribute to true so that the anchor does not scroll with the page.'
      },
      'codeFiles': ['is-affix.vue']
    },
    {
      'demoId': 'set-container',
      'name': { 'zh-CN': '滚动容器', 'en-US': 'Rolling Container' },
      'desc': {
        'zh-CN':
          '通过<code>container-id</code>属性指定滚动容器，<code>link-click</code>监听锚点点击事件，阻止浏览器默认行为，实现单页面<code>hash</code>路由模式的页内跳转，让页面只在想要的指定容器内滚动。通过<code>mask-class</code>属性设置自定义类名，高亮显示滚动的目标元素',
        'en-US':
          'Use the <code>container-id</code> attribute to specify the scrolling container. <code>link-click</code> listens to anchor click events and prevents the default browser behavior. Implement intra-page redirection in single-page <code>hash</code> routing mode so that the page scrolls only in the specified container. Set the custom class name through the <code>mask-class</code> attribute to highlight the scrolling target element'
      },
      'codeFiles': ['set-container.vue']
    },
    {
      'demoId': 'on-change',
      'name': { 'zh-CN': 'change事件', 'en-US': 'change event' },
      'desc': {
        'zh-CN': '<code>on-change</code>事件，锚点链接改变时触发回调',
        'en-US': '<code>on-change</code> event. Callback is triggered when the anchor link changes.'
      },
      'codeFiles': ['on-change.vue']
    }
  ],
  apis: [
    {
      'name': 'anchor',
      'type': 'component',
      'properties': [
        {
          'name': 'links',
          'type': '{ key, link, title, children }[]',
          'defaultValue': '',
          'desc': {
            'zh-CN': '数据配置项，可通过children嵌套',
            'en-US': 'Data configuration item, which can be nested by children.'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'is-affix',
          'type': 'Boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '固定模式', 'en-US': 'Fixed mode' },
          'demoId': 'is-affix'
        },
        {
          'name': 'container-id',
          'type': 'String',
          'defaultValue': 'document.body',
          'desc': { 'zh-CN': '指定滚动容器的id值', 'en-US': 'Specify the scrolling container ID.' },
          'demoId': 'set-container'
        },
        {
          'name': 'mask-class',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '自定义滚动的目标元素类名',
            'en-US': 'Class name of the customized scrolling target element'
          },
          'demoId': 'set-container'
        }
      ],
      'events': [
        {
          'name': 'link-click',
          'type': 'Function(arg1,arg2)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '锚点点击事件, 点击后触发的回调函数;//参数arg1:点击事件对象 //参数arg2: {link: 点击锚点的链接, title: 点击节点的标题文字 }',
            'en-US':
              'An anchor click event, which is a callback function triggered after the anchor clicks. //Parameter arg1: click event object //Parameter arg2: {link: click anchor link, title: click node title}'
          },
          'demoId': 'set-container'
        },
        {
          'name': 'on-change',
          'type': 'Function(arg1)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '监听锚点链接的改变；锚点改变后的回调函数; // 参数arg1: 当前锚点的id值',
            'en-US':
              'Listen to the change of the anchor link; Callback function after the anchor point is changed; //arg1: ID of the current anchor'
          },
          'demoId': 'on-change'
        }
      ],
      'slots': []
    }
  ]
}
