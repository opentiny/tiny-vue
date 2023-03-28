export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'double-line',
      name: {
        'zh-CN': '双实线列表',
        'en-US': 'left right arrow',
      },
      desc: {
        'zh-CN': '<p>双实线列表</p>',
        'en-US': '<p>double-line</p>',
      },
      codeFiles: ['double-line.vue'],
    },
    {
      demoId: 'double-list',
      name: {
        'zh-CN': '双行列表',
        'en-US': 'left right text',
      },
      desc: {
        'zh-CN': '<p>双行列表</p>',
        'en-US': '<p>button round</p>',
      },
      codeFiles: ['double-list.vue'],
    },
    {
      demoId: 'imformation-list',
      name: {
        'zh-CN': '资讯类列表',
        'en-US': 'imformation-list',
      },
      desc: {
        'zh-CN': '<p>资讯类列表</p>',
        'en-US': '<p>button click</p>',
      },
      codeFiles: ['imformation-list.vue'],
    },
    {
      demoId: 'single-line',
      name: {
        'zh-CN': '单行',
        'en-US': 'single-line',
      },
      desc: {
        'zh-CN': '<p>单行</p>',
        'en-US': '<p>button click</p>',
      },
      codeFiles: ['single-line.vue'],
    },
    {
      demoId: 'slots',
      name: {
        'zh-CN': '自定义列表内容',
        'en-US': 'slots',
      },
      desc: {
        'zh-CN': '<p>自定义列表内容</p>',
        'en-US': '<p>button click</p>',
      },
      codeFiles: ['slots.vue'],
    },
  ],
  apis: [
    {
      name: 'List', // 组件名称展示使用
      type: 'component', // API 类型
      properties: [
        {
          name: 'content',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置主文本</p>',
            'en-US': 'Is fixed top',
          },
          demoId: 'double-line',
        },
        {
          name: ' content-des',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置描述文本</p>',
            'en-US': 'Is show left arrow',
          },
          demoId: 'double-line',
        },
        {
          name: 'sub-text',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置次文本</p>',
            'en-US': 'Is show right arrow',
          },
          demoId: 'single-line',
        },
      ],
      slots: [
        {
          name: 'default',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>自定义主文本内容</p>',
            'en-US': 'Is show right arrow',
          },
          demoId: '',
        },
        {
          name: 'description',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>自定义描述内容</p>',
            'en-US': 'Is show right arrow',
          },
          demoId: 'slots',
        },
        {
          name: 'prefix',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>自定义头部内容</p>',
            'en-US': 'Is show right arrow',
          },
          demoId: 'slots',
        },
        {
          name: 'suffix',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>自定义尾部内容</p>',
            'en-US': 'Is show right arrow',
          },
          demoId: 'slots',
        },
      ],
    },
  ],
}
