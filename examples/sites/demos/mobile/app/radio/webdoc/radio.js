export default {
  column: '2',
  owner: '',
  apis: [
    {
      name: 'radio',
      type: 'component',
      props: [
        {
          name: 'disabled',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否禁用',
            'en-US': 'Disable'
          },
          demoId: 'disabled'
        },
        {
          name: 'label',
          type: 'boolean | number | string',
          defaultValue: '',
          desc: {
            'zh-CN': 'radio 选中时的值',
            'en-US': 'Value when radio is selected'
          },
          demoId: 'label'
        },
        {
          name: 'name',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '原生 name 属性',
            'en-US': 'Native name attribute'
          },
          demoId: 'base'
        },
        {
          name: 'text',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '单选框文本内容',
            'en-US': 'Radio Box Text Content'
          },
          demoId: 'base'
        },
        {
          name: 'value',
          type: 'object | string',
          defaultValue: '{}',
          desc: {
            'zh-CN': '<p>绑定值，该属性默认为{}</p>',
            'en-US': 'display different button'
          },
          demoId: 'base'
        }
      ],
      events: [
        {
          name: 'change',
          type: '(value: boolean | number | string) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '绑定值变化时触发的事件',
            'en-US': 'Event triggered when the binding value changes'
          },
          demoId: 'event'
        }
      ],
      methods: [],
      slots: [
        {
          name: 'default',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': 'radio 的默认插槽',
            'en-US': 'Radio default slot'
          },
          demoId: ''
        }
      ]
    },
    {
      name: 'radio-group',
      type: 'component',
      props: [],
      events: [],
      methods: [],
      slots: []
    },
    {
      name: 'radio-button',
      type: 'component',
      props: [],
      events: [],
      methods: [],
      slots: []
    }
  ],
  demos: [
    {
      demoId: 'base',
      name: {
        'zh-CN': '基础展示',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN': '<p>基础展示</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['base.vue']
    },
    {
      demoId: 'disabled',
      name: {
        'zh-CN': '禁用状态',
        'en-US': 'disabled'
      },
      desc: {
        'zh-CN': '<p>禁用</p>',
        'en-US': '<p>disabled</p>'
      },
      codeFiles: ['disabled.vue']
    },
    {
      demoId: 'label',
      name: {
        'zh-CN': '自定义label',
        'en-US': 'custom label'
      },
      desc: {
        'zh-CN': '<p>自定义label</p>',
        'en-US': '<p>custom label</p>'
      },
      codeFiles: ['label.vue']
    },
    {
      demoId: 'event',
      name: {
        'zh-CN': '选中状态事件',
        'en-US': 'event'
      },
      desc: {
        'zh-CN': '<p>事件</p>',
        'en-US': '<p>event</p>'
      },
      codeFiles: ['event.vue']
    }
  ]
}
