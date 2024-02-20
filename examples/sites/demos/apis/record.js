export default {
  mode: ['mobile-first'],
  apis: [
    {
      name: 'record',
      type: 'component',
      props: [
        {
          name: 'is-hwh5',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '是否为H5页面',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'lock-scroll',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '设置页面锁住滚动，默认值为 true ',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'v-model',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '数据绑定',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        }
      ],
      events: [
        {
          name: 'confirm',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '设置结束录音事件',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        }
      ],
      methods: [],
      slots: []
    }
  ]
}
