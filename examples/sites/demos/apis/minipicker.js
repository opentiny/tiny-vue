export default {
  mode: ['mobile'],
  apis: [
    {
      name: 'MiniPicker',
      type: 'component',
      props: [
        {
          name: 'cancel-button-text',
          type: 'String',
          defaultValue: '取消',
          desc: {
            'zh-CN': '<p>取消按钮内容设置，该属性默认为‘取消’</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'cancel-button-text'
        },
        {
          name: 'columns',
          type: 'Array',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>配置每一列显示的数据</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'multicolumn'
        },
        {
          name: 'confirm-button-text',
          type: 'String',
          defaultValue: '确定',
          desc: {
            'zh-CN': '<p>确定按钮内容设置，该属性默认为‘确定’</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'confirm-button-text'
        },
        {
          name: 'default-index',
          type: 'Number',
          defaultValue: '0',
          desc: {
            'zh-CN': '<p>单列选择时,选择的初始值索引，该属性默认为0</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'defaultindex'
        },
        {
          name: 'item-height',
          type: 'Number',
          defaultValue: '34',
          desc: {
            'zh-CN': '<p>选项高度，该属性默认为34</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'itemheight'
        },
        {
          name: 'swipe-duration',
          type: 'Number',
          defaultValue: '1000',
          desc: {
            'zh-CN': '<p>快速滑动时惯性滚动的时长，单位 ms,该属性默认为1000</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'cancel-button-text'
        },
        {
          name: 'title',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>标题</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'cancel-button-text'
        },
        {
          name: 'value-key',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>选项对象中，选项文字对应的键名，该属性默认为"text"</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: ''
        },
        {
          name: 'visible',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>选择器组件显示或隐藏，该属性默认为false</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'cancel-button-text'
        },
        {
          name: 'visible-item-count',
          type: 'Number',
          defaultValue: '5',
          desc: {
            'zh-CN': '<p>可见的选项个数，该属性默认为5</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'visibleitemcount'
        }
      ],
      events: [
        {
          name: 'cancel',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>点击取消按钮时触发</p>',
            'en-US': 'Click'
          },
          mode: ['mobile'],
          mobileDemo: ''
        },
        {
          name: 'change',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>选项改变时触发。</p>',
            'en-US': 'Click'
          },
          mode: ['mobile'],
          mobileDemo: 'change'
        },
        {
          name: 'confirm',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>点击确定按钮时触发</p>',
            'en-US': 'Click'
          },
          mode: ['mobile'],
          mobileDemo: 'cancel'
        }
      ],
      methods: [
        {
          name: 'getColumnIndex',
          type: '获取对应列选中项的索引，参数columnIndex，返回值optionIndex',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>下拉时触发的事件</p>',
            'en-US': 'Click'
          },
          mode: ['mobile'],
          mobileDemo: 'methods'
        },
        {
          name: 'getColumnValue',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>获取对应列选中的值，参数columnIndex，返回值value</p>',
            'en-US': 'Click'
          },
          mode: ['mobile'],
          mobileDemo: 'methods'
        },
        {
          name: 'getColumnValues',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>获取对应列中所有选项，参数columnIndex，返回值values</p>',
            'en-US': 'Click'
          },
          mode: ['mobile'],
          mobileDemo: 'methods'
        },
        {
          name: 'getIndexes',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>获取所有列选中值对应的索引</p>',
            'en-US': 'Click'
          },
          mode: ['mobile'],
          mobileDemo: 'column'
        },
        {
          name: 'getValues',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>获取所有列选中的值</p>',
            'en-US': 'Click'
          },
          mode: ['mobile'],
          mobileDemo: 'column'
        }
      ],
      slots: [
        {
          name: 'toolbar',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>自定义工具栏</p>',
            'en-US': 'toolbar'
          },
          mode: ['mobile'],
          mobileDemo: 'toolbar'
        }
      ]
    }
  ]
}
