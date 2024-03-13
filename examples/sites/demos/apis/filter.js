export default {
  mode: ['mobile-first'],
  apis: [
    {
      name: 'Filter',
      type: 'component',
      props: [
        {
          name: 'column-num',
          type: 'Number',
          defaultValue: '3',
          desc: {
            'zh-CN': '面板每行的列数，默认值为 3。',
            'en-US': 'Number of columns in each row of the panel. The default value is 3.'
          },
          mode: ['mobile-first'],
          mfDemo: 'column-num'
        },
        {
          name: 'custom-class',
          type: 'Array',
          defaultValue: '[]',
          desc: {
            'zh-CN': '自定义组件 class 样式。',
            'en-US': 'Customize the class style of the component.'
          },
          mode: ['mobile-first']
        },
        {
          name: 'data',
          type: 'Array',
          defaultValue: '[]',
          desc: {
            'zh-CN': '过滤列表数据。',
            'en-US': 'Customized text of the close button'
          },
          mode: ['mobile-first'],
          mfDemo: 'basic-usage'
        },
        {
          name: 'filter-group',
          type: 'Array',
          defaultValue: '',
          desc: {
            'zh-CN': '过滤组列表',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'filter-value',
          type: 'Array',
          defaultValue: '[]',
          desc: {
            'zh-CN': '过滤组绑定的值。',
            'en-US': 'Indicates the value bound to the filtering group.'
          },
          mode: ['mobile-first'],
          mfDemo: 'filter-group'
        },
        {
          name: 'manual',
          type: 'Array',
          defaultValue: '[]',
          desc: {
            'zh-CN': '过滤选项自定义对接外部组件，一般和 panel 面板事件一起使用。',
            'en-US':
              'Filtering options are customized to connect to external components. Generally, the filtering options are used together with panel events.'
          },
          mode: ['mobile-first'],
          mfDemo: 'manual'
        },
        {
          name: 'panel-class',
          type: 'Array',
          defaultValue: '[]',
          desc: {
            'zh-CN': '自定义组件面板 class 样式。',
            'en-US': 'Customize the Palette class style.'
          },
          mode: ['mobile-first']
        },
        {
          name: 'v-model',
          type: 'Array',
          defaultValue: '[]',
          desc: {
            'zh-CN': '绑定值',
            'en-US': 'Bind Value'
          },
          mode: ['mobile-first'],
          mfDemo: 'basic-usage'
        }
      ],
      events: [
        {
          name: 'cancel',
          type: 'Function()',
          defaultValue: '',
          desc: {
            'zh-CN': '关闭面板时触发的事件。',
            'en-US': 'Event triggered when a panel is closed.'
          },
          mode: ['mobile-first']
        },
        {
          name: 'panel',
          type: 'Function()',
          defaultValue: '',
          desc: {
            'zh-CN': '打开面板时触发的事件。',
            'en-US': 'Event triggered when a panel is opened.'
          },
          mode: ['mobile-first'],
          mfDemo: 'manual'
        }
      ],
      methods: [],
      slots: [
        {
          name: 'default',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '过滤项插槽。',
            'en-US': 'Filter item slot.'
          },
          mode: ['mobile-first'],
          mfDemo: 'slot'
        },
        {
          name: 'footer',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '面板底部按钮组插槽，提供了 cancel、reset、confirm 方法。',
            'en-US':
              'Button group slot at the bottom of the panel, which provides the cancel, reset, and confirm methods.'
          },
          mode: ['mobile-first'],
          mfDemo: 'slot'
        },
        {
          name: 'icon',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '过滤图标插槽，提供了参数 active，index。',
            'en-US': 'Filter icon slot. The active and index parameters are provided.'
          },
          mode: ['mobile-first'],
          mfDemo: 'slot'
        }
      ]
    }
  ]
}
