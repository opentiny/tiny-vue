export default {
  mode: ['pc'],
  apis: [
    {
      name: 'skeleton',
      type: 'component',
      props: [
        {
          name: 'active',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否开启动画',
            'en-US':
              'Customized interface. A Promise object is returned. This parameter is mandatory when the framework service is not used.'
          },
          mode: ['pc'],
          pcDemo: 'fine-grained-mode'
        },
        {
          name: 'avatar',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否显示头像',
            'en-US':
              'Customized interface. A Promise object is returned. This parameter is mandatory when the framework service is not used.'
          },
          mode: ['pc'],
          pcDemo: 'complex-demo'
        },
        {
          name: 'loading',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否显示骨架屏，传 false 时会展示加载完成后的内容',
            'en-US':
              'Customized interface. A Promise object is returned. This parameter is mandatory when the framework service is not used.'
          },
          mode: ['pc'],
          pcDemo: 'custom-layout'
        },
        {
          name: 'rows',
          type: 'number',
          defaultValue: '3',
          desc: {
            'zh-CN': '默认排版，可配置段落显示行数',
            'en-US':
              'Customized interface. A Promise object is returned. This parameter is mandatory when the framework service is not used.'
          },
          mode: ['pc'],
          pcDemo: 'custom-rows'
        },
        {
          name: 'rows-width',
          type: 'number[] | string[]',
          defaultValue: '[]',
          desc: {
            'zh-CN': '自定义段落每一行的宽度',
            'en-US':
              'Customized interface. A Promise object is returned. This parameter is mandatory when the framework service is not used.'
          },
          mode: ['pc'],
          pcDemo: 'custom-paragraph-width'
        }
      ],
      events: [],
      methods: [],
      slots: [
        {
          name: 'default',
          defaultValue: '',
          desc: {
            'zh-CN': '加载完成后显示的内容',
            'en-US': 'Option default slot'
          },
          mode: ['pc'],
          pcDemo: 'custom-layout'
        },
        {
          name: 'placeholder',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义骨架屏结构',
            'en-US': 'Option default slot'
          },
          mode: ['pc'],
          pcDemo: 'custom-layout'
        }
      ]
    },
    {
      name: 'skeleton-item',
      type: 'component',
      props: [
        {
          name: 'size',
          typeAnchorName: 'ISize',
          type: 'ISize',
          defaultValue: 'medium',
          desc: {
            'zh-CN': '针对 image 和 circle 形态，内置三种大小',
            'en-US':
              'Customized interface. A Promise object is returned. This parameter is mandatory when the framework service is not used.'
          },
          mode: ['pc'],
          pcDemo: 'fine-grained-mode'
        },
        {
          name: 'variant',
          typeAnchorName: 'IVariant',
          type: 'IVariant',
          defaultValue: 'square',
          desc: {
            'zh-CN': '骨架屏形态',
            'en-US':
              'Customized interface. A Promise object is returned. This parameter is mandatory when the framework service is not used.'
          },
          mode: ['pc'],
          pcDemo: 'fine-grained-mode'
        }
      ],
      events: [],
      methods: [],
      slots: []
    }
  ],
  types: [
    {
      name: 'IVariant',
      type: 'type',
      code: `type IVariant = 'image' | 'circle' | 'square'`
    },
    {
      name: 'ISize',
      type: 'type',
      code: `type ISize = 'large' | 'medium' | 'small'`
    }
  ]
}
