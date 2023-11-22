export default {
  column: '2',
  owner: '',
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
  ],
  apis: [
    {
      name: 'Radio', // 组件名称展示使用
      type: 'component', // API 类型
      properties: [
        {
          name: 'disabled',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>是否禁用</p>',
            'en-US': 'display different button'
          },
          demoId: 'disabled'
        },
        {
          name: 'label',
          type: 'object | string',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>Radio 的 value,该属性默认为{}</p>',
            'en-US': 'display different button'
          },
          demoId: 'label'
        },
        {
          name: 'name',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>原生 name 属性</p>',
            'en-US': 'display different button'
          },
          demoId: 'base'
        },
        {
          name: 'text',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>文本</p>',
            'en-US': 'display different button'
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
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>绑定值变化时触发的事件,可获取changeValue</p>',
            'en-US': 'Click'
          },
          demoId: 'event'
        }
      ],
      slots: [
        {
          name: 'default',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>Radio的内容</p>',
            'en-US': 'Click'
          },
          demoId: ''
        }
      ]
    }
  ]
}
