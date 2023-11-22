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
      demoId: 'disabled',
      name: {
        'zh-CN': '禁用下拉刷新',
        'en-US': 'button round'
      },
      desc: {
        'zh-CN': '<p>禁用下拉刷新</p>',
        'en-US': '<p>button round</p>'
      },
      codeFiles: ['disabled.vue']
    },
    {
      demoId: 'enhance',
      name: {
        'zh-CN': '支持上拉、下拉刷新',
        'en-US': 'button round'
      },
      desc: {
        'zh-CN': '<p>支持上拉、下拉刷新</p>',
        'en-US': '<p>button round</p>'
      },
      codeFiles: ['enhance.vue']
    },
    {
      demoId: 'head-height',
      name: {
        'zh-CN': '提示信息的高度',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>下拉后，提示信息的高度<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['head-height.vue']
    },
    {
      demoId: 'loosing-text',
      name: {
        'zh-CN': '超过<code>head</code>的高度后的提示',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>下拉超过<code>head</code>的高度后的提示<p>',
        'en-US': '<p>bbutton click</p>'
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
        'zh-CN': '<p>下拉刷新<code>loading</code>的插槽<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['pull-refresh-slot.vue']
    },
    {
      demoId: 'pulling-text',
      name: {
        'zh-CN': '下拉提示文字',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>开始下拉并还没到<code>head</code>的高度时的提示文字<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['pulling-text.vue']
    }
  ],
  apis: [
    {
      name: 'pull-refresh ', // 组件名称展示使用
      type: 'component', // API 类型
      properties: [
        {
          name: 'v-model',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>是否刷新状态，可以手动设置false来关闭刷新</p>',
            'en-US': 'is refreshing'
          },
          demoId: 'base'
        },
        {
          name: 'loosing-text',
          type: 'String',
          defaultValue: '释放即可刷新',
          desc: {
            'zh-CN': '<p>下拉高度大于等于head-height时的提示文字，默认为：释放即可刷新</p>',
            'en-US': 'display different button'
          },
          demoId: 'loosing-text'
        },
        {
          name: 'has-more',
          type: 'Boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '<p>是否有更多数据</p>',
            'en-US': 'has more'
          },
          demoId: 'base'
        },
        {
          name: 'disabled-pull-down',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>是否禁用下拉刷新</p>',
            'en-US': 'disablde pull down'
          },
          demoId: 'base'
        },
        {
          name: 'disabled-pull-up',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>是否禁用上拉</p>',
            'en-US': 'disablded pull up'
          },
          demoId: 'base'
        },
        {
          name: 'pull-up-distance',
          type: 'Number',
          defaultValue: '50',
          desc: {
            'zh-CN': '<p>触发上拉刷新的距离</p>',
            'en-US': 'pull up distance'
          },
          demoId: 'base'
        },
        {
          name: 'pull-up-loading-text',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>上拉加载文字</p>',
            'en-US': 'pull up loading text'
          },
          demoId: 'base'
        },
        {
          name: 'pull-down-loading-text',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>下拉加载文字</p>',
            'en-US': 'pull down loading text'
          },
          demoId: 'base'
        }
      ],
      events: [
        {
          name: 'pull-down',
          type: 'Function()',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>下拉时触发的事件</p>',
            'en-US': 'Click'
          },
          demoId: 'event'
        },
        {
          name: 'pull-up',
          type: 'Function()',
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
          name: 'default',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>组件默认插槽</p>',
            'en-US': 'Click'
          },
          demoId: ''
        },
        {
          name: 'loading',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>下拉加载中的插槽</p>',
            'en-US': 'Click'
          },
          demoId: 'pull-refresh-slot'
        }
      ]
    }
  ]
}
