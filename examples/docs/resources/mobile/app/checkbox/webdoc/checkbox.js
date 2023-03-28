export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'default',
      name: {
        'zh-CN': '插槽',
        'en-US': 'button type',
      },
      desc: {
        'zh-CN': '<p>默认插槽</p>',
        'en-US': '<p>button type</p>',
      },
      codeFiles: ['default.vue'],
    },
    {
      demoId: 'event-change',
      name: {
        'zh-CN': '事件',
        'en-US': 'button round',
      },
      desc: {
        'zh-CN': '<p>事件</p>',
        'en-US': '<p>button round</p>',
      },
      codeFiles: ['event-change.vue'],
    },
    {
      demoId: 'indeterminate',
      name: {
        'zh-CN': '全选与半选',
        'en-US': 'events',
      },
      desc: {
        'zh-CN': '<p>全选与半选</p>',
        'en-US': '<p>bbutton click</p>',
      },
      codeFiles: ['indeterminate.vue'],
    },
    {
      demoId: 'label',
      name: {
        'zh-CN': '选中值设置',
        'en-US': 'events',
      },
      desc: {
        'zh-CN': '<p>复选框组选中的值设置</p>',
      },
      codeFiles: ['label.vue'],
    },
    {
      demoId: 'true-false-label',
      name: {
        'zh-CN': '选中值设置',
        'en-US': 'events',
      },
      desc: {
        'zh-CN': '<p>选中与未选中的值设置</p>',
        'en-US': '<p>bbutton click</p>',
      },
      codeFiles: ['true-false-label.vue'],
    },
  ],
  apis: [
    {
      name: 'Checkbox', // 组件名称展示使用
      type: 'component', // API 类型
      properties: [
        {
          name: 'checked',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>当前是否勾选,该属性默认为false</p>',
            'en-US': 'display different button',
          },
          demoId: '',
        },
        {
          name: 'disabled',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>当前是否勾选,该属性默认为false</p>',
            'en-US': 'display different button',
          },
          demoId: 'label',
        },
        {
          name: 'false-label',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>没有选中时的值</p>',
            'en-US': 'display different button',
          },
          demoId: 'true-false-label',
        },
        {
          name: 'true-label',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>选中时的值</p>',
            'en-US': 'display different button',
          },
          demoId: 'true-false-label',
        },
        {
          name: 'indeterminate',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>设置 indeterminate 状态，只负责样式控制,该属性默认为false</p>',
            'en-US': 'display different button',
          },
          demoId: 'indeterminate',
        },
        {
          name: 'label',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效）</p>',
            'en-US': 'display different button',
          },
          demoId: 'label',
        },
        {
          name: 'name',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>原生 name 属性</p>',
            'en-US': 'display different button',
          },
          demoId: 'label',
        },
        {
          name: 'value / v-model',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>绑定值</p>',
            'en-US': 'display different button',
          },
          demoId: 'default',
        },
      ],
      events: [
        {
          name: 'change',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>当绑定值变化时触发的事件,该事件可获取更新后的值</p>',
            'en-US': 'Click',
          },
          demoId: 'event-change',
        },
      ],
      slots: [
        {
          name: 'default',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>组件默认插槽</p>',
            'en-US': 'Click',
          },
          demoId: '',
        },
      ],
    },
  ],
}
