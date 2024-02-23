export default {
  mode: ['mobile'],
  apis: [
    {
      name: 'List',
      type: 'component',
      props: [
        {
          name: 'content',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置主文本</p>',
            'en-US': 'Is fixed top'
          },
          mode: ['mobile'],
          mobileDemo: 'double-line'
        },
        {
          mode: []
        },
        {
          name: 'sub-text',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置次文本</p>',
            'en-US': 'Is show right arrow'
          },
          mode: ['mobile'],
          mobileDemo: 'single-line'
        }
      ],
      events: [],
      methods: [],
      slots: [
        {
          name: 'default',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>自定义主文本内容</p>',
            'en-US': 'Is show right arrow'
          },
          mode: ['mobile'],
          mobileDemo: ''
        },
        {
          name: 'description',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>自定义描述内容</p>',
            'en-US': 'Is show right arrow'
          },
          mode: ['mobile'],
          mobileDemo: 'slots'
        },
        {
          name: 'prefix',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>自定义头部内容</p>',
            'en-US': 'Is show right arrow'
          },
          mode: ['mobile'],
          mobileDemo: 'slots'
        },
        {
          name: 'suffix',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>自定义尾部内容</p>',
            'en-US': 'Is show right arrow'
          },
          mode: ['mobile'],
          mobileDemo: 'slots'
        }
      ]
    }
  ]
}
