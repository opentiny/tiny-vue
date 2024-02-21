export default {
  mode: ['mobile-first'],
  apis: [
    {
      name: 'menu',
      type: 'component',
      props: [
        {
          name: 'actived-keys',
          type: 'Number / String',
          defaultValue: '',
          desc: {
            'zh-CN': '默认选中项',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'data',
          type: 'Array',
          defaultValue: '',
          desc: {
            'zh-CN': '数据源',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'empty-text',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义空文本',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'expand-all',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '默认全部展开',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'expanded-keys',
          type: 'Array',
          defaultValue: '',
          desc: {
            'zh-CN': '默认展开项',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'only-check-children',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '只能选中子级，父子不关联',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'search-icon',
          type: 'Object',
          defaultValue: '',
          desc: {
            'zh-CN': '搜索图标',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'show-filter',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '显示搜索框',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        }
      ],
      events: [
        {
          name: 'current-change',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '选中菜单改变事件',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'node-click',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '菜单点击事件',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        }
      ],
      methods: [],
      slots: [
        {
          name: 'empty',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '空数据插槽',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        }
      ]
    }
  ]
}
