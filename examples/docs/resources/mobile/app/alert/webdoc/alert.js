export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'custom-close',
      name: {
        'zh-CN': '自定义关闭',
        'en-US': 'left right arrow',
      },
      desc: {
        'zh-CN': '<p>自定义关闭</p>',
        'en-US': '<p>button type</p>',
      },
      codeFiles: ['custom-close.vue'],
    },
    {
      demoId: 'icon',
      name: {
        'zh-CN': '自定义提示图标',
        'en-US': 'left right text',
      },
      desc: {
        'zh-CN': '<p>自定义提示图标</p>',
        'en-US': '<p>button round</p>',
      },
      codeFiles: ['icon.vue'],
    },
    {
      demoId: 'size',
      name: {
        'zh-CN': '不同尺寸',
        'en-US': 'size',
      },
      desc: {
        'zh-CN': '<p>不同尺寸</p>',
        'en-US': '<p>button click</p>',
      },
      codeFiles: ['size.vue'],
    },
    {
      demoId: 'slot-default',
      name: {
        'zh-CN': '自定义提示内容',
        'en-US': 'slot-default',
      },
      desc: {
        'zh-CN': '<p>自定义提示内容</p>',
        'en-US': '<p>button click</p>',
      },
      codeFiles: ['slot-default.vue'],
    },

  ],
  apis: [
    {
      name: 'alert', // 组件名称展示使用
      type: 'component', // API 类型
      properties: [
        {
          name: 'closable',
          type: 'Boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '<p>设置警告是否可以关闭,该属性的默认值为 true</p>',
            'en-US': 'Is fixed top',
          },
          demoId: 'custom-close',
        },
        {
          name: 'close-text',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>关闭按钮自定义文本</p>',
            'en-US': 'Is show left arrow',
          },
          demoId: 'custom-close',
        },
        {
          name: 'description',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置警告的提示内容，默认为空</p>',
            'en-US': 'Is show right arrow',
          },
          demoId: 'custom-close',
        },
        {
          name: 'icon',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置警告的图标，默认会根据 type 值自动使用对应图标</p>',
            'en-US': 'Is show right text',
          },
          demoId: 'icon',
        },
        {
          name: 'size',
          type: 'String',
          defaultValue: 'normal',
          desc: {
            'zh-CN': '<p>设置警告的大小 normal/large， 缺省为 normal。</p>',
            'en-US': 'Is show left text',
          },
          demoId: 'size',
        },
        {
          name: 'type',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置警告的类型</p>',
            'en-US': 'set sub-title',
          },
          demoId: 'size',
        },
      ],
      events: [
        {
          name: 'close',
          type: 'Function()',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>关闭 alert 时触发的事件</p>',
            'en-US': 'Click',
          },
          demoId: 'custom-close',
        },
      ],
      slot: [
        {
          name: 'default',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>组件默认插槽</p>',
            'en-US': 'Click',
          },
          demoId: 'slot-default',
        },
      ],
    },
  ],
}
