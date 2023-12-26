export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': '通过 <code>links</code> 设置导航数据， <code>type</code> 设置类型。',
        'en-US': 'Set navigation data through <code>links</code> , and <code>type</code> to set the type.'
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'is-affix',
      'name': { 'zh-CN': '固定模式', 'en-US': 'Fixed mode' },
      'desc': {
        'zh-CN': '通过 <code>is-affix</code> 设置固定定位，不随页面滚动。',
        'en-US': 'Set fixed positioning through <code>is-affix</code> , without scrolling with the page.'
      },
      'codeFiles': ['is-affix.vue']
    },
    {
      'demoId': 'set-container',
      'name': { 'zh-CN': '滚动容器', 'en-US': 'Rolling Container' },
      'desc': {
        'zh-CN': `通过 <code>container-id</code> 设置滚动容器， <code>link-click</code> 监听锚点点击事件，阻止浏览器默认行为，实现单页面 <code>hash</code> 路由模式的页内跳转，在指定容器内滚动。<br/>
            <code>mark-class</code> 设置自定义类名，高亮显示导航的目标元素。`,
        'en-US': `By setting the scrolling container through <code>container-id</code> , <code>link-click</code> listens for anchor click events, prevents browser default behavior, and implements single page <code>hash</code> routing mode for page hopping, scrolling within the specified container<br/>
             <code>mark-class</code> Set a custom class name to highlight the target element for navigation.`
      },
      'codeFiles': ['set-container.vue']
    },
    {
      'demoId': 'change',
      'name': { 'zh-CN': 'change事件', 'en-US': 'change event' },
      'desc': {
        'zh-CN': '通过 <code>change</code> 监听锚点改变的事件。',
        'en-US': ' <code>change</code> event. Callback is triggered when the anchor link changes.'
      },
      'codeFiles': ['change.vue']
    }
  ],
  apis: [
    {
      'name': 'anchor',
      'type': 'component',
      'props': [
        {
          'name': 'container-id',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '用于单页面 hash 路由模式时指定滚动容器的id值，id为空时则滚动容器默认为 HTML 文档的根节点 body 元素',
            'en-US':
              'When used in single page hash routing mode, specify the id value of the scrolling container. If the id is empty, the scrolling container defaults to the body element of the root node of the HTML document'
          },
          'demoId': 'set-container'
        },
        {
          'name': 'is-affix',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '固定模式', 'en-US': 'Fixed mode' },
          'demoId': 'is-affix'
        },
        {
          'name': 'links',
          'type': 'ILink[]',
          'typeAnchorName': 'ILink',
          'defaultValue': '',
          'desc': {
            'zh-CN': '导航数据配置项，可通过children嵌套',
            'en-US': 'Navigation data configuration items can be nested through children'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'mark-class',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '自定义滚动的目标元素类名',
            'en-US': 'Class name of the customized scrolling target element'
          },
          'demoId': 'set-container'
        },
        {
          'name': 'type',
          'type': '"line" | "dot"',
          'defaultValue': `'line'`,
          'desc': {
            'zh-CN': '锚点类型',
            'en-US': 'Anchor type'
          },
          'demoId': 'basic-usage'
        }
      ],
      'events': [
        {
          'name': 'change',
          'type': '(hash: string) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '锚点链接改变事件',
            'en-US': 'Anchor link change event'
          },
          'demoId': 'change'
        },
        {
          'name': 'on-change',
          'type': '(hash: string) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '使用change代替；[deprecated v3.12.0废弃，v3.17.0移除；移除原因：命名规范]',
            'en-US':
              'use change instead [deprecated v3.12.0 abandoned, v3.17.0 removed; reason for removal: naming convention]'
          },
          'demoId': 'change'
        },
        {
          'name': 'link-click',
          'type': '(event: Event, currentLink: {link: string, title: string}) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '锚点点击事件',
            'en-US': 'Anchor click event'
          },
          'demoId': 'set-container'
        }
      ],
      'slots': []
    }
  ],
  types: [
    {
      name: 'ILink',
      type: 'interface',
      code: `
interface ILink {
  key: string // 锚点的key值
  link: string // 导航的hash值
  title: string // 锚点标题
  children: ILink[] // 子锚点
}`
    }
  ]
}
