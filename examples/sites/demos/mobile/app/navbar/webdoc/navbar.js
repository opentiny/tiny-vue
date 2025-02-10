export default {
  column: '2',
  owner: '',
  apis: [
    {
      name: 'navBar',
      type: 'component',
      props: [
        {
          name: 'fixed',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '<p>是否固定在顶部，该属性默认为true</p>',
            'en-US': 'Is fixed top'
          },
          demoId: 'left-right-arrow'
        },
        {
          name: 'left-arrow',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>是否显示左侧箭头，该属性默认为false</p>',
            'en-US': 'Is show left arrow'
          },
          demoId: 'left-right-arrow'
        },
        {
          name: 'left-text',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置左侧文本</p>',
            'en-US': 'Is show left text'
          },
          demoId: 'left-right-text'
        },
        {
          name: 'right-arrow',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>是否显示右侧箭头</p>',
            'en-US': 'Is show right arrow'
          },
          demoId: 'left-right-arrow'
        },
        {
          name: 'right-text',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置右侧文本</p>',
            'en-US': 'Is show right text'
          },
          demoId: 'left-right-text'
        },
        {
          name: 'sub-title',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置副标题</p>',
            'en-US': 'set sub-title'
          },
          demoId: 'left-right-text'
        },
        {
          name: 'title',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置主标题</p>',
            'en-US': 'set main-title'
          },
          demoId: 'z-index'
        },
        {
          name: 'z-index',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置z-index</p>',
            'en-US': 'set z-index'
          },
          demoId: 'z-index'
        }
      ],
      events: [],
      methods: [],
      slots: [
        {
          name: 'default',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>自定义标题</p>',
            'en-US': 'Click'
          },
          demoId: 'left-right-arrow'
        },
        {
          name: 'left',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>自定义左侧内容</p>',
            'en-US': 'Click'
          },
          demoId: 'left-right-text'
        },
        {
          name: 'right',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>自定义右侧内容</p>',
            'en-US': 'Click'
          },
          demoId: 'left-right-text'
        }
      ]
    }
  ],
  demos: [
    {
      demoId: 'left-right-arrow',
      name: {
        'zh-CN': '显示左右箭头',
        'en-US': 'left right arrow'
      },
      desc: {
        'zh-CN': '<p>显示左右箭头</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['left-right-arrow.vue']
    },
    {
      demoId: 'left-right-text',
      name: {
        'zh-CN': '指定左右文本',
        'en-US': 'left right text'
      },
      desc: {
        'zh-CN': '<p>指定左右文本</p>',
        'en-US': '<p>button round</p>'
      },
      codeFiles: ['left-right-text.vue']
    },
    {
      demoId: 'slots',
      name: {
        'zh-CN': '自定义左右侧内容',
        'en-US': 'slots'
      },
      desc: {
        'zh-CN': '<p>自定义左右侧内容</p>',
        'en-US': '<p>button click</p>'
      },
      codeFiles: ['slots.vue']
    },
    {
      demoId: 'z-index',
      name: {
        'zh-CN': '设置层级',
        'en-US': 'z-index'
      },
      desc: {
        'zh-CN': '<p>设置层</p>',
        'en-US': '<p>button click</p>'
      },
      codeFiles: ['z-index.vue']
    }
  ]
}
