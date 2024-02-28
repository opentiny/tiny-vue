export default {
  mode: ['mobile'],
  apis: [
    {
      name: 'CheckboxGroup',
      type: 'component',
      props: [
        {
          name: 'disabled',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>是否禁用，该属性默认为false</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'disabled'
        },
        {
          name: 'max',
          type: 'Number',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>可被勾选的 checkbox 的最大数量</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'min-max'
        },
        {
          name: 'min',
          type: 'Number',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>可被勾选的 checkbox 的最小数量</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'min-max'
        },
        {
          name: 'value / v-model',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>绑定值</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'dedisabled'
        },
        {
          name: 'vertical',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>是否竖向模式</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'vertical'
        }
      ],
      events: [
        {
          name: 'change',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>当绑定值变化时触发的事件,该事件可获取更新后的值</p>',
            'en-US': 'Click'
          },
          mode: ['mobile'],
          mobileDemo: 'event-change'
        }
      ],
      methods: [],
      slots: []
    }
  ]
}
