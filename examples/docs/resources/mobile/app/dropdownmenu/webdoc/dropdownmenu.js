export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'activeColor',
      name: {
        'zh-CN': '标题和选项的选中态颜色',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN': '<p>设置选中项颜色</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['activeColor.vue']
    },
    {
      demoId: 'closeOnClickOutside',
      name: {
        'zh-CN': '点击外部元素关闭弹出菜单',
        'en-US': 'button round'
      },
      desc: {
        'zh-CN': '<p>点击外部元素关闭弹出菜单</p>',
        'en-US': '<p>button round</p>'
      },
      codeFiles: ['closeOnClickOutside.vue']
    },
    {
      demoId: 'closeOnClickOverlay',
      name: {
        'zh-CN': '点击遮罩层关闭弹出菜单',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>点击遮罩层关闭弹出菜单</p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['closeOnClickOverlay.vue']
    },
    {
      demoId: 'direction',
      name: {
        'zh-CN': '菜单弹出位置',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>弹出菜单位置</p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['direction.vue']
    },
    {
      demoId: 'duration',
      name: {
        'zh-CN': '动画时长',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>弹出菜单动画时长</p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['duration.vue']
    },
    {
      demoId: 'event',
      name: {
        'zh-CN': '事件',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>事件</p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['event.vue']
    },
    {
      demoId: 'icon',
      name: {
        'zh-CN': '自定义 icon',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>自定义<code>icon</code></p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['icon.vue']
    },
    {
      demoId: 'item-disabled',
      name: {
        'zh-CN': '是否禁用',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过<code>disabled</code>属性设置是否禁用，默认为 false 。</p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['item-disabled.vue']
    },
    {
      demoId: 'overlay',
      name: {
        'zh-CN': '遮罩层',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>遮罩层</p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['overlay.vue']
    },
    {
      demoId: 'screen-funnel',
      name: {
        'zh-CN': '筛选漏斗',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>筛选漏斗</p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['screen-funnel.vue']
    },
    {
      demoId: 'slot',
      name: {
        'zh-CN': '插槽',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>插槽</p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['slot.vue']
    },
    {
      demoId: 'title-class',
      name: {
        'zh-CN': '标题类名',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过<code>title-class</code>属性设置标题类名</p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['title-class.vue']
    },
    {
      demoId: 'type',
      name: {
        'zh-CN': '筛选类型',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>筛选类型</p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['type.vue']
    }
  ],
  apis: [
    {
      name: 'DropdownMenu', // 组件名称展示使用
      type: 'component', // API 类型
      properties: [
        {
          name: 'active-color',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>标题和选项的选中态颜色</p>',
            'en-US': 'display different button'
          },
          demoId: 'activeColor'
        },
        {
          name: 'close-on-click-outside',
          type: 'Boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '<p>设置点击外部元素后关闭菜单,默认问true</p>',
            'en-US': 'display different button'
          },
          demoId: 'closeOnClickOutside'
        },
        {
          name: 'close-on-click-overlay',
          type: 'Boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '<p>设置点击遮罩层后关闭菜单，默认为true设置点击遮罩层后关闭菜单，默认为true</p>',
            'en-US': 'display different button'
          },
          demoId: 'closeOnClickOverlay'
        },
        {
          name: 'direction',
          type: 'String',
          defaultValue: 'down',
          desc: {
            'zh-CN': '<p>设置弹出框弹出框展开方向，默认为down</p>',
            'en-US': 'display different button'
          },
          demoId: 'direction'
        },
        {
          name: 'duration',
          type: 'Number',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置弹出框的动画时长</p>',
            'en-US': 'display different button'
          },
          demoId: 'duration'
        },
        {
          name: 'overlay',
          type: 'Boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '<p>设置是否显示遮罩层，默认为true</p>',
            'en-US': 'display different button'
          },
          demoId: 'overlay'
        }
      ],
      slots: [
        {
          name: 'default',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>定义菜单内容</p>',
            'en-US': 'Click'
          },
          demoId: 'slot'
        }
      ]
    },
    {
      name: 'DropdownItem', // 组件名称展示使用
      type: 'component', // API 类型
      properties: [
        {
          name: 'disabled',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>设置是否禁用，默认为false</p>',
            'en-US': 'display different button'
          },
          demoId: 'disabled'
        },
        {
          name: 'icon',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置菜单选项项左侧icon</p>',
            'en-US': 'display different button'
          },
          demoId: 'icon'
        },
        {
          name: 'options',
          type: 'Array',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置选项数据</p>',
            'en-US': 'display different button'
          },
          demoId: 'screen-funnel'
        },
        {
          name: 'title',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>菜单项标题</p>',
            'en-US': 'display different button'
          },
          demoId: 'screen-funnel'
        },
        {
          name: 'title-class',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>标题类名</p>',
            'en-US': 'display different button'
          },
          demoId: 'title-class'
        },
        {
          name: 'type',
          type: 'String',
          defaultValue: 'selection',
          desc: {
            'zh-CN': '<p>设置菜单项类型，可选值为 filter | sort | selection,默认值为 selection</p>',
            'en-US': 'display different button'
          },
          demoId: 'title-class'
        },
        {
          name: 'value',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>当前选中项对应的 value，可以通过v-model双向绑定</p>',
            'en-US': 'display different button'
          },
          demoId: 'activeColor'
        }
      ],
      events: [
        {
          name: 'change',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>点击选项时触发，type为 selection 时启用</p>',
            'en-US': 'Click'
          },
          demoId: 'event'
        },
        {
          name: 'close',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>关闭菜单时触发</p>',
            'en-US': 'Click'
          },
          demoId: 'event'
        },
        {
          name: 'open',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>打开菜单时触发</p>',
            'en-US': 'Click'
          },
          demoId: 'event'
        },
        {
          name: 'open',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>重置选项时触发，type 为 filter 时启用</p>',
            'en-US': 'Click'
          },
          demoId: 'event'
        },
        {
          name: 'open',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>点击确定按钮时触发，type 为 filter 时启用</p>',
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
            'zh-CN': '<p>定义菜单内容</p>',
            'en-US': 'Click'
          },
          demoId: 'slot'
        },
        {
          name: 'icon',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>当type为selection时选项左侧内容</p>',
            'en-US': 'Click'
          },
          demoId: 'slot'
        },
        {
          name: 'title',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>当type为selection时选项内容</p>',
            'en-US': 'Click'
          },
          demoId: 'slot'
        }
      ]
    }
  ]
}
