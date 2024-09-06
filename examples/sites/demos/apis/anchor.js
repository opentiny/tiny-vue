export default {
  mode: ['pc', 'mobile-first'],
  apis: [
    {
      name: 'anchor',
      type: 'component',
      props: [
        {
          name: 'container-id',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN':
              '用于单页面 hash 路由模式时指定滚动容器的 id 值，id 为空时则滚动容器默认为 HTML 文档的根节点 body 元素',
            'en-US':
              'When used in single page hash routing mode, specify the id value of the scrolling container. If the id is empty, the scrolling container defaults to the body element of the root node of the HTML document'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'set-container',
          mfDemo: 'set-container'
        },
        {
          name: 'is-affix',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '固定模式',
            'en-US': 'Fixed mode'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'is-affix',
          mfDemo: 'set-container'
        },
        {
          name: 'links',
          typeAnchorName: 'ILink',
          type: 'ILink[]',
          defaultValue: '',
          desc: {
            'zh-CN': '导航数据配置项，可通过 children 嵌套',
            'en-US': 'Navigation data configuration items can be nested through children'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: 'set-container'
        },
        {
          name: 'mark-class',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义滚动的目标元素类名',
            'en-US': 'Class name of the customized scrolling target element'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'set-container',
          mfDemo: 'set-container'
        },
        {
          name: 'type',
          type: "'line' | 'dot'",
          defaultValue: "'line'",
          desc: {
            'zh-CN': '锚点类型',
            'en-US': 'Anchor type'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: 'set-container'
        }
      ],
      events: [
        {
          name: 'change',
          type: '(hash: string) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '锚点链接改变事件',
            'en-US': 'Anchor link change event'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'change',
          mfDemo: 'set-container'
        },
        {
          name: 'link-click',
          type: '(event: Event, currentLink: {link: string, title: string}) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '锚点点击事件',
            'en-US': 'Anchor click event'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'set-container',
          mfDemo: 'set-container'
        },
        {
          name: 'on-change',
          type: '(hash: string) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '使用 change 代替；[deprecated v3.12.0 废弃，v3.17.0 移除；移除原因：命名规范]',
            'en-US':
              'use change instead [deprecated v3.12.0 abandoned, v3.17.0 removed; reason for removal: naming convention]'
          },
          mode: ['pc'],
          pcDemo: 'change'
        }
      ],
      methods: [],
      slots: []
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
