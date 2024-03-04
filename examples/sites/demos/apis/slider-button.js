export default {
  mode: ['mobile-first'],
  apis: [
    {
      name: 'slider-button',
      type: 'component',
      props: [
        {
          name: 'disabled',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '设置滑块项禁用态',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'label',
          type: 'Number / String',
          defaultValue: '',
          desc: {
            'zh-CN': '设置 Button 的内容',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'text',
          type: 'Number / String',
          defaultValue: '',
          desc: {
            'zh-CN': '设置 Button 的内容',
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
            'zh-CN': '组件默认插槽',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        }
      ]
    }
  ]
}
