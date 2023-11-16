export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': '通过<code>links</code>设置导航数据，<code>type</code>设置类型。',
        'en-US': 'Set navigation data through<code>links</code>, and<code>type</code>to set the type.'
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'is-affix',
      'name': { 'zh-CN': '固定模式', 'en-US': 'Fixed mode' },
      'desc': {
        'zh-CN': '通过<code>is-affix</code>设置固定定位，不随页面滚动。',
        'en-US': 'Set fixed positioning through<code>is-affix</code>, without scrolling with the page.'
      },
      'codeFiles': ['is-affix.vue']
    },
    {
      'demoId': 'set-container',
      'name': { 'zh-CN': '滚动容器', 'en-US': 'Rolling Container' },
      'desc': {
        'zh-CN': `通过<code>container-id</code>设置滚动容器，<code>link-click</code>监听锚点点击事件，阻止浏览器默认行为，实现单页面<code>hash</code>路由模式的页内跳转，在指定容器内滚动。<br/>
           <code>mask-class</code>设置自定义类名，高亮显示导航的目标元素。`,
        'en-US': `By setting the scrolling container through<code>container-id</code>,<code>link-click</code>listens for anchor click events, prevents browser default behavior, and implements single page<code>hash</code>routing mode for page hopping, scrolling within the specified container<br/>
            <code>mask-class</code>Set a custom class name to highlight the target element for navigation.`
      },
      'codeFiles': ['set-container.vue']
    },
    {
      'demoId': 'change',
      'name': { 'zh-CN': 'change事件', 'en-US': 'change event' },
      'desc': {
        'zh-CN': '通过<code>change</code>监听锚点改变的事件。',
        'en-US': '<code>change</code> event. Callback is triggered when the anchor link changes.'
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
            'zh-CN': '用于单页面 hash 路由模式时指定滚动容器的id值，不指定则默认为 HTML 文档的根节点 body 元素',
            'en-US':
              'When using single page hash routing mode, specify the id value of the scrolling container. If not specified, it defaults to the root node body element of the HTML document'
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
          'name': 'mask-class',
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
          'type': 'string',
          'defaultValue': '"line"',
          'desc': {
            'zh-CN': '锚点类型，可选"line", "dot"两种',
            'en-US': 'Anchor type, providing two types: line and dot'
          },
          'demoId': 'basic-usage'
        }
      ],
      'events': [
        {
          'name': 'link-click',
          'type': '(arg1: Event, arg2: {link: string, title: string}) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '锚点点击事件；// 参数arg2: {link: 当前锚点链接, title: 当前锚点标题 }',
            'en-US': 'Anchor click event; // Parameter arg2: {link: Current anchor link, title: Current anchor title}'
          },
          'demoId': 'set-container'
        },
        {
          'name': 'change',
          'type': '(arg1: string) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '锚点链接改变事件；// 参数arg1: 当前锚点的 hash 值',
            'en-US': 'Anchor link change event// Parameter arg1: hash value of the current anchor point'
          },
          'demoId': 'change'
        },
        {
          'name': 'on-change',
          'type': '(arg: string) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '[deprecated v3.12.0废弃，v3.17.0移除；移除原因：命名规范，使用change代替]',
            'en-US':
              '[deprecated v3.12.0 abandoned, v3.17.0 removed; reason for removal: naming convention, use change instead]'
          },
          'demoId': 'change'
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
