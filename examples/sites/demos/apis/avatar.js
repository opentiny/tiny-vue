export default {
  mode: ['mobile'],
  apis: [
    {
      name: 'avatar',
      type: 'component',
      props: [
        {
          name: 'alt',
          type: 'Function',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置图片的备用文字描述</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'avatar-src-set'
        },
        {
          name: 'error',
          type: 'Function()',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置img 标签的 onerror 函数</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'avatar-src-set'
        },
        {
          name: 'fit',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置图片的 object-fit</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'avatar-src-set'
        },
        {
          name: 'icon',
          type: 'Object',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置显示内容为icon</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'avatar-src-set'
        },
        {
          name: 'shape',
          type: 'String',
          defaultValue: 'circle',
          desc: {
            'zh-CN': '<p>该属性的可选值为 circle | square</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'avatar-src-set'
        },
        {
          name: 'size',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>该属性的可选值为 large|medium|small</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'avatar-size'
        },
        {
          name: 'src',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置图片链接地址</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'avatar-src-set'
        },
        {
          name: 'src-set',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置源图容器</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'avatar-src-set'
        }
      ],
      events: [],
      methods: [],
      slots: [
        {
          name: 'default',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>组件默认插槽</p>',
            'en-US': 'Click'
          },
          mode: ['mobile'],
          mobileDemo: 'avatar-src-set'
        }
      ]
    }
  ]
}
