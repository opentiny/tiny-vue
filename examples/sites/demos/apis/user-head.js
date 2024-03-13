export default {
  mode: ['pc', 'mobile', 'mobile-first'],
  apis: [
    {
      name: 'user-head',
      type: 'component',
      props: [
        {
          name: 'background-color',
          type: 'string',
          defaultValue: "'#d9d9d9'",
          desc: {
            'zh-CN': '背景色',
            'en-US': 'Background color'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'custom-background-color',
          mfDemo: ''
        },
        {
          name: 'backgroundColor',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置背景色</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'custom-background-color'
        },
        {
          name: 'color',
          type: 'string',
          defaultValue: "'#ffffff'",
          desc: {
            'zh-CN': '文字颜色',
            'en-US': 'Text color'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'color',
          mobileDemo: 'color',
          mfDemo: ''
        },
        {
          name: 'message-total',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN': '消息计数',
            'en-US': 'Number of messages'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'message-count-total',
          mfDemo: ''
        },
        {
          name: 'message-type',
          type: 'string',
          defaultValue: "'details'",
          desc: {
            'zh-CN': '消息类型 details|basic 可选',
            'en-US': 'Message type details|basic is optional. The value of this attribute can be details or basic.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'message-count-type',
          mfDemo: ''
        },
        {
          name: 'message-upper-limit',
          type: 'number',
          defaultValue: '0',
          desc: {
            'zh-CN': '消息显示上限',
            'en-US': 'Maximum number of displayed messages'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'message-count-limit',
          mfDemo: ''
        },
        {
          name: 'messageTotal',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>右上角消息计数</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'message-count-limit'
        },
        {
          name: 'messageType',
          type: 'string',
          defaultValue: 'details',
          desc: {
            'zh-CN': '<p>右上角消息提醒类型，basic显示小圆点不显示消息数量</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'message-count-type'
        },
        {
          name: 'messageUpperLimit',
          type: 'number',
          defaultValue: '0',
          desc: {
            'zh-CN': '<p>右上角消息显示上限</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'message-count-limit'
        },
        {
          name: 'min',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '小尺寸模式',
            'en-US': 'Small size mode'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'min-user-head',
          mobileDemo: 'min-user-head',
          mfDemo: ''
        },
        {
          name: 'modelValue',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '设置头像值。',
            'en-US': 'Set the profile picture.'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'round',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '圆形模式',
            'en-US': 'Circular mode'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'round-user-head',
          mobileDemo: 'round-user-head',
          mfDemo: ''
        },
        {
          name: 'size',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置头像尺寸</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile', 'mobile-first'],
          mobileDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'type',
          type: 'string',
          defaultValue: "'label'",
          desc: {
            'zh-CN': '头像类型，icon|image|label 可选',
            'en-US':
              'Avatar type. The options are icon, image, and label. ;The value of this attribute can be icon / image / label'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'image-user-head',
          mobileDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'v-model',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': 'type=icon 时为图标类名，type=label 时为字体串，type=image 时为资源路径',
            'en-US':
              'If type is set to icon, it indicates the icon class name. If type is set to label, it indicates the font string. If type is set to image, it indicates the resource path'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'icon-user-head',
          mfDemo: ''
        },
        {
          name: 'v-model/modelValue',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设type=icon 时为图标类名，type=label时为字体串，type=image时为资源路径</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'basic-usage'
        },
        {
          name: 'value',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': 'type=icon 时为图标类名，type=label时为字体串，type=image时为资源路径',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        }
      ],
      events: [],
      methods: [],
      slots: [
        {
          name: 'default',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义图像内容',
            'en-US': 'Customized image content'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'custom-user-head-content',
          mobileDemo: 'round-user-head',
          mfDemo: ''
        }
      ]
    }
  ]
}
