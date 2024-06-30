export default {
  mode: ['pc'],
  apis: [
    {
      name: 'skeleton',
      type: 'component',
      props: [
        {
          name: 'animated',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否开启动画',
            'en-US':
              'Customized interface. A Promise object is returned. This parameter is mandatory when the framework service is not used.'
          },
          mode: ['pc'],
          pcDemo: 'animation'
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
          pcDemo: 'loading-completed'
        },
        {
          name: 'rows',
          type: 'number',
          defaultValue: '3',
          desc: {
            'zh-CN': '默认样式，可配置段落显示行数',
            'en-US': 'Default style. The number of lines displayed in a paragraph can be configured'
          },
          mode: ['pc'],
          pcDemo: 'custom-rows'
        },
        {
          name: 'rows-width',
          type: 'number[] | string[]',
          defaultValue: '[]',
          desc: {
            'zh-CN':
              '自定义段落每一行的宽度，数组中的每一项可以为 number 或 string ，当为 number 时，组件会自动增加 px 单位',
            'en-US':
              'Width of each line in a custom paragraph. Each item in the array can be a number or a string. If the value is a number, the component automatically increases the value by px'
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
            'en-US': 'Content displayed after the loading is complete'
          },
          mode: ['pc'],
          pcDemo: 'loading-completed'
        },
        {
          name: 'placeholder',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义骨架屏结构',
            'en-US': 'Custom Skeleton Screen Structure'
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
          defaultValue: "'medium'",
          desc: {
            'zh-CN': '针对 image 和 circle 形态，内置三种大小',
            'en-US':
              'Customized interface. A Promise object is returned. This parameter is mandatory when the framework service is not used.'
          },
          mode: ['pc'],
          pcDemo: 'size'
        },
        {
          name: 'variant',
          typeAnchorName: 'IVariant',
          type: 'IVariant',
          defaultValue: "'square'",
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
