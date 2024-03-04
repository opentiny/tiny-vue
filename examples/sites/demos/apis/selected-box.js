export default {
  mode: ['mobile-first'],
  apis: [
    {
      name: 'selected-box',
      type: 'component',
      props: [
        {
          name: 'config',
          type: 'Object',
          defaultValue: '',
          desc: {
            'zh-CN': '已选栏配置项，详细属性请参考基本示例',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'inverse',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '启用反选，属性 inverse 设置为 true，属性 total 设置为总记录数，启用反选模式',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'select',
          type: 'Array',
          defaultValue: '',
          desc: {
            'zh-CN': '已选栏数据列表',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'total',
          type: 'Number',
          defaultValue: '',
          desc: {
            'zh-CN': '已选择数据总条数',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        }
      ],
      events: [
        {
          name: 'change',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '增加、删除、清空和拖拽顺序，都会触发组件 change 事件，事件参数就是组件当前暂存的数据',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'clear',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '清空按钮点击事件',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'delete',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '删除按钮点击事件',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'drag',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '拖动排序事件',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        }
      ],
      methods: [],
      slots: [
        {
          name: 'button',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '已选栏右侧自定义按钮插槽',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'clear',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '清空按钮插槽',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'close',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '删除按钮插槽',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'option',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '已选择数据列表显示插槽',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'select',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '已选中数据条数显示插槽',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        }
      ]
    }
  ]
}
