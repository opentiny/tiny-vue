export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'active-color',
      name: {
        'zh-CN': '自定义当前标签颜色',
        'en-US': 'button type',
      },
      desc: {
        'zh-CN': '<p>自定义当前标签颜色</p>',
        'en-US': '<p>button type</p>',
      },
      codeFiles: ['active-color.vue'],
    },
    {
      demoId: 'before-leave',
      name: {
        'zh-CN': '切换标签页前的钩子',
        'en-US': 'button round',
      },
      desc: {
        'zh-CN': '<p>切换标签页前的钩子</p>',
        'en-US': '<p>button round</p>',
      },
      codeFiles: ['before-leave.vue'],
    },
    {
      demoId: 'swipe',
      name: {
        'zh-CN': '滑动内容切换标签页',
        'en-US': 'events',
      },
      desc: {
        'zh-CN': '<p>滑动内容切换标签页<p>',
        'en-US': '<p>bbutton click</p>',
      },
      codeFiles: ['swipe.vue'],
    },
    {
      demoId: 'tabs-events',
      name: {
        'zh-CN': '事件',
        'en-US': 'events',
      },
      desc: {
        'zh-CN': '<p>事件<p>',
        'en-US': '<p>bbutton click</p>',
      },
      codeFiles: ['tabs-events.vue'],
    },
    {
      demoId: 'three-level',
      name: {
        'zh-CN': '嵌套标签页',
        'en-US': 'events',
      },
      desc: {
        'zh-CN': '<p>嵌套标签页<p>',
        'en-US': '<p>bbutton click</p>',
      },
      codeFiles: ['three-level.vue'],
    },
    {
      demoId: 'with-add',
      name: {
        'zh-CN': '新增标签页',
        'en-US': 'events',
      },
      desc: {
        'zh-CN': '<p>新增标签页<p>',
        'en-US': '<p>bbutton click</p>',
      },
      codeFiles: ['with-add.vue'],
    },
    {
      demoId: 'expand',
      name: {
        'zh-CN': '可展开标签页',
        'en-US': 'events',
      },
      desc: {
        'zh-CN': '<p>可展开标签页<p>',
        'en-US': '<p>bbutton click</p>',
      },
      codeFiles: ['expand.vue'],
    },
  ],
  apis: [
    {
      name: 'Tabs', // 组件名称展示使用
      type: 'component', // API 类型
      properties: [
        {
          name: 'active-color',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置当前标签页激活状态的颜色</p>',
            'en-US': 'display different button',
          },
          demoId: 'active-color',
        },
        {
          name: ' active-name',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>激活当前页</p>',
            'en-US': 'display different button',
          },
          demoId: 'active-color',
        },
        {
          name: 'before-leave',
          type: 'Function(activeName, oldActiveName)',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换</p>',
            'en-US': 'display different button',
          },
          demoId: 'before-leave',
        },
        {
          name: 'swipeable',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>滑动标签内容切换标签页</p>',
            'en-US': 'display different button',
          },
          demoId: 'swipe',
        },
        {
          name: 'value / v-model',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>绑定值，选中选项卡的 name</p>',
            'en-US': 'display different button',
          },
          demoId: 'active-color',
        },
        {
          name: 'with-add',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>标签是否可增加</p>',
            'en-US': 'display different button',
          },
          demoId: 'with-add',
        },
        {
          name: 'show-expand-tabs',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p> 属性启用标签可可展开功能</p>',
            'en-US': 'display different button',
          },
          demoId: 'expend',
        },
        {
          name: 'expand-tabs-title',
          type: 'string',
          defaultValue: '请选择',
          desc: {
            'zh-CN': '<p>属性实现自定义展开内容的title,默认“请选择”</p>',
            'en-US': 'display different button',
          },
          demoId: 'expend',
        },
        {
          name: 'expand-tabs-mode',
          type: 'string',
          defaultValue: 'columns',
          desc: {
            'zh-CN': '<p>属性实现展开内容的排列方式，column：为单列，columns：为多列，默认“多列”</p>',
            'en-US': 'display different button',
          },
          demoId: 'expend',
        },
      ],
      events: [
        {
          name: 'add',
          type: 'Function()',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>增加tabitem时触发事件</p>',
            'en-US': 'Click',
          },
          demoId: 'tabs-events',
        },
        {
          name: 'click',
          type: 'Function(arg1,arg2)	',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>点击tabitem时触发事件</p>',
            'en-US': 'Click',
          },
          demoId: 'tabs-events',
        },
        {
          name: 'close',
          type: 'Function(arg)',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>删除tabitem时触发事件</p>',
            'en-US': 'Click',
          },
          demoId: 'tabs-events',
        },
      ],
      slot: [
        {
          name: 'default',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>组件默认插槽</p>',
            'en-US': 'Click',
          },
          demoId: 'active-color',
        },
      ],
    },
  ],
}
