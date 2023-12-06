export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'base',
      'name': { 'zh-CN': '基本使用', 'en-US': 'Basic Use' },
      'desc': {
        'zh-CN': '通过<code>design</code>属性配置自定义不同设计规范的图标和逻辑。',
        'en-US':
          'Icons and logic for different design specifications can be customized through the <code>design</code> attribute configuration.'
      },
      'codeFiles': ['base.vue']
    },
    {
      'demoId': 'text-direct',
      'name': { 'zh-CN': '改变文字方向', 'en-US': 'Change the direction of text' },
      'desc': {
        'zh-CN':
          '有时, 我们需要改变文字的排列方向, 例如我们在排列阿拉伯语是就需要<code>RTL</code>而非<code>LTR</code><code>config-provider</code>也考虑到了这点,只需要覆写<code>design.direction</code>即可。',
        'en-US':
          'Sometimes, we need to change the direction of the text arrangement. For example, when arranging Arabic, we need <code>RTL</code> instead of <code>LTR</code>. <code>config provider</code>,This is also taken into consideration, and we only need to overwrite the <code>design. direction</code>.'
      },
      'codeFiles': ['text-direct.vue']
    },
    {
      'demoId': 'tag',
      'name': { 'zh-CN': '自定义标签', 'en-US': 'Custom tags' },
      'desc': {
        'zh-CN': '通过<code>tag</code>可以自定义容器标签。',
        'en-US': 'Container labels can be customized through<code>tag</code>.'
      },
      'codeFiles': ['tag.vue']
    }
  ],
  apis: [
    {
      'name': 'config-provider',
      'type': 'component',
      'props': [
        {
          'name': 'design',
          'type': 'ConfigProviderProps',
          'defaultValue': '',
          'desc': {
            'zh-CN': '规范，可以通过该属于定制一些自定义的交互规范',
            'en-US': 'Standardization can be achieved by customizing some custom interaction specifications'
          },
          'demoId': 'base'
        },
        {
          'name': 'breakPoints',
          'type': 'breakPoint',
          'defaultValue': "{'xs': 480,'sm': 640,'md': 768,'lg': 1024,'xl': 1280,'2xl': 1536}",
          'desc': { 'zh-CN': '断点, 为Layout提供', 'en-US': 'Breakpoints, providing layout with' },
          'demoId': 'base'
        },
        {
          'name': 'direction',
          'type': "'ltr' | 'rtl'",
          'defaultValue': 'ltr',
          'desc': { 'zh-CN': '文字排版方向', 'en-US': 'Text layout direction' },
          'demoId': 'text-dire'
        },
        {
          'name': 'tag',
          'type': 'object',
          'defaultValue': "{enable: true,name: 'div'}",
          'desc': {
            'zh-CN': '是否被元素包裹, 如果是vue2且没有一个单一节点, 组件会自动创建一个div',
            'en-US':
              'Whether it is wrapped by elements, if it is Vue2 and there is no single node, the component will automatically create a div'
          },
          'demoId': 'base'
        }
      ],
      'events': [],
      'slots': []
    }
  ]
}
