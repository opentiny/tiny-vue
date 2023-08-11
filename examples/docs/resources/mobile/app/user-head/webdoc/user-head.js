export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基础用法',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN': '<p>基础用法</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'color',
      name: {
        'zh-CN': '设置头像的颜色及背景色',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN':
          '<p>当头像type设置为icon或label时，可以通过<code>color</code>属性设置颜色，通过<code>background-color</code></p>设置背景色',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['color.vue']
    },
    {
      demoId: 'custom-background-color',
      name: {
        'zh-CN': '背景色',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN': '<p>通过<code>background-color</code></p>设置背景色</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['custom-background-color.vue']
    },
    {
      demoId: 'custom-user-head-content',
      name: {
        'zh-CN': '头像内容',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN': '<p>直接设置头像显示的内容</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['custom-user-head-content.vue']
    },
    {
      demoId: 'icon-user-head',
      name: {
        'zh-CN': '设置头像为icon类型',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN': '<p>设置头像为icon类型</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['icon-user-head.vue']
    },
    {
      demoId: 'image-user-head',
      name: {
        'zh-CN': '设置头像为图片类型',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN': '<p>设置头像为图片类型</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['image-user-head.vue']
    },
    {
      demoId: 'label-user-head',
      name: {
        'zh-CN': '设置头像为文字类型',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN': '<p>设置头像为文字类型</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['label-user-head.vue']
    },
    {
      demoId: 'message-count-limit',
      name: {
        'zh-CN': '消息提醒',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN': '<p>设置头像右上角消息提醒</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['message-count-limit.vue']
    },
    {
      demoId: 'message-count-total',
      name: {
        'zh-CN': '总消息提醒数',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN': '<p>总消息提醒数</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['message-count-total.vue']
    },
    {
      demoId: 'message-count-type',
      name: {
        'zh-CN': '消息提醒类型',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN': '<p>消息提醒类型</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['message-count-type.vue']
    },
    {
      demoId: 'min-user-head',
      name: {
        'zh-CN': '小尺寸',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN': '<p>小尺寸</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['min-user-head.vue']
    },
    {
      demoId: 'render-user-head-in-grid',
      name: {
        'zh-CN': '渲染用户头像在网格中',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN': '<p>渲染用户头像在网格中</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['render-user-head-in-grid.vue']
    },
    {
      demoId: 'round-user-head',
      name: {
        'zh-CN': '圆形用户头像',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN': '<p>圆形用户头像</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['round-user-head.vue']
    }
  ],
  apis: [
    {
      name: 'UserHead', // 组件名称展示使用
      type: 'component', // API 类型
      properties: [
        {
          name: 'type',
          type: 'string',
          defaultValue: 'label',
          desc: {
            'zh-CN': '<p>头像类型，该属性的可选值为 icon / image / label</p>',
            'en-US': 'display different button'
          },
          demoId: 'basic-usage'
        },
        {
          name: 'value',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设type=icon 时为图标类名，type=label时为字体串，type=image时为资源路径</p>',
            'en-US': 'display different button'
          },
          demoId: 'basic-usage'
        },
        {
          name: 'size',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置头像尺寸</p>',
            'en-US': 'display different button'
          },
          demoId: 'basic-usage'
        },
        {
          name: 'backgroundColor',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置背景色</p>',
            'en-US': 'display different button'
          },
          demoId: 'custom-background-color'
        },
        {
          name: 'color',
          type: 'string',
          defaultValue: '#ffffff',
          desc: {
            'zh-CN': '<p>头像为icon或文字类型时的颜色</p>',
            'en-US': 'display different button'
          },
          demoId: 'color'
        },
        {
          name: 'messageTotal',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>右上角消息计数</p>',
            'en-US': 'display different button'
          },
          demoId: 'message-count-limit'
        },
        {
          name: 'messageUpperLimit',
          type: 'number',
          defaultValue: '0',
          desc: {
            'zh-CN': '<p>右上角消息显示上限</p>',
            'en-US': 'display different button'
          },
          demoId: 'message-count-limit'
        },
        {
          name: 'messageType',
          type: 'string',
          defaultValue: 'details',
          desc: {
            'zh-CN': '<p>右上角消息提醒类型，basic显示小圆点不显示消息数量</p>',
            'en-US': 'display different button'
          },
          demoId: 'message-count-type'
        },
        {
          name: 'min',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>小尺寸模式</p>',
            'en-US': 'display different button'
          },
          demoId: 'min-user-head'
        },
        {
          name: 'round',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>圆形模式</p>',
            'en-US': 'display different button'
          },
          demoId: 'round-user-head'
        }
      ],
      slots: [
        {
          name: 'default',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>自定义图像内容</p>',
            'en-US': 'display different button'
          },
          demoId: 'round-user-head'
        }
      ]
    }
  ]
}
