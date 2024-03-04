export default {
  mode: ['pc', 'mobile', 'mobile-first'],
  apis: [
    {
      name: 'button',
      type: 'component',
      props: [
        {
          name: 'autofocus',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否默认聚焦',
            'en-US': 'Whether to focus by default'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'autofocus',
          mfDemo: ''
        },
        {
          name: 'banner',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '设置通栏按钮',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'circle',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否圆形按钮',
            'en-US': 'Round button'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'custom-class',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '设置 custom-class 属性定制按钮样式',
            'en-US': 'Set the custom-class attribute to customize the button style'
          },
          mode: ['mobile-first'],
          mfDemo: 'button-class'
        },
        {
          name: 'disabled',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否被禁用按钮',
            'en-US': 'Sets whether the button is disabled'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'dynamic-disabled',
          mobileDemo: 'disabled',
          mfDemo: ''
        },
        {
          name: 'ghost',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否幽灵按钮',
            'en-US': 'Is ghost button'
          },
          mode: ['pc'],
          pcDemo: 'ghost'
        },
        {
          name: 'href',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '通过设置 href 属性可跳转到指定页面',
            'en-US': 'Set the href attribute to jump to a specified page'
          },
          mode: ['mobile-first'],
          mfDemo: 'link'
        },
        {
          name: 'icon',
          type: 'Component',
          defaultValue: '',
          desc: {
            'zh-CN': '按钮左侧展示的图标，接收为Icon组件',
            'en-US': 'The icon displayed by the button is received as an Icon component'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'icon',
          mobileDemo: 'icon',
          mfDemo: ''
        },
        {
          name: 'loading',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否加载中状态',
            'en-US': 'Loading status'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'loading',
          mobileDemo: 'loading',
          mfDemo: ''
        },
        {
          name: 'native-type',
          type: "'button' | 'submit' | 'reset'",
          defaultValue: "'button'",
          desc: {
            'zh-CN': '对应按钮原生 type 属性',
            'en-US': 'Set the button native type attribute'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: '',
          mfDemo: ''
        },
        {
          name: 'plain',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否朴素按钮',
            'en-US': 'Simple button'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'reset-time',
          type: 'number',
          defaultValue: '1000',
          desc: {
            'zh-CN': '设置按钮禁用时间，防止重复提交，单位毫秒',
            'en-US': 'Set the button disable time, in milliseconds, to prevent repeated submission'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'reset-time',
          mobileDemo: 'reset-time',
          mfDemo: ''
        },
        {
          name: 'round',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否圆角按钮',
            'en-US': 'Whether to round the corner button'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'size',
          type: "'large' | 'medium' | 'small' | 'mini'",
          defaultValue: '',
          desc: {
            'zh-CN': '定义按钮尺寸',
            'en-US': 'Define the button size'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'size',
          mobileDemo: 'size',
          mfDemo: ''
        },
        {
          name: 'text',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '按钮显示的文本',
            'en-US': 'Set the text displayed by the button'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'text',
          mobileDemo: 'base',
          mfDemo: ''
        },
        {
          name: 'type',
          typeAnchorName: 'IButtonType',
          type: 'IButtonType',
          defaultValue: '',
          desc: {
            'zh-CN': '展示按钮不同的状态，设置为text则展示为文本按钮',
            'en-US': 'Display different states of buttons, set to text to display as text buttons'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'basic-usage',
          mobileDemo: 'base',
          mfDemo: ''
        }
      ],
      events: [
        {
          name: 'click',
          type: '(event: PointEvent) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '当按钮被点击时触发的回调函数',
            'en-US': 'Sets the callback function triggered when a button is clicked'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'click',
          mobileDemo: 'event',
          mfDemo: ''
        }
      ],
      methods: [],
      slots: [
        {
          name: 'default',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '默认插槽，自定义按钮展示内容',
            'en-US': 'Default slot'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'image',
          mobileDemo: '',
          mfDemo: ''
        }
      ]
    }
  ],
  types: [
    {
      name: 'IButtonType',
      type: 'interface',
      code: `type IButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text'`
    }
  ]
}
