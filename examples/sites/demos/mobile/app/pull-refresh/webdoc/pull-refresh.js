export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'base',
      name: {
        'zh-CN': '基础用法',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN': '<p>基础用法</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['base.vue']
    },
    {
      demoId: 'animation-duration',
      name: {
        'zh-CN': '弹回动画所用的时间',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN': '<p>下拉可刷新的弹回动画时间</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['animation-duration.vue']
    },
    {
      demoId: 'disabled-pull-down',
      name: {
        'zh-CN': '禁用下拉刷新',
        'en-US': 'button round'
      },
      desc: {
        'zh-CN': '<p>禁用下拉刷新</p>',
        'en-US': '<p>disabled pull down</p>'
      },
      codeFiles: ['disabled-pull-down.vue']
    },
    {
      demoId: 'disabled-pull-up',
      name: {
        'zh-CN': '禁用上拉刷新',
        'en-US': 'disabled pull up'
      },
      desc: {
        'zh-CN': '<p>禁用上拉刷新</p>',
        'en-US': '<p>disabled pull up</p>'
      },
      codeFiles: ['disabled-pull-up.vue']
    },
    {
      demoId: 'has-more',
      name: {
        'zh-CN': '没有更多数据',
        'en-US': 'no more'
      },
      desc: {
        'zh-CN': '<p>没有更多数据</p>',
        'en-US': '<p>no more</p>'
      },
      codeFiles: ['has-more.vue']
    },
    {
      demoId: 'loosing-text',
      name: {
        'zh-CN': '可以触发下拉刷新的提示文字',
        'en-US': 'loosing-text'
      },
      desc: {
        'zh-CN': '<p>可以触发下拉刷新的提示文字<p>',
        'en-US': '<p>loosing text</p>'
      },
      codeFiles: ['loosing-text.vue']
    },
    {
      demoId: 'pull-refresh-slot',
      name: {
        'zh-CN': '插槽',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>插槽<p>',
        'en-US': '<p>slot</p>'
      },
      codeFiles: ['pull-refresh-slot.vue']
    },
    {
      demoId: 'pull-up-distance',
      name: {
        'zh-CN': '上拉触发加载的距离',
        'en-US': 'pull up distance'
      },
      desc: {
        'zh-CN': '<p>上拉触发加载的距离<p>',
        'en-US': '<p>pull up distanc</p>'
      },
      codeFiles: ['pull-up-distance.vue']
    },
    {
      demoId: 'pulling-text',
      name: {
        'zh-CN': '加载状态文字',
        'en-US': 'pulling text'
      },
      desc: {
        'zh-CN': '<p>加载状态文字<p>',
        'en-US': '<p>pulling text</p>'
      },
      codeFiles: ['pulling-text.vue']
    },
    {
      demoId: '刷新事件',
      name: {
        'zh-CN': '刷新事件',
        'en-US': 'refresh event'
      },
      desc: {
        'zh-CN': '<p>刷新事件<p>',
        'en-US': '<p>refresh event</p>'
      },
      codeFiles: ['event.vue']
    }
  ],
  apis: [
    {
      name: 'pull-refresh ', // 组件名称展示使用
      type: 'component', // API 类型
      properties: [
        {
          name: 'v-model',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>是否刷新状态，可以手动设置false来关闭刷新</p>',
            'en-US': 'is refreshing'
          },
          demoId: 'base'
        },
        {
          name: 'loosing-text',
          type: 'string',
          defaultValue: '释放即可刷新',
          desc: {
            'zh-CN': '<p>下拉高度大于等于head-height时的提示文字，默认为：释放即可刷新</p>',
            'en-US': 'display different button'
          },
          demoId: 'loosing-text'
        },
        {
          name: 'has-more',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '<p>是否有更多数据</p>',
            'en-US': 'has more'
          },
          demoId: 'has-more'
        },
        {
          name: 'disabled-pull-down',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>是否禁用下拉刷新</p>',
            'en-US': 'disablde pull down'
          },
          demoId: 'disabled-pull-down'
        },
        {
          name: 'disabled-pull-up',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>是否禁用上拉</p>',
            'en-US': 'disablded pull up'
          },
          demoId: 'disabled-pull-up'
        },
        {
          name: 'pull-up-distance',
          type: 'number',
          defaultValue: '18',
          desc: {
            'zh-CN': '<p>触发上拉刷新的距离</p>',
            'en-US': 'pull up distance'
          },
          demoId: 'pull-up-distance'
        },
        {
          name: 'pull-up-loading-text',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>上拉加载文字</p>',
            'en-US': 'pull up loading text'
          },
          demoId: 'pulling-text'
        },
        {
          name: 'pull-down-loading-text',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>下拉加载文字</p>',
            'en-US': 'pull down loading text'
          },
          demoId: 'pulling-text'
        }
      ],
      events: [
        {
          name: 'pull-down',
          type: '(event: PullEvent) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>下拉时触发的事件</p>',
            'en-US': 'Click'
          },
          demoId: 'event'
        },
        {
          name: 'pull-up',
          type: '(event: PullEvent) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>上拉时触发的事件</p>',
            'en-US': 'Click'
          },
          demoId: 'event'
        }
      ],
      slot: [
        {
          name: 'header',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>下拉刷新插槽</p>',
            'en-US': 'pull down slot'
          },
          demoId: ''
        },
        {
          name: 'footer',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>上拉加载更多插槽</p>',
            'en-US': 'pull up slot'
          },
          demoId: 'pull-refresh-slot'
        }
      ]
    }
  ]
}
