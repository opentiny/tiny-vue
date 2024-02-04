export default {
  mode: ['mobile-first'],
  apis: [
    {
      name: 'cascader-select',
      type: 'component',
      props: [
        {
          name: 'cycle-roll',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '打开选项循环滚动功能，默认值为 false',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'disabled',
          type: 'Function',
          defaultValue: '',
          desc: {
            'zh-CN':
              '数组选项禁用，此方法的第一个参数是可见选项的当前值，其它参数是组件当前聚焦值，返回 true 则禁用选项',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'options',
          type: 'Array',
          defaultValue: '',
          desc: {
            'zh-CN': '传入组件的数据',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'text-color',
          type: 'Object',
          defaultValue: '',
          desc: {
            'zh-CN': '文字颜色',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'text-field',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': 'options选项中label的替代名称',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'value-field',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': 'options选项中value的替代名称',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'value-type',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': 'options选项中id的类型',
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
            'zh-CN': '显示级联选择面板，默认值为false',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        }
      ],
      events: [
        {
          name: 'update:visible',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': 'visible改变事件',
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
