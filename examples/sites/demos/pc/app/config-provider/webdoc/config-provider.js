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
          '通过 <code>design</code> 属性可以自定义不同设计规范的图标和逻辑。从 3.23.0 版本开始，支持全局配置组件的任意 <code>props</code> 属性（仅支持双层组件），例如：可以全局配置 Form 组件必填项星号的默认显示状态、Button 组件的点击防抖时间以及是否默认显示圆角等。',
        'en-US':
          'You can use the <code> design </code> property to set custom icons and logic for different design specifications, starting from version 3.23.0, the global configuration component (only supports double-layer components) supports the function of any <code> props </code> attribute, for example: the default display of the required star of the global configuration Form form component, the disabled time after the click of the Button component, and whether the default roundness is enabled.'
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
    },
    {
      demoId: 'theme',
      name: {
        'zh-CN': '自定义主题色',
        'en-US': 'Custom Colors'
      },
      desc: {
        'zh-CN': '可通过<code>theme</code>属性设置自定义主题色常量。',
        'en-US': 'You can use the <code>theme</code> property to set a custom theme color constant.'
      },
      codeFiles: ['theme.vue'],
      hideSaas: true // 当环境变量为tiny-vue-saas时隐藏该属性
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
