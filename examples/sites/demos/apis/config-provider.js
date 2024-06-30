export default {
  mode: ['pc'],
  apis: [
    {
      name: 'config-provider',
      type: 'component',
      props: [
        {
          name: 'design',
          type: 'ConfigProviderProps',
          defaultValue: '',
          desc: {
            'zh-CN': '规范，可以通过该属于定制一些自定义的交互规范',
            'en-US': 'Standardization can be achieved by customizing some custom interaction specifications'
          },
          mode: ['pc'],
          pcDemo: 'base'
        },
        {
          name: 'direction',
          type: "'ltr' | 'rtl'",
          defaultValue: 'ltr',
          desc: {
            'zh-CN': '文字样式方向',
            'en-US': 'Text layout direction'
          },
          mode: ['pc'],
          pcDemo: 'text-direct'
        },
        {
          name: 'tag',
          type: 'object',
          defaultValue: "{enable: true,name: 'div'}",
          desc: {
            'zh-CN': '是否被元素包裹, 如果是vue2且没有一个单一节点, 组件会自动创建一个div',
            'en-US':
              'Whether it is wrapped by elements, if it is Vue2 and there is no single node, the component will automatically create a div'
          },
          mode: ['pc'],
          pcDemo: 'tag'
        }
      ],
      events: [],
      methods: [],
      slots: []
    }
  ]
}
