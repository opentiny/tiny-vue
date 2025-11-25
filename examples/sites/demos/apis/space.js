export default {
  mode: ['pc', 'mobile-first'],
  apis: [
    {
      name: 'space',
      type: 'component',
      props: [
        {
          name: 'size',
          type: '[string, number, array]',
          defaultValue: "'small'",
          desc: {
            'zh-CN': '设置间距大小，可为字符串、数字或数组，数组形式为 [横向间距, 纵向间距]',
            'en-US': 'Set the spacing size. Can be a string, number, or an array like [horizontal, vertical]'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'space-size',
          mfDemo: 'space-size'
        },
        {
          name: 'align',
          type: 'string',
          defaultValue: "'stretch'",
          desc: {
            'zh-CN': '设置交叉轴上的对齐方式，对应 CSS align-items 属性',
            'en-US': 'Set the alignment on the cross axis, corresponding to the CSS align-items property'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'space-align',
          mfDemo: 'space-align'
        },
        {
          name: 'justify',
          type: 'string',
          defaultValue: "'start'",
          desc: {
            'zh-CN': '设置主轴上的对齐方式，对应 CSS justify-content 属性',
            'en-US': 'Set the alignment on the main axis, corresponding to the CSS justify-content property'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'space-justify',
          mfDemo: 'space-justify'
        },
        {
          name: 'direction',
          type: 'string',
          defaultValue: "'row'",
          desc: {
            'zh-CN': '设置排列方向，可选值为 row 或 column',
            'en-US': 'Set the layout direction, options are row or column'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'space-direction',
          mfDemo: 'space-direction'
        },
        {
          name: 'wrap',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否自动换行，默认为 false',
            'en-US': 'Whether to wrap to the next line automatically, default is false'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'space-wrap',
          mfDemo: 'space-wrap'
        },
        {
          name: 'order',
          type: 'array',
          defaultValue: '[]',
          desc: {
            'zh-CN': '用于指定子元素的显示顺序，数组的值对应插槽中子节点的索引',
            'en-US':
              'Used to specify the display order of child elements; the array values correspond to the index of slot children'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'space-order',
          mfDemo: 'space-order'
        }
      ],
      events: [],
      methods: [],
      slots: [
        {
          name: 'default',
          defaultValue: '',
          desc: {
            'zh-CN': '用于插入需要布局的子元素',
            'en-US': 'Used to insert child elements to be laid out'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: 'basic-usage'
        }
      ]
    }
  ]
}
