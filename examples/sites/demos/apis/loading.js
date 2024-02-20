export default {
  mode: ['pc', 'mobile', 'mobile-first'],
  apis: [
    {
      name: 'loading',
      type: 'component',
      props: [
        {
          name: 'background',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '遮罩背景色',
            'en-US': 'Mask background color'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'background',
          mfDemo: ''
        },
        {
          name: 'body',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '遮罩层是否在body上，同 v-loading 指令中的 body 修饰符',
            'en-US': 'The same as the body modifier in the v-loading instruction'
          },
          mode: ['pc', 'mobile-first'],
          mfDemo: ''
        },
        {
          name: 'customClass',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': 'Loading 的自定义类名',
            'en-US': 'User-defined loading class name'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'custom-class',
          mfDemo: ''
        },
        {
          name: 'fullscreen',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '属性为 true 显示全屏，同 v-loading 指令中的 fullscreen 修饰符',
            'en-US': 'Set true to display the full screen. Same as the fullscreen modifier in the v-loading instruction'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'fullscreen',
          mfDemo: ''
        },
        {
          name: 'lock',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '全屏时是否锁定滚动，同 v-loading 指令中的 lock 修饰符',
            'en-US': 'The same as the lock modifier in the v-loading instruction'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'fullscreen',
          mfDemo: ''
        },
        {
          name: 'size',
          type: "'medium' | 'small' | 'large'",
          defaultValue: "'small'",
          desc: {
            'zh-CN': '加载图标尺寸',
            'en-US': 'Load icon size'
          },
          mode: ['pc'],
          pcDemo: 'size'
        },
        {
          name: 'spinner',
          type: 'Component',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义加载图标',
            'en-US': 'Customized loading icon class name'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'spinner',
          mfDemo: ''
        },
        {
          name: 'target',
          type: 'HTMLElement | string',
          defaultValue: 'document.body',
          desc: {
            'zh-CN':
              'Loading 需要覆盖的 DOM 节点。可传入一个 DOM 对象或字符串；若传入字符串，则会将其作为参数传入 document.querySelector 以获取到对应 DOM 节点',
            'en-US':
              'Loading the DOM node to be overwritten. A DOM object or character string can be transferred. If a character string is transferred, it is transferred to document.querySelector as a parameter to obtain the corresponding DOM node.'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: 'basic-usage',
          mobileDemo: 'type',
          mfDemo: ''
        },
        {
          name: 'text',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '显示在加载图标下方的加载文案',
            'en-US': 'Load copy displayed below the load icon'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'loading-tip-text',
          mfDemo: ''
        },
        {
          name: 'tiny_mode',
          type: 'string',
          defaultValue: 'pc',
          desc: {
            'zh-CN': '<p>通配置项pc,mobile表示不同设备</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'type'
        },
        {
          name: 'type',
          type: 'string',
          defaultValue: 'primary',
          desc: {
            'zh-CN': '<p>通过type设置不同的加载样式</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'type'
        }
      ],
      events: [],
      methods: [
        {
          name: 'closeLoading',
          type: 'Function',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>关闭Loading</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'type'
        }
      ],
      slots: []
    }
  ]
}
