export default {
  mode: ['pc'],
  apis: [
    {
      name: 'bulletin-board',
      type: 'component',
      props: [
        {
          name: 'active-name',
          type: 'string',
          defaultValue: '1',
          desc: {
            'zh-CN': "默认显示第1栏，可选'1' '2' '3'等",
            'en-US': 'By default, column 1 is displayed. You can select 1, 2, or 3.'
          },
          mode: ['pc'],
          pcDemo: 'active-name'
        },
        {
          name: 'data',
          typeAnchorName: 'BulletinBoardData',
          type: 'BulletinBoardData[]',
          defaultValue: '',
          desc: {
            'zh-CN': 'tab-item 数据;',
            'en-US': 'tab-item data;'
          },
          mode: ['pc'],
          pcDemo: 'base'
        },
        {
          name: 'icon',
          type: 'object , string',
          defaultValue: '',
          desc: {
            'zh-CN': 'tab-item中第一条信息的字体图标;tab-item中第一条信息的字体图标',
            'en-US':
              'Font icon of the first information in tab-item; Font icon of the first piece of information in tab-item'
          },
          mode: ['pc'],
          pcDemo: 'icon'
        },
        {
          name: 'more-link',
          type: 'object',
          defaultValue: '',
          desc: {
            'zh-CN':
              "更多按钮跳转地址，show-more 为true 的时候生效;moreLink: { url: 'localhost:3000/', // 跳转地址，url 和 route 属性二选一，url优先级高  route: 'Alert', // 跳转路由，url 和 route 属性二选一，url优先级高  target: '_blank', // 跳转方式  text: '更多'  // 链接文本 }",
            'en-US':
              "More button redirection URL. This parameter is valid only when show-more is set to true. moreLink: {url:'localhost:3000/', //Redirection address. Either the URL or route attribute must be selected. The URL has a higher priority. route:'Alert', //Redirection route. Either the URL or route attribute must be selected. URL has a high priority target: '_blank', //Redirection mode text: 'More' //Link text}"
          },
          mode: ['pc'],
          pcDemo: 'more-link'
        },
        {
          name: 'show-more',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否显示更多按钮，默认显示,需要与 more-link 同时使用',
            'en-US':
              'Indicates whether to display the More button. The More button is displayed by default and must be used together with more-link.'
          },
          mode: ['pc'],
          pcDemo: 'more-link'
        },
        {
          name: 'tab-title',
          type: 'Array',
          defaultValue: '',
          desc: {
            'zh-CN': 'tab栏数据',
            'en-US': 'Data in the tab column'
          },
          mode: ['pc'],
          pcDemo: 'tab-title'
        },
        {
          name: 'title',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '公告牌的标题',
            'en-US': 'Billboard title'
          },
          mode: ['pc'],
          pcDemo: 'title'
        }
      ],
      events: [
        {
          name: 'contentClick',
          type: '(event: BulletinBoardData) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '当公告牌内容被点击时触发的回调函数',
            'en-US': 'The callback function triggered when the content of the bulletin board is clicked'
          },
          mode: ['pc'],
          pcDemo: 'events',
          meta: {
            stable: '3.20.0'
          }
        }
      ],
      methods: [],
      slots: []
    }
  ],
  types: [
    {
      name: 'BulletinBoardData',
      type: 'interface',
      code: `
            interface BulletinBoardData {
              text: string // 显示文本
              date: string // 日期
              url: string // 需要跳转的地址
              target: string // <a> 标签的一个属性，该属性指定在何处显示链接的资源
              }
            `
    }
  ]
}
