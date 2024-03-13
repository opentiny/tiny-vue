export default {
  mode: ['mobile'],
  apis: [
    {
      name: 'navBar',
      type: 'component',
      props: [
        {
          name: 'fixed',
          type: 'Boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '<p>是否固定在顶部，该属性默认为true</p>',
            'en-US': 'Is fixed top'
          },
          mode: ['mobile'],
          mobileDemo: 'left-right-arrow'
        },
        {
          name: 'left-arrow',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>是否显示左侧箭头，该属性默认为false</p>',
            'en-US': 'Is show left arrow'
          },
          mode: ['mobile'],
          mobileDemo: 'left-right-arrow'
        },
        {
          name: 'left-text',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置左侧文本</p>',
            'en-US': 'Is show left text'
          },
          mode: ['mobile'],
          mobileDemo: 'left-right-text'
        },
        {
          name: 'right-arrow',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>是否显示右侧箭头</p>',
            'en-US': 'Is show right arrow'
          },
          mode: ['mobile'],
          mobileDemo: 'left-right-arrow'
        },
        {
          name: 'right-text',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置右侧文本</p>',
            'en-US': 'Is show right text'
          },
          mode: ['mobile'],
          mobileDemo: 'left-right-text'
        },
        {
          name: 'sub-title',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置副标题</p>',
            'en-US': 'set sub-title'
          },
          mode: ['mobile'],
          mobileDemo: 'left-right-text'
        },
        {
          name: 'title',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置主标题</p>',
            'en-US': 'set main-title'
          },
          mode: ['mobile'],
          mobileDemo: 'z-index'
        },
        {
          name: 'z-index',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置z-index</p>',
            'en-US': 'set z-index'
          },
          mode: ['mobile'],
          mobileDemo: 'z-index'
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
          mode: ['mobile'],
          mobileDemo: 'left-right-arrow'
        },
        {
          name: 'left',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>自定义左侧内容</p>',
            'en-US': 'Click'
          },
          mode: ['mobile'],
          mobileDemo: 'left-right-text'
        },
        {
          name: 'right',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>自定义右侧内容</p>',
            'en-US': 'Click'
          },
          mode: ['mobile'],
          mobileDemo: 'left-right-text'
        }
      ]
    }
  ]
}
