export default {
  mode: ['mobile-first'],
  apis: [
    {
      name: 'date-picker-mobile',
      type: 'component',
      props: [
        {
          name: 'lock-scroll',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '弹出面板是否锁定浏览器滚动条，默认值为 true',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'picker-options',
          type: 'Object',
          defaultValue: '',
          desc: {
            'zh-CN':
              '日期选择器特有的选项，该属性的默认值为 { disabledDate: null }，其中 disabledDate 可以设置日期范围限制',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'title',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '面板标题',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'type',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '组件类型，默认值为 date',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'v-model',
          type: 'Number, String, Array, Date',
          defaultValue: '',
          desc: {
            'zh-CN': '绑定值',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'visible',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '是否弹出面板',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        }
      ],
      events: [
        {
          name: 'click',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '选择日期时触发',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'confirm',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '面板确认时触发',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'time-confirm',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '时间面板确认时触发',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'update:visible',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '显示或隐藏面板时触发',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        }
      ],
      methods: [
        {
          name: 'confirm',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '确认并关闭面板',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'formatDate(date, dateFormat)',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': "日期格式化方法，例如：formatDate('2022/11/30', 'yyyy年MM月dd日')",
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        }
      ],
      slots: [
        {
          name: 'default',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '日期单元格插槽，参数：data 当前日期数据',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        }
      ]
    }
  ]
}
