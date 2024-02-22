export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'basic usage'
      },
      desc: {
        'zh-CN': `<p>通过 <code>v-model</code> 绑定变量，设置的变量值为默认选中的 <code>Button</code>，变量值对应 </code>label<code> 属性的值。<br>
          通过 <code>text</code> 也可以配置显示文本，与默认插槽配置纯文本的结果一致<br>
          <code>label</code> 可以是 <code>String、Number 或 Boolean</code>。</p>`,
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['basic-usage.vue']
    },

    {
      demoId: 'slider-button-type',
      name: {
        'zh-CN': '类型设置',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': `<p>通过<code>type</code>属性设置按钮展示类型，可选值为<code>text(默认)、icon</code>。<br>
          可在 SliderButton、SliderButtonGroup 组件上设置 <code>change</code> 事件，当绑定值变化时触发，回调函数为选中的 <code>SliderButton label</code> 值。<p>`,
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['gslider-button-type.vue']
    },
    {
      demoId: 'slider-button-size',
      name: {
        'zh-CN': '尺寸设置',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>可对按钮形式的 <code>SliderButton</code> 或带有边框的<code>SliderButton</code> 设置 <code>size</code> 属性，以改变其尺寸，包括 <code>small(默认)、large</code> 两个尺寸选项。当插入的是图标类型时，还可配置`medium`尺寸。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['slider-button-size.vue']
    },
    {
      demoId: 'custom-content',
      name: {
        'zh-CN': '自定义内容',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过 <code>label</code>或者<code>text</code> 属性可以设置 Radio 的内容<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['custom-content.vue']
    },
    {
      demoId: 'slider-button-options',
      name: {
        'zh-CN': '支持数据渲染',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>可在 <code>SliderButtonGroup</code> 组件上设置 options 属性，可循环配置 <code>SliderButton</code>。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['slider-button-options.vue']
    },
    {
      demoId: 'page-turn',
      name: {
        'zh-CN': '左右翻页',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过设置<code>page-turn</code>属性开启左右翻页<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['page-turn.vue']
    },
    {
      demoId: 'slider-disabled',
      name: {
        'zh-CN': '禁用',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过设置<code>disabled</code>属性开启禁用态<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['slider-disabled.vue']
    }
  ],
  apis: []
}
