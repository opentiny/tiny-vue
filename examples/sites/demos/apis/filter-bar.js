export default {
  mode: ['mobile-first'],
  apis: [
    {
      name: 'FilterBar',
      type: 'component',
      props: [
        {
          name: 'data',
          type: 'Array',
          defaultValue: '[]',
          desc: {
            'zh-CN': '过滤栏列表数据。',
            'en-US': 'Filter bar list data.'
          },
          mode: ['mobile-first'],
          mfDemo: 'basic-usage'
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
          name: 'click',
          type: 'Function()',
          defaultValue: '',
          desc: {
            'zh-CN': '过滤项点击事件。',
            'en-US': 'Indicates the click event of a filtering item.'
          },
          mode: ['mobile-first'],
          mfDemo: 'readonly'
        }
      ],
      methods: [
        {
          name: 'click(index)',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '过滤项点击方法，index 是当前项索引',
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
            'zh-CN': '过滤项插槽。',
            'en-US': 'Filter item slot.'
          },
          mode: ['mobile-first'],
          mfDemo: 'slot'
        },
        {
          name: 'icon',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '组件右侧图标插槽。',
            'en-US': 'Icon slot on the right of the component.'
          },
          mode: ['mobile-first'],
          mfDemo: 'slot'
        }
      ]
    }
  ]
}
