export default {
  mode: ['pc'],
  apis: [
    {
      name: 'link',
      type: 'component',
      props: [
        {
          name: 'disabled',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否禁用状态',
            'en-US': 'Is disabled'
          },
          mode: ['pc'],
          pcDemo: 'dynamic-disable'
        },
        {
          name: 'href',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '原生 href 属性',
            'en-US': 'Native href attribute'
          },
          mode: ['pc'],
          pcDemo: 'config-href'
        },
        {
          name: 'icon',
          type: 'Component',
          defaultValue: '',
          desc: {
            'zh-CN': '图标组件',
            'en-US': 'Icon component'
          },
          mode: ['pc'],
          pcDemo: 'custom-icon'
        },
        {
          name: 'type',
          type: "'primary' | 'success' | 'warning' | 'danger' | 'info'",
          defaultValue: '',
          desc: {
            'zh-CN': '文本链接类型',
            'en-US': 'Text link type'
          },
          mode: ['pc'],
          pcDemo: 'link-style'
        },
        {
          name: 'underline',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否下划线',
            'en-US': 'Whether has Underline'
          },
          mode: ['pc'],
          pcDemo: 'focus-no-underline'
        },
        {
          name: 'value',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '显示内容',
            'en-US': 'Display value'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        }
      ],
      events: [
        {
          name: 'click',
          type: '(ev: MouseEvent) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '点击事件',
            'en-US': 'click event'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: '',
          mobileDemo: '',
          mfDemo: ''
        }
      ],
      methods: [],
      slots: [
        {
          name: 'default',
          defaultValue: '',
          desc: {
            'zh-CN': '默认插槽',
            'en-US': 'Default slot'
          },
          mode: ['pc'],
          pcDemo: 'custom-icon'
        },
        {
          name: 'icon',
          defaultValue: '',
          desc: {
            'zh-CN': '图标',
            'en-US': 'Icon'
          },
          mode: ['pc'],
          pcDemo: 'custom-icon'
        }
      ]
    }
  ]
}
