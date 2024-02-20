export default {
  mode: ['mobile'],
  apis: [
    {
      name: 'Mask',
      type: 'component',
      props: [
        {
          name: 'cancelTouch',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否禁用touch事件，设为 <code>true</code> 后点击遮罩层不会关闭',
            'en-US': "whether to disable touch events, and mask wouldn't close when it was set <code>true</code>"
          },
          mode: ['mobile'],
          mobileDemo: 'cancel-touch'
        },
        {
          name: 'visible',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否展示遮罩层',
            'en-US': 'whether to show mask layer'
          },
          mode: ['mobile'],
          mobileDemo: 'base'
        },
        {
          name: 'z-index',
          type: 'number',
          defaultValue: '99',
          desc: {
            'zh-CN': '层叠数值',
            'en-US': 'z-index property'
          },
          mode: ['mobile'],
          mobileDemo: 'z-index'
        }
      ],
      events: [
        {
          name: 'click',
          desc: {
            'zh-CN': '点击遮罩层触发',
            'en-US': 'Click'
          },
          mode: ['mobile'],
          mobileDemo: 'basic-usage'
        }
      ],
      methods: [],
      slots: [
        {
          name: 'default',
          desc: {
            'zh-CN': '默认插槽',
            'en-US': 'Default slot'
          },
          mode: ['mobile'],
          mobileDemo: 'slot-default'
        }
      ]
    }
  ]
}
