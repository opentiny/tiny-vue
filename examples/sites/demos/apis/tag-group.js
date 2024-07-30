export default {
  mode: ['pc', 'mobile-first'],
  apis: [
    {
      name: 'tag-group',
      type: 'component',
      props: [
        {
          name: 'data',
          typeAnchorName: 'ITagGroupDataItem',
          type: 'ITagGroupDataItem[]',
          defaultValue: '',
          desc: {
            'zh-CN': ' 数据源',
            'en-US': 'Data source'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'effect',
          type: "'dark' | 'light' | 'plain'",
          defaultValue: "'light'",
          desc: {
            'zh-CN': '主题',
            'en-US': 'Effect'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'tag-group-effect',
          mfDemo: 'tag-group-effect'
        },
        {
          name: 'size',
          type: "'medium' | 'small' | 'mini'",
          defaultValue: "'medium'",
          desc: {
            'zh-CN': '尺寸',
            'en-US': 'Size '
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'tag-group-size',
          mfDemo: 'tag-group-size'
        }
      ],
      events: [
        {
          name: 'item-click',
          typeAnchorName: 'ITagGroupItemClick',
          type: 'ITagGroupItemClick',
          defaultValue: '',
          desc: {
            'zh-CN': '单个标签的点击事件',
            'en-US': 'Click event of a single tag. '
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'tag-group-event',
          mfDemo: 'tag-group-event'
        }
      ],
      methods: [],
      slots: []
    }
  ],
  types: [
    {
      name: 'ITagGroupDataItem',
      type: 'type',
      code: `type ITagGroupDataItem = { name: string, type?: 'success' | 'info' | 'warning' | 'danger' }`
    },
    {
      name: 'ITagGroupItemClick',
      depTypes: ['ITagGroupDataItem'],
      type: 'type',
      code: `type ITagGroupItemClick = (item: ITagGroupDataItem, index: number, event: Event) => void`
    }
  ]
}
