export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'content',
      name: {
        'zh-CN': '自定义提示内容',
        'en-US': 'button type',
      },
      desc: {
        'zh-CN': '<p>自定义提示内容</p>',
        'en-US': '<p>button type</p>',
      },
      codeFiles: ['content.vue'],
    },
    {
      demoId: 'hidden',
      name: {
        'zh-CN': '隐藏徽标',
        'en-US': 'button round',
      },
      desc: {
        'zh-CN': '<p>隐藏徽标</p>',
        'en-US': '<p>button round</p>',
      },
      codeFiles: ['hidden.vue'],
    },
    {
      demoId: 'href-target',
      name: {
        'zh-CN': '跳转链接',
        'en-US': 'events',
      },
      desc: {
        'zh-CN': '<p>跳转链接<p>',
        'en-US': '<p>bbutton click</p>',
      },
      codeFiles: ['href-target.vue'],
    },
    {
      demoId: 'is-dot',
      name: {
        'zh-CN': '小圆点标记',
        'en-US': 'events',
      },
      desc: {
        'zh-CN': '<p>小圆点标记<p>',
        'en-US': '<p>bbutton click</p>',
      },
      codeFiles: ['is-dot.vue'],
    },
    {
      demoId: 'is-mini',
      name: {
        'zh-CN': '小尺寸',
        'en-US': 'events',
      },
      desc: {
        'zh-CN': '<p>小尺寸<p>',
        'en-US': '<p>bbutton click</p>',
      },
      codeFiles: ['is-mini.vue'],
    },
    {
      demoId: 'type',
      name: {
        'zh-CN': '不同主题',
        'en-US': 'events',
      },
      desc: {
        'zh-CN': '<p>不同主题<p>',
        'en-US': '<p>bbutton click</p>',
      },
      codeFiles: ['type.vue'],
    },
  ],
  apis: [
    {
      name: 'Badge', // 组件名称展示使用
      type: 'component', // API 类型
      properties: [
        {
          name: 'hidden',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>禁隐藏 badge,该属性的默认值为 false</p>',
            'en-US': 'display different button',
          },
          demoId: 'hidden',
        },
        {
          name: 'href',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>指定跳转的链接地址。</p>',
            'en-US': 'display different button',
          },
          demoId: 'href-target',
        },
        {
          name: 'is-dot',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>设置是否显示为小圆点， 该属性默认值为false。</p>',
            'en-US': 'display different button',
          },
          demoId: 'is-dot',
        },
        {
          name: 'is-mini',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>设置小尺寸，该属性默认为false</p>',
            'en-US': 'display different button',
          },
          demoId: 'is-mini',
        },
        {
          name: 'target',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>指定点击徽章 Dom 节点时链接到目标页面的跳转方式，仅在 href 属性存在时使用。</p>',
            'en-US': 'display different button',
          },
          demoId: 'href-target',
        },
        {
          name: 'max',
          type: 'Number',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置最大值</p>',
            'en-US': 'display different button',
          },
          demoId: 'is-mini',
        },
        {
          name: 'value',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p显示值</p>',
            'en-US': '',
          },
          demoId: 'content',
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
          demoId: 'content',
        },
        {
          name: 'content',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>消息提示内容</p>',
            'en-US': 'Click',
          },
          demoId: 'content',
        },
      ],
    },
  ],
}
