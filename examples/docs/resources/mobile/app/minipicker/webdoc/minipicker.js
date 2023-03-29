export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'multicolumn',
      name: {
        'zh-CN': '多列选择',
        'en-US': 'button type',
      },
      desc: {
        'zh-CN': '<p>多列选择</p>',
        'en-US': '<p>button type</p>',
      },
      codeFiles: ['multicolumn.vue'],
    },
    {
      demoId: 'cancel-button-text',
      name: {
        'zh-CN': '自定义按钮内容',
        'en-US': 'button round',
      },
      desc: {
        'zh-CN': '<p>取消按钮内容</p>',
        'en-US': '<p>button round</p>',
      },
      codeFiles: ['cancel-button-text.vue'],
    },
    {
      demoId: 'cancel',
      name: {
        'zh-CN': '<code>cancel</code>事件',
        'en-US': 'events',
      },
      desc: {
        'zh-CN': '<p>事件<p>',
        'en-US': '<p>bbutton click</p>',
      },
      codeFiles: ['cancel.vue'],
    },
    {
      demoId: 'cascad',
      name: {
        'zh-CN': '级联选择',
        'en-US': 'events',
      },
      desc: {
        'zh-CN': '<p>级联选择<p>',
        'en-US': '<p>bbutton click</p>',
      },
      codeFiles: ['cascad.vue'],
    },
    {
      demoId: 'change',
      name: {
        'zh-CN': '<code>change</code>事件',
        'en-US': 'events',
      },
      desc: {
        'zh-CN': '<p>change 事件<p>',
        'en-US': '<p>bbutton click</p>',
      },
      codeFiles: ['change.vue'],
    },
    {
      demoId: 'defaultindex',
      name: {
        'zh-CN': '初始值索引',
        'en-US': 'events',
      },
      desc: {
        'zh-CN': '<p>初始值索引<p>',
        'en-US': '<p>bbutton click</p>',
      },
      codeFiles: ['defaultindex.vue'],
    },
    {
      demoId: 'itemheight',
      name: {
        'zh-CN': '选项高度',
        'en-US': 'events',
      },
      desc: {
        'zh-CN': '<p>选项高度<p>',
        'en-US': '<p>bbutton click</p>',
      },
      codeFiles: ['itemheight.vue'],
    },
    {
      demoId: 'methods',
      name: {
        'zh-CN': '方法',
        'en-US': 'events',
      },
      desc: {
        'zh-CN': '<p><code>MiniPicker</code>的 <code>getColumnIndex</code>获取对应列选中项的索引<br><code>getColumnValue</code>获取对应列选中的值<br><code>getColumnValues</code>获取对应列中所有选项<p>',
        'en-US': '<p>bbutton click</p>',
      },
      codeFiles: ['methods.vue'],
    },
    {
      demoId: 'toolbar',
      name: {
        'zh-CN': '插槽',
        'en-US': 'events',
      },
      desc: {
        'zh-CN': '<p><code>toolbar</code>插槽<p>',
        'en-US': '<p>bbutton click</p>',
      },
      codeFiles: ['toolbar.vue'],
    },
    {
      demoId: 'column',
      name: {
        'zh-CN': '方法',
        'en-US': 'events',
      },
      desc: {
        'zh-CN': '<p>获取所有选中列的值与对应索引<p>',
        'en-US': '<p>bbutton click</p>',
      },
      codeFiles: ['column.vue'],
    },
    {
      demoId: 'visibleitemcount',
      name: {
        'zh-CN': '可见选项个数',
        'en-US': 'events',
      },
      desc: {
        'zh-CN': '<p>可见选项个数<p>',
        'en-US': '<p>bbutton click</p>',
      },
      codeFiles: ['visibleitemcount.vue'],
    },

  ],
  apis: [
    {
      name: 'MiniPicker', // 组件名称展示使用
      type: 'component', // API 类型
      properties: [
        {
          name: 'cancel-button-text',
          type: 'String',
          defaultValue: '取消',
          desc: {
            'zh-CN': '<p>取消按钮内容设置，该属性默认为‘取消’</p>',
            'en-US': 'display different button',
          },
          demoId: 'cancel-button-text',
        },
        {
          name: 'columns',
          type: 'Array',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>配置每一列显示的数据</p>',
            'en-US': 'display different button',
          },
          demoId: 'multicolumn',
        },
        {
          name: 'confirm-button-text',
          type: 'String',
          defaultValue: '确定',
          desc: {
            'zh-CN': '<p>确定按钮内容设置，该属性默认为‘确定’</p>',
            'en-US': 'display different button',
          },
          demoId: 'confirm-button-text',
        },
        {
          name: 'default-index',
          type: 'Number',
          defaultValue: '0',
          desc: {
            'zh-CN': '<p>单列选择时,选择的初始值索引，该属性默认为0</p>',
            'en-US': 'display different button',
          },
          demoId: 'defaultindex',
        },
        {
          name: 'item-height',
          type: 'Number',
          defaultValue: '34',
          desc: {
            'zh-CN': '<p>选项高度，该属性默认为34</p>',
            'en-US': 'display different button',
          },
          demoId: 'itemheight',
        },
        {
          name: 'swipe-duration',
          type: 'Number',
          defaultValue: '1000',
          desc: {
            'zh-CN': '<p>快速滑动时惯性滚动的时长，单位 ms,该属性默认为1000</p>',
            'en-US': 'display different button',
          },
          demoId: 'cancel-button-text',
        },
        {
          name: 'title',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>标题</p>',
            'en-US': 'display different button',
          },
          demoId: 'cancel-button-text',
        },
        {
          name: 'value-key',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>选项对象中，选项文字对应的键名，该属性默认为"text"</p>',
            'en-US': 'display different button',
          },
          demoId: '',
        },
        {
          name: 'visible',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>选择器组件显示或隐藏，该属性默认为false</p>',
            'en-US': 'display different button',
          },
          demoId: 'cancel-button-text',
        },
        {
          name: 'visible-item-count',
          type: 'Number',
          defaultValue: '5',
          desc: {
            'zh-CN': '<p>可见的选项个数，该属性默认为5</p>',
            'en-US': 'display different button',
          },
          demoId: 'visibleitemcount',
        },
      ],
      methods: [
        {
          name: 'getColumnIndex',
          type: '获取对应列选中项的索引，参数columnIndex，返回值optionIndex',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>下拉时触发的事件</p>',
            'en-US': 'Click',
          },
          demoId: 'methods',
        },
        {
          name: 'getColumnValue',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>获取对应列选中的值，参数columnIndex，返回值value</p>',
            'en-US': 'Click',
          },
          demoId: 'methods',
        },
        {
          name: 'getColumnValues',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>获取对应列中所有选项，参数columnIndex，返回值values</p>',
            'en-US': 'Click',
          },
          demoId: 'methods',
        },
        {
          name: 'getIndexes',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>获取所有列选中值对应的索引</p>',
            'en-US': 'Click',
          },
          demoId: 'column',
        },
        {
          name: 'getValues',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>获取所有列选中的值</p>',
            'en-US': 'Click',
          },
          demoId: 'column',
        },
      ],
      events: [
        {
          name: 'cancel',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>点击取消按钮时触发</p>',
            'en-US': 'Click',
          },
          demoId: '',
        },
        {
          name: 'change',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>选项改变时触发。</p>',
            'en-US': 'Click',
          },
          demoId: 'change',
        },
        {
          name: 'confirm',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>点击确定按钮时触发</p>',
            'en-US': 'Click',
          },
          demoId: 'cancel',
        },
      ],
      slot: [
        {
          name: 'toolbar',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>自定义工具栏</p>',
            'en-US': 'toolbar',
          },
          demoId: 'toolbar',
        },
      ],
    },
  ],
}
