export default {
  mode: ['mobile-first'],
  apis: [
    {
      name: 'calendarBar',
      type: 'component',
      props: [
        {
          name: 'cascaderPosition',
          type: 'Object',
          defaultValue: '{}',
          desc: {
            'zh-CN': '改变年月选择的位置',
            'en-US': 'Change the location of the year and month selection'
          },
          mode: ['mobile-first'],
          mfDemo: 'cascader-position'
        },
        {
          name: 'config',
          type: 'Object',
          defaultValue: '{}',
          desc: {
            'zh-CN': '传入用户日期配置信息',
            'en-US': 'Transfer the user date configuration information.'
          },
          mode: ['mobile-first'],
          mfDemo: 'marked'
        },
        {
          name: 'v-model',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '数据绑定',
            'en-US': 'Data Binding'
          },
          mode: ['mobile-first'],
          mfDemo: 'marked'
        }
      ],
      events: [],
      methods: [
        {
          name: 'expand',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '日历栏展开或收起时触发的事件',
            'en-US': 'Event triggered when the calendar bar expands or collapses'
          },
          mode: ['mobile-first'],
          mfDemo: 'expand'
        }
      ],
      slots: []
    }
  ]
}
