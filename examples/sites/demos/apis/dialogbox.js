export default {
  mode: ['mobile'],
  apis: [
    {
      name: 'Dialogbox',
      type: 'component',
      props: [
        {
          mode: []
        },
        {
          name: 'close-on-click-modal',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN':
              '<p>是否可以通过点击遮罩层关闭弹窗，默认为 true ,可以在标签上设置:close-on-click-modal="false"不能通过点击遮罩层关闭弹窗。</p>',
            'en-US': 'Is show left arrow'
          },
          mode: ['mobile'],
          mobileDemo: 'close-on-click-modal'
        },
        {
          name: 'lock-scroll',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>Dialog弹出时是否禁用滚动条,该属性默认为true</p>',
            'en-US': 'Is show right arrow'
          },
          mode: ['mobile'],
          mobileDemo: 'lock-scroll'
        },
        {
          name: 'modal-append-to-body',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN':
              '<p>遮罩层是否应用到 body 上，为 false 时遮罩层会应用到 DialogBox 的父元素上，该属性默认为true</p>',
            'en-US': 'Is show right text'
          },
          mode: ['mobile'],
          mobileDemo: 'slot-title'
        },
        {
          name: 'show-header',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>是否显示弹窗头部 header，默认值为 true 。</p>',
            'en-US': 'Is show left text'
          },
          mode: ['mobile'],
          mobileDemo: 'show-header'
        },
        {
          mode: []
        },
        {
          name: 'visible',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>控制弹出框显示与关闭</p>',
            'en-US': 'set main-title'
          },
          mode: ['mobile'],
          mobileDemo: 'with-input'
        }
      ],
      events: [
        {
          mode: []
        },
        {
          name: 'close',
          type: 'Function()',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>Dialog 关闭的回调</p>',
            'en-US': 'Click'
          },
          mode: ['mobile'],
          mobileDemo: 'events-open-close'
        },
        {
          name: 'confirm',
          type: 'Function()',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>Dialog 确定按钮的的回调</p>',
            'en-US': 'Click'
          },
          mode: ['mobile'],
          mobileDemo: 'cancel-confirm'
        },
        {
          name: 'open',
          type: 'Function()',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>Dialog 打开的回调</p>',
            'en-US': 'Click'
          },
          mode: ['mobile'],
          mobileDemo: 'events-open-close'
        }
      ],
      methods: [],
      slots: [
        {
          name: 'default',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>Dialog 的内容</p>',
            'en-US': 'Click'
          },
          mode: ['mobile'],
          mobileDemo: 'slot-title'
        },
        {
          name: 'footer',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>Dialog 按钮操作区的内容</p>',
            'en-US': 'Click'
          },
          mode: ['mobile'],
          mobileDemo: 'slot-footer'
        },
        {
          name: 'title',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>Dialog 标题区的内容</p>',
            'en-US': 'Click'
          },
          mode: ['mobile'],
          mobileDemo: 'slot-title'
        }
      ]
    }
  ]
}
