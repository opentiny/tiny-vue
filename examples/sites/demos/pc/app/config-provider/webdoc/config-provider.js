export default {
  column: '2',
  owner: '',
  show: true,
  cloud: true,
  demos: [
    {
      demoId: 'base',
      name: {
        'zh-CN': '基本使用',
        'en-US': 'Basic Use'
      },
      desc: {
        'zh-CN':
          '可通过<code> design </code>属性设置自定义不同设计规范的图标和逻辑，例如：全局配置 Form 表单组件的必填星号是否默认显示、Button 组件的点击后的禁用时间和是否默认圆角。',
        'en-US':
          'Icons and logic for different design specifications can be customized through the <code>design</code> attribute configuration.'
      },
      codeFiles: ['base.vue']
    },
    {
      demoId: 'text-direct',
      name: {
        'zh-CN': '改变文字方向',
        'en-US': 'Change the direction of text'
      },
      desc: {
        'zh-CN':
          '可通过<code>direction="ltr"</code>属性设置文字对齐方向，<code>ltr</code>为左对齐，<code>rtl</code>为右对齐。',
        'en-US':
          'Set the text alignment direction through<code>: direction="ltr"</code>, where<code>ltr</code>is left aligned and<code>rtl</code>is right aligned.'
      },
      codeFiles: ['text-direct.vue']
    },
    {
      demoId: 'tag',
      name: {
        'zh-CN': '自定义标签',
        'en-US': 'Custom tags'
      },
      desc: {
        'zh-CN': '可通过<code>tag</code>属性设置自定义容器标签。',
        'en-US': 'Container labels can be customized through<code>tag</code>.'
      },
      codeFiles: ['tag.vue']
    }
  ],
  features: [
    {
      id: 'text-direction',
      name: '文本方向',
      support: {
        value: true
      },
      description: '支持设置全局文本方向，包括从左到右和从右到左。',
      cloud: {
        value: true
      },
      apis: ['text-direction'],
      demos: ['text-direct']
    },
    {
      id: 'component-config',
      name: '组件配置',
      support: {
        value: true
      },
      description: '支持配置全局组件属性，如标签、按钮等组件的默认属性。',
      cloud: {
        value: true
      },
      apis: ['component-config'],
      demos: ['tag']
    }
  ]
}
