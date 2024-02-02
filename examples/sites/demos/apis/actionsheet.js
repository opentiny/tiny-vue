export default {
  mode: ['mobile'],
  apis: [
    {
      name: 'actionsheet ',
      type: 'component',
      props: [
        {
          name: 'ellipsis',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>是否省略显示，该属性默认为false</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'ellipsis'
        },
        {
          name: 'menus',
          type: 'Array',
          defaultValue: '50',
          desc: {
            'zh-CN': '<p>列表数组</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'ellipsis'
        },
        {
          name: 'visible',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>上划列表显示隐藏,该属性默认为false</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'ellipsis'
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
          mode: ['mobile'],
          mobileDemo: 'clickfn'
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
          mode: ['mobile'],
          mobileDemo: 'slot-item'
        }
      ],
      slots: [
        {
          name: 'action',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>自定义操作项内容</p>',
            'en-US': 'Click'
          },
          mode: ['mobile'],
          mobileDemo: 'slot-action'
        },
        {
          mode: []
        }
      ]
    }
  ]
}
