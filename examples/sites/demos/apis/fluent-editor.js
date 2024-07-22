export default {
  mode: ['pc'],
  apis: [
    {
      name: 'fluent-editor',
      type: 'component',
      props: [
        {
          name: 'data-type',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '初始化的富文本数据格式是否为 Delta 格式，默认为 Delta 格式，设置成 false，则为 HTML 格式',
            'en-US': ''
          },
          mode: ['pc'],
          pcDemo: 'data-switch'
        },
        {
          name: 'data-upgrade',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '富文本数据输出格式是否为 Delta 格式，默认为 Delta 格式，设置成 false，则为 HTML 格式',
            'en-US': ''
          },
          mode: ['pc'],
          pcDemo: 'data-switch'
        },
        {
          name: 'disabled',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否为不可编辑状态',
            'en-US': ''
          },
          mode: ['pc'],
          pcDemo: 'disabled'
        },
        {
          name: 'modelValue / v-model',
          type: 'string',
          defaultValue: "''",
          desc: {
            'zh-CN': '绑定值',
            'en-US': 'Bound Value'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        }
      ],
      events: [],
      methods: [],
      slots: []
    }
  ]
}
