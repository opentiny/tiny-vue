export default {
  mode: ['pc'],
  apis: [
    {
      name: 'scroll-text',
      type: 'component',
      props: [
        {
          name: 'direction',
          type: "'up' | 'left' | 'down' | 'right'",
          defaultValue: "'left'",
          desc: {
            'zh-CN': '滚动的方向',
            'en-US': 'Scrolling direction'
          },
          mode: ['pc'],
          pcDemo: 'scroll-direction'
        },
        {
          name: 'hover-stop',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': 'hover 滚动是否停止',
            'en-US': 'Whether to stop scrolling.'
          },
          mode: ['pc'],
          pcDemo: 'hover-stop'
        },
        {
          name: 'text',
          type: 'string',
          defaultValue: "'ScrollText'",
          desc: {
            'zh-CN': '滚动的文本内容',
            'en-US': 'Scrolled text content'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'time',
          type: 'number',
          defaultValue: '5',
          desc: {
            'zh-CN': '整个滚动过程所用的时间',
            'en-US': 'Time taken for scrolling'
          },
          mode: ['pc'],
          pcDemo: 'scroll-time'
        }
      ],
      events: [],
      methods: [],
      slots: [
        {
          name: 'default',
          defaultValue: '',
          desc: {
            'zh-CN': '默认插槽，滚动的内容的插槽',
            'en-US': 'Default slot, the slot for scrolling content'
          },
          mode: ['pc'],
          pcDemo: 'custom-scroll-text'
        }
      ]
    }
  ]
}
