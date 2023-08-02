export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'mobileexception',
      name: {
        'zh-CN': '异常提示',
        'en-US': 'button type',
      },
      desc: {
        'zh-CN': '<p>异常提示</p>',
        'en-US': '<p>button type</p>',
      },
      codeFiles: ['mobileexception.vue'],
    },
    {
      demoId: 'buttonText',
      name: {
        'zh-CN': '按钮文本内容',
        'en-US': 'button type',
      },
      desc: {
        'zh-CN': '<p>自定义按钮文本</p>',
        'en-US': '<p>button type</p>',
      },
      codeFiles: ['buttonText.vue'],
    },
    {
      demoId: 'exceptionClass',
      name: {
        'zh-CN': '自定义类名',
        'en-US': 'button round',
      },
      desc: {
        'zh-CN': '<p>自定义类名</p>',
        'en-US': '<p>button round</p>',
      },
      codeFiles: ['exceptionClass.vue'],
    },
    {
      demoId: 'message',
      name: {
        'zh-CN': '文本内容',
        'en-US': 'events',
      },
      desc: {
        'zh-CN': '<p>设置文本内容<p>',
        'en-US': '<p>button click</p>',
      },
      codeFiles: ['message.vue'],
    },
    {
      demoId: 'subMessage',
      name: {
        'zh-CN': '副文本内容',
        'en-US': 'events',
      },
      desc: {
        'zh-CN': '<p>设置副文本内容<p>',
        'en-US': '<p>bbutton click</p>',
      },
      codeFiles: ['subMessage.vue'],
    },
    {
      demoId: 'type',
      name: {
        'zh-CN': '缺省页类型',
        'en-US': 'events',
      },
      desc: {
        'zh-CN': '<p>缺省页类型<p>',
        'en-US': '<p>bbutton click</p>',
      },
      codeFiles: ['type.vue'],
    },
  ],
  apis: [
    {
      name: 'Exception', // 组件名称展示使用
      type: 'component', // API 类型
      properties: [
        {
          name: 'imageUrl',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>自定义图片</p>',
            'en-US': 'display different button',
          },
          demoId: 'buttonText',
        },
        {
          name: 'exceptionClass',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>自定义缺省页类名</p>',
            'en-US': 'display different button',
          },
          demoId: 'exceptionClass',
        },
        {
          name: 'message',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>主图片文字，在图片下方</p>',
            'en-US': 'display different button',
          },
          demoId: 'message',
        },
        {
          name: 'subMessage',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>副文本内容,在描述文字的下方</p>',
            'en-US': 'display different button',
          },
          demoId: 'subMessage',
        },
        {
          name: 'type',
          type: 'String',
          defaultValue: 'nodata',
          desc: {
            'zh-CN': '<p>设置缺省页类型，默认为nodata,可选值有 weaknet || noperm || busy || build || weaknet || pcview</p>',
            'en-US': 'display different button',
          },
          demoId: 'type',
        },
        {
          name: 'buttonText',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>按钮文字/p>',
            'en-US': 'display different button',
          },
          demoId: 'buttonText',
        },
      ],
      events: [
        {
          name: 'click',
          type: 'Function()',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>点击按钮时触发，type 为 nodata 时启用</p>',
            'en-US': 'Click',
          },
          demoId: 'message',
        },
      ],
      slot: [
        {
          name: 'content',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置内容</p>',
            'en-US': 'Click',
          },
          demoId: 'mobileexception',
        },
        {
          name: 'footer',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置底部内容</p>',
            'en-US': 'Click',
          },
          demoId: 'mobileexception',
        },
      ],
    },
  ],
}
