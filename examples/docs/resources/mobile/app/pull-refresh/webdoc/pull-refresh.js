export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'base',
      name: {
        'zh-CN': '基础用法',
        'en-US': 'button type',
      },
      desc: {
        'zh-CN': '<p>基础用法</p>',
        'en-US': '<p>button type</p>',
      },
      codeFiles: ['base.vue'],
    },
    {
      demoId: 'animation-duration',
      name: {
        'zh-CN': '弹回动画所用的时间',
        'en-US': 'button type',
      },
      desc: {
        'zh-CN': '<p>下拉可刷新的弹回动画时间</p>',
        'en-US': '<p>button type</p>',
      },
      codeFiles: ['animation-duration.vue'],
    },
    {
      demoId: 'disabled',
      name: {
        'zh-CN': '禁用下拉刷新',
        'en-US': 'button round',
      },
      desc: {
        'zh-CN': '<p>禁用下拉刷新</p>',
        'en-US': '<p>button round</p>',
      },
      codeFiles: ['disabled.vue'],
    },
    {
      demoId: 'enhance',
      name: {
        'zh-CN': '支持上拉、下拉刷新',
        'en-US': 'button round',
      },
      desc: {
        'zh-CN': '<p>支持上拉、下拉刷新</p>',
        'en-US': '<p>button round</p>',
      },
      codeFiles: ['enhance.vue'],
    },
    {
      demoId: 'head-height',
      name: {
        'zh-CN': '提示信息的高度',
        'en-US': 'events',
      },
      desc: {
        'zh-CN': '<p>下拉后，提示信息的高度<p>',
        'en-US': '<p>bbutton click</p>',
      },
      codeFiles: ['head-height.vue'],
    },
    {
      demoId: 'loosing-text',
      name: {
        'zh-CN': '超过<code>head</code>的高度后的提示',
        'en-US': 'events',
      },
      desc: {
        'zh-CN': '<p>下拉超过<code>head</code>的高度后的提示<p>',
        'en-US': '<p>bbutton click</p>',
      },
      codeFiles: ['loosing-text.vue'],
    },
    {
      demoId: 'pull-refresh-slot',
      name: {
        'zh-CN': '插槽',
        'en-US': 'events',
      },
      desc: {
        'zh-CN': '<p>下拉刷新<code>loading</code>的插槽<p>',
        'en-US': '<p>bbutton click</p>',
      },
      codeFiles: ['pull-refresh-slot.vue'],
    },
    {
      demoId: 'pulling-text',
      name: {
        'zh-CN': '下拉提示文字',
        'en-US': 'events',
      },
      desc: {
        'zh-CN': '<p>开始下拉并还没到<code>head</code>的高度时的提示文字<p>',
        'en-US': '<p>bbutton click</p>',
      },
      codeFiles: ['pulling-text.vue'],
    },
    {
      demoId: 'result-text',
      name: {
        'zh-CN': '刷新完成时的提示文字',
        'en-US': 'events',
      },
      desc: {
        'zh-CN': '<p>刷新完成时的提示文字<p>',
        'en-US': '<p>bbutton click</p>',
      },
      codeFiles: ['result-text.vue'],
    },
    {
      demoId: 'success-duration',
      name: {
        'zh-CN': '刷新成功的文字展示时长',
        'en-US': 'events',
      },
      desc: {
        'zh-CN': '<p>刷新完成时，提示的显示时长<p>',
        'en-US': '<p>bbutton click</p>',
      },
      codeFiles: ['success-duration.vue'],
    },
    {
      demoId: 'success-text',
      name: {
        'zh-CN': '刷新成功的文字',
        'en-US': 'events',
      },
      desc: {
        'zh-CN': '<p>刷新成功时的提示文字<p>',
        'en-US': '<p>bbutton click</p>',
      },
      codeFiles: ['success-text.vue'],
    },
  ],
  apis: [
    {
      name: 'pull-refresh ', // 组件名称展示使用
      type: 'component', // API 类型
      properties: [
        {
          name: 'disabled',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>禁止下拉刷新，默认：false</p>',
            'en-US': 'display different button',
          },
          demoId: 'disabled',
        },
        {
          name: 'head-height',
          type: 'Number',
          defaultValue: '50',
          desc: {
            'zh-CN': '<p>loading提示的高度,默认：50</p>',
            'en-US': 'display different button',
          },
          demoId: 'head-height-wrap',
        },
        {
          name: 'loosing-text',
          type: 'String',
          defaultValue: '释放即可刷新',
          desc: {
            'zh-CN': '<p>下拉高度大于等于head-height时的提示文字，默认为：释放即可刷新</p>',
            'en-US': 'display different button',
          },
          demoId: 'loosing-text',
        },
        {
          name: 'pulling-text',
          type: 'String',
          defaultValue: '下拉即可刷新',
          desc: {
            'zh-CN': '<p>下拉高度小于head-height时的提示文字，默认为：下拉即可刷新</p>',
            'en-US': 'display different button',
          },
          demoId: 'pulling-text',
        },
        {
          name: 'success-duration',
          type: 'Number',
          defaultValue: '500',
          desc: {
            'zh-CN': '<p>刷新完成的提示文字的显示时长，需要与success-text配合使用，默认：500</p>',
            'en-US': 'display different button',
          },
          demoId: 'success-duration',
        },
        {
          name: 'success-text',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>下拉刷新完成的提示文字</p>',
            'en-US': 'display different button',
          },
          demoId: 'result-text',
        },
        {
          name: 'failed-text',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>下拉刷新失败的提示文字</p>',
            'en-US': 'display different button',
          },
          demoId: 'success-text',
        },
        {
          name: 'value',
          type: 'Boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '<p>下拉过程中会被置为true，当设置为false时，关闭loading</p>',
            'en-US': 'display different button',
          },
          demoId: 'success-text',
        },
        {
          name: 'pullDown',
          type: {},
          defaultValue: '',
          desc: {
            'zh-CN': '<p>下拉刷新</p>',
            'en-US': 'display different button',
          },
          demoId: 'base',
        },
        {
          name: 'pullUp',
          type: '{}',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>上拉加载</p>',
            'en-US': 'display different button',
          },
          demoId: 'enhance',
        },
      ],
      events: [
        {
          name: 'refresh',
          type: 'Function()',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>下拉时触发的事件</p>',
            'en-US': 'Click',
          },
          demoId: 'pulling-text',
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
          demoId: '',
        },
        {
          name: 'loading',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>下拉加载中的插槽</p>',
            'en-US': 'Click',
          },
          demoId: 'pull-refresh-slot',
        },
      ],
    },
  ],
}
