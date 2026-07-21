export default {
  column: '2',
  owner: '',
  show: true,
  cloud: true,
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN':
          '通过 <code>v-model</code> 绑定变量，设置的变量值为默认选中的 <code>Button</code> ，变量值对应 <code>label</code> 属性的值。通过 <code>text</code> 也可以配置显示文本，与默认插槽配置纯文本的结果一致',
        'en-US': ''
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'slider-button-type',
      name: {
        'zh-CN': '类型设置',
        'en-US': 'type'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>type</code> 属性设置按钮展示类型，可选值为 <code>text</code> (默认)、<code>icon</code>  </p>\n <p>可在 <code>SliderButton</code> 、 <code>SliderButtonGroup</code>  组件上设置 <code>change</code> 事件，当绑定值变化时触发，回调函数为选中的 <code>SliderButton label</code> 值</p>',
        'en-US': '<p></p>\n'
      },
      codeFiles: ['slider-button-type.vue']
    },
    {
      demoId: 'slider-button-size',
      name: {
        'zh-CN': '尺寸设置',
        'en-US': 'size'
      },
      desc: {
        'zh-CN':
          '可对按钮形式的 <code>SliderButton</code> 或带有边框的 <code>SliderButton</code> 设置 <code>size</code> 属性，以改变其尺寸，包括 <code>small</code> (默认)、<code>large</code> 两个尺寸选项。当插入的是图标类型时，还可配置 <code>medium</code> 尺寸。',
        'en-US': ''
      },
      codeFiles: ['slider-button-size.vue']
    },
    {
      demoId: 'custom-content',
      name: {
        'zh-CN': '自定义内容',
        'en-US': 'custom content'
      },
      desc: {
        'zh-CN': '<p>通过 <code>label</code> 或者 <code>text</code> 属性可以设置 <code>Button</code> 的内容</p>',
        'en-US': '<p></p>'
      },
      codeFiles: ['custom-content.vue']
    },
    {
      demoId: 'slider-button-options',
      name: {
        'zh-CN': '支持数据渲染',
        'en-US': 'Prompt current value'
      },
      desc: {
        'zh-CN':
          '<p>可在 <code>SliderButtonGroup</code> 组件上设置 <code>options</code> 属性，可循环配置 <code>SliderButton</code> </p>',
        'en-US': '<p></p>\n'
      },
      codeFiles: ['slider-button-options.vue']
    },
    {
      demoId: 'page-turn',
      name: {
        'zh-CN': '左右翻页',
        'en-US': 'page-turn'
      },
      desc: {
        'zh-CN': '<p>通过设置 <code>page-turn</code> 属性开启左右翻页</p>',
        'en-US': '<p></p>'
      },
      codeFiles: ['page-turn.vue']
    },
    {
      demoId: 'slider-disabled',
      name: {
        'zh-CN': '禁用',
        'en-US': 'disabled'
      },
      desc: {
        'zh-CN': '<p>通过设置 <code>disabled</code> 属性开启禁用态</p>',
        'en-US': '<p></p>'
      },
      codeFiles: ['slider-disabled.vue']
    }
  ],
  features: [
    {
      id: 'basic',
      name: '基本用法',
      support: {
        value: true
      },
      description: '表单组件-BlockGroup 滑动按钮组。',
      cloud: {
        value: true
      },
      apis: [],
      demos: ['basic-usage']
    },
    {
      id: 'slider-button-type',
      name: '类型设置',
      support: {
        value: true
      },
      description: '表单组件-BlockGroup 类型。',
      cloud: {
        value: true
      },
      apis: ['slider-button-type'],
      demos: ['slider-button-type']
    },
    {
      id: 'slider-button-size',
      name: '尺寸设置',
      support: {
        value: true
      },
      description: '表单组件-BlockGroup 尺寸。',
      cloud: {
        value: true
      },
      apis: ['slider-button-size'],
      demos: ['slider-button-size']
    },
    {
      id: 'custom-content',
      name: '自定义内容',
      support: {
        value: true
      },
      description: '表单组件-BlockGroup 文本内容。',
      cloud: {
        value: true
      },
      apis: ['custom-content'],
      demos: ['custom-content']
    }
  ]
}
