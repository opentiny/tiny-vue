export default {
  column: '2',
  owner: '',
  apis: [
    {
      name: 'actionsheet',
      type: 'component',
      props: [
        {
          name: 'ellipsis',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>是否省略显示，该属性默认为false</p>',
            'en-US': 'display different button'
          },
          demoId: 'ellipsis'
        },
        {
          name: 'menus',
          type: 'Array',
          defaultValue: '50',
          desc: {
            'zh-CN': '<p>列表数组</p>',
            'en-US': 'display different button'
          },
          demoId: 'ellipsis'
        },
        {
          name: 'visible',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>上划列表显示隐藏,该属性默认为false</p>',
            'en-US': 'display different button'
          },
          demoId: 'ellipsis'
        },
        {
          name: 'content-position',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否显示action插槽',
            'en-US': 'Whether to display action slots '
          },
          demoId: 'slot-action'
        }
      ],
      events: [
        {
          name: 'click',
          type: 'Function()',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置组件点击列表项时触发的回调函数</p>',
            'en-US': 'Click'
          },
          demoId: 'clickfn'
        }
      ],
      methods: [
        {
          name: 'visibleHandle',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>菜单列表隐藏方法</p>',
            'en-US': 'Click'
          },
          demoId: 'slot-item'
        }
      ],
      slots: [
        {
          name: 'action',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>action插槽</p>',
            'en-US': 'Click'
          },
          demoId: 'slot-action'
        },
        {
          name: 'item',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>item插槽</p>',
            'en-US': 'Click'
          },
          demoId: 'slot-item'
        }
      ]
    }
  ],
  demos: [
    {
      demoId: 'clickfn',
      name: {
        'zh-CN': '点击列表事件',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN': '<p>点击列表事件</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['clickfn.vue']
    },
    {
      demoId: 'ellipsis',
      name: {
        'zh-CN': '内容超出显示省略号',
        'en-US': 'button round'
      },
      desc: {
        'zh-CN': '<p>内容超出显示省略号</p>',
        'en-US': '<p>button round</p>'
      },
      codeFiles: ['ellipsis.vue']
    },
    {
      demoId: 'slot-item',
      name: {
        'zh-CN': '数据插槽',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过<code>item</code>插槽自定义下拉列表内容<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['slot-item.vue']
    },
    {
      demoId: 'slot-action',
      name: {
        'zh-CN': 'action插槽',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过<code>action</code>插槽自定义操作项内容<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['slot-action.vue']
    }
  ]
}
