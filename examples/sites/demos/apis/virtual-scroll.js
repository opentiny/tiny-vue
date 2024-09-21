export default {
  mode: ['pc'],
  apis: [
    {
      name: 'virtual-scroll',
      type: 'component',
      props: [
        {
          name: 'buffer',
          type: 'Number',
          defaultValue: '1',
          desc: {
            'zh-CN': '显示区域条数的比例值为缓冲区设置',
            'en-US': 'Scale value of the number of bars in the display area is set for the buffer.'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'data',
          type: 'Array',
          defaultValue: '[]',
          desc: {
            'zh-CN': '需要展示的数据',
            'en-US': 'Data to be displayed'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'direction',
          type: 'String',
          defaultValue: 'vertical',
          desc: {
            'zh-CN': '滚动方向',
            'en-US': 'scrolling direction'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'estimatedItemSize',
          type: 'Number',
          defaultValue: '--',
          desc: {
            'zh-CN': '是否启动动态尺寸，你不需关注每个项目的大小，它会自动计算',
            'en-US':
              'Whether or not dynamic sizing is activated, you dont need to be concerned about the size of each item, it will be automatically calculated.'
          },
          mode: ['pc'],
          pcDemo: 'dynamic-height'
        },
        {
          name: 'itemSize',
          type: 'Number',
          defaultValue: '--',
          desc: {
            'zh-CN': '以像素为单位定义每个项目的高度，用于计算滚动条的大小和位置。',
            'en-US':
              'Defines the height of each item in pixels, which is used to calculate the size and position of the scrollbar.'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'itemIndex',
          type: 'String',
          defaultValue: 'id',
          desc: {
            'zh-CN': '默认滚动的index',
            'en-US': 'Default scrolling index'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'prerender',
          type: 'Number',
          defaultValue: '0',
          desc: {
            'zh-CN': 'SSR渲染区域的项目条数',
            'en-US': 'Number of item strips in the SSR rendering area.'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'visibleSize',
          type: 'Number',
          defaultValue: '400',
          desc: {
            'zh-CN': '显示区域的高度/宽度',
            'en-US': 'Height/width of display area.'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        }
      ],
      events: [],
      methods: [
        {
          name: 'scrollToItem',
          type: '(index:number)=> Promise',
          defaultValue: '',
          desc: {
            'zh-CN': '滚动到对应索引的项目',
            'en-US': 'Scroll to the item corresponding to the index.'
          },
          mode: ['pc'],
          pcDemo: 'specified-item'
        }
      ],
      slots: []
    }
  ],
  types: []
}
