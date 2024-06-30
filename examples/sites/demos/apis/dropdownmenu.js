export default {
  mode: ['mobile'],
  apis: [
    {
      name: 'DropdownMenu',
      type: 'component',
      props: [
        {
          name: 'active-color',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>标题和选项的选中态颜色</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'activeColor'
        },
        {
          name: 'close-on-click-outside',
          type: 'Boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '<p>设置点击外部元素后关闭菜单,默认问true</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'closeOnClickOutside'
        },
        {
          name: 'close-on-click-overlay',
          type: 'Boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '<p>设置点击遮罩层后关闭菜单，默认为true设置点击遮罩层后关闭菜单，默认为true</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'closeOnClickOverlay'
        },
        {
          name: 'direction',
          type: 'String',
          defaultValue: 'down',
          desc: {
            'zh-CN': '<p>设置弹出框弹出框展开方向，默认为down</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'direction'
        },
        {
          name: 'duration',
          type: 'Number',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置弹出框的动画时长</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'duration'
        },
        {
          name: 'overlay',
          type: 'Boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '<p>设置是否显示遮罩层，默认为true</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'overlay'
        }
      ],
      events: [],
      methods: [],
      slots: [
        {
          name: 'default',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>定义菜单内容</p>',
            'en-US': 'Click'
          },
          mode: ['mobile'],
          mobileDemo: 'slot'
        }
      ]
    },
    {
      name: 'DropdownItem',
      type: 'component',
      props: [
        {
          name: 'disabled',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>设置是否禁用，默认为false</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'disabled'
        },
        {
          name: 'icon',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置菜单选项项左侧icon</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'icon'
        },
        {
          name: 'options',
          type: 'Array',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置选项数据</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'screen-funnel'
        },
        {
          name: 'title',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>菜单项标题</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'screen-funnel'
        },
        {
          name: 'title-class',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>标题类名</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'title-class'
        },
        {
          name: 'type',
          type: 'String',
          defaultValue: 'selection',
          desc: {
            'zh-CN': '<p>设置菜单项类型，可选值为 filter | sort | selection,默认值为 selection</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'title-class'
        },
        {
          name: 'value',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>当前选中项对应的 value，可以通过v-model双向绑定</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'activeColor'
        }
      ],
      events: [
        {
          name: 'change',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>点击选项时触发，type为 selection 时启用</p>',
            'en-US': 'Click'
          },
          mode: ['mobile'],
          mobileDemo: 'event'
        },
        {
          name: 'close',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>关闭菜单时触发</p>',
            'en-US': 'Click'
          },
          mode: ['mobile'],
          mobileDemo: 'event'
        },
        {
          name: 'open',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>打开菜单时触发</p>',
            'en-US': 'Click'
          },
          mode: ['mobile'],
          mobileDemo: 'event'
        }
      ],
      methods: [],
      slots: [
        {
          name: 'default',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>定义菜单内容</p>',
            'en-US': 'Click'
          },
          mode: ['mobile'],
          mobileDemo: 'slot'
        },
        {
          name: 'icon',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>当type为selection时选项左侧内容</p>',
            'en-US': 'Click'
          },
          mode: ['mobile'],
          mobileDemo: 'slot'
        },
        {
          name: 'title',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>当type为selection时选项内容</p>',
            'en-US': 'Click'
          },
          mode: ['mobile'],
          mobileDemo: 'slot'
        }
      ]
    }
  ]
}
