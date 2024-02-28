export default {
  mode: ['pc'],
  apis: [
    {
      name: 'slide-bar',
      type: 'component',
      props: [
        {
          name: 'init-blocks',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN': '初始时需要显示的块数',
            'en-US': 'Number of blocks to be displayed initially'
          },
          mode: ['pc'],
          pcDemo: 'wheel-blocks'
        },
        {
          name: 'sub-tag',
          type: 'string',
          defaultValue: "该属性的默认值为 'li'",
          desc: {
            'zh-CN': '设置组件的子级 Dom 标签',
            'en-US': 'Setting the Dom Label of a Component'
          },
          mode: ['pc'],
          pcDemo: 'custom-tag'
        },
        {
          name: 'tag',
          type: 'string',
          defaultValue: "该属性的默认值为 'ul'",
          desc: {
            'zh-CN': '设置组件的 Dom 标签',
            'en-US': 'Setting the Dom Label of a Component'
          },
          mode: ['pc'],
          pcDemo: 'custom-tag'
        },
        {
          name: 'value',
          type: 'Array',
          defaultValue: '',
          desc: {
            'zh-CN': '调用服务时候获取数据的来源',
            'en-US': 'Data source obtained during service invoking'
          },
          mode: ['pc'],
          pcDemo: 'wheel-blocks'
        },
        {
          name: 'wheel-blocks',
          type: 'number',
          defaultValue: '该属性的默认值为 1',
          desc: {
            'zh-CN': '鼠标滚轮上下滚动的时候，滚动的块数长度',
            'en-US': 'Number of scrolling blocks when the mouse wheel is scrolled up or down'
          },
          mode: ['pc'],
          pcDemo: 'wheel-blocks'
        }
      ],
      events: [
        {
          name: 'before-click',
          type: 'Function(value)',
          defaultValue: '',
          desc: {
            'zh-CN': '滑动点击前触发的事件;event: 原生事件',
            'en-US': 'Event triggered before a user swipes the screen. event: Native event'
          },
          mode: ['pc'],
          pcDemo: 'slide-bar-events'
        },
        {
          name: 'click',
          type: 'Function(data, index)',
          defaultValue: '',
          desc: {
            'zh-CN': '滑动块点击事件;data: 点击的滑块数据，index: 点击的滑块索引值',
            'en-US':
              'Sliding block click event; data: data of the clicked slider, index: index value of the clicked slider'
          },
          mode: ['pc'],
          pcDemo: 'slide-bar-events'
        }
      ],
      methods: [],
      slots: [
        {
          name: 'default',
          defaultValue: '',
          desc: {
            'zh-CN': '默认的作用域插槽',
            'en-US': 'Default scope slot'
          },
          mode: ['pc'],
          pcDemo: 'custom-content'
        }
      ]
    }
  ]
}
