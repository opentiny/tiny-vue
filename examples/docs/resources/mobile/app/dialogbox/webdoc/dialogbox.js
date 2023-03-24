export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'append-to-body',
      name: {
        'zh-CN': '否插入到 body',
        'en-US': 'left right arrow'
      },
      desc: {
        'zh-CN': '<p>DialogBox 本身是否插入到 body 上</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['append-to-body.vue']
    },
    {
      demoId: 'with-input',
      name: {
        'zh-CN': '输入类提示框',
        'en-US': 'left right arrow'
      },
      desc: {
        'zh-CN': '<p>输入类提示框</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['with-input.vue']
    },
    {
      demoId: 'close-on-click-modal',
      name: {
        'zh-CN': '单击遮罩层不关闭',
        'en-US': 'left right text'
      },
      desc: {
        'zh-CN': '<p>单击遮罩层不关闭</p>',
        'en-US': '<p>button round</p>'
      },
      codeFiles: ['close-on-click-modal.vue']
    },
    {
      demoId: 'show-header',
      name: {
        'zh-CN': '不显示标题',
        'en-US': 'show-header'
      },
      desc: {
        'zh-CN': '<p>不显示标题</p>',
        'en-US': '<p>button click</p>'
      },
      codeFiles: ['show-header.vue']
    },
    {
      demoId: 'slot-title',
      name: {
        'zh-CN': '自定义标题',
        'en-US': 'slot-title'
      },
      desc: {
        'zh-CN': '<p>自定义标题</p>',
        'en-US': '<p>button click</p>'
      },
      codeFiles: ['slot-title.vue']
    },
    {
      demoId: 'slot-footer',
      name: {
        'zh-CN': '自定义底部',
        'en-US': 'slot-footer'
      },
      desc: {
        'zh-CN': '<p>自定义底部</p>',
        'en-US': '<p>button click</p>'
      },
      codeFiles: ['slot-footer.vue']
    },
    {
      demoId: 'events-open-close',
      name: {
        'zh-CN': '打开与关闭事件',
        'en-US': 'events-open-close'
      },
      desc: {
        'zh-CN': '<p>打开与关闭事件</p>',
        'en-US': '<p>button click</p>'
      },
      codeFiles: ['events-open-close.vue']
    },
    {
      demoId: 'cancel-confirm',
      name: {
        'zh-CN': '取消与确认事件的回调',
        'en-US': 'cancel-confirm'
      },
      desc: {
        'zh-CN': '<p>取消与确认事件的回调</p>',
        'en-US': '<p>button click</p>'
      },
      codeFiles: ['cancel-confirm.vue']
    },
    {
      demoId: 'lock-scroll',
      name: {
        'zh-CN': '弹出时禁用滚动',
        'en-US': 'lock-scroll'
      },
      desc: {
        'zh-CN': '<p>弹出时禁用滚动</p>',
        'en-US': '<p>button click</p>'
      },
      codeFiles: ['lock-scroll.vue']
    }
  ],
  apis: [
    {
      name: 'Dialogbox', // 组件名称展示使用
      type: 'component', // API 类型
      properties: [
        {
          name: ' append-to-body',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>DialogBox 本身是否插入到 body 上</p>',
            'en-US': 'Is fixed top'
          },
          demoId: 'append-to-body'
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
          demoId: 'close-on-click-modal'
        },
        {
          name: 'lock-scroll',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>Dialog弹出时是否禁用滚动条,该属性默认为true</p>',
            'en-US': 'Is show right arrow'
          },
          demoId: 'lock-scroll'
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
          demoId: 'slot-title'
        },
        {
          name: 'show-header',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>是否显示弹窗头部 header，默认值为 true 。</p>',
            'en-US': 'Is show left text'
          },
          demoId: 'show-header'
        },
        {
          name: ' title',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>Dialog 的标题，也可通过具名 slot （见下表）传入</p>',
            'en-US': 'set sub-title'
          },
          demoId: 'show-header'
        },
        {
          name: 'visible',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>控制弹出框显示与关闭</p>',
            'en-US': 'set main-title'
          },
          demoId: 'with-input'
        }
      ],
      events: [
        {
          name: ' cancel',
          type: 'Function()',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>Dialog 取消按钮的的回调</p>',
            'en-US': 'Click'
          },
          demoId: 'cancel-confirm'
        },
        {
          name: 'close',
          type: 'Function()',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>Dialog 关闭的回调</p>',
            'en-US': 'Click'
          },
          demoId: 'events-open-close'
        },
        {
          name: 'confirm',
          type: 'Function()',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>Dialog 确定按钮的的回调</p>',
            'en-US': 'Click'
          },
          demoId: 'cancel-confirm'
        },
        {
          name: 'open',
          type: 'Function()',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>Dialog 打开的回调</p>',
            'en-US': 'Click'
          },
          demoId: 'events-open-close'
        }
      ],
      slot: [
        {
          name: 'default',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>Dialog 的内容</p>',
            'en-US': 'Click'
          },
          demoId: 'slot-title'
        },
        {
          name: 'footer',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>Dialog 按钮操作区的内容</p>',
            'en-US': 'Click'
          },
          demoId: 'slot-footer'
        },
        {
          name: 'title',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>Dialog 标题区的内容</p>',
            'en-US': 'Click'
          },
          demoId: 'slot-title'
        }
      ]
    }
  ]
}
