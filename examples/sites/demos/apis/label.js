export default {
  mode: ['mobile'],
  apis: [
    {
      name: 'Label',
      type: 'component',
      props: [
        {
          mode: []
        },
        {
          name: 'decimal',
          type: 'number',
          defaultValue: '2',
          desc: {
            'zh-CN': '<p>小数点的位数</p>',
            'en-US': 'decimal'
          },
          mode: ['mobile'],
          mobileDemo: 'decimal'
        },
        {
          name: 'ellipsis',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>支持超出省略号显示的行数</p>',
            'en-US': 'ellipsis'
          },
          mode: ['mobile'],
          mobileDemo: 'ellipsis'
        },
        {
          name: 'is-required',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>是否添加*号</p>',
            'en-US': 'is required'
          },
          mode: ['mobile'],
          mobileDemo: 'required'
        },
        {
          name: 'label',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>文本</p>',
            'en-US': 'text'
          },
          mode: ['mobile'],
          mobileDemo: 'base'
        },
        {
          name: 'limit',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>限制文本的字数</p>',
            'en-US': 'text limit'
          },
          mode: ['mobile'],
          mobileDemo: 'limit'
        },
        {
          name: 'position',
          type: 'string',
          defaultValue: 'left',
          desc: {
            'zh-CN': '<p>整行显示时的位置:left,center,right</p>',
            'en-US': 'position of whole line dispaly'
          },
          mode: ['mobile'],
          mobileDemo: 'position'
        },
        {
          name: 'size',
          type: 'string',
          defaultValue: 'normal',
          desc: {
            'zh-CN': '<p>文本大小:large,normal,small,mini</p>',
            'en-US': 'text size'
          },
          mode: ['mobile'],
          mobileDemo: 'size'
        },
        {
          name: 'type',
          type: 'string',
          defaultValue: 'base',
          desc: {
            'zh-CN': '<p>类型 \n base, number</p>',
            'en-US': 'type'
          },
          mode: ['mobile'],
          mobileDemo: 'type'
        },
        {
          name: 'wholeline',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>是否整行显示</p>',
            'en-US': 'whole line display'
          },
          mode: ['mobile'],
          mobileDemo: 'wholeline'
        }
      ],
      events: [],
      methods: [],
      slots: []
    }
  ]
}
